import{m as u}from"./archive-e0c979b9.js";import{c as y}from"./@vueuse-a7ac5737.js";import{f as h,t as f}from"./encode-ab3002fd.js";import{l as o}from"./lodash-29222819.js";import{U as A,W as g}from"./crypto-js-9bf15f03.js";import{y as _,h as k,B as v,F as b,C as i,D as m,P as x,Q as q,u as w,I as P,H as p,R as l,O as d,N as r,G as L,S}from"./@vue-70ee5e1b.js";import{_ as I}from"./plugin-vueexport-helper-c27b6911.js";import"./highlight.js-665a622b.js";import"./highlight.js-lib-languages-1-b101391b.js";import"./highlight.js-lib-languages-a-16a177ab.js";import"./highlight.js-lib-languages-x-364ed794.js";import"./highlight.js-lib-languages-b-b6e567a1.js";import"./highlight.js-lib-languages-c-234f4f8e.js";import"./highlight.js-lib-languages-d-7b8159cb.js";import"./highlight.js-lib-languages-m-b6de83b3.js";import"./highlight.js-lib-languages-e-fad85485.js";import"./highlight.js-lib-languages-r-53dfddc0.js";import"./highlight.js-lib-languages-f-8820c8d5.js";import"./highlight.js-lib-languages-g-ea579cf1.js";import"./highlight.js-lib-languages-h-74f34ea6.js";import"./highlight.js-lib-languages-i-d0f5bb2d.js";import"./highlight.js-lib-languages-j-ef705224.js";import"./highlight.js-lib-languages-k-220e6614.js";import"./highlight.js-lib-languages-l-555830da.js";import"./highlight.js-lib-languages-p-f2205468.js";import"./highlight.js-lib-languages-n-816e5f3a.js";import"./highlight.js-lib-languages-o-b41baf90.js";import"./highlight.js-lib-languages-q-2501bc69.js";import"./highlight.js-lib-languages-s-a87df519.js";import"./highlight.js-lib-languages-t-23d3f6da.js";import"./highlight.js-lib-languages-y-3713b1da.js";import"./highlight.js-lib-languages-v-73a12446.js";import"./highlight.js-lib-languages-w-568a4b3d.js";import"./highlight.js-lib-languages-z-d809bd39.js";import"./marked-59892390.js";import"./marked-highlight-d2522e5a.js";const G={class:"md-index-page"},H={class:"archive-item"},M=["innerHTML"],B={class:"archive-info"},C={key:0,class:"archive-info-link"},N={class:"archive-info-item"},z={class:"archive-info-item"},T=_({__name:"IndexPage",setup(E){const a=k({archiveEnd:10,archives:[],searchText:""}),c=y(async()=>{const s=a.archives.filter(t=>o.isEmpty(a.searchText)?!0:o.isEmpty(t.title)?!1:o.lowerCase(t.title).indexOf(o.lowerCase(a.searchText))>=0).slice(0,a.archiveEnd).map(async t=>{if(!t.summary){const n=await h(t.path,140);t.summary=A.stringify(g.create(f(n).buffer))}return t});return await Promise.all(s)});return v(async()=>{const s=[{path:"essays/github-pages-with-vue3.md",createAt:"2023-10-11",modifyAt:"2025-05-10",mtime:1746818426e3,title:"用 Vue 3 写 GitHub Pages\r",summary:`# 用 Vue 3 写 GitHub Pages\r
\r
要写博客的话 GitHub Pages 是个不错的选择。但是 GitHub Pages 是静态的，并不能像常�`},{path:"essays/quick-git.md",createAt:"2025-04-06",modifyAt:"2025-05-10",mtime:1746816778e3,title:"Git 速查\r",summary:`# Git 速查\r
\r
\`\`\`bash\r
# 初始化，会生成 .get 目录\r
git init\r
\r
# 把修改加入\r
git add .\r
\r
# 提交\r
git commit -m "提交备`},{path:"essays/quick-lazarus.md",createAt:"2025-05-02",modifyAt:"2025-05-10",mtime:1746816582e3,title:"Lazarus 速查\r",summary:`# Lazarus 速查\r
\r
- *.lpg Lazarus 项目组文件（XML 源码文件）\r
- *.lpi Lazarus 项目文件（XML 源码文件）\r
- *.lpr Lazar`},{path:"essays/quick-gimp.md",createAt:"2025-04-11",modifyAt:"2025-05-07",mtime:1746614063e3,title:"GIMP 速查\r",summary:`# GIMP 速查\r
\r
## 蒙版\r
\r
通过给图层添加蒙版，可以做透明效果，蒙版其实就是透明通道，每个像素的最大�`},{path:"essays/quick-rust.md",createAt:"2025-05-01",modifyAt:"2025-05-05",mtime:1746450053e3,title:"rust 速查\r",summary:`# rust 速查\r
\r
## rustup\r
\r
rustup 用于安装和更新 rust 编译构造工具。\r
\r
由于“墙”，需要配置国内镜像源。\r
\r`},{path:"essays/quick-nsis.md",createAt:"2025-05-02",modifyAt:"2025-05-02",mtime:1746150177e3,title:"NSIS 速查\r",summary:`# NSIS 速查\r
\r
一个通过脚本语言定制打包安装软件的工具。\r
\r
注：*.nsi 文件必须以 UTF-8 with BOM 编码。\r
\r
[�`},{path:"essays/quick-python.md",createAt:"2025-05-01",modifyAt:"2025-05-01",mtime:1746113781e3,title:"python 速查\r",summary:`# python 速查\r
\r
## pip\r
\r
Python 自带的包管理器。\r
\r
因为墙的原因，需要指定国内镜像。\r
\r
\`\`\`bash\r
# -i 指定镜�`},{path:"essays/quick-ssh.md",createAt:"2025-04-09",modifyAt:"2025-05-01",mtime:1746113781e3,title:"SSH 速查\r",summary:`# SSH 速查\r
\r
## ssh 命令\r
\r
只要远程主机的用户的 .ssh/authorized_keys 文件里有你的公钥，就可以用 ssh 连接。\r
`},{path:"essays/quick-let-encrypt.md",createAt:"2025-04-11",modifyAt:"2025-04-11",mtime:1744365686e3,title:"let'encrypt 速查\r",summary:`# let'encrypt 速查\r
\r
## Nginx 自动证书\r
\r
### apt 下 certbot 方式\r
\r
\`\`\`bash\r
# 安装 nginx\r
apt install nginx\r
\r
# 安装 certbo`},{path:"essays/quick-dotnet.md",createAt:"2025-04-10",modifyAt:"2025-04-10",mtime:1744217107e3,title:"dotnet 速查\r",summary:`# dotnet 速查\r
\r
\`\`\`bash\r
# 安装 ef 命令行工具\r
dotnet tool install --global dotnet-ef\r
\r
# 更新 ef 命令行工具\r
dotnet tool `},{path:"essays/quick-blender.md",createAt:"2025-04-06",modifyAt:"2025-04-09",mtime:1744187147e3,title:"Blender 速查\r"},{path:"essays/quick-curl.md",createAt:"2025-04-06",modifyAt:"2025-04-06",mtime:1743946006e3,title:"curl 速查\r"},{path:"essays/quick-httpd.md",createAt:"2025-04-06",modifyAt:"2025-04-06",mtime:1743946006e3,title:"Apache httpd 速查\r"},{path:"essays/quick-mysql.md",createAt:"2025-04-06",modifyAt:"2025-04-06",mtime:1743946006e3,title:"MySQL 速查\r"},{path:"essays/quick-npm.md",createAt:"2025-04-06",modifyAt:"2025-04-06",mtime:1743946006e3,title:"npm 速查\r"},{path:"bookshelf/compile.md",createAt:"2024-08-22",modifyAt:"2025-04-02",mtime:1743584258e3,title:"编译原理 书籍\r"},{path:"essays/work.md",createAt:"2025-03-28",modifyAt:"2025-03-29",mtime:1743256062e3,title:"做事\r"},{path:"bookshelf/the-programming-language-csharp.md",createAt:"2024-08-11",modifyAt:"2025-03-09",mtime:174153196e4,title:"C# 书籍\r"},{path:"writing/power.md",createAt:"2024-11-27",modifyAt:"2025-03-09",mtime:1741529862e3,title:"人类社会驱动力\r"},{path:"reading/one-hundred-years-of-solitude.md",createAt:"2023-11-09",modifyAt:"2024-12-17",mtime:1734371806e3,title:"读《百年孤独》\r"},{path:"bookshelf/ai.md",createAt:"2024-08-11",modifyAt:"2024-10-31",mtime:1730310651e3,title:"AI 书籍\r"},{path:"reading/norwegian-wood.md",createAt:"2024-07-03",modifyAt:"2024-10-23",mtime:1729615428e3,title:"读《挪威的森林》\r"},{path:"reading/ren.md",createAt:"2024-08-25",modifyAt:"2024-08-25",mtime:1724592206e3,title:"读《人祖传》\r"},{path:"bookshelf/the-programming-language-java.md",createAt:"2024-08-11",modifyAt:"2024-08-11",mtime:172338238e4,title:"Java 书籍\r"},{path:"reading/don-quijote-de-la-mancha.md",createAt:"2023-11-24",modifyAt:"2023-11-24",mtime:1700755857e3,title:"读《堂吉诃德》\r"},{path:"reading/catch-22.md",createAt:"2023-10-27",modifyAt:"2023-10-27",mtime:169834954e4,title:"读《第22条军规》\r"}].map(async t=>({...t,path:`/archives/${t.path}`,link:`/md/archive/${t.path}`,summary:t.summary?await u.parse(t.summary+"..."):void 0}));a.archives=await Promise.all(s),console.log("load",a.archives)}),(s,t)=>{const n=b("router-link");return i(),m("div",G,[(i(!0),m(x,null,q(w(c),e=>(i(),m("div",H,[e.summary?(i(),m("div",{key:0,class:"archive-summary",innerHTML:e.summary},null,8,M)):(i(),P(n,{key:1,to:e.link},{default:p(()=>[l(d(e.title),1)]),_:2},1032,["to"])),r("div",B,[e.summary?(i(),m("div",C,[L(n,{to:e.link},{default:p(()=>t[0]||(t[0]=[l("查看全文")])),_:2},1032,["to"])])):S("",!0),r("div",N,[t[1]||(t[1]=r("span",null,"创建日期：",-1)),r("span",null,d(e.createAt),1)]),r("div",z,[t[2]||(t[2]=r("span",null,"修改日期：",-1)),r("span",null,d(e.modifyAt),1)])])]))),256))])}}});const vt=I(T,[["__scopeId","data-v-dd765801"]]);export{vt as default};
