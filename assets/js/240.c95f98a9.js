(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{962:function(r,t,i){"use strict";i.r(t);var e=i(28),a=Object(e.a)({},(function(){var r=this,t=r.$createElement,i=r._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[i("h1",{attrs:{id:"spring-cloud-netflix"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-netflix"}},[r._v("#")]),r._v(" Spring Cloud Netflix")]),r._v(" "),i("h2",{attrs:{id:"概述"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[r._v("#")]),r._v(" 概述")]),r._v(" "),i("p",[r._v("目前市场上主流的 "),i("strong",[r._v("第一套微服务架构解决方案：Spring Boot + Spring Cloud Netflix")])]),r._v(" "),i("p",[r._v("Spring Cloud 为开发人员提供了快速构建分布式系统中一些常见模式的工具（例如配置管理，服务发现，断路器，智能路由，微代理，控制总线）。分布式系统的协调导致了样板模式, 使用 Spring Cloud 开发人员可以快速地支持实现这些模式的服务和应用程序。他们将在任何分布式环境中运行良好，包括开发人员自己的笔记本电脑，裸机数据中心，以及 Cloud Foundry 等托管平台。")]),r._v(" "),i("p",[i("strong",[r._v("目前业界对 Spring Cloud 使用最广的就是 Spring Cloud Netflix 了。但由于 Spring Cloud Netflix 项目已进入维护期，这意味着继续使用它再也没有新功能福利了；故我们接下来的项目会采用 Spring Cloud Alibaba方案来替代 Spring Cloud Netflix！")])]),r._v(" "),i("p",[i("a",{attrs:{href:"https://funtl.com/zh/spring-cloud-netflix/",target:"_blank",rel:"noopener noreferrer"}},[i("strong",[r._v("开始学习")]),i("OutboundLink")],1)]),r._v(" "),i("h2",{attrs:{id:"项目已经进入维护模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#项目已经进入维护模式"}},[r._v("#")]),r._v(" 项目已经进入维护模式")]),r._v(" "),i("p",[i("a",{attrs:{href:"https://spring.io/blog/2018/12/12/spring-cloud-greenwich-rc1-available-now",target:"_blank",rel:"noopener noreferrer"}},[r._v("【官方新闻】Spring Cloud Greenwich.RC1 available now"),i("OutboundLink")],1)]),r._v(" "),i("p",[i("strong",[r._v("2018 年 12 月 12 日，Netflix 宣布 Spring Cloud Netflix 系列技术栈进入维护模式（不再添加新特性）")])]),r._v(" "),i("p",[r._v("最近，Netflix 宣布 "),i("code",[r._v("Hystrix")]),r._v(" 正在进入维护模式。自 2016 年以来，"),i("code",[r._v("Ribbon")]),r._v(" 已处于类似状态。虽然 Hystrix 和 Ribbon 现已处于维护模式，但它们仍然在 Netflix 大规模部署。")]),r._v(" "),i("p",[i("code",[r._v("Hystrix Dashboard")]),r._v(" 和 "),i("code",[r._v("Turbine")]),r._v(" 已被 "),i("strong",[r._v("Atlas")]),r._v(" 取代。这些项目的最后一次提交分别是 2 年前和 4 年前。"),i("code",[r._v("Zuul1")]),r._v(" 和 "),i("code",[r._v("Archaius1")]),r._v(" 都被后来不兼容的版本所取代。")]),r._v(" "),i("p",[r._v("以下 Spring Cloud Netflix 模块和相应的 Starter 将进入维护模式：")]),r._v(" "),i("ul",[i("li",[r._v("spring-cloud-netflix-archaius")]),r._v(" "),i("li",[r._v("spring-cloud-netflix-hystrix-contract")]),r._v(" "),i("li",[r._v("spring-cloud-netflix-hystrix-dashboard")]),r._v(" "),i("li",[r._v("spring-cloud-netflix-hystrix-stream")]),r._v(" "),i("li",[r._v("spring-cloud-netflix-hystrix")]),r._v(" "),i("li",[r._v("spring-cloud-netflix-ribbon")]),r._v(" "),i("li",[r._v("spring-cloud-netflix-turbine-stream")]),r._v(" "),i("li",[r._v("spring-cloud-netflix-turbine")]),r._v(" "),i("li",[r._v("spring-cloud-netflix-zuul")])]),r._v(" "),i("h3",{attrs:{id:"什么是维护模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什么是维护模式"}},[r._v("#")]),r._v(" 什么是维护模式")]),r._v(" "),i("p",[r._v("将模块置于维护模式，意味着 Spring Cloud 团队将不会再向模块添加新功能。我们将修复 block 级别的 bug 以及安全问题，我们也会考虑并审查社区的小型 pull request。")]),r._v(" "),i("h3",{attrs:{id:"替代品"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#替代品"}},[r._v("#")]),r._v(" 替代品")]),r._v(" "),i("p",[r._v("我们建议对这些模块提供的功能进行以下替换")]),r._v(" "),i("table",[i("thead",[i("tr",[i("th",[r._v("CURRENT")]),r._v(" "),i("th",[r._v("REPLACEMENT")])])]),r._v(" "),i("tbody",[i("tr",[i("td",[r._v("Hystrix")]),r._v(" "),i("td",[r._v("Resilience4j")])]),r._v(" "),i("tr",[i("td",[r._v("Hystrix Dashboard / Turbine")]),r._v(" "),i("td",[r._v("Micrometer + Monitoring System")])]),r._v(" "),i("tr",[i("td",[r._v("Ribbon")]),r._v(" "),i("td",[r._v("Spring Cloud Loadbalancer")])]),r._v(" "),i("tr",[i("td",[r._v("Zuul 1")]),r._v(" "),i("td",[r._v("Spring Cloud Gateway")])]),r._v(" "),i("tr",[i("td",[r._v("Archaius 1")]),r._v(" "),i("td",[r._v("Spring Boot external config + Spring Cloud Config")])])])]),r._v(" "),i("h3",{attrs:{id:"其它补充"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#其它补充"}},[r._v("#")]),r._v(" 其它补充")]),r._v(" "),i("h4",{attrs:{id:"netflix-concurrency-limits"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#netflix-concurrency-limits"}},[r._v("#")]),r._v(" Netflix Concurrency Limits")]),r._v(" "),i("p",[r._v("并发限制模块，它是 Netflix 开源的限流器项目，Spring Cloud 在 Greenwich 版本中引入 spring-cloud-netflix-concurrency-limits")]),r._v(" "),i("h4",{attrs:{id:"archaius-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#archaius-1"}},[r._v("#")]),r._v(" Archaius 1")]),r._v(" "),i("p",[r._v("有些人对它可能比较陌生，也是 Netflix 公司开源项目，基于 Java 的配置管理类库（apache common configuration 类库的扩展），主要用于多配置存储的动态获取。它主要的特性：")]),r._v(" "),i("ul",[i("li",[r._v("动态类型化属性")]),r._v(" "),i("li",[r._v("高效和线程安全的配置操作")]),r._v(" "),i("li",[r._v("配置改变时的回调机制")]),r._v(" "),i("li",[r._v("轮询框架")]),r._v(" "),i("li",[r._v("JMX，通过Jconsole检查和调用操作属性")]),r._v(" "),i("li",[r._v("组合配置")])]),r._v(" "),i("h4",{attrs:{id:"resilience4j"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#resilience4j"}},[r._v("#")]),r._v(" Resilience4j")]),r._v(" "),i("p",[r._v("目前还在孵化中，Spring 可能是要抽象一个断路器的统一规范，让不同的断路器（Hystrix、Resilience4j、"),i("strong",[r._v("Sentinel（阿里开源）")]),r._v("）选择使用")]),r._v(" "),i("h4",{attrs:{id:"micrometer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#micrometer"}},[r._v("#")]),r._v(" Micrometer")]),r._v(" "),i("p",[r._v("Spring Boot 2 中的 Spring Boot Actuator 底层用的就是 Micrometer，它是 "),i("strong",[r._v("Pivotal")]),r._v(" 公司（也就是 Spring 所在的公司）开源的监控门面，类似于监控世界的 Slf4j。"),i("strong",[r._v("Resilience4j 自带整合了 Micrometer")]),r._v("；目前还无法判断是否比 Hystrix Dashboard /Turbine 的更强大，更好用。")]),r._v(" "),i("h4",{attrs:{id:"spring-cloud-loadbalancer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-loadbalancer"}},[r._v("#")]),r._v(" Spring Cloud Loadbalancer")]),r._v(" "),i("p",[r._v("目前还中孵化中，使用上和 Ribbon 区别不大")]),r._v(" "),i("h4",{attrs:{id:"spring-cloud-gateway"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-gateway"}},[r._v("#")]),r._v(" Spring Cloud Gateway")]),r._v(" "),i("p",[r._v("Zuul 持续跳票 1 年多，1.x 是一个基于阻塞 IO 的 API Gateway 以及 Servlet；直到 2018 年 5 月，Zuul 2.x（基于 Netty，也是非阻塞的，支持长连接）才发布，但 Spring Cloud 暂时还没有整合计划。Spring Cloud Gateway 比 Zuul 1.x 系列的性能和功能整体要好。")]),r._v(" "),i("h4",{attrs:{id:"spring-boot-external-config-spring-cloud-config"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-external-config-spring-cloud-config"}},[r._v("#")]),r._v(" Spring Boot external config + Spring Cloud Config")]),r._v(" "),i("p",[r._v("Netflix 开源的组件（Archaius 1/Ribbon/Hystrix）都没有使用 Spring Boot 的规范（spring-boot-configuration-processor），根本没有 metadata.json 文件，于是这部分配置 IDE 无法给你提示")])])}),[],!1,null,null,null);t.default=a.exports}}]);