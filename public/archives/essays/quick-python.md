# python 速查

- 3.8.10 最后一个支持 Windows 7 的版本

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

### 常用库

- [deeplake](https://github.com/activeloopai/deeplake) v4 版本是个向量数据库；v3 版本时是个张量数据集存储库，用来存储训练数据。
- [chromadb](https://github.com/chroma-core/chroma) 向量数据库，需要 python 3.9, 用了 dict list 等类型参数，即不支持 Windows 7(python 3.8)
- [tinydb](https://github.com/msiemens/tinydb) 文档数据库，存储是 JSON 文件，性能不行。
- [pywin32](https://github.com/mhammond/pywin32) 封装 Windows API 。
- [loguru](https://github.com/Delgan/loguru) 日志库
- [kivy](https://github.com/kivy/kivy) UI框架
- [KivyMD](https://github.com/kivymd/KivyMD) 基于 Kivy 框架的 Material Design（安卓的UI设计风格）的组件库

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


