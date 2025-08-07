# Windows 速查

## Windows API

### 管道(pipe)

Windows 下的管道类似文件，而且使用了 ReadFile WriteFile 这些文件函数进行操作。
其使用上有点像 TCP 客户-服务模式，但是其不同点在于，TCP 服务端会监听一个端口并牢牢把控住端口的使用，之后客户端再连接，所以总是要确保服务端先于客户端启动。管道则不然，客户端管道可以在服务端前占用这个管道，先后是不确定的，这在单任务下没有问题，但是一旦是并发。

## 常见命令和工具

### fsutil

```bat
@rem 查看所有驱动器
fsutil fsinfo drives

@rem 查看指定驱动器的文件系统信息（需要管理员权限）
fsutil fsinfo volumeinfo C:

@rem 查看 disableDeleteNotify 状态
fsutil behavior query disableDeleteNotify
```

### dumpbin

```bat
@rem 打印导出表
dumpbin /exports your.dll

@rem 打印依赖
dumpbin /dependents your.exe

@rem 打印全部
dumpbin /all your.dll
```

### WinDbg

#### 转储文件

### 网络命令

```bash
# 查看网络信息，IP地址等。
ipconfig

# 获取网卡MAC信息，包括虚拟网卡。
getmac /v
```

## 常用库

### [detours](https://github.com/microsoft/Detours)

## 转储文件

