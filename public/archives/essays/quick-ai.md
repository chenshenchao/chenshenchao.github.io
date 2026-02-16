# AI 速查

人工智能目前发展迅速，目前最主要的就是 LLM 的 AI 占主导地位。大语言模型开发非常耗费资金，动则上百亿的投入，只有世界上少数几个大公司才能投入，这也是早期大部分开发者都难以参与到大模型 AI 开发的原因。
随着 LLM 的推广，为了让更多的人参与进来并让 AI 变现，同时又保护投入早期开发的大公司的利益，在模型开发之后出现应用开发。开发者可以不用开发自己的大模型，把大模型作为一种云服务，开发者通过调用服务商的大模型来开发自己的应用。（目前看，小公司的 AI 应用的开发目前几乎不可行，因为模型换代太快，导致应用落地时模型已经需要换代了。要等待数年后模型的潜力更多被开发出来，换代更慢的时候，小公司的应用开发才真正可行。现阶段大部分的 AI 应用都由大公司开发，且大部分很快就被其他公司超越并挤出市场。）

## 框架

- [pytorch](https://github.com/pytorch/pytorch) 脸书的框架，目前主流。
- [tensorflow](https://github.com/tensorflow/tensorflow) 谷歌的框架，早期主流。
- [Paddle](https://github.com/PaddlePaddle/Paddle) 百度的框架，中文名“飞桨”。
- [Paddle Lite](https://github.com/PaddlePaddle/Paddle-Lite.git) 百度飞桨（轻量版），只能用于推理，优化了推理。

## 资料源

- [HuggingFace](https://huggingface.co/)  提供模型(Models)、数据集（Datasets）仓库和展示（Spaces）的站点。
- [OpenRouter](https://openrouter.ai/)
- [ModelScope](https://www.modelscope.cn)
- [阿里云百炼](https://bailian.console.aliyun.com/) 云平台，目前有送免费 100万 tokens 额度。

### Huggingface 相关

#### huggingface_hub

因为墙 需要使用 huggingface_hub 设置镜像

```bat
@rem 安装
pip install -U huggingface_hub

@rem 设置镜像 cmd
set HF_ENDPOINT=https://hf-mirror.com

@rem 设置镜像 POWERSHELL
$env:HF_ENDPOINT="https://hf-mirror.com"

@rem 下载到指定路径
@rem --resume-download （huggingface 路径）发布者/模型
@rem --local-dir 本地地址 默认 ~/cache/huggingface/hub
huggingface-cli download --resume-download intfloat/e5-large-v2 --local-dir ~/cache/huggingface/hub
```

#### hf-transfer

上面切换代理，但是速度还是太慢，因为模型都是用 G 表示大小的。

装上后 使用 huggingface_hub 会提速。

缺点：
1. 启用后没有进度，所以看着像卡着。。
2. 启用镜像和国内镜像源不兼容。

```bat
@rem 安装
pip install -U hf-transfer

@rem 设置启动 cmd
set HF_HUB_ENABLE_HF_TRANSFER=1

@rem 设置启动 powershell
$env:HF_HUB_ENABLE_HF_TRANSFER=1

@rem 之后流程就是使用 huggingface_hub
```

## 术语

- 提示词（Prompt）
- Token

## 常用库

- [OpenVINO](https://github.com/openvinotoolkit/openvino) 优化模型库，主要优化 Intel 的CPU和GPU。

## 模型

- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3)
- [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1)
- [VibeVoice](https://github.com/microsoft/VibeVoice) 微软开源 TTS 模型。
- [whisper](https://github.com/openai/whisper) openai 开源的语音模型。
- [OmniParser](https://github.com/microsoft/OmniParser) 微软开源 UI 界面分析模型。
- [UI-TARS](https://github.com/bytedance/UI-TARS) 字节开源 UI 界面分析模型。
- [TimesFM](https://github.com/google-research/timesfm) 时间序列预测，预测股票走势，采购计划、天气预报等。
- [ttt-video-dit](https://github.com/test-time-training/ttt-video-dit) 视频模型。
- [star-vector](https://github.com/joanrod/star-vector) 像素图转SVG模型。
- [AnimateDiff](https://github.com/guoyww/AnimateDiff) 动画模型。
- [sam3](https://github.com/facebookresearch/sam3) 脸书开源视觉图像模型，比 YOLO 更精细识别物体轮廓。
- [dinov2](https://github.com/facebookresearch/dinov2) 脸书开源视觉图像模型。
- [openpose](https://github.com/CMU-Perceptual-Computing-Lab/openpose) 肢体语言识别。
- [stable-diffusion](https://github.com/CompVis/stable-diffusion) 
- [ESRGAN](https://github.com/xinntao/ESRGAN) 生图，预训练模型中文支持很差。
- [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) 生图，预训练模型中文支持很差。
- [ControlNet](https://github.com/lllyasviel/ControlNet) 通过参考图控制图片的生成的模型。
- [bark](https://github.com/suno-ai/bark) 文本生成音频。
- [roop](https://github.com/s0md3v/roop) 换脸。
- [whisper-web](https://github.com/xenova/whisper-web) TTS 模型，预训练模型中文支持很差。
- [stanford_alpaca](https://github.com/tatsu-lab/stanford_alpaca)
- [LAVIS](https://github.com/salesforce/LAVIS) 多个图片、视频与文本的视觉模型整合库。
- [Generative-Adversarial-Networks-Projects](https://github.com/PacktPublishing/Generative-Adversarial-Networks-Projects) 一些 GAN 模型。

## AI 应用开发

就像移动端的软件叫 APP ，AI 应用也有个专用词 AI Agent 。
大模型由大公司开发，那么小公司如何开发自己的 AI 应用呢？
就在 AI 的上下文窗口做文章，以下的技术都是在 AI 的上下文进行操作。
什么是 AI 的上下文，就是对 AI 的输入和输出。
最简单的上下文就是什么都不做，直接把用户的提问输入给模型，再把模型的输出返回给用户。
所以对上下文的处理是有代价的，现在大部分 AI 应用都会在用户问一次模型后，通过多次调用模型，把输入和输出做加工后在返回给用户。
这样就由一次调用变成多次的损耗是线性增加的，最典型的就是 DeepSeek 刚火时的模式，先让 AI 用思考的方式总结一遍问题，然后再用总结的回答作为输入再输出回答。

### 开源 AI Agant 项目

- [AutoGen](https://github.com/microsoft/autogen) 微软给 python 的 multi-agent 框架。
- [Agent Lightning](https://github.com/microsoft/agent-lightning) 微软发布的 AI 代理训练与优化的框架，可以和 autogen 结合使用。
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) 软件公司 multi-agent 项目，可用于二开。
- [LiteLLM](https://github.com/BerriAI/litellm) 百种 AI API 接口设配库，解决多厂商 API 兼容性问题。
- [AutoAgent](https://github.com/HKUDS/AutoAgent) 命令行界面的 Agent 项目。
- [AgentGPT](https://github.com/reworkd/AgentGPT) 网页界面的 Agent 项目。
- [BabyAGI](https://github.com/yoheinakajima/babyagi) python 的 AGI 开发库。
- [sim](https://github.com/simstudioai/sim) workflow 项目。

### RAG（Retrieval Augmented Generation）

检索增强生成，这种技术只对 AI 的输入做操作，通过把预先存好的知识和与用户交流的内容存到数据库，在每次用户提问时，把知识库和之前与用户的交流内容检索出相关的内容出来混合当前用户的提问一起作为模型的输入传递给模型，通过这种优化对模型的输入的方式来提升模型回答的质量。

### MCP（Model Context Protocol）和 Function Calling

模型上下文协议，是为了规范化 AI 的输入和输出，从而让 AI 可以调用各种软件接口，让模型可以控制电脑、手机、查看浏览器做各种操作。当然由于模型能通过 MCP 连接网络查到更多的数据，也就保证了回答的时效性。

- [Servers](https://github.com/modelcontextprotocol/servers) MCP 官方库可以找到大部分 MCP Server 。
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) 微软 Playwright 的 MCP。
- [gimp-mcp](https://github.com/maorcc/gimp-mcp)

## AI 模型开发

模型开发属于基建，就像 MySQL、MongoDB、Redis 这些数据库由少数几个公司开发一样，模型开发也由少数几个公司开发。
目前大模型还处于快速发展多家竞争的阶段，大模型数量也比较多，等竞争期过后就会剩下几个主要的大模型。

### 预训练

### 微调


## 开发环境与工具

### [ollama](https://github.com/ollama/ollama)

ollama 是一个把多个 Transformers 整合到一起，方便安装部署的环境。
如果不做模型开发，只是做应用开发的话，ollama 很方便。
