# Spring Security Oauth2实战

# 1.OAuth2简介

- OAuth 是一个开放标准，该标准允许用户让第三方应用访问该用户在某一网站上存储的私密资源（如头像、照片、视频等），而在这个过程中无须将用户名和密码提供给第三方应用。实现这一功能是通过提供一个令牌（token），而不是用户名和密码来访问他们存放在特定服务提供者的数据。
- 每一个令牌授权一个特定的网站在特定的时段内访问特定的资源。这样，OAuth 让用户可以授权第三方网站灵活地访问存储在另外一些资源服务器的特定信息，而非所有内容。目前主流的 qq，微信等第三方授权登录方式都是基于 OAuth2 实现的。
- OAuth 2 是 OAuth 协议的下一版本，但不向下兼容 OAuth 1.0。OAuth 2 关注客户端开发者的简易性，同时为 Web 应用、桌面应用、移动设备、起居室设备提供专门的认证流程。
- 传统的 Web 开发登录认证一般都是基于 Session 的，但是在前后端分离的架构中继续使用 Session 会有许多不便，因为移动端（Android、iOS、微信小程序等）要么不支持Cookie（微信小程序），要么使用非常不便，对于这些问题，使用 OAuth 2 认证都能解决

# 2.OAuth2的四大角色

在Oauth2中，总共有如下四种角色：

| 名称       | 英文名称             | 描述                                                         |
| ---------- | -------------------- | ------------------------------------------------------------ |
| 资源拥有者 | Resource Owner       | 能够授予对受保护资源的访问权的实体。当资源所有者是一个人时，它就是用户。 |
| 资源服务器 | Resource Server      | 承载受保护资源的服务器，能够使用访问令牌接受和响应受保护资源请求。是一个web站点或者web service API，用户的受保护数据保存于此。 |
| 客户端     | Client               | 代表资源所有者及其授权发出受保护资源请求的应用程序。通常是一个web或者无线应用，它需要访问用户的受保护资源。 |
| 授权服务器 | Authorization Server | 在成功认证资源所有者并获得授权后，服务器向客户端发出访问令牌。 |

授权服务器可以是与资源服务器相同的服务器或单独的服务器。 单个授权服务器可以发出由多个资源服务器接受的访问令牌。 授权流程图大概如下：

