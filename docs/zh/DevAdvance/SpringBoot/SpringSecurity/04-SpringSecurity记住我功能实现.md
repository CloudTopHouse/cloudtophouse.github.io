# 04-SpringSecurity记住我功能实现







## 记住我功能的基本原理

当用户登录发起认证请求时，会通过`UsernamePasswordAuthenticationFilter`进行用户认证，认证成功之后，SpringSecurity 调用前期配置好的记住我功能，实际是调用了`RememberMeService`接口，其接口的实现类会将用户的信息生成`Token`并将它写入 response 的`Cookie`中，在写入的同时，内部的`TokenRepositoryTokenRepository`会将这份`Token`再存入数据库一份。

当用户再次访问服务器资源的时候，首先会经过`RememberMeAuthenticationFiler`过滤器，在这个过滤器里面会读取当前请求中携带的 Cookie，这里存着上次服务器保存 的`Token`，然后去数据库中查找是否有相应的 Token，如果有，则再通过`UserDetailsService`获取用户的信息。



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c40483598ed7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



### 记住我功能的过滤器

从图中可以得知记住我的过滤器在过滤链的中部，注意是在`UsernamePasswordAuthenticationFilter`之后。



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c40714601643?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 前端页面checkbox设置

在 html 中增加记住我复选框checkbox控件，注意其中复选框的`name` 一定必须为`remember-me`

```html
<input type="checkbox" name="remember-me" value="true"/>
```

## 配置cookie存储数据库源

本例中使用了 springboot 管理的数据库源，所以注意要配置`spring-boot-starter-jdbc`的依赖：

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
```

如果不配置会报编译异常：

```
The type org.springframework.jdbc.core.support.JdbcDaoSupport cannot be resolved. It is indirectly referenced from required .class files
```

记住我的安全认证配置：

```java
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private DataSource dataSource;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // 将自定义的验证码过滤器放置在 UsernamePasswordAuthenticationFilter 之前
        http.addFilterBefore(validateCodeFilter, UsernamePasswordAuthenticationFilter.class) 
            .formLogin()
                .loginPage("/login")	 					// 设置登录页面
                .loginProcessingUrl("/user/login") 			// 自定义的登录接口
                .successHandler(myAuthenctiationSuccessHandler)
                .failureHandler(myAuthenctiationFailureHandler)
                .defaultSuccessUrl("/home").permitAll()		// 登录成功之后，默认跳转的页面
                .and().authorizeRequests()					// 定义哪些URL需要被保护、哪些不需要被保护
                .antMatchers("/", "/index", "/user/login", "/code/image").permitAll() // 设置所有人都可以访问登录页面
                .anyRequest().authenticated() 				// 任何请求,登录后可以访问
                .and().csrf().disable() 					// 关闭csrf防护
            .rememberMe()                                   // 记住我配置
                .tokenRepository(persistentTokenRepository())  // 配置数据库源
                .tokenValiditySeconds(3600)
                .userDetailsService(userDetailsService);
    }

    @Bean
    public PersistentTokenRepository persistentTokenRepository() {
        JdbcTokenRepositoryImpl persistentTokenRepository = new JdbcTokenRepositoryImpl();
        // 将 DataSource 设置到 PersistentTokenRepository
        persistentTokenRepository.setDataSource(dataSource);
        // 第一次启动的时候自动建表（可以不用这句话，自己手动建表，源码中有语句的）
        // persistentTokenRepository.setCreateTableOnStartup(true);
        return persistentTokenRepository;
    }
} 
```

注意：在数据库源配置之前，建议手动在数据库中新增一张保存的`cookie`表，其数据库脚本在`JdbcTokenRepositoryImpl`的静态属性中配置了：

```java
public class JdbcTokenRepositoryImpl extends JdbcDaoSupport implements
		PersistentTokenRepository {
	/** Default SQL for creating the database table to store the tokens */
    public static final String CREATE_TABLE_SQL = "create table persistent_logins (username varchar(64) not null, series varchar(64) primary key, "
            + "token varchar(64) not null, last_used timestamp not null)";
}
```

因此可以事先执行以下sql 脚本创建表：

```sql
create table persistent_logins (username varchar(64) not null, series varchar(64) primary key, token varchar(64) not null, last_used timestamp not null);
```

当然，`JdbcTokenRepositoryImpl`自身还有一个`setCreateTableOnStartup()`方法进行开启自动建表操作，但是不建议使用。

当成功登录之后，`RememberMeService`会将成功登录请求的`cookie`存储到配置的数据库中：



![img](https://user-gold-cdn.xitu.io/2019/4/14/16a1c40be0602a39?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)





## 源码分析

### 首次请求

首先进入到`AbstractAuthenticationProcessingFilter`过滤器中的`doFilter()`方法：

```java
public abstract class AbstractAuthenticationProcessingFilter {
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {

        ……

        try {
            authResult = attemptAuthentication(request, response);
            ……
        }
        catch (InternalAuthenticationServiceException failed) {
            ……
        }

        successfulAuthentication(request, response, chain, authResult);
    }
}
```

其中当用户认证成功之后，会进入`successfulAuthentication()`方法，在用户信息被保存在了`SecurityContextHolder`之后，其中就调用了`rememberMeServices.loginSuccess()`：

```java
protected void successfulAuthentication(HttpServletRequest request,
			HttpServletResponse response, FilterChain chain, Authentication authResult)
			throws IOException, ServletException {

    ……

    SecurityContextHolder.getContext().setAuthentication(authResult);

    // 调用记住我服务接口的登录成功方法
    rememberMeServices.loginSuccess(request, response, authResult);

    // Fire event
    if (this.eventPublisher != null) {
        eventPublisher.publishEvent(new InteractiveAuthenticationSuccessEvent(
            authResult, this.getClass()));
    }

    successHandler.onAuthenticationSuccess(request, response, authResult);
}
```

在这个`RememberMeServices`有个抽象实现类，在抽象实现类`loginSuccess()`方法中进行了记住我功能判断，为什么前端的复选框控件的 name 必须为`remember-me`，原因就在此：

```java
public abstract class AbstractRememberMeServices implements RememberMeServices,
		InitializingBean, LogoutHandler {

    public static final String DEFAULT_PARAMETER = "remember-me";
            
    private String parameter = DEFAULT_PARAMETER;

    @Override
    public final void loginSuccess(HttpServletRequest request,
            HttpServletResponse response, Authentication successfulAuthentication) {

        if (!rememberMeRequested(request, parameter)) {
            logger.debug("Remember-me login not requested.");
            return;
        }

        onLoginSuccess(request, response, successfulAuthentication);
    }
}
```

当识别到记住我功能开启的时候，就会进入`onLoginSuccess()`方法，其具体的方法实现在`PersistentTokenBasedRememberMeServices`类中：

```java
public class PersistentTokenBasedRememberMeServices extends AbstractRememberMeServices {
	
