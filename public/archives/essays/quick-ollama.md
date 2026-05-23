# [草稿]Ollama 速查

- [ollama](https://github.com/ollama/ollama)

ollama 是一个把多个 Transformers 整合到一起，方便安装部署的环境。
如果不做模型开发，只是做应用开发的话，ollama 很方便。

## 命令

虽然 Ollama 已经开始添加图形界面，但是很多功能还是只能靠命令。

```bash
# 列举模型
ollama list

# 停止模型
ollama stop llama3:latest

# 删除模型
ollama rm llama3:latest
```