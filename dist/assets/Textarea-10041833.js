import{y as g,r as v,h as f,c as h,b as x,U as y,C as V,D as b,V as T,Y as B,N as k,$ as z}from"./@vue-70ee5e1b.js";import{_ as C}from"./plugin-vueexport-helper-c27b6911.js";const M={class:"pc-form-textarea"},P=g({__name:"Textarea",props:{modelValue:{}},emits:["update:modelValue"],setup(p,{emit:d}){const o=v(),r=f({height:"auto"}),n=e=>parseFloat(e.substring(0,e.length-2)),l=new ResizeObserver(e=>{for(const t of e)if(t.target==o.value){const a=getComputedStyle(t.target),s=n(a.getPropertyValue("line-height")),u=n(a.getPropertyValue("height")),i=Math.ceil(u/s);console.log("onResize",s,u,i),r.height=`${s*i}px`}}),m=p,_=d,c=h({get:()=>m.modelValue,set:e=>_("update:modelValue",e)});return x(()=>{l.observe(o.value)}),y(()=>{l.unobserve(o.value)}),(e,t)=>(V(),b("div",M,[T(k("textarea",z({ref_key:"textarea",ref:o,"onUpdate:modelValue":t[0]||(t[0]=a=>c.value=a)},e.$attrs,{style:r}),null,16),[[B,c.value]])]))}});const w=C(P,[["__scopeId","data-v-b19c7e07"]]);export{w as default};