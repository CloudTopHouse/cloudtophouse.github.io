(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{725:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-操作容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-操作容器"}},[s._v("#")]),s._v(" Docker 操作容器")]),s._v(" "),e("h2",{attrs:{id:"启动容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),e("p",[s._v("所需要的命令主要为 "),e("code",[s._v("docker run")]),s._v("。例如，下面的命令输出一个 “Hello World”，之后终止容器。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run ubuntu:16.04 /bin/echo "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello world'")]),s._v("Hello world\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("当利用 "),e("code",[s._v("docker run")]),s._v(" 来创建容器时，Docker 在后台运行的标准操作包括：")]),s._v(" "),e("ul",[e("li",[s._v("检查本地是否存在指定的镜像，不存在就从公有仓库下载")]),s._v(" "),e("li",[s._v("利用镜像创建并启动一个容器")]),s._v(" "),e("li",[s._v("分配一个文件系统，并在只读的镜像层外面挂载一层可读写层")]),s._v(" "),e("li",[s._v("从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去")]),s._v(" "),e("li",[s._v("从地址池配置一个 ip 地址给容器")]),s._v(" "),e("li",[s._v("执行用户指定的应用程序")]),s._v(" "),e("li",[s._v("执行完毕后容器被终止")])]),s._v(" "),e("h2",{attrs:{id:"终止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#终止容器"}},[s._v("#")]),s._v(" 终止容器")]),s._v(" "),e("p",[s._v("可以使用 "),e("code",[s._v("docker container stop")]),s._v(" 来终止一个运行中的容器。此外，当 Docker 容器中指定的应用终结时，容器也自动终止。")]),s._v(" "),e("p",[s._v("例如对于只启动了一个终端的容器，用户通过 "),e("code",[s._v("exit")]),s._v(" 命令或 "),e("code",[s._v("ctrl + d")]),s._v(" 来退出终端时，所创建的容器立刻终止。终止状态的容器可以用 "),e("code",[s._v("docker container ls -a")]),s._v(" 命令看到。例如")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker container "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -a\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出如下")]),s._v("\nCONTAINER ID        IMAGE                    COMMAND                CREATED             STATUS                          PORTS               NAMES\nba267838cc1b        ubuntu:14.04             "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" minutes ago      Exited "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" About a minute ago                       trusting_newton\n98e5efa7d997        training/webapp:latest   "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"python app.py"')]),s._v("        About an hour ago   Exited "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),s._v(" minutes ago                           backstabbing_pike\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"启动已终止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动已终止容器"}},[s._v("#")]),s._v(" 启动已终止容器")]),s._v(" "),e("p",[s._v("处于终止状态的容器，可以通过 "),e("code",[s._v("docker container start")]),s._v(" 命令来重新启动。此外，"),e("code",[s._v("docker container restart")]),s._v(" 命令会将一个运行态的容器终止，然后再重新启动它。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker container start "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("container ID or NAMES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"守护态运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#守护态运行"}},[s._v("#")]),s._v(" 守护态运行")]),s._v(" "),e("p",[s._v("更多的时候，需要让 Docker 在后台运行而不是直接把执行命令的结果输出在当前宿主机下。此时，可以通过添加 "),e("code",[s._v("-d")]),s._v(" 参数来实现。如果不使用 "),e("code",[s._v("-d")]),s._v(" 参数运行容器。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run ubuntu:16.04 /bin/sh -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"while true; do echo hello world; sleep 1; done"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出如下")]),s._v("\nhello world\nhello world\nhello world\nhello world\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("容器会把输出的结果 (STDOUT) 打印到宿主机上面，如果使用了 "),e("code",[s._v("-d")]),s._v(" 参数运行容器。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run -d ubuntu:17.10 /bin/sh -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"while true; do echo hello world; sleep 1; done"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出如下")]),s._v("\n77b2dc01fe0f3f1265df143181e7b9af5e05279a884f4776ee75350ea9d8017a\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("此时容器会在后台运行并不会把输出的结果 (STDOUT) 打印到宿主机上面(输出结果可以用 "),e("code",[s._v("docker logs")]),s._v(" 查看)。")]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("注意：")]),s._v(" 容器是否会长久运行，是和 "),e("code",[s._v("docker run")]),s._v(" 指定的命令有关，和 "),e("code",[s._v("-d")]),s._v(" 参数无关。")])]),s._v(" "),e("h2",{attrs:{id:"容器日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器日志"}},[s._v("#")]),s._v(" 容器日志")]),s._v(" "),e("p",[s._v("要获取容器的输出信息，可以通过 "),e("code",[s._v("docker container logs")]),s._v(" 命令。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker container logs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("container ID or NAMES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出如下")]),s._v("\nhello world\nhello world\nhello world\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"进入容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[s._v("#")]),s._v(" 进入容器")]),s._v(" "),e("p",[s._v("在使用 "),e("code",[s._v("-d")]),s._v(" 参数时，容器启动后会进入后台。某些时候需要进入容器进行操作，"),e("code",[s._v("docker exec")]),s._v(" 命令能让我们以交互的方式进入容器。")]),s._v(" "),e("p",[e("code",[s._v("docker exec")]),s._v(" 后边可以跟多个参数，这里主要说明 "),e("code",[s._v("-i")]),s._v(" "),e("code",[s._v("-t")]),s._v(" 参数。只用 "),e("code",[s._v("-i")]),s._v(" 参数时，由于没有分配伪终端，界面没有我们熟悉的 Linux 命令提示符，但命令执行结果仍然可以返回。当 "),e("code",[s._v("-i")]),s._v(" "),e("code",[s._v("-t")]),s._v(" 参数一起使用时，则可以看到我们熟悉的 Linux 命令提示符。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 69d1 bashroot@69d137adef7a:/"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果从这个 stdin 中 exit，不会导致容器的停止。更多参数说明请使用 "),e("code",[s._v("docker exec --help")]),s._v(" 查看。")]),s._v(" "),e("h2",{attrs:{id:"删除容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[s._v("#")]),s._v(" 删除容器")]),s._v(" "),e("p",[s._v("可以使用 "),e("code",[s._v("docker container rm")]),s._v(" 来删除一个处于终止状态的容器。例如")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker container "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" trusting_newtontrusting_newton\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果要删除一个运行中的容器，可以添加 "),e("code",[s._v("-f")]),s._v(" 参数。Docker 会发送 "),e("code",[s._v("SIGKILL")]),s._v(" 信号给容器。")]),s._v(" "),e("h2",{attrs:{id:"清理所有处于终止状态的容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清理所有处于终止状态的容器"}},[s._v("#")]),s._v(" 清理所有处于终止状态的容器")]),s._v(" "),e("p",[s._v("用 "),e("code",[s._v("docker container ls -a")]),s._v(" 命令可以查看所有已经创建的包括终止状态的容器，如果数量太多要一个个删除可能会很麻烦，用下面的命令可以清理掉所有处于终止状态的容器。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker container prune\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);