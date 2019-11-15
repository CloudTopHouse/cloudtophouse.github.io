# Docker Compose 网络设置

## 概述

默认情况下，Compose 会为我们的应用创建一个网络，服务的每个容器都会加入该网络中。这样，容器就可被该网络中的其他容器访问，不仅如此，**该容器还能以服务名称作为 Hostname 被其他容器访问**。

默认情况下，应用程序的网络名称基于 Compose 的工程名称，而项目名称基于 `docker-compose.yml` 所在目录的名称。如需修改工程名称，可使用 `--project-name` 标识或 `COMPOSE_PORJECT_NAME` 环境变量。

假如一个应用程序在名为 myapp 的目录中，并且 `docker-compose.yml` 如下所示：

```yaml
version: '2'
services:
  web:
    build: .
    ports:
      - "8000:8000"
  db:
    image: postgres
```

当我们运行 `docker-compose up` 时，将会执行以下几步：

- 创建一个名为 **myapp_default** 的网络
- 使用 web 服务的配置创建容器，它以 **web** 这个名称加入网络 myapp_default
- 使用 db 服务的配置创建容器，它以 **db** 这个名称加入网络 myapp_default

容器间可使用服务名称（web 或 db）作为 Hostname 相互访问。例如，web 这个服务可使用 `postgres://db:5432` 访问 db 容器。

当服务的配置发生更改时，可使用 `docker-compose up` 命令更新配置。此时，Compose 会删除旧容器并创建新容器。新容器会以不同的 IP 地址加入网络，名称保持不变。任何指向旧容器的连接都会被关闭，容器会重新找到新容器并连接上去。

## 使用 links

默认情况下，服务之间可使用服务名称相互访问。links 允许我们定义一个别名，从而使用该别名访问其他服务。

```yaml
version: '2'
services:
  web:
    build: .
    links:
      - "db:database"
  db:
    image: postgres
```

## 自定义网络

一些场景下，默认的网络配置满足不了我们的需求，此时我们可使用 networks 命令自定义网络。networks 命令允许我们创建更加复杂的网络拓扑并指定自定义网络驱动和选项。不仅如此，我们还可使用 networks 将服务连接到不是由 Compose 管理的、外部创建的网络。

```yaml
version: '2'
services:
  proxy:
    build: ./proxy
    networks:
      - front
  app:
    build: ./app
    networks:
      - front
      - back
  db:
    image: postgres
    networks:
      - back
networks:
  front:
    # Use a custom driver
    driver: custom-driver-1
  back:
    # Use a custom driver which takes special options
    driver: custom-driver-2
    driver_opts:
      foo: "1"
      bar: "2"
```

其中，proxy 服务与 db 服务隔离，两者分别使用自己的网络；app 服务可与两者通信。使用 networks 命令，即可方便实现服务间的网络隔离与连接。

## 配置默认网络

```yaml
version: '2'
services:
  web:
    build: .
    ports:
      - "8000:8000"
  db:
    image: postgres
networks:
  default:
    # Use a custom driver
    driver: custom-driver-1
```

这样，就可为该应用指定自定义的网络驱动

## 已存在的网络

我们可以预先创建一个名为 myapp 的网络，让 Compose 加入这个新创建的网络，使所有 Compose 可以通信，此时使用 external 选项。

```bash
# 创建网络
docker network create <Network Name>
# 查看已存在的网络
docker network list
```

```yaml
networks:
  default:
    external:
      name: myapp
```



## 一次构建，到处运行

请参考本节视频