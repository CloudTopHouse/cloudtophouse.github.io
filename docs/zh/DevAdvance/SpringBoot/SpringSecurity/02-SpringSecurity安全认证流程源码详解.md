# 02-SpringSecurity安全认证流程源码详解





## 用户认证流程

### UsernamePasswordAuthenticationFilter

我们直接来看`UsernamePasswordAuthenticationFilter`类，

```java
public class UsernamePasswordAuthenticationFilter extends
		AbstractAuthenticationProcessingFilter {
    
    public Authentication attemptAuthentication(HttpServletRequest request,
                HttpServletResponse response) throws AuthenticationException {
        // 判断是否是 POST 请求
        if (postOnly && !request.getMethod().equals("POST")) {
            throw new AuthenticationServiceException(
                "Authentication method not supported: " + request.getMethod());
        }
        
        // 获取请求中的用户，密码。
        // 就是最简单的：request.getParameter(xxx)
        String username = obtainUsername(request);
        String password = obtainPassword(request);

        if (username == null) {
            username = "";
        }

        if (password == null) {
            password = "";
        }

        username = username.trim();

        // 生成 authRequest，本质就是个 usernamePasswordAuthenticationToken
        UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(
            username, password);

        // 把 request 请求也一同塞进 token 里
        // Allow subclasses to set the "details" property
        setDetails(request, authRequest);
        // 将 authRequest 塞进 AuthenticationManager并返回
        return this.getAuthenticationManager().authenticate(authRequest);
    }
}
```

在`attemptAuthentication()`方法中：主要是先进行请求判断并获取`username`和`password`的值，然后再生成一个`UsernamePasswordAuthenticationToken`对象，将这个对象塞进`AuthenticationManager`对象并返回，注意：**此时的`authRequest`的权限是没有任何值的**。

#### UsernamePasswordAuthenticationToken

不过我们可以先看看`UsernamePasswordAuthenticationToken`的构造方法：

```java
public UsernamePasswordAuthenticationToken(Object principal, Object credentials) {
    super(null);
    this.principal = principal;
    this.credentials = credentials;
    setAuthenticated(false);
}
```

其实`UsernamePasswordAuthenticationToken`是继承于`Authentication`，该对象在学习笔记一中的中"自定义处理登录成功/失败"章节里的自定义登录成功里有提到过，它是处理登录成功回调方法中的一个参数，里面包含了用户信息、请求信息等参数。



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c380da0838c4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



来一张继承关系图，对其有个大概的认识，注意到`Authentication`继承了`Principal`。

#### AuthenticationManager

`AuthenticationManager`是一个接口，它的所有实现类如图：



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c383add89616?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



其中一个十分核心的类就是：`ProviderManager`，在`attemptAuthentication()`方法最后返回的就是这个类

```
this.getAuthenticationManager().authenticate(authRequest);
```

进入`authenticate()`方法查看具体做了什么：

```java
public Authentication authenticate(Authentication authentication)
			throws AuthenticationException {
    Class<? extends Authentication> toTest = authentication.getClass();
    AuthenticationException lastException = null;
    AuthenticationException parentException = null;
    Authentication result = null;
    Authentication parentResult = null;
    boolean debug = logger.isDebugEnabled();

    for (AuthenticationProvider provider : getProviders()) {
        // 1.判断是否有provider支持该Authentication
        if (!provider.supports(toTest)) {
            continue;
        }

        if (debug) {
            logger.debug("Authentication attempt using "
                         + provider.getClass().getName());
        }

        try {
            // 2. 真正的逻辑判断
            result = provider.authenticate(authentication);

            if (result != null) {
                copyDetails(authentication, result);
                break;
            }
        }
        catch (AccountStatusException e) {
           ……
        }
    }

    ……
}
```

这里首先通过 provider 判断是否支持当前传入进来的`Authentication`，目前我们使用的是`UsernamePasswordAuthenticationToken`，因为除了帐号密码登录的方式，还会有其他的方式，比如`JwtAuthenticationToken`。

从整体来看`Authentication` 的实现类如图：



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c387cd4854cd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



