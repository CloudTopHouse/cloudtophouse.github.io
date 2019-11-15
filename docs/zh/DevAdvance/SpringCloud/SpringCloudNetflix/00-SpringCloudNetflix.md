# Spring Cloud Netflix



## 概述

目前市场上主流的 **第一套微服务架构解决方案：Spring Boot + Spring Cloud Netflix**

Spring Cloud 为开发人员提供了快速构建分布式系统中一些常见模式的工具（例如配置管理，服务发现，断路器，智能路由，微代理，控制总线）。分布式系统的协调导致了样板模式, 使用 Spring Cloud 开发人员可以快速地支持实现这些模式的服务和应用程序。他们将在任何分布式环境中运行良好，包括开发人员自己的笔记本电脑，裸机数据中心，以及 Cloud Foundry 等托管平台。

**目前业界对 Spring Cloud 使用最广的就是 Spring Cloud Netflix 了。但由于 Spring Cloud Netflix 项目已进入维护期，这意味着继续使用它再也没有新功能福利了；故我们接下来的项目会采用 Spring Cloud Alibaba方案来替代 Spring Cloud Netflix！**

[**开始学习**](https://funtl.com/zh/spring-cloud-netflix/)

## 项目已经进入维护模式

[【官方新闻】Spring Cloud Greenwich.RC1 available now](https://spring.io/blog/2018/12/12/spring-cloud-greenwich-rc1-available-now)

**2018 年 12 月 12 日，Netflix 宣布 Spring Cloud Netflix 系列技术栈进入维护模式（不再添加新特性）**

最近，Netflix 宣布 `Hystrix` 正在进入维护模式。自 2016 年以来，`Ribbon` 已处于类似状态。虽然 Hystrix 和 Ribbon 现已处于维护模式，但它们仍然在 Netflix 大规模部署。

`Hystrix Dashboard` 和 `Turbine` 已被 **Atlas** 取代。这些项目的最后一次提交分别是 2 年前和 4 年前。`Zuul1` 和 `Archaius1` 都被后来不兼容的版本所取代。

以下 Spring Cloud Netflix 模块和相应的 Starter 将进入维护模式：

- spring-cloud-netflix-archaius
- spring-cloud-netflix-hystrix-contract
- spring-cloud-netflix-hystrix-dashboard
- spring-cloud-netflix-hystrix-stream
- spring-cloud-netflix-hystrix
- spring-cloud-netflix-ribbon
- spring-cloud-netflix-turbine-stream
- spring-cloud-netflix-turbine
- spring-cloud-netflix-zuul

### 什么是维护模式

将模块置于维护模式，意味着 Spring Cloud 团队将不会再向模块添加新功能。我们将修复 block 级别的 bug 以及安全问题，我们也会考虑并审查社区的小型 pull request。



### 替代品

我们建议对这些模块提供的功能进行以下替换

| CURRENT                     | REPLACEMENT                                       |
| --------------------------- | ------------------------------------------------- |
| Hystrix                     | Resilience4j                                      |
| Hystrix Dashboard / Turbine | Micrometer + Monitoring System                    |
| Ribbon                      | Spring Cloud Loadbalancer                         |
| Zuul 1                      | Spring Cloud Gateway                              |
| Archaius 1                  | Spring Boot external config + Spring Cloud Config |



### 其它补充

#### Netflix Concurrency Limits

并发限制模块，它是 Netflix 开源的限流器项目，Spring Cloud 在 Greenwich 版本中引入 spring-cloud-netflix-concurrency-limits

#### Archaius 1

有些人对它可能比较陌生，也是 Netflix 公司开源项目，基于 Java 的配置管理类库（apache common configuration 类库的扩展），主要用于多配置存储的动态获取。它主要的特性：

- 动态类型化属性
- 高效和线程安全的配置操作
- 配置改变时的回调机制
- 轮询框架
- JMX，通过Jconsole检查和调用操作属性
- 组合配置

#### Resilience4j

目前还在孵化中，Spring 可能是要抽象一个断路器的统一规范，让不同的断路器（Hystrix、Resilience4j、**Sentinel（阿里开源）**）选择使用

#### Micrometer

Spring Boot 2 中的 Spring Boot Actuator 底层用的就是 Micrometer，它是 **Pivotal** 公司（也就是 Spring 所在的公司）开源的监控门面，类似于监控世界的 Slf4j。**Resilience4j 自带整合了 Micrometer**；目前还无法判断是否比 Hystrix Dashboard /Turbine 的更强大，更好用。

#### Spring Cloud Loadbalancer

目前还中孵化中，使用上和 Ribbon 区别不大

#### Spring Cloud Gateway

Zuul 持续跳票 1 年多，1.x 是一个基于阻塞 IO 的 API Gateway 以及 Servlet；直到 2018 年 5 月，Zuul 2.x（基于 Netty，也是非阻塞的，支持长连接）才发布，但 Spring Cloud 暂时还没有整合计划。Spring Cloud Gateway 比 Zuul 1.x 系列的性能和功能整体要好。

#### Spring Boot external config + Spring Cloud Config

Netflix 开源的组件（Archaius 1/Ribbon/Hystrix）都没有使用 Spring Boot 的规范（spring-boot-configuration-processor），根本没有 metadata.json 文件，于是这部分配置 IDE 无法给你提示