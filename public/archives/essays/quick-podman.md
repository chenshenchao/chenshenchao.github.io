# Podman 速查

Podman 大部分命令和 docker 兼容。

## Windows 下安装

### 安装 Podman Desktop（推荐）

[Podman Desktop 下载](https://podman-desktop.io/downloads/windows)

### 单独安装 podman （不推荐）

[GitHub Release](https://github.com/containers/podman/releases) 下载后安装，选 WSL2 模式，执行下列初始化：

```bat
@rem 查看初始化的机器
podman system connection list

@rem 初始化虚拟机器
podman machine init

@rem 启动虚拟机
podman machine start
```
