(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{299:function(t,s,e){t.exports=e.p+"assets/img/Lusifer1527005202.760287e2.png"},924:function(t,s,e){"use strict";e.r(s);var r=e(28),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"部署-docker-registry-webui"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署-docker-registry-webui"}},[t._v("#")]),t._v(" 部署 Docker Registry WebUI")]),t._v(" "),r("p",[t._v("私服安装成功后就可以使用 docker 命令行工具对 registry 做各种操作了。然而不太方便的地方是不能直观的查看 registry 中的资源情况。如果可以使用 UI 工具管理镜像就更好了。这里介绍两个 Docker Registry WebUI 工具")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/kwk/docker-registry-frontend",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-registry-frontend"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/hyper/docker-registry-web/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-registry-web"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("两个工具的功能和界面都差不多，我们以 "),r("code",[t._v("docker-registry-fontend")]),t._v(" 为例讲解")]),t._v(" "),r("h2",{attrs:{id:"docker-registry-frontend"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry-frontend"}},[t._v("#")]),t._v(" docker-registry-frontend")]),t._v(" "),r("p",[t._v("我们使用 docker-compose 来安装和运行，"),r("code",[t._v("docker-compose.yml")]),t._v(" 配置如下：")]),t._v(" "),r("div",{staticClass:"language-yaml line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1'")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("frontend")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" konradkleine/docker"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("registry"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("frontend"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v2\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 8080"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./certs/frontend.crt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/apache2/server.crt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./certs/frontend.key"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/apache2/server.key"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ENV_DOCKER_REGISTRY_HOST=192.168.75.133\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ENV_DOCKER_REGISTRY_PORT=5000\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br"),r("span",{staticClass:"line-number"},[t._v("11")]),r("br"),r("span",{staticClass:"line-number"},[t._v("12")]),r("br")])]),r("blockquote",[r("p",[t._v("注意：请将配置文件中的主机和端口换成自己仓库的地址")])]),t._v(" "),r("p",[t._v("运行成功后在浏览器访问：http://192.168.75.133:8080")]),t._v(" "),r("p",[r("img",{attrs:{src:e(299),alt:"img"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://funtl.com/assets/Lusifer1527005783.png",alt:"img"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);