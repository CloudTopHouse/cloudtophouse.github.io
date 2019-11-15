(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{736:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-的基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-的基本操作"}},[t._v("#")]),t._v(" Git 的基本操作")]),t._v(" "),s("h2",{attrs:{id:"获取与创建项目命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取与创建项目命令"}},[t._v("#")]),t._v(" 获取与创建项目命令")]),t._v(" "),s("h3",{attrs:{id:"git-init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-init"}},[t._v("#")]),t._v(" git init")]),t._v(" "),s("p",[t._v("用 git init 在目录中创建新的 Git 仓库。 你可以在任何时候、任何目录中这么做，完全是本地化的。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"git-clone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-clone"}},[t._v("#")]),t._v(" git clone")]),t._v(" "),s("p",[t._v("使用 git clone 拷贝一个 Git 仓库到本地，让自己能够查看该项目，或者进行修改。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"基本快照"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本快照"}},[t._v("#")]),t._v(" 基本快照")]),t._v(" "),s("h3",{attrs:{id:"git-add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-add"}},[t._v("#")]),t._v(" git add")]),t._v(" "),s("p",[t._v("git add 命令可将该文件添加到缓存")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"git-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-status"}},[t._v("#")]),t._v(" git status")]),t._v(" "),s("p",[t._v("git status 以查看在你上次提交之后是否有修改。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status -s\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"git-diff"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-diff"}},[t._v("#")]),t._v(" git diff")]),t._v(" "),s("p",[t._v("执行 git diff 来查看执行 git status 的结果的详细信息。")]),t._v(" "),s("p",[t._v("git diff 命令显示已写入缓存与已修改但尚未写入缓存的改动的区别。git diff 有两个主要的应用场景。")]),t._v(" "),s("ul",[s("li",[t._v("尚未缓存的改动：git diff")]),t._v(" "),s("li",[t._v("查看已缓存的改动： git diff --cached")]),t._v(" "),s("li",[t._v("查看已缓存的与未缓存的所有改动：git diff HEAD")]),t._v(" "),s("li",[t._v("显示摘要而非整个 diff：git diff --stat")])]),t._v(" "),s("h3",{attrs:{id:"git-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[t._v("#")]),t._v(" git commit")]),t._v(" "),s("p",[t._v("使用 git add 命令将想要快照的内容写入缓存区， 而执行 git commit 将缓存区内容添加到仓库中。")]),t._v(" "),s("p",[t._v("Git 为你的每一个提交都记录你的名字与电子邮箱地址，所以第一步需要配置用户名和邮箱地址。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yourname'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email youremail\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("将文件写入缓存区并提供提交注释")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update message'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"git-reset-head"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-reset-head"}},[t._v("#")]),t._v(" git reset HEAD")]),t._v(" "),s("p",[t._v("git reset HEAD 命令用于取消已缓存的内容。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD -- "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"拉取与推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取与推送"}},[t._v("#")]),t._v(" 拉取与推送")]),t._v(" "),s("h3",{attrs:{id:"git-pull"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-pull"}},[t._v("#")]),t._v(" git pull")]),t._v(" "),s("p",[t._v("git pull命令用于从另一个存储库或本地分支获取并集成(整合)。git pull命令的作用是：取回远程主机某个分支的更新，再与本地的指定分支合并，它的完整格式稍稍有点复杂。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("将远程存储库中的更改合并到当前分支中。在默认模式下，"),s("code",[t._v("git pull")]),t._v("是"),s("code",[t._v("git fetch")]),t._v("后跟"),s("code",[t._v("git merge FETCH_HEAD")]),t._v("的缩写。更准确地说，"),s("code",[t._v("git pull")]),t._v("使用给定的参数运行"),s("code",[t._v("git fetch")]),t._v("，并调用"),s("code",[t._v("git merge")]),t._v("将检索到的分支头合并到当前分支中。")]),t._v(" "),s("h3",{attrs:{id:"git-push"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-push"}},[t._v("#")]),t._v(" git push")]),t._v(" "),s("p",[s("code",[t._v("git push")]),t._v("命令用于将本地分支的更新，推送到远程主机。它的格式与"),s("code",[t._v("git pull")]),t._v("命令相似。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[t._v("#")]),t._v(" 标签")]),t._v(" "),s("h3",{attrs:{id:"git-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-tag"}},[t._v("#")]),t._v(" git tag")]),t._v(" "),s("p",[t._v("如果你达到一个重要的阶段，并希望永远记住那个特别的提交快照，你可以使用 "),s("code",[t._v("git tag")]),t._v(" 给它打上标签。")]),t._v(" "),s("p",[t._v('比如说，我们想为我们的 商城 项目发布一个"1.0.0"版本。 我们可以用 '),s("code",[t._v("git tag -a v1.0.0")]),t._v(' 命令给最新一次提交打上（HEAD） "v1.0.0" 的标签。')]),t._v(" "),s("p",[s("code",[t._v("-a")]),t._v(' 选项意为"创建一个带注解的标签"。 不用 -a 选项也可以执行的，但它不会记录这标签是啥时候打的，谁打的，也不会让你添加个标签的注解。 我推荐一直创建带注解的标签。')]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a v1.0.0\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("如果我们要查看所有标签可以使用以下命令：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);