import{H as r}from"./highlight.js-23c08a4f.js";import{_ as i}from"./lodash-bbb55a89.js";import{M as s}from"./marked-59892390.js";import{m as n}from"./marked-highlight-d2522e5a.js";const g=new s(n({langPrefix:"hljs language-",highlight(t,e){const a=r.getLanguage(e)?e:"plaintext";return r.highlight(t,{language:a}).value}})),c=t=>{const e=t.indexOf(`
`);return(e>0?i.trim(t.substring(0,e)," #"):"").replace(/<.+?>/g,"")},p=async t=>{const a=await(await fetch(t)).text();return await g.parse(a)};export{c as g,p as l,g as m};