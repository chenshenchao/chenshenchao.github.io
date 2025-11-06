# Docker 速查

Docker 是一个虚拟化容器实现，其主要应用场景就是“如分布式部署”或“逆分布式部署”（单机部署分布式项目）。
分布式架构因其是在管理大量分布式机器而设计的，天然需要很多机器才能部署，而 Docker 就通过虚拟化，在单机的环境下虚拟出一个“分布式”环境出来。
可用于开发环境（调试或测试）或者被小公司使用（没有机器硬上），这样小公司也勉强能用上一些分布式架构的项目。
但大多分布式架构都会提示：“Docker 部署仅适合开发环境，不要用于生产环境。”。
因为 Docker 是单机上虚拟化“分布式”，那么分布式的优点（多节点容灾，并行）就全没了，反而得了分布式的缺点（调度、管理损耗），性能上要比一般单机项目多耗费分布式的损耗。
但是对于小公司而言机器贵，用户量少，用 Docker 部署能用就行，这也是大多小公司项目不稳定的原因。

Docker 核心功能只能做单节点容器管理，没有集群协调能力。但是 Docker 官方从 1.12 版本开始内置 Docker Swarm 集群方案，但是还是没有 Kubernetes(K8s) 成熟。

## 配置

### daemon.json

由于墙的原因，需要配置国内的仓库源。
如果链接坏了，需要自己找提供这种支持的服务商。
镜像源都是由服务商自己爬取的主仓库的，所有不同镜像源可能会缺少部分镜像，所以多搞几个国内的源可以互相弥补。

- registry-mirrors 镜像源
- insecure-registries 如果部署了自己的本地镜像源，一般没有证书，要配置在此项去掉安全检测。

```json
{
  "registry-mirrors": [
     "https://docker.m.daocloud.io",
     "https://dockerpull.cn"
   ],
  "insecure-registries": ["127.0.0.1:5000"],
  "debug": true,
  "experimental": false
}
```

### 网络

在同个 compose.yml 的同一个网络下的容器，容器名会被解析到该容器的内网IP，host.docker.internal 被解析到宿主机的内网 IP。
所以在一些应用里，可以直接  tcp://redis-container-name  就相当于 tcp://174.xx.xx.xx，因为域名 redis-container-name 被解析到 Redis 的容器上了。
而容器要访问宿主则通过 host.docker.internal 域名。

防火墙：如果无法访问外网，查看 Firewalld 目录，IP 转发。开启 IP 转发后就可以访问外网。

## 常用命令

### 日志(logs)

容器日志默认路径（cid 为容器ID）：
/www/server/docker/containers/{cid}/{cid}-json.log

```bash
# mycontainer 容器名
# --since 开始时间 可选
# --tail 条数
docker logs --since "2016-06-01" --tail 10 mycontainer

# -f 命令行持续监听
# -t 显示时间戳，如果日志自带时间戳，可以不用。
docker logs mycontainer --tail 10 -f -t
```

### 镜像(image)

```bash
# 查看镜像
docker images

# grep 指定正则 清除镜像
docker images | grep 'your_mark[[:space:]]*<none>' | awk '{print $3}' | xargs -r docker rmi -f

# 清除 <none> 的镜像
docker rmi $(docker images | grep "<none>" | awk '{print $3}')
```

以下两种方式都可以上传镜像，但是建议用 build 而不是把手动修改的容器 commit 成镜像。
手动修改的镜像没有 dockerfile 显式脚本，难以溯源。

```bash
# 把容器 container 的内容提交成 author/image:tag 镜像
docker commit container author/image:tag

# 把 author/image:tag 推到 DockerHub（需登录）
docker push author/image:tag

# 在 . 路径下找到 dockerfile 并构建镜像 author/image:tag
docker build -t author/image:tag .
```

有时候因为网络问题，比如线上连不上镜像仓库，此时如果本地开发环境有镜像，可以用以下方式把本地镜像打包成tar传到服务器，在服务器上加载这个镜像。

