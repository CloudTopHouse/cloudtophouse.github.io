(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1003:function(s,a,t){"use strict";t.r(a);var n=t(28),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_08-nacos-多环境配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_08-nacos-多环境配置"}},[s._v("#")]),s._v(" 08-Nacos 多环境配置")]),s._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),n("p",[s._v("我们在做项目开发的时候，生产环境和测试环境的一些配置可能会不一样，有时候一些功能也可能会不一样，所以我们可能会在上线的时候手工修改这些配置信息。Spring 为我们提供了 Spring Boot Profile 这个功能（Maven 也为我们提供了 Maven Profile）。我们只需要在启动的时候添加一个虚拟机参数，激活自己环境所要用的 Profile 就可以了。")]),s._v(" "),n("p",[s._v("操作起来很简单，只需要为不同的环境编写专门的配置文件，如："),n("code",[s._v("application-dev.yml")]),s._v("、"),n("code",[s._v("application-prod.yml")]),s._v("， 启动项目时只需要增加一个命令参数 "),n("code",[s._v("--spring.profiles.active=")]),s._v(" 环境配置即可")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("java -jar "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0-SNAPSHOT.jar --spring.profiles.active"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("prod\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"什么是-nacos-config-profile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是-nacos-config-profile"}},[s._v("#")]),s._v(" 什么是 Nacos Config Profile")]),s._v(" "),n("p",[n("code",[s._v("spring-cloud-starter-alibaba-nacos-config")]),s._v(" 在加载配置的时候，不仅仅加载了以 dataid 为 "),n("code",[s._v("${spring.application.name}.${file-extension:properties}")]),s._v(" 为前缀的基础配置，还加载了 dataid 为 "),n("code",[s._v("${spring.application.name}-${profile}.${file-extension:properties}")]),s._v(" 的基础配置。在日常开发中如果遇到多套环境下的不同配置，可以通过 Spring 提供的 "),n("code",[s._v("${spring.profiles.active}")]),s._v(" 这个配置项来配置。")]),s._v(" "),n("h2",{attrs:{id:"使用-nacos-config-profile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-nacos-config-profile"}},[s._v("#")]),s._v(" 使用 Nacos Config Profile")]),s._v(" "),n("p",[s._v("我们以 "),n("code",[s._v("service-provider")]),s._v(" 项目为例，演示多环境配置效果，不要忘记依赖 Nacos Config Starter")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<dependency>    <groupId>org.springframework.cloud</groupId>    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId></dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"使用控制台发布配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用控制台发布配置"}},[s._v("#")]),s._v(" 使用控制台发布配置")]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("注意：")]),s._v(" 控制台发布配置时不要加注释，否则打成 Jar 包后运行会报无法解析配置文件的错误")])]),s._v(" "),n("p",[s._v("通过浏览器访问 "),n("a",{attrs:{href:"http://www.qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cDovLzE5Mi4xNjguMTQxLjEzMjo4ODQ4L25hY29z",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://192.168.141.132:8848/nacos"),n("OutboundLink")],1),s._v(" ，访问 Nacos Server")]),s._v(" "),n("ul",[n("li",[s._v("发布一个名为 "),n("code",[s._v("service-provider-config.yaml")]),s._v(" 的 "),n("strong",[s._v("测试环境")]),s._v(" 配置")])]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provider\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务注册中心")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 192.168.141.132"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端口")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8070")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("management")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端点检查（健康检查）")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exposure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("ul",[n("li",[s._v("发布一个名为 "),n("code",[s._v("service-provider-config-prod.yaml")]),s._v(" 的 "),n("strong",[s._v("生产环境")]),s._v(" 配置")])]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provider\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务注册中心")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 192.168.141.132"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改了上面的端口号，区分配置的不同")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8071")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("management")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端点检查（健康检查）")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exposure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h3",{attrs:{id:"修改客户端配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改客户端配置"}},[s._v("#")]),s._v(" 修改客户端配置")]),s._v(" "),n("ul",[n("li",[s._v("创建名为 "),n("code",[s._v("bootstrap.properties")]),s._v(" 的配置文件并删除之前创建的 "),n("code",[s._v("application.yml")]),s._v(" 配置文件")])]),s._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.application.name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("service-provider-config")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.server-addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.141.132:8848")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.file-extension")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("yaml")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("创建名为 "),n("code",[s._v("bootstrap-prod.properties")]),s._v(" 的配置文件")])]),s._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.profiles.active")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("prod")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.application.name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("service-provider-config")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.server-addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.141.132:8848")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.file-extension")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("yaml")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"测试多环境配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试多环境配置"}},[s._v("#")]),s._v(" 测试多环境配置")]),s._v(" "),n("p",[s._v("此时我们有两个配置文件，分别为 "),n("code",[s._v("bootstrap.properties")]),s._v(" 和 "),n("code",[s._v("bootstrap-prod.properties")]),s._v(" ，我们需要指定启动时加载哪一个配置文件")]),s._v(" "),n("p",[n("strong",[s._v("Run")]),s._v(" -> "),n("strong",[s._v("Edit Configurations")]),s._v(" -> "),n("strong",[s._v("Active profiles:")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(509),alt:"img"}})]),s._v(" "),n("p",[s._v("运行项目并观察日志")]),s._v(" "),n("p",[n("img",{attrs:{src:t(510),alt:"img"}})]),s._v(" "),n("p",[s._v("由上图可知，我们成功加载了不同环境的配置")])])}),[],!1,null,null,null);a.default=e.exports},509:function(s,a,t){s.exports=t.p+"assets/img/d532565c5f5b7ed.dfb4562f.png"},510:function(s,a,t){s.exports=t.p+"assets/img/658e561f28187f5.3551a922.png"}}]);