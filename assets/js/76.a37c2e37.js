(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{468:function(t,e,a){t.exports=a.p+"assets/img/272cb08f0ba8a6e.d8afdc51.png"},791:function(t,e,a){"use strict";a.r(e);var s=a(0),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_01-构建单体应用模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-构建单体应用模型"}},[t._v("#")]),t._v(" 01-构建单体应用模型")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("我们假设，您开始开发一个打车应用，打算与 "),s("code",[t._v("Uber")]),t._v(" 和 "),s("code",[t._v("Hailo")]),t._v(" 竞争。经过初步交流和需求收集，您开始手动或者使用类似 "),s("code",[t._v("Rails")]),t._v("、"),s("code",[t._v("Spring Boot")]),t._v("、"),s("code",[t._v("Play")]),t._v(" 或者 "),s("code",[t._v("Maven")]),t._v(" 等平台来生成一个新项目。该新应用是一个模块化的六边形架构，如下图（一个简单的打车应用）所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(468),alt:"img"}})]),t._v(" "),s("p",[t._v("该应用的核心是由模块实现的业务逻辑，它定义了服务、领域对象和事件。围绕核心的是与外部世界接口对接的适配器。适配器示例包括数据库访问组件、生产和消费消息的消息组件和暴露了 API 或实现了一个 UI 的 web 组件。")]),t._v(" "),s("p",[t._v("尽管有一个逻辑模块化架构，但应用程序被作为一个单体进行打包和部署。实际格式取决于应用程序的语言和框架。例如，许多 Java 应用程序被打包成 WAR 文件部署在如 Tomcat 或者 Jetty 之类的应用服务器上。其他 Java 应用程序被打包成自包含 (self-contained) 的可执行 JAR。类似地， Rails 和 Node.js 应用程序被打包为有目录层次的结构")]),t._v(" "),s("p",[t._v("以这种风格编写的应用是很常见的。他们很容易开发，因为我们的 IDE 和其他工具就是专注于构建单体应用。这些应用程序也很容易测试， 您可以通过简单地启动并使用如 Selenium 测试包来测试 UI 以轻松地实现端到端 (end-to-end) 测试。单体应用同样易于部署。您只需拷贝打包好的应用程序到服务器上。您还可以通过运行多个副本和结合负载均衡器来扩展应用。在项目的早期阶段，它可以良好运作。")])])}),[],!1,null,null,null);e.default=v.exports}}]);