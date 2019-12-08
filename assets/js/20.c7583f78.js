(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{299:function(t,a,s){t.exports=s.p+"assets/img/20191207194047.3b432cb6.png"},300:function(t,a,s){t.exports=s.p+"assets/img/20191207194121.5d84a557.png"},301:function(t,a,s){t.exports=s.p+"assets/img/20191207194157.031f7c4d.png"},302:function(t,a,s){t.exports=s.p+"assets/img/20191207194553.5f6a18bf.png"},303:function(t,a,s){t.exports=s.p+"assets/img/20191207194658.67995a81.png"},304:function(t,a,s){t.exports=s.p+"assets/img/20191208160612508.490257ea.jpg"},305:function(t,a,s){t.exports=s.p+"assets/img/20191208160635656.75da317a.jpg"},306:function(t,a,s){t.exports=s.p+"assets/img/20191208160800761.8b63fad6.jpg"},307:function(t,a,s){t.exports=s.p+"assets/img/20191208160851493.25fdf2d1.jpg"},308:function(t,a,s){t.exports=s.p+"assets/img/20191208160945620.efaaa5c2.jpg"},758:function(t,a,s){"use strict";s.r(a);var r=s(0),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"docker-compose-部署-portainer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-部署-portainer"}},[t._v("#")]),t._v(" Docker Compose 部署 Portainer")]),t._v(" "),r("blockquote",[r("p",[t._v("Portainer 是一款轻量级的应用，它提供了图形化界面，用于方便的管理Docker环境，包括单机环境和集群环境，下面我们将用Portainer来管理Docker容器中的应用。")])]),t._v(" "),r("ul",[r("li",[t._v("官网地址："),r("a",{attrs:{href:"https://github.com/portainer/portainer",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/portainer/p…"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"部署-portainer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署-portainer"}},[t._v("#")]),t._v(" 部署 Portainer")]),t._v(" "),r("p",[r("code",[t._v("docker-compose.yml")]),t._v(" 配置如下：")]),t._v(" "),r("div",{staticClass:"language-yaml line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1'")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("portainer")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" portainer/portainer\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" portainer\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 9001"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 8000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/docker.sock"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/docker.sock\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./portainer/data"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br"),r("span",{staticClass:"line-number"},[t._v("11")]),r("br"),r("span",{staticClass:"line-number"},[t._v("12")]),r("br")])]),r("blockquote",[r("p",[t._v("这里要特别注意的是数据卷的配置，第一个 "),r("code",[t._v("/var/run/docker.sock:/var/run/docker.sock")]),t._v(" 配置必须要这样，否则容器启动之后，访问Portainer时会报错的。")])]),t._v(" "),r("h2",{attrs:{id:"浏览器访问portainer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器访问portainer"}},[t._v("#")]),t._v(" 浏览器访问Portainer")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("地址：")]),t._v(" "),r("a",{attrs:{href:"http://xn--IP-im8ckc:9000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://IP地址:9000/"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("如果出现以下界面，则表示Portainer安装成功了。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(299),alt:"img"}})]),t._v(" "),r("p",[t._v("这里是让我们设置初始化管理员的密码，需要注意的是，密码至少是6位。我这里设置为 "),r("code",[t._v("1q2w3e4r")]),t._v("。设置好后，点击 "),r("code",[t._v("Creat user")]),t._v(" 按钮，会进入到以下页面：")]),t._v(" "),r("p",[r("img",{attrs:{src:s(300),alt:"img"}})]),t._v(" "),r("p",[t._v("这里提供了几种管理Docker环境的选择。因为我们是管理本地的Docker，所以我们选择 "),r("code",[t._v("Local")]),t._v(" 即可，如下图：")]),t._v(" "),r("p",[r("img",{attrs:{src:s(301),alt:"img"}})]),t._v(" "),r("p",[t._v("点击 "),r("code",[t._v("Connect")]),t._v(" 按钮，进行Docker环境的连接。连接成功的话，则会进入到以下页面。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(302),alt:"img"}})]),t._v(" "),r("h2",{attrs:{id:"portainer-界面介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#portainer-界面介绍"}},[t._v("#")]),t._v(" Portainer 界面介绍")]),t._v(" "),r("p",[t._v("经过上面几步的设置，我们总算是把Portainer安装成功了。那么接下来，我们就看看Portaiiner都提供了什么功能。")]),t._v(" "),r("ul",[r("li",[t._v("查看Portainer的DashBoard信息：")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(303),alt:"img"}})]),t._v(" "),r("ul",[r("li",[t._v("查看所有运行中的容器信息：")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(304),alt:"img"}})]),t._v(" "),r("ul",[r("li",[t._v("查看所有已经下载的Docker镜像：")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(305),alt:"img"}})]),t._v(" "),r("ul",[r("li",[t._v("查看"),r("code",[t._v("nginx")]),t._v("应用的统计信息：")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(306),alt:"img"}})]),t._v(" "),r("ul",[r("li",[t._v("查看"),r("code",[t._v("nginx")]),t._v("应用的运行过程中打印的日志信息：")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(307),alt:"img"}})]),t._v(" "),r("ul",[r("li",[t._v("进入"),r("code",[t._v("nginx")]),t._v("应用的容器内部来操作容器内部系统：")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(308),alt:"img"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);