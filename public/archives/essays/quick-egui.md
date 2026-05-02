# [草稿] egui 速查

- [egui](https://github.com/emilk/egui) 2D 图形库，类 imgui 需要外界适配的图形后端（d3d，opengl 等）。
- [eframe](https://github.com/emilk/egui/tree/main/crates/eframe) 包含在 egui 源码里的官方框架，适配了图形后端。

一个 rust 语言下类 imgui 的即时渲染图形框架，支持 web、PC、移动等多端。

以下是基本的依赖。

```toml
# eframe 适配后端。
eframe = { workspace = true, features = [
  "default",
  "__screenshot", # __screenshot is so we can dump a screenshot using EFRAME_SCREENSHOT_TO
] }

# 图片支持:
egui_extras = { workspace = true, features = ["default", "image"] }
```

## 设计理念

和 imgui 同源，利用函数调用树来实现组件树，在结构上几乎和 HTML、XML 一致。
在此基础上通过函数作用域的优势（XML、HTML 不具备这种能力）检出状态的数据。

```rust
// 布局元素
ui.horizontal(|ui| {
    // 👇 这就是 egui 版的 remember / useState！
    let count = ui.memory_mut(|mem| {
        mem.data
           .get_temp_mut_or_insert_with(ui.id(), || 0)
    });

    // 元素状态的判定。
    if ui.button("+1").clicked() { *count += 1; }
    ui.label(*count.to_string());
});
```