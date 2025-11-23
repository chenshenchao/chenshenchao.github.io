# Kivy 速查

kivy 的设计有点类似 Flutter（2017年发布） ，但是由于其还是设计得比较早（2011年发布），所以有些东西设计得还不够好。没有新出的框架在代码设计上先进。

## 布局

注：kivy 的坐标系原点默认在左下角（理科生习惯，学校里用的笛卡尔坐标系第一象限。）而大部分的 UI 框架原点坐标都在左上角（工科生习惯，因为早期显示设备都是从左上向下刷新屏幕的。）

父组件通过获取子组件的 hint(暗示) 来控制子组件的大小，优先级高于子组件宽高设置。（这种设计不好，比较好的设计如 Flutter 和 Compose 父组件对子组件提供限制约束，而不是强制其大小，子组件大小应由自己决定）

- size_hint 暗示与父组件大小的比例 1.0 表示和父组件一样大。
- size_hint_x 宽度暗示与父组件大小的比例 1.0 表示和父组件一样大。
- size_hint_y 高度暗示与父组件大小的比例 1.0 表示和父组件一样大。
- pos_hint 对象 {'x':0, 'y':0, 'top':0, 'right': 0, 'center_x': 0.5, 'center_y': 0.5 }
- size 有父组件时，优先级低，必须让 size_hint = (None, None) 后才能起效。
- pos {'x': 0, 'y': 0} 位置 必须有父组件支持才能起效，如果父组件不支持，无效。

注：hint 都是和父组件相关，都是百分比单位。而 size、 pos 是具体值单位。（这个设计也不好，单位不统一容易混淆。）

- FloatLayout 子元素提供 pos 坐标随意设置坐标。
- AnchorLayout 停靠布局，anchor_x: 'left' 'right' anchor_y: 'top' 'bottom' 'center' 来规定其子元素的停靠方式
- BoxLayout 行 或 列 orientation: 'vertical'(列) 
- StackLayout 流式布局，orientation: 'lr-tb'(从左到右，从上到下)  'rl-tb'（从右到左，从上到下）
- RelativeLayout 
- GridLayout 网格布局
- PageLayout 用来切换页，提供路由功能。
- ScatterLayout 

## 事件

以下基础事件是所有元素都有的。

- schedule_once
- schedule_interval
- on_motion
- on_touch_down
- on_touch_move
- on_touch_up

## 属性

- NumericProperty
- StringProperty
- ListProperty
- ObjectProperty 事件可以通过这个属性定义，被使用时可以往这种属性挂函数回调
- BooleanProperty
- BoundedNumericProperty
- OptionProperty
- ReferenceListProperty
- AliasProperty 别名属性，类似 vue 的 computed 用来绑定其他属性，在修改时触发 getter setter
- DictProperty
- VariableListProperty
- ConfigParserProperty
- ColorProperty

- 定义名为 on_<property_name> 的函数会监听属性变化被回调。
- 使用 self.bind(property_name=self.from_property_name_changed) 函数可以绑定属性指定函数作为监听回调。

## 绘制

每个组件都有 canvas 这个属性：(canvas 是整个窗口的画布实例，所以可以超出组件范围绘制到其他组件上面。)
canvas.before 是绘制前事件
canvas 绘制事件，这个如果重写会导致组件默认的绘制被替换。
canvas.after 是绘制后事件
可以在这两个事件绘制。

```kivy
canvas.before
  # 创建模板缓存
  StencilPush
  # 这个模板缓存限制绘制的区域
  RoundedRectangle:
    pos: self.pos
    size: self.size
    radius: [50,]  # 设置圆角半径
  # 启用模板缓存，这样接下来 canvas 的输出就会被现在在里面。
  StencilUse
canvas.after
  # 停止使用模板缓存,之后的绘制离开模板
  StencilUnUse
  # 弹出模板
  StencilPop
```