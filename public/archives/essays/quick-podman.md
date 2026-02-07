# Podman 速查

Podman 大部分命令和 docker 兼容。

```bash
# 查看 podman 信息
podman info

# 查看 容器进程
podman ps
```

[红帽仓库](https://quay.io)

## 常见命令

### build

```bash
# 使用 podmanfile 类似 docker 使用 dockerfile
podman build .

# 使用 dockerfile 时，因为名字需要自己指定文件
podman build -f dockerfile
```

### cp 复制

```bash
# 把容器的内容复制出来
podman cp container_name:/dir ./host/dir
```

### volume 卷

```bash
# 列举卷
podman volume ls
```

```bash
# 查看卷指定目录的内容
podman run --rm -it -v volume-name:/data_dir busybox ls -al /data_dir

# 把卷保存到文件：
podman run --rm -v volume-name:/data_dir -v .:/backup busybox tar -czvf /backup/backup-filename.tar.gz -C /data_dir .

# 通过文件恢复卷：
podman run --rm -v volume-name:/data_dir -v .:/backup busybox tar -xzvf /backup/backup-filename.tar.gz -C /data_dir .
```

## Windows 下安装

### 安装 Podman Desktop（推荐）

- [podman-desktop](https://github.com/podman-desktop/podman-desktop) 源码。
- [Podman Desktop 下载](https://podman-desktop.io/downloads/windows)

### 单独安装 podman （不推荐）

[GitHub Release](https://github.com/containers/podman/releases) 下载后安装，选 WSL2 模式，执行下列初始化：

```bat
@rem 查看初始化的机器
podman system connection list

@rem 初始化虚拟机器
podman machine init

@rem 启动虚拟机
podman machine start

@rem 列举 WSL2 子系统名
wsl -l 

@rem 进入 podman 子系统
wsl -d podman-machine-default
```

```bash
# 修改 仓库镜像文件（内容如下方 ini 配置，配置完成要重启 podman 服务）
sudo vi /etc/containers/registries.conf
```

```ini
# 确保可替换镜像有 docker.io （正常情况下，默认有。）
unqualified-search-registries = ["docker.io"]

# 替换镜像规则
[[registry]]
prefix = "docker.io"
location = "docker.m.daocloud.io"

# 添加镜像域名 可以多组，[[registry]] 必须有才能配置此项。
[[registry.mirror]]
location = "docker.m.daocloud.io"
insecure = true
```

## pod

功能和 docker 的 compose 很接近，好处是不需要 docker-compose.yml 配置文件，坏处也是这点，没有配置文件，每次都输入命令很不现实。

```bash
# 删除 会删除容器
podman pod rm my-pod -f
# 删除时保留指定容器
podman pod rm --keep <podID或名称>
```

### pod 使用 postgres 示例

```bash
# 创建 pod 会共享整个网络，所以 postgres 的端口要靠 pod 指定。
podman pod create --name my-pod -p 5432:5432

# 拉取 postgres 镜像
podman pull postgres:17

# 创建 数据卷
podman volume create postgres17_data

# 运行 postgres 容器 默认用户名 postgres ，指定密码 123456，自动创建数据库 demo
# 指定加入到 my-pod ,此时不能用 -p 指定端口，而应该在创建 my-pod 时就指定。
podman run -itd --name postgres17 -v postgres17_data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=123456 -e POSTGRES_USER=postgres -e POSTGRES_DB=demo --pod my-pod postgres:17

```

```bash
# 删除 pod
# -f 强制删除
podman pod rm -f my-pod

# 停止 pod 的所有容器
podman pod stop my-pod

# 启动 pod 所有容器
podman pod start my-pod
```

## compose

写法和 docker-compose.yml 一致，只是名字改成 podman-compose.yml。命令也基本兼容 docker compose 的命令。

```bash
# 启动
podman compose up -d

# 停止
podman compose down
# 停止并删除数据卷，一般不使用此命令，数据卷就是为了保留状态数据的。
podman compose down -v

# 查看 容器进程
podman compose ps
```

## Windows 与 WSL 相关

Windows 下的容器是通过 WLS2 的虚拟机（podman-machine-default）里的 linux 系统使用的。
Windows 下的容器只能 Windows 宿主机访问，无法像 Docker 的容器在内网被访问。[相关的 GitHub issue](https://github.com/containers/podman/issues/19890)
有时候一些文件有权限问题可以临时进入 WSL 的宿主机去修改文件权限。


```bat
@rem 列举，可以看到 podman-machine-default
wsl --list

@rem 进入虚拟机的命令行
wsl -d podman-machine-default
```

```bash
# 打开系统配置
vi /etc/sysctl.d/99-sysctl.conf

# 应用修改
sysctl -p

# 配置
sudo sysctl -w net.ipv4.ip_unprivileged_port_start=80

# 列举这个挂在会发现会多 c、d、e 这些就是对照 Windows 的 C盘、D盘、E盘等。
ls /mnt
```

```ini
# 允许 80 端口被容器使用
net.ipv4.ip_unprivileged_port_start=80
```