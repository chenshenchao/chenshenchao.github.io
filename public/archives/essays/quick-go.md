# Go 速查

## 交叉编译

```bat
@rem 配置环境变量指定平台，编译。
set GOOS=linux
set GOARCH=amd64
go build .
```

## 常用库

- [pie](https://github.com/elliotchance/pie) 切片(slice) 和 字典(map) 功能扩展库

### UI 库

- [fyne](https://github.com/fyne-io/fyne) 跨平台，安卓端比较成熟。
