# WSL 速查

Windows 下 ~\AppData\Local\Microsoft\WindowsApps\ubuntu2204.exe 可以找到各个子系统命令。

此路径代表 wsl 可通过此路径读 wsl 的内容，文件资源管理器可打开，写入有权限限制：
```
\\wsl$
```

```bat
@rem 设置默认用户为 root
ubuntu2204.exe --default-user root
```

## 配置

配置文件在用户目录里 ~/.wslconfig 。

```ini
[wsl2]
memory=8GB  # 限制 WSL 虚拟机使用 8GB
swap=0
localhostForwarding=true
processors=4 # 设置 WSL 虚拟机使用 4 处理器。
```

### Windows Defender 入站规则（管理员身份）

```pwsh
New-NetFirewallRule -DisplayName "WSL" -Direction Inbound  -InterfaceAlias "vEthernet (WSL)"  -Action Allow
```