# SSH 速查

## ssh 命令

只要远程主机的用户的 .ssh/authorized_keys 文件里有你的公钥，就可以用 ssh 连接。

```bat
@rem 生成密钥 RSA
ssh-keygen -t rsa -b 4096
@rem 生成密钥 ECC  
@rem 256 位椭圆曲线（nistp256）
ssh-keygen -t ecdsa -b 256
@rem 384 位（nistp384）
ssh-keygen -t ecdsa -b 384
@rem 521 位（nistp521）
ssh-keygen -t ecdsa -b 521
@rem 推荐，现代的椭圆曲线 ed25519
ssh-keygen -t ed25519

@rem 指定 .pub 的备注为邮箱
ssh-keygen -t ed25519 -C chenshenchao@outlook.com

@rem 连接 进入命令行交互模式
ssh root@remote_ip:remote_port

@rem 连接后直接执行命令
ssh root@remote_ip:remote_port "cd /home; uname -a; pwd"
ssh root@remote_ip:remote_port "cd /www/wwwroot/; chown -R www:www . ; chmod -R 755 ."
```

```bash
# 正向代理，把本地端口投射到远程。
# 一般用来翻墙，可以把请求到本地端口的请求转发给远程服务器，让服务器发出。
# -N 不登陆
# -L <local_port:remote_ip:remote_port> <root@remote_ip:remote_port> 指定本地转发参数
# -i 指定密钥文件
ssh -N -L local_port:remote_ip:remote_port root@remote_ip:remote_port -i ~/your_key

# 反向代理，把本地端口投射到远程
# 一般用于内网穿透，暴露本地服务器。
# -N 不登陆
# -R <remote_port:remote_ip:local_port> <root@remote_ip:remote_port> 指定远程转发参数
# -i 指定密钥文件
ssh -N -R remote_port:remote_ip:local_port root@remote_ip:remote_port -i ~/your_key

# socks5 代理
# 单个服务器节点代理，没有 v2ray 好用，容易被封。
ssh -N -D :10808 root@remote_ip:remote_port -i ~/your_key
```

### 配置

路径：~/.ssh/config

```ini
# 与服务器保持间隔 50 秒，最大 3 次
ServerAliveInterval 50
ServerAliveCountMax 3

# 通过不同 Host 使用不同配置
# Host 可以被 git 命令识别为域名的别名。

Host gitlab(user)
    HostName target.com
    User root

Host github(publickey)
    HostName github.com
    User git
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github

Host reaspberrypi
    HostName 192.168.0.123
    User pi
```

## scp 命令

```bash
# 本地 /local/path/ 复制到 远程 remote_ip 的 /remote/path/ 目录下
# 注：都是以斜杠结尾
scp -r /local/path/ root@remote_ip:/remote/path/

# 本地 /local/path/ 复制到 远程 remote_ip 的 /remote/path/ 目录下
# -i 指定密钥文件
# 注：都是以斜杠结尾
scp  -i ~/yout_key -r /local/path/ root@remote_ip:/remote/path/
```

## sshd

### Windows 下 OpenSSH Server 配置

“设置” 搜索 “可选功能” 添加 "OpenSSH 服务器"。


默认配置路径：C:\ProgramData\ssh\sshd_config

```ini
# 启用公钥
PubkeyAuthentication yes
# 指定授权文件路径
AuthorizedKeysFile .ssh/authorized_keys
# 禁用密码
PasswordAuthentication no

# prohibit-password 是默认值，会禁止 root 使用密码登录
# yes 就是开启 root 密码登录
PermitRootLogin prohibit-password
```