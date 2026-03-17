# dotnet 速查

```bash
# 安装 ef 命令行工具
dotnet tool install --global dotnet-ef

# 更新 ef 命令行工具
dotnet tool update --global dotnet-ef
```

## 官方库和工具

- [dotnet 源码](https://github.com/microsoft/dotnet)
- [aspnetcore](https://github.com/dotnet/aspnetcore)
- [blazor](https://github.com/dotnet/blazor) 已经合并到 aspnetcore 里。
- [roslyn](https://github.com/dotnet/roslyn) .NET 编译器平台。
- [runtime](https://github.com/dotnet/runtime) .NET 虚拟机源码。
- [efcore](https://github.com/dotnet/efcore)
- [yarp](https://github.com/dotnet/yarp) HTTP 代理。
- [TorchSharp](https://github.com/dotnet/TorchSharp) pytorch 封装。
- [machinelearning](https://github.com/dotnet/machinelearning) 机器学习框架。
- [Open-XML-SDK](https://github.com/dotnet/Open-XML-SDK) Excel（xlsx）、Word（dosx）基于 XML 格式的处理库。 
- [maui](https://github.com/dotnet/maui)
- [spark](https://github.com/dotnet/spark) dotnet 接入 spark 的库。
- [Microsoft.Maui.Graphics](https://github.com/dotnet/Microsoft.Maui.Graphics) 实验性的跨平台图形渲染库。
- [ILMerge](https://github.com/dotnet/ILMerge) 把多个 .NET 程序集合并成一个的工具，已经不维护，依赖 .NET 4 运行时。

## 常用库

- [cecil](https://github.com/jbevain/cecil) IL 注入、.NET 程序集修改生成库。
- [ILPack](https://github.com/Lokad/ILPack) .NET Core IL 生成器。
- [Natasha](https://github.com/dotnetcore/Natasha) 基于 roslyn 动态编译加载 C# 代码的库。
- [EPPlus](https://github.com/JanKallman/EPPlus) Excel 处理库，已迁移。
- [EPPlus](https://github.com/EPPlusSoftware/EPPlus) Excel 处理库。
- [ExcelDna](https://github.com/Excel-DNA/ExcelDna) Excel 扩展 .xll 自定义计算函数开发工具。
- [NetOffice](https://github.com/NetOfficeFw/NetOffice) 微软Office（Excel、Word等）插件开发工具。
- [FastReport](https://github.com/FastReports/FastReport) 支持 Excel、Word 等的报表库，有收费版。
- [CommunityToolkit](https://github.com/CommunityToolkit/dotnet) 工具集合。
- [NumSharp](https://github.com/SciSharp/NumSharp) 类 Numpy 的库。
- [Numpy.NET](https://github.com/SciSharp/Numpy.NET) numpy 绑定。
- [TensorFlow.NET](https://github.com/SciSharp/TensorFlow.NET) tensorflow 绑定。
- [TensorFlowSharp](github.com/migueldeicaza/TensorFlowSharp)
- [LiteDB](https://github.com/litedb-org/LiteDB) 可内嵌的单文件文档数据库。
- [sharppcap](https://github.com/dotpcap/sharppcap) 跨平台，网络抓包库。
- [Pcap.Net](https://github.com/PcapDotNet/Pcap.Net) WinPcap 封装，网络抓包库，多年没更新。
- [NCache](https://github.com/Alachisoft/NCache) 分布式缓存库。
- [graphql-dotnet](https://github.com/graphql-dotnet/graphql-dotnet) GraphQL 服务库。
- [IKAnalyzer.NET](https://github.com/stanzhai/IKAnalyzer.NET) 中文分词。
- [jieba.NET](https://github.com/anderscui/jieba.NET) 中文分词。
- [JIEba-netcore](https://github.com/SilentCC/JIEba-netcore)  中文分词,支持Lucene.net。
- [playwright-dotnet](https://github.com/microsoft/playwright-dotnet) 微软开源的无头浏览器自动化库。
- [CefSharp](https://github.com/cefsharp/CefSharp) CEF 封装绑定。
- [ReactiveUI](https://github.com/reactiveui/ReactiveUI) UI 库。
- [NSwag](https://github.com/RicoSuter/NSwag) OpenAPI 库。
- [ReoGrid](https://github.com/unvell/ReoGrid) Excel 表格组件，支持 WPF、WinForms。
- [npoi](https://github.com/nissl-lab/npoi) POI 的 C# 复刻，支持 Excel、Word 等 Office。
- [FreeSql](https://github.com/dotnetcore/FreeSql) ORM
- [SqlSugar](https://github.com/DotNetNext/SqlSugar) ORM
- [Chloe](https://github.com/shuxinqin/Chloe) ORM
- [AntData.ORM](https://github.com/yuzd/AntData.ORM) ORM
- [Box2D.NET](https://github.com/ikpil/Box2D.NET) 物理引擎。
- [rabbitmq-dotnet-client](https://github.com/rabbitmq/rabbitmq-dotnet-client) rabbitmq 客户端。
- [dotnet](https://github.com/MiniProfiler/dotnet) StackOverflow 开源的分析库，性能分析、SQL 分析等。

### 网络

- [LiteNetLib](https://github.com/RevenantX/LiteNetLib) 轻量级 UDP 库。
- [NetCoreServer](https://github.com/chronoxor/NetCoreServer) 网络库。
- [SmtpServer](https://github.com/cosullivan/SmtpServer) SMTP 邮件发送服务器开发库。
- [Furion](https://github.com/monksoul/Furion) 非 .NET ASP 的 web 框架。
- [OrchardCore](https://github.com/OrchardCMS/OrchardCore) 基于 .NET ASP 的 CMS 框架。
- [Vue.NetCore](https://github.com/cq-panda/Vue.NetCore) Vue + .NET ASP 开发的模板项目。

## 工具

- [ILSpy](https://github.com/icsharpcode/ILSpy) .Net 字节码反编译器。
- [dnSpy](https://github.com/dnSpy/dnSpy) .Net 调试器。
- [il-repack](https://github.com/gluck/il-repack) 把多个 .NET 程序集合并成一个的工具，ILMerge 的开源替代。
- [WebFirst](https://github.com/DotNetNext/WebFirst) Web 应用，通过 Excel 给数据库建表的工具。（为什么不用 DDL？）
- [BaGet](https://github.com/loic-sharma/BaGet) 轻量级的 Nuget 服务器。
- [Fody](https://github.com/Fody/Fody) .NET 程序集修改工具。
- [Costura](https://github.com/Fody/Costura) Fody 插件，用于把资源内嵌到程序集里。
- [YiShaAdmin](https://github.com/liukuo362573/YiShaAdmin) 管理后台模板项目。
- [jellyfin](https://github.com/jellyfin/jellyfin) 媒体系统服务器后端。
- [AV_Evasion_Tool](https://github.com/1y0n/AV_Evasion_Tool) 免杀生成工具。
- [Ladon](https://github.com/k8gege/Ladon) 渗透漏洞扫描工具。
- [openhardwaremonitor](https://github.com/openhardwaremonitor/openhardwaremonitor) 基于 .NET Framework 硬件监控工具。
- [ReportGenerator](https://github.com/danielpalme/ReportGenerator) 项目分析工具，分析测试用例覆盖的代码比例，可以生成 HTML 的报告。

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