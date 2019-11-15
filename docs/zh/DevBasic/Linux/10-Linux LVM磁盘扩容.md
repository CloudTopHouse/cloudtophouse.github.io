# 10-Linux LVM磁盘扩容





## LVM 的基本概念

- **物理卷 Physical Volume (PV)：** 可以在上面建立卷组的媒介，可以是硬盘分区，也可以是硬盘本身或者回环文件（loopback file）。物理卷包括一个特殊的 header，其余部分被切割为一块块物理区域（physical extents）
- **卷组 Volume group (VG)：** 将一组物理卷收集为一个管理单元
- **逻辑卷 Logical volume (LV)：** 虚拟分区，由物理区域（physical extents）组成
- **物理区域 Physical extent (PE)：** 硬盘可供指派给逻辑卷的最小单位（通常为 4MB）

## 磁盘操作相关命令

- 查看挂载点

```bash
df -h

# 输出如下
Filesystem                         Size  Used Avail Use% Mounted on
udev                               955M     0  955M   0% /dev
tmpfs                              198M  1.8M  196M   1% /run
## 此处为我们磁盘的挂载点
/dev/mapper/ubuntu--vg-ubuntu--lv   19G  6.0G   12G  35% /
tmpfs                              986M     0  986M   0% /dev/shm
tmpfs                              5.0M     0  5.0M   0% /run/lock
tmpfs                              986M     0  986M   0% /sys/fs/cgroup
/dev/loop1                          91M   91M     0 100% /snap/core/6350
/dev/loop0                          89M   89M     0 100% /snap/core/6964
/dev/sda2                          976M  143M  767M  16% /boot
```

- 显示当前的 logical volume：`lvdisplay`

```bash
lvdisplay

# 输出如下
--- Logical volume ---
LV Path                /dev/ubuntu-vg/ubuntu-lv
LV Name                ubuntu-lv
VG Name                ubuntu-vg
LV UUID                e2fKkR-oZeH-WV2A-ltCi-P76v-N9yv-aUtIg1
LV Write Access        read/write
LV Creation host, time ubuntu-server, 2019-05-14 03:13:57 +0800
LV Status              available
# open                 1
LV Size                <19.00 GiB
Current LE             4863
Segments               1
Allocation             inherit
Read ahead sectors     auto
- currently set to     256
Block device           253:0
```

- 显示当前的 volume group

```bash
vgdisplay

# 输出如下
--- Volume group ---
VG Name               ubuntu-vg
System ID             
Format                lvm2
Metadata Areas        1
Metadata Sequence No  2
VG Access             read/write
VG Status             resizable
MAX LV                0
Cur LV                1
Open LV               1
Max PV                0
Cur PV                1
Act PV                1
## 这里应该是你当前的可用空间大小，待扩容完毕，这里显示的应该是最终的大小
VG Size               <19.00 GiB
PE Size               4.00 MiB
Total PE              4863
Alloc PE / Size       4863 / <19.00 GiB
Free  PE / Size       0 / 0   
VG UUID               dhI9ns-7lOI-pXf8-IOWL-F96N-JIYG-ZF6u82
```

- 显示当前的 physical volume

```bash
pvdisplay

# 输出如下
--- Physical volume ---
PV Name               /dev/sda3
VG Name               ubuntu-vg
PV Size               <19.00 GiB / not usable 0   
Allocatable           yes (but full)
PE Size               4.00 MiB
Total PE              4863
Free PE               0
Allocated PE          4863
PV UUID               TDFe2b-xsce-R8So-ldxR-ohcp-fx5J-n2JNOa
```



## 开始 LVM 扩容

### 查看 fdisk

```bash
fdisk -l

# 输出如下
Disk /dev/loop0: 88.4 MiB, 92733440 bytes, 181120 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk /dev/loop1: 91 MiB, 95408128 bytes, 186344 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk /dev/sda: 20 GiB, 21474836480 bytes, 41943040 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: F96F20D7-1F28-4B03-87CF-4FA3E81FDE29

Device       Start      End  Sectors Size Type
/dev/sda1     2048     4095     2048   1M BIOS boot
/dev/sda2     4096  2101247  2097152   1G Linux filesystem
/dev/sda3  2101248 41940991 39839744  19G Linux filesystem

Disk /dev/mapper/ubuntu--vg-ubuntu--lv: 19 GiB, 20396900352 bytes, 39837696 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

### 查看所有储存设备

```bash
fdisk -l |grep '/dev'

