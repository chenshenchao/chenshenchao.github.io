import{m as b}from"./archive-e964beff.js";import{c as x}from"./@vueuse-a4195f5f.js";import{l as g}from"./lodash-ef160764.js";import{U as w,W as P}from"./crypto-js-4677913a.js";import{v as C,d as E,z as I,D as d,A as m,G as k,F as c,E as y,B as f,P as T,Q as B,u as H,R as A,M as v,L as n,S,N as U,O as V}from"./@vue-9cc5f714.js";import{_ as G}from"./plugin-vueexport-helper-c27b6911.js";import"./highlight.js-23c08a4f.js";import"./highlight.js-lib-languages-1-b101391b.js";import"./highlight.js-lib-languages-a-16a177ab.js";import"./highlight.js-lib-languages-x-364ed794.js";import"./highlight.js-lib-languages-b-b6e567a1.js";import"./highlight.js-lib-languages-c-234f4f8e.js";import"./highlight.js-lib-languages-d-7b8159cb.js";import"./highlight.js-lib-languages-m-b6de83b3.js";import"./highlight.js-lib-languages-e-fad85485.js";import"./highlight.js-lib-languages-r-53dfddc0.js";import"./highlight.js-lib-languages-f-8820c8d5.js";import"./highlight.js-lib-languages-g-ea579cf1.js";import"./highlight.js-lib-languages-h-74f34ea6.js";import"./highlight.js-lib-languages-i-d0f5bb2d.js";import"./highlight.js-lib-languages-j-ef705224.js";import"./highlight.js-lib-languages-k-220e6614.js";import"./highlight.js-lib-languages-l-555830da.js";import"./highlight.js-lib-languages-p-f2205468.js";import"./highlight.js-lib-languages-n-816e5f3a.js";import"./highlight.js-lib-languages-o-b41baf90.js";import"./highlight.js-lib-languages-q-2501bc69.js";import"./highlight.js-lib-languages-s-a87df519.js";import"./highlight.js-lib-languages-t-23d3f6da.js";import"./highlight.js-lib-languages-y-3713b1da.js";import"./highlight.js-lib-languages-v-73a12446.js";import"./highlight.js-lib-languages-w-568a4b3d.js";import"./highlight.js-lib-languages-z-d809bd39.js";import"./marked-59892390.js";import"./marked-highlight-d2522e5a.js";const N=async(a,e)=>{var _;const r=(_=(await fetch(a)).body)==null?void 0:_.getReader(),t=new Uint8Array(e);let s=0;for(;r!=null&&s<e;){const{done:h,value:l}=await r.read();for(let p=0;l!=null&&p<l.length&&s<e;++p)t[s++]=l[p];if(h)break}return await(r==null?void 0:r.cancel()),s<e?new Uint8Array(t.subarray(0,s)):t},J=a=>{let e=a.length-1,i=a[e],r=128;for(;(i&192)==128&&e>0;)i=a[--e],r=r>>1|128;if(r>128&&(i&r)==r)return a;i>=192&&e>0&&--e;const t=e+1;return t<length?new Uint8Array(a.subarray(0,t)):a},u=a=>(U("data-v-906a385a"),a=a(),V(),a),L=u(()=>n("div",{class:"background top"},null,-1)),M=u(()=>n("div",{class:"background bottom"},null,-1)),j={class:"archive-item"},z=["innerHTML"],D={class:"archive-info"},F={key:0,class:"archive-info-item"},O={class:"archive-info-item"},R=u(()=>n("span",null,"创建日期：",-1)),W={class:"archive-info-item"},$=u(()=>n("span",null,"修改日期：",-1)),q=u(()=>n("div",{style:{height:"4em"}},null,-1)),Q=C({__name:"IndexPage",setup(a){const e=E({archiveEnd:10,archives:[],searchText:""}),i=x(async()=>{const r=e.archives.filter(t=>g.isEmpty(e.searchText)?!0:g.isEmpty(t.title)?!1:t.title.indexOf(e.searchText)>=0).slice(0,e.archiveEnd).map(async t=>{if(!t.summary){const s=await N(t.path,140);t.summary=w.stringify(P.create(J(s).buffer))}return t});return await Promise.all(r)});return I(async()=>{const r=[{path:"bookshelf/the-programming-language-java.md",createAt:"2024-08-11",modifyAt:"2024-08-11",mtime:172338238e4,title:"Java 书籍\r",summary:`# Java 书籍\r
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
要写博客的话 GitHub Pages 是个不错的选择。但是 GitHub Pages 是静态的，并不能像常�`}].map(async t=>({...t,path:`/archives/${t.path}`,link:`/pc/archive/${t.path}`,summary:t.summary?await b.parse(t.summary+"..."):void 0}));e.archives=await Promise.all(r),console.log("load",e.archives)}),(r,t)=>{const s=d("pc-sidebar"),_=d("pc-banner"),h=d("router-link"),l=d("pc-double-column-layout"),p=d("noise-filter");return m(),k(p,null,{default:c(()=>[y(l,{class:"pc-index-page"},{minor:c(()=>[y(s,{onSearch:t[0]||(t[0]=o=>e.searchText=o)})]),background:c(()=>[L,M]),default:c(()=>[y(_),(m(!0),f(T,null,B(H(i),o=>(m(),f("div",j,[o.summary?(m(),f("div",{key:0,class:"archive-summary",innerHTML:o.summary},null,8,z)):(m(),k(h,{key:1,to:o.link},{default:c(()=>[A(v(o.title),1)]),_:2},1032,["to"])),n("div",D,[o.summary?(m(),f("div",F,[y(h,{to:o.link},{default:c(()=>[A("查看全文")]),_:2},1032,["to"])])):S("",!0),n("div",O,[R,n("span",null,v(o.createAt),1)]),n("div",W,[$,n("span",null,v(o.modifyAt),1)])])]))),256)),q]),_:1})]),_:1})}}});const Ht=G(Q,[["__scopeId","data-v-906a385a"]]);export{Ht as default};
