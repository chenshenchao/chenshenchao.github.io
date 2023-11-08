import{d as h,u,r as l,c as v,o as f,a as g,b as y,e as A,w as b,f as P,g as e,t as p,p as w,h as H}from"./index-61c265f0.js";import{l as d}from"./archive-558677f1.js";import{_ as x}from"./plugin-vueexport-helper-c27b6911.js";const m=s=>(w("data-v-b643b16d"),s=s(),H(),s),B={class:"archive-info"},G={class:"archive-info-item"},I=m(()=>e("span",null,"创建日期：",-1)),S={class:"archive-info-item"},C=m(()=>e("span",null,"修改日期：",-1)),M=["innerHTML"],V=h({__name:"ArchivePage",setup(s){const o=u(),a=l({content:"",path:""}),r=v(()=>[{path:"reading/one-hundred-years-of-solitude.md",createAt:"2023-11-09",modifyAt:"2023-11-09",mtime:1699467645e3,title:"读《百年孤独》\r",summary:`# 读《百年孤独》\r
\r
人类的意义是什么？——不断创造意义。\r
意义的载体——逻辑。\r
\r
人生不是任何时�`},{path:"reading/catch-22.md",createAt:"2023-10-27",modifyAt:"2023-10-27",mtime:169834954e4,title:"读《第22条军规》\r",summary:`# 读《第22条军规》\r
\r
本书的章节名很有意思，每章都是一个人名，最后以主角约瑟连做章名完结。章名可`},{path:"reading/golden-age.md",createAt:"2023-10-27",modifyAt:"2023-10-27",mtime:169834954e4,title:"读《黄金时代》\r",summary:`# 读《黄金时代》\r
\r
读王小波的作品的时候总让我想起《第22条军规》里类似的荒诞又滑稽的场面，更荒诞`},{path:"essays/github-pages-with-vue3.md",createAt:"2023-10-11",modifyAt:"2023-10-16",mtime:1697395601e3,title:"用 Vue 3 写 GitHub Pages\r",summary:`# 用 Vue 3 写 GitHub Pages\r
\r
要写博客的话 GitHub Pages 是个不错的选择。但是 GitHub Pages 是静态的，并不能像常�`}].find(t=>t.path=a.path));return f(async()=>{const t=`/archives/${o.params.path}`;a.path=o.params.path,a.content=await d(t)}),g(async(t,_)=>{const n=`/archives/${t.params.path}`;a.path=t.params.path,a.content=await d(n)}),(t,_)=>{const n=y("center-part-page");return P(),A(n,{class:"archive-page"},{default:b(()=>{var i,c;return[e("div",B,[e("div",G,[I,e("span",null,p((i=r.value)==null?void 0:i.createAt),1)]),e("div",S,[C,e("span",null,p((c=r.value)==null?void 0:c.modifyAt),1)])]),e("div",{class:"archive-sheet",innerHTML:a.content},null,8,M)]}),_:1})}}});const T=x(V,[["__scopeId","data-v-b643b16d"]]);export{T as default};