# 输出如下
Disk /dev/loop0: 88.4 MiB, 92733440 bytes, 181120 sectors
Disk /dev/loop1: 91 MiB, 95408128 bytes, 186344 sectors
## 目前只有一块磁盘 sda
Disk /dev/sda: 20 GiB, 21474836480 bytes, 41943040 sectors
/dev/sda1     2048     4095     2048   1M BIOS boot
/dev/sda2     4096  2101247  2097152   1G Linux filesystem
/dev/sda3  2101248 41940991 39839744  19G Linux filesystem
Disk /dev/mapper/ubuntu--vg-ubuntu--lv: 19 GiB, 20396900352 bytes, 39837696 sectors
```

```bash
# 在虚拟机中挂载多一块磁盘，再操作
fdisk -l |grep '/dev'

# 输出如下
Disk /dev/loop0: 88.4 MiB, 92733440 bytes, 181120 sectors
Disk /dev/loop1: 91 MiB, 95408128 bytes, 186344 sectors
## 挂载的第一块磁盘 sda
Disk /dev/sda: 20 GiB, 21474836480 bytes, 41943040 sectors
/dev/sda1     2048     4095     2048   1M BIOS boot
/dev/sda2     4096  2101247  2097152   1G Linux filesystem
/dev/sda3  2101248 41940991 39839744  19G Linux filesystem
## 挂载的第二块磁盘 sdb
Disk /dev/sdb: 20 GiB, 21474836480 bytes, 41943040 sectors
Disk /dev/mapper/ubuntu--vg-ubuntu--lv: 19 GiB, 20396900352 bytes, 39837696 sectors
```



### 创建 sdb 分区

```bash
fdisk /dev/sdb

