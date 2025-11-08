# PowerShell 速查

```ps1
# 修改策略，让 PowerShell 脚本可执行。
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

```ps1
# 比较文件 a.txt 和 b.txt
Compare-Object -Ref (Get-Content a.txt) -Diff (Get-Content b.txt)
```