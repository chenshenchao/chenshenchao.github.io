import{u as g,o as v}from"./vue-router-a0283c92.js";import{l as f}from"./archive-e964beff.js";import{v as y,d as A,c as b,p as C,A as d,G as P,D as l,F as w,C as H,J as t,L as u,M as x,N as B}from"./@vue-65204f66.js";import{_ as G}from"./plugin-vueexport-helper-c27b6911.js";import"./highlight.js-23c08a4f.js";import"./crypto-js-4677913a.js";import"./highlight.js-lib-languages-1-b101391b.js";import"./highlight.js-lib-languages-a-16a177ab.js";import"./highlight.js-lib-languages-x-364ed794.js";import"./highlight.js-lib-languages-b-b6e567a1.js";import"./highlight.js-lib-languages-c-234f4f8e.js";import"./highlight.js-lib-languages-d-7b8159cb.js";import"./highlight.js-lib-languages-m-b6de83b3.js";import"./highlight.js-lib-languages-e-fad85485.js";import"./highlight.js-lib-languages-r-53dfddc0.js";import"./highlight.js-lib-languages-f-8820c8d5.js";import"./highlight.js-lib-languages-g-ea579cf1.js";import"./highlight.js-lib-languages-h-74f34ea6.js";import"./highlight.js-lib-languages-i-d0f5bb2d.js";import"./highlight.js-lib-languages-j-ef705224.js";import"./highlight.js-lib-languages-k-220e6614.js";import"./highlight.js-lib-languages-l-555830da.js";import"./highlight.js-lib-languages-p-f2205468.js";import"./highlight.js-lib-languages-n-816e5f3a.js";import"./highlight.js-lib-languages-o-b41baf90.js";import"./highlight.js-lib-languages-q-2501bc69.js";import"./highlight.js-lib-languages-s-a87df519.js";import"./highlight.js-lib-languages-t-23d3f6da.js";import"./highlight.js-lib-languages-y-3713b1da.js";import"./highlight.js-lib-languages-v-73a12446.js";import"./highlight.js-lib-languages-w-568a4b3d.js";import"./highlight.js-lib-languages-z-d809bd39.js";import"./marked-59892390.js";import"./marked-highlight-d2522e5a.js";const i=o=>(x("data-v-5a5b2713"),o=o(),B(),o),J=i(()=>t("div",{class:"background"},null,-1)),k={class:"archive-info"},I={class:"archive-info-item"},S=i(()=>t("span",null,"创建日期：",-1)),V={class:"archive-info-item"},L=i(()=>t("span",null,"修改日期：",-1)),M=["innerHTML"],N=y({__name:"ArchivePage",setup(o){const _=g(),a=A({content:"",path:""}),s=b(()=>[{path:"reading/don-quijote-de-la-mancha.md",createAt:"2023-11-24",modifyAt:"2023-11-24",mtime:1700755857e3,title:"读《堂吉诃德》\r",summary:`# 读《堂吉诃德》\r
\r
塞万提斯的人生经理一点不比堂吉诃德的故事逊色。如果用现在人的眼光去看待堂吉�`},{path:"reading/the-programming-language-csharp.md",createAt:"2023-11-16",modifyAt:"2023-11-19",mtime:1700406424e3,title:"C# 书籍\r",summary:`# C# 书籍\r
\r
以下是我阅读过的 C# 技术书籍的评价。\r
\r
---\r
\r
## 《C# 并发编程经典实例》\r
\r
推荐指数：★★�`},{path:"reading/the-programming-language-java.md",createAt:"2023-11-16",modifyAt:"2023-11-19",mtime:1700406424e3,title:"Java 书籍\r",summary:`# Java 书籍\r
\r
以下是我阅读过的 Java 技术书籍的评价。\r
\r
---\r
\r
## Java 虚拟机字节码：从入门到实战\r
\r
推荐�`},{path:"reading/one-hundred-years-of-solitude.md",createAt:"2023-11-09",modifyAt:"2023-11-16",mtime:1700145907e3,title:"读《百年孤独》\r",summary:`# 读《百年孤独》\r
\r
人类的意义是什么？——不断创造意义。\r
\r
意义的载体——逻辑。\r
\r
人生不是任何时`},{path:"reading/catch-22.md",createAt:"2023-10-27",modifyAt:"2023-10-27",mtime:169834954e4,title:"读《第22条军规》\r",summary:`# 读《第22条军规》\r
\r
本书的章节名很有意思，每章都是一个人名，最后以主角约瑟连做章名完结。章名可`},{path:"reading/golden-age.md",createAt:"2023-10-27",modifyAt:"2023-10-27",mtime:169834954e4,title:"读《黄金时代》\r",summary:`# 读《黄金时代》\r
\r
读王小波的作品的时候总让我想起《第22条军规》里类似的荒诞又滑稽的场面，更荒诞`},{path:"essays/github-pages-with-vue3.md",createAt:"2023-10-11",modifyAt:"2023-10-16",mtime:1697395601e3,title:"用 Vue 3 写 GitHub Pages\r",summary:`# 用 Vue 3 写 GitHub Pages\r
\r
要写博客的话 GitHub Pages 是个不错的选择。但是 GitHub Pages 是静态的，并不能像常�`}].find(e=>e.path==a.path)),m=async e=>{const r=e.params.path,n=`/archives/${r}`;r!=a.path&&(a.path=r,a.content=await f(n))};return C(async()=>{console.log("onActivied"),await m(_)}),v(async(e,r)=>{console.log("onBeforeRouteUpdate"),await m(e)}),(e,r)=>{const n=d("banner"),h=d("center-part-layout");return w(),P(h,{class:"archive-page"},{background:l(()=>[J]),default:l(()=>{var p,c;return[H(n),t("div",k,[t("div",I,[S,t("span",null,u((p=s.value)==null?void 0:p.createAt),1)]),t("div",V,[L,t("span",null,u((c=s.value)==null?void 0:c.modifyAt),1)])]),t("div",{class:"archive-sheet",innerHTML:a.content},null,8,M)]}),_:1})}}});const vt=G(N,[["__scopeId","data-v-5a5b2713"]]);export{vt as default};
