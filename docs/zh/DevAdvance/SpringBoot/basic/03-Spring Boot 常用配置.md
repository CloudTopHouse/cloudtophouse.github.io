### Spring Boot 常用配置



## 概述

本章节主要介绍一下 Spring Boot 中的一些常用配置，比如：自定义 Banner、配置日志、关闭特定的自动配置等。

## 自定义 Banner

在 Spring Boot 启动的时候会有一个默认的启动图案

```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.1.6.RELEASE)
```

我们在 `src/main/resources` 目录下新建一个 banner.txt

通过 [http://patorjk.com/software/taag](http://qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cDovL3BhdG9yamsuY29tL3NvZnR3YXJlL3RhYWc=) 网站生成字符串，将网站生成的字符复制到 banner.txt 中

再次运行这个程序

```
${AnsiColor.BRIGHT_RED}
////////////////////////////////////////////////////////////////////
//                          _ooOoo_                               //
//                         o8888888o                              //
//                         88" . "88                              //
//                         (| ^_^ |)                              //
//                         O\  =  /O                              //
//                      ____/`---'\____                           //
//                    .'  \\|     |//  `.                         //
//                   /  \\|||  :  |||//  \                        //
//                  /  _||||| -:- |||||-  \                       //
//                  |   | \\\  -  /// |   |                       //
//                  | \_|  ''\---/''  |   |                       //
//                  \  .-\__  `-`  ___/-. /                       //
//                ___`. .'  /--.--\  `. . ___                     //
//              ."" '<  `.___\_<|>_/___.'  >'"".                  //
//            | | :  `- \`.;`\ _ /`;.`/ - ` : | |                 //
//            \  \ `-.   \_ __\ /__ _/   .-` /  /                 //
//      ========`-.____`-.___\_____/___.-`____.-'========         //
//                           `=---='                              //
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^        //
//            佛祖保佑       永不宕机     永无BUG                  //
////////////////////////////////////////////////////////////////////
```

常用属性设置：

- `${AnsiColor.BRIGHT_RED}`：设置控制台中输出内容的颜色
- `${application.version}`：用来获取 `MANIFEST.MF` 文件中的版本号
- `${application.formatted-version}`：格式化后的 `${application.version}` 版本信息
- `${spring-boot.version}`：Spring Boot 的版本号
- `${spring-boot.formatted-version}`：格式化后的 `${spring-boot.version}` 版本信息

## 配置文件

Spring Boot 项目使用一个全局的配置文件 `application.properties` 或者是 `application.yml`，在 `resources` 目录下或者类路径下的 `/config` 下，一般我们放到 `resources` 下。

修改 Tomcat 的端口为 9090，并将默认的访问路径 "/" 修改为 "boot"，可以在 `application.properties` 中添加：

```properties
server.port=9090
server.context-path=/boot
```

或在 application.yml 中添加：

```yaml
server:
  port: 9090
  context-path: /boot
```

测试效果：

![img](http://qfdmy.com/assets/Lusifer1509896204.png)

[更多配置](http://qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cHM6Ly9kb2NzLnNwcmluZy5pby9zcHJpbmctYm9vdC9kb2NzLzIuMC4yLlJFTEVBU0UvcmVmZXJlbmNlL2h0bWwvY29tbW9uLWFwcGxpY2F0aW9uLXByb3BlcnRpZXMuaHRtbA==)

## Starter POM

Spring Boot 为我们提供了简化企业级开发绝大多数场景的 starter pom ，只要使用了应用场景所需要的 starter pom ，相关的技术配置将会消除，就可以得到 Spring Boot 为我们提供的自动配置的 Bean。

[更多 Starter POM](http://qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cHM6Ly9kb2NzLnNwcmluZy5pby9zcHJpbmctYm9vdC9kb2NzLzIuMC4yLlJFTEVBU0UvcmVmZXJlbmNlL2h0bWwvdXNpbmctYm9vdC1idWlsZC1zeXN0ZW1zLmh0bWwjdXNpbmctYm9vdC1zdGFydGVy)

## 日志配置

Spring Boot 对各种日志框架都做了支持，我们可以通过配置来修改默认的日志的配置

默认情况下，Spring Boot 使用 Logback 作为日志框架

```
logging:  file: ../logs/spring-boot-hello.log  level.org.springframework.web: DEBUG
```

## 关闭特定的自动配置

关闭特定的自动配置使用 `@SpringBootApplication` 注解的 `exclude` 参数即可，这里以关闭数据源的自动配置为例

```java
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
```
