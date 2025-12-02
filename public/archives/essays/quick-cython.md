# [草稿]cython 速查

## 构建

### pyproject.toml

```toml
[build-system]
requires = ["setuptools", "cython"]

[tool.setuptools]
ext-modules = [
  {name = "demo.hello", sources = ["./demo/hello.pyx"]} 
]
```

### [旧] setuptools 与 setup.py

```python
from setuptools import setup, Extension
from Cython.Build import cythonize

setup(
    name='demo-cython',
    ext_modules=cythonize(
        [
            Extension(
                name="demo.hello", # from demo import hello
                sources=["./demo/hello.pyx"],
            ),
            Extension(
                name="demo.lex", # from demo import hello
                sources=["./demo/lex.pyx"],
            ),
        ],
        language_level=3,  # 指定 python 版本 3
    ),
    zip_safe=False,
)
```

## 使用 C++ 

通过在 .pyx 文件中注释 distutils 来指定使用 c++

```python
# distutils: language=c++

# 使用 C++ 标准库
from libcpp.vector cimport vector
```