[官方 API 文档](https://docs.spring.io/spring-security/site/docs/5.2.0.BUILD-SNAPSHOT/api/index.html?overview-summary.html)列出了所有的子类



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c38a06c358ff?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



从整体来看`AuthenticationProvider`的实现类如图：



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c38c5cc8d395?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



[官方 API 文档](https://docs.spring.io/spring-security/site/docs/5.2.0.BUILD-SNAPSHOT/api/index.html?overview-summary.html)列出了所有的子类



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c38e131550a0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



根据我们目前所使用的`UsernamePasswordAuthenticationToken`，provider 对应的是`AbstractUserDetailsAuthenticationProvider`抽象类的子类`DaoAuthenticationProvider`，其`authenticate()`属于抽象类本身的方法。

```java
public Authentication authenticate(Authentication authentication)
			throws AuthenticationException {
    Assert.isInstanceOf(UsernamePasswordAuthenticationToken.class, authentication, () -> messages.getMessage(
                            "AbstractUserDetailsAuthenticationProvider.onlySupports",
                            "Only UsernamePasswordAuthenticationToken is supported"));

    // Determine username
    String username = (authentication.getPrincipal() == null) ? "NONE_PROVIDED"
        : authentication.getName();

    boolean cacheWasUsed = true;
    // 1.从缓存中获取 UserDetails
    UserDetails user = this.userCache.getUserFromCache(username);

    if (user == null) {
        cacheWasUsed = false;

        try {
            // 2.缓存获取不到，就去接口实现类中获取
            user = retrieveUser(username,
                                (UsernamePasswordAuthenticationToken) authentication);
        }
        catch (UsernameNotFoundException notFound) {
            ……
        }

        Assert.notNull(user,
                       "retrieveUser returned null - a violation of the interface contract");
    }

    try {
        // 3.用户信息预检查（用户是否密码过期，用户信息被删除等）
        preAuthenticationChecks.check(user);
        // 4.附加的检查（密码检查：匹配用户的密码和服务器中的用户密码是否一致）
        additionalAuthenticationChecks(user,
                                       (UsernamePasswordAuthenticationToken) authentication);
    }
    catch (AuthenticationException exception) {
        if (cacheWasUsed) {
            // There was a problem, so try again after checking
            // we're using latest data (i.e. not from the cache)
            cacheWasUsed = false;
            user = retrieveUser(username,
                                (UsernamePasswordAuthenticationToken) authentication);
            preAuthenticationChecks.check(user);
            additionalAuthenticationChecks(user,
                                           (UsernamePasswordAuthenticationToken) authentication);
        }
        else {
            throw exception;
        }
    }

    // 5.最后的检查
    postAuthenticationChecks.check(user);

    ……

    // 6.返回真正的经过认证的Authentication 
    return createSuccessAuthentication(principalToReturn, authentication, user);
}
```

**注意：** `retrieveUser()`的具体方法实现是由`DaoAuthenticationProvider`类完成的：

```java
public class DaoAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {	
	
    protected final UserDetails retrieveUser(String username,
            UsernamePasswordAuthenticationToken authentication)
            throws AuthenticationException {
        prepareTimingAttackProtection();
        try {
            // 获取用户信息
            UserDetails loadedUser = this.getUserDetailsService().loadUserByUsername(username);
            if (loadedUser == null) {
                throw new InternalAuthenticationServiceException(
                        "UserDetailsService returned null, which is an interface contract violation");
            }
            return loadedUser;
        }
        catch (UsernameNotFoundException ex) {
            ……
        }
    }
}
```

同时`createSuccessAuthentication()`的方法也是由`DaoAuthenticationProvider`类来完成的：

```java
// 子类拿 user 对象
@Override
protected Authentication createSuccessAuthentication(Object principal,
                                                     Authentication authentication, UserDetails user) {
    boolean upgradeEncoding = this.userDetailsPasswordService != null
        && this.passwordEncoder.upgradeEncoding(user.getPassword());
    if (upgradeEncoding) {
        String presentedPassword = authentication.getCredentials().toString();
        String newPassword = this.passwordEncoder.encode(presentedPassword);
        user = this.userDetailsPasswordService.updatePassword(user, newPassword);
    }
    // 调用父类的方法完成 Authentication 的创建
    return super.createSuccessAuthentication(principal, authentication, user);
}

// 创建已认证的 Authentication
protected Authentication createSuccessAuthentication(Object principal,
			Authentication authentication, UserDetails user) {
    UsernamePasswordAuthenticationToken result = new UsernamePasswordAuthenticationToken(
        principal, authentication.getCredentials(),
        authoritiesMapper.mapAuthorities(user.getAuthorities()));
    result.setDetails(authentication.getDetails());

    return result;
}
```

小结：`authenticate()`的认证逻辑

1. 去调用自己实现的`UserDetailsService`，返回`UserDetails`
2. 对 UserDetails 的信息进行校验，主要是帐号是否被冻结，是否过期等
3. 对密码进行检查，这里调用了`PasswordEncoder`，检查 UserDetails 是否可用。
4. 返回经过认证的`Authentication`

> 编码技巧提示：这里在认证之前使用了`Assert.isInstanceOf()`进行断言校验，方法内部也不断用了`Assert.notNull()`，这种编码非常的灵巧，省去了后续的类型判断。

这里的两次对`UserDetails`的检查，主要就是通过它的四个返回 boolean 类型的方法（`isAccountNonExpired()`，`isAccountNonLocked()`，`isCredentialsNonExpired()`，`isEnabled()`）。

经过信息的校验之后，通过`UsernamePasswordAuthenticationToken`的全参构造方法，返回了一个已经过认证的`Authentication`。

拿到经过认证的`Authentication`之后，至此`UsernamePasswordAuthenticationFilter`的过滤步骤就完全结束了，之后就会进入`BasicAuthenticationFilter`，具体来说就是去调用`successHandler`。或者未通过认证，去调用`failureHandler`。



## 已认证数据共享

完成了用户认证处理流程之后，我们思考一下是如何在多个请求之间共享这个认证结果的呢？因为没有做关于这方面的配置，所以可以联想到默认的方式应该是在session中存入了认证结果。思考：那么是什么时候存放入session中的呢？

认证流程完毕之后，再看是谁调用的它，发现是`AbstractAuthenticationProcessingFilter`的`doFilter()`进行调用的，这是`AbstractAuthenticationProcessingFilter`继承关系结构图：



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c39ec1d0d29e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



当认证成功之后会调用`successfulAuthentication(request, response, chain, authResult)`，该方法中，不仅调用了`successHandler`，还有一行比较重要的代码：

```java
public abstract class AbstractAuthenticationProcessingFilter extends GenericFilterBean
		implements ApplicationEventPublisherAware, MessageSourceAware {
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        // 调用了 UsernamePasswordAuthenticationFilter
        authResult = attemptAuthentication(request, response);
        
        ……
        // 调用方法，目的是保存到session   
        successfulAuthentication(request, response, chain, authResult);
    }

    // 将成功认证的用户信息保存到session
    protected void successfulAuthentication(HttpServletRequest request,
            HttpServletResponse response, FilterChain chain, Authentication authResult)
            throws IOException, ServletException {

        if (logger.isDebugEnabled()) {
            logger.debug("Authentication success. Updating SecurityContextHolder to contain: "
                         + authResult);
        }

        // 保存到 SecurityContextHolder 的静态属性 SecurityContextHolderStrategy 里， 非常重要的代码
        SecurityContextHolder.getContext().setAuthentication(authResult);

        rememberMeServices.loginSuccess(request, response, authResult);

        // Fire event
        if (this.eventPublisher != null) {
            eventPublisher.publishEvent(new InteractiveAuthenticationSuccessEvent(
                authResult, this.getClass()));
        }

        successHandler.onAuthenticationSuccess(request, response, authResult);
    }
}

// SecurityContextHolder类中存着 静态属性：SecurityContextHolderStrategy
public class SecurityContextHolder {
    ……
    private static SecurityContextHolderStrategy strategy;
    ……

    public static void setContext(SecurityContext context) {
        strategy.setContext(context);
    }
}
```

`SecurityContextHolderStrategy`接口的所有实现类：



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c3a2d6a34035?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



非常显眼的看出：`ThreadLocalSecurityContextHolderStrategy`类：

```java
final class ThreadLocalSecurityContextHolderStrategy implements
		SecurityContextHolderStrategy {

    private static final ThreadLocal<SecurityContext> contextHolder = new ThreadLocal<>();

    ……

    public void setContext(SecurityContext context) {
        Assert.notNull(context, "Only non-null SecurityContext instances are permitted");
        // 将已认证的用户对象保存到 ThreadLocal<SecurityContext> 中
        contextHolder.set(context);
    }
    ……
}
```

> 注意：`SecurityContext`类的`equals()`和`hashCode()`方法已经重写了，用来保证了authentication的唯一性。

身份认证成功后，最后在`UsernamePasswordAuthenticationFilter`返回后会进入一个`AbstractAuthenticationProcessingFilter`类中调用`successfulAuthentication()`方法，这个方法最后会返回我们自己定义的登录成功处理器`handler`。

在返回之前，它会调用`SecurityContext`，最后将认证的结果放入`SecurityContextHolder`中，SecurityContext 类很简单，重写了`equals()` 方法和`hashCode()`方法，保证了authentication的唯一性。

从代码可以看出：`SecurityContextHolder`类实际上是对`ThreadLocal`的一个封装，可以在不同方法之间进行通信，可以简单理解为线程级别的一个全局变量。

因此，可以在同一个线程中的不同方法中获取到认证信息。最后会被`SecurityContextPersistenceFilter`过滤器使用，这个过滤器的作用是：

当一个请求来的时候，它会将 session 中的值传入到该线程中，当请求返回的时候，它会判断该请求线程是否有 `SecurityContext`，如果有它会将其放入到 session 中，因此保证了请求结果可以在不同的请求之间共享。



## 用户认证流程总结

引用徐靖峰在个人博客[Spring Security(一)--Architecture Overview](https://www.cnkirito.moe/spring-security-1/)中的概括性总结，非常的到位：

1. 用户名和密码被过滤器获取到，封装成`Authentication`，通常情况下是`UsernamePasswordAuthenticationToken`这个实现类。
2. `AuthenticationManager` 身份管理器负责验证这个`Authentication`。
3. 认证成功后，`AuthenticationManager`身份管理器返回一个被填充满了信息的（包括上面提到的权限信息，身份信息，细节信息，但密码通常会被移除）`Authentication`实例。
4. `SecurityContextHolder`安全上下文容器将第3步填充了信息的`Authentication`，通过`SecurityContextHolder.getContext().setAuthentication(…)`方法，设置到其中。

高度概括起来本章节所有用的核心认证相关接口：`SecurityContextHolder`是

身份信息的存放容器，`Authentication`是身份信息的抽象，`AuthenticationManager`是身份认证器，一般常用的是用户名+密码的身份认证器，还有其它认证器，如邮箱+密码、手机号码+密码等。

再引用一张十分流行的流程图来表示用户的认证过程：



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c3a9a8ff6d80?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 架构概览图

为了更加形象的理解，在徐靖峰大佬的经典架构图之上，根据自己的理解，做了更多的细化和调整：



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c3ae19ff729c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 获取认证用户信息

如果我们需要获取用的校验过的所有信息，该如何获取呢？上面我们知道了会将校验结果放入 session 中，因此，我们可以通过 session 获取：

```java
@GetMapping("/me1")
@ResponseBody
public Object getMeDetail() {
    return SecurityContextHolder.getContext().getAuthentication();
}

@GetMapping("/me2")
@ResponseBody
public Object getMeDetail(Authentication authentication){
    return authentication;
}
```

在登录成功之后，上面有两种方式来获取，访问上面的请求，就会获取用户全部的校验信息，包括ip地址等信息。



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c3b1a944a292?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



如果我们只想获取用户名和密码以及它的权限，不需要ip地址等太多的信息可以使用下面的方式来获取信息：

```java
@GetMapping("/me3")
@ResponseBody
public Object getMeDetail(@AuthenticationPrincipal UserDetails userDetails){
    return userDetails;
}
```



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c3b49ee9d761?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



参考资料：

[www.cnkirito.moe/spring-secu…](https://www.cnkirito.moe/spring-security-1/)

[blog.csdn.net/u013435893/…](https://blog.csdn.net/u013435893/article/details/79605239)

[blog.csdn.net/qq_37142346…](https://blog.csdn.net/qq_37142346/article/details/80032336)

> 个人博客：[woodwhale's blog](https://woodwhales.github.io/)
>
> 博客园：[木鲸鱼的博客](https://www.cnblogs.com/mujingyu/)



作者：木鲸鱼
链接：https://juejin.im/post/5cb3416ee51d456e63760454
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。