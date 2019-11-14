(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{473:function(v,_,t){v.exports=t.p+"assets/img/c4ca4238a0b9238.6403115a.png"},474:function(v,_,t){v.exports=t.p+"assets/img/c81e728d9d4c2f6.69fa0d91.png"},475:function(v,_,t){v.exports=t.p+"assets/img/eccbc87e4b5ce2f.b61aba6a.png"},476:function(v,_,t){v.exports=t.p+"assets/img/a87ff679a2f3e71.fed02786.png"},477:function(v,_,t){v.exports=t.p+"assets/img/e4da3b7fbbce234.c7639095.png"},478:function(v,_,t){v.exports=t.p+"assets/img/1679091c5a880fa.c540a4be.png"},797:function(v,_,t){"use strict";t.r(_);var s=t(0),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"_07-如何应对高并发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_07-如何应对高并发"}},[v._v("#")]),v._v(" 07-如何应对高并发")]),v._v(" "),s("h2",{attrs:{id:"什么是高并发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是高并发"}},[v._v("#")]),v._v(" 什么是高并发")]),v._v(" "),s("p",[v._v("高并发(High Concurrency)是互联网分布式系统架构设计中必须考虑的因素之一，它通常是指，通过设计保证系统能够同时并行处理很多请求。高并发相关常用的一些指标有 "),s("strong",[v._v("响应时间(Response Time)")]),v._v("，"),s("strong",[v._v("吞吐量(Throughput)")]),v._v("，"),s("strong",[v._v("每秒查询率 QPS(Query Per Second)")]),v._v("，"),s("strong",[v._v("并发用户数")]),v._v(" 等。")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("响应时间：")]),v._v(" 系统对请求做出响应的时间。例如系统处理一个 HTTP 请求需要 200ms，这个 200ms 就是系统的响应时间。")]),v._v(" "),s("li",[s("strong",[v._v("吞吐量：")]),v._v(" 单位时间(年，月，日，时，分，秒)内处理的请求数量。")]),v._v(" "),s("li",[s("strong",[v._v("QPS：")]),v._v(" 每秒响应请求数。在互联网领域，这个指标和吞吐量区分的没有这么明显。")]),v._v(" "),s("li",[s("strong",[v._v("并发用户数：")]),v._v(" 同时承载正常使用系统功能的用户数量。例如一个即时通讯系统，同时在线量一定程度上代表了系统的并发用户数。")])]),v._v(" "),s("h2",{attrs:{id:"如何提升系统的并发能力"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何提升系统的并发能力"}},[v._v("#")]),v._v(" 如何提升系统的并发能力")]),v._v(" "),s("p",[v._v("互联网分布式架构设计，提高系统并发能力的方式，方法论上主要有两种："),s("strong",[v._v("垂直扩展(Scale Up)")]),v._v(" 与 "),s("strong",[v._v("水平扩展(Scale Out)")]),v._v("。")]),v._v(" "),s("h3",{attrs:{id:"垂直扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垂直扩展"}},[v._v("#")]),v._v(" 垂直扩展")]),v._v(" "),s("p",[v._v("提升单机处理能力。垂直扩展的方式又有两种：")]),v._v(" "),s("ul",[s("li",[v._v("增强单机硬件性能，例如：增加 CPU 核数如 32 核，升级更好的网卡如万兆，升级更好的硬盘如 SSD，扩充硬盘容量如 2T，扩充系统内存如 128G；")]),v._v(" "),s("li",[v._v("提升单机架构性能，例如：使用 Cache 来减少 IO 次数，使用异步来增加单服务吞吐量，使用无锁数据结构来减少响应时间；")])]),v._v(" "),s("p",[v._v("在互联网业务发展非常迅猛的早期，如果预算不是问题，强烈建议使用 “增强单机硬件性能” 的方式提升系统并发能力，因为这个阶段，公司的战略往往是发展业务抢时间，而 “增强单机硬件性能” 往往是最快的方法。")]),v._v(" "),s("p",[v._v("不管是提升单机硬件性能，还是提升单机架构性能，都有一个致命的不足：单机性能总是有极限的。所以互联网分布式架构设计高并发终极解决方案还是水平扩展。")]),v._v(" "),s("h3",{attrs:{id:"水平扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#水平扩展"}},[v._v("#")]),v._v(" 水平扩展")]),v._v(" "),s("p",[v._v("只要增加服务器数量，就能线性扩充系统性能。水平扩展对系统架构设计是有要求的，如何在架构各层进行可水平扩展的设计，以及互联网公司架构各层常见的水平扩展实践，是本文重点讨论的内容。")]),v._v(" "),s("h2",{attrs:{id:"典型互联网分层架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#典型互联网分层架构"}},[v._v("#")]),v._v(" 典型互联网分层架构")]),v._v(" "),s("p",[s("img",{attrs:{src:t(473),alt:"img"}})]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("客户端层：")]),v._v(" 典型调用方是浏览器或手机应用 APP")]),v._v(" "),s("li",[s("strong",[v._v("反向代理层：")]),v._v(" 系统入口(Ingress)，反向代理(Nginx)")]),v._v(" "),s("li",[s("strong",[v._v("站点应用层：")]),v._v(" 实现核心应用逻辑，返回 HTML 或者 JSON")]),v._v(" "),s("li",[s("strong",[v._v("服务层：")]),v._v(" 微服务体现在这一层")]),v._v(" "),s("li",[s("strong",[v._v("数据缓存层：")]),v._v(" 缓存加速访问存储")]),v._v(" "),s("li",[s("strong",[v._v("数据库层：")]),v._v(" 数据库持久化数据存储")])]),v._v(" "),s("h2",{attrs:{id:"水平扩展分层架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#水平扩展分层架构"}},[v._v("#")]),v._v(" 水平扩展分层架构")]),v._v(" "),s("h3",{attrs:{id:"反向代理层的水平扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向代理层的水平扩展"}},[v._v("#")]),v._v(" 反向代理层的水平扩展")]),v._v(" "),s("p",[s("img",{attrs:{src:t(474),alt:"img"}})]),v._v(" "),s("p",[v._v("反向代理层的水平扩展，是通过 "),s("strong",[v._v("DNS 轮询")]),v._v(" 实现的：DNS Server 对于一个域名配置了多个解析 IP，每次 DNS 解析请求来访问 DNS Server，会轮询返回这些 IP。")]),v._v(" "),s("p",[v._v("当 Nginx 成为瓶颈的时候，只要增加服务器数量，新增 Nginx 服务的部署，增加一个外网 IP，就能扩展反向代理层的性能，做到理论上的无限高并发。")]),v._v(" "),s("h3",{attrs:{id:"站点应用层的水平扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#站点应用层的水平扩展"}},[v._v("#")]),v._v(" 站点应用层的水平扩展")]),v._v(" "),s("p",[s("img",{attrs:{src:t(475),alt:"img"}})]),v._v(" "),s("p",[v._v("站点层的水平扩展，是通过 "),s("strong",[v._v("Nginx")]),v._v(" 实现的。通过修改 "),s("code",[v._v("nginx.conf")]),v._v("，可以设置多个 Web 后端。")]),v._v(" "),s("p",[v._v("当 Web 后端成为瓶颈的时候，只要增加服务器数量，新增 Web 服务的部署，在 Nginx 配置中配置上新的 Web 后端，就能扩展站点层的性能，做到理论上的无限高并发。")]),v._v(" "),s("h3",{attrs:{id:"服务层的水平扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务层的水平扩展"}},[v._v("#")]),v._v(" 服务层的水平扩展")]),v._v(" "),s("p",[s("img",{attrs:{src:t(476),alt:"img"}})]),v._v(" "),s("p",[v._v("服务层的水平扩展，是通过 "),s("strong",[v._v("服务连接池")]),v._v(" 实现的。")]),v._v(" "),s("p",[v._v("站点层通过 RPC Client 调用下游的服务层 RPC Server 时，RPC Client 中的连接池会建立与下游服务多个连接，当服务成为瓶颈的时候，只要增加服务器数量，新增服务部署，在 RPC Client 处建立新的下游服务连接，就能扩展服务层性能，做到理论上的无限高并发。如果需要优雅的进行服务层自动扩容，这里可能需要配置中心里服务自动发现功能的支持。")]),v._v(" "),s("h3",{attrs:{id:"数据层的水平扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据层的水平扩展"}},[v._v("#")]),v._v(" 数据层的水平扩展")]),v._v(" "),s("p",[v._v("在数据量很大的情况下，数据层(缓存，数据库)涉及数据的水平扩展，将原本存储在一台服务器上的数据(缓存，数据库)水平拆分到不同服务器上去，以达到扩充系统性能的目的。")]),v._v(" "),s("h4",{attrs:{id:"按照范围水平拆分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按照范围水平拆分"}},[v._v("#")]),v._v(" 按照范围水平拆分")]),v._v(" "),s("p",[s("img",{attrs:{src:t(477),alt:"img"}})]),v._v(" "),s("p",[v._v("每一个数据服务，存储一定范围的数据")]),v._v(" "),s("ul",[s("li",[v._v("user0 库，存储 uid 范围 1-1kw")]),v._v(" "),s("li",[v._v("user1 库，存储 uid 范围 1kw-2kw")])]),v._v(" "),s("p",[s("strong",[v._v("优点：")])]),v._v(" "),s("ul",[s("li",[v._v("规则简单，Service 只需判断一下 uid 范围就能路由到对应的存储服务")]),v._v(" "),s("li",[v._v("数据均衡性较好")]),v._v(" "),s("li",[v._v("比较容易扩展，可以随时加一个 uid [2kw,3kw] 的数据服务")])]),v._v(" "),s("p",[s("strong",[v._v("缺点：")])]),v._v(" "),s("ul",[s("li",[v._v("请求的负载不一定均衡，一般来说，新注册的用户会比老用户更活跃，大范围的服务请求压力会更大")])]),v._v(" "),s("h4",{attrs:{id:"按照哈希水平拆分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按照哈希水平拆分"}},[v._v("#")]),v._v(" 按照哈希水平拆分")]),v._v(" "),s("p",[s("img",{attrs:{src:t(478),alt:"img"}})]),v._v(" "),s("p",[v._v("每一个数据库，存储某个 key 值 hash 后的部分数据")]),v._v(" "),s("ul",[s("li",[v._v("user0 库，存储偶数 uid 数据")]),v._v(" "),s("li",[v._v("user1 库，存储奇数 uid 数据")])]),v._v(" "),s("p",[s("strong",[v._v("优点：")])]),v._v(" "),s("ul",[s("li",[v._v("规则简单，Service 只需对 uid 进行 hash 能路由到对应的存储服务")]),v._v(" "),s("li",[v._v("数据均衡性较好")]),v._v(" "),s("li",[v._v("请求均匀性较好")])]),v._v(" "),s("p",[s("strong",[v._v("缺点：")])]),v._v(" "),s("ul",[s("li",[v._v("不容易扩展，扩展一个数据服务，hash 方法改变时候，可能需要进行数据迁移")])]),v._v(" "),s("h4",{attrs:{id:"水平拆分与主从同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#水平拆分与主从同步"}},[v._v("#")]),v._v(" 水平拆分与主从同步")]),v._v(" "),s("p",[v._v("这里需要注意的是，通过水平拆分来扩充系统性能，与主从同步读写分离来扩充数据库性能的方式有本质的不同。")]),v._v(" "),s("p",[s("strong",[v._v("通过水平拆分扩展数据库性能")])]),v._v(" "),s("ul",[s("li",[v._v("每个服务器上存储的数据量是总量的 1/n，所以单机的性能也会有提升")]),v._v(" "),s("li",[v._v("n 个服务器上的数据没有交集，那个服务器上数据的并集是数据的全集")]),v._v(" "),s("li",[v._v("数据水平拆分到了 n 个服务器上，理论上读性能扩充了 n 倍，写性能也扩充了 n 倍(其实远不止 n 倍，因为单机的数据量变为了原来的 1/n)")])]),v._v(" "),s("p",[s("strong",[v._v("通过主从同步读写分离扩展数据库性能")])]),v._v(" "),s("ul",[s("li",[v._v("每个服务器上存储的数据量是和总量相同")]),v._v(" "),s("li",[v._v("n 个服务器上的数据都一样，都是全集")]),v._v(" "),s("li",[v._v("理论上读性能扩充了 n 倍，写仍然是单点，写性能不变")])]),v._v(" "),s("blockquote",[s("p",[s("strong",[v._v("注意：")]),v._v(" 缓存层的水平拆分和数据库层的水平拆分类似，也是以范围拆分和哈希拆分的方式居多")])]),v._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),s("p",[v._v("高并发(High Concurrency)是互联网分布式系统架构设计中必须考虑的因素之一，它通常是指，通过设计保证系统能够同时并行处理很多请求。")]),v._v(" "),s("p",[v._v("提高系统并发能力的方式，方法论上主要有两种：垂直扩展(Scale Up)与水平扩展(Scale Out)。前者垂直扩展可以通过提升单机硬件性能，或者提升单机架构性能，来提高并发性，但单机性能总是有极限的，"),s("strong",[v._v("互联网分布式架构设计高并发终极解决方案还是后者：水平扩展")]),v._v("。")]),v._v(" "),s("p",[v._v("互联网分层架构中，各层次水平扩展的实践又有所不同：")]),v._v(" "),s("ul",[s("li",[v._v("反向代理层可以通过 "),s("strong",[v._v("DNS 轮询")]),v._v(" 的方式来进行水平扩展")]),v._v(" "),s("li",[v._v("站点层可以通过 Nginx 来进行水平扩展")]),v._v(" "),s("li",[v._v("服务层可以通过服务连接池来进行水平扩展")]),v._v(" "),s("li",[v._v("数据库可以按照数据范围，或者数据哈希的方式来进行水平扩展")])]),v._v(" "),s("p",[v._v("各层实施水平扩展后，能够通过增加服务器数量的方式来提升系统的性能，做到理论上的性能无限。")])])}),[],!1,null,null,null);_.default=a.exports}}]);