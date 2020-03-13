(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{789:function(s,a,t){"use strict";t.r(a);var e=t(28),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"yaml-配置文件语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yaml-配置文件语言"}},[s._v("#")]),s._v(" YAML 配置文件语言")]),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("YAML 是专门用来写配置文件的语言，非常简洁和强大，远比 JSON 格式方便。")]),s._v(" "),t("p",[s._v("YAML 语言的设计目标，就是方便人类读写。它实质上是一种通用的数据串行化格式。它的基本语法规则如下：")]),s._v(" "),t("ul",[t("li",[s._v("大小写敏感")]),s._v(" "),t("li",[s._v("使用缩进表示层级关系")]),s._v(" "),t("li",[s._v("缩进时不允许使用Tab键，只允许使用空格。")]),s._v(" "),t("li",[s._v("缩进的空格数目不重要，只要相同层级的元素左侧对齐即可")])]),s._v(" "),t("p",[t("code",[s._v("#")]),s._v(" 表示注释，从这个字符一直到行尾，都会被解析器忽略。")]),s._v(" "),t("p",[s._v("YAML 支持的数据结构有三种：")]),s._v(" "),t("ul",[t("li",[s._v("对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）")]),s._v(" "),t("li",[s._v("数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）")]),s._v(" "),t("li",[s._v("纯量（scalars）：单个的、不可再分的值")])]),s._v(" "),t("h2",{attrs:{id:"对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[s._v("#")]),s._v(" 对象")]),s._v(" "),t("p",[s._v("对象的一组键值对，使用冒号结构表示")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("animal: pets\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[s._v("#")]),s._v(" 数组")]),s._v(" "),t("p",[s._v("一组连词线开头的行，构成一个数组")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("- Cat\n- Dog\n- Goldfish\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("数据结构的子成员是一个数组，则可以在该项下面缩进一个空格")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("- Array\n - Cat\n - Dog\n - Goldfish\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"复合结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复合结构"}},[s._v("#")]),s._v(" 复合结构")]),s._v(" "),t("p",[s._v("对象和数组可以结合使用，形成复合结构")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("languages:\n - Ruby\n - Perl\n - Python \nwebsites:\n YAML: yaml.org \n Ruby: ruby-lang.org \n Python: python.org \n Perl: use.perl.org \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"纯量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#纯量"}},[s._v("#")]),s._v(" 纯量")]),s._v(" "),t("p",[s._v("纯量是最基本的、不可再分的值。以下数据类型都属于 JavaScript 的纯量")]),s._v(" "),t("ul",[t("li",[s._v("字符串")]),s._v(" "),t("li",[s._v("布尔值")]),s._v(" "),t("li",[s._v("整数")]),s._v(" "),t("li",[s._v("浮点数")]),s._v(" "),t("li",[s._v("Null")]),s._v(" "),t("li",[s._v("时间")]),s._v(" "),t("li",[s._v("日期")])])])}),[],!1,null,null,null);a.default=n.exports}}]);