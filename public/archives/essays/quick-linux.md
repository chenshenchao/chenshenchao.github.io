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
