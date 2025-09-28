# [草稿] Compose 速查

## Jetpack Compose

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