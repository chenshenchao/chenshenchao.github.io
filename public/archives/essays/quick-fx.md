# [草稿]fx 速查

- [fx](https://github.com/uber-go/fx)
- [zap](https://github.com/uber-go/zap) uber 的日志库。
- [dig](https://github.com/uber-go/dig) uber 的反射依赖注入。

uber 的基于 dig（依赖注入）、zap（日志）等 uber 库的应用框架。其参考了 ASP.NET 的依赖注入框架，只有 Singleton 没有 Scoped 和 Transient 生命周期。

## 

- fx.Provide： 提供，注册工厂函数（支持多返回值）。（为了方便装饰，使用接口类型更好。）
- fx.Supply： 简易的 fx.Provide，直接提供实例。
- fx.Decorate： 装饰，接受一个工厂函数提供的实例，返回一个相同类型的实例。（虽然没有限制该必须是接口，但是接口类型更符合装饰。）
- fx.Annotate：注解，通过 fx.ResultTags 注解返回值（动态 fx.Out），fx.ParamTags 注解参数（动态 fx.In），fx.As 转换提供的结构体成接口，fx.From 转换注入的结构体成接口。
- fx.In： 注入类型，嵌套此结构体会自动注入字段。
- fx.Out: 提供类型，嵌套此结构体会自动把字段拆开提供。名：\`name:"pname"\` 统一提供和注入的字段映射；组：\`group:"gname"\` 提供同种类型的数组，这样方便批量注入同种类型；可选：\`optional:"true"\`
- fx.Invoke： 调用，有 OnStart 和 OnStop 的生命周期。
- fx.Module： 模块，命名后独立的功能块。其 fx.Provide 通过 fx.Private 可以指定私有的依赖。

- fxevent.Logger： Fx 框架依赖的日志器类型。

- fx.NopLogger： 提供无实现的 fxevent.Logger 工厂函数，屏蔽 \[Fx\] 开头的日志。

- zap.Logger： zap 基础日志器，性能好，但类型参数严格。
- zap.SugaredLogger： 基于 zap.Logger 做封装，基于反射性能稍差，提供类 fmt 的更好编码体验。
- Sync()： 调用落盘，确保程序结束调用此函数。（注：Windows 下不支持 /dev/stderr fsync，往命令行输出时调用此函数报错。）
- AddCaller、AddCallerSkip： 添加调用行号，如果封装了日志输出，可以适当跳过一层。
