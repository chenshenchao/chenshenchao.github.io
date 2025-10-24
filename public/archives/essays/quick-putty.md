# Putty 速查

- [转换工具 PuttyGen](https://www.puttygen.com/download-putty)

免费开源的SSH/Telnet 客户端命令行工具，不少图形工具的 SSH 功能是对其的封装。

```bash
# 安装工具 rpm
yum install putty
# 安装工具 dpkg
apt install putty-tools
```

```bash
# 转换 id_rsa 文件为 id_rsa.ppk
puttygen id_rsa -o id_rsa.ppk -O private
```

