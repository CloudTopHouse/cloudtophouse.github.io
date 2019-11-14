# Redis从认识安装到实现CURD

![img](assets/16d949325b4c983f.webp.jpg)


> Redis是一个使用ANSI C编写的开源、支持网络、基于内存、可选持久性的键值对存储数据库	——维基百科


可以简单的说，**Redis就是一款高性能的NoSQL数据库**

## 什么是NoSQL?

我们前面所学习的**MySQL数据库**是典型的的**SQL数据库**也就是传统的关系型数据库，而我们今天学习的**Redis数据库**则是一款NoSQL数据库，也叫作非关系型数据库，它与我们熟悉的MySQL等的概念完全是不一样的，它是一项全新的数据库理念，我们帖一组百度百科的解释

> NoSQL，泛指非关系型的数据库。随着互联网web2.0网站的兴起，传统的关系数据库在处理web2.0网站，特别是超大规模和高并发的SNS类型的web2.0纯动态网站已经显得力不从心，出现了很多难以克服的问题，而非关系型的数据库则由于其本身的特点得到了非常迅速的发展。NoSQL数据库的产生就是为了解决大规模数据集合多重数据种类带来的挑战，尤其是大数据应用难题	——百度百科

说明：我们现在所看到的的博客，RSS，P2P，微博，抖音等均属于 Web2.0的产物，Web2.0相比较过去的Web1.0更加注重于用户的交互，用户不仅可以浏览，还可以上传一些资源到网站上，例如图片文字或者说短视频等，使得用户也参与到了网站内容的制造中去了

## 为什么使用NoSQL？

1. 部署成本低：部署操作简单，以开源软件为主
2. 存储格式丰富：支持 key-value形式、文档、图片等众多形式，包括对象或者集合等格式
3. 速度快：数据存储在缓存中，而不是硬盘中，而且例如Redis基于键值对，同时不需要经过SQL层解析，性能非常高
4. 无耦合性，易扩展 
   - 在SQL中，一个正在使用的数据是不允许删除的，但NoSQL却可以操作

## NoSQL可以替代SQL吗？

有人会说，NoSQL = Not SQL ，但是我更倾向这样理解 NoSQL = Not only SQL ，我们不能以一个绝对的结论来判定两项技术的好坏，每一项技术的产生都有其特定的原因，在我看来，**NoSQL更适合作为SQL数据库的补充**，由于海量数据的出现，性能的要求高了起来，而NoSQL这种产物，对于**结构简单**但是**数据量大**的数据处理起来要比传统的SQL快很多，但是同样的，其**逻辑运算就必须很简单**，否则它也是力不从心的

在我看来，可以简单的说，NoSQL就是以功能换取性能，但是需要**处理复杂的业务逻辑**还需要使用**关系型数据库**，所以说想要在模型中完全用NoSQL替代SQL是不现实的，两者更像是互补的关系

**SQL的好处：**

1. 支持在一个表以及多表之前进行复杂的查询操作
2. 支持对事物的处理，能保证数据的安全要求
3. 学习成本低，资料较多

市面上的NoSQL产品非常多，我们今天所要介绍的就是其中一款基于键值存储的数据库——Redis

## 初识Redis

我们在一开始提到了，**Redis就是一款高性能的NoSQL数据库**，那么它的应用场景是什么呢？

- 用于用户内容缓存，可以处理大量数据的高访问负载，例如：数据查询，新闻，商品内容
- 任务队列，例如：秒杀，12306
- 在线好友列表
- 应用、网站访问统计排行

**由于其基于键值存储，那么可以支持的存储的类型有什么呢？**

- 字符串类型 - String
- 列表 - list：linkedlist
- 集合 - set
- 有序集合 - sortedset
- 哈希 - hash：map

## 下载安装

### Linux

