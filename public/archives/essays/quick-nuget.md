# Nuget 速查

Nuget 是 .Net 主要的包管理工具，伴随着 .Net 开始跨平台，dotnet 命令囊括了 nuget 的命令，这个命令也就用得少了些。

## 添加离线的 *.nupkg 包

nuget add 就是在 Visual Stdio 的界面添加仓库源的操作的命令行形式。
nuget install 则是 Visual Stdio 的界面添加指定库依赖的命令行形式。

```bash
# 通过 add 命令设置一个本地的源
# path_nupkg 离线包的路径，使用全路径。
# source_folder 离线包将被解压进这个目录，用于安装。
# -Expand 会生成 lib 文件夹 带 DLL
nuget add <path_nupkg> -Source <source_folder> -Expand

# 通过 install 命令指定离线源进行安装
# source_folder 就是 add 添加的离线源，必须全路径。
# pkg_name 包名
nuget install <pkg_name> -Source <source_folder>
```

## 打包

现在 dotnet 命令和 Visual Studio 的打包流程已经优化很多了，现在用 nuget 打包几乎没有优势。
这些只是早年的一些留存，用于打包只支持 Windows 的非跨平台的 .Net Framework 项目。

```bat
@rem 创建描述文件，填写打包内容。
nuget spec

@rem 打包
nuget pack
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<package >
  <metadata>
    ...
    <!-- 需要选定 files 里面的描述 -->
    <icon>Logo.png</icon>
    ...

    <!-- 查阅 https://docs.microsoft.com/zh-cn/nuget/reference/errors-and-warnings/nu5128 的解决方案 -->
    <!-- 目前测试无法解决警告 NU5128 -->
    <dependencies>
      <group targetFramework=".NETFramework3.5"/>
    </dependencies>
  </metadata>

  <!-- 图标文件需要在这里描述 -->
  <files>
    <file src="Logo.png" target="" />
  </files>
</package>
```