# [草稿]C++ 速查

## 包管理

### vcpkg

需要配置代理：

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

## 常用库

- [faiss](https://github.com/facebookresearch/faiss) 扁平索引实现库。
- [hnswlib](https://github.com/nmslib/hnswlib) HNSW 实现库，支持 C++ 和 Python 语言。
- [nmslib](https://github.com/nmslib/nmslib) 向量数据库，有标量功能。支持 C++ 、Java 和 Python。
- [rocksdb](https://github.com/facebook/rocksdb) 键值对存储库。
- [NuRaft](https://github.com/eBay/NuRaft) 分布式协议 Raft 的实现库。
- [Poco](https://github.com/pocoproject/poco) 多功能库集合。

## wxWidgets

## Qt
