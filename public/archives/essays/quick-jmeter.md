# JMeter 速查

- *.jmx 文件是测试项目文件。

## 概念

### 线程（用户）

执行单元。

#### 采样器（Sampler）

执行命令，具体是操作方式。

### 监听器

#### 汇总报告（Summary Report）

汇总报告可以查看任务的执行信息。


## 客户模式命令

```bash
# 打开客户端
jmeter

# 使用代理
jmeter -E https -H my.proxy.server -P 8000 -u username -a password -N localhost

# 使用控制远程节点服务器
jmeter -Rmy.proxy.server,127.0.0.1,host2
```

```ini
# jmeter.properties
# 远程节点
remote_hosts=127.0.0.1:8000,localhost:5643,192.168.0.123:45678
```

## 服务器模式

服务器模式可以在远程节点上启动，作为客户端控制的节点来发起多节点的请求。

```bash
# 生成 JKS 密码 changeit 配合 jmeter.properties 默认配置
keytool -genkey -alias rmi -keyalg RSA -keystore rmi_keystore.jks
```

```bash
# 启动远程节点，服务器模式
jmeter-server -H my.proxy.server -P 8000
jmeter-server -H 127.0.0.1 -P 8000
```