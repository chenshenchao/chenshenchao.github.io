# 资源速查

## 字体

- [思源宋体](https://github.com/adobe-fonts/source-han-serif)
- [思源黑体](https://github.com/adobe-fonts/source-han-sans)

## 文档

- [fileformat](https://docs.fileformat.com/) 文件格式文档

## 资源站点

- [最高人民法院服务人民群众系统场景导航](https://cjdh.court.gov.cn/index.html)
- [中国裁判文书网](https://wenshu.court.gov.cn/)
- [中国执行信息公开网](https://cjdh.court.gov.cn/performInformation.html)
- [国家企业信用信息公示系统]()
- [中国人民银行征信中心网]()
- [国家智慧教育公共服务平台](https://www.smartedu.cn/)
- [中国职业技术教育网](https://www.chinazy.org/)
- [天地图](https://www.tianditu.gov.cn/) 国家地理信息公共服务平台，有提供API服务。

### 数据站点

- [证券宝](https://www.baostock.com) 免费、开源的证券数据平台（无需注册）。
- [tushare](https://www.tushare.pro) 大数据开放社区
- [joinquant](https://www.joinquant.com)
- [bigquant](https://www.bigquant.com)

### 免费云服务器站点

- [Edge One](https://edgeone.ai/) 腾讯边缘开发者平台。（有类 GitHub Pages 的免费 EdgeOne Pages 服务）

### 开发阶段 Fake 站点

- [githubusercontent](https://avatars.githubusercontent.com/u/27744505) GitHub 头像。偶尔被墙。
- [pravatar.cc](https://i.pravatar.cc/300) 生成随机头像。目前没被墙。
- [picsum.photos](https://picsum.photos/seed/oRV0aovmT/3950/597) 免版权的随机占位图。目前没被墙。
- [placehold.co](https://placehold.co/200x150/0066CC/FFFFFF?text=UserAvatar) 免费占位图，文字只支持英文，被墙。
- [loremflickr](https://loremflickr.com/3084/1275?lock=4950428607615840) 免费占位符图片生成服务。好像无了，但是FakerJs 生成用了这个站点。
- [cdn.jsdelivr.net](https://cdn.jsdelivr.net) CDN 分发，faker 生成图片会出现。

### GitHub 知名组织

- [microsoft](https://github.com/microsoft)
- [google](https://github.com/google)
- [facebookresearch](https://github.com/facebookresearch)

## 常用工具

### AI 编程工具

- [trae](https://www.trae.ai) 字节编程 AI IDE
- [qcoder](https://qoder.com) 阿里编程 AI IDE
- [qwen code](https://github.com/QwenLM/qwen-code) qwen code 源码

```bash
# claude code 命令行工具
npm install -g @anthropic-ai/claude-code
# 运行
claude

# openai codex 命令行工具
npm install -g @openai/codex
# 运行
codex

# 千问命令行工具
npm install -g @qwen-code/qwen-code
# 运行
qwen
```

### AI 界面设计工具

### AI 版本控制工具

- [DVC](https://github.com/iterative/dvc) 用于数据版本与机器学习试验。

### 项目版本管理工具

- [git]()
- [monorepo]()

### 架构设计工具

- [Pencil](https://github.com/evolus/pencil) 开源原型设计软件。
- [DrawIO](https://github.com/jgraph/drawio-desktop) 流程图、架构图、导图软件。
- [DrawDB](https://github.com/drawdb-io/drawdb) 数据库设计图形工具。

### 编辑器

- [Zed](https://zed.dev/) rust 开发，打开很快，可以取代 Notepad++ 。
- [lapce](https://github.com/lapce/lapce) rust 开发
- [helix](https://github.com/helix-editor/helix) 类 vim 的命令行文本编辑器。
- [LiteXL](https://github.com/lite-xl/lite-xl) 打开稍快于 VSCode 但功能又弱之。

### 文件处理工具

- [vtracer](https://github.com/visioncortex/vtracer) 像素图(gif、jpg、png等)转SVG命令行工具。
- [potrace](https://potrace.sourceforge.net/) 像素图（pnm、bmp等）转SVG命令行工具。
- [EasyDb](https://github.com/shencangsheng/easydb_app) 用 SQL 像数据库一样处理 CSV、JSON、Excel 等文件的查询。
- [rembg](https://github.com/danielgatis/rembg) 抠图工具，Python 命令行。
- [espeak-ng](https://github.com/espeak-ng/espeak-ng) 跨平台 TTS 工具。
- [olive](https://github.com/olive-editor/olive) 音频编辑工具。
- [audacity](https://github.com/audacity/audacity) 音频编辑工具。
- [lmms](https://github.com/LMMS/lmms) 音乐编辑工具。
- [Detect-It-Easy](https://github.com/horsicq/Detect-It-Easy) 可执行文件等多种文件查看探测器。
- [ghidra](https://github.com/NationalSecurityAgency/ghidra) 逆向分析工具。

### 监控工具

- [wireshark](https://github.com/wireshark/wireshark) 抓包工具。
- [sniffnet](https://github.com/GyulyVGC/sniffnet) 网络监控工具。
- [grafana](https://github.com/grafana/grafana) Web 数据库监控面板。

### 服务型工具

- [milvus](https://milvus.io) 向量数据库(GO 语言)，官方给出了很多应用示例（RAG、图搜等）快速开发应用。
- [weaviate](https://github.com/weaviate/weaviate) 向量数据库(GO 语言)
- [qdrant](https://github.com/qdrant/qdrant) 向量数据库（rust 语言），开放给多种语言使用，主要支持 python 的封装。
- [lancedb](https://github.com/lancedb/lancedb) 支持向量和全文索引数据库（rust 语言），主要支持 python 的封装。
- [vectordb](https://github.com/epsilla-cloud/vectordb) 向量数据库（C++ 语言），主要支持 python 的封装。
- [ElasticSearch](https://github.com/elastic/elasticsearch) 全文索引数据库（Java 语言）。
- [zincsearch](https://github.com/zincsearch/zincsearch) 类 ElasticSearch 全文索引数据库（GO 语言）。
- [sonic](https://github.com/valeriansaliou/sonic) 全文搜索数据库。
- [meilisearch](https://github.com/meilisearch/meilisearch) 全文搜索数据库。
- [manticoresearch](https://github.com/manticoresoftware/manticoresearch) 类 ElasticSearch 全文索引数据库（C 语言）。
- [Toshi](https://github.com/toshi-search/Toshi) 全文搜索引擎。
- [questdb](https://github.com/questdb/questdb) 时序数据库（rust 语言），支持多语言客户端。
- [rustfs](https://github.com/rustfs/rustfs) rust 实现的高性能分布式对象存储。
- [seaweedfs](https://github.com/seaweedfs/seaweedfs) GO 实现的高性能分布式对象存储。
- [KeyDB](https://github.com/Snapchat/KeyDB) 扩展 Redis 为多线程的项目。
- [etcd](https://github.com/etcd-io/etcd) Go 开发的配置管理服务器。
- [Consul](https://github.com/hashicorp/consul) Go 开发的配置管理服务器。
- [kubebrain](https://github.com/kubewharf/kubebrain) 为 k8s 用 Go 开发的配置管理服务器，兼容 etcd 的 API 协议。
- [zookeeper](https://github.com/apache/zookeeper) Java 开发的配置管理服务器。
- [eureka](https://github.com/Netflix/eureka) Netflix 用 Java 开发的配置管理服务器。
- [ONLYOFFICE](https://github.com/ONLYOFFICE) 囊括了 microsoft office 以及 adobe pdf 等办公文件处理和前端插件的一套技术解决方案，有免费版本。
- [JasperReports](https://www.jaspersoft.com/products/jaspersoft-community) Java 开发的报表软件，[GitHub仓库](https://github.com/Jaspersoft/jasperreports)，功能上比市面上的 FastReport、ActiveReports 等要少一些，但是胜在有免费版。

### 硬件设计工具

- [FreeCAD](https://github.com/FreeCAD/FreeCAD) 参数化 3D 建模软件。
- [KiCAD](https://github.com/KiCad/kicad-source-mirror) 基于 FreeCAD 的 EDA。
- [LibrePCB](https://github.com/LibrePCB/LibrePCB) 开源 EDA 。
- [horizon](https://github.com/horizon-eda/horizon) 开源 EDA 。
- [SerialTool](https://github.com/skiars/SerialTool) 串口工具。
