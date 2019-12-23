# 02-使用 Maven 管理 Spring Boot Profile



## 前言

Spring Boot 开发的项目中，多环境配置极大的提升了开发效率，避免了因为测试 (test)、开发(dev)、生产(prod) 导致频繁修改一个配置文件，导致出现配置错误的情况。

那么 Spring Boot 如何做到多环境配置？还有没有更优雅的方式管理 Spring Boot 的多环境配置呢？



## 1. Spring Boot 多环境配置

Spring Boot 项目可使用 profile 来实现多环境配置，通过 `spring.profiles.active` 属性决定使用具体哪个环境的 profile。

Spring Boot 的配置文件默认为 `application.yml`(或`properties`，此外仅以`yml`配置为说明)。不同 profile 下的配置文件由 `application-{profile}.yml` 管理，同时 `application-{profile}.yml` 配置文件会覆盖默认配置文件 (`application.yml`) 下的同一属性。

一般 profile 有以下几种：dev(开发环境)，test(测试环境)，prod(生产环境)

## 2. Maven 多环境配置

大部分项目基于 Maven 构建，此处不介绍 Gradle 方式构建。所以使用 Maven 可以更加方便优雅的管理 profile。

### 2.1. Maven Profile 配置

在项目的 `pom.xml` (或者具体 module 的`pom.xml`) 中添加 `profiles` 节点

```xml
<profiles>
    <profile>
        <id>dev</id>
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
        <properties>
            <profileActive>dev</profileActive>
        </properties>
    </profile>
    <profile>
        <id>prod</id>
        <properties>
            <profileActive>prod</profileActive>
        </properties>
    </profile>
    <profile>
        <id>test</id>
        <properties>
            <profileActive>test</profileActive>
        </properties>
    </profile>
</profiles>
```

> 1. 其中 profile 节点里还可以指定额外的依赖以及管理依赖的版本等等，十分的方便。
> 2. properties 中的 profileActive 是自定义变量，后续为了指定 Spring Boot 所使用的 profile。

### 2.2. 根据 Maven Profile 过滤资源文件

Spring Boot 的 profile 选择需要在 application.yml 中配置 `spring.profiles.active`，如果写死在配置文件中，那么每次打包都需要手动修改，很麻烦，而且容易出错。在 pom.xml 里定义变量，就可以在 application.yml 中 通过 `@xxxx@` 获取变量的内容，此处变量为 `profileActive`。

资源过滤需要在 pom.xml 的 `build` 节点下配置 `resources` 节点：

```xml
<build>
    <finalName>${artifactId}</finalName>
    <resources>
        <resource>
            <directory>src/main/resources</directory>
            <!-- 过滤资源 -->
            <excludes>
                <exclude>application*.yml</exclude>
            </excludes>
        </resource>
        <resource>
            <directory>src/main/resources</directory>
            <!-- 是否替换@xx@表示的maven properties属性值 -->
            <filtering>true</filtering>
            <!-- 引入资源 -->
            <includes>
                <include>application.yml</include>
                <include>application-${profileActive}.yml</include>
            </includes>
        </resource>
    </resources>
    <plugins>
        ...省略部分内容
    </plugins>
</build>
```

> resources 节点中第一个 resource 去掉了`src/main/resources`下的所有 `application*.yml` 文件，`*` 是通配符，表示此处有任何内容（没有也可以）都匹配。
> 第二个 resource 添加了 application.yml 默认配置文件和由 profileActive 属性决定的相应 profile 配置文件。并且 filtering 为 true 表示，会将文件内容中的 `@xx@` 替换为相应的变量（此处文件中的 `@profileActive@` 会替换为 pom 中配置的 profileActive 属性值）。

### 2.3. 修改 application.yml

```yaml
spring:
  profiles:
    active: @profileActive@
```

@profileActive@ 表示该属性值会在 maven 构建时被替换为对应的内容。



### 2.4. 构建

#### 2.4.1. 命令行构建

```bash
mvn clean package -Dmaven.test.skip=true -P dev
```

如果需要打成 prod 包，则把 `-P` 的参数替换成 prod 即可。也可以写一个 shell 脚本，方便后续打包。

```bash
#!/bin/bash

profileActive=prod
if [[ -n "$1" ]]; then
    profileActive=$1
fi

mvn clean package -Dmaven.test.skip=true -P ${profileActive}

```

该脚本接收一个参数，即打包对应的 profile。默认情况下如果不带参数，会打包成 prod。



#### 2.4.2. 工具构建

如果我们使用 IDEA 为开发工具的话，就会方便很多了。上一张图，不过多解释~

[![img](./assets/image-maven-package.png)](https://static.xkcoding.com/blog/use-maven-manage-spring-boot-profile/image-maven-package.png)