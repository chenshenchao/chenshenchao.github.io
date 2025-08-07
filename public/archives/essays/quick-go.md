# Go 速查

## 常用命令

```bash
# 构建
# -gcflags="-m" 打印内联信息
go build -gcflags="-m" main.go
```

## 单元测试

```bash
# 当前目录执行测试
go test

# 遍历目录执行测试
go test ./...
```

## 交叉编译

```bat
@rem 配置环境变量指定平台，编译。
set GOOS=linux
set GOARCH=amd64
go build .
```

## 常用库

- [pie](https://github.com/elliotchance/pie) 切片(slice) 和 字典(map) 功能扩展库
- [bbolt](https://github.com/etcd-io/bbolt) 键值对数据库
- [urfave/cli](https://github.com/urfave/cli) 命令行参数分析库

### UI 库

- [fyne](https://github.com/fyne-io/fyne) 跨平台，安卓端比较成熟。
