# Linux上kdevtmpfsi挖矿木马清除处理

之前购买了一台云服务器，平时也就作为一台Linux练手环境而已。最近发现我创建的服务总是挂，于是查了一下，发现服务器的CPU占用率总是接近99%，且这个占用最高的进程就是 `kdevtmpfsi` 。于是网上查了一下，果然有问题，原来这是一个挖矿病毒。而且服务器中这个毒，都是因为服务器上安装的redis服务造成 的。

一般我们都是使用的redis的默认端口 `6379` ，有时甚至密码都不设置，所以才留下了这个隐患。

这里建议大家，一定要设置好redis服务器的密码，尽量复杂些。另外就是redis的端口设置，最好不要用默认端口，改用其他主机端口。



下面，我就记录一下服务器上如何删除这个木马病毒。



**先将相应木马文件删除**

```shell
sudo find / -name kdevtmpfsi*
sudo rm -rf ...
```

**再将守护进程的文件删除**

```shell
sudo find / -name kinsing*
sudo rm -rf ...
```

**杀死进程**

```shell
ps -aux | grep kinsing

sudo kill -9 PID


ps -aux | grep kdevtmpfsi

sudo kill -9 PID
```

**检查定时任务**

```shell
crontab -l
crontab -e 删除定时任务
```

我的定时任务里倒是没发现有什么问题，不过可以检查一下。



还有 `/etc/rc.local` 以及 `/etc/init.d` 都检查一遍。另外就是查看下redis数据库中，是否也有异常的数据。我的就是，有好几条莫名奇妙的数据，好像是定时任务，所以也一定要删除掉。


