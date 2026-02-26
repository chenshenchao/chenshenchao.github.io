# [草稿] Compose 速查

## compose multiplatform

早期 compose multiplatform 每个平台提供不同的 UI 框架，不同平台要写各自的 UI 代码。
桌面用基于 swing 的 UI 框架；安卓用 compose ；IOS 用基于 ViewUI 的框架等。
后来推出了 SharedUI 统一使用安卓的 compose 组件为基础去适配所有平台。

- [compose-multiplatform-template](https://github.com/JetBrains/compose-multiplatform-template) 已经废弃，早期开发工具不完善，通过复制这个模板项目开发，现在采用开发工具 IDE 等生成初始项目。

### 常用库

- [lazytable](https://github.com/oleksandrbalan/lazytable) 惰性加载表格组件。
- [compose-webview-multiplatform](https://github.com/KevinnZou/compose-webview-multiplatform) 谷歌废弃安卓端的 WebView 封装，由第三方分叉，此库就是该作者发布了的跨平台版本。
- [okio](https://github.com/square/okio) IO 库。
- [compose-multiplatform-file-picker](https://github.com/Wavesonics/compose-multiplatform-file-picker) 文件选择器。
- [PreCompose](https://github.com/Tlaster/PreCompose) 导航和状态管理库。

## Jetpack Compose

安卓平台的 UI 框架实现。

### 常用库

- [accompanist](https://github.com/google/accompanist) 谷歌额外为 Jetpack Compose 提供的补充库。
- [compose-webview](https://github.com/KevinnZou/compose-webview) 谷歌废弃安卓端的 WebView 封装，由第三方分叉。
- [xblur-compose](https://github.com/x3rocode/xblur-compose) 仿 IOS 模糊弹窗组件。

### CompositionLocal 和 CompositionLocalProvider 

提供跨越多个局部作用域的状态传递，但是无法全局共享，导致 Activity 之间如果想共享还是要靠全局的状态管理库。
所以对于框架或库开发者有用，可以来限制自己的代码不要污染用户代码。但是对于应用开发者，就显得束手束脚。

```kotlin
// 二选一
val LocalElevations = compositionLocalOf { Elevations() } // 修改会触发整棵子树重组，性能差。
val LocalElevations = staticCompositionLocalOf { Elevations() } // 这种用于初始化不改变的值，性能好。

@Composable
fun YourUser() {
    // 但是要确保其被调用时上级作用域有提供，不然这个获取会报错。
    LocalElevations.current.card
}

@Composable
fun YourProvider() {
    CompositionLocalProvider(LocalElevations provides elevations) {
        // 被这个套住的子调用都可以获得状态
        LocalElevations.current.card
        YourUser()
    }
}
```