![img](https://user-gold-cdn.xitu.io/2020/7/10/1733817c3030ea05?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



- （A）客户端向资源所有者请求授权。授权请求可以直接对资源所有者(如图所示)进行，或者通过授权服务器作为中介进行间接访问（首选方案）。
- （B）资源所有者允许授权，并返回凭证（如code）。
- （C）客户端通过授权服务器进行身份验证，并提供授权凭证（如code），请求访问令牌（access token）。
- （D）授权服务器对客户端进行身份验证，并验证授权凭证，如果有效，则发出访问令牌。
- （E）客户端向资源服务器请求受保护的资源，并通过提供访问令牌来进行身份验证。
- （F）资源服务器验证访问令牌，如果正确则返回受保护资源。

# 3.OAuth2 授权流程

从运行流程不难看出，要获取access token必须先得到用户授权（authorzation grant），那么如何获取这么用户授权呢？OAuth 2.0定义了四种类型的授权类型：

- 授权码模式（authorization code）
- 简化模式（implicit）
- 密码模式（resource owner password credentials）
- 客户端模式（client credentials）

## 3.1 授权码模式（authorization code）

> 授权码模式是功能最完整、使用最广泛、流程最严密的授权模式。 由于这是一个基于重定向的流，所以客户端必须能够与资源所有者的用户代理(通常是web浏览器)进行交互，并且能够从授权服务器接收传入的请求(通过重定向)。



![img](https://user-gold-cdn.xitu.io/2020/7/10/1733817c30a5b3ce?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

步骤如下：



- （A）用户访问客户端，后者将前者导向认证服务器。
- （B）用户选择是否给予客户端授权。
- （C）假设用户给予授权，认证服务器将用户导向客户端事先指定的"重定向URI"（redirection URI），同时附上一个授权码。
- （D）客户端收到授权码，附上早先的"重定向URI"，向认证服务器申请令牌。这一步是在客户端的后台的服务器上完成的，对用户不可见。
- （E）认证服务器核对了授权码和重定向URI，确认无误后，向客户端发送访问令牌（access token）和更新令牌（refresh token）。

下面接着介绍各个步骤所需的参数：

对于步骤A，客户端申请授权请求的URI，包含以下参数：

- response_type 授权类型。必选项，其值固定为code。
- client_id 客户端id。必选项，用于标识授权服务器中已注册的客户端。
- redirect_uri 重定向URI。可选项，如果不填写则使用注册在授权服务器端与client_id对应的redirect_uri。
- scope 申请的权限范围，如read或write。可选项，如果申请的请求访问超出授权服务器定义的可操作范围则会失败。
- state 表示客户端当前状态。可选项，可以指定任意值，授权服务器会原封不动地返回这个值。

C步骤中，服务器回应客户端的URI，包含以下参数：

- code授权码。必选项，授权码必须在颁发后很快过期以减小泄露风险，建议最长时间设为10分钟，客户端只能使用该码一次，否则会被授权服务器拒绝。该码与client id和重定向URI，是一一对应关系。
- state如果客户端的请求中包含这个参数，认证服务器的回应也必须一模一样包含这个参数。

D步骤中，客户端向认证服务器申请令牌的HTTP请求，包含以下参数：

- grant_type许可类型（授权模式）。必选项，此处固定值为authorization_code。
- code上一步获得的授权码。必选项。
- redirect_uri表示重定向URI。必选项，且必须与A步骤中的该参数值保持一致。
- client_id表示客户端ID，必选项。

在**Spring Security Oauth2** 中 上面的API 如下所示，这些 API 称为端点：

- 授权端点 /oauth/authorize：授权端点，通过此端点跳转到 授权服务器 进行认证，完成第一个请求。携带如下参数：

| 参数名称      | 是否必填 | 描述                                                         |
| ------------- | -------- | ------------------------------------------------------------ |
| response_type | 必填     | 必须为 code                                                  |
| client_id     | 必填     | 客户端的ID                                                   |
| redirect_uri  | 可选     | 获取授权码后重定向地址                                       |
| scope         | 可选     | 申请的权限范围                                               |
| state         | 推荐     | 客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值，推荐。 |

授权成功的情况，会携带以下两个参数重定向到到 redirect_uri 中：

| 参数名称 | 是否必返回 | 描述                                                         |
| -------- | ---------- | ------------------------------------------------------------ |
| code     | 是         | 授权服务器生成的授权代码。授权代码必须在发布后不久过期，以降低泄漏的风险。最大授权代码生命周期为 10 分钟 |
| state    | 是         | 如果上一步中提供 state 参数，会原封不动地返回这个值。        |

- 令牌端点 /oauth/token：令牌端点，通过上一步获取到的 授权码 验证与生成令牌，完成第二个请求，携带如下参数：

| 参数名称     | 是否必填 | 描述                                         |
| ------------ | -------- | -------------------------------------------- |
| grant_type   | 必填     | 使用的授权模式，值固定为"authorization_code" |
| code         | 必填     | 上一步获得的授权码                           |
| redirect_uri | 必填     | 重定向 URI，必须与上一步中的该参数值保持一致 |
| client_id    | 必填     | 客户端的 ID                                  |
| scope        | 推荐     | 授权范围，必须与第一步相同                   |

如果访问令牌请求有效且经过授权，授权服务器将发出访问令牌和可选的刷新令牌，可以得到如下响应参数：

| 参数名称      | 是否必返回               | 描述                                                      |
| ------------- | ------------------------ | --------------------------------------------------------- |
| access_token  | 是                       | 授权服务器颁发的访问令牌                                  |
| token_type    | 是                       | 令牌类型，该值大小写不敏感，可以是 bearer 类型或 mac 类型 |
| expires_in    | 否（设置过期时间必返回） | 过期时间，单位为秒                                        |
| refresh_token | 否                       | 表示更新令牌，用来获取下一次的访问令牌                    |
| scope         | 否                       | 权限范围，如果有，则与客户端申请的范围一致                |

## 3.2 简化模式（Implicit Grant）

> 简化模式（implicit grant type）不通过第三方应用程序的服务器，直接在浏览器中向认证服务器申请令牌，跳过了"授权码"这个步骤，因此得名。所有步骤在浏览器中完成，令牌对访问者是可见的，且客户端不需要认证。具体步骤可参阅RFC6749 4.2([tools.ietf.org/html/rfc674…](https://tools.ietf.org/html/rfc6749#section-4.2) )节。



![img](https://user-gold-cdn.xitu.io/2020/7/10/1733817c337c4390?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



步骤如下：

- （A）客户端将用户导向认证服务器。
- （B）用户决定是否给于客户端授权。
- （C）假设用户给予授权，认证服务器将用户导向客户端指定的"重定向URI"，并在URI的Hash部分包含了访问令牌。
- （D）浏览器向资源服务器发出请求，其中不包括上一步收到的Hash值。
- （E）资源服务器返回一个网页，其中包含的代码可以获取Hash值中的令牌。
- （F）浏览器执行上一步获得的脚本，提取出令牌。
- （G）浏览器将令牌发给客户端。

## 3.3 密码模式（Resource Owner Password Credentials Grant）

> 密码模式中，用户向客户端提供自己的用户名和密码。客户端使用这些信息，向"服务商提供商"索要授权。在这种模式中，用户必须把自己的密码给客户端，但是客户端不得储存密码。这通常用在用户对客户端高度信任的情况下，比如客户端是操作系统的一部分，或者由一个著名公司出品。而认证服务器只有在其他授权模式无法执行的情况下，才能考虑使用这种模式。可参阅RFC6749 4.3([tools.ietf.org/html/rfc674…](https://tools.ietf.org/html/rfc6749#section-4.3) )节。



![img](https://user-gold-cdn.xitu.io/2020/7/10/1733817c33786005?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



步骤如下：

- （A）用户向客户端提供用户名和密码。
- （B）客户端将用户名和密码发给认证服务器，向后者请求令牌。
- （C）认证服务器确认无误后，向客户端提供访问令牌。

该步骤中只设计到一个请求。在Spring Security Oauth2 中，该端点如下：

- 令牌端点 /oauth/token：令牌端点，携带如下参数请求即可：

| 请求参数   | 是否必填 | 描述                              |
| ---------- | -------- | --------------------------------- |
| grant_type | 必填     | 使用的密码模式，值固定为 password |
| username   | 必填     | 用户名                            |
| password   | 必填     | 密码                              |
| scope      | 可选     | 请求权限范围                      |

请求响应参考授权码模式。

## 3.4 客户端模式(Client Credentials Grant)

> 客户端模式（Client Credentials Grant）指客户端以自己的名义，而不是以用户的名义，向"服务提供商"进行认证。严格地说，客户端模式并不属于OAuth框架所要解决的问题。在这种模式中，用户直接向客户端注册，客户端以自己的名义要求"服务提供商"提供服务，其实不存在授权问题。可参阅RFC6749 4.4（[tools.ietf.org/html/rfc674…](https://tools.ietf.org/html/rfc6749#section-4.4) ）节。



![img](https://user-gold-cdn.xitu.io/2020/7/10/1733817c338ceedc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



步骤如下：

- （A）客户端向认证服务器进行身份认证，并要求一个访问令牌。
- （B）认证服务器确认无误后，向客户端提供访问令牌。

该步骤中只设计到一个请求。在Spring Security Oauth2 中，该端点如下：

- 令牌端点 /oauth/token：令牌端点，携带如下参数请求即可：

| 请求参数   | 是否必填 | 描述                                        |
| ---------- | -------- | ------------------------------------------- |
| grant_type | 必填     | 使用的密码模式，值固定为 client_credentials |
| scope      | 可选     | 请求权限范围                                |

请求响应参考授权码模式。

# 4.搭建演示工程

本案例主要演示密码模式的认证授权方式，后续在Spring Cloud中继承Oauth2再增加其他模式的案例；

## 4.1 添加依赖

pom.xml如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <packaging>pom</packaging>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.2.6.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.hxmec</groupId>
    <artifactId>spring-security-oauth2-demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>spring-security-oauth2-demo</name>
    <description>spring security oauth2 demo</description>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <maven.compiler.encoding>UTF-8</maven.compiler.encoding>
        <!-- jdk版本 -->
        <java.version>1.8</java.version>
        <!-- SpringCloud版本号，官方最新稳定版本 -->
        <spring-cloud.version>Hoxton.SR3</spring-cloud.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.security.oauth</groupId>
            <artifactId>spring-security-oauth2</artifactId>
            <version>2.2.6.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>



    <build>
        <resources>
            <!-- 先指定 src/main/resources下所有文件及文件夹为资源文件 -->
            <resource>
                <directory>src/main/resources</directory>
                <includes>
                    <include>**/*</include>
                </includes>
                <filtering>true</filtering>
            </resource>
        </resources>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>${maven-compiler-plugin.version}</version>
                <configuration>
                    <source>${java.version}</source>
                    <target>${java.version}</target>
                    <encoding>${maven.compiler.encoding}</encoding>
                </configuration>
            </plugin>
            <plugin>
                <!--打包跳过测试-->
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>${maven-surefire-plugin.version}</version>
                <configuration>
                    <skipTests>true</skipTests>
                </configuration>
            </plugin>
            <!-- resources资源插件 -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-resources-plugin</artifactId>
                <version>${maven-resources-plugin.version}</version>
                <configuration>
                    <encoding>UTF-8</encoding>
                </configuration>
            </plugin>
        </plugins>
        <pluginManagement>
            <plugins>
                <plugin>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-maven-plugin</artifactId>
                    <executions>
                        <execution>
                            <goals>
                                <goal>repackage</goal>
                                <goal>build-info</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
                <!-- java文档插件 -->
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-javadoc-plugin</artifactId>
                    <version>3.0.0</version>
                </plugin>
            </plugins>
        </pluginManagement>
    </build>

</project>
```

## 4.2 授权服务器配置

> 授权服务器和资源服务器可以是同一台服务器，也可以是不同服务器，本案例中假设是同一台服务器，通过不同的配置开启授权服务器和资源服务器。

下面是授权服务器配置代码。创建一个自定义类继承自 AuthorizationServerConfigurerAdapter，完成对授权服务器的配置，然后通过 @EnableAuthorizationServer 注解开启授权服务器：

*注意：authorizedGrantTypes("password", "refresh_token") 表示 OAuth 2 中的授权模式为“password”和“refresh_token”两种。在标准的 OAuth 2 协议中，授权模式并不包括“refresh_token”，但是在 Spring Security 的实现中将其归为一种，因此如果需要实现 access_token 的刷新，就需要这样一种授权模式。*

AuthorizationServerConfig.java

```java
/**
 * 功能描述: 授权服务器配置
 * @author  Trazen
 * @date  2020/7/8 22:26
 */
/**
 * 功能描述: 授权服务器配置
 * @author  Trazen
 * @date  2020/7/8 22:26
 */
@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    /**
     * 该对象用来支持 password 模式
     */
    @Autowired
    private AuthenticationManager authenticationManager;

    /**
     * 该对象用来将令牌信息存储到内存中
     * OAuth2令牌持久化主要有以下几种
     * InMemoryTokenStore  内存存储 OAuth2默认储存方式
     * JdbcTokenStore  数据库存储
     * RedisTokenStore Redis存储
     * JwkTokenStore & JwtTokenStore
     */
    @Autowired(required = false)
    private TokenStore inMemoryTokenStore;

    /**
     * 该对象将为刷新token提供支持
     *
     * InMemoryUserDetailsManager：从内存中加载用户账号 默认
     * JdbcUserDetailsManager：从数据库中加载用户账号
     */
    @Autowired
    private UserDetailsService userDetailsService;


    /**
     * 指定密码的加密方式
     * 推荐使用BCryptPasswordEncoder, Pbkdf2PasswordEncoder, SCryptPasswordEncoder等
     * @return
     */

    @Bean
    PasswordEncoder passwordEncoder() {
        // 使用BCrypt强哈希函数加密方案（密钥迭代次数默认为10）
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        // 表示支持 client_id 和 client_secret 做登录认证
        security.allowFormAuthenticationForClients();
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient("password")
                //授权模式为password和refresh_token两种
                .authorizedGrantTypes("password", "refresh_token")
                // 配置access_token的过期时间
                .accessTokenValiditySeconds(1800)
                //配置资源id
                .resourceIds("rid")
                .scopes("all")
                //123加密后的密码
                .secret("$2a$10$tnj.nZjSzCBckTh2fRRK9.ZTYfU0y4pDiZZChKxxeOElBsxaQCn26");
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        //配置令牌的存储（这里存放在内存中）
        endpoints.tokenStore(inMemoryTokenStore)
                .authenticationManager(authenticationManager)
                .userDetailsService(userDetailsService);
    }
}
```

## 4.3 资源服务器配置

> 自定义类继承自 ResourceServerConfigurerAdapter，并添加 @EnableResourceServer 注解开启资源服务器配置。

ResourceServerConfig.java

```java
/**
 * 功能描述: 资源服务器配置
 * @author  Trazen
 * @date  2020/7/8 22:40
 */
@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) {
        // 配置资源id，这里的资源id和授权服务器中的资源id一致
        resources.resourceId("resId")
                // 设置这些资源仅基于令牌认证
                .stateless(true);
    }


    /**
     * 配置 URL 访问权限
     * @param http
     * @throws Exception
     */
    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/admin/**").hasRole("admin")
                .antMatchers("/user/**").hasRole("user")
                .anyRequest().authenticated();
    }
}

```

## 4.4 Security配置

> 这个 Spring Security 配置和上面的资源服务器配置中，都涉及到了 HttpSecurity。其中 Spring Security 中的配置优先级高于资源服务器中的配置，即请求地址先经过 Spring Security 的 HttpSecurity，再经过资源服务器的 HttpSecurity。

```java
/**
 * 功能描述: Spring Security 配置
 * @author  Trazen
 * @date  2020/7/8 22:42
 */
@Configuration
public class WebSecurityConfig  extends WebSecurityConfigurerAdapter {

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    @Override
    protected UserDetailsService userDetailsService() {
        return super.userDetailsService();
    }

    /**
     * 增加一个admin角色用户，一个user角色用户
     * admin----123456
     * trazen----123456
     * @param auth
     * @throws Exception
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("admin")
                .password("$2a$10$tnj.nZjSzCBckTh2fRRK9.ZTYfU0y4pDiZZChKxxeOElBsxaQCn26")
                .roles("admin")
                .and()
                .withUser("trazen")
                .password("$2a$10$tnj.nZjSzCBckTh2fRRK9.ZTYfU0y4pDiZZChKxxeOElBsxaQCn26")
                .roles("user");
    }

    /**
     * 开放oauth2授权端点
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.antMatcher("/oauth/**").authorizeRequests()
                .antMatchers("/oauth/**").permitAll()
                .and().csrf().disable();
    }
}
```

## 4.5 增加测试接口

DemoController.java

```java
/**
 * 功能描述: 测试接口
 * @author  Trazen
 * @date  2020/7/8 22:44
 */
@RestController
public class DemoController {

    @GetMapping("/admin/hello")
    public String admin() {
        return "hello admin";
    }

    @GetMapping("/user/hello")
    public String user() {
        return "hello user";
    }

}
```

# 5.测试

1. 启动项目后，通过令牌端点获取AccessToken

- 请求地址：oauth/token
- 请求头：Basic base64encode(client_id:client_secret)
- 请求参数：用户名、密码、授权模式、scope
- 返回结果：access_token 表示获取其它资源是要用的令牌，refresh_token 用来刷新令牌，expires_in 表示 access_token 过期时间。

添加 Basic Auth

![img](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="358"></svg>)



填写请求参数

![img](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="551"></svg>)



访问资源时,请求头带上AccessToken即可

![img](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="481"></svg>)

![img](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="450"></svg>)



# 6.扩展篇

## 6.1 Token存储之RedisTokenStore

有个问题需要特殊说明：

> 如果在spring security oauth2中，授权服务使用redis存储token的时候，报错： java.lang.NoSuchMethodError: org.springframework.data.redis.connection.RedisConnection.set([B[B)V 这说明版本有问题，解决方案是，将oauth2的版本升级到2.3.3

引入redis依赖

```xml
 <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <!-- 指明版本，解决redis存储出现的问题：java.lang.NoSuchMethodError: org.springframework.data.redis.connection.RedisConnection.set([B[B)V问题 -->
        <dependency>
            <groupId>org.springframework.security.oauth</groupId>
            <artifactId>spring-security-oauth2</artifactId>
            <version>2.3.3.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- redis  -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>
```

授权服务器配置修改

```java
/**
 * 功能描述: 授权服务器配置
 * @author  Trazen
 * @date  2020/7/8 22:26
 */
@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    /**
     * 该对象用来支持 password 模式
     */
    @Autowired
    private AuthenticationManager authenticationManager;

    /**
     * 该对象用来将令牌信息存储到内存中
     * OAuth2令牌持久化主要有以下几种
     * InMemoryTokenStore  内存存储 OAuth2默认储存方式
     * JdbcTokenStore  数据库存储
     * RedisTokenStore Redis存储
     * JwkTokenStore & JwtTokenStore
     */
    @Autowired(required = false)
    private TokenStore inMemoryTokenStore;

    /**
     * 该对象将为刷新token提供支持
     *
     * InMemoryUserDetailsManager：从内存中加载用户账号 默认
     * JdbcUserDetailsManager：从数据库中加载用户账号
     */
    @Autowired
    private UserDetailsService userDetailsService;


    /**
     * 该对象用来将令牌信息存储到Redis中
     */
    @Autowired
    private RedisConnectionFactory redisConnectionFactory;

    /**
     * 指定密码的加密方式
     * 推荐使用BCryptPasswordEncoder, Pbkdf2PasswordEncoder, SCryptPasswordEncoder等
     * @return
     */

    @Bean
    PasswordEncoder passwordEncoder() {
        // 使用BCrypt强哈希函数加密方案（密钥迭代次数默认为10）
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        // 表示支持 client_id 和 client_secret 做登录认证
        security.allowFormAuthenticationForClients();
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient("app")
                //授权模式为password和refresh_token两种
                .authorizedGrantTypes("password", "refresh_token")
                // 配置access_token的过期时间
                .accessTokenValiditySeconds(1800)
                //配置资源id
                .resourceIds("resId")
                .scopes("all")
                //123456加密后的密码
                .secret("$2a$10$tnj.nZjSzCBckTh2fRRK9.ZTYfU0y4pDiZZChKxxeOElBsxaQCn26");
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        //配置令牌的存储（这里存放在内存中）
//        endpoints.tokenStore(inMemoryTokenStore)
//                .authenticationManager(authenticationManager)
//                .userDetailsService(userDetailsService);

        //配置令牌存放在Redis中
        endpoints.tokenStore(new RedisTokenStore(redisConnectionFactory))
                .authenticationManager(authenticationManager)
                .userDetailsService(userDetailsService);
    }
}
```

测试 通过请求获取AccessToken后，在Redis中看是否有相关数据

![img](https://user-gold-cdn.xitu.io/2020/7/10/1733817c58488e8e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 6.2 Token存储之JwtTokenStore

引入jwt相关依赖：

```xml
<!-- jwt -->
<dependency>
	<groupId>org.springframework.security</groupId>
	<artifactId>spring-security-jwt</artifactId>
	<version>1.1.1.RELEASE</version>
</dependency>
```

增加Jwt存储token的配置类

```java
/**
 * 功能描述: 使用Jwt存储token的配置
 * @author  Trazen
 * @date  2020/7/10 15:00
 */
@Configuration
public class JwtTokenStoreConfig {

    @Bean
    public TokenStore jwtTokenStore() {
        return new JwtTokenStore(jwtAccessTokenConverter());
    }

    @Bean
    public JwtAccessTokenConverter jwtAccessTokenConverter() {
        JwtAccessTokenConverter accessTokenConverter = new JwtAccessTokenConverter();
        //配置JWT使用的秘钥
        accessTokenConverter.setSigningKey("test_key");
        return accessTokenConverter;
    }
}
```

授权服务器配置修改

```java
/**
 * 功能描述: 授权服务器配置
 * @author  Trazen
 * @date  2020/7/8 22:26
 */
@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    /**
     * 该对象用来支持 password 模式
     */
    @Autowired
    private AuthenticationManager authenticationManager;

    /*****************InMemoryTokenStore引入 ****************************/
    /**
     *
     * 该对象用来将令牌信息存储到内存中
     * OAuth2令牌持久化主要有以下几种
     * InMemoryTokenStore  内存存储 OAuth2默认储存方式
     * JdbcTokenStore  数据库存储
     * RedisTokenStore Redis存储
     * JwkTokenStore & JwtTokenStore
     */
    @Autowired(required = false)
    private TokenStore inMemoryTokenStore;

    /**
     * 该对象将为刷新token提供支持
     *
     * InMemoryUserDetailsManager：从内存中加载用户账号 默认
     * JdbcUserDetailsManager：从数据库中加载用户账号
     */
    @Autowired
    private UserDetailsService userDetailsService;

    /*****************redisTokenStore引入 ****************************/
    /**
     * 使用Redis存储时添加
     * 该对象用来将令牌信息存储到Redis中
     */
    @Autowired
    private RedisConnectionFactory redisConnectionFactory;


    /*****************jwtTokenStore引入 ****************************/
    @Autowired
    @Qualifier("jwtTokenStore")
    private TokenStore tokenStore;

    @Autowired
    private JwtAccessTokenConverter jwtAccessTokenConverter;


    /**
     * 指定密码的加密方式
     * 推荐使用BCryptPasswordEncoder, Pbkdf2PasswordEncoder, SCryptPasswordEncoder等
     * @return
     */
    @Bean
    PasswordEncoder passwordEncoder() {
        // 使用BCrypt强哈希函数加密方案（密钥迭代次数默认为10）
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        // 表示支持 client_id 和 client_secret 做登录认证
        security.allowFormAuthenticationForClients();
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient("app")
                //授权模式为password和refresh_token两种
                .authorizedGrantTypes("password", "refresh_token")
                // 配置access_token的过期时间
                .accessTokenValiditySeconds(1800)
                //配置资源id
                .resourceIds("resId")
                .scopes("all")
                //123456加密后的密码
                .secret("$2a$10$tnj.nZjSzCBckTh2fRRK9.ZTYfU0y4pDiZZChKxxeOElBsxaQCn26");
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        //配置令牌的存储（这里存放在内存中）
//        endpoints.tokenStore(inMemoryTokenStore)
//                .authenticationManager(authenticationManager)
//                .userDetailsService(userDetailsService);

        //配置令牌存放在Redis中
//        endpoints.tokenStore(new RedisTokenStore(redisConnectionFactory))
//                .authenticationManager(authenticationManager)
//                .userDetailsService(userDetailsService);

        //配置使用jwt存储token
        endpoints.tokenStore(tokenStore)
                .authenticationManager(authenticationManager)
                .userDetailsService(userDetailsService)
                .accessTokenConverter(jwtAccessTokenConverter);
    }
}

```

通过请求获取AccessToken,查看是否生效

![img](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="594"></svg>)



## 6.3 自定义增强返回的 Token 信息

> 通常通过令牌端点请求返回如下图所示，但是在实际操作中，我们往往需要在这个基础上，定制自己的返回信息，这就需要我们对这个东西进行自定义，下面就演示如何通过TokenEnhancer自定义返回信息



![img](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="551"></svg>)



1.自定义一个TokenEnhancer类，添加需要定制返回的信息，代码如下

```java
/**
 * 功能描述: Token增强
 * @author  Trazen
 * @date  2020/7/10 16:29
 */
@Component
public class HxTokenEnhancer implements TokenEnhancer {

    private final static String CLIENT_CREDENTIALS = "client_credentials";


    @Override
    public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {
        /**
         * 客户端模式不修改
         */
        if (CLIENT_CREDENTIALS.equals(authentication.getOAuth2Request().getGrantType())) {
            return accessToken;
        }

        final Map<String, Object> additionalInfo = new HashMap<>(8);
        Map<String, Object> info = new LinkedHashMap<>();
        info.put("author", "Trazen");
        info.put("email", "trazen@126.com");
        info.put("GitHub", "https://github.com/ty1972873004/spring-security-oauth2-demo");
        info.put("user", SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        additionalInfo.put("info", info);
        ((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(additionalInfo);
        return accessToken;
    }
}
```

修改授权服务器配置

```java
/**
 * 功能描述: 授权服务器配置
 * @author  Trazen
 * @date  2020/7/8 22:26
 */
@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    /**
     * 该对象用来支持 password 模式
     */
    @Autowired
    private AuthenticationManager authenticationManager;

    /*****************InMemoryTokenStore引入 ****************************/
    /**
     *
     * 该对象用来将令牌信息存储到内存中
     * OAuth2令牌持久化主要有以下几种
     * InMemoryTokenStore  内存存储 OAuth2默认储存方式
     * JdbcTokenStore  数据库存储
     * RedisTokenStore Redis存储
     * JwkTokenStore & JwtTokenStore
     */
    @Autowired(required = false)
    private TokenStore inMemoryTokenStore;

    /**
     * 该对象将为刷新token提供支持
     *
     * InMemoryUserDetailsManager：从内存中加载用户账号 默认
     * JdbcUserDetailsManager：从数据库中加载用户账号
     */
    @Autowired
    private UserDetailsService userDetailsService;

    /*****************redisTokenStore引入 ****************************/
    /**
     * 使用Redis存储时添加
     * 该对象用来将令牌信息存储到Redis中
     */
    @Autowired
    private RedisConnectionFactory redisConnectionFactory;


    /*****************jwtTokenStore引入 ****************************/
    @Autowired
    @Qualifier("jwtTokenStore")
    private TokenStore tokenStore;

    @Autowired
    private JwtAccessTokenConverter jwtAccessTokenConverter;

    @Autowired
    private HxTokenEnhancer tokenEnhancer;


    /**
     * 指定密码的加密方式
     * 推荐使用BCryptPasswordEncoder, Pbkdf2PasswordEncoder, SCryptPasswordEncoder等
     * @return
     */
    @Bean
    PasswordEncoder passwordEncoder() {
        // 使用BCrypt强哈希函数加密方案（密钥迭代次数默认为10）
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        // 表示支持 client_id 和 client_secret 做登录认证
        security.allowFormAuthenticationForClients();
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient("app")
                //授权模式为password和refresh_token两种
                .authorizedGrantTypes("password", "refresh_token")
                // 配置access_token的过期时间
                .accessTokenValiditySeconds(1800)
                //配置资源id
                .resourceIds("resId")
                .scopes("all")
                //123456加密后的密码
                .secret("$2a$10$tnj.nZjSzCBckTh2fRRK9.ZTYfU0y4pDiZZChKxxeOElBsxaQCn26");
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        //配置令牌的存储（这里存放在内存中）
//        endpoints.tokenStore(inMemoryTokenStore)
//                .authenticationManager(authenticationManager)
//                .userDetailsService(userDetailsService);

        //配置令牌存放在Redis中
//        endpoints.tokenStore(new RedisTokenStore(redisConnectionFactory))
//                .authenticationManager(authenticationManager)
//                .userDetailsService(userDetailsService);

        //配置使用jwt存储token
        //添加自定义Token信息配置
        TokenEnhancerChain tokenEnhancerChain = new TokenEnhancerChain();
        List<TokenEnhancer> enhancerList = new ArrayList();
        enhancerList.add(jwtAccessTokenConverter);
        enhancerList.add(tokenEnhancer);
        tokenEnhancerChain.setTokenEnhancers(enhancerList);

        endpoints.tokenStore(tokenStore)
                .authenticationManager(authenticationManager)
                .userDetailsService(userDetailsService)
                .tokenEnhancer(tokenEnhancerChain)
                .accessTokenConverter(jwtAccessTokenConverter);
    }
}
```

测试如下：

![img](https://user-gold-cdn.xitu.io/2020/7/10/1733817c5d819237?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



# 7.源码地址

- github[[github.com/ty197287300…](https://github.com/ty1972873004/spring-security-oauth2-demo)]

# 8.参考文档

- [projects.spring.io/spring-secu…](https://projects.spring.io/spring-security-oauth/docs/oauth2.html)
- [tools.ietf.org/html/rfc674…](https://tools.ietf.org/html/rfc6749)