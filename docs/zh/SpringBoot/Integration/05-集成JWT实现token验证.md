# 05-集成JWT实现token验证

**JWT官网： https://jwt.io/**
**JWT(Java版)的github地址:https://github.com/jwtk/jjwt**



## JWT 简介

### 什么是JWT

**Json web token (JWT)**, 是为了在网络应用环境间传递声明而执行的一种基于`JSON`的开放标准（(RFC 7519).**定义了一种简洁的，自包含的方法用于通信双方之间以`JSON`对象的形式安全的传递信息。**因为数字签名的存在，这些信息是可信的，**JWT可以使用`HMAC`算法或者是`RSA`的公私秘钥对进行签名。**



### JWT请求流程

![img](./assets/4630295-7df0d10fcffe831b.png)

1. 用户使用账号和面发出post请求；
2. 服务器使用私钥创建一个jwt；
3. 服务器返回这个jwt给浏览器；
4. 浏览器将该jwt串在请求头中像服务器发送请求；
5. 服务器验证该jwt；
6. 返回响应的资源给浏览器。



### JWT的主要应用场景

身份认证在这种场景下，一旦用户完成了登陆，在接下来的每个请求中包含JWT，**可以用来验证用户身份以及对路由，服务和资源的访问权限进行验证。**由于它的开销非常小，可以轻松的在不同域名的系统中传递，所有目前在**单点登录（SSO）**中比较广泛的使用了该技术。 信息交换在通信的双方之间使用JWT对数据进行编码是一种非常安全的方式，**由于它的信息是经过签名的，可以确保发送者发送的信息是没有经过伪造的。**

### JWT的优点

1. 简洁(Compact): 可以通过`URL`，`POST`参数或者在`HTTP header`发送，因为数据量小，传输速度也很快
2. 自包含(Self-contained)：负载中包含了所有用户所需要的信息，避免了多次查询数据库
3. 因为`Token`是以`JSON`加密的形式保存在客户端的，所以`JWT`是跨语言的，原则上任何web形式都支持。
4. 不需要在服务端保存会话信息，特别适用于分布式微服务。



### JWT的结构

**JWT是由三段信息构成的，将这三段信息文本用`.`连接一起就构成了JWT字符串。**
 就像这样:
 `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ`

**JWT包含了三部分：**

1. Header 头部(标题包含了令牌的元数据，并且包含签名和/或加密算法的类型)
2. Payload 负载 (类似于飞机上承载的物品)
3. Signature 签名/签证** 



#### 1. Header

JWT的头部承载两部分信息：token类型和采用的加密算法。

```json
{ 
  "alg": "HS256",
   "typ": "JWT"
} 
```

声明类型:这里是jwt
声明加密的算法:通常直接使用 HMAC SHA256

