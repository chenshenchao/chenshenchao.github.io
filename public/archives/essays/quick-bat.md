# bat 速查

```bat
@rem 获取当前目录 写到 here_dir 变量里。
for /f "delims=" %%t in ('pwd') do set here_dir=%%t

@rem 配置你的目录 写到 your_dir 变量里。
set your_dir=%here_dir%\inner\folder

@rem 遍历目录 txt 文件并执行命令 %%f 就是文件名。
for /r "%sql_dir%" %%f in (*.txt) do (
    cat %%f
)
```

```bat
@rem 执行 VS2019 的开发环境，举一反三可以设配其他版本 VS
%comspec% /k "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\Tools\VsDevCmd.bat"
```