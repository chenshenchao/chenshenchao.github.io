# [草稿] Reflex 速查

- [reflex](https://github.com/reflex-dev/reflex)

把 Python 翻译成 React 前端，默认 UI 采用 radix-ui 库。全 fastapi 技术栈，使用 sqlmodel 处理数据库。

```bash
mkdir my_app_name
cd my_app_name
uv init

uv add reflex
# 墙内镜像
uv add reflex --default-index https://pypi.tuna.tsinghua.edu.cn/simple
uv run reflex init
uv run reflex run

# 发布版本，前端编译，单端口。
uv run reflex run --env PROD --single-port
```

## 库

- [native](https://github.com/LineIndent/native) UI 库。
- [reflex-antd](https://github.com/seewindcn/reflex-antd) ant design 的封装。

## 状态与事件

reflex 的状态是保存在后端内存里的，每个会话一份状态，会比较吃服务器内存。

- rx.State: 用于派生状态的基类。
- @rx.event： rx.State 下可以定义事件，通过 yield 作为生成器刷新 UI 界面。
- @rx.var: 
- rx.redirect: 事件里可以重定向。

## 内置组件

- rx.cond: 条件渲染组件
- rx.foreach: 循环渲染组件
- rx.center: 居中
- rx.fragment: 
- rx.box: 
- rx.vstack: 竖布局
- rx.hstack: 横布局
- rx.button: 按钮
- rx.icon_button: 
- rx.badge: 
- rx.input: 输入框
- rx.text: 文本
- rx.heading: 标题
- rx.video: 
- rx.audio: 
- rx.image: 图片
- rx.icon: 图标
- rx.link: 
- rx.card: 卡片
- rx.spacer: 占位
- rx.divider: 分割线
- rx.form: 表单
- rx.callout: 提示框，仅样式组件。
- rx.tooltip: 提示
- rx.toast.error
- rx.toast.success
- rx.toast.provider
- rx.dialog.root:
- rx.dialog.content:
- rx.dialog.title: 
- rx.dialog.description:
- rx.table.root:
- rx.table.body:

## 配置 rxconfig.py

```python
import reflex as rx

config = rx.Config(
    app_name="app",
    frontend_port=31001,
    backend_port=31002,
    db_url="sqlite:///app.db",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
        rx.plugins.RadixThemesPlugin(),
    ]
)
```