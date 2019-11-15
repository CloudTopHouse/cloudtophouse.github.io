# Docker Compose 实战 Redis

`docker-compose.yml`文件中的内容如下：

```yaml
version: '3.1'
services:
  redis:
    restart: always
    image: redis
    container_name: redis
    #端口映射
    ports:
      - 6379:6379
    #执行的命令,启动redis服务并添加密码为：123456,并开启redis的持久化
    command: redis-server --requirepass 123456 --appendonly yes
    #目录映射
    volumes:
      - ./redis/data:/data
      - ./redis/redis.conf:/usr/local/etc/redis/redis.conf
```



### redis.conf文件内容如下：

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



### 

