# Kubernetes 速查

Kubernetes（K8s）是个容器化的集群管理方案，可协调集群内的机器作为同一个工作单元运行。
解决一个项目无法由单台机器完成，必须采用分布式把项目部署到多台机器组成的集群。
一般小公司不使用 K8s，因为项目很小，一台机器就能容纳整个项目，常常一台机器里好几个完全独立的项目。
小公司更倾向于使用“宝塔”或者“1Panel”这种服务器控制面板，容器也只使用 Docker 来给机器里的项目做资源划分和隔离。
K8s 的容器化早期是基于 Docker 的运行时，后来改用 containerd 作为容器运行时。
K8s 生产级集群至少需要 3 个节点，minikube 可以在单节点开发用于开发、学习和测试的本地环境。

## kubectl

```bat
@rem 下载后放到 PATH 的某个目录下。
curl.exe -LO "https://dl.k8s.io/release/v1.33.3/bin/windows/amd64/kubectl.exe"

@rem 也可以用 winget 安装
winget install -e --id Kubernetes.kubectl
```

```bat
@rem 查看版本
kubectl version --client
kubectl version --client --output=yaml

@rem 查看版本会去查客户端和服务端，所以集群没搭建起来会报错。
kubectl version

@rem 查看 pods
kubectl get pods -A

@rem 删除 pod
kubectl delete pod <pod名称> -n <命名空间>
kubectl delete pod metrics-server-b97f5869f-r7xsl -n kube-system 

@rem 查看 服务
kubectl get svc -A

@rem 查看集群状态
kubectl cluster-info

@rem 查看集群日志
kubectl cluster-info dump

@rem 查看集群节点使用率
kubectl top node

@rem 查看 pod 使用率
kubectl top pod -n kube-system
```

## minikube

用于开发、学习、测试环境，单机部署。

```bat
@rem Windows 下 winget 安装（需要管理员权限） 或者 官网自己下载 exe 安装包
winget install Kubernetes.minikube
```

```bash
# 开始集群
minikube start
# 指定国内镜像, --driver=docker 指定 Docker 默认是 podman
# --registry-mirror 指定 仓库镜像 https://registry.cn-hangzhou.aliyuncs.com  https://docker.m.daocloud.io
# --image-repository 指定 镜像仓库
minikube start --image-mirror-country='cn' --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers --registry-mirror=https://docker.m.daocloud.io

# 启动失败可以删除在执行 start
minikube stop
minikube delete

# 启动 看板依赖的插件。
minikube addons enable metrics-server

# 开启仪表板，如果失败可以查看状态，可能是镜像没拉到，看下面处理。
minikube dashboard

# 关闭看板
minikube addons disable dashboard
# 打开看板
minikube addons enable dashboard

# 查看插件列表
minikube addons list

# 进入节点终端
minikube ssh
```

面板启动失败处理：
```bat
@rem 方法1
@rem 查看 dashboard 状态
@rem 我使用时是如下两个镜像没有拉取到：
@rem   kubernetesui/dashboard:v2.7.0
@rem   kubernetesui/metrics-scraper:v1.0.8
kubectl get pods -A
kubectl get pods -n kubernetes-dashboard
kubectl get svc -n kubernetes-dashboard

@rem 修改 metrics-server 的部署配置，可以改 image 为国内镜像 docker.m.daocloud.io
@rem 可能因为版本太新，国内镜像源就没有这个版本的镜像。
@rem 也可能是 哈希值不对，可能国内镜像动了手脚，把比对散列删了就是。
kubectl edit deployment metrics-server -n kube-system
kubectl edit deployment kubernetes-dashboard -n kubernetes-dashboard
kubectl edit deployment dashboard-metrics-scraper -n kubernetes-dashboard

@rem 改完 查看会发现会有个新的 pod 在创建。把旧的 pod 删了，不然新的容器会一直卡在创建阶段。
kubectl get pods -A
kubectl delete pod metrics-server-b97f5869f-6ghsk -n kube-system
kubectl delete pod kubernetes-dashboard-7676c7c79b-vvxrs -n kubernetes-dashboard
kubectl delete pod dashboard-metrics-scraper-79d66455d-zhh4z -n kubernetes-dashboard

@rem 可以多次删旧 pod 然后 禁用 在 启用 看板，来删除干净旧 pod。
minikube addons disable dashboard
minikube addons enable dashboard

@rem metrics-server 也是如此操作。
minikube addons disable metrics-server
minikube addons enable metrics-server

@rem 不过它们的机制不太相同，要自己多查看 pod ，删除试试。
```

```bat
@rem 方法2 试了不起效。
@rem podman 手动拉到本地 
podman pull kubernetesui/dashboard:v2.7.0
podman pull kubernetesui/metrics-scraper:v1.0.8

@rem minikube 加载（好似无效，导入后没查到有镜像。）
minikube image load kubernetesui/dashboard:v2.7.0
minikube image load kubernetesui/metrics-scraper:v1.0.8
```


```bat
@rem 重新 生成容器
minikube stop
minikube delete
minikube start --image-mirror-country='cn' --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers --cpus=4 --memory=8192
```

## kind cluster

```bat
@rem 可以安装，但是 kind.exe 无法在 Win11 上运行。
go install sigs.k8s.io/kind@v0.29.0 && kind create cluster
```