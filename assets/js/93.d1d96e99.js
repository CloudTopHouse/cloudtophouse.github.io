(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1043:function(s,e,a){"use strict";a.r(e);var n=a(43),l=Object(n.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"docker构建mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker构建mysql"}},[s._v("#")]),s._v(" Docker构建MySQL")]),s._v(" "),n("h2",{attrs:{id:"查找-docker-hub-上的-mysql-镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查找-docker-hub-上的-mysql-镜像"}},[s._v("#")]),s._v(" 查找 Docker Hub 上的 MySQL 镜像")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("root@UbuntuBase:/usr/local/docker/mysql# docker search mysql\nNAME                                                   DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED\nmysql                                                  MySQL is a widely used, open-source relati...   5177                [OK]                \nmariadb                                                MariaDB is a community-developed fork of M...   1602                [OK]                \nmysql/mysql-server                                     Optimized MySQL Server Docker images. Crea...   361                                     [OK]\npercona                                                Percona Server is a fork of the MySQL rela...   298                 [OK]                \nhypriot/rpi-mysql                                      RPi-compatible Docker Image with Mysql          72                                      \nzabbix/zabbix-server-mysql                             Zabbix Server with MySQL database support       62                                      [OK]\ncenturylink/mysql                                      Image containing mysql. Optimized to be li...   53                                      [OK]\nsameersbn/mysql                                                                                        48                                      [OK]\nzabbix/zabbix-web-nginx-mysql                          Zabbix frontend based on Nginx web-server ...   36                                      [OK]\ntutum/mysql                                            Base docker image to run a MySQL database ...   27                                      \n1and1internet/ubuntu-16-nginx-php-phpmyadmin-mysql-5   ubuntu-16-nginx-php-phpmyadmin-mysql-5          17                                      [OK]\nschickling/mysql-backup-s3                             Backup MySQL to S3 (supports periodic back...   16                                      [OK]\ncentos/mysql-57-centos7                                MySQL 5.7 SQL database server                   15                                      \nlinuxserver/mysql                                      A Mysql container, brought to you by Linux...   12                                      \ncentos/mysql-56-centos7                                MySQL 5.6 SQL database server                   6                                       \nopenshift/mysql-55-centos7                             DEPRECATED: A Centos7 based MySQL v5.5 ima...   6                                       \nfrodenas/mysql                                         A Docker Image for MySQL                        3                                       [OK]\ndsteinkopf/backup-all-mysql                            backup all DBs in a mysql server                3                                       [OK]\ncircleci/mysql                                         MySQL is a widely used, open-source relati...   2                                       \ncloudposse/mysql                                       Improved `mysql` service with support for ...   0                                       [OK]\nastronomerio/mysql-sink                                MySQL sink                                      0                                       [OK]\nansibleplaybookbundle/rhscl-mysql-apb                  An APB which deploys RHSCL MySQL                0                                       [OK]\ncloudfoundry/cf-mysql-ci                               Image used in CI of cf-mysql-release            0                                       \nastronomerio/mysql-source                              MySQL source                                    0                                       [OK]\njenkler/mysql                                          Docker Mysql package                            0                                       \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("这里我们拉取官方的镜像")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker pull mysql\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("等待下载完成后，我们就可以在本地镜像列表里查到 REPOSITORY 为 mysql 的镜像")]),s._v(" "),n("h2",{attrs:{id:"运行容器："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行容器："}},[s._v("#")]),s._v(" 运行容器：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker run -p 3306:3306 --name mysql \\\n-v /usr/local/docker/mysql/conf:/etc/mysql \\\n-v /usr/local/docker/mysql/logs:/var/log/mysql \\\n-v /usr/local/docker/mysql/data:/var/lib/mysql \\\n-e MYSQL_ROOT_PASSWORD=123456 \\\n-d mysql\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("命令参数：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("-p 3306:3306")]),s._v("：将容器的3306端口映射到主机的3306端口")]),s._v(" "),n("li",[n("code",[s._v("-v /usr/local/docker/mysql/conf:/etc/mysql")]),s._v("：将主机当前目录下的 conf 挂载到容器的 /etc/mysql")]),s._v(" "),n("li",[n("code",[s._v("-v /usr/local/docker/mysql/logs:/var/log/mysql")]),s._v("：将主机当前目录下的 logs 目录挂载到容器的 /var/log/mysql")]),s._v(" "),n("li",[n("code",[s._v("-v /usr/local/docker/mysql/data:/var/lib/mysql")]),s._v("：将主机当前目录下的 data 目录挂载到容器的 /var/lib/mysql")]),s._v(" "),n("li",[n("code",[s._v("-e MYSQL\\_ROOT\\_PASSWORD=123456")]),s._v("：初始化root用户的密码")])]),s._v(" "),n("p",[s._v("查看容器启动情况")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('root@UbuntuBase:/usr/local/docker/mysql# docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\nbc49c9de4cdf        mysql:latest        "docker-entrypoint..."   4 minutes ago       Up 4 minutes        0.0.0.0:3306->3306/tcp   mysql\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("使用客户端工具连接 MySQL")]),s._v(" "),n("p",[n("img",{attrs:{src:a(396),alt:"img"}})])])}),[],!1,null,null,null);e.default=l.exports},396:function(s,e,a){s.exports=a.p+"assets/img/20171103184144.716947b8.png"}}]);