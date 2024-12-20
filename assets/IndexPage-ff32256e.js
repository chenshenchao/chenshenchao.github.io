import{m as A}from"./archive-a78e2c3c.js";import{c as b}from"./@vueuse-a7ac5737.js";import{f as k,t as x}from"./encode-ab3002fd.js";import{l as i}from"./lodash-bbb55a89.js";import{U as w,W as P}from"./crypto-js-4677913a.js";import{y as C,h as I,B as H,F as m,C as n,I as y,H as o,G as p,N as e,D as l,P as T,Q as B,u as E,R as f,O as c,S as V}from"./@vue-70ee5e1b.js";import{_ as G}from"./plugin-vueexport-helper-c27b6911.js";import"./highlight.js-23c08a4f.js";import"./highlight.js-lib-languages-1-b101391b.js";import"./highlight.js-lib-languages-a-16a177ab.js";import"./highlight.js-lib-languages-x-364ed794.js";import"./highlight.js-lib-languages-b-b6e567a1.js";import"./highlight.js-lib-languages-c-234f4f8e.js";import"./highlight.js-lib-languages-d-7b8159cb.js";import"./highlight.js-lib-languages-m-b6de83b3.js";import"./highlight.js-lib-languages-e-fad85485.js";import"./highlight.js-lib-languages-r-53dfddc0.js";import"./highlight.js-lib-languages-f-8820c8d5.js";import"./highlight.js-lib-languages-g-ea579cf1.js";import"./highlight.js-lib-languages-h-74f34ea6.js";import"./highlight.js-lib-languages-i-d0f5bb2d.js";import"./highlight.js-lib-languages-j-ef705224.js";import"./highlight.js-lib-languages-k-220e6614.js";import"./highlight.js-lib-languages-l-555830da.js";import"./highlight.js-lib-languages-p-f2205468.js";import"./highlight.js-lib-languages-n-816e5f3a.js";import"./highlight.js-lib-languages-o-b41baf90.js";import"./highlight.js-lib-languages-q-2501bc69.js";import"./highlight.js-lib-languages-s-a87df519.js";import"./highlight.js-lib-languages-t-23d3f6da.js";import"./highlight.js-lib-languages-y-3713b1da.js";import"./highlight.js-lib-languages-v-73a12446.js";import"./highlight.js-lib-languages-w-568a4b3d.js";import"./highlight.js-lib-languages-z-d809bd39.js";import"./marked-59892390.js";import"./marked-highlight-d2522e5a.js";const N={class:"archive-item"},J=["innerHTML"],L={class:"archive-info"},M={key:0,class:"archive-info-link"},S={class:"archive-info-item"},U={class:"archive-info-item"},j=C({__name:"IndexPage",setup(D){const a=I({archiveEnd:10,archives:[],searchText:""}),_=b(async()=>{const s=a.archives.filter(t=>i.isEmpty(a.searchText)?!0:i.isEmpty(t.title)?!1:i.lowerCase(t.title).indexOf(i.lowerCase(a.searchText))>=0).slice(0,a.archiveEnd).map(async t=>{if(!t.summary){const d=await k(t.path,140);t.summary=w.stringify(P.create(x(d).buffer))}return t});return await Promise.all(s)});return H(async()=>{const s=[{path:"reading/one-hundred-years-of-solitude.md",createAt:"2023-11-09",modifyAt:"2024-12-17",mtime:1734371806e3,title:"读《百年孤独》\r",summary:`# 读《百年孤独》\r
\r
百年孤独的情节一点都不孤独，可以说高潮迭起快意恩仇。而这么热闹的情节又为什�`},{path:"writing/power.md",createAt:"2024-11-27",modifyAt:"2024-12-13",mtime:1734021632e3,title:"人类社会驱动力\r",summary:`# 人类社会驱动力\r
\r
## 阶级分化之力\r
\r
封建是一个比较好理解的阶级分化的形式。领主、农奴不同的社会�`},{path:"bookshelf/ai.md",createAt:"2024-08-11",modifyAt:"2024-10-31",mtime:1730310651e3,title:"AI 书籍\r",summary:`# AI 书籍\r
\r
以下是我阅读过的 AI 技术书籍的评价。\r
\r
## 《Python 神经网络编程》\r
\r
推荐指数：★★★★☆\r`},{path:"reading/norwegian-wood.md",createAt:"2024-07-03",modifyAt:"2024-10-23",mtime:1729615428e3,title:"读《挪威的森林》\r",summary:`# 读《挪威的森林》\r
\r
三个女人，三个问题，三个答案。\r
\r
直子是最早登场的，她肉体上喜欢男主渡边（�`},{path:"reading/ren.md",createAt:"2024-08-25",modifyAt:"2024-08-25",mtime:1724592206e3,title:"读《人祖传》\r",summary:`# 读《人祖传》\r
\r
## 面对困境，就把心交给希望。\r
\r
## 《人祖传》残片\r
\r
传说这个世界刚刚形成的时候一`},{path:"bookshelf/the-programming-language-java.md",createAt:"2024-08-11",modifyAt:"2024-08-11",mtime:172338238e4,title:"Java 书籍\r",summary:`# Java 书籍\r
\r
以下是我阅读过的 Java 技术书籍的评价。\r
\r
---\r
\r
## 《Java 虚拟机字节码：从入门到实战》\r
\r
�`},{path:"bookshelf/the-programming-language-csharp.md",createAt:"2024-08-11",modifyAt:"2024-08-11",mtime:1723366814e3,title:"C# 书籍\r",summary:`# C# 书籍\r
\r
以下是我阅读过的 C# 技术书籍的评价。\r
\r
---\r
\r
## 《C# 并发编程经典实例》\r
\r
推荐指数：★★�`},{path:"reading/don-quijote-de-la-mancha.md",createAt:"2023-11-24",modifyAt:"2023-11-24",mtime:1700755857e3,title:"读《堂吉诃德》\r",summary:`# 读《堂吉诃德》\r
\r
塞万提斯的人生经理一点不比堂吉诃德的故事逊色。如果用现在人的眼光去看待堂吉�`},{path:"reading/catch-22.md",createAt:"2023-10-27",modifyAt:"2023-10-27",mtime:169834954e4,title:"读《第22条军规》\r",summary:`# 读《第22条军规》\r
\r
本书的章节名很有意思，每章都是一个人名，最后以主角约瑟连做章名完结。章名可`},{path:"essays/github-pages-with-vue3.md",createAt:"2023-10-11",modifyAt:"2023-10-16",mtime:1697395601e3,title:"用 Vue 3 写 GitHub Pages\r",summary:`# 用 Vue 3 写 GitHub Pages\r
\r
要写博客的话 GitHub Pages 是个不错的选择。但是 GitHub Pages 是静态的，并不能像常�`}].map(async t=>({...t,path:`/archives/${t.path}`,link:`/pc/archive/${t.path}`,summary:t.summary?await A.parse(t.summary+"..."):void 0}));a.archives=await Promise.all(s),console.log("load",a.archives)}),(s,t)=>{const d=m("pc-sidebar"),h=m("pc-banner"),u=m("router-link"),g=m("pc-double-column-layout"),v=m("noise-filter");return n(),y(v,null,{default:o(()=>[p(g,{class:"pc-index-page"},{minor:o(()=>[p(d,{onSearch:t[0]||(t[0]=r=>a.searchText=r)})]),background:o(()=>t[1]||(t[1]=[e("div",{class:"background top"},null,-1),e("div",{class:"background bottom"},null,-1)])),default:o(()=>[p(h),(n(!0),l(T,null,B(E(_),r=>(n(),l("div",N,[r.summary?(n(),l("div",{key:0,class:"archive-summary",innerHTML:r.summary},null,8,J)):(n(),y(u,{key:1,to:r.link},{default:o(()=>[f(c(r.title),1)]),_:2},1032,["to"])),e("div",L,[r.summary?(n(),l("div",M,[p(u,{to:r.link},{default:o(()=>t[2]||(t[2]=[f("查看全文")])),_:2},1032,["to"])])):V("",!0),e("div",S,[t[3]||(t[3]=e("span",null,"创建日期：",-1)),e("span",null,c(r.createAt),1)]),e("div",U,[t[4]||(t[4]=e("span",null,"修改日期：",-1)),e("span",null,c(r.modifyAt),1)])])]))),256)),t[5]||(t[5]=e("div",{style:{height:"4em"}},null,-1))]),_:1})]),_:1})}}});const wt=G(j,[["__scopeId","data-v-84c82eb0"]]);export{wt as default};
