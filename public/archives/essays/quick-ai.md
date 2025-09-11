# AI 速查

人工智能目前发展迅速，目前最主要的就是 LLM 的 AI 占主导地位。大语言模型开发非常耗费资金，动则上百亿的投入，只有世界上少数几个大公司才能投入，这也是早期大部分开发者都难以参与到大模型 AI 开发的原因。随着 LLM 的推广，为了让更多的人参与进来并让 AI 变现，同时又保护投入早期开发的大公司的利益，在模型开发之后出现应用开发。开发者可以不用开发自己的大模型，把大模型作为一种云服务，开发者通过调用服务商的大模型来开发自己的应用。

[HuggingFace](https://huggingface.co/)  提供模型(Models)、数据集（Datasets）仓库和展示（Spaces）的站点。
[OpenRouter](https://openrouter.ai/)
[ModelScope](https://www.modelscope.cn)
[阿里云百炼](https://bailian.console.aliyun.com/) 云平台，目前有送免费 100万 tokens 额度。

## 常用库

- [OpenVINO](https://github.com/openvinotoolkit/openvino) 优化模型库。

## 模型

- [VibeVoice](https://github.com/microsoft/VibeVoice) 微软开源 TTS 模型。
- [TimesFM](https://github.com/google-research/timesfm) 时间序列预测，预测股票走势，采购计划、天气预报等。

## AI 应用开发

就像移动端的软件叫 APP ，AI 应用也有个专用词 AI Agent 。
大模型由大公司开发，那么小公司如何开发自己的 AI 应用呢？
就在 AI 的上下文窗口做文章，以下的技术都是在 AI 的上下文进行操作。
什么是 AI 的上下文，就是对 AI 的输入和输出。
最简单的上下文就是什么都不做，直接把用户的提问输入给模型，再把模型的输出返回给用户。
所以对上下文的处理是有代价的，现在大部分 AI 应用都会在用户问一次模型后，通过多次调用模型，把输入和输出做加工后在返回给用户。
这样就由一次调用变成多次的损耗是线性增加的，最典型的就是 DeepSeek 刚火时的模式，先让 AI 用思考的方式总结一遍问题，然后再用总结的回答作为输入再输出回答。

### 开源 AI Agant 项目

- [AutoGen](https://github.com/microsoft/autogen) 微软发布的 multi-agent 框架。
- [Agent Lightning](https://github.com/microsoft/agent-lightning) 微软发布的 AI 代理训练与优化的框架，可以和 autogen 结合使用。
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) 软件公司 multi-agent 项目，可用于二开。
- [LiteLLM](https://github.com/BerriAI/litellm) 百种 AI API 接口设配库，解决多厂商 API 兼容性问题。
- [AgentGPT](https://github.com/reworkd/AgentGPT)
- [BabyAGI](https://github.com/yoheinakajima/babyagi)
- [sim](https://github.com/simstudioai/sim) workflow 项目。

### RAG（Retrieval Augmented Generation）

检索增强生成，这种技术只对 AI 的输入做操作，通过把预先存好的知识和与用户交流的内容存到数据库，在每次用户提问时，把知识库和之前与用户的交流内容检索出相关的内容出来混合当前用户的提问一起作为模型的输入传递给模型，通过这种优化对模型的输入的方式来提升模型回答的质量。

### MCP（Model Context Protocol）和 Function Calling

模型上下文协议，是为了规范化 AI 的输入和输出，从而让 AI 可以调用各种软件接口，让模型可以控制电脑、手机、查看浏览器做各种操作。当然由于模型能通过 MCP 连接网络查到更多的数据，也就保证了回答的时效性。

- [Servers](https://github.com/modelcontextprotocol/servers) MCP 官方库可以找到大部分 MCP Server 。
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) 微软 Playwright 的 MCP。

## AI 模型开发

模型开发属于基建，就像 MySQL、MongoDB、Redis 这些数据库由少数几个公司开发一样，模型开发也由少数几个公司开发。
目前大模型还处于快速发展多家竞争的阶段，大模型数量也比较多，等竞争期过后就会剩下几个主要的大模型。

### 预训练

### 微调


## 开发环境与工具

### ollama

ollama 是一个把多个 Transformers 整合到一起，方便安装部署的环境。
如果不做模型开发，只是做应用开发的话，ollama 很方便。
