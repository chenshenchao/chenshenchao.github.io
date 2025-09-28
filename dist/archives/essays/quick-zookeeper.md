# Zookeeper 速查

```bash
# 单条执行 help
zkCli -server 127.0.0.1:2181 help
# 单条执行 create
zkCli -server 127.0.0.1:2181 create /demo1 AABBCC
# 单条执行 set
zkCli -server 127.0.0.1:2181 set /demo1 123456AABBCC

# 进入交互界面
zkCli -server 127.0.0.1:2181
```