加密算法是单向函数散列算法，常见的有MD5、SHA、HAMC。
 **MD5(message-digest algorithm 5)** （信息-摘要算法）缩写，广泛用于加密和解密技术，常用于文件校验。校验？不管文件多大，经过MD5后都能生成唯一的MD5值
 **SHA (Secure Hash Algorithm，安全散列算法）**，数字签名等密码学应用中重要的工具，安全性高于MD5
 **HMAC (Hash Message Authentication Code)**，散列消息鉴别码，基于密钥的Hash算法的认证协议。用公开函数和密钥产生一个固定长度的值作为认证标识，用这个标识鉴别消息的完整性。常用于接口签名验证



#### 2. Payload

载荷就是存放有效信息的地方。有效信息包含一下三个部分：

**1. 标准中注册的声明 (建议但不强制使用) ：**

`iss`: jwt签发者
 `sub`: 面向的用户(jwt所面向的用户)
 `aud`: 接收jwt的一方
 `exp`: 过期时间戳(jwt的过期时间，这个过期时间必须要大于签发时间)
 `nbf`: 定义在什么时间之前，该jwt都是不可用的.
 `iat`: jwt的签发时间
 `jti`: jwt的唯一身份标识，主要用来作为一次性`token`,从而回避重放攻击。

**2. 公共的声明 ：**

公共的声明可以添加任何的信息，一般添加用户的相关信息或其他业务需要的必要信息.但不建议添加敏感信息，因为该部分在客户端可解密.

 **3. 私有的声明 ：**

私有声明是提供者和消费者所共同定义的声明，一般不建议存放敏感信息，因为`base64`是对称解密的，意味着该部分信息可以归类为明文信息。



#### 3. Signature

jwt的第三部分是一个签证信息，这个签证信息由三部分组成：
 header (base64后的)
 payload (base64后的)
 secret

这个部分需要`base64`加密后的`header`和`base64`加密后的`payload`使用`.`连接组成的字符串，然后通过`header`中声明的加密方式进行加盐`secret`组合加密，然后就构成了`jwt`的第三部分。
 密钥`secret`是保存在服务端的，服务端会根据这个密钥进行生成`token`和进行验证，所以需要保护好。



## SpringBoot 2集成JWT

### 引入`JWT`依赖

```xml
<dependency>
      <groupId>com.auth0</groupId>
      <artifactId>java-jwt</artifactId>
      <version>3.8.3</version>
</dependency>
```



### 自定义两个注解

**用于跳过验证的`PassToken`**

```java
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface PassToken {
    boolean required() default true;
}
```

**需要登录才能进行操作的注解`UserLoginToken`**

```java
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface UserLoginToken {
    boolean required() default true;
}
```

**`@Target`:  注解的作用目标**

`@Target(ElementType.TYPE)`——接口、类、枚举、注解
 `@Target(ElementType.FIELD)`——字段、枚举的常量
 `@Target(ElementType.METHOD)`——方法
 `@Target(ElementType.PARAMETER)`——方法参数
 `@Target(ElementType.CONSTRUCTOR)` ——构造函数
 `@Target(ElementType.LOCAL_VARIABLE)`——局部变量
 `@Target(ElementType.ANNOTATION_TYPE)`——注解
 `@Target(ElementType.PACKAGE)`——包

**`@Retention`：注解的保留位置**

`RetentionPolicy.SOURCE`:这种类型的`Annotations`只在源代码级别保留,编译时就会被忽略,在`class`字节码文件中不包含。
 `RetentionPolicy.CLASS`:这种类型的`Annotations`编译时被保留,默认的保留策略,在`class`文件中存在,但`JVM`将会忽略,运行时无法获得。
 `RetentionPolicy.RUNTIME`:这种类型的`Annotations`将被`JVM`保留,所以他们能在运行时被`JVM`或其他使用反射机制的代码所读取和使用。
 **`@Document`：说明该注解将被包含在`javadoc`中
 `@Inherited`：说明子类可以继承父类中的该注解**

**简单自定义一个实体类`User`,使用`lombok`简化实体类的编写**

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    String Id;
    String username;
    String password;
}
```

**需要写`token`的生成方法**

```java
public String getToken(User user) {
    String token="";
    token= JWT.create().withAudience(user.getId())
            .sign(Algorithm.HMAC256(user.getPassword()));
    return token;
}
```

**`Algorithm.HMAC256()`:使用`HS256`生成`token`,密钥则是用户的密码，唯一密钥的话可以保存在服务端。
 `withAudience()`存入需要保存在`token`的信息，这里我把用户`ID`存入`token`中**



### 自定义拦截器
通过自定义拦截器来获取`token`并验证`token` ，代码如下：

```java
public class AuthenticationInterceptor implements HandlerInterceptor {
    @Autowired
    UserService userService;
    
    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object object) throws Exception {
        // 从 http 请求头中取出 token
        String token = httpServletRequest.getHeader("token");
        // 如果不是映射到方法直接通过
        if(!(object instanceof HandlerMethod)){
            return true;
        }
        HandlerMethod handlerMethod=(HandlerMethod)object;
        Method method=handlerMethod.getMethod();
        //检查是否有passtoken注释，有则跳过认证
        if (method.isAnnotationPresent(PassToken.class)) {
            PassToken passToken = method.getAnnotation(PassToken.class);
            if (passToken.required()) {
                return true;
            }
        }
        //检查有没有需要用户权限的注解
        if (method.isAnnotationPresent(UserLoginToken.class)) {
            UserLoginToken userLoginToken = method.getAnnotation(UserLoginToken.class);
            if (userLoginToken.required()) {
                // 执行认证
                if (token == null) {
                    throw new RuntimeException("无token，请重新登录");
                }
                // 获取 token 中的 user id
                String userId;
                try {
                    userId = JWT.decode(token).getAudience().get(0);
                } catch (JWTDecodeException j) {
                    throw new RuntimeException("401");
                }
                User user = userService.findUserById(userId);
                if (user == null) {
                    throw new RuntimeException("用户不存在，请重新登录");
                }
                // 验证 token
                JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(user.getPassword())).build();
                try {
                    jwtVerifier.verify(token);
                } catch (JWTVerificationException e) {
                    throw new RuntimeException("401");
                }
                return true;
            }
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, 
                                  HttpServletResponse httpServletResponse, 
                            Object o, ModelAndView modelAndView) throws Exception {

    }
    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, 
                                          HttpServletResponse httpServletResponse, 
                                          Object o, Exception e) throws Exception {
    }
