import{m as f}from"./archive-a78e2c3c.js";import{c as _}from"./@vueuse-e93ab7e0.js";import{f as y,t as g}from"./encode-ab3002fd.js";import{l as p}from"./lodash-bbb55a89.js";import{U as v,W as A}from"./crypto-js-4677913a.js";import{y as k,h as x,B as b,F as w,C as s,D as o,R as C,S as P,u as I,I as H,H as d,T as l,O as c,N as e,G as T,U as B,P as E,Q as V}from"./@vue-e3933814.js";import{_ as G}from"./plugin-vueexport-helper-c27b6911.js";import"./highlight.js-23c08a4f.js";import"./highlight.js-lib-languages-1-b101391b.js";import"./highlight.js-lib-languages-a-16a177ab.js";import"./highlight.js-lib-languages-x-364ed794.js";import"./highlight.js-lib-languages-b-b6e567a1.js";import"./highlight.js-lib-languages-c-234f4f8e.js";import"./highlight.js-lib-languages-d-7b8159cb.js";import"./highlight.js-lib-languages-m-b6de83b3.js";import"./highlight.js-lib-languages-e-fad85485.js";import"./highlight.js-lib-languages-r-53dfddc0.js";import"./highlight.js-lib-languages-f-8820c8d5.js";import"./highlight.js-lib-languages-g-ea579cf1.js";import"./highlight.js-lib-languages-h-74f34ea6.js";import"./highlight.js-lib-languages-i-d0f5bb2d.js";import"./highlight.js-lib-languages-j-ef705224.js";import"./highlight.js-lib-languages-k-220e6614.js";import"./highlight.js-lib-languages-l-555830da.js";import"./highlight.js-lib-languages-p-f2205468.js";import"./highlight.js-lib-languages-n-816e5f3a.js";import"./highlight.js-lib-languages-o-b41baf90.js";import"./highlight.js-lib-languages-q-2501bc69.js";import"./highlight.js-lib-languages-s-a87df519.js";import"./highlight.js-lib-languages-t-23d3f6da.js";import"./highlight.js-lib-languages-y-3713b1da.js";import"./highlight.js-lib-languages-v-73a12446.js";import"./highlight.js-lib-languages-w-568a4b3d.js";import"./highlight.js-lib-languages-z-d809bd39.js";import"./marked-59892390.js";import"./marked-highlight-d2522e5a.js";const u=m=>(E("data-v-e6b5f603"),m=m(),V(),m),N={class:"md-index-page"},S={class:"archive-item"},J=["innerHTML"],U={class:"archive-info"},L={key:0,class:"archive-info-item"},M={class:"archive-info-item"},j=u(()=>e("span",null,"创建日期：",-1)),D={class:"archive-info-item"},F=u(()=>e("span",null,"修改日期：",-1)),O=k({__name:"IndexPage",setup(m){const a=x({archiveEnd:10,archives:[],searchText:""}),h=_(async()=>{const i=a.archives.filter(t=>p.isEmpty(a.searchText)?!0:p.isEmpty(t.title)?!1:p.lowerCase(t.title).indexOf(p.lowerCase(a.searchText))>=0).slice(0,a.archiveEnd).map(async t=>{if(!t.summary){const n=await y(t.path,140);t.summary=v.stringify(A.create(g(n).buffer))}return t});return await Promise.all(i)});return b(async()=>{const i=[{path:"reading/norwegian-wood.md",createAt:"2024-07-03",modifyAt:"2024-10-23",mtime:1729615428e3,title:"读《挪威的森林》\r",summary:`# 读《挪威的森林》\r
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
推荐指数：★★�`},{path:"reading/one-hundred-years-of-solitude.md",createAt:"2023-11-09",modifyAt:"2024-03-23",mtime:1711130162e3,title:"读《百年孤独》\r",summary:`# 读《百年孤独》\r
\r
人类的意义是什么？——不断创造意义。\r
\r
意义的载体是什么？——逻辑。\r
\r
人生不`},{path:"reading/don-quijote-de-la-mancha.md",createAt:"2023-11-24",modifyAt:"2023-11-24",mtime:1700755857e3,title:"读《堂吉诃德》\r",summary:`# 读《堂吉诃德》\r
\r
塞万提斯的人生经理一点不比堂吉诃德的故事逊色。如果用现在人的眼光去看待堂吉�`},{path:"reading/catch-22.md",createAt:"2023-10-27",modifyAt:"2023-10-27",mtime:169834954e4,title:"读《第22条军规》\r",summary:`# 读《第22条军规》\r
\r
本书的章节名很有意思，每章都是一个人名，最后以主角约瑟连做章名完结。章名可`},{path:"essays/github-pages-with-vue3.md",createAt:"2023-10-11",modifyAt:"2023-10-16",mtime:1697395601e3,title:"用 Vue 3 写 GitHub Pages\r",summary:`# 用 Vue 3 写 GitHub Pages\r
\r
要写博客的话 GitHub Pages 是个不错的选择。但是 GitHub Pages 是静态的，并不能像常�`}].map(async t=>({...t,path:`/archives/${t.path}`,link:`/md/archive/${t.path}`,summary:t.summary?await f.parse(t.summary+"..."):void 0}));a.archives=await Promise.all(i),console.log("load",a.archives)}),(i,t)=>{const n=w("router-link");return s(),o("div",N,[(s(!0),o(C,null,P(I(h),r=>(s(),o("div",S,[r.summary?(s(),o("div",{key:0,class:"archive-summary",innerHTML:r.summary},null,8,J)):(s(),H(n,{key:1,to:r.link},{default:d(()=>[l(c(r.title),1)]),_:2},1032,["to"])),e("div",U,[r.summary?(s(),o("div",L,[T(n,{to:r.link},{default:d(()=>[l("查看全文")]),_:2},1032,["to"])])):B("",!0),e("div",M,[j,e("span",null,c(r.createAt),1)]),e("div",D,[F,e("span",null,c(r.modifyAt),1)])])]))),256))])}}});const Pt=G(O,[["__scopeId","data-v-e6b5f603"]]);export{Pt as default};
