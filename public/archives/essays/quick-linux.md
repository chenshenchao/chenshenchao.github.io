# Linux 速查

## 常用命令

```bash
# 查看系统信息
uname -a
uname -m
lsb_release -a
cat /etc/os-release
cat /etc/issue
cat /proc/version
hostnamectl

# 查看IP 
hostname -I

# 查看 glibc 版本
ldd --version

# 查到 DNS 配置文件,WSL 下可看到宿主信息
cat /etc/resolv.conf
cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }'

# 修改权限
cd /www/wwwroot/
chown -R www:www .
chmod -R 755 .

# 创建目录
# -p 递归创建，已经存在不会报错
mkdir -p /www/wwwroot/your_dir
```

```bash
# 查看文件
more bigfile.txt

# 查看文件，more 的升级版本。
less bigfile.text

# 查看文件信息，比如文本文件字符集（不一定准确）
file -i file.txt
```

```bash
# 得到真随机的 hex
# /dev/random 可以拿到机器采集的真随机数流。但是拿光了会阻塞等待采集。
head -c 100 /dev/random | xxd -p

# 得到真随机的 hex
# /dev/urandom 可以拿到机器采集的真随机数流。拿光了会复用之前旧的采集数据。
head -c 100 /dev/urandom | xxd -p
```

### apt

apt 是 debian 以及 ubuntu 的软件管理器。
由于墙的原因时常需要使用国内镜像。
/etc/apt/sources.list

