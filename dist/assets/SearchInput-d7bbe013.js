import{v as o,r,F as _,B as u,J as n,W as l,Z as p,_ as c}from"./@vue-65204f66.js";import{_ as i}from"./plugin-vueexport-helper-c27b6911.js";const v={class:"search-input"},d={class:"input"},m=o({__name:"SearchInput",emits:["search"],setup(f,{emit:a}){const t=r("");return(h,e)=>(_(),u("div",v,[n("div",d,[l(n("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),onKeydown:e[1]||(e[1]=c(s=>a("search",t.value),["enter","native"]))},null,544),[[p,t.value]])]),n("button",{onClick:e[2]||(e[2]=s=>a("search",t.value))},"搜索")]))}});const B=i(m,[["__scopeId","data-v-2c334254"]]);export{B as default};