# 输出如下
Welcome to fdisk (util-linux 2.31.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x0de15f1d.

## 在此处输入命令
## n：新建分区
## l: 选择逻辑分区，如果没有，则首先创建主分区（p），然后再添加逻辑分区（硬盘最多四个分区 P-P-P-P 或 P-P-P-E）
Command (m for help): n
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
Select (default p):

Using default response p.
Partition number (1-4, default 1): 
First sector (2048-41943039, default 2048): 
Last sector, +sectors or +size{K,M,G,T,P} (2048-41943039, default 41943039): 

Created a new partition 1 of type 'Linux' and of size 20 GiB.

## 在此处输入命令
## w：写入磁盘
Command (m for help): w
The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

### 格式化磁盘

- 查看分区

```bash
fdisk -l |grep '/dev'

# 输出如下
Disk /dev/loop0: 88.4 MiB, 92733440 bytes, 181120 sectors
Disk /dev/loop1: 91 MiB, 95408128 bytes, 186344 sectors
Disk /dev/sda: 20 GiB, 21474836480 bytes, 41943040 sectors
/dev/sda1     2048     4095     2048   1M BIOS boot
/dev/sda2     4096  2101247  2097152   1G Linux filesystem
/dev/sda3  2101248 41940991 39839744  19G Linux filesystem
Disk /dev/sdb: 20 GiB, 21474836480 bytes, 41943040 sectors
## 此时可以看见新创建的分区 /dev/sdb1
/dev/sdb1        2048 41943039 41940992  20G 83 Linux
Disk /dev/mapper/ubuntu--vg-ubuntu--lv: 19 GiB, 20396900352 bytes, 39837696 sectors
```

- 格式化

```bash
mkfs -t ext4 /dev/sdb1

# 输出如下
mke2fs 1.44.1 (24-Mar-2018)
Creating filesystem with 5242624 4k blocks and 1310720 inodes
Filesystem UUID: 6f11063f-c118-4099-90fc-2b083c181b23
Superblock backups stored on blocks: 
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208, 
        4096000
Allocating group tables: done                            
Writing inode tables: done                            
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done
```

### 创建 PV

```bash
pvcreate /dev/sdb1

# 输出如下
WARNING: ext4 signature detected on /dev/sdb1 at offset 1080. Wipe it? [y/n]: y
  Wiping ext4 signature on /dev/sdb1.
  Physical volume "/dev/sdb1" successfully created.
```

### 查看卷组

```bash
pvscan

# 输出如下
PV /dev/sda3   VG ubuntu-vg       lvm2 [<19.00 GiB / 0    free]
PV /dev/sdb1                      lvm2 [<20.00 GiB]
Total: 2 [<39.00 GiB] / in use: 1 [<19.00 GiB] / in no VG: 1 [<20.00 GiB]
```

### 扩容 VG

- 查看 VG

```bash
vgdisplay

# 输出如下
--- Volume group ---
## 我们需要用到 VG Name
VG Name               ubuntu-vg
System ID             
Format                lvm2
Metadata Areas        1
Metadata Sequence No  2
VG Access             read/write
VG Status             resizable
MAX LV                0
Cur LV                1
Open LV               1
Max PV                0
Cur PV                1
Act PV                1
VG Size               <19.00 GiB
PE Size               4.00 MiB
Total PE              4863
Alloc PE / Size       4863 / <19.00 GiB
Free  PE / Size       0 / 0   
VG UUID               dhI9ns-7lOI-pXf8-IOWL-F96N-JIYG-ZF6u82
```

- 扩容 VG

```bash
vgextend ubuntu-vg /dev/sdb1

# 输出如下
Volume group "ubuntu-vg" successfully extended
```

### 扩容 LV

- 查看 VG

```bash
vgdisplay

# 输出如下
--- Volume group ---
VG Name               ubuntu-vg
System ID             
Format                lvm2
Metadata Areas        2
Metadata Sequence No  3
VG Access             read/write
VG Status             resizable
MAX LV                0
Cur LV                1
Open LV               1
Max PV                0
Cur PV                2
Act PV                2
VG Size               38.99 GiB
PE Size               4.00 MiB
Total PE              9982
Alloc PE / Size       4863 / <19.00 GiB
## 这里是可以扩容的大小
Free  PE / Size       5119 / <20.00 GiB
VG UUID               dhI9ns-7lOI-pXf8-IOWL-F96N-JIYG-ZF6u82
```

- 查看 LV

```bash
lvdisplay

# 输出如下
--- Logical volume ---
## 我们需要用到 LV Path
LV Path                /dev/ubuntu-vg/ubuntu-lv
LV Name                ubuntu-lv
VG Name                ubuntu-vg
LV UUID                e2fKkR-oZeH-WV2A-ltCi-P76v-N9yv-aUtIg1
LV Write Access        read/write
LV Creation host, time ubuntu-server, 2019-05-14 03:13:57 +0800
LV Status              available
# open                 1
LV Size                <19.00 GiB
Current LE             4863
Segments               1
Allocation             inherit
Read ahead sectors     auto
- currently set to     256
Block device           253:0
```

- 扩容 LV

```bash
# 按固定大小追加
lvextend -L +10G /dev/ubuntu-vg/ubuntu-lv

# 按百分比追加
lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv

# 输出如下
Size of logical volume ubuntu-vg/ubuntu-lv changed from <19.00 GiB (4863 extents) to 38.99 GiB (9982 extents).
Logical volume ubuntu-vg/ubuntu-lv successfully resized.
```

- 刷新分区

```bash
resize2fs /dev/ubuntu-vg/ubuntu-lv

# 输出如下
Filesystem at /dev/ubuntu-vg/ubuntu-lv is mounted on /; on-line resizing required
old_desc_blocks = 3, new_desc_blocks = 5
The filesystem on /dev/ubuntu-vg/ubuntu-lv is now 10221568 (4k) blocks long.
```

- 验证是否成功

```bash
lvdisplay

--- Logical volume ---
LV Path                /dev/ubuntu-vg/ubuntu-lv
LV Name                ubuntu-lv
VG Name                ubuntu-vg
LV UUID                e2fKkR-oZeH-WV2A-ltCi-P76v-N9yv-aUtIg1
LV Write Access        read/write
LV Creation host, time ubuntu-server, 2019-05-14 03:13:57 +0800
LV Status              available
# open                 1
## 可以看到磁盘扩容成功了
LV Size                38.99 GiB
Current LE             9982
Segments               2
Allocation             inherit
Read ahead sectors     auto
- currently set to     256
Block device           253:0
```

> **注意：** 不要卸载扩容的磁盘，可能出现丢失数据或是系统无法启动

## 附：异常处理

### 动态扩容提示空间不足

动态扩容时可能会提示 `/etc/lvm/archive/.lvm_xxxxxx: write error failed: No space left on device` 的错误，这是由于磁盘空间使用量已经 100% 了，我们可以使用 `lvresize` 的方式扩容

```bash
lvresize -A n -L +10G /dev/ubuntu-vg/ubuntu-lv
resize2fs -p /dev/ubuntu-vg/ubuntu-lv
```