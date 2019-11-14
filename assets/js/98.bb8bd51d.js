(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{676:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"附：为什么说-json-不适合做配置文件？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附：为什么说-json-不适合做配置文件？"}},[s._v("#")]),s._v(" 附：为什么说 JSON 不适合做配置文件？")]),s._v(" "),a("blockquote",[a("p",[s._v("很多项目使用 JSON 作为配置文件，最明显的例子就是 npm 和 yarn 使用的 package.json 文件。当然，还有很多其他文件，例如 CloudFormation（最初只有 JSON，但现在也支持 YAML）和 composer（PHP）。")])]),s._v(" "),a("p",[s._v("但是，JSON 实际上是一种非常糟糕的配置语言。别误会我的意思，我其实是喜欢 JSON 的。它是一种相对灵活的文本格式，对于机器和人类来说都很容易阅读，而且是一种非常好的数据交换和存储格式。但作为一种配置语言，它有它的不足。")]),s._v(" "),a("h2",{attrs:{id:"为什么流行使用-json-作为配置语言？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么流行使用-json-作为配置语言？"}},[s._v("#")]),s._v(" 为什么流行使用 JSON 作为配置语言？")]),s._v(" "),a("p",[s._v("将 JSON 用作配置文件有几个方面的原因，其中最大的原因可能是它很容易实现。很多编程语言的标准库都支持 JSON，开发人员或用户可能已经很熟悉 JSON，所以不需要学习新的配置格式就可以使用那些产品。现在几乎所有的工具都提供 JSON 支持，包括语法突出显示、自动格式化、验证工具等。")]),s._v(" "),a("p",[s._v("这些都是很好的理由，但这种无处不在的格式其实不适合用作配置。")]),s._v(" "),a("h2",{attrs:{id:"json-的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-的问题"}},[s._v("#")]),s._v(" JSON 的问题")]),s._v(" "),a("h3",{attrs:{id:"缺乏注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺乏注释"}},[s._v("#")]),s._v(" 缺乏注释")]),s._v(" "),a("p",[s._v("注释对于配置语言而言绝对是一个重要的功能。注释可用于标注不同的配置选项、解释为什么要配置成特定的值，更重要的是，在使用不同的配置进行测试和调试时需要临时注释掉部分配置。当然，如果只是把 JSON 当作是一种数据交换格式，那么就不需要用到注释。")]),s._v(" "),a("p",[s._v("我们可以通过一些方法给 JSON 添加注释。一种常见的方法是在对象中使用特殊的键作为注释，例如“//”或“__comment”。但是，这种语法的可读性不高，并且为了在单个对象中包含多个注释，需要为每个注释使用唯一的键。David Crockford（JSON 的发明者）建议使用预处理器来删除注释。如果你的应用程序需要使用 JSON 作为配置，那么完全没问题，不过这确实带来了一些额外的工作量。")]),s._v(" "),a("p",[s._v("一些 JSON 库允许将注释作为输入。例如，Ruby 的 JSON 模块和启用了 JsonParser.Feature.ALLOW_COMMENTS 功能的 Java Jackson 库可以处理 JavaScript 风格的注释。但是，这不是标准的方式，而且很多编辑器无法正确处理 JSON 文件中的注释，这让编辑它们变得更加困难。")]),s._v(" "),a("h3",{attrs:{id:"过于严格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过于严格"}},[s._v("#")]),s._v(" 过于严格")]),s._v(" "),a("p",[s._v("JSON 规范非常严格，这也是为什么实现 JSON 解析器会这么简单，但在我看来，它还会影响可读性，并且在较小程度上会影响可写性。")]),s._v(" "),a("h3",{attrs:{id:"低信噪比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#低信噪比"}},[s._v("#")]),s._v(" 低信噪比")]),s._v(" "),a("p",[s._v("与其他配置语言相比，JSON 显得非常嘈杂。JSON 的很多标点符号对可读性毫无帮助，况且，对象中的键几乎都是标识符，所以键的引号其实是多余的。")]),s._v(" "),a("p",[s._v("此外，JSON 需要使用花括号将整个文档包围起来，所以 JSON 是 JavaScript 的子集，并在流中发送多个对象时用于界定不同的对象。但是，对于配置文件来说，最外面的大括号其实没有任何用处。在配置文件中，键值对之间的逗号也是没有必要的。通常情况下，每行只有一个键值对，所以使用换行作为分隔符更有意义。")]),s._v(" "),a("p",[s._v("说到逗号，JSON 居然不允许在结尾出现逗号。如果你需要在每个键值对之后使用逗号，那么至少应该接受结尾的逗号，因为有了结尾的逗号，在添加新条目时会更容易，而且在进行 commit diff 时也更清晰。")]),s._v(" "),a("h3",{attrs:{id:"长字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#长字符串"}},[s._v("#")]),s._v(" 长字符串")]),s._v(" "),a("p",[s._v("JSON 作为配置格式的另一个问题是，它不支持多行字符串。如果你想在字符串中换行，必须使用 “\\n” 进行转义，更糟糕的是，如果你想要一个字符串在文件中另起一行显示，那就彻底没办法了。如果你的配置项里没有很长的字符串，那就不是问题。但是，如果你的配置项里包括了长字符串，例如项目描述或 GPG 密钥，你可能不希望只是使用 “\\n” 来转义而不是使用真实的换行符。")]),s._v(" "),a("h3",{attrs:{id:"数字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字"}},[s._v("#")]),s._v(" 数字")]),s._v(" "),a("p",[s._v("此外，在某些情况下，JSON 对数字的定义可能会有问题。JSON 规范中将数字定义成使用十进制表示的任意精度有限浮点数。对于大多数应用程序来说，这没有问题。但是，如果你需要使用十六进制表示法或表示无穷大或 NaN 等值时，那么 TOML 或 YAML 将能够更好地处理它们。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A really long description that needs multiple lines.\\nThis is a sample project to illustrate why JSON is not a good configuration format. This description is pretty long, but it doesn\'t have any way to go onto multiple lines."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"//"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is as close to a comment as you are going to get"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"config"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./test.sh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"do_stuff"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./do_stuff.sh"')]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bugs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://example.com/bugs"')]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"contributors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John Doe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"johndoe@example.com"')]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ivy Lane"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://example.com/ivylane"')]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dep1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dep2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3.40"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dep3"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6.7"')]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br")])]),a("h2",{attrs:{id:"json-的替代方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-的替代方案"}},[s._v("#")]),s._v(" JSON 的替代方案")]),s._v(" "),a("p",[s._v("选择哪一种配置语言取决于你的应用程序。每种语言都有各自的优缺点，下面列出了一些可以考虑的选项。它们都是为配置而设计的语言，每一种都比 JSON 这样的数据语言更好。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('name = "example"\n\ndescription = """\n\nA really long description that needs multiple lines.\n\nThis is a sample project to illustrate why JSON is not a \\\n\ngood configuration format. This description is pretty long, \\\n\nbut it doesn\'t have any way to go onto multiple lines."""\n\n\n\nversion = "0.0.1"\n\nmain = "index.js"\n\n# This is a comment\n\nkeywords = ["example", "config"]\n\n\n\n[bugs]\n\nurl = "https://example.com/bugs"\n\n\n\n[scripts]\n\n\n\ntest = "./test.sh"\n\ndo_stuff = "./do_stuff.sh"\n\n\n\n[[contributors]]\n\nname = "John Doe"\n\nemail = "johndow@example.com"\n\n\n\n[[contributors]]\n\nname = "Ivy Lane"\n\nurl = "https://example.com/ivylane"\n\n\n\n[dependencies]\n\n\n\ndep1 = "^1.0.0"\n\n# Why we depend on dep2\n\ndep2 = "3.40"\n\ndep3 = "6.7"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br")])]),a("h3",{attrs:{id:"hjson"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hjson"}},[s._v("#")]),s._v(" HJSON")]),s._v(" "),a("p",[s._v("HJSON 是一种基于 JSON 的格式，但具有更大的灵活性，可读性也更强。它支持注释、多行字符串、不带引号的键和字符串，以及可选的逗号。如果你想要 JSON 结构的简单性，同时对配置文件更友好，那么可以考虑 HJSON。有一些可以将 HJSON 转换为 JSON 的命令行工具，如果你使用的工具是基于 JSON 的，可以先用 HJSON 编写配置，然后再转换成 JSON。JSON5 是另一个与 HJSON 非常相似的配置语言。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n\n  name: example\n\n  description: \'\'\'\n\n  A really long description that needs multiple lines.\n\n  This is a sample project to illustrate why JSON is \n\n  not a good configuration format.  This description \n\n  is pretty long, but it doesn\'t have any way to go \n\n  onto multiple lines.\n\n  \'\'\'\n\n  version: 0.0.1\n\n  main: index.js\n\n  # This is a a comment\n\n  keywords: ["example", "config"]\n\n  scripts: {\n\n    test: ./test.sh\n\n    do_stuff: ./do_stuff.sh\n\n  }\n\n  bugs: {\n\n    url: https://example.com/bugs\n\n  }\n\n  contributors: [{\n\n    name: John Doe\n\n    email: johndoe@example.com\n\n  } {\n\n    name: Ivy Lane\n\n    url: https://example.com/ivylane\n\n  }]\n\n  dependencies: {\n\n    dep1: ^1.0.0\n\n    # Why we have this dependency\n\n    dep2: "3.40"\n\n    dep3: "6.7"\n\n  }\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br")])]),a("h3",{attrs:{id:"hocon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hocon"}},[s._v("#")]),s._v(" HOCON")]),s._v(" "),a("p",[s._v("HOCON 是为 Play 框架设计的配置格式，在 Scala 项目中非常流行。它是 JSON 的超集，因此可以使用现有的 JSON 文件。除了注释、可选逗号和多行字符串这些标准特性外，HOCON 还支持从其他文件导入和引用其他值的键，避免重复代码，并使用以点作为分隔符的键来指定值的路径，因此用户可以不必将所有值直接放在花括号对象中。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('name = example\n\ndescription = """\n\nA really long description that needs multiple lines.\n\n\n\nThis is a sample project to illustrate why JSON is \n\nnot a good configuration format.  This description \n\nis pretty long, but it doesn\'t have any way to go \n\nonto multiple lines.\n\n"""\n\nversion = 0.0.1\n\nmain = index.js\n\n# This is a a comment\n\nkeywords = ["example", "config"]\n\nscripts {\n\n  test = ./test.sh\n\n  do_stuff = ./do_stuff.sh\n\n}\n\nbugs.url = "https://example.com/bugs"\n\ncontributors = [\n\n  {\n\n    name = John Doe\n\n    email = johndoe@example.com\n\n  }\n\n  {\n\n    name = Ivy Lane\n\n    url = "https://example.com/ivylane"\n\n  }\n\n]\n\ndependencies {\n\n  dep1 = ^1.0.0\n\n  # Why we have this dependency\n\n  dep2 = "3.40"\n\n  dep3 = "6.7"\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br")])]),a("h3",{attrs:{id:"yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yaml"}},[s._v("#")]),s._v(" YAML")]),s._v(" "),a("p",[s._v("YAML（YAML 不是标记语言）是一种非常灵活的格式，几乎是 JSON 的超集，已经被用在一些著名的项目中，如 Travis CI、Circle CI 和 AWS CloudFormation。YAML 的库几乎和 JSON 一样无处不在。除了支持注释、换行符分隔、多行字符串、裸字符串和更灵活的类型系统之外，YAML 也支持引用文件，以避免重复代码。")]),s._v(" "),a("p",[s._v("YAML 的主要缺点是规范非常复杂，不同的实现之间可能存在不一致的情况。它将缩进视为严格语法的一部分（类似于 Python），有些人喜欢，有些人不喜欢。这会让复制和粘贴变得很麻烦。")]),s._v(" "),a("h3",{attrs:{id:"脚本语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本语言"}},[s._v("#")]),s._v(" 脚本语言")]),s._v(" "),a("p",[s._v("如果你的应用程序是使用 Python 或 Ruby 等脚本语言开发的，并且你知道配置的来源是可靠的，那么最好的选择可能就是使用这些语言进行配置。如果你需要一个真正灵活的配置选项，也可以在编译语言中嵌入诸如 Lua 之类的脚本语言。这样可以获得脚本语言的灵活性，而且比使用不同的配置语言更容易实现。使用脚本语言的缺点是它可能过于强大，当然，如果配置来源是不受信任的，可能会引入严重的安全问题。")]),s._v(" "),a("h3",{attrs:{id:"自定义配置格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置格式"}},[s._v("#")]),s._v(" 自定义配置格式")]),s._v(" "),a("p",[s._v("如果由于某种原因，键值配置格式不能满足你的要求，并且由于性能或大小限制而无法使用脚本语言，那么可以考虑自定义配置格式。如果是这种情况，那么在做出选择之前要想清楚，因为你不仅要编写和维护一个解析器，还要让你的用户熟悉另一种配置格式。")]),s._v(" "),a("h2",{attrs:{id:"结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[s._v("#")]),s._v(" 结论")]),s._v(" "),a("p",[s._v("有了这么多更好的配置语言，没有理由还要使用 JSON。如果要创建需要用到配置的新应用程序、框架或库，请选择 JSON 以外的其他选项。")]),s._v(" "),a("p",[s._v("英文原文：https://www.lucidchart.com/techblog/2018/07/16/why-json-isnt-a-good-configuration-language/")])])}),[],!1,null,null,null);n.default=e.exports}}]);