# [草稿]fx 速查

- [fx](https://github.com/uber-go/fx)
- [zap](https://github.com/uber-go/zap) uber 的日志库。
- [dig](https://github.com/uber-go/dig) uber 的反射依赖注入。

uber 的基于 dig（依赖注入）、zap（日志）等 uber 库的应用框架。其参考了 ASP.NET 的依赖注入框架，只有 Singleton 没有 Scoped 和 Transient 生命周期。

## 

- fx.Provide： 提供，注册工厂函数。（为了方便装饰，使用接口类型更好。）
- fx.Supply： 简易的 fx.Provide，直接提供实例。
- fx.Decorate： 装饰，接受一个工厂函数提供的实例，返回一个相同类型的实例。（虽然没有限制该必须是接口，但是接口类型更符合装饰。）
- fx.Invoke： 调用，有 OnStart 和 OnStop 的生命周期。
- fx.Module： 模块，命名后独立的功能块。其 fx.Provide 通过 fx.Private 可以指定私有的依赖。
