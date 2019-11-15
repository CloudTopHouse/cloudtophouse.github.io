# Maven+Docker 部署


## 安装jdk8镜像

> docker pull openjdk:8-jdk-alpine

## maven插件推送方式

1. 修改/etc/docker/daemon.json文件，加入hosts配置即可。 注意 使用本地docker构建，不要用的生产服务器上，这种方式容易被别人注入木马
本地局域网 192.168.10.222
```json 
{

  "hosts":["tcp://0.0.0.0:2375","unix:///var/run/docker.sock"]

}
```
1. 在settings.xml文件的同级目录创建settings-security.xml文件
在cmd命令行中使用，在bash中特殊字符会出现转义问题
```
mvn --encrypt-master-password <password>
{4Cmy61mOMasHCreAdBngs40S7FJ8dFcD8MG9jCJKSNA=}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<settingsSecurity>
  <master>{4Cmy61mOMasHCreAdBngs40S7FJ8dFcD8MG9jCJKSNA=}</master>
</settingsSecurity>
```

2. 编辑settings.xml
最后使用你的私有仓库访问密码生成服务密码，将生成的密码写入到settings.xml的

```
mvn --encrypt-password <password>
{RCeI2AmEXXgHmFttKbzhhXBLq/vQdczAluUl3Vd7tsg=}
```
```
<server>
		<id>docker-aliyun</id>
		<username>matosiki@163.com</username>
		<password>{RCeI2AmEXXgHmFttKbzhhXBLq/vQdczAluUl3Vd7tsg=}</password>
		<configuration>
			<email>matosiki@163.com</email>
		</configuration>
	</server>
```

```



2. 重新加载配置文件，并重启docker

> systemctl daemon-reload

> systemctl restart docker


3. 验证，直接访问：

> curl 127.0.0.1:2375/info


## java项目

1. maven pom.xm 配置文件

```xml
<build>

        <plugins>

            <!-- springboot打包 -->

            <plugin>

                <groupId>org.springframework.boot</groupId>

                <artifactId>spring-boot-maven-plugin</artifactId>

            </plugin>

             

            <plugin>

                <groupId>com.spotify</groupId>

                <artifactId>docker-maven-plugin</artifactId>

                <version>0.4.9</version>

                <configuration>

                   <!-- 镜像名称  -->

                   <imageName>matosiki/springboot-docker-demo</imageName>

                   <!-- docker远程服务器地址 -->

                   <dockerHost>http://服务器IP:2375</dockerHost>

                   <!-- Dockerfile文件存放目录 -->

                   <dockerDirectory>src/main/docker</dockerDirectory>

                   <resources>

                    <resource>

                        <directory>${project.build.directory}</directory>

                        <include>${project.build.finalName}.jar</include>

                    </resource>

                </resources>

                </configuration>

            </plugin>

        </plugins>

    </build>

```
2. 编写Dockerfile 文件
```dockerfile
# Dockerfile

# 基于的镜像

FROM openjdk:8-jdk-alpine

# 安装字体，Captcha需要字体支持
RUN set -xe && apk --no-cache add ttf-dejavu fontconfig

VOLUME /opt/tmp

 

ADD projectname-1.0.0-SNAPSHOT.jar app.jar

 

# -Djava.security.egd=file:/dev/./urandom 可解决tomcat可能启动慢的问题

# 具体可查看：https://www.cnblogs.com/mightyvincent/p/7685310.html

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]

 

# 对外端口

EXPOSE 8080
```

3. 编码运行

> mvn clean package docker:build -Dmaven.test.skip=true


4. 查看镜像

> docker images

5. 运行镜像，查看是否启动正常

> docker run -d -p 8080:8080 matosiki/springboot-docker-demo

6. 基于已有镜像运行 jar
```sh
docker run -d -p 1234:8080 -v /opt/docker/projectname-1.0.0-SNAPSHOT.jar:/usr/projectname-1.0.0-SNAPSHOT.jar --name SpringbootByJar openjdk:8-jdk-alpine java -jar /usr/projectname-1.0.0-SNAPSHOT.jar
```