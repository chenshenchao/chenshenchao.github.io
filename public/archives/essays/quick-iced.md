# [草稿] iced 速查

- [iced](https://github.com/iced-rs/iced)

一个 rust 语言下类 Flutter 的面向对象声明式图形框架。

```toml
iced = "0.14.0"
```

## 常用库

- [iced_navigation](https://github.com/danielmbomfim/iced_navigation) 第三方路由导航库。

## 设计理念

- 模型：组件状态。
- 消息：数据变更不直接修改，而是通过消息通知组件。
- 视图：根据当前组件状态渲染，由渲染框架调用。
- 更新：接收到消息时触发，处理组件状态更新。

```rust
use iced::widget::{button, column, text, Column};

// 模型
#[derive(Default)]
struct Counter {
    value: i32,
}

// 消息
#[derive(Debug, Clone, Copy)]
pub enum Message {
    Increment,
    Decrement,
}

impl Counter {
    // 视图
    pub fn view(&self) -> Column<'_, Message> {
        // We use a column: a simple vertical layout
        column![
            // The increment button. We tell it to produce an
            // `Increment` message when pressed
            button("+").on_press(Message::Increment),

            // We show the value of the counter here
            text(self.value).size(50),

            // The decrement button. We tell it to produce a
            // `Decrement` message when pressed
            button("-").on_press(Message::Decrement),
        ]
    }

    // 更新
    pub fn update(&mut self, message: Message) {
        match message {
            Message::Increment => {
                self.value += 1;
            }
            Message::Decrement => {
                self.value -= 1;
            }
        }
    }
}

// 主函数，程序入口。
fn main() -> iced::Result {
    iced::run(Counter::update, Counter::view)
}
```