import{b as l,o as h}from"./vue-router-ff0be884.js";import{l as u}from"./archive-e0c979b9.js";import{y as f,h as k,c as q,v as g,F as n,C as b,I as v,H as c,N as e,G as _,O as p}from"./@vue-d261f537.js";import{_ as w}from"./plugin-vueexport-helper-c27b6911.js";import"./highlight.js-665a622b.js";import"./crypto-js-9bf15f03.js";import"./highlight.js-lib-languages-1-b101391b.js";import"./highlight.js-lib-languages-a-16a177ab.js";import"./highlight.js-lib-languages-x-364ed794.js";import"./highlight.js-lib-languages-b-b6e567a1.js";import"./highlight.js-lib-languages-c-234f4f8e.js";import"./highlight.js-lib-languages-d-7b8159cb.js";import"./highlight.js-lib-languages-m-b6de83b3.js";import"./highlight.js-lib-languages-e-fad85485.js";import"./highlight.js-lib-languages-r-53dfddc0.js";import"./highlight.js-lib-languages-f-8820c8d5.js";import"./highlight.js-lib-languages-g-ea579cf1.js";import"./highlight.js-lib-languages-h-74f34ea6.js";import"./highlight.js-lib-languages-i-d0f5bb2d.js";import"./highlight.js-lib-languages-j-ef705224.js";import"./highlight.js-lib-languages-k-220e6614.js";import"./highlight.js-lib-languages-l-555830da.js";import"./highlight.js-lib-languages-p-f2205468.js";import"./highlight.js-lib-languages-n-816e5f3a.js";import"./highlight.js-lib-languages-o-b41baf90.js";import"./highlight.js-lib-languages-q-2501bc69.js";import"./highlight.js-lib-languages-s-a87df519.js";import"./highlight.js-lib-languages-t-23d3f6da.js";import"./highlight.js-lib-languages-y-3713b1da.js";import"./highlight.js-lib-languages-v-73a12446.js";import"./highlight.js-lib-languages-w-568a4b3d.js";import"./highlight.js-lib-languages-z-d809bd39.js";import"./lodash-29222819.js";import"./marked-59892390.js";import"./marked-highlight-d2522e5a.js";const x={class:"archive-info"},S={class:"archive-info-item"},C={class:"archive-info-item"},L=["innerHTML"],P=f({__name:"ArchivePage",setup(W){const A=l(),m=k({content:"",path:""}),a=q(()=>[{path:"essays/quick-ai.md",createAt:"2025-08-21",modifyAt:"2025-09-28",mtime:1759066729e3,title:"AI 速查\r",summary:`# AI 速查\r
\r
人工智能目前发展迅速，目前最主要的就是 LLM 的 AI 占主导地位。大语言模型开发非常耗费资�`},{path:"essays/quick-android.md",createAt:"2025-05-23",modifyAt:"2025-09-28",mtime:1759066729e3,title:"Android 速查\r",summary:`# Android 速查\r
\r
- 无障碍服务（Accessibility Service），给残障用户开发辅助工具，可以做自动化。\r
\r
\r
\r
## 开�`},{path:"essays/quick-nginx.md",createAt:"2025-06-25",modifyAt:"2025-09-28",mtime:1759066729e3,title:"Nginx 速查\r",summary:`# Nginx 速查\r
\r
## 常用命令\r
\r
\`\`\`bash\r
# 测试配置\r
nginx -t\r
\r
# 关闭\r
nginx -s stop\r
\`\`\`\r
\r
## 配置\r
\r
### 日志\r
\r
\`\`\`ini\r`},{path:"essays/quick-python.md",createAt:"2025-05-01",modifyAt:"2025-09-28",mtime:1759066729e3,title:"python 速查\r",summary:`# python 速查\r
\r
- 3.8.10 最后一个支持 Windows 7 的版本\r
\r
## 虚拟环境\r
\r
如 rust、C#、js(node) 等的依赖库都是和�`},{path:"essays/sources.md",createAt:"2025-06-07",modifyAt:"2025-09-28",mtime:1759066729e3,title:"资源\r",summary:`# 资源\r
\r
## 字体\r
\r
[思源宋体](https://github.com/adobe-fonts/source-han-serif)\r
[思源黑体](https://github.com/adobe-fonts/sour`},{path:"essays/quick-java.md",createAt:"2025-09-26",modifyAt:"2025-09-26",mtime:1758880236e3,title:"Java 速查\r",summary:`# Java 速查\r
\r
[SDKMAN](https://sdkman.io/) Java SDK 多版本管理工具。（目前只支持 Linux、MacOS； Windows 下只能装虚�`},{path:"essays/quick-linux.md",createAt:"2025-05-23",modifyAt:"2025-09-26",mtime:1758880236e3,title:"Linux 速查\r",summary:`# Linux 速查\r
\r
## 常用命令\r
\r
\`\`\`bash\r
# 查看系统信息\r
uname -a\r
uname -m\r
lsb_release -a\r
cat /etc/os-release\r
cat /etc/issue\r`},{path:"essays/quick-spring-boot.md",createAt:"2025-09-26",modifyAt:"2025-09-26",mtime:1758880236e3,title:"Spring boot 速查\r",summary:"# Spring boot 速查\r\n\r\n```bash\r\n# 运行 bootRun 任务（运行 spring boot 服务）\r\ngradlew bootRun\r\n```"},{path:"essays/quick-windows.md",createAt:"2025-05-23",modifyAt:"2025-09-26",mtime:1758880236e3,title:"Windows 速查\r",summary:`# Windows 速查\r
\r
## Windows API\r
\r
### 管道(pipe)\r
\r
Windows 下的管道类似文件，而且使用了 ReadFile WriteFile 这些文件`},{path:"essays/quick-zookeeper.md",createAt:"2025-09-26",modifyAt:"2025-09-26",mtime:1758880236e3,title:"Zookeeper 速查\r",summary:`# Zookeeper 速查\r
\r
\`\`\`bash\r
# 单条执行 help\r
zkCli -server 127.0.0.1:2181 help\r
# 单条执行 create\r
zkCli -server 127.0.0.1:2181 c`},{path:"writing/work.md",createAt:"2025-08-07",modifyAt:"2025-09-26",mtime:1758880236e3,title:"做事\r"},{path:"essays/quick-react.md",createAt:"2025-05-21",modifyAt:"2025-09-25",mtime:1758790778e3,title:"React 速查\r"},{path:"essays/quick-typescript.md",createAt:"2025-05-23",modifyAt:"2025-09-25",mtime:1758790778e3,title:"TypeScript 速查\r"},{path:"essays/quick-wechat.md",createAt:"2025-08-13",modifyAt:"2025-09-25",mtime:1758790778e3,title:"微信（WeChat）速查\r"},{path:"essays/quick-npm.md",createAt:"2025-04-06",modifyAt:"2025-09-24",mtime:1758663996e3,title:"npm 速查\r"},{path:"essays/quick-rust.md",createAt:"2025-05-01",modifyAt:"2025-09-24",mtime:1758663996e3,title:"rust 速查\r"},{path:"essays/quick-taro.md",createAt:"2025-09-24",modifyAt:"2025-09-24",mtime:1758663996e3,title:"Taro 速查\r"},{path:"essays/quick-uniapp.md",createAt:"2025-09-24",modifyAt:"2025-09-24",mtime:1758663996e3,title:""},{path:"essays/quick-nextjs.md",createAt:"2025-06-17",modifyAt:"2025-09-23",mtime:1758596785e3,title:"NextJs 速查\r"},{path:"essays/quick-flutter.md",createAt:"2025-07-27",modifyAt:"2025-09-18",mtime:175819175e4,title:"Flutter 速查\r"},{path:"essays/quick-wpf.md",createAt:"2025-09-18",modifyAt:"2025-09-18",mtime:1758141402e3,title:"WPF 速查\r"},{path:"essays/quick-excel.md",createAt:"2025-09-09",modifyAt:"2025-09-09",mtime:1757427662e3,title:"Excel 速查\r"},{path:"essays/quick-git.md",createAt:"2025-04-06",modifyAt:"2025-09-07",mtime:1757247253e3,title:"Git 速查\r"},{path:"bookshelf/compile.md",createAt:"2024-08-22",modifyAt:"2025-09-06",mtime:1757164143e3,title:"编译原理 书籍\r"},{path:"essays/quick-web3.md",createAt:"2025-09-06",modifyAt:"2025-09-06",mtime:1757164143e3,title:"Web3 速查\r"},{path:"essays/quick-solidity.md",createAt:"2025-09-05",modifyAt:"2025-09-05",mtime:1757087828e3,title:"Solidity 速查\r"},{path:"essays/quick-openssl.md",createAt:"2025-05-23",modifyAt:"2025-09-02",mtime:1756800468e3,title:"OpenSSL 速查\r"},{path:"bookshelf/db.md",createAt:"2025-06-06",modifyAt:"2025-08-28",mtime:1756336147e3,title:"数据库书籍\r"},{path:"essays/quick-csharp.md",createAt:"2025-06-06",modifyAt:"2025-08-26",mtime:1756142647e3,title:"C# 速查\r"},{path:"essays/quick-mysql.md",createAt:"2025-04-06",modifyAt:"2025-08-26",mtime:1756142647e3,title:"MySQL 速查\r"},{path:"reading/how-the-steel-was-tempered.md",createAt:"2025-08-07",modifyAt:"2025-08-25",mtime:1756054026e3,title:"读《钢铁是怎样炼成》\r"},{path:"writing/ai.md",createAt:"2025-07-27",modifyAt:"2025-08-25",mtime:1756054026e3,title:"对智能体的调查\r"},{path:"bookshelf/python.md",createAt:"2025-05-29",modifyAt:"2025-08-21",mtime:1755732549e3,title:"Python 书籍\r"},{path:"essays/quick-grpc.md",createAt:"2025-08-21",modifyAt:"2025-08-21",mtime:1755732549e3,title:"grpc 速查\r"},{path:"essays/quick-go.md",createAt:"2025-06-06",modifyAt:"2025-08-16",mtime:175534769e4,title:"Go 速查\r"},{path:"essays/quick-podman.md",createAt:"2025-07-20",modifyAt:"2025-08-16",mtime:175534769e4,title:"Podman 速查\r"},{path:"essays/quick-ffmpeg.md",createAt:"2025-08-13",modifyAt:"2025-08-13",mtime:1755028178e3,title:"ffmpeg 速查\r"},{path:"reading/the-art-of-making-money.md",createAt:"2025-08-11",modifyAt:"2025-08-11",mtime:1754917771e3,title:"读《赚钱的艺术》\r"},{path:"essays/quick-docker.md",createAt:"2025-05-29",modifyAt:"2025-08-11",mtime:1754847869e3,title:"Docker 速查\r"},{path:"essays/quick-kubernetes.md",createAt:"2025-08-11",modifyAt:"2025-08-11",mtime:1754847869e3,title:"Kubernetes 速查\r"},{path:"essays/quick-ssh.md",createAt:"2025-04-09",modifyAt:"2025-08-07",mtime:1754572371e3,title:"SSH 速查\r"},{path:"reading/animal-farm.md",createAt:"2025-07-29",modifyAt:"2025-07-29",mtime:1753792409e3,title:"读《动物庄园》\r"},{path:"reading/ren.md",createAt:"2024-08-25",modifyAt:"2025-07-29",mtime:1753792409e3,title:"读《人祖传》\r"},{path:"reading/the-prince.md",createAt:"2025-07-27",modifyAt:"2025-07-27",mtime:1753607148e3,title:"读《君主论》\r"},{path:"essays/quick-bat.md",createAt:"2025-06-17",modifyAt:"2025-06-20",mtime:1750385862e3,title:"bat 速查\r"},{path:"essays/quick-lua.md",createAt:"2025-06-17",modifyAt:"2025-06-17",mtime:1750115227e3,title:"lua 速查\r"},{path:"essays/quick-freecad.md",createAt:"2025-04-07",modifyAt:"2025-06-11",mtime:1749615112e3,title:"FreeCAD 速查\r"},{path:"essays/quick-gimp.md",createAt:"2025-04-11",modifyAt:"2025-06-11",mtime:1749615112e3,title:"GIMP 速查\r"},{path:"essays/quick-prolog.md",createAt:"2025-06-07",modifyAt:"2025-06-07",mtime:1749246057e3,title:"Prolog 速查\r"},{path:"coding/the-wild-way-of-coding.md",createAt:"2024-10-31",modifyAt:"2025-06-06",mtime:1749153432e3,title:"编码的荒野之道\r"},{path:"essays/quick-sqlite.md",createAt:"2025-05-21",modifyAt:"2025-06-06",mtime:1749153432e3,title:"Sqlite 速查\r"},{path:"reading/the-razors-edge.md",createAt:"2025-06-06",modifyAt:"2025-06-06",mtime:1749153432e3,title:"读 《刀锋》\r"},{path:"essays/quick-pascal.md",createAt:"2025-05-23",modifyAt:"2025-05-26",mtime:1748254548e3,title:"Pascal 速查\r"},{path:"bookshelf/csharp.md",createAt:"2025-05-23",modifyAt:"2025-05-23",mtime:1747962925e3,title:"C# 书籍\r"},{path:"bookshelf/java.md",createAt:"2025-05-23",modifyAt:"2025-05-23",mtime:1747962925e3,title:"Java 书籍\r"},{path:"essays/quick-blender.md",createAt:"2025-04-06",modifyAt:"2025-05-23",mtime:1747962925e3,title:"Blender 速查\r"},{path:"essays/quick-com-ole.md",createAt:"2025-05-21",modifyAt:"2025-05-23",mtime:1747962925e3,title:"COM 和 OLE 速查\r"},{path:"essays/quick-let-encrypt.md",createAt:"2025-04-11",modifyAt:"2025-05-23",mtime:1747962925e3,title:"let'encrypt 速查\r"},{path:"essays/quick-webview2.md",createAt:"2025-05-21",modifyAt:"2025-05-23",mtime:1747962925e3,title:"WebView2 速查\r"},{path:"essays/quick-lazarus.md",createAt:"2025-05-02",modifyAt:"2025-05-21",mtime:1747774042e3,title:"Lazarus 速查\r"},{path:"essays/quick-dotnet.md",createAt:"2025-04-10",modifyAt:"2025-05-13",mtime:1747122504e3,title:"dotnet 速查\r"},{path:"essays/github-pages-with-vue3.md",createAt:"2023-10-11",modifyAt:"2025-05-10",mtime:1746818426e3,title:"用 Vue 3 写 GitHub Pages\r"},{path:"essays/quick-nsis.md",createAt:"2025-05-02",modifyAt:"2025-05-02",mtime:1746150177e3,title:"NSIS 速查\r"},{path:"essays/quick-curl.md",createAt:"2025-04-06",modifyAt:"2025-04-06",mtime:1743946006e3,title:"curl 速查\r"},{path:"essays/quick-httpd.md",createAt:"2025-04-06",modifyAt:"2025-04-06",mtime:1743946006e3,title:"Apache httpd 速查\r"},{path:"writing/power.md",createAt:"2024-11-27",modifyAt:"2025-03-09",mtime:1741529862e3,title:"人类社会驱动力\r"},{path:"reading/one-hundred-years-of-solitude.md",createAt:"2023-11-09",modifyAt:"2024-12-17",mtime:1734371806e3,title:"读《百年孤独》\r"},{path:"bookshelf/ai.md",createAt:"2024-08-11",modifyAt:"2024-10-31",mtime:1730310651e3,title:"AI 书籍\r"},{path:"reading/norwegian-wood.md",createAt:"2024-07-03",modifyAt:"2024-10-23",mtime:1729615428e3,title:"读《挪威的森林》\r"},{path:"reading/don-quijote-de-la-mancha.md",createAt:"2023-11-24",modifyAt:"2023-11-24",mtime:1700755857e3,title:"读《堂吉诃德》\r"},{path:"reading/catch-22.md",createAt:"2023-10-27",modifyAt:"2023-10-27",mtime:169834954e4,title:"读《第22条军规》\r"}].find(i=>i.path==m.path)),s=async i=>{const t=i.params.path,r=`/archives/${t}`;t!=m.path&&(m.path=t,m.content=await u(r))};return g(async()=>{await s(A)}),h(async(i,t)=>{await s(i)}),(i,t)=>{const r=n("pc-banner"),y=n("pc-center-part-layout");return b(),v(y,{class:"pc-archive-page"},{background:c(()=>t[0]||(t[0]=[e("div",{class:"background"},null,-1)])),default:c(()=>{var o,d;return[_(r),e("div",x,[e("div",S,[t[1]||(t[1]=e("span",null,"创建日期：",-1)),e("span",null,p((o=a.value)==null?void 0:o.createAt),1)]),e("div",C,[t[2]||(t[2]=e("span",null,"修改日期：",-1)),e("span",null,p((d=a.value)==null?void 0:d.modifyAt),1)])]),e("div",{class:"archive-sheet",innerHTML:m.content},null,8,L)]}),_:1})}}});const At=w(P,[["__scopeId","data-v-846884ba"]]);export{At as default};
