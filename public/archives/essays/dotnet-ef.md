# dotnet ef

## 迁移（Migration）

迁移用于定义数据库生成结构脚本，这样每次都能通过这个脚本还原数据库的结构。
迁移有幂等和顺序的特点，可以随时恢复到某个时间段的数据结构。但是不保证数据的恢复。所以迁移主要用于开发和部署，以及线上更新到最新的数据结构。

```bash
# 安装 命令行工具
dotnet tool install --global dotnet-ef

# 更新 命令行工具
dotnet tool update --global dotnet-ef

# 查看 DbContext 配置信息，可以通过下面的 DbFirst 生成 DbContext
dotnet ef dbcontext info

# 创建迁移脚本 InitialCreate
dotnet ef migrations add InitialCreate

# 列举 迁移脚本
dotnet ef migrations list

# 执行 迁移脚本 指定生产环境
dotnet ef database update -v -- --environment Production
```

## DbFirst（Database First）

通过数据库生成结构代码。

```bash
# -v 打印更多信息
# -f 强制执行

# Sqlite，数据库文件没有的话会帮你创建文件。
dotnet ef dbcontext scaffold "Data Source=demo.db" "Microsoft.EntityFrameworkCore.Sqlite" --data-annotations --no-onconfiguring -c YourDbContext -o Entities -f -v

# MySQL
dotnet ef dbcontext scaffold "server=127.0.0.1;port=3306;database=demo;uid=root;pwd=password;CharSet=utf8mb4;SslMode=none" "MySql.EntityFrameworkCore" -o Entities --data-annotations --no-onconfiguring -c YourDbContext -f -v
```