    protected void onLoginSuccess(HttpServletRequest request,
            HttpServletResponse response, Authentication successfulAuthentication) {
        String username = successfulAuthentication.getName();

        logger.debug("Creating new persistent login for user " + username);

        PersistentRememberMeToken persistentToken = new PersistentRememberMeToken(
                username, generateSeriesData(), generateTokenData(), new Date());
        try {
            // 保存cookie到数据库
            tokenRepository.createNewToken(persistentToken);
            // 将cookie回写一份到响应中
            addCookie(persistentToken, request, response);
        }
        catch (Exception e) {
            logger.error("Failed to save persistent token ", e);
        }
    }
}
```

上面的`tokenRepository.createNewToken()`和`addCookie()`就将 cookie 保存到数据库并回显到响应中。

### 第二次请求

当第二次请求传到服务器的时候，请求会被`RememberMeAuthenticationFilter`过滤器进行过滤：过滤器首先判定之前的过滤器都没有认证通过当前用户，也就是`SecurityContextHolder`中没有已经认证的信息，所以会调用`rememberMeServices.autoLogin()`的自动登录接口拿到已通过认证的`rememberMeAuth`进行用户认证登录：

```java
public class RememberMeAuthenticationFilter extends GenericFilterBean implements
		ApplicationEventPublisherAware {
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;

        // SecurityContextHolder 不存在已经认证的 authentication，表示前面的过滤器没有做过任何身份认证
        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            // 调用自动登录接口
            Authentication rememberMeAuth = rememberMeServices.autoLogin(request,
                    response);

            if (rememberMeAuth != null) {
                // Attempt authenticaton via AuthenticationManager
                try {
                    rememberMeAuth = authenticationManager.authenticate(rememberMeAuth);

                    // Store to SecurityContextHolder
                    SecurityContextHolder.getContext().setAuthentication(rememberMeAuth);
                    
                    onSuccessfulAuthentication(request, response, rememberMeAuth);

                    ……

                }
                catch (AuthenticationException authenticationException) {
                    ……
                }
            }

            chain.doFilter(request, response);
        }
        else {
            if (logger.isDebugEnabled()) {
                logger.debug("SecurityContextHolder not populated with remember-me token, as it already contained: '"
                        + SecurityContextHolder.getContext().getAuthentication() + "'");
            }

            chain.doFilter(request, response);
        }
    }
}
```

这个自动登录的接口，又由其抽象实现类进行实现：

```java
public abstract class AbstractRememberMeServices implements RememberMeServices,
		InitializingBean, LogoutHandler {
    @Override
    public final Authentication autoLogin(HttpServletRequest request,
            HttpServletResponse response) {
        // 从请求中获取cookie
        String rememberMeCookie = extractRememberMeCookie(request);

        if (rememberMeCookie == null) {
            return null;
        }

        logger.debug("Remember-me cookie detected");

        if (rememberMeCookie.length() == 0) {
            logger.debug("Cookie was empty");
            cancelCookie(request, response);
            return null;
        }

        UserDetails user = null;

        try {
            // 解码请求中的cookie
            String[] cookieTokens = decodeCookie(rememberMeCookie);
            // 根据 cookie 找到用户认证
            user = processAutoLoginCookie(cookieTokens, request, response);
            userDetailsChecker.check(user);

            logger.debug("Remember-me cookie accepted");

            return createSuccessfulAuthentication(request, user);
        }
        catch (CookieTheftException cte) {
            ……
        }

        cancelCookie(request, response);
        return null;
    }
}
```

`processAutoLoginCookie()`的具体实现还是由`PersistentTokenBasedRememberMeServices`来实现，总得来说就是一顿判定当前的`cookieTokens`是不是在数据库中存在`tokenRepository.getTokenForSeries(presentedSeries)`，并判断是不是一样的，如果一样，就是把当前请求的新 token 更新保存到数据库，最后通过当前请求token中的用户名调用`UserDetailsService.loadUserByUsername()`进行用户认证。

```java
public class PersistentTokenBasedRememberMeServices extends AbstractRememberMeServices {
    protected UserDetails processAutoLoginCookie(String[] cookieTokens,
            HttpServletRequest request, HttpServletResponse response) {

        if (cookieTokens.length != 2) {
            throw new InvalidCookieException("Cookie token did not contain " + 2
                    + " tokens, but contained '" + Arrays.asList(cookieTokens) + "'");
        }

        final String presentedSeries = cookieTokens[0];
        final String presentedToken = cookieTokens[1];

        // 从数据库查询上次保存的token
        PersistentRememberMeToken token = tokenRepository.getTokenForSeries(presentedSeries);

        if (token == null) {
            // 查询不到抛异常
            throw new RememberMeAuthenticationException(……);
        }

        // token 不匹配抛出异常
        // We have a match for this user/series combination
        if (!presentedToken.equals(token.getTokenValue())) {
            // Token doesn't match series value. Delete all logins for this user and throw
            // an exception to warn them.
            tokenRepository.removeUserTokens(token.getUsername());

            throw new CookieTheftException(……);
        }

        // 过期判断
        if (token.getDate().getTime() + getTokenValiditySeconds() * 1000L < System.currentTimeMillis()) {
            throw new RememberMeAuthenticationException("Remember-me login has expired");
        }

        PersistentRememberMeToken newToken = new PersistentRememberMeToken(token.getUsername(), token.getSeries(), generateTokenData(), new Date());

        try {
            tokenRepository.updateToken(newToken.getSeries(), newToken.getTokenValue(), newToken.getDate());
            addCookie(newToken, request, response);
        }
        catch (Exception e) {
            ……
        }

        return getUserDetailsService().loadUserByUsername(token.getUsername());
    }
}
```

> 个人博客：[woodwhale's blog](https://woodwhales.github.io/)
>
> 博客园：[木鲸鱼的博客](https://www.cnblogs.com/mujingyu/)


作者：木鲸鱼
链接：https://juejin.im/post/5cb3438ee51d456e63760455
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。