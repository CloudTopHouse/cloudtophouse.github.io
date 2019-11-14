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
	              { text: 'SpringBoot', link: '/zh/SpringBoot/' },
	              { text: '文章', link: '/zh/article/' },
	              { text: '关于', link: '/zh/about/' },
	              { text: 'Changelog', link: '/zh/changelog/' }
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

		          	// SpringBoot
				    '/zh/SpringBoot/': [
				        {
				        	title: '基础',
				        	children: [
				              '/zh/SpringBoot/basic/01-第一个 Spring Boot 应用程序',
				              '/zh/SpringBoot/basic/02-Spring Boot 单元测试',
					          '/zh/SpringBoot/basic/03-Spring Boot 常用配置',
				          	]
				        },
				        {
				          title: '整合',
				          collapsable: true,
				          children: [
				            '/zh/SpringBoot/Integration/01-集成Mybatis通用mapper和pagehelper',
				            '/zh/SpringBoot/Integration/02-全局异常处理',
					        '/zh/SpringBoot/Integration/03-JSR-303实现请求参数校验',
					        '/zh/SpringBoot/Integration/04-整合Swagger2生成API文档',
					        '/zh/SpringBoot/Integration/05-集成JWT实现token验证',
					        '/zh/SpringBoot/Integration/06-集成定时任务',
					        '/zh/SpringBoot/Integration/07-集成邮件服务',
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