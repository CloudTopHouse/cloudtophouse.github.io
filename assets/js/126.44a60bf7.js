(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{797:function(s,n,a){"use strict";a.r(n);var t=a(28),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"maven-docker-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven-docker-部署"}},[s._v("#")]),s._v(" Maven+Docker 部署")]),s._v(" "),a("h2",{attrs:{id:"安装jdk8镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装jdk8镜像"}},[s._v("#")]),s._v(" 安装jdk8镜像")]),s._v(" "),a("blockquote",[a("p",[s._v("docker pull openjdk:8-jdk-alpine")])]),s._v(" "),a("h2",{attrs:{id:"maven插件推送方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven插件推送方式"}},[s._v("#")]),s._v(" maven插件推送方式")]),s._v(" "),a("ol",[a("li",[s._v("修改/etc/docker/daemon.json文件，加入hosts配置即可。 注意 使用本地docker构建，不要用的生产服务器上，这种方式容易被别人注入木马\n本地局域网 192.168.10.222")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hosts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp://0.0.0.0:2375"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unix:///var/run/docker.sock"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",[a("li",[s._v("在settings.xml文件的同级目录创建settings-security.xml文件\n在cmd命令行中使用，在bash中特殊字符会出现转义问题")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mvn --encrypt-master-password <password>\n{4Cmy61mOMasHCreAdBngs40S7FJ8dFcD8MG9jCJKSNA=}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?xml version="1.0" encoding="UTF-8"?>\n<settingsSecurity>\n  <master>{4Cmy61mOMasHCreAdBngs40S7FJ8dFcD8MG9jCJKSNA=}</master>\n</settingsSecurity>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("编辑settings.xml\n最后使用你的私有仓库访问密码生成服务密码，将生成的密码写入到settings.xml的")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mvn --encrypt-password <password>\n{RCeI2AmEXXgHmFttKbzhhXBLq/vQdczAluUl3Vd7tsg=}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<server>\n\t\t<id>docker-aliyun</id>\n\t\t<username>matosiki@163.com</username>\n\t\t<password>{RCeI2AmEXXgHmFttKbzhhXBLq/vQdczAluUl3Vd7tsg=}</password>\n\t\t<configuration>\n\t\t\t<email>matosiki@163.com</email>\n\t\t</configuration>\n\t</server>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n\n\n2. 重新加载配置文件，并重启docker\n\n> systemctl daemon-reload\n\n> systemctl restart docker\n\n\n3. 验证，直接访问：\n\n> curl 127.0.0.1:2375/info\n\n\n## java项目\n\n1. maven pom.xm 配置文件\n\n```xml\n<build>\n\n        <plugins>\n\n            \x3c!-- springboot打包 --\x3e\n\n            <plugin>\n\n                <groupId>org.springframework.boot</groupId>\n\n                <artifactId>spring-boot-maven-plugin</artifactId>\n\n            </plugin>\n\n             \n\n            <plugin>\n\n                <groupId>com.spotify</groupId>\n\n                <artifactId>docker-maven-plugin</artifactId>\n\n                <version>0.4.9</version>\n\n                <configuration>\n\n                   \x3c!-- 镜像名称  --\x3e\n\n                   <imageName>matosiki/springboot-docker-demo</imageName>\n\n                   \x3c!-- docker远程服务器地址 --\x3e\n\n                   <dockerHost>http://服务器IP:2375</dockerHost>\n\n                   \x3c!-- Dockerfile文件存放目录 --\x3e\n\n                   <dockerDirectory>src/main/docker</dockerDirectory>\n\n                   <resources>\n\n                    <resource>\n\n                        <directory>${project.build.directory}</directory>\n\n                        <include>${project.build.finalName}.jar</include>\n\n                    </resource>\n\n                </resources>\n\n                </configuration>\n\n            </plugin>\n\n        </plugins>\n\n    </build>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("编写Dockerfile 文件")])]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Dockerfile")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基于的镜像")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" openjdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("jdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("alpine\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装字体，Captcha需要字体支持")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" set "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("xe && apk "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cache add ttf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dejavu fontconfig\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VOLUME")]),s._v(" /opt/tmp\n\n \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" projectname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("1.0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("SNAPSHOT.jar app.jar\n\n \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -Djava.security.egd=file:/dev/./urandom 可解决tomcat可能启动慢的问题")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 具体可查看：https://www.cnblogs.com/mightyvincent/p/7685310.html")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Djava.security.egd=file:/dev/./urandom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app.jar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对外端口")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 8080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("编码运行")])]),s._v(" "),a("blockquote",[a("p",[s._v("mvn clean package docker:build -Dmaven.test.skip=true")])]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("查看镜像")])]),s._v(" "),a("blockquote",[a("p",[s._v("docker images")])]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[s._v("运行镜像，查看是否启动正常")])]),s._v(" "),a("blockquote",[a("p",[s._v("docker run -d -p 8080:8080 matosiki/springboot-docker-demo")])]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("基于已有镜像运行 jar")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v(":8080 -v /opt/docker/projectname-1.0.0-SNAPSHOT.jar:/usr/projectname-1.0.0-SNAPSHOT.jar --name SpringbootByJar openjdk:8-jdk-alpine java -jar /usr/projectname-1.0.0-SNAPSHOT.jar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);