import{m as P}from"./archive-bd6b52dd.js";import{i as B,j as w,s as E,k as F,c as H,l as V,m as j,d as G,r as T,n as L,b as v,e as b,w as p,f as d,q as x,v as h,x as N,y as W,F as q,z as k,t as g,g as f,A as z,p as J,h as M}from"./index-2a4d07a8.js";import{r as D,U as S}from"./enc-utf8-1db11b92.js";import{_ as $}from"./plugin-vueexport-helper-c27b6911.js";const R=()=>{};function K(s,r,o){let t;B(o)?t={evaluating:o}:t=o||{};const{lazy:a=!1,evaluating:n=void 0,shallow:c=!0,onError:l=R}=t,e=w(!a),i=c?E(r):w(r);let m=0;return F(async u=>{if(!e.value)return;m++;const y=m;let A=!1;n&&Promise.resolve().then(()=>{n.value=!0});try{const _=await s(I=>{u(()=>{n&&(n.value=!1),A||I()})});y===m&&(i.value=_)}catch(_){l(_)}finally{n&&y===m&&(n.value=!1),A=!0}}),a?H(()=>(e.value=!0,i.value)):i}const Q=async(s,r)=>{var c;const t=(c=(await fetch(s)).body)==null?void 0:c.getReader(),a=new Uint8Array(r);let n=0;for(;t!=null&&n<r;){const{done:l,value:e}=await t.read();for(let i=0;e!=null&&i<e.length&&n<r;++i)a[n++]=e[i];if(l)break}return await(t==null?void 0:t.cancel()),n<r?new Uint8Array(a.subarray(0,n)):a},X=s=>{let r=s.length-1,o=s[r],t=128;for(;(o&192)==128&&r>0;)o=s[--r],t=t>>1|128;if(t>128&&(o&t)==t)return s;o>=192&&r>0&&--r;const a=r+1;return a<length?new Uint8Array(s.subarray(0,a)):s};var C={exports:{}};(function(s,r){(function(o,t){s.exports=t(D())})(V,function(o){return function(){if(typeof ArrayBuffer=="function"){var t=o,a=t.lib,n=a.WordArray,c=n.init,l=n.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||typeof Uint8ClampedArray<"u"&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var i=e.byteLength,m=[],u=0;u<i;u++)m[u>>>2]|=e[u]<<24-u%4*8;c.call(this,m,i)}else c.apply(this,arguments)};l.prototype=n}}(),o.lib.WordArray})})(C);var Y=C.exports;const Z=j(Y),U=s=>(J("data-v-7965e6e5"),s=s(),M(),s),O={class:"archive-item"},ee=["innerHTML"],te={class:"archive-info"},ae={key:0,class:"archive-info-item"},ne={class:"archive-info-item"},re=U(()=>f("span",null,"创建日期：",-1)),se={class:"archive-info-item"},oe=U(()=>f("span",null,"修改日期：",-1)),ie=G({__name:"IndexPage",setup(s){const r=T({archiveEnd:10,archives:[]}),o=K(async()=>{const t=r.archives.slice(0,r.archiveEnd).map(async a=>{if(!a.summary){const n=await Q(a.path,140);a.summary=S.stringify(Z.create(X(n).buffer))}return a});return await Promise.all(t)});return L(async()=>{const t=[{path:"reading/don-quijote-de-la-mancha.md",createAt:"2023-11-24",modifyAt:"2023-11-24",mtime:1700755857e3,title:"读《堂吉诃德》\r",summary:`# 读《堂吉诃德》\r
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
要写博客的话 GitHub Pages 是个不错的选择。但是 GitHub Pages 是静态的，并不能像常�`}].map(async a=>({...a,path:`/archives/${a.path}`,link:`/archive/${a.path}`,summary:a.summary?await P.parse(a.summary+"..."):void 0}));r.archives=await Promise.all(t),console.log("load",r.archives)}),(t,a)=>{const n=v("router-link"),c=v("center-part-page"),l=v("noise-filter");return d(),b(l,null,{default:p(()=>[x(c,{class:"index-page"},{default:p(()=>[(d(!0),h(q,null,N(W(o),e=>(d(),h("div",O,[e.summary?(d(),h("div",{key:0,class:"archive-summary",innerHTML:e.summary},null,8,ee)):(d(),b(n,{key:1,to:e.link},{default:p(()=>[k(g(e.title),1)]),_:2},1032,["to"])),f("div",te,[e.summary?(d(),h("div",ae,[x(n,{to:e.link},{default:p(()=>[k("查看全文")]),_:2},1032,["to"])])):z("",!0),f("div",ne,[re,f("span",null,g(e.createAt),1)]),f("div",se,[oe,f("span",null,g(e.modifyAt),1)])])]))),256))]),_:1})]),_:1})}}});const fe=$(ie,[["__scopeId","data-v-7965e6e5"]]);export{fe as default};
