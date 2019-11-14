# 09-Linux部署应用程序





## 安装 Java

### 解压缩并移动到指定目录

- 解压缩：`tar -zxvf jdk-8u152-linux-x64.tar.gz`
- 创建目录：`mkdir -p /usr/local/java`
- 移动安装包：`mv jdk1.8.0_152/ /usr/local/java/`
- 设置所有者：`chown -R root:root /usr/local/java/`

### 配置环境变量

- 配置系统环境变量：`vi /etc/environment`
- 修改系统环境变量

```
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"
export JAVA_HOME=/usr/local/java/jdk1.8.0_152
export JRE_HOME=/usr/local/java/jdk1.8.0_152/jre
export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
```

- 配置用户环境变量：`vi /etc/profile`
- 修改用户环境变量

```
if [ "$PS1" ]; then
  if [ "$BASH" ] && [ "$BASH" != "/bin/sh" ]; then
    # The file bash.bashrc already sets the default PS1.
    # PS1='\h:\w\$ '
    if [ -f /etc/bash.bashrc ]; then
      . /etc/bash.bashrc
    fi
  else
    if [ "`id -u`" -eq 0 ]; then
      PS1='# '
    else
      PS1='$ '
    fi
  fi
fi
export JAVA_HOME=/usr/local/java/jdk1.8.0_152
export JRE_HOME=/usr/local/java/jdk1.8.0_152/jre
export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
export PATH=$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$PATH:$HOME/bin
if [ -d /etc/profile.d ]; then
  for i in /etc/profile.d/*.sh; do
    if [ -r $i ]; then
      . $i
    fi
  done
  unset i
fi
```

- 使用户环境变量生效：`source /etc/profile`

### 验证安装是否成功

```
java -version

# 输出如下
java version "1.8.0_152"Java(TM) SE Runtime Environment (build 1.8.0_152-b16)Java HotSpot(TM) 64-Bit Server VM (build 25.152-b16, mixed mode)
```



## 安装 Tomcat

### 解压缩并移动到指定目录

- 解压缩：`tar -zxvf apache-tomcat-8.5.23.tar.gz`
- 变更目录：`mv apache-tomcat-8.5.23 tomcat`
- 移动目录：`mv tomcat/ /usr/local/`

### 验证安装是否成功

- 启动：
  - `/usr/local/tomcat/bin/startup.sh`
  - `./startup.sh`
- 停止：
  - `/usr/local/tomcat/bin/shutdown.sh`
  - `./shutdown.sh`



## 安装 MySQL

### 安装

- 更新数据源：`apt-get update`
- 安装数据库：`apt-get install mysql-server`

> **注意：** 系统将提示您在安装过程中创建 root 密码。选择一个安全的密码，并确保你记住它，因为你以后需要它。接下来，我们将完成 MySQL 的配置。

### 配置

> **注意：** 因为是全新安装，您需要运行附带的安全脚本。这会更改一些不太安全的默认选项，例如远程 root 登录和示例用户。在旧版本的 MySQL 上，您需要手动初始化数据目录，但最新的 MySQL 已经自动完成了。

```
mysql_secure_installation
```

这将提示您输入您在之前步骤中创建的 root 密码。您可以按 Y，然后 ENTER 接受所有后续问题的默认值，但是要询问您是否要更改 root 密码。您只需在之前步骤中进行设置即可，因此无需现在更改。

### 验证安装是否成功

按上边方式安装完成后，MySQL 应该已经开始自动运行了。要测试它，请检查其状态。

```bash
systemctl status mysql

# 输出如下
● mysql.service - MySQL Community Server
   Loaded: loaded (/lib/systemd/system/mysql.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2017-11-21 13:04:34 CST; 3min 24s ago
 Main PID: 2169 (mysqld)
   CGroup: /system.slice/mysql.service
           └─2169 /usr/sbin/mysqld
Nov 21 13:04:33 ubuntu systemd[1]: Starting MySQL Community Server...
Nov 21 13:04:34 ubuntu systemd[1]: Started MySQL Community Server.
```

### 常用命令

- 查看版本：`mysqladmin -p -u root version`
- 启动：`service mysql start`
- 停止：`service mysql stop`
- 重启：`service mysql restart`
- 登录：`mysql -u root -p`
- 授权：`grant all privileges on *.* to 'root'@'%' identified by 'Your Password';`

### 扩展阅读

#### 配置使用密码方式登录

在安装过程中可能没有提示密码设置的环节此时默认使用的是 **auth_socket** 方式登录，我们需要修改为 **mysql_native_password** 方式，操作步骤如下

- 本地登录 MySQL，此时无需输入密码

```bash
mysql -u root -p
```

- 切换数据库到 mysql

```bash
use mysql;
```

- 修改 root 账号密码

```bash
update user set authentication_string=password('123456') where user='root';
```

- 设置登录模式

```bash
update user set plugin="mysql_native_password";
```

- 刷新配置

```bash
flush privileges;
```

- 退出 MySQL

```bash
exit;
```

- 重新启动 MySQL

```bash
systemctl restart mysql
```

#### 配置远程访问

- 修改配置文件

```bash
vi /etc/mysql/mysql.conf.d/mysqld.cnf
```

- 注释掉(语句前面加上 `#` 即可)：

```bash
# bind-address = 127.0.0.1
```

- 重启 MySQL

```bash
service mysql restart
```

- 登录 MySQL

```bash
mysql -u root -p
```

- 授权 root 用户允许所有人连接

```bash
grant all privileges on *.* to 'root'@'%' identified by 'Your Password';
```

#### 因弱口令无法成功授权解决步骤

- 查看和设置密码安全级别

```sql
select @@validate_password_policy;set global validate_password_policy=0;
```

- 查看和设置密码长度限制

```sql
select @@validate_password_length;set global validate_password_length=1;
```

#### 其它配置

修改配置文件：`vi /etc/mysql/mysql.conf.d/mysqld.cnf`

```
[client]
default-character-set=utf8

[mysqld]
default-storage-engine=INNODB
character-set-server=utf8
collation-server=utf8_general_ci
lower-case-table-names=1
```

> **注意：** 配置内容追加到对应节点的底部即可



## 应用部署实战

请参考本节视频