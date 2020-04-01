# Docker Compose 部署 Nginx



## docker-compose.yml内容

```yaml
version: '3.1'
services:
  nginx:
    restart: always
    image: nginx:1.16.0
    container_name: nginx
    ports:
      - 80:80
      - 443:443
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d                      #映射配置文件所在目录
      - ./nginx/logs:/var/log/nginx                           #映射日志文件所在目录
      - ./nginx/html:/etc/nginx/html/html                     #映射nginx的网页目录
      - ./nginx/cert:/etc/nginx/cert                          #映射https证书目录
```



## 启动容器

执行以下命令来启动容器

```bash
docker-compose up -d
```



> **说明**
>
> 1. 我们的nginx配置文件在`/usr/local/docker/nginx/conf.d`这个目录
> 2. `proxy_pass http://xxx.xxx.xxx.xx:8080;` 这个的配置是有讲究的。 **这里需要说明一下,由于docker的网络问题，我们填127.0.0.1是不可行的。因为127.0.0.1是docker容器内的网络，不是我们宿主机的网络，所以就不能指向正确的路径。我们需要填内网的ip地址例如:192.168.1.222，这样才是可以行的**



## 容器内nginx.conf文件内容如下：

```json

user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```

注意配置文件的最后一条配置：`include /etc/nginx/conf.d/*.conf;`这个配置意思就是要包含`/etc/nginx/conf.d`目录下的所有conf配置文件，所以我们的配置文件就最好放到这个目录下。



## `default.conf`文件内容如下：

在/etc/nginx/conf.d/目录下，默认只有一个default.conf，内容如下：

``` json
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```



## nginx配置ssl

1. 从阿里云上购买免费的SSL证书 [购买链接:https://www.aliyun.com/product/cas](https://www.aliyun.com/product/cas) 

2. 下载证书

3. 配置`default.conf`。其实这一步也是超级简单的，我直接贴上代码，在代码里面说明

``` json
server {
       listen 80;
       listen 443 ssl;#这个是https访问的端口
       server_name k.lengff.xyz;#域名地址


       #增加ssl
       ssl on;                 #如果强制HTTPs访问，这行要打开
       ssl_certificate         /etc/nginx/cert/klengff.pem;#证书公钥文件路径
       ssl_certificate_key     /etc/nginx/cert/klengff.key;#证书私钥文件路径
       
       ssl_session_cache    shared:SSL:1m;
       ssl_session_timeout  5m; #5分钟session会话保持
       
       ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;# 指定密码为openssl支持的格式       
       ssl_ciphers  HIGH:!ADH:!EXPORT56:RC4+RSA:+MEDIUM;  # 密码加密方式
       ssl_prefer_server_ciphers on;   #依赖SSLv3和TLSv1协议的服务器密码将优先于客户端密码
           
       location / {
           #这里需要说明一下,由于docker的网络问题,我们填127.0.0.1是不可行的
           #因为127.0.0.1是docker容器内的网络,不是我们宿主机的网络,所以就不能指向正确的路径
           #我们需要填内网的ip地址例如:192.168.1.222,这样才是可以行的
           proxy_pass http://xxx.xxx.xxx.xx:8080;
           proxy_set_header   Host             $host;
           proxy_set_header   X-Real-IP        $remote_addr;
           proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
       }
       error_page 404          /404.html;
   }
```
