# [草稿]C++ 速查

- [STL](https://github.com/microsoft/STL) 微软的 STL 库源码。

## 常用库

- [opencv](https://github.com/opencv/opencv)
- [faiss](https://github.com/facebookresearch/faiss) 扁平索引实现库。
- [hnswlib](https://github.com/nmslib/hnswlib) HNSW 实现库，支持 C++ 和 Python 语言。
- [nmslib](https://github.com/nmslib/nmslib) 向量数据库，有标量功能。支持 C++ 、Java 和 Python。
- [leveldb](https://github.com/google/leveldb) 键值对存储库。
- [rocksdb](https://github.com/facebook/rocksdb) 键值对存储库。
- [speedb](https://github.com/speedb-io/speedb) 类 rocksdb 键值对存储库。
- [simdb](https://github.com/LiveAsynchronousVisualizedArchitecture/simdb) 键值对存储库。
- [lmdb](https://github.com/LMDB/lmdb) 键值对存储库。
- [libdb](https://github.com/berkeleydb/libdb) 原 berkeleydb，可内嵌的键值对数据库库。
- [asmjit](https://github.com/asmjit/asmjit) JIT 库。
- [NuRaft](https://github.com/eBay/NuRaft) 分布式协议 Raft 的实现库。
- [Poco](https://github.com/pocoproject/poco) 多功能库集合。
- [tesseract](https://github.com/tesseract-ocr/tesseract) OCR 库。
- [quill](https://github.com/odygrd/quill) 异步日志库。
- [libhv](https://github.com/ithewei/libhv) 多种网络协议库。
- [librg](https://github.com/zpl-c/librg) 多玩家游戏开发库。
- [Detours](https://github.com/microsoft/Detours) Windows 下监听、拦截 API 调用的库。
- [binlog](https://github.com/morganstanley/binlog) mysql binlog 解析库。
- [CSerialPort](https://github.com/itas109/CSerialPort) 跨平台串口库。
- [libserial](https://github.com/crayzeewulf/libserial) Linux 串口库。
- [recastnavigation](https://github.com/recastnavigation/recastnavigation) 导航网格实现库，Unit3D、Godot 等都使用了这个库。

### 图形库

- [tgfx](https://github.com/Tencent/tgfx) 为了替代 skia 的 2D 图形绘制库。
- [elements](https://github.com/cycfi/elements) 声明式的 UI 库，事件的设计上有缺失。
- [wxWidgets](https://github.com/wxWidgets/wxWidgets) UI 开发库。
- [wxFormBuilder](https://github.com/wxFormBuilder/wxFormBuilder) wxWidgets Form 图形化绘制工具。
- [assimp](https://github.com/assimp/assimp) 支持 40+ 种 3D 资源文件加载库。

### boost

- [asio](https://github.com/boostorg/asio) 异步IO模块
- [beast](https://github.com/boostorg/beast) HTTP 服务器。

## 包管理与构造工具

### [cmake](./quick-cmake.md)

目前使用最广的 c/c++ 构造工具集（Qt 也开始由原来的 qmake 改用 cmake 了）。

### vcpkg

基于 cmake 的扩展工具集，有预编译的二进制文件，在 visual studio 配合使用很方便。

直接 git clone 仓库后，由于墙，需要配置代理：

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
@rem 自动配置 vs
vcpkg integrate install
@rem 清除自动配置
vcpkg integrate remove

@rem 安装
vcpkg install openssl
@rem 指定 架构、系统和静态
vcpkg install openssl:x64-windows-static
```

## wxWidgets

## Qt
