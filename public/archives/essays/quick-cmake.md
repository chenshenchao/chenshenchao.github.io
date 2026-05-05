# [草稿]CMake 速查

- [CMake 源码](https://github.com/Kitware/CMake)
- [vcpkg](https://github.com/microsoft/vcpkg) 基于 CMAKE 的包管理工具。

目前使用最广的 c/c++ 构造工具集（Qt 也开始由原来的 qmake 改用 cmake 了）。

注：CMake 的缓存很顽固，在编写 CMake 脚本时应该直接删掉生成物，防止因为修改脚本导致功能变了，但是旧脚本遗留的生成物导致执行成功。
这样的成功是虚假的成功，问题实则被隐藏了，新脚本并没有完备的功能，而是使用了旧脚本的功能。
这种脚本在完全新的环境中缺少旧脚本实现的功能，是无法完备执行的。很多开源项目都有这个问题。
例如 find_library 一旦找到就会被缓存，之后即使脚本改成了找不到的形式，还是能被命中缓存而找到。

## 常用扩展

- [CPM.cmake](https://github.com/cpm-cmake/CPM.cmake) 包管理扩展脚本。
- [hunter](https://github.com/cpp-pm/hunter) 基于 CMake 的包管理。

## vcpkg

基于 cmake 的扩展工具集，有预编译的二进制文件，在 visual studio 配合使用很方便。

直接 git clone 仓库后，执行构建，再加入 PATH，由于墙，需要配置代理：


```bat
@rem 设置代理
set HTTP_PROXY=http://127.0.0.1:10808
set HTTPS_PROXY=http://127.0.0.1:10808

@rem 查看
echo %HTTP_PROXY%
echo %HTTPS_PROXY%
```

```powershell
$env:HTTP_PROXY="http://127.0.0.1:10808"
$env:HTTPS_PROXY="http://127.0.0.1:10808"
```

```bat
.\bootstrap-vcpkg.bat
```

```ps1
$env:VCPKG_ROOT = "C:\path\to\vcpkg"
$env:PATH = "$env:VCPKG_ROOT;$env:PATH"
```

### 经典模式

```bat
@rem 自动配置 vs
vcpkg integrate install
@rem 清除自动配置
vcpkg integrate remove

@rem 安装
vcpkg install openssl
@rem 指定 架构、系统和静态
vcpkg install openssl:x64-windows-static
```

### 清单模式

```bat
@rem 创建项目
vcpkg new --application

@rem 添加 fmt 依赖
vcpkg add port fmt
```