官网：[redis.io](https://link.juejin.im?target=https%3A%2F%2Fredis.io)

由于官网访问速度过慢，我们可以访问对应的中文网：[www.redis.net.cn](https://link.juejin.im?target=http%3A%2F%2Fwww.redis.net.cn)

下载，解压，编译：

```bash
$ wget http://download.redis.io/releases/redis-5.0.4.tar.gz
$ tar xzf redis-5.0.4.tar.gz
$ cd redis-5.0.4
$ make
```

二进制文件是编译完成后在src目录下. 运行如下:

```bash
$ src/redis-server
```

你能使用Redis的内置客户端进行进行redis代码的编写，例如我们存入一个键值 name-zhangsan

```bash
$ src/redis-cli
redis> set name zhangsan
OK
redis> get name
"zhangsan"
```

### Windows

我们可以去github中寻找windows版本,不过版本会有所滞后

[github.com/microsoftar…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fmicrosoftarchive%2Fredis%2Freleases)

解压即可用

- redis-server.exe：redis服务器端
- redis-cli.exe：redis的客户端
- redis.windows.conf：配置文件

## 常见支持类型—存取删除命令操作

#### (一) 字符串类型 - String

##### (1) 存储

- set key value

```bash
- 127.0.0.1:6379> set address beijing
- OK
```

##### (2) 获取

- get key

```bash
- 127.0.0.1:6379> get address
- “beijing”
```

##### (2) 删除

- del key

```bash
- 127.0.0.1:6379> del address
- (integer) 1
```

#### (二) 列表类型 - list

**添加一个元素到列表的头部（左边）或者尾部（右边）**

##### (1) 添加

- lpush key value：将元素添加到列表左边
- Rpush key value：将元素添加到列表右边

```bash
127.0.0.1:6379> lpush listDemo zhangsan
(integer) 1
127.0.0.1:6379> lpush listDemo lisi
(integer) 2
127.0.0.1:6379> rpush listDemo wangwu
(integer) 3
```

##### (2) 获取：lrange key start end

- 127.0.0.1:6379> lrange listDemo 0 -1

```bash
1) "lisi"
2) "zhangsan"
3) "wangwu"
```

##### (2) 删除

- lpop key：删除列表最左边的元素，且返回元素
- rpop key：删除列表最右边的元素，且返回元素

#### (三) 集合类型 - set

set：String 类型的无序集合，且元素不能重复

##### (1) 存储

- sadd key value

```bash
127.0.0.1:6379> sadd setDemo aaa
(integer) 1
127.0.0.1:6379> sadd setDemo aaa
(integer) 0
```

##### (2) 获取

- smembers key：获取set集合中的所有元素

```bash
127.0.0.1:6379> smembers setDemo
1) "aaa“
```

##### (2) 删除

- srem key value：删除set集合中某元素

```bash
127.0.0.1:6379> srem setDemo aaa
(integer) 1
```

#### (四) 有序集合类型 - sortedset

sortedset 和 set 一样也是 string 类型元素的集合，且不允许重复的元素

不同的是每个元素都会关联一个double类型的分数，redis正是通过分数来为集合中的成员进行从小到大的排序

有序集合的成员是唯一，但分数(score)却可以重复

##### (1) 存储

- zadd key score value

```bash
127.0.0.1:6379> zadd sortedsetDemo 20 zhangsan
(integer) 1
127.0.0.1:6379> zadd sortedsetDemo 10 lisi
(integer) 1
127.0.0.1:6379> zadd sortedsetDemo 60 wangwu
(integer) 1
```

##### (2) 获取

- zrange key start end [withscores]

```bash
127.0.0.1:6379> zrange sortedsetDemo 0 -1
1) "lisi"
2) "zhangsan"
3) "wangwu"
```

##### (2) 删除

- zrem key value

```bash
127.0.0.1:6379> zrem sortedsetDemo wangwu
(integer) 1
```

#### (五) 哈希类型 - hash

##### (1) 存储

- hset key field value

```bash
127.0.0.1:6379> hset hashDemo username admin
(integer) 1
127.0.0.1:6379>  hset hashDemo password admin
(integer) 1
```

##### (2) 获取

- hget key field：获取指定的field对应的值

```bash
127.0.0.1:6379> hget hashDemo password
"admin"
```

- hgetall key：获取所有的field和value

```bash
127.0.0.1:6379> hgetall hashDemo
1) "username"
2) "admin"
3) "password"
4) "admin"
```

##### (2) 删除

- hdel key field

```bash
127.0.0.1:6379> hdel hashDemo username
(integer) 1
```

## 数据持久化

开篇已经讲过，Redis是一个内存数据库，也就是说，我们的数据全部存储在内存中，而我们常见的MySQL和Oracle等SQL数据库会将数据存储到硬盘中，凡事都是有利有弊，虽然内存数据库读写速度要比在硬盘中读写的数据库快的多，但是却出现了一个很麻烦的问题，也就是说，当 Redis 服务器重启或者宕机后，内存中的数据会全部丢失，为了解决这个问题，Redis提供了一种持久化的技术，也就是将内存中的数据存储到硬盘中去，日后方便我们使用这些文件恢复数据库中的数据

### RDB 方式 (默认方式)

RDB：一定的时间内，检测key的变化情况，然后持久化数据

我们想要配置它，需要编辑 redis.windows.conf 配置文件

```conf
# Save the DB on disk:
#
#   save <seconds> <changes>
#
#   Will save the DB if both the given number of seconds and the given
#   number of write operations against the DB occurred.
#
#   In the example below the behaviour will be to save:
#   after 900 sec (15 min) if at least 1 key changed
#   after 300 sec (5 min) if at least 10 keys changed
#   after 60 sec if at least 10000 keys changed
#	......省略部分

save 900 1
save 300 10
save 60 10000
```

我们需要修改的就是最后三行，前面的说明的意思是，如果给定的秒数和给定的对数据库的写操作数同时发生，那么将保存数据库，也就是说，它的配置是根据save后面的两个数字，根据说明可知，第一个数字代表间隔时间，第二个数代表操作数据的数量

例如第一个 save 900 1 ，就是说每900秒且，至少一个 key 被改变则保存数据

我们根据自己具体项目的需要设置好后，需要重新启动Redis的服务器，并且我们需要指定配置文件，我们先指向到Redis指定目录下， 然后输入命令 `redis-server.exe redis.windows.conf`

例如我本地：`D:\Tools\Redis-x64-3.2.100>redis-server.exe redis.windows.conf`

### AOF 方式

AOF：每一次操作后，就持久化数据

我们同样可以在 redis.windows.conf 文件配置

我们找到这一行

`appendonly no` no代表关闭aof，改为yes代表开启

还有这一行

`# appendfsync no`：不进行持久化

我们可以修改 no 位置的值

- appendfsync always：每一次操作都进行持久化
- appendfsync everysec：每隔一秒进行一次持久化

## Jedis - Java中操作Redis数据库

> Jedis is a blazingly small and sane Redis java client.
>
> Jedis was conceived to be EASY to use.

Jedis 是一款可以让我们在java中操作redis数据库的工具，下载其jar包导入即可，使用还是非常简单的

#### (一) 字符串类型 - String

```java
//获取连接,空构造代表默认值 "localhost",6379端口
Jedis jedis = new Jedis();

//存储
jedis.set("address","beijing");

//获取
String address = jedis.get("address");

//关闭连接
jedis.close();
```

补充：setex() 方法可以存储数据，并且指定过期时间

```java
//将aaa-bbb存入，且10秒后过期
jedis.setex("aaa",10,"bbb")
```

#### (二) 列表类型 - list

```java
//获取连接,空构造代表默认值 "localhost",6379端口
Jedis jedis = new Jedis();

//存储
jedis.lpush("listDemo","zhangsan","lisi","wangwu");//从左
jedis.rpush("listDemo","zhangsan","lisi","wangwu");//从右
	
//获取
List<String> mylist = jedis.lrange("listDemo", 0, -1);
	        
//删除，并且返回元素
String e1 = jedis.lpop("listDemo");//从左
String e2 = jedis.rpop("listDemo");//从右

//关闭连接
jedis.close();
```

#### (三) 集合类型 - set

```java
//获取连接,空构造代表默认值 "localhost",6379端口
Jedis jedis = new Jedis();

//存储
jedis.sadd("setDemo","zhangsan","lisi","wangwu");

//获取
Set<String> setDemo = jedis.smembers("setDemo");

//关闭连接
jedis.close();
```

#### (四) 有序集合类型 - sortedset

```java
//获取连接,空构造代表默认值 "localhost",6379端口
Jedis jedis = new Jedis();

//存储
jedis.zadd("sortedsetDemo",20,"zhangsan");
jedis.zadd("sortedsetDemo",10,"lisi");
jedis.zadd("sortedsetDemo",60,"wangwu");
	
//获取
Set<String> sortedsetDemo = jedis.zrange("sortedsetDemo", 0, -1);

//关闭连接
jedis.close();
```

#### (五) 哈希类型 - hash

```java
//获取连接,空构造代表默认值 "localhost",6379端口
Jedis jedis = new Jedis();

//存储
jedis.hset("hashDemo","name","lisi");
jedis.hset("hashDemor","age","20");
	
//获取
String name = jedis.hget("hashDemo", "name");

//获取所有数据
Map<String, String> user = jedis.hgetAll("hashDemo");
	

Set<String> keySet = user.keySet();
for (String key : keySet) {
	//获取value
	String value = user.get(key);
	System.out.println(key + ":" + value);
}

//关闭连接
jedis.close();
```

## Jedis 连接池

为什么我们要使用连接池呢？

我们要使用Jedis，必须建立连接，我们每一次进行数据交互的时候，都需要建立连接，Jedis虽然具有较高的性能，但建立连接却需要花费较多的时间，如果使用连接池则可以同时在客户端建立多个连接并且不释放，连接的时候只需要通过一定的方式获取已经建立的连接，用完则归还到连接池，这样时间就大大的节省了

```java
//创建一个配置对象
JedisPoolConfig config = new JedisPoolConfig();
config.setMaxIdle(10);
		
//创建Jedis连接池对象
JedisPool jedisPool = new JedisPool(config,"localhost",6379);
		
//获取连接
Jedis jedis = jedisPool.getResource();

//使用
jedis.set("setDemo","zhangsan");

//关闭 归还到连接池中
jedis.close();
```

## 连接池工具类

```java
public class JedisPoolUtils {
	private static JedisPool jedisPool;
	//静态代码初始化池配置
    static{
        
        //创建Properties对象
		Properties pro = new Properties();
        
		//读取配置文件
		InputStream is = JedisPoolUtils.class.getClassLoader().getResourceAsStream("jedis.properties");
		
		//关联文件
		try {
			pro.load(is);
		} catch (IOException e) {
			e.printStackTrace();
		}
		//获取数据，配置到JedisPoolConfig
		JedisPoolConfig config = new JedisPoolConfig();		        	
		config.setMaxTotal(Integer.parseInt(pro.getProperty("maxTotal")));
		config.setMaxIdle(Integer.parseInt(pro.getProperty("maxIdle")));
			
		//实例化JedisPool
		jedisPool = new JedisPool(config,pro.getProperty("host"),Integer.parseInt(pro.getProperty("port")));
		
		}

		/**
		* 获取连接
		*/
		public static Jedis getJedis(){
			return jedisPool.getResource();
		}
}
```

## 结尾：

如果文章中有什么不足，或者错误的地方，欢迎大家留言分享想法，感谢朋友们的支持！


作者：BWH_Steven链接：https://juejin.im/post/5d96a98fe51d4578080330c1来源：掘金著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。