```

实现一个拦截器就需要实现`HandlerInterceptor`接口，`HandlerInterceptor`接口主要定义了三个方法
 1.`boolean preHandle ()`：
 预处理回调方法,实现处理器的预处理，第三个参数为响应的处理器,自定义`Controller`,返回值为`true`表示继续流程（如调用下一个拦截器或处理器）或者接着执行
 `postHandle()`和`afterCompletion()`；`false`表示流程中断，不会继续调用其他的拦截器或处理器，中断执行。

2.`void postHandle()`：
 后处理回调方法，实现处理器的后处理（`DispatcherServlet`进行视图返回渲染之前进行调用），此时我们可以通过`modelAndView`（模型和视图对象）对模型数据进行处理或对视图进行处理，`modelAndView`也可能为`null`。

3.`void afterCompletion()`:
 整个请求处理完毕回调方法,该方法也是需要当前对应的`Interceptor`的`preHandle()`的返回值为true时才会执行，也就是在`DispatcherServlet`渲染了对应的视图之后执行。用于进行资源清理。整个请求处理完毕回调方法。如性能监控中我们可以在此记录结束时间并输出消耗时间，还可以进行一些资源清理，类似于`try-catch-finally`中的`finally`，但仅调用处理器执行链中

**主要流程：**

1.从 `http` 请求头中取出 `token`，
 2.判断是否映射到方法
 3.检查是否有`PassToken`注释，有则跳过认证
 4.检查有没有需要用户登录的注解，有则需要取出并验证
 5.认证通过则可以访问，不通过会报相关错误信息



### 添加拦截器配置

在SpringBoot 2中，在配置类上添加了注解`@Configuration`，标明了该类是一个配置类并且会将该类作为一个`SpringBean`添加到`IOC`容器内。

```java
@Configuration
public class InterceptorConfig implements WebMvcConfigurer {
    
    /**
     * 添加拦截器
     *
     * @param registry
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 拦截所有请求，通过判断是否有 @LoginRequired 注解，决定是否需要登录
        registry.addInterceptor(authenticationInterceptor())
                .addPathPatterns("/**");
    }
    
    @Bean
    public AuthenticationInterceptor authenticationInterceptor() {
        return new AuthenticationInterceptor();
    }
}
```

`InterceptorRegistry`内的`addInterceptor`需要一个实现`HandlerInterceptor`接口的拦截器实例，`addPathPatterns`方法用于设置拦截器的路径过滤规则。
 这里我拦截所有请求，通过判断是否有`@LoginRequired`注解，决定是否需要登录。



### 在Controller接口中加入注解

```java
@RestController
@RequestMapping("api")
public class UserController {
    
    @Autowired
    UserService userService;
    @Autowired
    TokenService tokenService;
    
    //登录
    @PostMapping("/login")
    public Object login(@RequestBody User user){
        JSONObject jsonObject=new JSONObject();
        User userForBase=userService.findByUsername(user);
        if(userForBase==null){
            jsonObject.put("message","登录失败,用户不存在");
            return jsonObject;
            
        }else {
            if (!userForBase.getPassword().equals(user.getPassword())){
                jsonObject.put("message","登录失败,密码错误");
                return jsonObject;
            }else {
                String token = tokenService.getToken(userForBase);
                jsonObject.put("token", token);
                jsonObject.put("user", userForBase);
                return jsonObject;
            }
        }
    }
    
    
    @UserLoginToken
    @GetMapping("/getMessage")
    public String getMessage(){
        return "你已通过验证";
    }
    
}
```

不加注解的话默认不验证，登录接口一般是不验证的。在`getMessage()`中我加上了登录注解，说明该接口必须登录获取`token`后，在请求头中加上`token`并通过验证才可以访问。



### 使用Postman测试接口

在没`token`的情况下访问`api/getMessage`接口


![img](./assets/4630295-7d3360188b09055e.png)

我这里使用了统一异常处理，所以只看到错误`message`。



下面进行登录，来获取`token`，


![img](./assets/4630295-64ee2d44d11a68c4.png)

登录操作我没加验证注解，所以可以直接访问。



把`token`加在请求头中，再次访问`api/getMessage`接口：

**注意:**   这里的`key`一定不能错，因为在拦截器中是取关键字`token`的值， `String token = httpServletRequest.getHeader("token");`。


![img](./assets/4630295-963e2d5356fc5664.png)

 加上`token`之后就可以顺利通过验证和进行接口访问了。