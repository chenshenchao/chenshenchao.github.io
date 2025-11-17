# python 速查

- 3.8.10 最后一个支持 Windows 7 的版本。

## 常用库

- [deeplake](https://github.com/activeloopai/deeplake) v4 版本是个向量数据库；v3 版本时是个张量数据集存储库，用来存储训练数据。
- [chromadb](https://github.com/chroma-core/chroma) 向量数据库，需要 python 3.9, 用了 dict list 等类型参数，即不支持 Windows 7(python 3.8)
- [tinydb](https://github.com/msiemens/tinydb) 文档数据库，存储是 JSON 文件，性能不行。
- [pywin32](https://github.com/mhammond/pywin32) 封装 Windows API 。
- [loguru](https://github.com/Delgan/loguru) 日志库
- [kivy](https://github.com/kivy/kivy) UI框架
- [KivyMD](https://github.com/kivymd/KivyMD) 基于 Kivy 框架的 Material Design（安卓的UI设计风格）的组件库
- [GeoPy](https://github.com/geopy/geopy) 地理经纬库。
- [cartopy](https://github.com/SciTools/cartopy) 绘制地图库。
- [fastapi](https://github.com/fastapi/fastapi) web 框架。
- [FastUI](https://github.com/pydantic/FastUI) web UI 库。非 HTML 模板，是 Python 代码生成 HTML。
- [pydantic](https://github.com/pydantic/pydantic) 数据验证库。
- [ruff](https://github.com/astral-sh/ruff) rust 开发用于格式化和 lint python 的库。
- [pytesseract](https://github.com/madmaze/pytesseract) 封装 C++ 库 tesseract 的 OCR 库。

## 虚拟环境

如 rust、C#、js(node) 等的依赖库都是和项目相关的，而 python 因各种原因，依赖库是全局的，所以为了隔离各自的依赖库不冲突，所以需要使用虚拟环境，把依赖库都安装在项目各自的虚拟环境中。

### Python 标准包 venv

```sh
python -m venv .pyvenv
```

通过这条命令会创建一个名为 .pyvenv 的文件夹，里面是根据本地安装的 Python 解析器生成的 Python 运行环境。

```sh
./.pyvenv/Scripts/activate
```

通过调用虚拟环境的 activate 脚本激活虚拟环境。
此时在该终端中执行 python 或 pip 是调用虚拟环境的命令。
即通过 pip 安装的包都安装到虚拟环境中，而非本地安装的 Python 里。
所以用 python 命令解释脚本时也需要通过该终端才能使用安装在虚拟环境里的包。

### 功能更强大的 virtualenv

标准包 venv 只是提供生成本地 python 版本的虚拟环境。
当由于一些包需要的 Python 版本与本地不同时就需要用到 virtualenv 了。

```bash
pip install virtualenv
```

下载指定版本的 python 目录于 /path/python 执行以下命令生成。

```bash
virtualenv .pyvenv -p /path/python
```

### 使用 Visual Studio Code 快速使用和切换环境

VS Code 是个功能强大的编辑器，其实装上插件功能基本与 IDE 无异。
只要打开的目录下有 Python 的虚拟环境，便可以被识别到，通过简单地在底部栏地点击就可以切换。

## [uv](https://github.com/astral-sh/uv)

uv 工具集可以说是目前集成化最好的最佳实践。

```ps1
# 安装,由于墙需要梯子配个代理。
irm https://astral.sh/uv/install.ps1 -Proxy "http://127.0.0.1:10808" | iex
```

```bash
# 枚举 Python 版本，检索能力很强，连自己安装的没有在PATH里的都能枚举到。
uv python list

# 安装指定版本的 python
uv python install 3.13

# 创建项目
uv init <project_name>

# 添加库 ruff
uv add ruff

# 使用 ruff 做 lint 检查
uv run ruff check

# 包管理 lock 文件生成。
uv lock

# 根据 pyproject.toml 拉包
uv sync

# 执行脚本 main.py
uv run main.py
```

## pip

Python 自带的包管理器。

因为墙的原因，需要指定国内镜像。

```bash
# -i 指定镜像
pip install -i https://mirrors.aliyun.com/pypi/simple/ numpy

# 更新包
# -U 如果已安装会变成升级成最新版本
pip install -U numpy
```

### pip 配置

pip 在 Linux 和 Windows 下的配置路径不一致。

Linux：

- 全局级：/etc/pip.conf
- 用户级（旧）：~/.pip/pip.conf
- 用户级（新）：~/.config/pip/pip.conf

```conf
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/

[install]
trusted-host=mirrors.aliyun.com
```

Windows: 

- 全局级：%ProgramData%\pip\pip.ini
- 用户级：%AppData%\Roaming\pip\pip.ini

```ini
[global]
index-url=https://mirrors.aliyun.com/pypi/simple/

[install]
trusted-host=mirrors.aliyun.com
```


#### kivy

kivy 的设计有点类似 Flutter（2017年发布） ，但是由于其还是设计得比较早（2011年发布），所以有些东西设计得还不够好。没有新出的框架在代码设计上先进。

##### 布局

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

##### 事件

以下基础事件是所有元素都有的。

- schedule_once
- schedule_interval
- on_motion
- on_touch_down
- on_touch_move
- on_touch_up

##### 属性

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

##### 绘制

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

## 打包与发布

### 新标准 pyproject.toml 方式及新标准库 build 模块

pyproject.toml 作为新的项目配置文件被引入。

```toml
# 支持多种方式，使用旧标准库 setuptools 方式，还支持不少第三方的方式。
[build-system]
requires = ["setuptools >= 61.0"]
build-backend = "setuptools.build_meta"

[project]
# version = "2025.0.0"
dynamic = ["version"] # 动态使用 git tag 或者 __version__ 变量
name="app_name"
authors = [ # 作者信息
  {name = "your_name", email = "your@email.com"},
]
maintainers = [ # 维护者信息
  {name = "your_name", email = "your@email.com"},
]
description = "your project description."
readme = {file="README.md", content-type="text/markdown"}
license = {file="LICENSE"}

dependencies = [ # 依赖
    "numpy",
]

[project.optional-dependencies] # 可选依赖
test=['pytest']
ui=['PySide6']

[project.scripts]
your-command = "your_module:your_func" # 指定执行模块
your-command-other = "your_package.your_module:your_func" # 指定执行模块
```

```bash
# 新标准库 build 模块安装
pip install --upgrade build

# 构建打包，有 pyproject.toml 目录下执行
python -m build
```

```bash
# 指定 whl 文件安装
pip install your_project.whl

# 卸载（开发阶段经常要卸载，不能直接安装，不会覆盖）
pip uninstall your_project

# 上传
twine upload dist/*
```

### 旧标准 setuptools 命令

setuptools 使用一个 setup.py 来配置。因为是 python 文件，你可以用做任何处理，所以自由度很高，但是问题也是出在这里。自由度太高导致各种包的打包方式没有统一，五花八门的 setup.py 脚本被写了出来，造成了混乱。
新的 pyproject.toml 使用 toml 就结构上规范了常用配置，使得项目得到了统一。同时旧的 setuptools 退居幕后（pyproject.toml 可以指定 build-system 为 setuptools），由 build 模块根据 pyproject.toml 生成 setup.py 脚本进行打包。

```python
import setuptools

# 这里可以做任何常规的 python 操作，只要最后调用 setuptools.setup 即可。

setuptools.setup(
    name='your_project',
    version='0.0.1',
    description='your project description.',
    long_description='' # 建议读取 readme.md 的内容,
    long_description_content_type='text/markdown',
    url='https://github.com/your_name/your_project',
    keywords='key word',
    license='MIT',
    author='your_name',
    author_email='your@email.com',
    platforms='any',
    classifiers=[
        'License :: OSI Approved :: MIT License',
        'Intended Audience :: Developers',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
        'Programming Language :: Python :: 3.10',
    ],
    packages=setuptools.find_packages(), # 发现包
    install_requires=[ # 依赖项
        'pillow==9.5.0',
        'torch==2.0.1',
        'torchaudio==2.0.2',
        'torchvision==0.15.2',
    ]
)
```

```bash
# 构建打包
python setup.py sdist bdist_whell

# 上传
twine upload dist/*
```

### 基于 [nuitka](https://github.com/Nuitka/Nuitka) 的打包

这个打包是把 Python 转成 C++ 再编译成二进制，所以使用不同的库会有编译的问题要解决。

### 基于 [poetry](https://github.com/python-poetry/poetry) 的打包


### 基于 [PyInstaller](https://github.com/pyinstaller/pyinstaller) 的打包

这种会打包成特定平台的可执行文件。

```sh
pip install pyinstaller
```

安装 pyinstaller 后命令行就可以使用 pyinstaller 命令了：

```sh
pyinstaller -F -i i.ico source.py
```

- -i PATH 或 --icon PATH 可指定图标文件路径 PATH
- -n NAME 或 --name NAME 可指定生成的文件名 NAME
- -F 或 --onefile 生成单一的可执行文件
- -c 或 --console 或 --nowindowed 生成命令行可执行文件
- -w 或 --windowed 或 --noconsole 生成原生可执行文件

更多资料详见[官网](https://www.pyinstaller.org)


