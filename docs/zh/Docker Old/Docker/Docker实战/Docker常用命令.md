# Docker常用命令

## 查看 Docker 版本

```
docker version
```

## 从 Docker 文件构建 Docker 映像

```
docker build -t image-name docker-file-location
```

## 运行 Docker 映像

```
docker run -d image-name
```

## 查看可用的 Docker 映像

```
docker images
```

## 查看最近的运行容器

```
docker ps -l
```

## 查看所有正在运行的容器

```
docker ps -a
```

## 停止运行容器

```
docker stop container_id
```

## 删除一个镜像

```
docker rmi image-name
```

## 删除所有镜像

```
docker rmi $(docker images -q)
```

## 强制删除所有镜像

```
docker rmi -r $(docker images -q)
```

## 删除所有虚悬镜像

```text
docker rmi $(docker images -q -f dangling=true)
```

## 删除所有容器

```
docker rm $(docker ps -a -q)
```

## 进入 Docker 容器

```
docker exec -it container-id /bin/bash
```

## 查看所有数据卷

```
docker volume ls
```

## 删除指定数据卷

```
docker volume rm [volume_name]
```

## 删除所有未关联的数据卷

```
docker volume rm $(docker volume ls -qf dangling=true)
```

## 从主机复制文件到容器

```
sudo docker cp host_path containerID:container_path
```

## 从容器复制文件到主机

```
sudo docker cp containerID:container_path host_path
```


