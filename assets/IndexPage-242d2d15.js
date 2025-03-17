import{m as b}from"./archive-a78e2c3c.js";import{c as v}from"./@vueuse-a7ac5737.js";import{f as k,t as x}from"./encode-ab3002fd.js";import{l as s}from"./lodash-bbb55a89.js";import{U as w,W as C}from"./crypto-js-4677913a.js";import{y as P,h as T,B as L,F as i,C as n,I as y,H as m,G as p,N as e,D as l,P as M,Q as S,u as B,R as h,O as d,S as E}from"./@vue-70ee5e1b.js";import{_ as I}from"./plugin-vueexport-helper-c27b6911.js";import"./highlight.js-23c08a4f.js";import"./highlight.js-lib-languages-1-b101391b.js";import"./highlight.js-lib-languages-a-16a177ab.js";import"./highlight.js-lib-languages-x-364ed794.js";import"./highlight.js-lib-languages-b-b6e567a1.js";import"./highlight.js-lib-languages-c-234f4f8e.js";import"./highlight.js-lib-languages-d-7b8159cb.js";import"./highlight.js-lib-languages-m-b6de83b3.js";import"./highlight.js-lib-languages-e-fad85485.js";import"./highlight.js-lib-languages-r-53dfddc0.js";import"./highlight.js-lib-languages-f-8820c8d5.js";import"./highlight.js-lib-languages-g-ea579cf1.js";import"./highlight.js-lib-languages-h-74f34ea6.js";import"./highlight.js-lib-languages-i-d0f5bb2d.js";import"./highlight.js-lib-languages-j-ef705224.js";import"./highlight.js-lib-languages-k-220e6614.js";import"./highlight.js-lib-languages-l-555830da.js";import"./highlight.js-lib-languages-p-f2205468.js";import"./highlight.js-lib-languages-n-816e5f3a.js";import"./highlight.js-lib-languages-o-b41baf90.js";import"./highlight.js-lib-languages-q-2501bc69.js";import"./highlight.js-lib-languages-s-a87df519.js";import"./highlight.js-lib-languages-t-23d3f6da.js";import"./highlight.js-lib-languages-y-3713b1da.js";import"./highlight.js-lib-languages-v-73a12446.js";import"./highlight.js-lib-languages-w-568a4b3d.js";import"./highlight.js-lib-languages-z-d809bd39.js";import"./marked-59892390.js";import"./marked-highlight-d2522e5a.js";const N={class:"archive-item"},H=["innerHTML"],Q={class:"archive-info"},V={key:0,class:"archive-info-link"},G={class:"archive-info-item"},q={class:"archive-info-item"},U=P({__name:"IndexPage",setup(j){const a=T({archiveEnd:10,archives:[],searchText:""}),f=v(async()=>{const o=a.archives.filter(t=>s.isEmpty(a.searchText)?!0:s.isEmpty(t.title)?!1:s.lowerCase(t.title).indexOf(s.lowerCase(a.searchText))>=0).slice(0,a.archiveEnd).map(async t=>{if(!t.summary){const c=await k(t.path,140);t.summary=w.stringify(C.create(x(c).buffer))}return t});return await Promise.all(o)});return L(async()=>{const o=[{path:"bookshelf/compile.md",createAt:"2024-08-22",modifyAt:"2025-03-17",mtime:1742195884e3,title:"编译原理 书籍\r",summary:`# 编译原理 书籍\r
\r
## 《两周自制脚本语言》\r
\r
推荐指数：★★★☆☆\r
\r
作者: [日]千叶 滋\r
出版社: 人民�`},{path:"essays/pip.md",createAt:"2025-03-15",modifyAt:"2025-03-15",mtime:1741978147e3,title:"pip\r",summary:`# pip\r
\r
Python 自带的包管理器。\r
\r
因为墙的原因，需要指定国内镜像。\r
\r
\`\`\`bash\r
# -i 指定镜像\r
pip install -i h`},{path:"essays/npm.md",createAt:"2025-03-15",modifyAt:"2025-03-15",mtime:1741975527e3,title:"npm\r",summary:`# npm\r
\r
npm 是官方标配的包管理器。\r
\r
国内因为墙的原因，是要使用镜像的。\r
\r
\`\`\`bash\r
# 直接通过命令指定`},{path:"essays/mysql.md",createAt:"2025-03-15",modifyAt:"2025-03-15",mtime:1741974246e3,title:"MySQL 手册\r",summary:`# MySQL 手册\r
\r
## mysql 客户端命令\r
\r
\`\`\`bash\r
# 启用 MySQL 命令行客户端\r
# MySQL 5.5 需要删除 /etc/my.cnf 的 skip_name`},{path:"essays/git.md",createAt:"2025-03-15",modifyAt:"2025-03-15",mtime:1741971379e3,title:"Git 使用手册\r",summary:`# Git 使用手册\r
\r
## 克隆（clone）\r
\r
\`\`\`bash\r
# 指定分支 -b branch_name\r
git clone -b branch_name git@github.com:path/to/r.git\r`},{path:"essays/curl.md",createAt:"2025-03-14",modifyAt:"2025-03-14",mtime:1741959512e3,title:"curl\r",summary:`# curl\r
\r
\`\`\`bash\r
# 使用代理\r
curl -x "http://127.0.0.1:10809" "https://github.com"\r
\r
# 使用代理（有账号密码）\r
curl -x "ht`},{path:"essays/httpd.md",createAt:"2025-03-14",modifyAt:"2025-03-14",mtime:1741955005e3,title:"Apache httpd\r",summary:`# Apache httpd\r
\r
因为 Nginx 的出现，现在使用 httpd 作为 HTTP 服务器 或者 反向代理 的越来越少了。但是总还是`},{path:"bookshelf/the-programming-language-csharp.md",createAt:"2024-08-11",modifyAt:"2025-03-09",mtime:174153196e4,title:"C# 书籍\r",summary:`# C# 书籍\r
\r
以下是我阅读过的 C# 技术书籍的评价。\r
\r
---\r
\r
## 《C# 并发编程经典实例》\r
\r
推荐指数：★★�`},{path:"writing/power.md",createAt:"2024-11-27",modifyAt:"2025-03-09",mtime:1741529862e3,title:"人类社会驱动力\r",summary:`# 人类社会驱动力\r
\r
## 阶级分化之力\r
\r
封建是一个比较好理解的阶级分化的形式。领主、农奴不同的社会�`},{path:"reading/one-hundred-years-of-solitude.md",createAt:"2023-11-09",modifyAt:"2024-12-17",mtime:1734371806e3,title:"读《百年孤独》\r",summary:`# 读《百年孤独》\r
\r
百年孤独的情节一点都不孤独，可以说高潮迭起快意恩仇。而这么热闹的情节又为什�`},{path:"bookshelf/ai.md",createAt:"2024-08-11",modifyAt:"2024-10-31",mtime:1730310651e3,title:"AI 书籍\r"},{path:"reading/norwegian-wood.md",createAt:"2024-07-03",modifyAt:"2024-10-23",mtime:1729615428e3,title:"读《挪威的森林》\r"},{path:"reading/ren.md",createAt:"2024-08-25",modifyAt:"2024-08-25",mtime:1724592206e3,title:"读《人祖传》\r"},{path:"bookshelf/the-programming-language-java.md",createAt:"2024-08-11",modifyAt:"2024-08-11",mtime:172338238e4,title:"Java 书籍\r"},{path:"reading/don-quijote-de-la-mancha.md",createAt:"2023-11-24",modifyAt:"2023-11-24",mtime:1700755857e3,title:"读《堂吉诃德》\r"},{path:"reading/catch-22.md",createAt:"2023-10-27",modifyAt:"2023-10-27",mtime:169834954e4,title:"读《第22条军规》\r"},{path:"essays/github-pages-with-vue3.md",createAt:"2023-10-11",modifyAt:"2023-10-16",mtime:1697395601e3,title:"用 Vue 3 写 GitHub Pages\r"}].map(async t=>({...t,path:`/archives/${t.path}`,link:`/pc/archive/${t.path}`,summary:t.summary?await b.parse(t.summary+"..."):void 0}));a.archives=await Promise.all(o),console.log("load",a.archives)}),(o,t)=>{const c=i("pc-sidebar"),_=i("pc-banner"),u=i("router-link"),A=i("pc-double-column-layout"),g=i("noise-filter");return n(),y(g,null,{default:m(()=>[p(A,{class:"pc-index-page"},{minor:m(()=>[p(c,{onSearch:t[0]||(t[0]=r=>a.searchText=r)})]),background:m(()=>t[1]||(t[1]=[e("div",{class:"background top"},null,-1),e("div",{class:"background bottom"},null,-1)])),default:m(()=>[p(_),(n(!0),l(M,null,S(B(f),r=>(n(),l("div",N,[r.summary?(n(),l("div",{key:0,class:"archive-summary",innerHTML:r.summary},null,8,H)):(n(),y(u,{key:1,to:r.link},{default:m(()=>[h(d(r.title),1)]),_:2},1032,["to"])),e("div",Q,[r.summary?(n(),l("div",V,[p(u,{to:r.link},{default:m(()=>t[2]||(t[2]=[h("查看全文")])),_:2},1032,["to"])])):E("",!0),e("div",G,[t[3]||(t[3]=e("span",null,"创建日期：",-1)),e("span",null,d(r.createAt),1)]),e("div",q,[t[4]||(t[4]=e("span",null,"修改日期：",-1)),e("span",null,d(r.modifyAt),1)])])]))),256)),t[5]||(t[5]=e("div",{style:{height:"4em"}},null,-1))]),_:1})]),_:1})}}});const wt=I(U,[["__scopeId","data-v-84c82eb0"]]);export{wt as default};
