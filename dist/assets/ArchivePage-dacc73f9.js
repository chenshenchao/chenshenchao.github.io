import{d as h,u,r as _,c as g,o as v,a as f,b as y,e as A,w,f as C,g as e,t as d,p as P,h as b}from"./index-8e24cd40.js";import{l as H}from"./archive-c6b7e125.js";import{_ as x}from"./plugin-vueexport-helper-c27b6911.js";const p=r=>(P("data-v-2826af6c"),r=r(),b(),r),B={class:"archive-info"},G={class:"archive-info-item"},I=p(()=>e("span",null,"创建日期：",-1)),J={class:"archive-info-item"},S=p(()=>e("span",null,"修改日期：",-1)),R=["innerHTML"],V=h({__name:"ArchivePage",setup(r){const l=u(),a=_({content:"",path:""}),o=g(()=>[{path:"reading/one-hundred-years-of-solitude.md",createAt:"2023-11-09",modifyAt:"2023-11-16",mtime:1700145907e3,title:"读《百年孤独》\r",summary:`# 读《百年孤独》\r
\r
人类的意义是什么？——不断创造意义。\r
\r
意义的载体——逻辑。\r
\r
人生不是任何时`},{path:"reading/the-programming-language-csharp.md",createAt:"2023-11-16",modifyAt:"2023-11-16",mtime:1700145907e3,title:"C#\r",summary:`# C#\r
\r
以下是我阅读过的 C# 技术书籍的评价。\r
\r
---\r
\r
## 《C# 并发编程经典实例》\r
\r
推荐指数：★★★★�`},{path:"reading/the-programming-language-java.md",createAt:"2023-11-16",modifyAt:"2023-11-16",mtime:1700145907e3,title:"Java\r",summary:`# Java\r
\r
以下是我阅读过的 Java 技术书籍的评价。\r
\r
---\r
\r
## Java 虚拟机字节码：从入门到实战\r
\r
推荐指数�`},{path:"reading/catch-22.md",createAt:"2023-10-27",modifyAt:"2023-10-27",mtime:169834954e4,title:"读《第22条军规》\r",summary:`# 读《第22条军规》\r
\r
本书的章节名很有意思，每章都是一个人名，最后以主角约瑟连做章名完结。章名可`},{path:"reading/golden-age.md",createAt:"2023-10-27",modifyAt:"2023-10-27",mtime:169834954e4,title:"读《黄金时代》\r",summary:`# 读《黄金时代》\r
\r
读王小波的作品的时候总让我想起《第22条军规》里类似的荒诞又滑稽的场面，更荒诞`},{path:"essays/github-pages-with-vue3.md",createAt:"2023-10-11",modifyAt:"2023-10-16",mtime:1697395601e3,title:"用 Vue 3 写 GitHub Pages\r",summary:`# 用 Vue 3 写 GitHub Pages\r
\r
要写博客的话 GitHub Pages 是个不错的选择。但是 GitHub Pages 是静态的，并不能像常�`}].find(t=>t.path==a.path)),i=async t=>{const n=t.params.path,s=`/archives/${n}`;n!=a.path&&(a.path=n,a.content=await H(s))};return v(async()=>{console.log("onActivied"),await i(l)}),f(async(t,n)=>{console.log("onBeforeRouteUpdate"),await i(t)}),(t,n)=>{const s=y("center-part-page");return C(),A(s,{class:"archive-page"},{default:w(()=>{var c,m;return[e("div",B,[e("div",G,[I,e("span",null,d((c=o.value)==null?void 0:c.createAt),1)]),e("div",J,[S,e("span",null,d((m=o.value)==null?void 0:m.modifyAt),1)])]),e("div",{class:"archive-sheet",innerHTML:a.content},null,8,R)]}),_:1})}}});const T=x(V,[["__scopeId","data-v-2826af6c"]]);export{T as default};
