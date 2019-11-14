(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{595:function(t,v,a){t.exports=a.p+"assets/img/c873bedbe1d1a2b.97b6cce2.png"},596:function(t,v,a){t.exports=a.p+"assets/img/b6c75b17e0815a4.92ab2048.png"},597:function(t,v,a){t.exports=a.p+"assets/img/e3f7acc2bbd72f3.db77edeb.png"},598:function(t,v,a){t.exports=a.p+"assets/img/5a51296646d19df.4777eeaf.png"},599:function(t,v,a){t.exports=a.p+"assets/img/f8c9233820b89d2.26510c65.png"},862:function(t,v,a){"use strict";a.r(v);var e=a(0),_=Object(e.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_01-dubbo-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-dubbo-简介"}},[t._v("#")]),t._v(" 01-Dubbo 简介")]),t._v(" "),e("h2",{attrs:{id:"什么是-dubbo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-dubbo"}},[t._v("#")]),t._v(" 什么是 Dubbo")]),t._v(" "),e("p",[t._v("Apache Dubbo (incubating) |ˈdʌbəʊ| 是一款高性能、轻量级的开源 Java RPC 分布式服务框架，它提供了三大核心能力：面向接口的远程方法调用，智能容错和负载均衡，以及服务自动注册和发现。她最大的特点是按照分层的方式来架构，使用这种方式可以使各个层之间解耦合（或者最大限度地松耦合）。从服务模型的角度来看，Dubbo 采用的是一种非常简单的模型，要么是提供方提供服务，要么是消费方消费服务，所以基于这一点可以抽象出服务提供方（Provider）和服务消费方（Consumer）两个角色。")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("备注：")]),t._v(" 2019 年 5 月 21 日 Apache 软件基金会发表博文，宣布 Dubbo 在 2019 年 5 月 20 日 这天正式毕业，成为 Apache 的顶级项目。")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cDovL2R1YmJvLmFwYWNoZS5vcmcvemgtY24=",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方网站"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9pbmN1YmF0b3ItZHViYm8=",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方 GitHub"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"dubbo-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-架构"}},[t._v("#")]),t._v(" Dubbo 架构")]),t._v(" "),e("p",[e("img",{attrs:{src:a(595),alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"节点角色说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点角色说明"}},[t._v("#")]),t._v(" 节点角色说明")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("节点")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("角色说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Provider")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("暴露服务的服务提供方")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Consumer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("调用远程服务的服务消费方")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Registry")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("服务注册与发现的注册中心")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Monitor")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("统计服务的调用次数和调用时间的监控中心")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Container")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("服务运行容器")])])])]),t._v(" "),e("h3",{attrs:{id:"调用关系说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调用关系说明"}},[t._v("#")]),t._v(" 调用关系说明")]),t._v(" "),e("ul",[e("li",[t._v("服务容器负责启动，加载，运行服务提供者")]),t._v(" "),e("li",[t._v("服务提供者在启动时，向注册中心注册自己提供的服务")]),t._v(" "),e("li",[t._v("服务消费者在启动时，向注册中心订阅自己所需的服务")]),t._v(" "),e("li",[t._v("注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者")]),t._v(" "),e("li",[t._v("服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用")]),t._v(" "),e("li",[t._v("服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心")])]),t._v(" "),e("h2",{attrs:{id:"dubbo-功能特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-功能特点"}},[t._v("#")]),t._v(" Dubbo 功能特点")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("面向接口代理的高性能 RPC 调用：")]),t._v(" 提供高性能的基于代理的远程调用能力，服务以接口为粒度，为开发者屏蔽远程调用底层细节")]),t._v(" "),e("li",[e("strong",[t._v("智能负载均衡：")]),t._v(" 内置多种负载均衡策略，智能感知下游节点健康状况，显著减少调用延迟，提高系统吞吐量")]),t._v(" "),e("li",[e("strong",[t._v("服务自动注册与发现：")]),t._v(" 支持多种注册中心服务，服务实例上下线实时感知")]),t._v(" "),e("li",[e("strong",[t._v("高度可扩展能力：")]),t._v(" 遵循微内核 + 插件的设计原则，所有核心能力如 Protocol、Transport、Serialization 被设计为扩展点，平等对待内置实现和第三方实现")]),t._v(" "),e("li",[e("strong",[t._v("运行期流量调度：")]),t._v(" 内置条件、脚本等路由策略，通过配置不同的路由规则，轻松实现灰度发布，同机房优先等功能")]),t._v(" "),e("li",[e("strong",[t._v("可视化的服务治理与运维：")]),t._v(" 提供丰富服务治理、运维工具：随时查询服务元数据、服务健康状态及调用统计，实时下发路由策略、调整配置参数")])]),t._v(" "),e("h2",{attrs:{id:"附：扩展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附：扩展阅读"}},[t._v("#")]),t._v(" 附：扩展阅读")]),t._v(" "),e("h3",{attrs:{id:"什么是-rpc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-rpc"}},[t._v("#")]),t._v(" 什么是 RPC")]),t._v(" "),e("p",[t._v("分布式是促使 RPC 诞生的领域，"),e("strong",[t._v("RPC 是一种编程模型，并没有规定你具体要怎样实现")]),t._v("，无论使用 HTTP 或是 RMI 都是可以的。")]),t._v(" "),e("p",[t._v("假设你有一个计算器接口，Calculator，以及它的实现类 CalculatorImpl，那么在系统还是 "),e("strong",[t._v("单体应用")]),t._v(" 时，你要调用 Calculator 的 add 方法来执行一个加运算，直接 new 一个 CalculatorImpl，然后调用 add 方法就行了，这其实就是非常普通的 "),e("strong",[t._v("本地函数调用")]),t._v("，因为在 "),e("strong",[t._v("同一个地址空间")]),t._v("，或者说在同一块内存，所以通过方法栈和参数栈就可以实现。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(596),alt:"img"}})]),t._v(" "),e("p",[t._v("现在，基于高性能和高可靠等因素的考虑，你决定将系统改造为分布式应用，将很多可以共享的功能都单独拎出来，比如上面说到的计算器，你单独把它放到一个服务里头，让别的服务去调用它。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(597),alt:"img"}})]),t._v(" "),e("p",[t._v("这下问题来了，服务 A 里头并没有 CalculatorImpl 这个类，那它要怎样调用服务 B 的 CalculatorImpl 的 add 方法呢？")]),t._v(" "),e("p",[e("strong",[t._v("RPC 要解决的两个问题")])]),t._v(" "),e("ul",[e("li",[t._v("解决分布式系统中，服务之间的调用问题")]),t._v(" "),e("li",[t._v("远程调用时，要能够像本地调用一样方便，让调用者感知不到远程调用的逻辑")])]),t._v(" "),e("h3",{attrs:{id:"如何实现一个-rpc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何实现一个-rpc"}},[t._v("#")]),t._v(" 如何实现一个 RPC")]),t._v(" "),e("p",[t._v("实际情况下，"),e("strong",[t._v("RPC 很少用到 HTTP 协议来进行数据传输")]),t._v("，毕竟我只是想传输一下数据而已，何必动用到一个文本传输的应用层协议呢，我为什么不直接使用"),e("strong",[t._v("二进制传输")]),t._v("？比如直接用 Java 的 Socket 协议进行传输？")]),t._v(" "),e("p",[t._v("不管你用何种协议进行数据传输，一个完整的 RPC 过程，都可以用下面这张图来描述")]),t._v(" "),e("p",[e("img",{attrs:{src:a(598),alt:"img"}})]),t._v(" "),e("p",[t._v("以左边的 Client 端为例，Application 就是 RPC 的调用方，Client Stub 就是我们上面说到的代理对象，也就是那个看起来像是 Calculator 的实现类，其实内部是通过 RPC 方式来进行远程调用的代理对象，至于 Client Run-time Library，则是实现远程调用的工具包，比如 JDK 的 Socket，最后通过底层网络实现实现数据的传输。")]),t._v(" "),e("p",[t._v("这个过程中最重要的就是 "),e("strong",[t._v("序列化")]),t._v(" 和 "),e("strong",[t._v("反序列化")]),t._v(" 了，因为数据传输的数据包必须是二进制的，你直接丢一个 Java 对象过去，人家可不认识，你必须把 Java 对象序列化为二进制格式，传给 Server 端，Server 端接收到之后，再反序列化为 Java 对象。")]),t._v(" "),e("h3",{attrs:{id:"rpc-vs-restful"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpc-vs-restful"}},[t._v("#")]),t._v(" RPC vs Restful")]),t._v(" "),e("p",[e("strong",[t._v("RPC 是面向过程")]),t._v("，"),e("strong",[t._v("Restful 是面向资源")]),t._v("，并且使用了 HTTP 动词。从这个维度上看，Restful 风格的 URL 在表述的精简性、可读性上都要更好。")]),t._v(" "),e("h3",{attrs:{id:"阿里为何放弃-zookeeper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阿里为何放弃-zookeeper"}},[t._v("#")]),t._v(" 阿里为何放弃 Zookeeper")]),t._v(" "),e("p",[e("strong",[t._v("CAP")])]),t._v(" "),e("p",[t._v("有个思考，从 CAP 角度考虑，服务注册中心是 CP 系统还是 AP 系统呢？")]),t._v(" "),e("ul",[e("li",[t._v("服务注册中心是为了服务间调用服务的，那么绝对不允许因为服务注册中心出现了问题而导致服务间的调用出问题")]),t._v(" "),e("li",[t._v("假如有 node1，node2，node3 集群节点。保存着可用服务列表 ip1，ip2，ip3，试想如果此时不一致，比如 node1 只保存了ip1，ip2，此时服务读取 node1 的节点，那么会造成什么影响？")])]),t._v(" "),e("p",[t._v("调用 node1 的服务，顶多就是负载均衡时不会有流量打到 ip3，然后等 node1 同步回 ip3 后，又一致了，这对服务其实没什么太大影响。所以，推测出服务注册中心应该是个 AP 系统。")]),t._v(" "),e("p",[e("strong",[t._v("Zookeeper 是个 CP 系统，强一致性")])]),t._v(" "),e("ul",[e("li",[t._v("场景1，当 master 挂了，此时 Zookeeper 集群需要重新选举，而此时服务需要来读取可用服务，是不可用的。影响到了服务的可用性当然你可以说服务本地有缓存可用列表。然而下面这种方式就更无法处理了。")]),t._v(" "),e("li",[t._v("场景2，分区可用。试想，有 3 个机房，如果其中机房 3 和机房 1，2 网络断了，那么机房 3 的注册中心就不能注册新的机器了，这显然也不合理从健康检查角度来看")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(599),alt:"img"}})]),t._v(" "),e("p",[t._v("Zookeeper 是通过 TCP 的心跳判断服务是否可用，但 TCP 的活性并不代表服务是可用的，如：连接池已满，DB 挂了等")]),t._v(" "),e("p",[e("strong",[t._v("理想的注册中心")])]),t._v(" "),e("ul",[e("li",[t._v("服务自动注册发现。最好有新的服务注册上去时还能推送到调用端")]),t._v(" "),e("li",[t._v("能对注册上来的机器方便的进行管理，能手动删除（发送信号让服务优雅下线）、恢复机器")]),t._v(" "),e("li",[t._v("服务的健康检查，能真正的检测到服务是否可用")]),t._v(" "),e("li",[t._v("可以看到是否有其他调用服务正在订阅注册上来的服务")]),t._v(" "),e("li",[t._v("能够带上些除了 IP 外的其它信息")])])])}),[],!1,null,null,null);v.default=_.exports}}]);