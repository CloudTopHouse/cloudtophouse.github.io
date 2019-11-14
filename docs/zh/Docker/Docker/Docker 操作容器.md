# Docker 操作容器

## 启动容器

所需要的命令主要为 `docker run`。例如，下面的命令输出一个 “Hello World”，之后终止容器。

```bash
docker run ubuntu:16.04 /bin/echo 'Hello world'Hello world
```

当利用 `docker run` 来创建容器时，Docker 在后台运行的标准操作包括：

- 检查本地是否存在指定的镜像，不存在就从公有仓库下载
- 利用镜像创建并启动一个容器
- 分配一个文件系统，并在只读的镜像层外面挂载一层可读写层
- 从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去
- 从地址池配置一个 ip 地址给容器
- 执行用户指定的应用程序
- 执行完毕后容器被终止

## 终止容器

可以使用 `docker container stop` 来终止一个运行中的容器。此外，当 Docker 容器中指定的应用终结时，容器也自动终止。

例如对于只启动了一个终端的容器，用户通过 `exit` 命令或 `ctrl + d` 来退出终端时，所创建的容器立刻终止。终止状态的容器可以用 `docker container ls -a` 命令看到。例如

```bash
docker container ls -a

# 输出如下
CONTAINER ID        IMAGE                    COMMAND                CREATED             STATUS                          PORTS               NAMES
ba267838cc1b        ubuntu:14.04             "/bin/bash"            30 minutes ago      Exited (0) About a minute ago                       trusting_newton
98e5efa7d997        training/webapp:latest   "python app.py"        About an hour ago   Exited (0) 34 minutes ago                           backstabbing_pike
```

## 启动已终止容器

处于终止状态的容器，可以通过 `docker container start` 命令来重新启动。此外，`docker container restart` 命令会将一个运行态的容器终止，然后再重新启动它。

```bash
docker container start [container ID or NAMES]
```

## 守护态运行

更多的时候，需要让 Docker 在后台运行而不是直接把执行命令的结果输出在当前宿主机下。此时，可以通过添加 `-d` 参数来实现。如果不使用 `-d` 参数运行容器。

```bash
docker run ubuntu:16.04 /bin/sh -c "while true; do echo hello world; sleep 1; done"

# 输出如下
hello world
hello world
hello world
hello world
```

容器会把输出的结果 (STDOUT) 打印到宿主机上面，如果使用了 `-d` 参数运行容器。

```bash
docker run -d ubuntu:17.10 /bin/sh -c "while true; do echo hello world; sleep 1; done"

# 输出如下
77b2dc01fe0f3f1265df143181e7b9af5e05279a884f4776ee75350ea9d8017a
```

此时容器会在后台运行并不会把输出的结果 (STDOUT) 打印到宿主机上面(输出结果可以用 `docker logs` 查看)。

> **注意：** 容器是否会长久运行，是和 `docker run` 指定的命令有关，和 `-d` 参数无关。

## 容器日志

要获取容器的输出信息，可以通过 `docker container logs` 命令。

```bash
docker container logs [container ID or NAMES]

# 输出如下
hello world
hello world
hello world
```

## 进入容器

在使用 `-d` 参数时，容器启动后会进入后台。某些时候需要进入容器进行操作，`docker exec` 命令能让我们以交互的方式进入容器。

`docker exec` 后边可以跟多个参数，这里主要说明 `-i` `-t` 参数。只用 `-i` 参数时，由于没有分配伪终端，界面没有我们熟悉的 Linux 命令提示符，但命令执行结果仍然可以返回。当 `-i` `-t` 参数一起使用时，则可以看到我们熟悉的 Linux 命令提示符。

```bash
docker exec -it 69d1 bashroot@69d137adef7a:/#
```

如果从这个 stdin 中 exit，不会导致容器的停止。更多参数说明请使用 `docker exec --help` 查看。

## 删除容器

可以使用 `docker container rm` 来删除一个处于终止状态的容器。例如

```bash
docker container rm trusting_newtontrusting_newton
```

如果要删除一个运行中的容器，可以添加 `-f` 参数。Docker 会发送 `SIGKILL` 信号给容器。

## 清理所有处于终止状态的容器

用 `docker container ls -a` 命令可以查看所有已经创建的包括终止状态的容器，如果数量太多要一个个删除可能会很麻烦，用下面的命令可以清理掉所有处于终止状态的容器。

```bash
docker container prune
```