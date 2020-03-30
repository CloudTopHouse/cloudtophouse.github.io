(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{942:function(e,s,a){"use strict";a.r(s);var t=a(28),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker-compose-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-简介"}},[e._v("#")]),e._v(" Docker Compose 简介")]),e._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),a("p",[e._v("Compose 项目是 Docker 官方的开源项目，负责实现对 Docker 容器集群的快速编排。从功能上看，跟 OpenStack 中的 Heat 十分类似。")]),e._v(" "),a("p",[e._v("其代码目前在 "),a("a",{attrs:{href:"http://qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cHM6Ly9naXRodWIuY29tL2RvY2tlci9jb21wb3Nl",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/docker/compose"),a("OutboundLink")],1),e._v(" 上开源。")]),e._v(" "),a("p",[e._v("Compose 定位是 「定义和运行多个 Docker 容器的应用（Defining and running multi-container Docker applications）」，其前身是开源项目 Fig。")]),e._v(" "),a("p",[e._v("我们知道使用一个 Dockerfile 模板文件，可以让用户很方便的定义一个单独的应用容器。然而，在日常工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况。例如要实现一个 Web 项目，除了 Web 服务容器本身，往往还需要再加上后端的数据库服务容器，甚至还包括负载均衡容器等。")]),e._v(" "),a("p",[e._v("Compose 恰好满足了这样的需求。它允许用户通过一个单独的 "),a("strong",[e._v("docker-compose.yml")]),e._v(" 模板文件（YAML 格式）来定义一组相关联的应用容器为一个项目（Project）。Compose 中有两个重要的概念：")]),e._v(" "),a("ul",[a("li",[e._v("服务 (Service)：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。")]),e._v(" "),a("li",[e._v("项目 (Project)：由一组关联的应用容器组成的一个完整业务单元，在 docker-compose.yml 文件中定义。")])]),e._v(" "),a("p",[e._v("Compose 的默认管理对象是项目，通过子命令对项目中的一组容器进行便捷地生命周期管理。Compose 项目由 Python 编写，实现上调用了 Docker 服务提供的 API 来对容器进行管理。因此，只要所操作的平台支持 Docker API，就可以在其上利用 Compose 来进行编排管理。")]),e._v(" "),a("h2",{attrs:{id:"安装-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-compose"}},[e._v("#")]),e._v(" 安装 Docker Compose")]),e._v(" "),a("p",[e._v("Compose 支持 Linux、macOS、Windows 10 三大平台。在 Linux 上的也安装十分简单，从 "),a("a",{attrs:{href:"http://qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cHM6Ly9naXRodWIuY29tL2RvY2tlci9jb21wb3NlL3JlbGVhc2Vz",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方 GitHub Release"),a("OutboundLink")],1),e._v(" 处直接下载编译好的二进制文件即可。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L https://github.com/docker/compose/releases/download/1.24.0/docker-compose-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("uname")]),e._v(" -s"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("uname")]),e._v(" -m"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /usr/local/bin/docker-compose\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x /usr/local/bin/docker-compose\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h2",{attrs:{id:"验证安装是否成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证安装是否成功"}},[e._v("#")]),e._v(" 验证安装是否成功")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker-compose version\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 输出如下")]),e._v("\ndocker-compose version "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.24")]),e._v(".0, build 0aa59064\ndocker-py version: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.7")]),e._v(".2\nCPython version: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.6")]),e._v(".8\nOpenSSL version: OpenSSL "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v(".0j  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2018")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);