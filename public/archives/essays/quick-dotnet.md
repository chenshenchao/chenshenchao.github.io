# dotnet 速查

```bash
# 安装 ef 命令行工具
dotnet tool install --global dotnet-ef

# 更新 ef 命令行工具
dotnet tool update --global dotnet-ef
```

## 单文件打包

```bash
# --self-contained 随应用程序一起发布 .NET 运行时，这样就不需要在目标计算机上安装运行时。

# Linux
dotnet publish -r linux-x64 --self-contained=true /p:PublishSingleFile=true

# 指定路径 -o <path>
dotnet publish -o ./publish -r linux-x64 --self-contained=true /p:PublishSingleFile=true

# 设置发布版本 Release
dotnet publish -r linux-x64 --self-contained=true /p:PublishSingleFile=true /p:Configuration=Release

# Windows
dotnet publish -r win-x64 --self-contained=false /p:PublishSingleFile=true

## IncludeAllContentInSingleFile 将所有发布的文件（符号文件除外）打包到单文件中。
## IncludeNativeLibrariesInSingleFile 将依赖的本机二进制文件打包到单文件应用程序中。
## IncludeSymbolsInSingleFile 将 .pdb 文件打包到单个文件中。
dotnet publish -r win-x64 --self-contained=false /p:PublishSingleFile=true /p:IncludeNativeLibrariesInSingleFile=true /p:IncludeSymbolsInSingleFile=true /p:IncludeAllContentInSingleFile=true
```

### 在 csproj 文件里面以配置的形式设置。

配置在文件里面就可以省去命令参数，让 publish 命令更简短。

```xml
<PropertyGroup>
  <TargetFramework>net5.0</TargetFramework>
  <RuntimeIdentifier>linux-x64</RuntimeIdentifier>
  <PublishSingleFile>true</PublishSingleFile>
  <IncludeNativeLibrariesInSingleFile>true</IncludeNativeLibrariesInSingleFile>
  <IncludeContentInSingleFile>true</IncludeContentInSingleFile>
</PropertyGroup>
```

## Windows Kits 使用

Windows 开发工具是专门提供 Windows 系统功能的开发工具库包，驱动开发等都囊括其中。

### .NET 5 及之后使用 Windows Kits 

直接在目标框架上指定 Windows 系统并接上 Windows Kits 版本号。

```xml
<!-- 后面一串是 Windows Kits 的版本号，会自动引入。 -->
<TargetFramework>net8.0-windows10.0.22621.0</TargetFramework>
```

### .NET 5 之前（旧）使用 Windows Kits 

很原始，需要自己复制 Windows.winmd 并引入，还要复制 .net framework 4.* 的 System.Runtime.WindowsRuntime.dll 并引入。

依赖的程序集 Windows.winmd 在 UnionMetadata 下的才有蓝牙，其他的不一定有。路径如： "c:/Program Files (x86)/Windows Kits/10/UnionMetadata/10.0.22621.0/Windows.winmd"

## dotnet ef 工具

### 迁移（Migration）

迁移用于定义数据库生成结构脚本，这样每次都能通过这个脚本还原数据库的结构。
迁移有幂等和顺序的特点，可以随时恢复到某个时间段的数据结构。但是不保证数据的恢复。所以迁移主要用于开发和部署，以及线上更新到最新的数据结构。

```bash
# 查看 DbContext 配置信息，可以通过下面的 DbFirst 生成 DbContext
dotnet ef dbcontext info

# 创建迁移脚本 InitialCreate
dotnet ef migrations add InitialCreate

# 列举 迁移脚本
dotnet ef migrations list

# 执行 迁移脚本 指定生产环境
dotnet ef database update -v -- --environment Production
```

### DbFirst（Database First）

通过数据库生成结构代码。

```bash
# -v 打印更多信息
# -f 强制执行

# Sqlite，数据库文件没有的话会帮你创建文件。
dotnet ef dbcontext scaffold "Data Source=demo.db" "Microsoft.EntityFrameworkCore.Sqlite" --data-annotations --no-onconfiguring -c YourDbContext -o Entities -f -v

# MySQL
dotnet ef dbcontext scaffold "server=127.0.0.1;port=3306;database=demo;uid=root;pwd=password;CharSet=utf8mb4;SslMode=none" "MySql.EntityFrameworkCore" -o Entities --data-annotations --no-onconfiguring -c YourDbContext -f -v
```

### 打包

把迁移脚本打包成一个可执行文件 efbundle 解决源码不好发布出去的问题。
运行 efbundle 相当于执行 dotnet ef migrations update 命令。

```bash
# 打包
dotnet ef migrations bundle

dotnet ef migrations bundle --self-contained

# 打包容器和指定平台
dotnet ef migrations bundle --self-contained -r linux-x64
```

### 通过代码运行

```csharp
public static async Task Main(string[] args)
{
    var host = CreateHostBuilder(args).Build();

    using (var scope = host.Services.CreateScope())
    {
        var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        await db.Database.MigrateAsync();
    }

    host.Run();
}
```