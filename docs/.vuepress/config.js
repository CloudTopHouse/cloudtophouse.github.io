module.exports = {
    // 这是部署到github相关的配置	
    base: '/',
    title: '山河社稷图',
    description: 'ShanHeSheJiTu',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json'}]
    ],
    markdown: {
    	//显示行号
	  	lineNumbers: true
	}, 
    //站点多语言配置
    locales: { 	
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
          title: '山河社稷图',
          description: 'Vue-powered Static Site Generator'
        },
        '/zh/': {
          lang: 'zh-CN',
          title: '山河社稷图',
          description: '学习笔记'
        }
    },       
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/zhengxiaochuan',
        // 自定义仓库链接文字。
        repoLabel: '官网',
        //默认主题多语言配置
        locales: {
        	//英文
	        '/': {
		        selectText: 'Languages',
		        label: 'English',
		        editLinkText: 'Edit this page on GitHub',
		        serviceWorker: {
		          updatePopup: {
		            message: "New content is available.",
		            buttonText: "Refresh"
		          }
		        },
		        algolia: {},
		        nav: [
		          { text: 'Home', link: '/' },
	              { text: 'Archive',
	                items: [
	                  { text: 'SpringBoot', link: '/SpringBoot/' },
	                  { text: 'Docker', link: '/Docker/' },
	                  { text: '微服务', link: '/微服务/' }
	                ] 
	              },
	              { text: 'About', link: '/about/' }
	        	],
		        sidebar: {
            		'/SpringBoot/': [
                        "",
                        "SpringBoot"
                    ]
            	}
	        },
	        //中文
	        '/zh/': {
		        // 多语言下拉菜单的标题
		        selectText: '选择语言',
		        // 该语言在下拉菜单中的标签
		        label: '简体中文',
		        // 编辑链接文字
		        editLinkText: '在 GitHub 上编辑此页',
		        // Service Worker 的配置
		        serviceWorker: {
		          updatePopup: {
		            message: "发现新内容可用.",
		            buttonText: "刷新"
		          }
		        },
		        // 当前 locale 的 algolia docsearch 选项
		        algolia: {},
		        nav: [
		          { text: '首页', link: '/zh/' },
	              { text: '指南', link: '/zh/guide/' },
	              { text: '面试收集', link: '/zh/interview/' },
	              { text: '基础', link: '/zh/DevBasic/' },
	              { text: '高级', link: '/zh/DevAdvance/' },
	              { text: '其他', link: '/zh/others/' },
	              { text: '文章', link: '/zh/article/' },
	              { text: '关于', link: '/zh/about/' }
	        	],
		        sidebar: {
		        	// 开发指南
		          	'/zh/guide/': [
			            {
			              title: '指南',
			              collapsable: false,
			              children: [
			                '/zh/guide/',
		              	  ]
		            	},
		            	{
			              title: '基础',
			              collapsable: false,
			              children: [
			                '/zh/guide/走向单体地狱',
			                '/zh/guide/GitFlow 工作流指南',
		              	  ]
		            	}
		          	],
		          	// 面试收集
		          	'/zh/interview/': [
			            {
			              title: '开篇',
			              collapsable: false,
			              children: [
			                '/zh/interview/',
		              	  ]
		            	},	            
		            	{
			              title: '未分类新题',
			              collapsable: false,
			              children: [
			                '/zh/interview/Java-面试宝典-新特性-JDK8',
			                '/zh/interview/Java-面试宝典-双亲委派模型',
		              	  ]
		            	}
		          	],

					// 基础
				    '/zh/DevBasic/': [
				        {
				        	title: 'Git基础',
				        	children: [
				              '/zh/DevBasic/Git/Git/为什么你应该使用Git进行版本控制',
				              '/zh/DevBasic/Git/Git/为什么需要版本控制',
					          '/zh/DevBasic/Git/Git/什么是 Git',
					          '/zh/DevBasic/Git/Git/安装 Git',
					          '/zh/DevBasic/Git/Git/Git 的一般工作流程',
					          '/zh/DevBasic/Git/Git/Git 的基本操作',
					          '/zh/DevBasic/Git/Git/TortoiseGit 简化 Git 操作',
					          '/zh/DevBasic/Git/Git/快速搭建自己的Git仓库',
					          '/zh/DevBasic/Git/Git/IDEA中的Git操作',
				          	]
				        },
				        {
				        	title: 'GitFlow 工作流指南',
				        	children: [
				              '/zh/DevBasic/Git/GitFlow/Git 工作流简介',
				              '/zh/DevBasic/Git/GitFlow/集中式工作流',
					          '/zh/DevBasic/Git/GitFlow/功能分支工作流',
					          '/zh/DevBasic/Git/GitFlow/GitFlow 工作流',
					          '/zh/DevBasic/Git/GitFlow/Forking 工作流',
					          '/zh/DevBasic/Git/GitFlow/Pull Requests',
				          	]
				        },
				        {
				        	title: 'GitLab',
				        	children: [
				              '/zh/DevBasic/Git/GitLab/什么是 GitLab',
				              '/zh/DevBasic/Git/GitLab/基于 Docker 安装 GitLab',
					          '/zh/DevBasic/Git/GitLab/GitLab 的基本设置',
					          '/zh/DevBasic/Git/GitLab/GitLab 的账户管理',
					          '/zh/DevBasic/Git/GitLab/GitLab 创建第一个项目',
					          '/zh/DevBasic/Git/GitLab/GitLab 使用 SSH 免密登录',
				          	]
				        },
				        {
				          title: 'Linux系统',
				          collapsable: true,
				          children: [
				            '/zh/DevBasic/Linux/01-Linux简介',
				            '/zh/DevBasic/Linux/02-Linux远程控制管理',
					        '/zh/DevBasic/Linux/03-Linux目录管理',
					        '/zh/DevBasic/Linux/04-Linux系统管理',
					        '/zh/DevBasic/Linux/05-Linux Vim编辑器',
					        '/zh/DevBasic/Linux/06-Linux用户和组管理',
					        '/zh/DevBasic/Linux/07-Linux文件权限管理',
					        '/zh/DevBasic/Linux/08-Linux软件包管理',
					        '/zh/DevBasic/Linux/09-Linux部署应用程序',
					        '/zh/DevBasic/Linux/10-Linux LVM磁盘扩容',
				          ]
				        }
				    ],

		          	// 高级
				    '/zh/DevAdvance/': [
				        {
				        	title: 'SpringBoot基础',
				        	children: [
				              '/zh/DevAdvance/SpringBoot/basic/01-第一个 Spring Boot 应用程序',
				              '/zh/DevAdvance/SpringBoot/basic/02-Spring Boot 单元测试',
					          '/zh/DevAdvance/SpringBoot/basic/03-Spring Boot 常用配置',
				          	]
				        },
				        {
				          title: 'SpringBoot整合',
				          collapsable: true,
				          children: [
				            '/zh/DevAdvance/SpringBoot/Integration/01-集成Mybatis通用mapper和pagehelper',
				            '/zh/DevAdvance/SpringBoot/Integration/02-全局异常处理',
					        '/zh/DevAdvance/SpringBoot/Integration/03-JSR-303实现请求参数校验',
					        '/zh/DevAdvance/SpringBoot/Integration/04-整合Swagger2生成API文档',
					        '/zh/DevAdvance/SpringBoot/Integration/05-集成JWT实现token验证',
					        '/zh/DevAdvance/SpringBoot/Integration/06-集成定时任务',
					        '/zh/DevAdvance/SpringBoot/Integration/07-集成邮件服务',
					        '/zh/DevAdvance/SpringBoot/Integration/08-整合Redis',
				          ]
				        },
				        {
				        	title: '编程方法论',
				        	children: [
				              '/zh/DevAdvance/ProgramMethodology/01-敏捷宣言',
				              '/zh/DevAdvance/ProgramMethodology/02-敏捷开发',
					          '/zh/DevAdvance/ProgramMethodology/03-极限编程',
					          '/zh/DevAdvance/ProgramMethodology/04-微服务十二要素宣言',
					          '/zh/DevAdvance/ProgramMethodology/05-无状态应用',
					          '/zh/DevAdvance/ProgramMethodology/06-轻应用',
					          '/zh/DevAdvance/ProgramMethodology/07-禅道简介',
					          '/zh/DevAdvance/ProgramMethodology/08-安装禅道',
				          	]
				        },
				        {
				        	title: '微服务',
				        	children: [
				              '/zh/DevAdvance/MicroService/01-构建单体应用模型',
				              '/zh/DevAdvance/MicroService/02-走向单体地狱',
					          '/zh/DevAdvance/MicroService/03-微服务解决复杂问题',
					          '/zh/DevAdvance/MicroService/04-微服务的优点',
					          '/zh/DevAdvance/MicroService/05-微服务的缺点',
					          '/zh/DevAdvance/MicroService/06-CAP定理与BASE理论',
					          '/zh/DevAdvance/MicroService/07-如何应对高并发',
					          '/zh/DevAdvance/MicroService/08-微服务的概念',
					          '/zh/DevAdvance/MicroService/09-微服务的实践',
					          '/zh/DevAdvance/MicroService/10-微服务设计模式',
				          	]
				        },
				        {
				        	title: 'Docker容器',
				        	children: [
				              '/zh/DevAdvance/Docker/Docker/Docker简介',
				              '/zh/DevAdvance/Docker/Docker/安装Docker',
					          '/zh/DevAdvance/Docker/Docker/Docker 概述',
					          '/zh/DevAdvance/Docker/Docker/Docker 操作镜像',
					          '/zh/DevAdvance/Docker/Docker/Docker 操作容器',
					          '/zh/DevAdvance/Docker/Dockerfile/Dockerfile 定制镜像',
					          '/zh/DevAdvance/Docker/Dockerfile/Dockerfile 指令',
					          '/zh/DevAdvance/Docker/Docker Compose/Docker Compose 简介',
					          '/zh/DevAdvance/Docker/Docker Compose/Docker Compose 使用',
					          '/zh/DevAdvance/Docker/Docker Compose/Docker Compose 部署应用程序',
					          '/zh/DevAdvance/Docker/Docker Compose/Docker Compose 部署 GitLab',
					          '/zh/DevAdvance/Docker/Docker Compose/Docker Compose 部署 Nexus',
					          '/zh/DevAdvance/Docker/Docker Compose/Docker Compose 部署 Harbor',
					          '/zh/DevAdvance/Docker/Docker Compose/Docker Compose 网络设置',
				          	]
				        },
				        {
				        	title: 'Kubernetes',
				        	children: [
				              '/zh/DevAdvance/Kubernetes/01-Kubernetes 简介',
				              '/zh/DevAdvance/Kubernetes/02-Kubernetes 安装前的准备',
					          '/zh/DevAdvance/Kubernetes/03-Kubernetes 安装集群',
					          '/zh/DevAdvance/Kubernetes/04-Kubernetes 配置网络',
					          '/zh/DevAdvance/Kubernetes/05-Kubernetes 第一个容器',
					          '/zh/DevAdvance/Kubernetes/06-Kubernetes 概念总结',
					          '/zh/DevAdvance/Kubernetes/07-Kubernetes 通过资源配置运行容器',
					          '/zh/DevAdvance/Kubernetes/08-Kubernetes Ingress简介',
					          '/zh/DevAdvance/Kubernetes/09-Nginx 虚拟主机',
					          '/zh/DevAdvance/Kubernetes/10-Nginx 反向代理',
					          '/zh/DevAdvance/Kubernetes/11-Nginx 负载均衡',
					          '/zh/DevAdvance/Kubernetes/12-Nginx Ingress Controller',
					          '/zh/DevAdvance/Kubernetes/13-Kubernetes 准备数据卷',
					          '/zh/DevAdvance/Kubernetes/14-Kubernetes 使用数据卷',
					          '/zh/DevAdvance/Kubernetes/15-Kubernetes ConfigMap',
					          '/zh/DevAdvance/Kubernetes/16-Kubernetes Dashboard',
				          	]
				        },
				    ],

				    // 其他
				    '/zh/others/': [
				        {
				        	title: '第一部分',
				        	children: [
				              '/zh/others/Chapter1/简话开源协议',
				              '/zh/others/Chapter1/论「版本号」的正确使用方式',
				              '/zh/others/Chapter1/解决跨域问题',
				              '/zh/others/Chapter1/使用Gitbook+Markdown编写电子文档',
				              '/zh/others/Chapter1/VuePress与Github Pages搭配完成线上站点',
				              '/zh/others/Chapter1/深入 OAuth2.0 和 JWT',
				          	]
				        }
				    ],

				    // 文章
				    '/zh/article/': [
				        {
				        	title: '技术相关',
				        	children: [
				              '/zh/article/可能是国内第一篇全面解读Java现状及趋势的文章',
				          	]
				        },
				        {
				          title: '其他',
				          collapsable: true,
				          children: [
				            '/zh/article/如何依靠副业赚钱',
				          ]
				        }
				    ],

				    //关于
				    '/zh/about/': [
				        {
				        	title: '关于',
				        	children: [
				              '/zh/about/',
				              '/zh/about/changelog'				              
				          	]
				        }
				    ],


	                // docs文件夹下面的zh/test文件夹 文档中md文件 书写的位置(命名随意)
				    '/zh/test/': [
				        '/zh/test/', // test文件夹的README.md 不是下拉框形式
				        {
				          title: '文档示例',
				          collapsable: true,
				          children: [
				            '/zh/test/test', // 以docs为根目录来查找文件，当前地址查找的是：docs>test>test.md 文件
				            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
				            '/zh/test/test1',
					        '/zh/test/test2',
				          ]
				        }
				    ],
                  
            	},
            	sidebarDepth: 2,
        		lastUpdated: '上次更新',
	      	}
        }
        
    }
}