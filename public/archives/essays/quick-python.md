# python 速查

- 3.8.10 最后一个支持 Windows 7 的版本。

```bash
# 当前目录启动一个静态HTTP服务器，8000端口。
python -m http.server 8000
```

## 常用库

- [deeplake](https://github.com/activeloopai/deeplake) v4 版本是个向量数据库；v3 版本时是个张量数据集存储库，用来存储训练数据。
- [chromadb](https://github.com/chroma-core/chroma) 向量数据库，需要 python 3.9, 用了 dict list 等类型参数，即不支持 Windows 7(python 3.8)
- [tinydb](https://github.com/msiemens/tinydb) 文档数据库，存储是 JSON 文件，性能不行。
- [whoosh](https://github.com/mchaput/whoosh) 纯 Python 实现全文搜索库。
- [pywin32](https://github.com/mhammond/pywin32) 封装 Windows API 的 C++ 扩展。
- [loguru](https://github.com/Delgan/loguru) 日志库
- [GeoPy](https://github.com/geopy/geopy) 地理经纬库。
- [cartopy](https://github.com/SciTools/cartopy) 绘制地图库。
- [pydantic](https://github.com/pydantic/pydantic) 数据验证库。
- [ruff](https://github.com/astral-sh/ruff) rust 开发用于格式化和 lint python 的库。
- [pytesseract](https://github.com/madmaze/pytesseract) 封装 C++ 的  OCR 库 tesseract 命令行使用，需要安装 tesseract 在 PATH 里，配置要求低，但是精度差。
- [EasyOCR](https://github.com/JaidedAI/EasyOCR) OCR 库，配置要求低于 PaddleOCR 但是精度要差一些。
- [keras-ocr](https://github.com/faustomorales/keras-ocr) 基于 Keras 的 OCR。
- [ddddocr](https://github.com/sml2h3/ddddocr) 针对验证码的 OCR 库。
- [opencv-python](https://github.com/opencv/opencv-python) opencv 的 python 封装库。
- [pyautogui](https://github.com/asweigart/pyautogui) 跨平台桌面系统自动化操作库，模拟鼠标键盘操作。
- [pyscreeze](https://github.com/asweigart/pyscreeze) 跨平台截屏工具库。
- [pyttsx3](https://github.com/nateshmbhat/pyttsx3) TTS 库。
- [mcp sdk](https://github.com/modelcontextprotocol/python-sdk) MCP 官方发布的客户端 SDK 库。
- [numba](https://github.com/numba/numba) NumPy 动态编译 JIT 。
- [llvmlite](https://github.com/numba/llvmlite) LLVM 封装，提供 JIT 编译。
- [cython](https://github.com/cython/cython) python 代码转 C 编译。
- [snowflake](https://github.com/vd2org/snowflake) 雪花ID生成库。
- [pyexcel](https://github.com/pyexcel/pyexcel) Excel 处理库，支持 csv, ods, xls, xlsx, xlsm 文件。
- [openpyxl](https://pypi.org/project/openpyxl/) Excel 2010 xlsx 文件处理库。
- [xlwt](https://github.com/python-excel/xlwt) 可创建 MS Excel 97/2000/XP/2003 XLS 文件。
- [xlrd](https://github.com/python-excel/xlrd) 可读取 MS Excel 97/2000/XP/2003 XLS 文件。
- [excel2img](https://github.com/glexey/excel2img) excel 生成图片。
- [segno](https://github.com/heuer/segno) 二维码生成库。
- [pypdf](https://github.com/py-pdf/pypdf) PDF 库。
- [PyMuPDF](https://github.com/pymupdf/PyMuPDF) PDF 库。
- [pdfplumber](https://github.com/jsvine/pdfplumber) PDF 提取信息库。
- [pdfium-lib](https://github.com/paulocoutinhox/pdfium-lib) pdfium 封装。
- [RxPY](https://github.com/ReactiveX/RxPY) rx
- [pytest](https://github.com/pytest-dev/pytest) 单元测试框架。
- [pytest-order](https://github.com/pytest-dev/pytest-order) pytest 单元测试排序。
- [pinout](https://github.com/j0ono0/pinout) 用于生成硬件引脚SVG图的库。
- [qiskit](https://github.com/Qiskit/qiskit) 量子计算库。
- [parallel-ssh](https://github.com/ParallelSSH/parallel-ssh) ssh 库。
- [paramiko](https://github.com/paramiko/paramiko) ssh v2 库。
- [fabric](https://github.com/fabric/fabric) 通过 SSH 远程执行脚本，基于 Paramiko。
- [ssh2-python](https://github.com/ParallelSSH/ssh2-python) 封装了 libssh2
- [aioredis-py](https://github.com/aio-libs-abandoned/aioredis-py) 支持异步的 redis 客户端。
- [redis-py](https://github.com/redis/redis-py) redis 客户端。
- [walrus](https://github.com/coleifer/walrus) 简化 redis 客户端的使用，做了封装。
- [uiautomator](https://github.com/xiaocong/uiautomator) 安卓 uiautomator 封装。
- [uiautomator2](https://github.com/openatx/uiautomator2) 安卓 uiautomator2 封装。
- [scapy](https://github.com/secdev/scapy) IP ICMP 等网络报文工具库。
- [aiosqlite](https://github.com/omnilib/aiosqlite) 异步 SQLite
- [pycapt](https://github.com/aboutmydreams/pycapt) 验证码生成库。
- [pywinauto](https://github.com/pywinauto/pywinauto) Windows 自动化测试工具库。
- [comtypes](https://github.com/enthought/comtypes) COM（Component Object Model）调用库。
- [pymunk](https://github.com/viblo/pymunk) 2D 物理引擎。
- [requests](https://github.com/psf/requests) HTTP 客户端库。
- [httpx](https://github.com/encode/httpx) HTTP 客户端库。
- [ffmpeg-python](https://github.com/kkroening/ffmpeg-python) ffmpeg 绑定封装库。
- [sly](https://github.com/dabeaz/sly) 类 lex、yacc 的 python 库（面向对象设计）。 
- [ply](https://github.com/dabeaz/ply) 类 lex、yacc 的 python 库（面向过程设计）。 
- [jax](https://github.com/jax-ml/jax) 组件化 numpy 使代码更精简，生成 GPU/TPU 的 JIT 。
- [deepface](https://github.com/serengil/deepface) 人脸识别库。
- [insightface](https://github.com/deepinsight/insightface) 人脸识别库。
- [faker](https://github.com/joke2k/faker) 调试数据生成库。
- [celery](https://github.com/celery/celery) 任务队列，可以接入多种后端（redis、amqp、s3等）。
- [pywasm](https://github.com/libraries/pywasm) wasm 解释器。
- [playwright-python](https://github.com/microsoft/playwright-python) 微软开源的无头浏览器自动化库。
- [SeleniumBase](https://github.com/seleniumbase/SeleniumBase) 无头浏览器自动化库。
- [poium](https://github.com/SeldomQA/poium) 适配 playwright、selenium、appium 的自动化框架。
- [Airtest](https://github.com/AirtestProject/Airtest) 自动化框架。
- [pyreportjasper](https://github.com/acesseonline/pyreportjasper) python 解析编译处理 JasperReports (.jrxml & .jasper 文件).
- [huey](https://github.com/coleifer/huey) 队列项目。
- [greenlet](https://github.com/python-greenlet/greenlet) 并发库。
- [trio](https://github.com/python-trio/trio) 异步协程 IO 扩展库。
- [gevent](https://github.com/gevent/gevent) 异步协程扩展库。
- [jieba](https://github.com/fxsjy/jieba) 中文分词。
- [Jiagu](https://github.com/ownthink/Jiagu) 中文分词。
- [lac](https://github.com/baidu/lac) 百度开源的 C++ 开发的 python分词库。
- [imgkit](https://github.com/jarrekk/imgkit) html 生成图片，基于 Webkit。
- [pyyaml](https://github.com/yaml/pyyaml) YAML 处理库。
- [tablib](https://github.com/jazzband/tablib) EXCEL、JSON、SQL 等数据集生成库。
- [python-dotenv](https://github.com/theskumar/python-dotenv) .env 库。
- [tqdm](https://github.com/tqdm/tqdm) 命令行进度条显示。
- [httptools](https://github.com/MagicStack/httptools) HTTP 解析库。
- [pinject](https://github.com/google/pinject) 谷歌开源的依赖注入库。
- [uvloop](https://github.com/MagicStack/uvloop) 异步运行环境 asyncio 的高性能替代实现。
- [elasticsearch-py](https://github.com/elastic/elasticsearch-py) elasticsearch 客户端。
- [aiofiles](https://github.com/Tinche/aiofiles) 文件异步库。
- [kafka-python](https://github.com/dpkp/kafka-python) kafka 客户端。
- [numpy](https://github.com/numpy/numpy) 科学计算的基础包。
- [pefile](https://github.com/erocarrera/pefile) PE 文件处理库。
- [pyodide](https://github.com/pyodide/pyodide) 浏览器里基于 WASM 的  python 运行环境。

### 数据库

- [asyncpg](https://github.com/MagicStack/asyncpg) PostgreSQL 客户端。
- [mysqlclient](https://github.com/PyMySQL/mysqlclient) MySQL 连接库。
- [PyMySQL](https://github.com/PyMySQL/PyMySQL) MySQL 客户端。
- [aiomysql](https://github.com/aio-libs/aiomysql) 异步 Mysql 连接库。
- [binlog2sql](https://github.com/danfengcao/binlog2sql) MySQL binlog 分析库。
- [python-mysql-replication](https://github.com/julien-duponchelle/python-mysql-replication) MySQL binlog 迁移库。
- [mongoengine](https://github.com/MongoEngine/mongoengine) mongodb 客户端。
- [tortoise-orm](https://github.com/tortoise/tortoise-orm) ORM
- [peewee](https://github.com/coleifer/peewee) ORM
- [pony](https://github.com/ponyorm/pony) ORM
- [sqlalchemy](https://github.com/sqlalchemy/sqlalchemy)  ORM
- [gino](https://github.com/python-gino/gino) SQLAlchemy 核心。

### 图形

- [Pillow](https://github.com/python-pillow/Pillow) PIL 绘图库。
- [toga](https://github.com/beeware/toga) UI 框架，主桌面端。
- [cefpython](https://github.com/cztomczak/cefpython) CEF 绑定库。
- [pyglet](https://github.com/pyglet/pyglet) UI 多媒体库。
- [glooey](https://github.com/kxgames/glooey) pyglet UI 组件库。
- [pyxel](https://github.com/kitao/pyxel) rust 开发的游戏引擎，脚本语言是 python 。
- [pygame_gui](https://github.com/MyreMylar/pygame_gui)
- [DearPyGui](https://github.com/hoffstadt/DearPyGui) ImGUI 的封装。
- [pycairo](https://github.com/pygobject/pycairo) 封装 cairo 绘图库。
- [pyecharts](https://github.com/pyecharts/pyecharts) 类百度 echarts 图表、图形绘图库。
- [rembg](https://github.com/danielgatis/rembg) 抠图工具，Python 命令行，与库。

### 网络

- [reflex](github.com/reflex-dev/reflex) web 框架。
- [gunicorn](https://github.com/benoitc/gunicorn) Unix 下的 WSGI HTTP 服务器。
- [aiohttp](https://github.com/aio-libs/aiohttp) 异步的 HTTP 客户端/服务端框架。
- [sanic](https://github.com/sanic-org/sanic) web 框架。
- [FastUI](https://github.com/pydantic/FastUI) web UI 库。非 HTML 模板，是 Python 代码生成 HTML。
- [vibora](https://github.com/vibora-io/vibora) web 框架。
- [flask](https://github.com/pallets/flask) web 框架。
- [jinja](https://github.com/pallets/jinja) 模板引擎。
- [circuits](https://github.com/circuits/circuits) web 框架。
- [emsdk](https://github.com/emscripten-core/emsdk) Emscripten SDK
- [wechatpy](https://github.com/wechatpy/wechatpy) 微信SDK
- [rpyc](https://github.com/tomerfiliba-org/rpyc) RPC 库。
- [pyftpdlib](https://github.com/giampaolo/pyftpdlib) FTP 服务器开发库。
- [django](https://github.com/django/django) web 框架。
- [asgiref](https://github.com/django/asgiref) ASGI、WSGI 库。
- [helium](https://github.com/mherrmann/helium) 无头浏览器爬虫自动化库。
- [scapy](https://github.com/secdev/scapy) 支持 arp、icmp 等协议包，网络嗅探发包等的命令行工具和库。
- [icmplib](https://github.com/ValentinBELYN/icmplib) icmp 库。
- [HanLP](https://github.com/hankcs/HanLP) NLP 分词开发库 和 轻量 RESTful 服务。

## 示例、项目

- [uwsgi](https://github.com/unbit/uwsgi) uWSGI HTTP 服务器（WSGI 为主，兼容 ASGI），官方主要支持 python 和 ruby 。
- [uvicorn](https://github.com/Kludex/uvicorn) python 的 ASGI web 服务器（ASGI 为主，兼容 WSGI）。
- [PythonSSHServerTutorial](https://github.com/ramonmeza/PythonSSHServerTutorial) 使用 Paramiko 开发 SSH 服务器教程。
- [rye](https://github.com/astral-sh/rye) 包管理工具，已经不维护，建议使用 uv 替代。
- [pyright](https://github.com/microsoft/pyright) python 静态类型分析工具，有 VSCODE 插件。
- [mypy](https://github.com/python/mypy)  python 静态类型检查器。
- [codon](https://github.com/exaloop/codon) python 编译器，生成原生机器码，内置 NumPy。
- [ocr_TDR](https://github.com/jinxiwang/ocr_TDR) 一个 tensorflow 的 OCR 示例。
- [yq](https://github.com/kislyuk/yq) 命令行  YAML, XML, TOML 处理工具。
- [zulip](https://github.com/zulip/zulip) web 的即时聊天工具。
- [onlinetools](https://github.com/iceyhexman/onlinetools) 端口扫描等渗透工具。
- [sqlmap](https://github.com/sqlmapproject/sqlmap) 安全渗透测试，SQL 注入脚本框架。
- [AngelSword](https://github.com/Lucifer1993/AngelSword) CMS 漏洞扫描框架。
- [snake](https://github.com/chynl/snake) 贪吃蛇演示 AI 训练与应用。
- [pe_tree](https://github.com/blackberry/pe_tree) PE 文件可视化树状分析工具。
- [pypyjs](https://github.com/pypyjs/pypyjs) pypy 转 JS 工具。
- [Kiwi](https://github.com/kiwitcms/Kiwi) 测试管理服务，有测试用例管理、自动化测试管理、API等功能。

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

### 功能更强大的 [virtualenv](https://github.com/pypa/virtualenv)

标准包 venv 只是提供生成本地 python 版本的虚拟环境。
当由于一些包需要的 Python 版本与本地不同时就需要用到 virtualenv 了。

```bash
pip install virtualenv
```

下载指定版本的 python 目录于 /path/python 执行以下命令生成。

```bash
virtualenv .pyvenv -p /path/python
```

### 使用 uv 创建虚拟环境

见下 uv 部分的项目管理。

### pyenv

- [pyenv 源码](https://github.com/pyenv/pyenv)
- [pyenv-win 源码](https://github.com/pyenv-win/pyenv-win)

管理、安装、切换 python 版本环境等。

### 使用 Visual Studio Code 快速使用和切换环境

VS Code 是个功能强大的编辑器，其实装上插件功能基本与 IDE 无异。
只要打开的目录下有 Python 的虚拟环境，便可以被识别到，通过简单地在底部栏地点击就可以切换。

## [uv](https://github.com/astral-sh/uv)

uv 工具集可以说是目前集成化最好的最佳实践。

可以自己到 GitHub 上下载 二进制文件 放到 PATH 里面的目录里。

```ps1
# 安装,由于墙需要梯子配个代理。
irm https://astral.sh/uv/install.ps1 -Proxy "http://127.0.0.1:10808" | iex
```

```bash
# 枚举 Python 版本，检索能力很强，连自己安装的没有在PATH里的都能枚举到。
uv python list

# 安装指定版本的 python
uv python install 3.14

# 创建项目
uv init <project_name>
# 直接在当前目录创建项目
uv init

# 添加库 ruff 到项目
uv add ruff

# 添加命令行工具 nuitka 到全局。
uv tool install "Nuitka[all]"

# 使用 ruff 做 lint 检查
uv run ruff check

# 包管理 lock 文件生成。
uv lock

# 根据 pyproject.toml 拉包
uv sync

# 执行脚本 main.py
uv run main.py

# 构建
uv build

# 发布
uv publish
```

## pip

- [pip 源码](https://github.com/pypa/pip)

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

## 打包与发布

### 使用 uv 创建基于 pyproject.toml 的项目兼容旧依赖方式

- [pip-tools](https://github.com/jazzband/pip-tools) 提供一些 pip-compile 此类工具

```bash
# 生成兼容旧依赖管理的 requirements.txt 文件。
pip-compile pyproject.toml

# 通过 requirements.txt 安装依赖。
pip install -r requirements.txt
```

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

- [setuptools 源码](https://github.com/pypa/setuptools)

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

```bash
# pip - 最小依赖
python -m pip install -U Nuitka
# pip - onefile/app 依赖
python -m pip install -U "Nuitka[app]"
# pip - 全部依赖
python -m pip install -U "Nuitka[all]"

# 通过 python 模块打包
python -m nuitka --mode=onefile hello.py
```

```bash
# 用 uv 安装到项目。
uv add Nuitka
uv add "Nuitka[app]"
uv add "Nuitka[all]"

# 用 uv 安装到全局
uv tool install "Nuitka[all]"

# 通过 uv 打包
# --mode=onefile 单文件，全部静态链接成单个文件。
# --mode=standalone 完整项目，报依赖的动态库都放到同个文件夹。
uv tool run --from nuitka nuitka.cmd --mode=onefile hello.py
```

### 基于 [py2exe](https://github.com/py2exe/py2exe) 的打包

### 基于 [poetry](https://github.com/python-poetry/poetry) 的打包

### 基于 [pyfuze](https://github.com/TanixLu/pyfuze) 的打包

### 基于 [cx_Freeze](https://github.com/marcelotduarte/cx_Freeze) 的打包

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


