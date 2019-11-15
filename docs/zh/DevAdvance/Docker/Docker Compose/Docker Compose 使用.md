# Docker Compose 使用

## 术语

首先介绍几个术语。

- 服务 (Service)：一个应用容器，实际上可以运行多个相同镜像的实例。
- 项目 (Project)：由一组关联的应用容器组成的一个完整业务单元。

可见，一个项目可以由多个服务（容器）关联而成，Compose 面向项目进行管理。

## 场景

最常见的项目是 Web 网站，该项目应该包含 Web 应用和缓存。下面我们用 Python 来建立一个能够记录页面访问次数的 Web 网站。

### Python 应用

新建文件夹，在该目录中编写 `app.py` 文件

```python
from flask import Flask
from redis import Redis

app = Flask(__name__)
redis = Redis(host='redis', port=6379)

@app.route('/')
def hello():
    count = redis.incr('hits')
    return 'Hello World! 该页面已被访问 {} 次。\n'.format(count)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
```

### Dockerfile

编写 Dockerfile 文件，内容为

```dockerfile
FROM python:3.6-alpine
ADD . /code
WORKDIR /code
RUN pip install redis flask
CMD ["python", "app.py"]
```

### Docker Compose 模板

编写 `docker-compose.yml` 文件，这个是 Compose 使用的主模板文件。

```yaml
version: '3'
services:
  web:
    build: .
    ports:
     - "5000:5000"
  redis:
    image: "redis:alpine"
```

### 运行 Compose 项目

```bash
docker-compose up -d
```

此时访问本地 `5000` 端口，每次刷新页面，计数就会加 1。

## 扩展阅读

### YAML 配置文件语言

YAML 是专门用来写配置文件的语言，非常简洁和强大，远比 JSON 格式方便。YAML 语言的设计目标，就是方便人类读写。它实质上是一种通用的数据串行化格式。它的基本语法规则如下：

- **大小写敏感**
- **使用缩进表示层级关系**
- **缩进时不允许使用 TAB 键，只允许使用空格。**
- **缩进的空格数目不重要，只要相同层级的元素左侧对齐即可**

`#` 表示注释，从这个字符一直到行尾，都会被解析器忽略。YAML 支持的数据结构有三种：

- **对象：** 键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）
- **数组：** 一组按次序排列的值，又称为序列（sequence） / 列表（list）
- **纯量（scalars）：** 单个的、不可再分的值

#### YAML 对象

对象的一组键值对，使用冒号结构表示

```yaml
animal: pets
```

#### YAML 数组

一组连词线开头的行，构成一个数组

```yaml
- Cat
- Dog
- Goldfish
```

数据结构的子成员是一个数组，则可以在该项下面缩进一个空格

```yaml
- Array
 - Cat
 - Dog
 - Goldfish
```

#### YAML 复合结构

对象和数组可以结合使用，形成复合结构

```yaml
languages:
 - Ruby
 - Perl
 - Python 
websites:
 YAML: yaml.org 
 Ruby: ruby-lang.org 
 Python: python.org 
 Perl: use.perl.org 
```

#### YAML 纯量

纯量是最基本的、不可再分的值。以下数据类型都属于 JavaScript 的纯量

- 字符串
- 布尔值
- 整数
- 浮点数
- Null
- 时间
- 日期

### 修改 IP 和 DNS

课程演示会采用多虚拟机模拟分布式场景，为防止 IP 冲突，无法联网等问题，需要预先设置好主机名、IP、DNS 配置

#### 修改主机名

- 修改 cloud.cfg 防止重启后主机名还原

```bash
vi /etc/cloud/cloud.cfg

# 该配置默认为 false，修改为 true 即可
preserve_hostname: true
```

- 修改主机名

```bash
# 修改主机名
hostnamectl set-hostname deployment

# 配置 hosts
cat >> /etc/hosts << EOF
192.168.141.130 deployment
EOF
```

#### 修改 IP

编辑 `vi /etc/netplan/50-cloud-init.yaml` 配置文件，修改内容如下

```yaml
network:
    ethernets:
        ens33:
          addresses: [192.168.141.130/24]
          gateway4: 192.168.141.2
          nameservers:
            addresses: [192.168.141.2]
    version: 2
```

使用 `netplan apply` 命令让配置生效

#### 修改 DNS

```bash
# 取消 DNS 行注释，并增加 DNS 配置如：114.114.114.114，修改后重启下计算机
vi /etc/systemd/resolved.conf
```