# docker + gitlab + jenkins 自动部署及回滚

按之前配置已经完成了项目推送至 tag 后，**jenkins host** 会自动构建 docker 镜像，并将镜像推送至 **阿里云 registry**，然后 **jenkins host** 会通过 **Publish over SSH** 插件，将生成一个自动部署的脚本push到指定的主机中，然后自动停止之前的镜像并 pull 当前的镜像并运行

#### 遗留问题

1. 版本回退功能未实现

   需要实现版本回退功能支持对紧急问题的规避

2. 回退版本记录

   构建的 image 是以 gitlab tag 名称来创建的，所以版本回退时，必须要知道上一次的 image 才能进行回退操作，所以需要记录每次自动部署时的 image 以方便自动部署回滚

#### 记录自动部署历史

修改构建ssh脚本，生成自动部署的脚本中，加入每次自动部署时将上次的image写入本地历史文件中便于版本回退

```bash
CONTAINER_NAME="citest"
GIT_TAG=`git describe --always --tag`
CONTAINER_FULL_NAME=${CONTAINER_NAME}-${GIT_TAG}
REPOSITORY=registry.cn-shanghai.aliyuncs.com/xxx/${CONTAINER_NAME}:${GIT_TAG}

# 构建Docker镜像
docker build -t $REPOSITORY -f Dockerfile .

# 推送Docker镜像
docker login --username=xxx --password=password registry.cn-shanghai.aliyuncs.com
docker push $REPOSITORY

# 删除生成的image
docker images | grep citest | awk '{print $1":"$2}' | xargs docker rmi || true

# 删除名称或标签为none的镜像
docker rmi -f  `docker images | grep '<none>' | awk '{print $3}'` || true

mkdir -p ./release && rm -f ./release/repull && echo \
"docker ps | grep citest | awk '{print \$2}' >> /data/jenkins/mi_test_history\n"\
"echo /data/jenkins/mi_test_history\n"\
"docker ps | grep citest | awk '{print \$1}' | xargs docker kill || true\n"\
"docker images | grep citest | awk '{print \$1\":\"\$2}' | xargs docker rmi -f || true\n"\
"docker login --username=xxx --password=password registry.cn-shanghai.aliyuncs.com\n"\
"docker pull $REPOSITORY\n"\
"docker run -d $REPOSITORY" >> ./release/repull
```

这里每次完成构建后，会生成一个自动部署脚本 **repull** 并将此脚本发送到其他指定的主机中执行自动部署，而修改后的 **repull** 脚本会再每次自动部署前都记录一下上次的 image 到 **/data/jenkins/mi_test_history** 文件中，这个文件每一行代表一次版本更新，每次更新都会添加记录至文件的最后一行

#### 创建参数化构建任务

原来的job是通过监听 gitlab 的 tag 推送事件来触发的，为了支持回滚，所以添加一个参数化构建的任务，该任务支持手动构建及手动回退版本

新创建任务的 git 配置与之前任务一致，然后勾选 **参数化构建过程** 并配置参数，这里目前添加一个bool值参数，true表示执行手动构建，false表示版本回退



![img](https://user-gold-cdn.xitu.io/2019/8/20/16cae61d73250734?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



创建构建执行的shell脚本，并支持对构建配置的参数的解析，按参数执行不同的操作

```bash
if [ "$CTRL_BUILD" = "true" ]
then
	echo "to build image"
	CONTAINER_NAME="citest"
	GIT_TAG=`git describe --always --tag`"_manual_$BUILD_NUMBER"
    CONTAINER_FULL_NAME=${CONTAINER_NAME}-${GIT_TAG}
	REPOSITORY=registry.cn-shanghai.aliyuncs.com/xxx/${CONTAINER_NAME}:${GIT_TAG}

	# 构建Docker镜像
	docker build -t $REPOSITORY -f Dockerfile .

	# 推送Docker镜像
	docker login --username=xxx --password=password registry.cn-shanghai.aliyuncs.com
	docker push $REPOSITORY

	# 删除生成的image
	docker images | grep citest | awk '{print $1":"$2}' | xargs docker rmi || true

	# 删除名称或标签为none的镜像
	docker rmi -f  `docker images | grep '<none>' | awk '{print $3}'` || true

	rm -f ./auto.sh && echo \
	"docker ps | grep citest | awk '{print \$2}' >> /data/jenkins/mi_test_history\n"\
	"echo /data/jenkins/mi_test_history\n"\
	"docker ps | grep citest | awk '{print \$1}' | xargs docker kill || true\n"\
	"docker images | grep citest | awk '{print \$1\":\"\$2}' | xargs docker rmi -f || true\n"\
	"docker login --username=xxx --password=password registry.cn-shanghai.aliyuncs.com\n"\
	"docker pull $REPOSITORY\n"\
	"docker run -d $REPOSITORY" >> ./auto.sh
else
	echo "to rollback image"
    rm -f ./auto.sh && echo \
	"popline(){ LC_CTYPE=C l=\`tail -\"\${2:-1}\" \"\$1\"; echo t\`; l=\${l%t}; truncate -s \"-\${#l}\" \"\$1\"; printf %s \"\$l\"; }\n"\
	"last=\`popline /data/jenkins/mi_test_history || \"\"\`\n"\
	"if [ -n \"\$last\" ]; then\n"\
	"\tdocker ps | grep citest | awk '{print \$1}' | xargs docker kill || true\n"\
	"\tdocker images | grep citest | awk '{print \$1\":\"\$2}' | xargs docker rmi -f || true\n"\
	"\tdocker login --username=xxx --password=password registry.cn-shanghai.aliyuncs.com\n"\
	"\tdocker pull \$last\n"\
	"\tdocker run -d \$last\n"\
	"\techo \"rollback to \$last success\"\n"\
	"else\n"\
	"\techo \"nothing to rollback\"\n"\
	"fi\n" >> ./auto.sh
fi
```

手动构建版本与自动触发构建基本一致，只是 image 名称会添加手动构建的标识及构建编号，回滚时会生成一个回滚的脚本，回滚脚本将会从 **/data/jenkins/mi_test_history** 文件中 pop出最后一行，然后停止当前的任务并删除 image，然后 pull 旧版本的 image 并运行

**Publish over SSH** 的配置与之前差不多，主要就是将生产的 auto.sh 脚本传输到从机并执行



![img](https://user-gold-cdn.xitu.io/2019/8/20/16cae6205573e398?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



#### 功能测试

手动点击任务构建，并勾选自定义构建参数



![img](https://user-gold-cdn.xitu.io/2019/8/20/16cae62bdb3c54a5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



会生成一个新的 image 覆盖之前的 image 并运行，也产生了 history 记录

再次手动点击任务构建，这次不勾选自定义构建参数来进行版本回退操作



![img](https://user-gold-cdn.xitu.io/2019/8/20/16cae6241ae79e1e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



目前版本已经回退至上个版本并清除版本记录，功能正常