(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{396:function(t,a,v){t.exports=v.p+"assets/img/2a2c2f8bebfa89e.8e497817.png"},397:function(t,a,v){t.exports=v.p+"assets/img/708f3ace0865f73.1107b28f.png"},999:function(t,a,v){"use strict";v.r(a);var _=v(28),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_08-微服务的概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_08-微服务的概念"}},[t._v("#")]),t._v(" 08-微服务的概念")]),t._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),_("p",[t._v("微服务架构是一种架构思想，旨在通过将功能分解到各个离散的服务中以实现对解决方案的解耦。它的主要作用是将功能分解到离散的各个服务当中，从而降低系统的耦合性，并提供更加灵活的服务支持。")]),t._v(" "),_("h2",{attrs:{id:"概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),_("p",[t._v("把一个大型的单个应用程序和服务拆分为数个甚至数十个的支持微服务，它可扩展单个组件而不是整个的应用程序堆栈，从而满足服务等级协议。")]),t._v(" "),_("h2",{attrs:{id:"定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),_("p",[t._v("围绕业务领域组件来创建应用，这些应用可独立地进行开发、管理和迭代。在分散的组件中使用云架构和平台式部署、管理和服务功能，使产品交付变得更加简单。")]),t._v(" "),_("h2",{attrs:{id:"本质"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本质"}},[t._v("#")]),t._v(" 本质")]),t._v(" "),_("p",[t._v("用一些功能比较明确、业务比较精练的服务去解决更大、更实际的问题。")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("备注：")]),t._v(" 微服务这个概念是 2012 年出现的，作为加快 Web 和移动应用程序开发进程的一种方法，2014 年开始受到各方的关注，同年为微服务的元年；")])]),t._v(" "),_("h2",{attrs:{id:"与传统架构的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#与传统架构的区别"}},[t._v("#")]),t._v(" 与传统架构的区别")]),t._v(" "),_("h3",{attrs:{id:"系统架构需要遵循的三个标准"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统架构需要遵循的三个标准"}},[t._v("#")]),t._v(" 系统架构需要遵循的三个标准")]),t._v(" "),_("ul",[_("li",[t._v("提高敏捷性：及时响应业务需求，促进企业发展")]),t._v(" "),_("li",[t._v("提升用户体验：提升用户体验，减少用户流失")]),t._v(" "),_("li",[t._v("降低成本：降低增加产品、客户或业务方案的成本")])]),t._v(" "),_("h3",{attrs:{id:"传统的开发模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传统的开发模式"}},[t._v("#")]),t._v(" 传统的开发模式")]),t._v(" "),_("p",[t._v("先来看看传统的 WEB 开发方式，通过对比比较容易理解什么是 "),_("strong",[t._v("微服务架构")]),t._v("。和 "),_("strong",[t._v("微服务")]),t._v(" 相对应的，这种方式一般被称为 "),_("strong",[t._v("单体式开发（Monolithic）")]),t._v("。")]),t._v(" "),_("p",[t._v("既所有的功能打包在一个 WAR 包里，基本没有外部依赖（除了容器），部署在一个 JavaEE 容器（Tomcat，JBoss，WebLogic）里，包含了 DO/DAO，Service，UI 等所有逻辑。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(396),alt:"img"}})]),t._v(" "),_("h4",{attrs:{id:"优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),_("ul",[_("li",[t._v("开发简单，集中式管理")]),t._v(" "),_("li",[t._v("基本不会重复开发")]),t._v(" "),_("li",[t._v("功能都在本地，没有分布式的管理和调用消耗")])]),t._v(" "),_("h4",{attrs:{id:"缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),_("ul",[_("li",[t._v("效率低：开发都在同一个项目改代码，相互等待，冲突不断")]),t._v(" "),_("li",[t._v("维护难：代码功功能耦合在一起，新人不知道何从下手")]),t._v(" "),_("li",[t._v("不灵活：构建时间长，任何小修改都要重构整个项目，耗时")]),t._v(" "),_("li",[t._v("稳定性差：一个微小的问题，都可能导致整个应用挂掉")]),t._v(" "),_("li",[t._v("扩展性不够：无法满足高并发下的业务需求")])]),t._v(" "),_("h3",{attrs:{id:"微服务架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构"}},[t._v("#")]),t._v(" 微服务架构")]),t._v(" "),_("h4",{attrs:{id:"目的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[t._v("#")]),t._v(" 目的")]),t._v(" "),_("p",[t._v("有效的拆分应用，实现敏捷开发和部署")]),t._v(" "),_("p",[_("img",{attrs:{src:v(397),alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"微服务的特征"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微服务的特征"}},[t._v("#")]),t._v(" 微服务的特征")]),t._v(" "),_("h3",{attrs:{id:"官方的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#官方的定义"}},[t._v("#")]),t._v(" 官方的定义")]),t._v(" "),_("ul",[_("li",[t._v("一系列的独立的服务共同组成系统")]),t._v(" "),_("li",[t._v("单独部署，跑在自己的进程中")]),t._v(" "),_("li",[t._v("每个服务为独立的业务开发")]),t._v(" "),_("li",[t._v("分布式管理")]),t._v(" "),_("li",[t._v("非常强调隔离性")])]),t._v(" "),_("h3",{attrs:{id:"大概的标准"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大概的标准"}},[t._v("#")]),t._v(" 大概的标准")]),t._v(" "),_("ul",[_("li",[t._v("分布式服务组成的系统")]),t._v(" "),_("li",[t._v("按照业务，而不是技术来划分组织")]),t._v(" "),_("li",[t._v("做有生命的产品而不是项目")]),t._v(" "),_("li",[t._v("强服务个体和弱通信（ Smart endpoints and dumb pipes ）")]),t._v(" "),_("li",[t._v("自动化运维（ DevOps ）")]),t._v(" "),_("li",[t._v("高度容错性")]),t._v(" "),_("li",[t._v("快速演化和迭代")])])])}),[],!1,null,null,null);a.default=s.exports}}]);