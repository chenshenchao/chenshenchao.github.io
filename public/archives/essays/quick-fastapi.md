# [草稿]FastAPI 速查

[GitHub 仓库](https://github.com/fastapi/fastapi)

```bash
# fastapi 没有模板项目，通过以下流程创建引入。
# 创建项目
uv init my_app

# 添加库。
uv add fastapi
uv add uvicorn
```


fastapi 会提供一些命令行

```bash
# 开发
fastapi dev main.py
# 相当于
uvicorn main:app --reload
```

```bash
# 运行
fastapi run --workers 4 main.py
# 相当于
uvicorn main:app --host 0.0.0.0 --port 8080 --workers 4
```