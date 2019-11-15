# Jenkins pipeline + gitlab + docker 实现 CI / CD 功能

## Jenkins pipeline + gitlab + docker 实现 CI / CD 功能

#### 创建任务

也跟之前的手动构建任务一样，添加一个参数用于标记是构建操作还是回退操作



![img](https://user-gold-cdn.xitu.io/2019/9/5/16cffed551813076?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



下面就开始编写 pipeline 脚本用于构建操作



![img](https://user-gold-cdn.xitu.io/2019/9/5/16cffed770740496?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



#### 第一步 准备阶段

这个阶段需要完成代码从 gitlab 中 checkout 到本地，用于后续的操作

```groovy
stage('Source') {
       git branch: 'master', credentialsId: 'a4f6f384-4d9c-4dcf-bc1c-c3df536cdbdc', url: 'git@git.xxx.com:jeff/citest2.git'
       def container_name = 'citest'
       def git_tag = sh(script: 'git describe --always --tag', returnStdout: true).trim() + '_manual_' + env.BUILD_NUMBER
       def container_full_name = container_name + '-' + git_tag
       def repository = 'registry.cn-shanghai.aliyuncs.com/xxx/' + container_name + ':' + git_tag
       println 'container_full_name: ' + container_full_name 
       println 'repository: ' + repository
}
```

点击应用测试效果，构建任务输出

```bash
using credential a4f6f384-4d9c-4dcf-bc1c-c3df536cdbdc
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url git@git.xxx.com:jeff/citest2.git # timeout=10
Fetching upstream changes from git@git.xxx.com:jeff/citest2.git
 > git --version # timeout=10
using GIT_SSH to set credentials 
 > git fetch --tags --progress git@git.xxx.com:jeff/citest2.git +refs/heads/*:refs/remotes/origin/*
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision 87a5f818724b3954e87363ec271b095355f11d69 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 87a5f818724b3954e87363ec271b095355f11d69
 > git branch -a -v --no-abbrev # timeout=10
 > git branch -D master # timeout=10
 > git checkout -b master 87a5f818724b3954e87363ec271b095355f11d69
Commit message: "修复打包镜像的可执行文件无法运行的问题"
 > git rev-list --no-walk 87a5f818724b3954e87363ec271b095355f11d69 # timeout=10
[Pipeline] sh
+ git describe --always --tag
[Pipeline] echo
container_full_name: citest-v1.3.3_manual_4
[Pipeline] echo
repository: registry.cn-shanghai.aliyuncs.com/xxx/citest:v1.3.3_manual_4
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```

检查输出内容没有问题，仓库 checkout 到此完成

注意：这里有一点就是说，代码检出的仓库如果是需要认证信息的，需要显式的传递 credentialsId 表示使用 Jenkins 中配置的凭据，这个 id 也可以自定义配置，如果是不需要认证新的话，可以直接使用 **checkout scm** 来 checkout 代码

#### 第二步 构建 docker 镜像到阿里云 registry

```groovy
node {
   stage('Source') {
        git branch: 'master', credentialsId: 'a4f6f384-4d9c-4dcf-bc1c-c3df536cdbdc', url: 'git@git.xxx.com:jeff/citest2.git'
        def container_name = 'citest'
        def git_tag = sh(script: 'git describe --always --tag', returnStdout: true).trim() + '_manual_' + env.BUILD_NUMBER
        container_full_name = container_name + '-' + git_tag
        repository = 'registry.cn-shanghai.aliyuncs.com/xxx/' + container_name + ':' + git_tag
        println container_full_name
        println repository
   }
   
   stage('Build') {
        docker.withRegistry('https://registry.cn-shanghai.aliyuncs.com', 'ali_docker_registry') {
            def customImage = docker.build(repository)
            customImage.push()
            
            sh 'docker images | grep citest | awk \'{print $1":"$2}\' | xargs docker rmi -f || true'
            sh 'docker rmi -f  `docker images | grep \'<none>\' | awk \'{print $3}\'` || true'
        }
   }
}
```

这里添加一个新的步骤，将 pull 的代码仓库构建 docker 镜像，然后 push 到阿里云 registry 中，这里的认证信心也是保存到 jenkins 的全局凭据中，并且自定义id为 **ali_docker_registry**

**注意：**这个每个stage中变量使用 def 声明的变量，在其他的 stage 中无法访问，如果去掉了这个声明则可以正常访问

测试手动执行后阿里云镜像仓库成功创建了信息镜像

#### 第三步 通知目标的机器自动拉取镜像并执行

这里有三个想法

1. 通过 ssh 连接到目标机器，然后执行 pull 的命令及清理的操作，跟之前的操作区别不大，只是用pipeline进行了包装
2. 通过将目标机器配置为 jenkins 的一个节点机器，并且只执行指定的 job ，然后在后面的部署的 stage 由指定的节点执行，减少一个显式的 ssh 连接过程，但是 pipeline 要多一些编写
3. 配置开启远端的 docker 服务器的 TSL 远程访问，好处是可以直接使用 pipeline 的 docker 库完成连接及操作，官方的 demo 也是这个方式，但是没有找到删除镜像的方法，估计这个插件主要目的还是为了构建作用而不是用于自动部署的时候使用

所以最终还是使用第一种想法来继续完成自动部署的功能

#### 通过 SSH Pipeline Steps 连接其他主机

这里通过将远端主机的连接信息保存至全局的 jenkins 凭据中，便于使用，然后再 pipeline 中使用时通过 **SSH Pipeline Steps** 这个插件来完成 ssh 连接动作，主要参考 [SSH Steps for Jenkins Pipeline](https://link.juejin.im/?target=https%3A%2F%2Fjenkins.io%2Fblog%2F2019%2F02%2F06%2Fssh-steps-for-jenkins-pipeline%2F)

首先安装 **SSH Pipeline Steps** 插件

![img](https://user-gold-cdn.xitu.io/2019/9/5/16cffee81303392d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



然后添加一个远端主机连接的连接用户信息及密码



![img](https://user-gold-cdn.xitu.io/2019/9/5/16cffeeda87ec079?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



然后继续编写pipeline脚本完成ssh远程执行自动部署操作

```groovy
stage('deploy') {
       
    withCredentials([usernamePassword(credentialsId: 'pro4_ssh', passwordVariable: 'password', usernameVariable: 'userName')]) {

        def remote = [:]
        remote.name = 'pro4'
        remote.user = userName
        remote.host = '47.111.111.111'
        remote.password = password
        remote.allowAnyHosts = true

        writeFile file: 'poll.sh', text: """
        docker ps | grep citest | awk '{print \$2}' >> /data/jenkins/mi_test_history
        echo /data/jenkins/mi_test_history
        docker ps | grep citest | awk '{print \$1}' | xargs docker kill || true
        docker images | grep citest | awk '{print \$1":"\$2}' | xargs docker rmi -f || true
        docker login --username=yourName --password=yourPassword registry.cn-shanghai.aliyuncs.com
        docker pull ${repository}
        docker run -d ${repository}
        """

        sshPut remote: remote, from: 'poll.sh', into: '.'
        sshScript remote: remote, script: 'poll.sh'
        sshRemove remote: remote, path: 'poll.sh'
    }
}
```

**注意**，如果要在字符串中使用拼接变量必须使用 " 包裹字符串内容而不是 '

手动构建任务查看结果，镜像成功运行，并且记录之前的镜像记录

#### 支持参数判断完成回滚功能

部署没有问题就直接将之前回滚的脚本移植到目前的pipeline的写法中，完整的脚本如下

```groovy
node {
    
    if (env.CTRL_BUILD == 'true') {
    
        stage('Source') {
            git branch: 'master', credentialsId: 'a4f6f384-4d9c-4dcf-bc1c-c3df536cdbdc', url: 'git@git.xxx.com:jeff/citest2.git'
            def container_name = 'citest'
            def git_tag = sh(script: 'git describe --always --tag', returnStdout: true).trim() + '_manual_' + env.BUILD_NUMBER
            def container_full_name = container_name + '-' + git_tag
            repository = 'registry.cn-shanghai.aliyuncs.com/xxx/' + container_name + ':' + git_tag
            println container_full_name
            println repository
        }
       
        stage('Build') {
            docker.withRegistry('https://registry.cn-shanghai.aliyuncs.com', 'ali_docker_registry') {
                def customImage = docker.build(repository)
                customImage.push()
                
                sh 'docker images | grep citest | awk \'{print $1":"$2}\' | xargs docker rmi -f || true'
                sh 'docker rmi -f  `docker images | grep \'<none>\' | awk \'{print $3}\'` || true'
            }
        }
       
        stage('deploy') {
          
            withCredentials([usernamePassword(credentialsId: 'pro4_ssh', passwordVariable: 'password', usernameVariable: 'userName')]) {
           
                def remote = [:]
                remote.name = 'pro4'
                remote.user = userName
                remote.host = '47.101.137.187'
                remote.password = password
                remote.allowAnyHosts = true
                
                writeFile file: 'poll.sh', text: """
                    docker ps | grep citest | awk '{print \$2}' >> /data/jenkins/mi_test_history
                    echo /data/jenkins/mi_test_history
                    docker ps | grep citest | awk '{print \$1}' | xargs docker kill || true
                    docker images | grep citest | awk '{print \$1":"\$2}' | xargs docker rmi -f || true
                    docker login --username=yourName --password=yourPassword registry.cn-shanghai.aliyuncs.com
                    docker pull ${repository}
                    docker run -d ${repository}
                """
    
                sshPut remote: remote, from: 'poll.sh', into: '.'
                sshScript remote: remote, script: 'poll.sh'
                sshRemove remote: remote, path: 'poll.sh'
            }
        }
    } else {
        stage('rollback') {
            withCredentials([usernamePassword(credentialsId: 'pro4_ssh', passwordVariable: 'password', usernameVariable: 'userName')]) {
           
                def remote = [:]
                remote.name = 'pro4'
                remote.user = userName
                remote.host = '47.111.111.111'
                remote.password = password
                remote.allowAnyHosts = true
                
                writeFile file: 'roll.sh', text: '''
                    popline(){ LC_CTYPE=C l=`tail -"${2:-1}" "$1"; echo t`; l=${l%t}; truncate -s "-${#l}" "$1"; printf %s "$l"; }
            	    last=`popline /data/jenkins/mi_test_history || ""`
            	    if [ -n "$last" ]; then
            	        docker ps | grep citest | awk '{print $1}' | xargs docker kill || true
            	        docker images | grep citest | awk '{print $1":"$2}' | xargs docker rmi -f || true
            	        docker login --username=yourName --password=yourPassword registry.cn-shanghai.aliyuncs.com
            	        docker pull $last
            	        docker run -d $last
            	        echo "rollback to $last success"
            	    else
            	        echo "nothing to rollback"
            	    fi
                '''
    
                sshPut remote: remote, from: 'roll.sh', into: '.'
                sshScript remote: remote, script: 'roll.sh'
                sshRemove remote: remote, path: 'roll.sh'
            }
        }
    }
    
}
```

使用一次构建及一次回滚操作，目标主机上查看操作结果

```bash
[root@izuf69bpbvay7p0ozdhq6bz jenkins]# cat mi_test_history
registry.cn-shanghai.aliyuncs.com/xxx/citest:v1.3.3_manual_37
[root@izuf69bpbvay7p0ozdhq6bz jenkins]# docker ps
CONTAINER ID        IMAGE                                                                COMMAND                  CREATED             STATUS              PORTS               NAMES
fd5a375be004        registry.cn-shanghai.aliyuncs.com/xxx/citest:v1.3.3_manual_40   "./test"                 13 seconds ago      Up 12 seconds                           beautiful_hoover
16df7cae17a3        docker-elk_kibana                                                    "/usr/local/bin/kiba…"   2 months ago        Up 2 months                             docker-elk_kibana_1
ad8056879f70        docker-elk_logstash                                                  "/usr/local/bin/dock…"   2 months ago        Up 2 months                             docker-elk_logstash_1
236f6ed9a404        docker-elk_elasticsearch                                             "/usr/local/bin/dock…"   2 months ago        Up 2 months                             docker-elk_elasticsearch_1
[root@izuf69bpbvay7p0ozdhq6bz jenkins]# cat mi_test_history
[root@izuf69bpbvay7p0ozdhq6bz jenkins]# docker ps
CONTAINER ID        IMAGE                                                                COMMAND                  CREATED             STATUS              PORTS               NAMES
12f23fec4a5f        registry.cn-shanghai.aliyuncs.com/xxx/citest:v1.3.3_manual_37   "./test"                 9 seconds ago       Up 8 seconds                            eager_napier
16df7cae17a3        docker-elk_kibana                                                    "/usr/local/bin/kiba…"   2 months ago        Up 2 months                             docker-elk_kibana_1
ad8056879f70        docker-elk_logstash                                                  "/usr/local/bin/dock…"   2 months ago        Up 2 months                             docker-elk_logstash_1
236f6ed9a404        docker-elk_elasticsearch                                             "/usr/local/bin/dock…"   2 months ago        Up 2 months                             docker-elk_elasticsearch_1
[root@izuf69bpbvay7p0ozdhq6bz jenkins]#
```

构建及回滚操作都成功