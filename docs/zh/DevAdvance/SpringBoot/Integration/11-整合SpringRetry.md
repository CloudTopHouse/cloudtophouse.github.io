# 11-整合SpringRetry



## 一.场景

在分布式系统中，为了保证数据分布式事务的强一致性，大家在调用RPC接口或者发送MQ时，针对可能会出现网络抖动请求超时情况采取一下重试操作。大家用的最多的重试方式就是MQ了，但是如果你的项目中没有引入MQ，那就不方便了。



但是spring也是很好的帮我们想到了这个问题，也给了我们一种解决方案，就是接下来我们要说的[spring-retry](https://github.com/spring-projects/spring-retry)，与springboot也是非常容易整合的。让我们开始吧！



我们先来看一下官网给出的定义

> This project provides declarative retry support for Spring applications. It is used in Spring Batch, Spring Integration, and others. Imperative retry is also supported for explicit usage.



## 二.概念

spring对于重试机制的实现，给了几个抽象。

1.  BackOff：补偿值，一般指失败后多久进行重试的延迟值。
2.  Sleeper：暂停应用的工具，通常用来应用补偿值。
3.  BackOffPolicy：补偿策略，决定失败后如何确定补偿值。
4.  RetryContext：重试上下文，代表了能被重试动作使用的资源。
5.  RetryPolicy：重试策略，决定失败能否重试。
6.  RecoveryCallback：定义一个动作recover，在重试耗尽后的动作。
7.  RetryCallback：具体的重试动作。
8.  RetryOperations：通过传递RetryCallback，进行重试操作。
9.  RetryState：重试状态，通常包含一个重试的键值。
10.  RetryStatistics和RetryListener，用来监控Retry的执行情况，并生成统计信息。



## 三.spring-retry的官网教程

spring-boot项目使用spring-retry非常简单，在配置类加上[@EnableRetry](https://github.com/EnableRetry)注解启用spring-retry，然后在需要失败重试的方法加[@Retryable](https://github.com/Retryable)注解即可，spring-retry通过捕获异常来触发重试机制。



### 声明式使用
 官方给的代码如下：

```java
@Configuration
@EnableRetry
public class Application {

    @Bean
    public Service service() {
        return new Service();
    }

}

@Service
class Service {
    @Retryable(RemoteAccessException.class)
    public void service() {
        // ... do something
    }
    @Recover
    public void recover(RemoteAccessException e) {
       // ... panic
    }
}
```

通过 `@EnableRetry` 就可以启用Retry功能了。

需要被重试的方法加上 `@Retryable()`，就能在指定的异常出现情况下重试，而当默认的失败次数到达后（查看SimpleRetryPolicy可知，就是试3次），就会调用 `@Recover` 注解的方法，进行恢复。

当然在@Retryable上，可以配置属性，更加细化：
例如：@Retryable(value= {RemoteAccessException.class},maxAttempts = 5,backoff = @Backoff(delay = 5000l,multiplier = 1))
指定，重试5次，每次补偿(延迟5秒)，每次倍数为1（不变）。



几个注解的参数解释

> **@EnableRetry**  开启重试。
>
> Boolean类型，用于指明代理方式【true：cglib代理，false：jdk动态代理】默认使用jdk动态代理。
>
> 在spring Boot中此参数写在程序入口即可。

> **@Retryable**  标注此注解的方法在发生异常时会进行重试
>
> - value：Class[]类型，用于指定需要重试的异常类型
> - include：Class[]类型，指定处理的异常类和value一样，默认为空，当exclude也为空时，默认所有异常
> - exclude：Class[]类型，指定异常不处理，默认空，当include也为空时，默认所有异常
> - maxAttempts：int类型，指定最多重试次数，默认3次。
> - backoff： Backoff类型，指明重试补偿策略。默认使用@Backoff注解

> **@Backoff**  重试补偿策略
>
> - 不设置参数时，默认使用FixedBackOffPolicy（指定等待时间），重试等待1000ms
> - 设置delay，使用FixedBackOffPolicy（指定等待- - 设置delay和maxDealy时，重试等待在这两个值之间均态分布
> - 设置delay、maxDealy、multiplier，使用 ExponentialBackOffPolicy（指数级重试间隔的实现 ），multiplier即指定延迟倍数，比如delay=5000L，multiplier=2，则第一次重试为5秒，第二次为10秒，第三次为20秒

> **@Recover**  用于@Retryable重试失败后处理方法。
>
> 该注解用于恢复处理方法，当全部尝试都失败时执行。
> 
> 返回参数必须和`@Retryable`修饰的方法返回参数完全一样。第一个参数必须是异常，且一定要是@Retryable抛出的异常，否则无法识别。其他参数和`@Retryable`修饰的方法参数顺序一致。





### 核心API-RetryTemplate

声明式的使用，实际上是由spring-retry在内部生成了一个默认的RetryTemplate，由它封装我们自己写的函数完成的重试。这有点像@Scheduled，内部生成了一个ThreadPoolTaskExecutor完成定时任务的调度。虽然简单，但是可配置的东西太少了，如果想用spring-retry强大的策略机制，并必须定制化RetryTemplate。



官方的API使用demo如下：

```java
RetryTemplate template = new RetryTemplate();

TimeoutRetryPolicy policy = new TimeoutRetryPolicy();
policy.setTimeout(30000L);

template.setRetryPolicy(policy);

Foo result = template.execute(new RetryCallback<Foo>() {

    public Foo doWithRetry(RetryContext context) {
        // Do stuff that might fail, e.g. webservice operation
        return result;
    }

});
```

可以看出，new出一个RetryTemplate对象后，可以给它设置重试策略、补偿策略、重试监听器等属性。

核心是在template.execute()，传递一个RetryCallback，内部执行我们需要重试的具体方法。

RetryTemplate是标准spring的××Template风格（脑补jdbcTemplate），内部doExecute()方法实现了如何开启重试上下文，获取补偿上下文，在try/catch中执行doWithRetry()，出现异常捕捉下来，如何应用重试策略决定重试，最后如何应用回退方法，关闭上下文等。这些都模板化了，我们只需要要传入RetryCallback和RecoveryCallback(连这个也可省)。





## 四.Spring Boot 集成实战

### 添加依赖

```xml
<!-- 重试机制 -->
<dependency>
    <groupId>org.springframework.retry</groupId>
    <artifactId>spring-retry</artifactId>
</dependency>
```

### 在启动入口加入重试配置

添加@EnableRetry注解

```java
@EnableRetry
@SpringBootApplication
public class RetryApplication {

  public static void main(String[] args) {
    SpringApplication.run(RetryApplication.class, args);
  }
    
}
```

### 编写重试主业务类代码

Service 接口

```java
/**
 * Description: 重试接口
 *
 * @author: Ryu Zheng
 * @date: 2019.12.25
 */
public interface RetryService {

    /**
     * 重试方法主体
     *
     * @param num
     */
    void retry(int num);

    /**
     * 重试全部失败后调用
     *
     * @param e 异常
     * @return
     */
    void recover(RemoteAccessException e);
}
```

Service 实现类

```java
/**
 * Description: 重试接口实现类
 *
 * @author: Ryu Zheng
 * @date: 2019.12.25
 */
@Service
public class RetryServiceImpl implements RetryService {

    private final static Logger logger = LoggerFactory.getLogger(RetryServiceImpl.class);

    private final int totalNum = 100;

    @Retryable(value = {RemoteAccessException.class}, maxAttempts = 3, backoff = @Backoff(delay = 4000L, multiplier = 1.5))
    @Override
    public void retry(int num) {
        logger.info("减库存开始" + LocalTime.now());

        //触发重试
        if (num <= 0) {
            throw new RemoteAccessException("数量不对");
        }

        int stock = totalNum - num;
        logger.info("减库存执行结束，剩余库存为：" + stock + "," + LocalTime.now());
    }

    @Recover
    @Override
    public void recover(RemoteAccessException e) {
        logger.warn("减库存失败！" + e.getMessage() + LocalTime.now());
    }

}
```



### 编写测试类

```java
/**
 * ==================================================================
 * <p>
 * Description: 重试Service的单元测试类
 * <p>
 * Version: v1.0
 * <p>
 * Copyright: All rights reserved by Ryu.
 * ==================================================================
 *
 * @author Ryu
 * @date 2019/12/25
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class RetryServiceTest {

    @Autowired
    private RetryService retryService;

    @Test
    public void retry() {
        retryService.retry(0);
    }

}
```

执行测试类，结果如下：

```
2019-12-25 15:23:03.495 INFO [main] com.devclub.crays.service.impl.RetryServiceImpl.retry:30  - 减库存开始15:23:03.495
2019-12-25 15:23:07.497 INFO [main] com.devclub.crays.service.impl.RetryServiceImpl.retry:30  - 减库存开始15:23:07.496
2019-12-25 15:23:13.500 INFO [main] com.devclub.crays.service.impl.RetryServiceImpl.retry:30  - 减库存开始15:23:13.500
2019-12-25 15:23:13.500 WARN [main] com.devclub.crays.service.impl.RetryServiceImpl.recover:44  - 减库存失败！数量不对15:23:13.500
```