```bash
# 把容器导出成 *.tar 文件。
docker save -o filename.tar image/one [image/two...]

# 把文件里得容器导出。
# --quiet, -q 精简输出信息
docker load -q -i filename.tar
```

### cp 复制

```bash
# 路径可以是文件夹
# 从容器复制文件下来
# docker cp <container_id>:<container_path> <host_path>
docker cp container_name:/dir ./host/dir

# 复制文件到容器上
# docker cp <host_path> <container_id>:<container_path>
docker cp ./host/dir container_name:/dir
```

### volume 卷

```bash
# 列举卷
docker volume ls

# 创建命名卷 docker_mysql_data
docker volume create docker_mysql_data
```

```bash
# 查看命名卷 docker_mysql_data 里面的 /var/lib/mysql 目录下的内容。
docker run --rm -it -v docker_mysql_data:/var/lib/mysql busybox ls -al /var/lib/mysql
```

### network 命令

```bash

# 创建网络
docker network create mynet

# 创建桥接网络
docker network create -d bridge mynet

# 指定网段（可能被占用）
docker network create --subnet=172.18.0.0/16 mynet

# 查看网络列表
docker network ls

# 查看网络信息
docker network inspect mynet

# 可以连接网络
docker network connect --alias networkalias mynet container

# 连接网络指定 IP (只能是用户定义的网络且指定了网段(subnet)才能指定 IP)
docker network connect --ip 172.18.0.4 mynet container

# 删除网络
docker network rm mynet

# 也可以在创建容器时，用 network 参数选中网络，network-alias 来定义域名，可以 ping networkname 通。
docker run --network mynet --network-alias networkalias
```

### compose

通过 docker-compose.yml 文件定制容器组合。

```bash
# 启动 compose 脚本
# -d 加入这个参数让脚本执行后进入守护进程，不然会阻塞，终止命令容器删除。
docker compose up -d

# 逆 compose up，去掉容器
docker compose down 

# 逆 compose up, 同时把自定义 dockerfile 镜像删除
docker compose down --rmi local

# 逆 compose up, 同时把所有镜像删除
docker compose down --rmi all
```

```yml
services:
  demo-server:
    container_name: my-container-server # 指定容器名
    build: # 指定使用本地的 dockerfile 进行构建镜像，而不是拉取
      context: . # 构建目录
      dockerfile: dockerfile # dockerfile 名字
    restart: always # 一直重启
    ports: # 指定端口映射
      - "8080:8080" 
      - "9090:9090"
    volumes: 
      - mysql_data:/data # 使用命名卷
      - ./host/dir:/container/dir:ro # 只读 readonly
    networks: # 指定网络
      - my-net
    security_opt:
      # 特权容器无限制，不然报没权限。
      - seccomp:unconfined

networks: # 配置网络
  my-net:
    name: my-net
    driver: bridge

# 命名卷可以规避一些 Windows 和 Linux 系统的不兼容问题
# 通过临时容器导出内容（推荐，可以保留文件系统的兼容性）：
# docker run --rm -v <volume-name>:/data_dir -v .:/backup busybox tar -czvf /backup/<backup-filename>.tar.gz -C /data_dir .
# 或者通过 podman cp 导出命名卷的文件（这种只适合查看文件，一旦进入 Windows 系统就会出现兼容问题）。
# 再通过创建卷恢复
# docker run --rm -v <volume-name>:/data_dir -v .:/backup busybox tar -xzvf /backup/<backup-filename>.tar.gz -C /data_dir .
volumes:
  mysql_data:                                   # 定义命名卷
    driver: local
```

#### compose 下指定容器

有时候需要对特定容器做操作，此时可以指定容器名操作特定的容器。

```bash
# 指定 container-name 停止
docker compose stop container-name

# 指定 container-name 下
docker compose down container-name --rmi local

# 指定 container-name 上
docker compose up container-name -d
```