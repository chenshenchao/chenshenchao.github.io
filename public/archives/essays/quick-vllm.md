# [草稿] vLLM 速查

- [vllm](https://github.com/vllm-project/vllm)
- [vllm-omni](https://github.com/vllm-project/vllm-omni)

```bash
# 安装 CPU 版本，不支持 windows 系统。Requires glibc ≥ 2.35 (Ubuntu 22.04+, Debian 12+, RHEL 9+) 
uv pip install vllm --extra-index-url https://wheels.vllm.ai/0.25.1/cpu --torch-backend cpu
```