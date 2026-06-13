# [草稿] MinIO 速查

- [minio](https://github.com/minio/minio)
- [mc](https://github.com/minio/mc) minio 命令行客户端

GO 实现的兼容 S3 的对象存储。

## 命令

```bash
# 安装 minio
go install github.com/minio/minio@latest

# （测试可选，正式最好修改）设置管理员账号，默认账号密码 minioadmin minioadmin
export MINIO_ROOT_USER=myadmin
export MINIO_ROOT_PASSWORD=Admin@123456

# 启动服务 数据存储在 ./data 目录
# 旧版 API和控制面板都是 9000 端口，新版控制面板端口会随机
# --address :9000， 指定 API 在 9000 端口
# --console-address :9001，给控制面板指定另外的端口。
minio server ./data --console-address :9001
```

### mc 命令

社区版本 ROOT 操作（创建账号等）只能通过 mc 命令。

```bash
# 安装 mc
go install github.com/minio/mc@latest

# 链接别名 local 指向  http://localhost:9000 账号 minioadmin 密码 minioadmin
mc alias set local http://localhost:9000 minioadmin minioadmin

# 创建桶 new-bucket
mc mb local/new-bucket

# 设置 桶/目录 匿名权限（没有账号的访问）为：
# private 私有 不可读写（这个是默认的）
# public 公开 可读写
# download 下载 仅可读
# upload 上传 仅可写
mc anonymous set public local/new-bucket

# 上传文件 test.jpg 到 桶里
mc put ./test.jpg local/new-bucket/

mc get local/new-bucket ./test2.jpg

# 列出所有桶
mc ls local
# 列出桶下面的文件。
mc ls local/new-bucket
```

```bash
# 查看 local 的信息。
mc admin info local

# 新建 local 的业务子用户 devuser
mc admin user add local devuser Dev@123456

# 分配 local 的 devuser 全局读写权限
mc admin policy set local readwrite user=devuser

# 查看 local 全部用户
mc admin user list local
```