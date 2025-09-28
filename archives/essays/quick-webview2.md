# WebView2 速查

WebView2 是微软提供的 Windows 下 WebView 的解决方案。
直接看示例项目最快。

[官方示例](https://github.com/MicrosoftEdge/WebView2Samples)

最后支持 Windows 7 的版本是 109。

## JS 脚本

通过该函数添加宿主对象提供给 WebView 环境下的 JS 调用
CoreWebView2.AddHostObjectToScript
此函数注册的是一个 OLE2 的 COM 对象，所以要按照官方的示例写。
