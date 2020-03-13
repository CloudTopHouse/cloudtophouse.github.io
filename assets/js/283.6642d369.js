(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{1026:function(s,e,a){"use strict";a.r(e);var r=a(28),t=Object(r.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"一文看懂-redis5-搭建集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一文看懂-redis5-搭建集群"}},[s._v("#")]),s._v(" 一文看懂 Redis5 搭建集群")]),s._v(" "),a("p",[s._v("[TOC]")]),s._v(" "),a("h2",{attrs:{id:"简要说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简要说明"}},[s._v("#")]),s._v(" 简要说明")]),s._v(" "),a("p",[s._v("2018年十月 Redis 发布了稳定版本的 5.0 版本，推出了各种新特性，其中一点是放弃 Ruby的集群方式，改为使用 C语言编写的 redis-cli的方式，使集群的构建方式复杂度大大降低。关于集群的更新可以在 Redis5 的版本说明中看到，如下：")]),s._v(" "),a("blockquote",[a("p",[s._v("The cluster manager was ported from Ruby (redis-trib.rb) to C code inside redis-cli. check "),a("code",[s._v("redis-cli --cluster help")]),s._v(" for more info.")])]),s._v(" "),a("p",[s._v("可以查看Redis官网查看集群搭建方式，链接如下：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://redis.io/topics/cluster-tutorial",target:"_blank",rel:"noopener noreferrer"}},[s._v("cluster-tutorial"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("以下步骤是在一台 Linux 服务器上搭建有6个节点的 Redis集群。")]),s._v(" "),a("h2",{attrs:{id:"创建集群步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建集群步骤"}},[s._v("#")]),s._v(" 创建集群步骤")]),s._v(" "),a("h3",{attrs:{id:"_1-创建目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建目录"}},[s._v("#")]),s._v(" 1. 创建目录")]),s._v(" "),a("p",[s._v("新建目录："),a("code",[s._v("/root/software/redis")])]),s._v(" "),a("h3",{attrs:{id:"_2-下载源码并解压编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载源码并解压编译"}},[s._v("#")]),s._v(" 2. 下载源码并解压编译")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.redis.io/releases/redis-5.0.0.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xzf redis-5.0.0.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-5.0.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_3-创建6个redis配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建6个redis配置文件"}},[s._v("#")]),s._v(" 3. 创建6个Redis配置文件")]),s._v(" "),a("p",[s._v("6个配置文件不能在同一个目录，此处我们定义如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/root/software/redis/redis-cluster-conf/7001/redis.conf\n/root/software/redis/redis-cluster-conf/7002/redis.conf\n/root/software/redis/redis-cluster-conf/7003/redis.conf\n/root/software/redis/redis-cluster-conf/7004/redis.conf\n/root/software/redis/redis-cluster-conf/7005/redis.conf\n/root/software/redis/redis-cluster-conf/7006/redis.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("配置文件的内容为：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#端口")]),s._v("\ncluster-enabled "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用集群模式")]),s._v("\ncluster-config-file nodes.conf\ncluster-node-timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#超时时间")]),s._v("\nappendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\ndaemonize "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#后台运行")]),s._v("\nprotected-mode no "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#非保护模式")]),s._v("\npidfile  /var/run/redis_7001.pid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("其中 "),a("code",[s._v("port")]),s._v(" 和 "),a("code",[s._v("pidfile")]),s._v(" 需要随着文件夹的不同调增。")]),s._v(" "),a("h3",{attrs:{id:"_4-启动节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动节点"}},[s._v("#")]),s._v(" 4. 启动节点")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/root/software/redis/redis-5.0.0/src/redis-server  /root/software/redis/redis-cluster-conf/7001/redis.conf\n/root/software/redis/redis-5.0.0/src/redis-server  /root/software/redis/redis-cluster-conf/7002/redis.conf\n/root/software/redis/redis-5.0.0/src/redis-server  /root/software/redis/redis-cluster-conf/7003/redis.conf\n/root/software/redis/redis-5.0.0/src/redis-server  /root/software/redis/redis-cluster-conf/7004/redis.conf\n/root/software/redis/redis-5.0.0/src/redis-server  /root/software/redis/redis-cluster-conf/7005/redis.conf\n/root/software/redis/redis-5.0.0/src/redis-server  /root/software/redis/redis-cluster-conf/7006/redis.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_5-启动集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动集群"}},[s._v("#")]),s._v(" 5. 启动集群")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/root/software/redis/redis-5.0.0/src/redis-cli --cluster create "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.40:7001 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.40:7002 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.40:7003 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.40:7004 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.40:7005 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.40:7006 --cluster-replicas "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动后，可看到成功信息，如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(">>> Performing hash slots allocation on 6 nodes...\nMaster[0] -> Slots 0 - 5460\nMaster[1] -> Slots 5461 - 10922\nMaster[2] -> Slots 10923 - 16383\nAdding replica 192.168.2.40:7004 to 192.168.2.40:7001\nAdding replica 192.168.2.40:7005 to 192.168.2.40:7002\nAdding replica 192.168.2.40:7006 to 192.168.2.40:7003\n>>> Trying to optimize slaves allocation for anti-affinity\n[WARNING] Some slaves are in the same host as their master\nM: 191c645200a8b4d267f71e3354c8248dbb533dde 192.168.2.40:7001\n   slots:[0-5460] (5461 slots) master\nM: 400a08d4e5a534c1b609988105d3e045395fbd12 192.168.2.40:7002\n   slots:[5461-10922] (5462 slots) master\nM: 684f6aa0fbccda295ce6818a8c01ee7255a7b002 192.168.2.40:7003\n   slots:[10923-16383] (5461 slots) master\nS: f2701549ae98315b432d73b49d139ee77d5685b4 192.168.2.40:7004\n   replicates 684f6aa0fbccda295ce6818a8c01ee7255a7b002\nS: 9fdc1e375436767ab815cbddd3df674f3bc2ca99 192.168.2.40:7005\n   replicates 191c645200a8b4d267f71e3354c8248dbb533dde\nS: e7742888ed85b37cff4a98e861e99bb16e8bae2c 192.168.2.40:7006\n   replicates 400a08d4e5a534c1b609988105d3e045395fbd12\nCan I set the above configuration? (type 'yes' to accept): yes\n>>> Nodes configuration updated\n>>> Assign a different config epoch to each node\n>>> Sending CLUSTER MEET messages to join the cluster\nWaiting for the cluster to join\n....\n>>> Performing Cluster Check (using node 192.168.2.40:7001)\nM: 191c645200a8b4d267f71e3354c8248dbb533dde 192.168.2.40:7001\n   slots:[0-5460] (5461 slots) master\n   1 additional replica(s)\nM: 684f6aa0fbccda295ce6818a8c01ee7255a7b002 192.168.2.40:7003\n   slots:[10923-16383] (5461 slots) master\n   1 additional replica(s)\nS: 9fdc1e375436767ab815cbddd3df674f3bc2ca99 192.168.2.40:7005\n   slots: (0 slots) slave\n   replicates 191c645200a8b4d267f71e3354c8248dbb533dde\nS: e7742888ed85b37cff4a98e861e99bb16e8bae2c 192.168.2.40:7006\n   slots: (0 slots) slave\n   replicates 400a08d4e5a534c1b609988105d3e045395fbd12\nM: 400a08d4e5a534c1b609988105d3e045395fbd12 192.168.2.40:7002\n   slots:[5461-10922] (5462 slots) master\n   1 additional replica(s)\nS: f2701549ae98315b432d73b49d139ee77d5685b4 192.168.2.40:7004\n   slots: (0 slots) slave\n   replicates 684f6aa0fbccda295ce6818a8c01ee7255a7b002\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br")])]),a("p",[s._v("至此，Reids5 集群搭建完成。")]),s._v(" "),a("h2",{attrs:{id:"集群其他操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群其他操作"}},[s._v("#")]),s._v(" 集群其他操作")]),s._v(" "),a("h3",{attrs:{id:"_1-关闭集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-关闭集群"}},[s._v("#")]),s._v(" 1. 关闭集群")]),s._v(" "),a("p",[s._v("redis5 提供了关闭集群的工具，在如下目录：")]),s._v(" "),a("p",[a("code",[s._v("/root/software/redis/redis-5.0.0/utils/create-cluster")])]),s._v(" "),a("p",[s._v("打开此文件修改端口为我们自己的，如下所示：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Settings")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TIMEOUT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODES")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REPLICAS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# You may want to put the above config parameters into config.sh in order to")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# override the defaults without modifying this script.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -a config.sh "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"config.sh"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("端口"),a("code",[s._v("PROT")]),s._v("设置为7000，"),a("code",[s._v("NODES")]),s._v("为6，工具会自动累加1 生成 7001-7006 六个节点 用于操作。\n修改后，执行如下命令关闭集群：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/root/software/redis/redis-5.0.0/utils/create-cluster/create-cluster stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-启动集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动集群"}},[s._v("#")]),s._v(" 2. 启动集群")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/root/software/redis/redis-5.0.0/utils/create-cluster/create-cluster start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-使用脚本文件启动集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用脚本文件启动集群"}},[s._v("#")]),s._v(" 3. 使用脚本文件启动集群")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n/root/software/redis/redis-5.0.0/src/redis-server  /root/software/redis/redis-cluster-conf/7001/redis.conf\n/root/software/redis/redis-5.0.0/src/redis-server  /root/software/redis/redis-cluster-conf/7002/redis.conf\n/root/software/redis/redis-5.0.0/src/redis-server  /root/software/redis/redis-cluster-conf/7003/redis.conf\n/root/software/redis/redis-5.0.0/src/redis-server  /root/software/redis/redis-cluster-conf/7004/redis.conf\n/root/software/redis/redis-5.0.0/src/redis-server  /root/software/redis/redis-cluster-conf/7005/redis.conf\n/root/software/redis/redis-5.0.0/src/redis-server  /root/software/redis/redis-cluster-conf/7006/redis.conf\n\n/root/software/redis/redis-5.0.0/src/redis-cli --cluster create "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.40:7001 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.40:7002 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.40:7003 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.40:7004 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.40:7005 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.40:7006 --cluster-replicas "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);