# 配置 Docker Registry 客户端

## 概述

我们的教学案例使用的是 Ubuntu Server 16.04 LTS 版本，属于 `systemd` 系统，需要在 `/etc/docker/daemon.json` 中增加如下内容（如果文件不存在请新建该文件）

```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
  ],
  "insecure-registries": [
    "IP地址:5000"
  ]
}
```

> 注意：该文件必须符合 json 规范，否则 Docker 将不能启动。
>
> registry-mirrors 配置的是Docker镜像加速地址
>
> insecure-registries 则配置的是本地Docker镜像仓库非ssl的镜像地址<例如 "192.168.75.133:5000">

之后重新启动服务。

```bash
$ sudo systemctl daemon-reload
$ sudo systemctl restart docker
```

## 检查客户端配置是否生效

使用 `docker info` 命令手动检查，如果从配置中看到如下内容，说明配置成功（192.168.75.133 为教学案例 IP）

```text
Insecure Registries:
 192.168.75.133:5000
 127.0.0.0/8
```

## 测试镜像上传

我们以 Nginx 为例测试镜像上传功能

```bash
## 拉取一个镜像
docker pull nginx

## 查看全部镜像
docker images

## 标记本地镜像并指向目标仓库（ip:port/image_name:tag，该格式为标记版本号）
docker tag nginx 192.168.75.133:5000/nginx

## 提交镜像到仓库
docker push 192.168.75.133:5000/nginx
```

## 查看全部镜像

```text
curl -XGET http://192.168.75.133:5000/v2/_catalog
```

## 查看指定镜像

以 Nginx 为例，查看已提交的列表

```text
curl -XGET http://192.168.75.133:5000/v2/nginx/tags/list
```

## 测试拉取镜像

- 先删除镜像

```text
docker rmi nginx
docker rmi 192.168.75.133:5000/nginx
```

- 再拉取镜像

```text
docker pull 192.168.75.133:5000/nginx
```





## Docker开启远程API

如果只是在Docker本地服务器上操作的话，是不需要什么特殊配置的。但是通常情况下，我们都是需要在远程，通过一些工具来完成镜像文件上传的，所以，我们就需要开启Docker远程API，来达到我们远程操作的目的。



### 用vim编辑器修改docker.service文件

```shell
vi /usr/lib/systemd/system/docker.service
```

需要修改的部分：

```shell
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```

修改后的部分：

```shell
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock
```

### 让Docker支持http上传镜像

```shell
echo '{ "insecure-registries":["192.168.75.133:5000"] }' > /etc/docker/daemon.json
```

修改后的`daemon.json` 文件内容如下：
```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
  ],
  "insecure-registries": [
    "192.168.75.133:5000"
  ]
}
```


### 重新启动Docker服务

```shell
systemctl stop docker
systemctl start docker
```

### 开启防火墙的Docker构建端口

```shell
firewall-cmd --zone=public --add-port=2375/tcp --permanent
firewall-cmd --reload
```





## 使用Maven构建Docker镜像

接下来我们就使用工具来完成项目的Docker镜像的构建。



### pom.xml中添加docker-maven-plugin依赖

```xml
<plugin>
    <groupId>com.spotify</groupId>
    <artifactId>docker-maven-plugin</artifactId>
    <version>1.1.0</version>
    <executions>
        <execution>
            <id>build-image</id>
            <phase>package</phase>
            <goals>
                <goal>build</goal>
            </goals>
        </execution>
    </executions>
    <configuration>
        <imageName>crays/${project.artifactId}:${project.version}</imageName>
        <dockerHost>http://192.168.75.133:2375</dockerHost>
        <baseImage>java:8</baseImage>
        <entryPoint>["java", "-jar","/${project.build.finalName}.jar"]
        </entryPoint>
        <resources>
            <resource>
                <targetPath>/</targetPath>
                <directory>${project.build.directory}</directory>
                <include>${project.build.finalName}.jar</include>
            </resource>
        </resources>
    </configuration>
</plugin>
```

相关配置说明：

- executions.execution.phase:此处配置了在maven打包应用时构建docker镜像；
- imageName：用于指定镜像名称，mall-tiny是仓库名称，`${project.artifactId}`为镜像名称，`${project.version}`为仓库名称；
- dockerHost：打包后上传到的docker服务器地址；
- baseImage：该应用所依赖的基础镜像，此处为java；
- entryPoint：docker容器启动时执行的命令；
- resources.resource.targetPath：将打包后的资源文件复制到该目录；
- resources.resource.directory：需要复制的文件所在目录，maven打包的应用jar包保存在target目录下面；
- resources.resource.include：需要复制的文件，打包好的应用jar包。



### 注意修改项目的application.yml

> 可以把docker中的容器看作独立的虚拟机，项目要访问数据库，一定要记得修改项目的配置文件application.yml，将localhost改为数据库所在机器的IP地址。



### 使用IDEA打包项目并构建镜像

> 注意：依赖的基础镜像需要先行下载，否则会出现构建镜像超时的情况，比如我本地并没有java8的镜像，就需要先把镜像pull下来，再用maven插件进行构建。

- 执行maven的package命令:

  ![展示图片](https://user-gold-cdn.xitu.io/2019/6/18/16b6ab9e46c1fb71?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

- 构建成功:

  ![展示图片](https://user-gold-cdn.xitu.io/2019/6/18/16b6ab9e467d5bf5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

- 镜像仓库已有该镜像：

  ![展示图片](https://user-gold-cdn.xitu.io/2019/6/18/16b6ab9e480f3475?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

