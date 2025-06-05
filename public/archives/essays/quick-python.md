# python 速查

- 3.8.10 最后一个支持 Windows 7 的版本

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


