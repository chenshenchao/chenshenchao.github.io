# Docker 速查

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