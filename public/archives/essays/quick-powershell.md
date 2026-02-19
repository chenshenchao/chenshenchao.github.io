# PowerShell 速查

- [GitHub 源码仓库](https://github.com/PowerShell/PowerShell)

```ps1
# 修改策略，让 PowerShell 脚本可执行。
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

```ps1
# 比较文件 a.txt 和 b.txt
Compare-Object -Ref (Get-Content a.txt) -Diff (Get-Content b.txt)
```

```ps1
# 配置HTTP代理
$env:HTTP_PROXY="http://127.0.0.1:10808"
$env:HTTPS_PROXY="http://127.0.0.1:10808"
```