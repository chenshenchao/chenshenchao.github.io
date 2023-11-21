import{m as I}from"./archive-3ec34d36.js";import{i as P,j as w,s as B,k as E,c as F,l as H,m as V,d as G,r as T,n as j,b as A,e as b,w as _,f as d,q as p,v as L,x as N,F as W,y as x,t as v,g as f,z,A as J,p as M,h as q}from"./index-71d585f3.js";import{r as D,U as S}from"./enc-utf8-8d298787.js";import{_ as R}from"./plugin-vueexport-helper-c27b6911.js";const $=()=>{};function K(s,r,o){let t;P(o)?t={evaluating:o}:t=o||{};const{lazy:a=!1,evaluating:n=void 0,shallow:l=!0,onError:i=$}=t,e=w(!a),c=l?B(r):w(r);let m=0;return E(async u=>{if(!e.value)return;m++;const g=m;let y=!1;n&&Promise.resolve().then(()=>{n.value=!0});try{const h=await s(U=>{u(()=>{n&&(n.value=!1),y||U()})});g===m&&(c.value=h)}catch(h){i(h)}finally{n&&g===m&&(n.value=!1),y=!0}}),a?F(()=>(e.value=!0,c.value)):c}const Q=async(s,r)=>{var l;const t=(l=(await fetch(s)).body)==null?void 0:l.getReader(),a=new Uint8Array(r);let n=0;for(;t!=null&&n<r;){const{done:i,value:e}=await t.read();for(let c=0;e!=null&&c<e.length&&n<r;++c)a[n++]=e[c];if(i)break}return await(t==null?void 0:t.cancel()),n<r?new Uint8Array(a.subarray(0,n)):a},X=s=>{let r=s.length-1,o=s[r],t=128;for(;(o&192)==128&&r>0;)o=s[--r],t=t>>1|128;if(t>128&&(o&t)==t)return s;o>=192&&r>0&&--r;const a=r+1;return a<length?new Uint8Array(s.subarray(0,a)):s};var k={exports:{}};(function(s,r){(function(o,t){s.exports=t(D())})(H,function(o){return function(){if(typeof ArrayBuffer=="function"){var t=o,a=t.lib,n=a.WordArray,l=n.init,i=n.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||typeof Uint8ClampedArray<"u"&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var c=e.byteLength,m=[],u=0;u<c;u++)m[u>>>2]|=e[u]<<24-u%4*8;l.call(this,m,c)}else l.apply(this,arguments)};i.prototype=n}}(),o.lib.WordArray})})(k);var Y=k.exports;const Z=V(Y),C=s=>(M("data-v-cd7f3dde"),s=s(),q(),s),O={class:"archive-item"},ee=["innerHTML"],te={class:"archive-info"},ae={key:0,class:"archive-info-item"},ne={class:"archive-info-item"},re=C(()=>f("span",null,"创建日期：",-1)),se={class:"archive-info-item"},oe=C(()=>f("span",null,"修改日期：",-1)),ie=G({__name:"IndexPage",setup(s){const r=T({archiveEnd:10,archives:[]}),o=K(async()=>{const t=r.archives.splice(0,r.archiveEnd).map(async a=>{if(!a.summary){const n=await Q(a.path,140);a.summary=S.stringify(Z.create(X(n).buffer))}return a});return await Promise.all(t)});return j(async()=>{const t=[{path:"reading/the-programming-language-csharp.md",createAt:"2023-11-16",modifyAt:"2023-11-19",mtime:1700406424e3,title:"C# 书籍\r",summary:`# C# 书籍\r
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
要写博客的话 GitHub Pages 是个不错的选择。但是 GitHub Pages 是静态的，并不能像常�`}].map(async a=>({...a,path:`/archive/${a.path}`,summary:a.summary?await I.parse(a.summary+"..."):void 0}));r.archives=await Promise.all(t)}),(t,a)=>{const n=A("router-link"),l=A("center-part-page");return d(),b(l,{class:"index-page"},{default:_(()=>[(d(!0),p(W,null,L(N(o),i=>(d(),p("div",O,[i.summary?(d(),p("div",{key:0,class:"archive-summary",innerHTML:i.summary},null,8,ee)):(d(),b(n,{key:1,to:i.path},{default:_(()=>[x(v(i.title),1)]),_:2},1032,["to"])),f("div",te,[i.summary?(d(),p("div",ae,[z(n,{to:i.path},{default:_(()=>[x("查看全文")]),_:2},1032,["to"])])):J("",!0),f("div",ne,[re,f("span",null,v(i.createAt),1)]),f("div",se,[oe,f("span",null,v(i.modifyAt),1)])])]))),256))]),_:1})}}});const fe=R(ie,[["__scopeId","data-v-cd7f3dde"]]);export{fe as default};
