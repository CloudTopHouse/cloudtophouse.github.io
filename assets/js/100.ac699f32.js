(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{683:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-gitlab-jenkins-自动部署及回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-gitlab-jenkins-自动部署及回滚"}},[s._v("#")]),s._v(" docker + gitlab + jenkins 自动部署及回滚")]),s._v(" "),a("p",[s._v("按之前配置已经完成了项目推送至 tag 后，"),a("strong",[s._v("jenkins host")]),s._v(" 会自动构建 docker 镜像，并将镜像推送至 "),a("strong",[s._v("阿里云 registry")]),s._v("，然后 "),a("strong",[s._v("jenkins host")]),s._v(" 会通过 "),a("strong",[s._v("Publish over SSH")]),s._v(" 插件，将生成一个自动部署的脚本push到指定的主机中，然后自动停止之前的镜像并 pull 当前的镜像并运行")]),s._v(" "),a("h4",{attrs:{id:"遗留问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遗留问题"}},[s._v("#")]),s._v(" 遗留问题")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("版本回退功能未实现")]),s._v(" "),a("p",[s._v("需要实现版本回退功能支持对紧急问题的规避")])]),s._v(" "),a("li",[a("p",[s._v("回退版本记录")]),s._v(" "),a("p",[s._v("构建的 image 是以 gitlab tag 名称来创建的，所以版本回退时，必须要知道上一次的 image 才能进行回退操作，所以需要记录每次自动部署时的 image 以方便自动部署回滚")])])]),s._v(" "),a("h4",{attrs:{id:"记录自动部署历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记录自动部署历史"}},[s._v("#")]),s._v(" 记录自动部署历史")]),s._v(" "),a("p",[s._v("修改构建ssh脚本，生成自动部署的脚本中，加入每次自动部署时将上次的image写入本地历史文件中便于版本回退")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONTAINER_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"citest"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GIT_TAG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" describe --always --tag"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONTAINER_FULL_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CONTAINER_NAME}")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GIT_TAG}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REPOSITORY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("registry.cn-shanghai.aliyuncs.com/xxx/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CONTAINER_NAME}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GIT_TAG}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建Docker镜像")]),s._v("\ndocker build -t "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOSITORY")]),s._v(" -f Dockerfile "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送Docker镜像")]),s._v("\ndocker login --username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx --password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password registry.cn-shanghai.aliyuncs.com\ndocker push "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOSITORY")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除生成的image")]),s._v("\ndocker images "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" citest "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('":"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" docker rmi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除名称或标签为none的镜像")]),s._v("\ndocker rmi -f  "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("docker images "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<none>'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ./release "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f ./release/repull "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"docker ps | grep citest | awk '{print \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}' >> /data/jenkins/mi_test_history"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo /data/jenkins/mi_test_history'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"docker ps | grep citest | awk '{print \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("}' | xargs docker kill || true"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"docker images | grep citest | awk '{print \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}' | xargs docker rmi -f || true"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker login --username=xxx --password=password registry.cn-shanghai.aliyuncs.com'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker pull '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOSITORY")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker run -d '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOSITORY")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ./release/repull\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("这里每次完成构建后，会生成一个自动部署脚本 "),a("strong",[s._v("repull")]),s._v(" 并将此脚本发送到其他指定的主机中执行自动部署，而修改后的 "),a("strong",[s._v("repull")]),s._v(" 脚本会再每次自动部署前都记录一下上次的 image 到 "),a("strong",[s._v("/data/jenkins/mi_test_history")]),s._v(" 文件中，这个文件每一行代表一次版本更新，每次更新都会添加记录至文件的最后一行")]),s._v(" "),a("h4",{attrs:{id:"创建参数化构建任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建参数化构建任务"}},[s._v("#")]),s._v(" 创建参数化构建任务")]),s._v(" "),a("p",[s._v("原来的job是通过监听 gitlab 的 tag 推送事件来触发的，为了支持回滚，所以添加一个参数化构建的任务，该任务支持手动构建及手动回退版本")]),s._v(" "),a("p",[s._v("新创建任务的 git 配置与之前任务一致，然后勾选 "),a("strong",[s._v("参数化构建过程")]),s._v(" 并配置参数，这里目前添加一个bool值参数，true表示执行手动构建，false表示版本回退")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/8/20/16cae61d73250734?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),a("p",[s._v("创建构建执行的shell脚本，并支持对构建配置的参数的解析，按参数执行不同的操作")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CTRL_BUILD")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"to build image"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONTAINER_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"citest"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GIT_TAG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" describe --always --tag"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_manual_'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BUILD_NUMBER")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONTAINER_FULL_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CONTAINER_NAME}")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GIT_TAG}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REPOSITORY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("registry.cn-shanghai.aliyuncs.com/xxx/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CONTAINER_NAME}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GIT_TAG}")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建Docker镜像")]),s._v("\n\tdocker build -t "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOSITORY")]),s._v(" -f Dockerfile "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送Docker镜像")]),s._v("\n\tdocker login --username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx --password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password registry.cn-shanghai.aliyuncs.com\n\tdocker push "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOSITORY")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除生成的image")]),s._v("\n\tdocker images "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" citest "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('":"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" docker rmi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除名称或标签为none的镜像")]),s._v("\n\tdocker rmi -f  "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("docker images "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<none>'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f ./auto.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"docker ps | grep citest | awk '{print \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}' >> /data/jenkins/mi_test_history"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo /data/jenkins/mi_test_history'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"docker ps | grep citest | awk '{print \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("}' | xargs docker kill || true"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"docker images | grep citest | awk '{print \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}' | xargs docker rmi -f || true"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker login --username=xxx --password=password registry.cn-shanghai.aliyuncs.com'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker pull '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOSITORY")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker run -d '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOSITORY")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ./auto.sh\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"to rollback image"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f ./auto.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"popline(){ LC_CTYPE=C l=\\'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v('" '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("$1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("; l=\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("t}")]),s._v("; truncate -s "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("-\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("l}")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("; printf %s "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$l")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("; }"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last=\\'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("popline /data/jenkins/mi_test_history "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"if [ -n '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$last")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" ]; then"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("docker ps | grep citest | awk '{print \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("}' | xargs docker kill || true"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("docker images | grep citest | awk '{print \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}' | xargs docker rmi -f || true"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("docker login --username=xxx --password=password registry.cn-shanghai.aliyuncs.com"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("docker pull \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$last")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("docker run -d \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$last")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("echo "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("rollback to \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$last")]),s._v(" success"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"else'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("echo "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("nothing to rollback"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fi'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ./auto.sh\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br")])]),a("p",[s._v("手动构建版本与自动触发构建基本一致，只是 image 名称会添加手动构建的标识及构建编号，回滚时会生成一个回滚的脚本，回滚脚本将会从 "),a("strong",[s._v("/data/jenkins/mi_test_history")]),s._v(" 文件中 pop出最后一行，然后停止当前的任务并删除 image，然后 pull 旧版本的 image 并运行")]),s._v(" "),a("p",[a("strong",[s._v("Publish over SSH")]),s._v(" 的配置与之前差不多，主要就是将生产的 auto.sh 脚本传输到从机并执行")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/8/20/16cae6205573e398?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),a("h4",{attrs:{id:"功能测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能测试"}},[s._v("#")]),s._v(" 功能测试")]),s._v(" "),a("p",[s._v("手动点击任务构建，并勾选自定义构建参数")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/8/20/16cae62bdb3c54a5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),a("p",[s._v("会生成一个新的 image 覆盖之前的 image 并运行，也产生了 history 记录")]),s._v(" "),a("p",[s._v("再次手动点击任务构建，这次不勾选自定义构建参数来进行版本回退操作")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/8/20/16cae6241ae79e1e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),a("p",[s._v("目前版本已经回退至上个版本并清除版本记录，功能正常")])])}),[],!1,null,null,null);t.default=e.exports}}]);