import{d as l,u,r as h,c as f,o as v,a as g,b as y,e as A,w,f as P,g as e,t as p,p as b,h as H}from"./index-37855c1c.js";import{l as x}from"./archive-43c2643d.js";import{_ as B}from"./plugin-vueexport-helper-c27b6911.js";const _=o=>(b("data-v-efd5f12f"),o=o(),H(),o),G={class:"archive-info"},I={class:"archive-info-item"},S=_(()=>e("span",null,"创建日期：",-1)),C={class:"archive-info-item"},R=_(()=>e("span",null,"修改日期：",-1)),V=["innerHTML"],k=l({__name:"ArchivePage",setup(o){const m=u(),a=h({content:"",path:""}),r=f(()=>[{path:"reading/one-hundred-years-of-solitude.md",createAt:"2023-11-09",modifyAt:"2023-11-09",mtime:1699467645e3,title:"读《百年孤独》\r",summary:`# 读《百年孤独》\r
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
要写博客的话 GitHub Pages 是个不错的选择。但是 GitHub Pages 是静态的，并不能像常�`}].find(t=>t.path=a.path)),i=async t=>{const s=t.params.path,n=`/archives/${s}`;s!=a.path&&(a.path=s,a.content=await x(n))};return v(async()=>{console.log("onActivied"),await i(m)}),g(async(t,s)=>{console.log("onBeforeRouteUpdate"),await i(t)}),(t,s)=>{const n=y("center-part-page");return P(),A(n,{class:"archive-page"},{default:w(()=>{var c,d;return[e("div",G,[e("div",I,[S,e("span",null,p((c=r.value)==null?void 0:c.createAt),1)]),e("div",C,[R,e("span",null,p((d=r.value)==null?void 0:d.modifyAt),1)])]),e("div",{class:"archive-sheet",innerHTML:a.content},null,8,V)]}),_:1})}}});const U=B(k,[["__scopeId","data-v-efd5f12f"]]);export{U as default};