- [阿里源](https://developer.aliyun.com/mirror/)
- [阿里源 ubuntu](https://developer.aliyun.com/mirror/ubuntu)

```bash
# 阿里云镜像
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
sudo sed -i 's/security.ubuntu/mirrors.aliyun/g' /etc/apt/sources.list
sudo sed -i 's/archive.ubuntu/mirrors.aliyun/g' /etc/apt/sources.list
sudo apt update
# //更新已安装的包到最新，这个是可选的
sudo apt-get upgrade
```

```bash
# 清华镜像源
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
sudo sed -i 's#http://security.ubuntu.com#https://mirrors.tuna.tsinghua.edu.cn#g' /etc/apt/sources.list
sudo sed -i 's#http://archive.ubuntu.com#https://mirrors.tuna.tsinghua.edu.cn#g' /etc/apt/sources.list
sudo apt update
sudo apt-get upgrade
```

```ini
# 中科大镜像
deb http://mirrors.ustc.edu.cn/ubuntu/ xenial main restricted universe multiverse
deb http://mirrors.ustc.edu.cn/ubuntu/ xenial-security main restricted universe multiverse
deb http://mirrors.ustc.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse
deb http://mirrors.ustc.edu.cn/ubuntu/ xenial-proposed main restricted universe multiverse
deb http://mirrors.ustc.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ xenial main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ xenial-security main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ xenial-proposed main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse


# 清华镜像
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security multiverse
```

```bash
# apt 启用代理， WSL 代理监听端口要 0.0.0.0 不要只接收 127.0.0.1 
apt install android-sdk -o Acquire::http::proxy=http://172.18.208.1:10808

sudo apt-get update # 更新源
sudo apt-get install package # 安装包
sudo apt-get remove package # 删除包
sudo apt-cache search package # 搜索软件包
sudo apt-cache show package  # 获取包的相关信息，如说明、大小、版本等
sudo apt-get install package --reinstall  # 重新安装包
sudo apt-get -f install  # 修复安装
sudo apt-get remove package --purge # 删除包，包括配置文件等
sudo apt-get build-dep package # 安装相关的编译环境
sudo apt-get upgrade # 更新已安装的包
sudo apt-get dist-upgrade # 升级系统
sudo apt-cache depends package # 了解使用该包依赖那些包
sudo apt-cache rdepends package #  查看该包被哪些包依赖
sudo apt-get source package # 下载该包的源代码
sudo apt-get clean && sudo apt-get autoclean # 清理无用的包
sudo apt-get check # 检查是否有损坏的依赖
```

### yum

## 服务

服务的目录 /etc/systemd/system/ 

### 自定义服务

可以到 /etc/systemd/system/ 复制一个服务的配置，然后修改自己的服务，权限必须 644/root 。

```bash
# 使能服务 myapp.service
systemctl enable myapp
# 禁用服务 myapp.service
systemctl disable myapp
# 每次修改配置都要重载服务配置
systemctl daemon-reload

# 查看服务状态
systemctl status myapp
# 启动服务
systemctl start myapp
# 停止服务
systemctl stop myapp
# 查看服务日志
journalctl -u myapp.service
# 实时跟踪日志
journalctl -u myapp.service -f
# 查看最近 100行日志
journalctl -u myapp.service --lines 100
```

#### 精简例子

```ini
[Unit]
Description=My Python Application
After=network.target

[Service]
User=www          # 运行服务的用户
Group=www         # 运行服务的组
WorkingDirectory=/www/wwwroot/myapp  # 工作目录
ExecStart=/usr/bin/python3 /www/wwwroot/myapp/main.py  # 启动命令
Restart=always         # 服务崩溃时自动重启
RestartSec=3           # 重启前等待3秒

[Install]
WantedBy=multi-user.target  # 多用户模式下启动
```

#### 列举

```ini
[Unit]
# 你服务的描述
Description=Your Server
#
Documentation=man:sshd(8) man:sshd_config(5)
# 这里要求在哪些服务之后启动，开机时确保服务顺序，所以不是必须。
After=network.target sshd-keygen.target
#
Wants=sshd-keygen.target

[Service]
# 指定用户
User=www
# 指定用户组
Group=www
# 类型，这个不是必须。
Type=notify
# 直接配置环境变量
Environment=MYAPP_DEBUG=true
# 指定环境变量文件
EnvironmentFile=-/etc/crypto-policies/back-ends/opensshserver.config
EnvironmentFile=-/etc/sysconfig/sshd
# 工作目录
WorkingDirectory=/var/www/myapp 
# 服务启动的命令
ExecStart=/usr/sbin/sshd -D $OPTIONS $CRYPTO_POLICY
ExecReload=/bin/kill -HUP $MAINPID
KillMode=process
# 被关闭时重启的模式，on-failure 失败即重启， always 总是重启。
Restart=on-failure
# 重启等待秒数
RestartSec=42s

[Install]
# 多用户模式下启动
WantedBy=multi-user.target
```

### sshd 安全远程命令行服务



### firewalld 防火墙

```bash
# 启动
systemctl start firewalld

# 默认情况下 firewalld 会禁止转发流量。
# 查看转发，默认 no；开启 yes
firewall-cmd --query-masquerade

# 永久开启 IP 地址转发
firewall-cmd --add-masquerade --permanent

# 重启防火墙
firewall-cmd --reload
```

### crontab 计划任务

- crond 是 crontab 的服务，每次修改都要重启该服务。

```bash
# 编辑计划任务
crontab -e

# 查看计划任务
crontab -l

# 用 systemctl 重启
systemctl restart crond

# 用 service 重启
service crond restart
```

#### Crontab 定时任务格式

```bash
# * 代表所有可能值。
# , 列举可能值之间不能有空格，例：1,2,23,56。
# - 范围值，例：2-6 等价于 2,3,4,5,6
# / 可以用来表示值间隔，例如：0-8/2 代表 0 到 23 间隔是 2,等价于 0,2,4,8
# 例 * 分别是 (0-59) 分, (0-23) 时，(1-31)日，(1-12)月，(0-7) (周日为 0 或 7)星期几
# 接下来是 用户名 和 命令
* * * * * username command
```

### pureftpd 文件传输服务

虽然说现在基本上 sftp 替代 ftp 了，但是还是有不少小公司的老服务器在使用 ftp 服务。
pureftpd 算是比较常见的，虽然有 宝塔 封装了图形界面，但是有时还是用命令行操作方便点，尤其是写脚本自动化的时候。

```bash
# 显示 help
pure-pw --help

# pure-pw 有些没有加到 PATH 里面，所以直接到安装路径下去执行。
# ftpuser 通过 cat /etc/passwd 对应
# pureftpd 通过查看配置 SyslogFacility 指定 /etc/passwd 里面的
# 添加用户 user1  
# 指定路径 -d /var/www/site1  系统的 user1 要有访问权限
pure-pw useradd user1 -u ftpuser -g ftpgroup -d /var/www/site1

# 修改密码
pure-pw passwd user1

# 刷新用户数据。
pure-pw mkdb

# 显示用户列表
pure-pw list

# 显示用户（查看已有用户参考配置）
pure-pw show user1
```