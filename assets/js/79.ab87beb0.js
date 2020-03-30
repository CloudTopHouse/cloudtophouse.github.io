(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1060:function(t,e,n){"use strict";n.r(e);var s=n(28),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_10-sentinel-控制台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-sentinel-控制台"}},[t._v("#")]),t._v(" 10-Sentinel 控制台")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("Sentinel 提供一个轻量级的开源控制台，它提供机器发现以及健康情况管理、监控（单机和集群），规则管理和推送的功能。另外，鉴权在生产环境中也必不可少。这里，我们将会详细讲述如何通过简单的步骤就可以使用这些功能。Sentinel 控制台最少应该包含如下功能")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("查看机器列表以及健康情况：")]),t._v(" 收集 Sentinel 客户端发送的心跳包，用于判断机器是否在线。")]),t._v(" "),s("li",[s("strong",[t._v("监控 (单机和集群聚合)：")]),t._v(" 通过 Sentinel 客户端暴露的监控 API，定期拉取并且聚合应用监控信息，最终可以实现秒级的实时监控。")]),t._v(" "),s("li",[s("strong",[t._v("规则管理和推送：")]),t._v(" 统一管理推送规则。")]),t._v(" "),s("li",[s("strong",[t._v("鉴权：")]),t._v(" 生产环境中鉴权非常重要。这里每个开发者需要根据自己的实际情况进行定制。")])]),t._v(" "),s("h2",{attrs:{id:"启动控制台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动控制台"}},[t._v("#")]),t._v(" 启动控制台")]),t._v(" "),s("h3",{attrs:{id:"获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取"}},[t._v("#")]),t._v(" 获取")]),t._v(" "),s("p",[t._v("您可以从 "),s("a",{attrs:{href:"http://www.qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvU2VudGluZWwvcmVsZWFzZXM=",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方 GitHub Release 页面"),s("OutboundLink")],1),t._v(" 页面下载最新版本的控制台 JAR 包。")]),t._v(" "),s("h3",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("注意：")]),t._v(" 启动 Sentinel 控制台需要 JDK 版本为 1.8 及以上版本")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("java -Dserver.port=8080 -Dcsp.sentinel.dashboard.server=localhost:8080 -Dproject.name=sentinel-dashboard -jar sentinel-dashboard.jar\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("其中 "),s("code",[t._v("-Dserver.port=8080")]),t._v(" 用于指定 Sentinel 控制台端口为 "),s("code",[t._v("8080")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("注意：")]),t._v(" 从 Sentinel 1.6.0 起，Sentinel 控制台引入基本的 "),s("strong",[t._v("登录")]),t._v(" 功能，"),s("strong",[t._v("默认用户名和密码都是 sentinel")])])]),t._v(" "),s("h3",{attrs:{id:"鉴权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#鉴权"}},[t._v("#")]),t._v(" 鉴权")]),t._v(" "),s("p",[t._v("用户可以通过如下参数进行配置")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("-Dsentinel.dashboard.auth.username=sentinel")]),t._v(" 用于指定控制台的登录用户名为 sentinel")]),t._v(" "),s("li",[s("code",[t._v("-Dsentinel.dashboard.auth.password=123456")]),t._v(" 用于指定控制台的登录密码为 123456；如果省略这两个参数，默认用户和密码均为 sentinel")]),t._v(" "),s("li",[s("code",[t._v("-Dserver.servlet.session.timeout=7200")]),t._v(" 用于指定 Spring Boot 服务端 session 的过期时间，如 7200 表示 7200 秒；60m 表示 60 分钟，默认为 30 分钟")])]),t._v(" "),s("h2",{attrs:{id:"验证安装是否成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证安装是否成功"}},[t._v("#")]),t._v(" 验证安装是否成功")]),t._v(" "),s("p",[t._v("通过浏览器访问 "),s("a",{attrs:{href:"http://www.qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cDovL2xvY2FsaG9zdDo4MDgwLyMvbG9naW4=",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/#/login"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:n(554),alt:"img"}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("账号：")]),t._v(" sentinel")]),t._v(" "),s("li",[s("strong",[t._v("密码：")]),t._v(" sentinel")])]),t._v(" "),s("p",[s("img",{attrs:{src:n(555),alt:"img"}})]),t._v(" "),s("p",[t._v("详细说明请参考 "),s("a",{attrs:{href:"http://www.qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvU2VudGluZWwvd2lraQ==",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方 Sentinel Wiki"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports},554:function(t,e,n){t.exports=n.p+"assets/img/a0dc2d9263dbb84.78edfc61.png"},555:function(t,e,n){t.exports=n.p+"assets/img/f26a3b76786f256.1d8675b0.png"}}]);