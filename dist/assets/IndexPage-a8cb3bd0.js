import{m as k}from"./archive-e964beff.js";import{c as x}from"./@vueuse-a062dd82.js";import{l as v}from"./lodash-ef160764.js";import{U as w,W as P}from"./crypto-js-4677913a.js";import{v as C,d as I,O as T,A as p,G as A,D as m,F as c,C as y,B as h,P as B,u as E,Q as H,R as b,L as f,J as s,S,M as U,N as V}from"./@vue-65204f66.js";import{_ as G}from"./plugin-vueexport-helper-c27b6911.js";import"./highlight.js-23c08a4f.js";import"./highlight.js-lib-languages-1-b101391b.js";import"./highlight.js-lib-languages-a-16a177ab.js";import"./highlight.js-lib-languages-x-364ed794.js";import"./highlight.js-lib-languages-b-b6e567a1.js";import"./highlight.js-lib-languages-c-234f4f8e.js";import"./highlight.js-lib-languages-d-7b8159cb.js";import"./highlight.js-lib-languages-m-b6de83b3.js";import"./highlight.js-lib-languages-e-fad85485.js";import"./highlight.js-lib-languages-r-53dfddc0.js";import"./highlight.js-lib-languages-f-8820c8d5.js";import"./highlight.js-lib-languages-g-ea579cf1.js";import"./highlight.js-lib-languages-h-74f34ea6.js";import"./highlight.js-lib-languages-i-d0f5bb2d.js";import"./highlight.js-lib-languages-j-ef705224.js";import"./highlight.js-lib-languages-k-220e6614.js";import"./highlight.js-lib-languages-l-555830da.js";import"./highlight.js-lib-languages-p-f2205468.js";import"./highlight.js-lib-languages-n-816e5f3a.js";import"./highlight.js-lib-languages-o-b41baf90.js";import"./highlight.js-lib-languages-q-2501bc69.js";import"./highlight.js-lib-languages-s-a87df519.js";import"./highlight.js-lib-languages-t-23d3f6da.js";import"./highlight.js-lib-languages-y-3713b1da.js";import"./highlight.js-lib-languages-v-73a12446.js";import"./highlight.js-lib-languages-w-568a4b3d.js";import"./highlight.js-lib-languages-z-d809bd39.js";import"./marked-59892390.js";import"./marked-highlight-d2522e5a.js";const J=async(a,e)=>{var u;const r=(u=(await fetch(a)).body)==null?void 0:u.getReader(),t=new Uint8Array(e);let o=0;for(;r!=null&&o<e;){const{done:_,value:l}=await r.read();for(let d=0;l!=null&&d<l.length&&o<e;++d)t[o++]=l[d];if(_)break}return await(r==null?void 0:r.cancel()),o<e?new Uint8Array(t.subarray(0,o)):t},N=a=>{let e=a.length-1,i=a[e],r=128;for(;(i&192)==128&&e>0;)i=a[--e],r=r>>1|128;if(r>128&&(i&r)==r)return a;i>=192&&e>0&&--e;const t=e+1;return t<length?new Uint8Array(a.subarray(0,t)):a},g=a=>(U("data-v-c48f71cb"),a=a(),V(),a),L=g(()=>s("div",{class:"background"},null,-1)),M={class:"archive-item"},j=["innerHTML"],D={class:"archive-info"},F={key:0,class:"archive-info-item"},O={class:"archive-info-item"},R=g(()=>s("span",null,"创建日期：",-1)),W={class:"archive-info-item"},$=g(()=>s("span",null,"修改日期：",-1)),q=C({__name:"IndexPage",setup(a){const e=I({archiveEnd:10,archives:[],searchText:""}),i=x(async()=>{const r=e.archives.filter(t=>v.isEmpty(e.searchText)?!0:v.isEmpty(t.title)?!1:t.title.indexOf(e.searchText)>=0).slice(0,e.archiveEnd).map(async t=>{if(!t.summary){const o=await J(t.path,140);t.summary=w.stringify(P.create(N(o).buffer))}return t});return await Promise.all(r)});return T(async()=>{const r=[{path:"reading/don-quijote-de-la-mancha.md",createAt:"2023-11-24",modifyAt:"2023-11-24",mtime:1700755857e3,title:"读《堂吉诃德》\r",summary:`# 读《堂吉诃德》\r
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
要写博客的话 GitHub Pages 是个不错的选择。但是 GitHub Pages 是静态的，并不能像常�`}].map(async t=>({...t,path:`/archives/${t.path}`,link:`/archive/${t.path}`,summary:t.summary?await k.parse(t.summary+"..."):void 0}));e.archives=await Promise.all(r),console.log("load",e.archives)}),(r,t)=>{const o=p("sidebar"),u=p("banner"),_=p("router-link"),l=p("double-column-layout"),d=p("noise-filter");return c(),A(d,null,{default:m(()=>[y(l,{class:"index-page"},{minor:m(()=>[y(o,{onSearch:t[0]||(t[0]=n=>e.searchText=n)})]),background:m(()=>[L]),default:m(()=>[y(u),(c(!0),h(H,null,B(E(i),n=>(c(),h("div",M,[n.summary?(c(),h("div",{key:0,class:"archive-summary",innerHTML:n.summary},null,8,j)):(c(),A(_,{key:1,to:n.link},{default:m(()=>[b(f(n.title),1)]),_:2},1032,["to"])),s("div",D,[n.summary?(c(),h("div",F,[y(_,{to:n.link},{default:m(()=>[b("查看全文")]),_:2},1032,["to"])])):S("",!0),s("div",O,[R,s("span",null,f(n.createAt),1)]),s("div",W,[$,s("span",null,f(n.modifyAt),1)])])]))),256))]),_:1})]),_:1})}}});const Bt=G(q,[["__scopeId","data-v-c48f71cb"]]);export{Bt as default};
