(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1180:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"vuepress与github-pages搭配完成线上站点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress与github-pages搭配完成线上站点"}},[s._v("#")]),s._v(" VuePress与Github Pages搭配完成线上站点")]),s._v(" "),n("h2",{attrs:{id:"整体思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#整体思路"}},[s._v("#")]),s._v(" 整体思路")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("Github 创建项目，本地创建切换到 docs 分支，通过 VuePress 构建文档项目（写一些文档），上传至 Github。")])]),s._v(" "),n("li",[n("p",[s._v("Travis CI 自动 clone 后安装依赖、编译、上传至 Github master 分支。")])]),s._v(" "),n("li",[n("p",[s._v("通过 GitHub Pages 功能将 master 分支上的内容展示在 Web 上。")])])]),s._v(" "),n("p",[n("strong",[s._v("相关资料：")])]),s._v(" "),n("ul",[n("li",[s._v("我的文档看下效果："),n("a",{attrs:{href:"https://codexu.github.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("codexu.github.io/"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("我的文档源码："),n("a",{attrs:{href:"https://github.com/codexu/codexu.github.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("github.com/codexu/code…"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("VuePress中文文档(1.x)："),n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("v1.vuepress.vuejs.org/zh/"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("Travis CI："),n("a",{attrs:{href:"https://travis-ci.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("travis-ci.org"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"vuepress构建文档项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress构建文档项目"}},[s._v("#")]),s._v(" VuePress构建文档项目")]),s._v(" "),n("p",[s._v("使用 VuePress 初始化项目，只说几点，"),n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/getting-started.html#%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),n("OutboundLink")],1),s._v("写的十分详细。")]),s._v(" "),n("ul",[n("li",[s._v("依赖安装在 devDependencies。")]),s._v(" "),n("li",[s._v('package.json script 写运行和打包脚本，"serve": "vuepress dev docs"，"build": "vuepress build docs"。（这里按照自己习惯，后面做持续集成要用）')]),s._v(" "),n("li",[s._v("创建 docs 文件夹，把所有 markdown 文档存放在这里。")]),s._v(" "),n("li",[s._v("docs/.vuepress/config.js 可以做大量配置。")])]),s._v(" "),n("h2",{attrs:{id:"vuepress部署之前的准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress部署之前的准备"}},[s._v("#")]),s._v(" VuePress部署之前的准备")]),s._v(" "),n("ul",[n("li",[s._v("文档放置在项目的 "),n("code",[s._v("docs")]),s._v(" 目录中；")]),s._v(" "),n("li",[s._v("使用的是默认的构建输出位置；")]),s._v(" "),n("li",[s._v("VuePress 以本地依赖的形式被安装到你的项目中，并且配置了如下的 npm scripts:")])]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("项目下的"),n("code",[s._v("package.json")]),s._v(" 文件中的完整配置如下：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"学习笔记记录"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"d"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash deploy.sh"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^0.14.11"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h2",{attrs:{id:"github上进行站点的搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github上进行站点的搭建"}},[s._v("#")]),s._v(" GitHub上进行站点的搭建")]),s._v(" "),n("h3",{attrs:{id:"github上创建仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github上创建仓库"}},[s._v("#")]),s._v(" GitHub上创建仓库")]),s._v(" "),n("p",[s._v("登录"),n("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub"),n("OutboundLink")],1),s._v("后，在页面右上角的加号中找到“New repository”按钮，创建一个新的仓库，而且仓库的名字为： "),n("code",[s._v("[name].github.io")]),s._v("，例如我的文档是"),n("code",[s._v("learnnote.github.io")]),s._v("。")]),s._v(" "),n("p",[s._v("（注意：我们写入的名字要以"),n("strong",[s._v("github.io")]),s._v("做后缀，不然创建出来的不是GitHub Pages）")]),s._v(" "),n("blockquote",[n("p",[s._v("为什么用 [name].github.io ？\n因为在这个项目下，可以直接使用 https://[name].github.io/ 域名，简洁易记。")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(842),alt:"图片"}})]),s._v(" "),n("p",[s._v("进入到创建仓库页面，按照步骤创建，最后点击按钮完成仓库的创建。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(843),alt:"创建仓库"}})]),s._v(" "),n("h3",{attrs:{id:"将github上仓库克隆到本地"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将github上仓库克隆到本地"}},[s._v("#")]),s._v(" 将GitHub上仓库克隆到本地")]),s._v(" "),n("p",[s._v("选择本地存放Github项目的文件目录， 然后在该目录下使用以下命令行将仓库clone到本地：")]),s._v(" "),n("blockquote",[n("p",[s._v("git clone https://github.com/zhengxiaochuan/learnnote.github.io.git")])]),s._v(" "),n("p",[s._v("然后根据VuePress的用法，自行去写一些文档，做一下简单的配置，先别急着提交到 Github。")]),s._v(" "),n("h3",{attrs:{id:"github-pages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[s._v("#")]),s._v(" GitHub Pages")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("在 "),n("code",[s._v("docs/.vuepress/config.js")]),s._v(" 中设置正确的 "),n("code",[s._v("base")]),s._v("。")]),s._v(" "),n("p",[s._v("如果你打算发布到 "),n("code",[s._v("https://.github.io/")]),s._v("，则可以省略这一步，因为 "),n("code",[s._v("base")]),s._v(" 默认即是 "),n("code",[s._v('"/"')]),s._v("。")]),s._v(" "),n("p",[s._v("如果你打算发布到 "),n("code",[s._v("https://.github.io//")]),s._v("（也就是说你的仓库在 "),n("code",[s._v("https://github.com//")]),s._v("），则将 "),n("code",[s._v("base")]),s._v(" 设置为 "),n("code",[s._v('"//"')]),s._v("。")])]),s._v(" "),n("li",[n("p",[s._v("在你的项目中，创建一个如下的 "),n("code",[s._v("deploy.sh")]),s._v(" 文件（请自行判断去掉高亮行的注释）:")])])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是发布到自定义域名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.example.com' > CNAME")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("blockquote",[n("p",[s._v("提示")]),s._v(" "),n("p",[s._v("你可以在你的持续集成的设置中，设置在每次 push 代码时自动运行上述脚本。")])]),s._v(" "),n("h3",{attrs:{id:"github-pages-and-travis-ci"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-pages-and-travis-ci"}},[s._v("#")]),s._v(" GitHub Pages and Travis CI")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("在 "),n("code",[s._v("docs/.vuepress/config.js")]),s._v(" 中设置正确的 "),n("code",[s._v("base")]),s._v("。")]),s._v(" "),n("p",[s._v("如果你打算发布到 "),n("code",[s._v("https://.github.io/")]),s._v("，则可以省略这一步，因为 "),n("code",[s._v("base")]),s._v(" 默认即是 "),n("code",[s._v('"/"')]),s._v("。")]),s._v(" "),n("p",[s._v("如果你打算发布到 "),n("code",[s._v("https://.github.io//")]),s._v("（也就是说你的仓库在 "),n("code",[s._v("https://github.com//")]),s._v("），则将 "),n("code",[s._v("base")]),s._v(" 设置为 "),n("code",[s._v('"//"')]),s._v("。")])]),s._v(" "),n("li",[n("p",[s._v("在项目的根目录创建一个名为 "),n("code",[s._v(".travis.yml")]),s._v(" 的文件；")])]),s._v(" "),n("li",[n("p",[s._v("在本地执行 "),n("code",[s._v("npm install")]),s._v(" 并且在提交中包含 "),n("code",[s._v("package-lock.json")]),s._v(" 因为 "),n("code",[s._v("npm ci")]),s._v(" 需要它才能正确执行.")])]),s._v(" "),n("li",[n("p",[s._v("使用 GitHub Pages 部署提供程序模板并遵循 "),n("a",{attrs:{href:"https://docs.travis-ci.com/user/deployment/pages/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Travis 文档"),n("OutboundLink")],1),s._v("。")])])]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("language")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_js\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node_js")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" lts/*\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("install")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm ci\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm run docs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("build\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("provider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pages\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("skip-cleanup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("local_dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("github-token")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $GITHUB_TOKEN "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a token generated on github allowing travis to push code on you repository")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("keep-history")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"通过-travis-ci-做自动化打包及部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过-travis-ci-做自动化打包及部署"}},[s._v("#")]),s._v(" 通过 Travis CI 做自动化打包及部署")]),s._v(" "),n("ol",[n("li",[s._v("在根目录下创建 "),n("code",[s._v(".travis.yml")]),s._v(" 文件，并写入一些内容：")])]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("language")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_js\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node_js")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cache")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("install")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn build\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("after_success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cd docs/.vuepress/dist\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" git init\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" git config "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('global user.name "$'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("U_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('"\n    '),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" git config "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('global user.email "$'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("U_EMAIL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('"\n    '),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" git add "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("A\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" git commit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("m 'deploy'\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" git push "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("quiet "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('force "https'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("GH_TOKEN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("@$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("GH_REF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('" master'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("P_BRANCH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("ul",[n("li",[s._v("language: 语言选择 node_js，我们前端还有的选吗？")]),s._v(" "),n("li",[s._v("node_js: node版本，这块也许是越高越快？")]),s._v(" "),n("li",[s._v("cache: yarn 缓存，能使你构建速度更快...吧。")]),s._v(" "),n("li",[s._v("install: 安装依赖的包管理工具，使用 yarn 比 npm 快的多。")]),s._v(" "),n("li",[s._v("script: 一切就绪之后通过 yarn install 安装依赖。")]),s._v(" "),n("li",[s._v("after_success: 安装结束后，我们做一些打包和 push 到 Github 的指令。")]),s._v(" "),n("li",[s._v("环境变量 "),n("code",[s._v('"${***}"')]),s._v(" 这块后面会提到。")])]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("这时候可以 push 到 Github 了，因为没有 "),n("code",[s._v(".travis.yml")]),s._v(" Travis CI 是不会理你的项目的，同时将默认分支改为 docs。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/17/16b63addec810470?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("Github 增加一个 Personal access tokens，位置在 "),n("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[s._v("Settings / Developer settings"),n("OutboundLink")],1),s._v("。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/17/16b63addecc2de6c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),n("ul",[n("li",[s._v("Note 随意填，填 travis-ci 就行。")]),s._v(" "),n("li",[s._v("除了 delete_repo 权限都打勾就行。")])]),s._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[s._v("进入 "),n("a",{attrs:{href:"https://travis-ci.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("Travis CI"),n("OutboundLink")],1),s._v("，使用 Github 登录， 进入 "),n("a",{attrs:{href:"https://travis-ci.org/dashboard",target:"_blank",rel:"noopener noreferrer"}},[s._v("dashboard"),n("OutboundLink")],1),s._v("，此时应该可以看到你刚创建的项目。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/17/16b63addec9bfde5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),n("p",[s._v("5.启动进入这个项目，右上角 More options 点击 setting，配置环境变量。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/17/16b63addecb3c505?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),n("ul",[n("li",[s._v("GH_REF: 项目地址（github.com/[name]/[name].github.io.git）注意去掉 "),n("code",[s._v("https://")]),s._v("。")]),s._v(" "),n("li",[s._v("GH_TOKEN: tocken 是通过上面第三步拿到的。")]),s._v(" "),n("li",[s._v("P_BRANCH: 要上传的分支，这里我们要传到 master。")]),s._v(" "),n("li",[s._v("U_EMAIL: 你的 Github 邮箱。")]),s._v(" "),n("li",[s._v("U_NAME: 你的 Github 用户名。")])]),s._v(" "),n("h3",{attrs:{id:"开启-github-pages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开启-github-pages"}},[s._v("#")]),s._v(" 开启 GitHub Pages")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/17/16b63addecdb2e44?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"访问线上站点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问线上站点"}},[s._v("#")]),s._v(" 访问线上站点")])])}),[],!1,null,null,null);t.default=e.exports},842:function(s,t,a){s.exports=a.p+"assets/img/20191108103742.824438e1.png"},843:function(s,t,a){s.exports=a.p+"assets/img/20191108114430.6b59012e.png"}}]);