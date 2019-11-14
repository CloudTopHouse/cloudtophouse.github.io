(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{481:function(t,v,_){t.exports=_.p+"assets/img/befb7e25e641cd7.68b916c8.png"},482:function(t,v,_){t.exports=_.p+"assets/img/cb69b143c94b9a4.7c4d48ac.png"},483:function(t,v,_){t.exports=_.p+"assets/img/684dbd71c895f10.2638c113.png"},484:function(t,v,_){t.exports=_.p+"assets/img/a8c50b0da703d22.940374a4.png"},799:function(t,v,_){"use strict";_.r(v);var a=_(0),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_09-微服务的实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_09-微服务的实践"}},[t._v("#")]),t._v(" 09-微服务的实践")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("要实际的应用微服务，需要解决以下问题：")]),t._v(" "),a("ul",[a("li",[t._v("客户端如何访问这些服务")]),t._v(" "),a("li",[t._v("每个服务之间如何通信")]),t._v(" "),a("li",[t._v("如此多的服务，如何实现？")]),t._v(" "),a("li",[t._v("服务挂了，如何解决？（备份方案，应急处理机制）")])]),t._v(" "),a("h2",{attrs:{id:"客户端如何访问这些服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端如何访问这些服务"}},[t._v("#")]),t._v(" 客户端如何访问这些服务")]),t._v(" "),a("p",[t._v("原来的 Monolithic 方式开发，所有的服务都是本地的，UI 可以直接调用，现在按功能拆分成独立的服务，跑在独立的一般都在独立的虚拟机上的 Java 进程了。客户端 UI 如何访问他？")]),t._v(" "),a("p",[t._v("后台有 N 个服务，前台就需要记住管理 N 个服务，一个服务 "),a("strong",[t._v("下线")]),t._v("、"),a("strong",[t._v("更新")]),t._v("、"),a("strong",[t._v("升级")]),t._v("，前台就要重新部署，这明显不服务我们拆分的理念，特别当前台是移动应用的时候，通常业务变化的节奏更快。")]),t._v(" "),a("p",[t._v("另外，N 个小服务的调用也是一个不小的网络开销。还有一般微服务在系统内部，通常是无状态的，用户登录信息和权限管理最好有一个统一的地方维护管理（OAuth）。")]),t._v(" "),a("p",[t._v("所以，一般在后台 N 个服务和 UI 之间一般会一个代理或者叫 "),a("code",[t._v("API Gateway")]),t._v("，他的作用包括：")]),t._v(" "),a("ul",[a("li",[t._v("提供统一服务入口，让微服务对前台透明")]),t._v(" "),a("li",[t._v("聚合后台的服务，节省流量，提升性能")]),t._v(" "),a("li",[t._v("提供安全，过滤，流控等API管理功能")])]),t._v(" "),a("p",[t._v("其实这个 "),a("code",[t._v("API Gateway")]),t._v(" 可以有很多广义的实现办法，可以是一个软硬一体的盒子，也可以是一个简单的 MVC 框架，甚至是一个 "),a("code",[t._v("Node.js")]),t._v(" 的服务端。他们最重要的作用是为前台（通常是移动应用）提供后台服务的聚合，提供一个统一的服务出口，解除他们之间的耦合，不过 "),a("code",[t._v("API Gateway")]),t._v(" 也有可能成为 "),a("strong",[t._v("单点故障")]),t._v(" 点或者性能的瓶颈。")]),t._v(" "),a("p",[a("img",{attrs:{src:_(481),alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"每个服务之间如何通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每个服务之间如何通信"}},[t._v("#")]),t._v(" 每个服务之间如何通信")]),t._v(" "),a("p",[t._v("所有的微服务都是独立的 Java 进程跑在独立的虚拟机上，所以服务间的通信就是 IPC（Inter Process Communication），已经有很多成熟的方案。现在基本最通用的有两种方式：")]),t._v(" "),a("h3",{attrs:{id:"同步调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步调用"}},[t._v("#")]),t._v(" 同步调用")]),t._v(" "),a("ul",[a("li",[t._v("REST（JAX-RS，Spring Boot）")]),t._v(" "),a("li",[t._v("RPC（Thrift, Dubbo）")])]),t._v(" "),a("p",[t._v("同步调用比较简单，一致性强，但是容易出调用问题，性能体验上也会差些，特别是调用层次多的时候。一般 REST 基于 HTTP，更容易实现，更容易被接受，服务端实现技术也更灵活些，各个语言都能支持，同时能跨客户端，对客户端没有特殊的要求，只要封装了 HTTP 的 SDK 就能调用，所以相对使用的广一些。RPC 也有自己的优点，传输协议更高效，安全更可控，特别在一个公司内部，如果有统一个的开发规范和统一的服务框架时，他的开发效率优势更明显些。就看各自的技术积累实际条件，自己的选择了。")]),t._v(" "),a("h3",{attrs:{id:"异步消息调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步消息调用"}},[t._v("#")]),t._v(" 异步消息调用")]),t._v(" "),a("ul",[a("li",[t._v("Kafka")]),t._v(" "),a("li",[t._v("Notify")]),t._v(" "),a("li",[t._v("MessageQueue")])]),t._v(" "),a("p",[a("img",{attrs:{src:_(482),alt:"img"}})]),t._v(" "),a("p",[t._v("异步消息的方式在分布式系统中有特别广泛的应用，他既能减低调用服务之间的耦合，又能成为调用之间的缓冲，确保消息积压不会冲垮被调用方，同时能保证调用方的服务体验，继续干自己该干的活，不至于被后台性能拖慢。不过需要付出的代价是一致性的减弱，需要接受数据 "),a("strong",[t._v("最终一致性")]),t._v("；还有就是后台服务一般要实现 "),a("strong",[t._v("幂等性")]),t._v("，因为消息送出于性能的考虑一般会有重复（保证消息的被收到且仅收到一次对性能是很大的考验）；最后就是必须引入一个独立的 "),a("code",[t._v("Broker")])]),t._v(" "),a("h2",{attrs:{id:"如此多的服务，如何实现？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如此多的服务，如何实现？"}},[t._v("#")]),t._v(" 如此多的服务，如何实现？")]),t._v(" "),a("p",[t._v("在微服务架构中，一般每一个服务都是有多个拷贝，来做负载均衡。一个服务随时可能下线，也可能应对临时访问压力增加新的服务节点。服务之间如何相互感知？服务如何管理？")]),t._v(" "),a("p",[t._v("这就是服务发现的问题了。一般有两类做法，也各有优缺点。基本都是通过 Zookeeper 等类似技术做服务注册信息的分布式管理。当服务上线时，服务提供者将自己的服务信息注册到 ZK（或类似框架），并通过心跳维持长链接，实时更新链接信息。服务调用者通过 ZK 寻址，根据可定制算法，找到一个服务，还可以将服务信息缓存在本地以提高性能。当服务下线时，ZK 会发通知给服务客户端。")]),t._v(" "),a("h3",{attrs:{id:"基于客户端的服务注册与发现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于客户端的服务注册与发现"}},[t._v("#")]),t._v(" 基于客户端的服务注册与发现")]),t._v(" "),a("p",[t._v("优点是架构简单，扩展灵活，只对服务注册器依赖。缺点是客户端要维护所有调用服务的地址，有技术难度，一般大公司都有成熟的内部框架支持，比如 Dubbo。")]),t._v(" "),a("p",[a("img",{attrs:{src:_(483),alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"基于服务端的服务注册与发现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于服务端的服务注册与发现"}},[t._v("#")]),t._v(" 基于服务端的服务注册与发现")]),t._v(" "),a("p",[t._v("优点是简单，所有服务对于前台调用方透明，一般在小公司在云服务上部署的应用采用的比较多。")]),t._v(" "),a("p",[a("img",{attrs:{src:_(484),alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"服务挂了，如何解决？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务挂了，如何解决？"}},[t._v("#")]),t._v(" 服务挂了，如何解决？")]),t._v(" "),a("p",[t._v("前面提到，Monolithic 方式开发一个很大的风险是，把所有鸡蛋放在一个篮子里，一荣俱荣，一损俱损。而分布式最大的特性就是 "),a("strong",[t._v("网络是不可靠的")]),t._v("。通过微服务拆分能降低这个风险，不过如果没有特别的保障，结局肯定是噩梦。所以当我们的系统是由一系列的服务调用链组成的时候，我们必须确保任一环节出问题都不至于影响整体链路。相应的手段有很多：")]),t._v(" "),a("ul",[a("li",[t._v("重试机制")]),t._v(" "),a("li",[t._v("限流")]),t._v(" "),a("li",[t._v("熔断机制")]),t._v(" "),a("li",[t._v("负载均衡")]),t._v(" "),a("li",[t._v("降级（本地缓存）")])])])}),[],!1,null,null,null);v.default=s.exports}}]);