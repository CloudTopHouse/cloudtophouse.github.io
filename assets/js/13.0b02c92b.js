(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1001:function(t,e,s){"use strict";s.r(e);var l=s(28),r=Object(l.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"pull-requests"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#pull-requests"}},[t._v("#")]),t._v(" Pull Requests")]),t._v(" "),l("p",[t._v("Pull Requests 是 Bitbucket 上方便开发者之间协作的功能。提供了一个用户友好的 Web 界面，在集成提交的变更到正式项目前可以对变更进行讨论。")]),t._v(" "),l("p",[l("img",{attrs:{src:s(588),alt:"img"}})]),t._v(" "),l("p",[t._v("开发者向团队成员通知功能开发已经完成，Pull Requests 是最简单的用法。开发者完成功能开发后，通过 Bitbucket 账号发起一个 Pull Request。这样让涉及这个功能的所有人知道，要去做 Code Review 和合并到 master 分支。")]),t._v(" "),l("p",[t._v("但是，Pull Request 远不止一个简单的通知，而是为讨论提交的功能的一个专门论坛。如果变更有任何问题，团队成员反馈在 Pull Request 中，甚至 push 新的提交微调功能。所有的这些活动都直接跟踪在 Pull Request 中。")]),t._v(" "),l("p",[l("img",{attrs:{src:s(589),alt:"img"}})]),t._v(" "),l("p",[t._v("相比其它的协作模型，这种分享提交的形式有助于打造一个更流畅的工作流。SVN 和 Git 都能通过一个简单的脚本收到通知邮件；但是，讨论变更时，开发者通常只能去回复邮件。这样做会变得杂乱，尤其还要涉及后面的几个提交时。Pull Requests 把所有相关功能整合到一个和 Bitbucket 仓库界面集成的用户友好 Web 界面中。")]),t._v(" "),l("h2",{attrs:{id:"解析-pull-request"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#解析-pull-request"}},[t._v("#")]),t._v(" 解析 Pull Request")]),t._v(" "),l("p",[t._v("当要发起一个 Pull Request，你所要做的就是请求（Request）另一个开发者（比如项目的维护者），来 pull 你仓库中一个分支到他的仓库中。这意味着你要提供 4 个信息（源仓库、源分支、目的仓库、目的分支），以发起 Pull Request。")]),t._v(" "),l("p",[l("img",{attrs:{src:s(590),alt:"img"}})]),t._v(" "),l("h2",{attrs:{id:"工作方式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#工作方式"}},[t._v("#")]),t._v(" 工作方式")]),t._v(" "),l("p",[t._v("Pull Request 可以和功能分支工作流、GitFlow 工作流或 Forking 工作流一起使用。但 Pull Request 要求要么分支不同，要么仓库不同，所以不能用于集中式工作流。在不同的工作流中使用 Pull Request 会有一些不同，但基本的过程是这样的：")]),t._v(" "),l("ul",[l("li",[t._v("开发者在本地仓库中新建一个专门的分支开发功能。")]),t._v(" "),l("li",[t._v("开发者 push 分支修改到公开的 Bitbucket 仓库中。")]),t._v(" "),l("li",[t._v("开发者通过 Bitbucket 发起一个 Pull Request。")]),t._v(" "),l("li",[t._v("团队的其它成员 review code，讨论并修改。")]),t._v(" "),l("li",[t._v("项目维护者合并功能到官方仓库中并关闭 Pull Request。")])]),t._v(" "),l("h3",{attrs:{id:"在功能分支工作流中使用-pull-request"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#在功能分支工作流中使用-pull-request"}},[t._v("#")]),t._v(" 在功能分支工作流中使用 Pull Request")]),t._v(" "),l("p",[t._v("功能分支工作流用一个共享的 Bitbucket 仓库来管理协作，开发者在专门的分支上开发功能。但不是立即合并到 master 分支上，而是在合并到主代码库之前开发者应该开一个 Pull Request 发起功能的讨论。")]),t._v(" "),l("p",[l("img",{attrs:{src:s(591),alt:"img"}})]),t._v(" "),l("p",[t._v("功能分支工作流只有一个公开的仓库，所以 Pull Request 的目的仓库和源仓库总是同一个。通常开发者会指定他的功能分支作为源分支，master 分支作为目的分支。")]),t._v(" "),l("p",[t._v("收到 Pull Request 后，项目维护者要决定如何做。如果功能没问题，就简单地合并到 master 分支，关闭 Pull Request。但如果提交的变更有问题，他可以在 Pull Request 中反馈。之后新加的提交也会评论之后接着显示出来")]),t._v(" "),l("p",[t._v("在功能还没有完全开发完的时候，也可能发起一个 Pull Request。比如开发者在实现某个需求时碰到了麻烦，他可以发一个包含正在进行中工作的 Pull Request。其它的开发者可以在 Pull Request 提供建议，或者甚至直接添加提交来解决问题。")]),t._v(" "),l("h3",{attrs:{id:"在-gitflow-工作流中使用-pull-request"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#在-gitflow-工作流中使用-pull-request"}},[t._v("#")]),t._v(" 在 GitFlow 工作流中使用 Pull Request")]),t._v(" "),l("p",[t._v("GitFlow 工作流和功能分支工作流类似，但围绕项目发布定义一个严格的分支模型。在 GitFlow 工作流中使用 Pull Request 让开发者在发布分支或是维护分支上工作时，可以有个方便的地方对关于发布分支或是维护分支的问题进行交流。")]),t._v(" "),l("p",[l("img",{attrs:{src:s(592),alt:"img"}})]),t._v(" "),l("p",[t._v("GitFlow 工作流中 Pull Request 的使用过程和上一节中完全一致：当一个功能、发布或是热修复分支需要 Review 时，开发者简单发起一个 Pull Request，团队的其它成员会通过 Bitbucket 收到通知。")]),t._v(" "),l("p",[t._v("新功能一般合并到 develop 分支，而发布和热修复则要同时合并到 develop 分支和 master 分支上。Pull Request 可能用做所有合并的正式管理。")]),t._v(" "),l("h3",{attrs:{id:"在-forking-工作流中使用-pull-request"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#在-forking-工作流中使用-pull-request"}},[t._v("#")]),t._v(" 在 Forking 工作流中使用 Pull Request")]),t._v(" "),l("p",[t._v("在 Forking 工作流中，开发者 push 完成的功能到他自己的仓库中，而不是共享仓库。然后，他发起一个 Pull Request，让项目维护者知道他的功能已经可以 Review 了。")]),t._v(" "),l("p",[t._v("在这个工作流，Pull Request 的通知功能非常有用，因为项目维护者不可能知道其它开发者在他们自己的仓库添加了提交")]),t._v(" "),l("p",[l("img",{attrs:{src:s(593),alt:"img"}})]),t._v(" "),l("p",[t._v("由于各个开发有自己的公开仓库，Pull Request 的源仓库和目标仓库不是同一个。源仓库是开发者的公开仓库，源分支是包含了修改的分支。如果开发者要合并修改到正式代码库中，那么目标仓库是正式仓库，目标分支是 master 分支。")]),t._v(" "),l("p",[t._v("Pull Request 也可以用于正式项目之外的其它开发者之间的协作。比如，如果一个开发者和一个团队成员一起开发一个功能，他们可以发起一个 Pull Request，用团队成员的 Bitbucket 仓库作为目标，而不是正式项目的仓库。然后使用相同的功能分支作为源和目标分支。")]),t._v(" "),l("p",[l("img",{attrs:{src:s(594),alt:"img"}})]),t._v(" "),l("p",[t._v("2 个开发者之间可以在 Pull Request 中讨论和开发功能。完成开发后，他们可以发起另一个 Pull Request，请求合并功能到正式的 master 分支。在 Forking 工作流中，这样的灵活性让 Pull Request 成为一个强有力的协作工具。")]),t._v(" "),l("h2",{attrs:{id:"示例"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),l("p",[t._v("下面的示例演示了 Pull Request 如何在在 Forking 工作流中使用。也同样适用于小团队的开发协作和第三方开发者向开源项目的贡献。")]),t._v(" "),l("p",[t._v("在示例中，小红是个开发，小明是项目维护者。他们各自有一个公开的 Bitbucket 仓库，而小明的仓库包含了正式工程。")]),t._v(" "),l("h3",{attrs:{id:"小红-fork-正式项目"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#小红-fork-正式项目"}},[t._v("#")]),t._v(" 小红 fork 正式项目")]),t._v(" "),l("p",[l("img",{attrs:{src:s(595),alt:"img"}})]),t._v(" "),l("p",[t._v("小红先要 fork 小明的 Bitbucket 仓库，开始项目的开发。她登陆 Bitbucket，浏览到小明的仓库页面，点 Fork 按钮。")]),t._v(" "),l("p",[l("img",{attrs:{src:s(596),alt:"img"}})]),t._v(" "),l("p",[t._v("然后为 fork 出来的仓库填写名字和描述，这样小红就有了服务端的项目拷贝了。")]),t._v(" "),l("h3",{attrs:{id:"小红克隆她的-bitbucket-仓库"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#小红克隆她的-bitbucket-仓库"}},[t._v("#")]),t._v(" 小红克隆她的 Bitbucket 仓库")]),t._v(" "),l("p",[l("img",{attrs:{src:s(597),alt:"img"}})]),t._v(" "),l("p",[t._v("下一步，小红克隆自己刚才 fork 出来的 Bitbucket 仓库，以在本机上准备出工作拷贝。命令如下：")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[l("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://user@bitbucket.org/user/repo.git\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("p",[t._v("请记住，"),l("code",[t._v("git clone")]),t._v(" 会自动创建 origin 远程别名，是指向小红 fork 出来的仓库。")]),t._v(" "),l("h3",{attrs:{id:"小红开发新功能"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#小红开发新功能"}},[t._v("#")]),t._v(" 小红开发新功能")]),t._v(" "),l("p",[t._v("在开始改代码前，小红要为新功能先新建一个新分支。她会用这个分支作为 Pull Request 的源分支。")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[l("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b some-feature\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("h2",{attrs:{id:"编辑代码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#编辑代码"}},[t._v("#")]),t._v(" 编辑代码")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[l("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),l("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Add first draft of some feature"')]),t._v("\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("p",[t._v("在新功能分支上，小红按需要添加提交。甚至如果小红觉得功能分支上的提交历史太乱了，她可以用交互式 rebase 来删除或压制提交。对于大型项目，整理功能分支的历史可以让项目维护者更容易看出在 Pull Request 中做了什么内容。")]),t._v(" "),l("h3",{attrs:{id:"小红-push-功能到她的-bitbucket-仓库中"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#小红-push-功能到她的-bitbucket-仓库中"}},[t._v("#")]),t._v(" 小红 push 功能到她的 Bitbucket 仓库中")]),t._v(" "),l("p",[l("img",{attrs:{src:s(598),alt:"img"}})]),t._v(" "),l("p",[t._v("小红完成了功能后，push 功能到她自己的 Bitbucket 仓库中（不是正式仓库），用下面简单的命令：")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[l("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin some-branch\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("p",[t._v("这时她的变更可以让项目维护者看到了（或者任何想要看的协作者）。")]),t._v(" "),l("h3",{attrs:{id:"小红发起-pull-request"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#小红发起-pull-request"}},[t._v("#")]),t._v(" 小红发起 Pull Request")]),t._v(" "),l("p",[l("img",{attrs:{src:s(599),alt:"img"}})]),t._v(" "),l("p",[t._v("Bitbucket 上有了她的功能分支后，小红可以用她的 Bitbucket 账号浏览到她的 fork 出来的仓库页面，点右上角的【Pull Request】按钮，发起一个 Pull Request。弹出的表单自动设置小红的仓库为源仓库，询问小红以指定源分支、目标仓库和目标分支。")]),t._v(" "),l("p",[t._v("小红想要合并功能到正式仓库，所以源分支是她的功能分支，目标仓库是小明的公开仓库，而目标分支是 master 分支。另外，小红需要提供 Pull Request 的标题和描述信息。如果需要小明以外的人审核批准代码，她可以把这些人填在【Reviewers】文本框中。")]),t._v(" "),l("p",[l("img",{attrs:{src:s(600),alt:"img"}})]),t._v(" "),l("p",[t._v("创建好了 Pull Request，通知会通过Bitbucket系统消息或邮件（可选）发给小明。")]),t._v(" "),l("h3",{attrs:{id:"小明-review-pull-request"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#小明-review-pull-request"}},[t._v("#")]),t._v(" 小明 review Pull Request")]),t._v(" "),l("p",[l("img",{attrs:{src:s(601),alt:"img"}})]),t._v(" "),l("p",[t._v("在小明的 Bitbucket 仓库页面的 【Pull Request】Tab 可以看到所有人发起的 Pull Request。点击小红的 Pull Request 会显示出 Pull Request 的描述、功能的提交历史和每个变更的差异（diff）。")]),t._v(" "),l("p",[t._v("如果小明想要合并到项目中，只要点一下【Merge】按钮，就可以同意 Pull Request 并合并到 master 分支。")]),t._v(" "),l("p",[t._v("但如果像这个示例中一样小明发现了在小红的代码中的一个小 Bug，要小红在合并前修复。小明可以在整个 Pull Request 上加上评注，或是选择历史中的某个提交加上评注。")]),t._v(" "),l("p",[l("img",{attrs:{src:s(602),alt:"img"}})]),t._v(" "),l("h3",{attrs:{id:"小红补加提交"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#小红补加提交"}},[t._v("#")]),t._v(" 小红补加提交")]),t._v(" "),l("p",[t._v("如果小红对反馈有任何疑问，可以在 Pull Request 中响应，把 Pull Request 当作是她功能讨论的论坛。")]),t._v(" "),l("p",[t._v("小红在她的功能分支新加提交以解决代码问题，并 push 到她的 Bitbucket 仓库中，就像前一轮中的做法一样。这些提交会进入的 Pull Request，小明在原来的评注旁边可以再次 review 变更。")]),t._v(" "),l("h3",{attrs:{id:"小明接受-pull-request"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#小明接受-pull-request"}},[t._v("#")]),t._v(" 小明接受 Pull Request")]),t._v(" "),l("p",[t._v("最终，小明接受变更，合并功能分支到 master 分支，并关闭 Pull Request。至此，功能集成到项目中，其它的项目开发者可以用标准的 git pull 命令 pull 这些变更到自己的本地仓库中。")]),t._v(" "),l("h2",{attrs:{id:"总结"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),l("p",[t._v("到了这里，你应该有了所有需要的工具来集成 Pull Request 到你自己的工作流。请记住，Pull Request 并不是为了替代任何基于 Git 的协作工作流，而是它们的一个便利的补充，让团队成员间的协作更轻松方便。")])])}),[],!1,null,null,null);e.default=r.exports},588:function(t,e){t.exports="data:image/png;base64,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"},589:function(t,e,s){t.exports=s.p+"assets/img/pull-request-overview.38c07e26.png"},590:function(t,e,s){t.exports=s.p+"assets/img/pull-request-anatomy.826d19b4.png"},591:function(t,e,s){t.exports=s.p+"assets/img/pull-request-feature-branch.7b458571.png"},592:function(t,e,s){t.exports=s.p+"assets/img/gitflow-workflow-pull-request.0f52a2ad.png"},593:function(t,e,s){t.exports=s.p+"assets/img/pull-request-forking-workflow-1.aac82535.png"},594:function(t,e,s){t.exports=s.p+"assets/img/pull-request-forking-workflow-2.44302896.png"},595:function(t,e,s){t.exports=s.p+"assets/img/pull-request-1.464cae07.png"},596:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAAAsCAYAAAA+YZCQAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABMLSURBVHic7Z19VFTXuYefGZgzaMQERkXoVfS60ChoGtAqkluzYjCJoTUSWYoxVKlEqyYWl8EgjTY1aGutMSRaPxLTSlOlknVXkGBN9KorMdarSFYFYjVWxbtAEyDqhI/5PPePgYH5YD5gYCDu5w9lztl7n/f89nve85599uxRNDQ0yAgEAoHAZyj9bYBAIBB83xCBVSAQCHyMCKwCgUDgYwL9bYCgA2QZ7laDrgEQw+BWlIFwfwSo+vnbEoGgQ0Rg7W2YDHD+AFSWgL7R39b0ThQKCB8PUzMgZLi/rREIHFCIWQG9CJMBStbBzUp/W9I3CJDgyXUQMd7flggENrgMrEajkdraWrRaLUajsSftuicZcv0ImhvH/W1Gn8IoBXMlbjXmALW/TREASqWS+++/n6FDhzrsM5lM1nhiMBj8YF3XcHVu9rgcCqitrcVgMDBu3DgCA8WoQbciyzSf3WA7mqoMQBE00F8W9U6MOuR2QySBei0x/e8QGP2kH40StGI0Gvn3v//NzZs3HQJQbW0ter2esWPH9ng8OX/+PLGxsV1qw9W52ePy7O7cucP48eNFUO0BzLf/D1nX0LZBGUDQgj0oQ4b5z6jeiNmEruhVTNfPWjfJX19CEfOUH40StKJSqRg1ahQXLlxwCD537twhJibGb/FEoVB0qb6rc7PH5RmazWaUSiVms7lLBgncY/6uzuazImgg3P8Dob0DChQRMdAusJqbvxM69SI6ihkmk8mv8cQXx/XUfre3jq5GeUHnEdp3gJ0uCoXQqq/gz37qyWO7DawiE+gZZNnxHaLQ3jn2WsmyLLTqI/izn3ry2CJj7SU401lo7xyhVd9FZKwtOMukvGX16tUAbNmypcttfV9xprMvtP8+IrTqu/izn3ry2GKtgHuMgoIC9Hq9v83o9QidBF2hRzJWX7alrbnE+fLL1Gl1qIPDiZ4Sy4jglsnhujrOV1wnPDqW8D42X7ynsrCzZ89SVVXFggULPJjorONaeQX1TuNLKNGxI+iczFrKz19G48N+8rVW3unUhkv/FNwzGWsfmqCq5aNfzWXD0XqHPXM3HCAzcQS6qqMsW/YGy9/9hOejg/1gY+9Bq9VSUlJCZWUljY22aw7cunWLvLw8kpOTmThxYseN6L5izeJlXHe6M5R3T5YQ3ZmYoasia9kyUnuwn15++WWbzw8++CBpaWmoVCqamprYt28fX331lU0Zj3UCPPFPgfecPXuW0tJSqqurAYiIiGDixIke9Id/6SMZq46TGyxOm5r7PiueGGPJlLTX+OvqOWx9dR7R0SeYprZc5Wp13xtz82XGWltby+7du7l9+7bLcgqFws0x1AwCWLGLvy6MAZ3tXlWAjKlTJqoZSef7ydmsAG/buXjxIocOHWL27NkcOHDAIai2x71OnvlnYl97jOoGPO2n6upq/va3vxEU1I9HHklg1KhRAFy5coXPPjvFJ598QlpaGhERET4/ti/oGxmrtozNJfVEpu5iVWIUJoMBA0C/YaS+nsfJBX+m4ea3WKJAG7q6SxRs28Yfj5YB8PgvfktW2jSCAXTX2JaZT3TaFD7KXMcZIPLhufzqd78kpjWJ0l7jwLbNvFnipH4v5caNG+Tn53P79m2ioqKYO3cuGo3Guj8zM5OwsDAWLlzI4MGD3U5BkYFBA0IIMARAgO0+U4ujutJZV/MP1mz4iCk/1pD/ZgFMXsk7mydR264dbflHrHl9B5pnfseGeTE+UMGRN954w/r3F198wb59+wgKCqKiooLKykrUajXp6emMHj0a8FInT/0zfKgHPvku0bNj+e91mykDHp77G159PpKCV39GQRmERs5kw/YsYjVqa/nI2dF8su5NS/mZWbyaNds6xKK9dpJtm/9ISZnluSNy8lyy1vyC2HC1877ZNo9wP/t9eXk5hw4Vk5j4OBMnTqSo6BDFxcUAxMXFsXTpEsrLy/nzn/dZy/Q2fJ6xyrJMfn4+FRUVDvuysrKsf48ePZpFixahVLp/f6a7eZN6YEnyOAztF4ORTRhCprDzSDyYzTRcbd0OcvO/WJO0kDNoWJWbh6aumJytr3D0Hzkc3/40aoxcLiuhoKyExBXryZVKydlaQMYrURx/eyZqanh9RiolaFiRm8eI706zetMrHL38Gsd/k9jJsUXP8TQLW7NmjdPtGo2GxYsXA9i8hPnRj35EcnIySqUSk8nkzggArl27xjd3+6H/rq2dAeHhLcHgkkudFYabnCk7ypkyiIuPo1YzhEEtKyJIKonma8XMyMiFyFV8uGACssGNTR2a6lqr9hrExMTw1FNPMWnSJLZv3w5ASkoKI0eOtJbzRidP/dPQ8KUHPnmUgrKjJK3K5cmaYjbtX0dyAWgSV5C7vo6tr+1n+bopHH/7cdvy2VtYOqCUJTmbSa67j+NvJKLWnmde6ivUa2aQm7cWak6Qs2k/yzMjOb7/mQ76ppoN3ej37vrp3LlzHDpUzJIlLxAREcGHHxZRU1NDRkYGAAcPFiLLH5OYmEhISAj79uUjy7JHwdXZsU+dOsU777zjtHxCQoL1GvIWn2esCoWC559/nh07dlBVVeW0THh4OAsXLvQoqAIo1Jb5Z7rmJmCA7U6zEYOTlyvXj+3kDJBbWMSM4SpkRTxjNDAnJ5dj1x9nZrilXPz6QjYmDUcmiQj9aRbtb8AA1B/dSwmQW3SEGUPNyIp4/q6BJ1ev58wvEvlxuO3xuquDOktycrLT7XPnzsVoNHp8w1QDdQey+MkBu3b2HGFldLBbnR9XWvpuxvpCcpMiUSBjaPgXg4DSkzvYv6MA4rP5+1vJhBgMdC6seofZbOaxxx7j1KlT1NbWMnLkSB566CGbrNQbnTz1T099ckZuIetnDAdiuLB/FsVx2RRtTEYlQ0Tdxyza/y0GsAa5uOz3WZ8chSxPo4g6fpqznjM1iUw23CZYE88finKJVsmgiCVC+zGL9iuxWOzYN1WHX/PK733JuXPnOHr0mDWoApSWlrJy5UuEhoYCkJIyh92795CYmEhERAQrV77Erl27ATqVuSYkJAA4XLtdvWa7bYx18eLFbNu2jfp628H8gQMHkpGRgVKp9KJtSzmVJLmpI7f8K6M01IBmFVOGKdC3LFE27MfziORjGowGZBnqgGejh6DXW/b3HzACkJBkmYYGi905C5MpjLQ8Sl8vszwa3fhWizzU9gKaOnUqsizz7rvv2mxPSEjg5z//udtz9fWsgICAAKf1vVquTbYMq2qSctm1cIx1s04HocMGIstmtzojWWyIjR7SljXKIAGf7CgAIPVnj/OATo+nC1P6QqvGxkaOHTsGQFJSkkNW6t2ydp75p6c++WhUq08+QGwkXJgWjVKvxwD0HzCAVh9tLf/C5GFWHx4y5WngY241aFGPmcEHReP57FgBW8oruHz0MGX1QJzc8jTi2Dffeen33uKun4KCgggKCrIpZ/+5fTuyLFu/4dyZawwcr11Pr1lXdNsYqyRJZGRkkJeXR1NTk822/v37e9mYZXTnek09/EeY7T7ddV6fM5/glX9l2YP2FVUEGNvEMZpUDk3LumbgvpYPbSN/rdnAjPlziJVAD6if/CkSEBnh/IGo9e5n30H+oKioiOXLlxMQYDswevDgQWbNmoUkSR63NSImimHDbFfZks1GTNYEz73OuvY6YwnYkTOSiCgtZv/SHJ74nz8Q1YPvdo4fP87du3cZM2YMwcHB/POf/2TChAnW/V7p5KF/Pgt455Oy5X2hLGOV2uFa1xB6X6B1h8ksoQFQKGi+cpip89cDEBmfSNKSXBJO5PB2tZ2J7fqmM37vK+Li4gB48808Xnghg4iICB55JIH8/HxSUlIAS7/ExVmW/6uurqawsJCEhARr3c7Seu1evHjRJ9eszzLW7OxsADZt2mTdFhISQnp6Ojt37sRsNpOWlsbgwYNt2nRWzx4pPIZUYP8vN/PEsS02F+D1T9/ncD3Me6Cfnc8NgroDlN/9CT9sGXXXlhe3TB2SbMo6vRuqATQkJ88jtvUmXX2arXtOEzbpUeSBru9+Fy9eJD093WP9OpuFtX8pA1BVVcV7771HdXU1e/fuJTk52foYBZZHqxs3bjB//nzCwsLsm3NKrU7nIoPrnM51wPyM9SSviGfST3NYteU0RWuneGSPPd7OCrhw4QInTpwAYObMmRw5coTy8nKCgoKIiooCvNPJU/+k0VutZLvPducMDKKO4vJvGD/Jkl3WlZ+gDtAMkKg6+SEAuUXneCLcolHp1a1Q3YHPQ6f93lPc9VNsbCyyLLNvXz5JSU8zffp0ZFm2Pu7HxcUyffp0ysvL+eCDD3j66aetdbp67KlTp1qv367SrbMCZFlm+PDhzJs3j6amJqKiojq1EILZOJSM91axf9FWFk1/kZd+nc7DkXC5ZC8bD5YBqaTGh8PVtjojHk1D87uVrHgul7feSie0voy1LxYAqUwbLYGbn5MaMe1nRLKUpXOy2fLWUiL1l9myaC1niGd2lhro+DwSEhKsd8Duprm52eZzWFgYy5YtY8eOHVy5coXf//73DnW+/vprtm/fzjPPPNPlxX/d6nzNhe1NdeiGJbJrxW6WvL2av8w6zIJumteanZ3tMG1q8uTJhIWFYTAY0Ol07N2716aOpzp56p9D67rmk86QgI8yX2LSro1EUcHazAKIzCY+XKJ2oCXCV1+5xDcqFRWHd7L6QB1wkpu6n+Dsaw9d8XtfERcXR3h4OPn5f+Hzzz+3uZ6uXr3Knj17qK//lsWLF3s13aon6ZZZAe0xmUxMmDABhULh8uddXB/HQNDYeRTtCmbT2tfI+/WL1j1xSdlkZyczRNdMk2xxJEmlwvDAFArfz2X1czm8+NzhlsKpvLdlFWH6ZoyyzKCWstbxGvUgGGCxRd/vYf5UmMvqOTmsfs4yFocmni27cokMNGHwsX/5aoxVlmWCg4PJzMykuLiYiooKhy8ItOJ2fqasQgMopI4zQnc6N8mWQNleZ1q1l9TIBh0/TPsDSW/PYeeS93js0xdx936ks1q1LzNmzBhmzZqF2WwmJSWF5uZmLl265LSe+3msnvmn9z7Zesw2/WXafLTNpuv8eslzlj8jU3n/T7PpZ9AROW05qZGn2Z45n+0AoYlkr5rBpq0f89W3zYQ56Zvu9ntPfTo8PJysrJcpLS3ls89OcfBgoXV7bOzD1kd/b66RnpzH6vI3r7788kvGjRvnUUNr164FYOPGjV4Z4E29QElNYIASvU6LXg+SFIwkmTHpdRjMoFSpUQcqMRt16AxmAlRqVIFKvtNqQZIIliSMBh0GkwxKFUHqQOSWsgAqdRCBShldkw4zWOvrtVr0SAQHS5iMBvSdnBLkCrn6AhTntG3o9wCK5/d1qU1JkhzGWNvPzwwNDXU9lahFI8xGmnUdv8xxpbN9n7Rv16q9QkVQUKBlxkBzM0Y3/i9/UQj/206bUf+FYvrLHVcA+vWz/blss9mMTtf2jQe1Wm0zS8UrnVpw55/utHL0SSXqfmqUZiNNLfrb+KjhKgseS2N+4SmeDQetHoKDJYz6ZgwmIEBFkBRo8V9JIlgtYTaDUqnAbNRhQOXYN/jG7ysrKxk7dqzNNm/iia+prKz02bGdnZs9Ps9YWwOlt3hyHIOuGQOgDJCQJEBuoqmprZ5J30xju6lXRn0zRr2i5QWETGPLS7SWwjQ12s7T0jc30X5La/0ASUICmhqbHN8ddCNdvcO2DxyttM7PNJvN7n8g0olGznCls32fOG1X9uw4rnCnVUdZeyv2Qype6dSCO/8Eb33SRLOd3TY+2tL03UYtjXIwkgSNje3aM+ppMuqt/muzr6V9Z7J3p9/fK2sF+Gx1q67cDdxFf3vMJhMmkwmT2ROhZEtZU2efYVrrm3o0qHYXKSkplnPxuZN1VefeRVd0cu+fvtJKYmpcPJHBEphNHWbVrf7rHd8vv+9pfJaxpqenOzx2eorJZHLIGO45ZBn7ZXi74w7rLIvtc9hpJcut8zJ9R5/QSR1J5s48ZKOOZn1PfLWi69wrGavPZgXc84FRIOhpPByqEfQ8Pbq6laBjFI75qtC+AxRm+zFPd2/tBb0FkbEKehR5wGDb0Np0B8WVTyHsQWQxytWGvgnF1dO22/qH+McWgaADXAZWpVKJwWAgMFDE327nvkHI9w1C0dD2tVrFia2W//1lUx9BDhsrMtZehNFodLrAUkBAgF/jiS98pKNzs8flGYaEhFBTU0NERIQIrj1B7Dz49G1/W9G30PwnDJ8kfqW1l2A0GqmpqSEkxPEpwt/xpKs+4urcHI7l6gsCADdv3kSr1Xo8l0/QNcKuFBFa87m/zegT6NUh3Bi/GH2Qxn1hQY+gVCoJCQlhyJAhTvffunULrVbr5ephvQN359Yet4FV4Aeun4WKYvjmMugb/G1N70IZAPf/AEZMhoeeBVU/93UEgh5GBFaBQCDwMT775pVAIBAILIjAKhAIBD5GBFaBQCDwMSKwCgQCgY8RgVUgEAh8zP8Db1eh1At1OLQAAAAASUVORK5CYII="},597:function(t,e,s){t.exports=s.p+"assets/img/pull-request-3.cbfc1dc4.png"},598:function(t,e,s){t.exports=s.p+"assets/img/pull-request-5.dbd08c9b.png"},599:function(t,e,s){t.exports=s.p+"assets/img/example-6.4f487bd6.png"},600:function(t,e,s){t.exports=s.p+"assets/img/pull-request-7.9db01f06.png"},601:function(t,e,s){t.exports=s.p+"assets/img/pull-request-8.e2f684fa.png"},602:function(t,e,s){t.exports=s.p+"assets/img/pull-request-9.4d97d3cf.png"}}]);