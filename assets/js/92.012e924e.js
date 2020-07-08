(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1076:function(t,s,a){"use strict";a.r(s);var r=a(43),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_05-无状态应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_05-无状态应用"}},[t._v("#")]),t._v(" 05-无状态应用")]),t._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("无状态应用：")]),t._v(" Stateless Application 是指并不会在会话中保存下次会话中去要的客户端数据。 每一个会话都像首次执行一样，不会依赖之前的数据进行响应。")]),t._v(" "),r("li",[r("strong",[t._v("有状态的应用：")]),t._v(" Stateful Application 是指会在会话中保存客户端的数据，并在客户端下一次的请求中来使用那些数据。")])]),t._v(" "),r("h2",{attrs:{id:"什么是无状态应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是无状态应用"}},[t._v("#")]),t._v(" 什么是无状态应用")]),t._v(" "),r("p",[t._v("在无状态应用中，会话数据将会被存储在客户端或者透传给需要的这些数据的服务。在开发离线应用时，这是一个非常重要的的因素。通过这种方式来开发，会话数据将会被存储在终端用户的设备上，例如：当网络不可用时，用户将数据存储在自己的设备上，当网络重新连接时，会话数据将被上传并复制到云中。")]),t._v(" "),r("p",[t._v("在分布式系统中，无状态应用使实现了分布式水平扩展成为可能。当分布式系统中的一个组建是无状态时，能够在出现故障时轻松的重新部署，也能够自由的水平扩展来适应负载。组建之间也能够方便的使用 API 来进行通信。")]),t._v(" "),r("p",[t._v("函数式编程（Functional Programming) 是一种使用非常小的代码段进行软件开发的方法。每一个函数执行的时候都仿佛是首次执行，不依赖于之前的内容。因为所有函数都是无状态的，所以开发人员可以用多种方式来组装函数，而不必担心破坏了依赖关系。")]),t._v(" "),r("h2",{attrs:{id:"为什么需无状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么需无状态"}},[t._v("#")]),t._v(" 为什么需无状态")]),t._v(" "),r("p",[r("img",{attrs:{src:a(547),alt:"img"}})]),t._v(" "),r("p",[t._v("我们在开发微服务时，一种实现方式是将所有的需要的数据进行透传。比如，当业务上需要从 User 类中获取 country 国家这个属性时，如果不是基于 stateless app，那么初期就会将获取用户身上的 country 散落在各个服务中。一旦 user 类上属性发生变化，例如 country 更加语义的被修改为 countryCode，那么带来的修改量时巨大的，而且很有可能部署之后才发现对其他服务的影响。使用 stateless app，则事情变的简单了，还是上面的例子，每个服务都是通过 API 的参数来获取 country 的 value，即时 user 类中的属性发生的变化，也不会突然波及很多服务。")])])}),[],!1,null,null,null);s.default=e.exports},547:function(t,s,a){t.exports=a.p+"assets/img/0132bbd64c8b596.bd3265ed.png"}}]);