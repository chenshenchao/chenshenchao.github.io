import{s as xt,v as A,q as N,d as Q,r as st,h as M,b as X,c as Y,e as Z,w as J,x as it,y as ct,f as I,t as V,p as ft,n as ut,z as nt}from"./index-0bc6031d.js";import{_ as tt}from"./plugin-vueexport-helper-c27b6911.js";var lt={exports:{}};function yt(g){throw new Error('Could not dynamically require "'+g+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var K={exports:{}};const gt={},mt=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"})),Bt=xt(mt);var ot;function j(){return ot||(ot=1,function(g,H){(function(m,_){g.exports=_()})(A,function(){var m=m||function(_,B){var x;if(typeof window<"u"&&window.crypto&&(x=window.crypto),typeof self<"u"&&self.crypto&&(x=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(x=globalThis.crypto),!x&&typeof window<"u"&&window.msCrypto&&(x=window.msCrypto),!x&&typeof A<"u"&&A.crypto&&(x=A.crypto),!x&&typeof yt=="function")try{x=Bt}catch{}var E=function(){if(x){if(typeof x.getRandomValues=="function")try{return x.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof x.randomBytes=="function")try{return x.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},D=Object.create||function(){function t(){}return function(s){var i;return t.prototype=s,i=new t,t.prototype=null,i}}(),C={},a=C.lib={},w=a.Base=function(){return{extend:function(t){var s=D(this);return t&&s.mixIn(t),(!s.hasOwnProperty("init")||this.init===s.init)&&(s.init=function(){s.$super.init.apply(this,arguments)}),s.init.prototype=s,s.$super=this,s},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var s in t)t.hasOwnProperty(s)&&(this[s]=t[s]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),d=a.WordArray=w.extend({init:function(t,s){t=this.words=t||[],s!=B?this.sigBytes=s:this.sigBytes=t.length*4},toString:function(t){return(t||l).stringify(this)},concat:function(t){var s=this.words,i=t.words,u=this.sigBytes,p=t.sigBytes;if(this.clamp(),u%4)for(var y=0;y<p;y++){var S=i[y>>>2]>>>24-y%4*8&255;s[u+y>>>2]|=S<<24-(u+y)%4*8}else for(var T=0;T<p;T+=4)s[u+T>>>2]=i[T>>>2];return this.sigBytes+=p,this},clamp:function(){var t=this.words,s=this.sigBytes;t[s>>>2]&=4294967295<<32-s%4*8,t.length=_.ceil(s/4)},clone:function(){var t=w.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var s=[],i=0;i<t;i+=4)s.push(E());return new d.init(s,t)}}),v=C.enc={},l=v.Hex={stringify:function(t){for(var s=t.words,i=t.sigBytes,u=[],p=0;p<i;p++){var y=s[p>>>2]>>>24-p%4*8&255;u.push((y>>>4).toString(16)),u.push((y&15).toString(16))}return u.join("")},parse:function(t){for(var s=t.length,i=[],u=0;u<s;u+=2)i[u>>>3]|=parseInt(t.substr(u,2),16)<<24-u%8*4;return new d.init(i,s/2)}},h=v.Latin1={stringify:function(t){for(var s=t.words,i=t.sigBytes,u=[],p=0;p<i;p++){var y=s[p>>>2]>>>24-p%4*8&255;u.push(String.fromCharCode(y))}return u.join("")},parse:function(t){for(var s=t.length,i=[],u=0;u<s;u++)i[u>>>2]|=(t.charCodeAt(u)&255)<<24-u%4*8;return new d.init(i,s)}},c=v.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},f=a.BufferedBlockAlgorithm=w.extend({reset:function(){this._data=new d.init,this._nDataBytes=0},_append:function(t){typeof t=="string"&&(t=c.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(t){var s,i=this._data,u=i.words,p=i.sigBytes,y=this.blockSize,S=y*4,T=p/S;t?T=_.ceil(T):T=_.max((T|0)-this._minBufferSize,0);var R=T*y,k=_.min(R*4,p);if(R){for(var z=0;z<R;z+=y)this._doProcessBlock(u,z);s=u.splice(0,R),i.sigBytes-=k}return new d.init(s,k)},clone:function(){var t=w.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});a.Hasher=f.extend({cfg:w.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var s=this._doFinalize();return s},blockSize:16,_createHelper:function(t){return function(s,i){return new t.init(i).finalize(s)}},_createHmacHelper:function(t){return function(s,i){return new b.HMAC.init(t,i).finalize(s)}}});var b=C.algo={};return C}(Math);return m})}(K)),K.exports}(function(g,H){(function(m,_){g.exports=_(j())})(A,function(m){return m.enc.Utf8})})(lt);var wt=lt.exports;const G=N(wt);var pt={exports:{}};(function(g,H){(function(m,_){g.exports=_(j())})(A,function(m){return m.enc.Hex})})(pt);var bt=pt.exports;const vt=N(bt);var dt={exports:{}};(function(g,H){(function(m,_){g.exports=_(j())})(A,function(m){return function(){var _=m,B=_.lib,x=B.WordArray,E=_.enc;E.Base64={stringify:function(C){var a=C.words,w=C.sigBytes,d=this._map;C.clamp();for(var v=[],l=0;l<w;l+=3)for(var h=a[l>>>2]>>>24-l%4*8&255,c=a[l+1>>>2]>>>24-(l+1)%4*8&255,f=a[l+2>>>2]>>>24-(l+2)%4*8&255,b=h<<16|c<<8|f,t=0;t<4&&l+t*.75<w;t++)v.push(d.charAt(b>>>6*(3-t)&63));var s=d.charAt(64);if(s)for(;v.length%4;)v.push(s);return v.join("")},parse:function(C){var a=C.length,w=this._map,d=this._reverseMap;if(!d){d=this._reverseMap=[];for(var v=0;v<w.length;v++)d[w.charCodeAt(v)]=v}var l=w.charAt(64);if(l){var h=C.indexOf(l);h!==-1&&(a=h)}return D(C,a,d)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function D(C,a,w){for(var d=[],v=0,l=0;l<a;l++)if(l%4){var h=w[C.charCodeAt(l-1)]<<l%4*2,c=w[C.charCodeAt(l)]>>>6-l%4*2,f=h|c;d[v>>>2]|=f<<24-v%4*8,v++}return x.create(d,v)}}(),m.enc.Base64})})(dt);var Ct=dt.exports;const _t=N(Ct),et=g=>(ft("data-v-4b989aed"),g=g(),ut(),g),Ht=et(()=>I("h2",null,"编码与解码",-1)),Tt=et(()=>I("label",null,"Hex 编码：",-1)),St=et(()=>I("label",null,"Base64 编码：",-1)),Dt=Q({__name:"EncodeBox",setup(g){const H=st({originText:""}),m=M(()=>{const B=G.parse(H.originText);return vt.stringify(B)}),_=M(()=>{const B=G.parse(H.originText);return _t.stringify(B)});return(B,x)=>{const E=X("center-part-box");return Y(),Z(E,{class:"toolbox-cryptic-encode-box"},{default:J(()=>[Ht,it(I("textarea",{"onUpdate:modelValue":x[0]||(x[0]=D=>H.originText=D),rows:"4"},null,512),[[ct,H.originText]]),Tt,I("p",null,V(m.value),1),St,I("p",null,V(_.value),1)]),_:1})}}});const It=tt(Dt,[["__scopeId","data-v-4b989aed"]]);var ht={exports:{}};(function(g,H){(function(m,_){g.exports=_(j())})(A,function(m){return function(_){var B=m,x=B.lib,E=x.WordArray,D=x.Hasher,C=B.algo,a=[];(function(){for(var c=0;c<64;c++)a[c]=_.abs(_.sin(c+1))*4294967296|0})();var w=C.MD5=D.extend({_doReset:function(){this._hash=new E.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(c,f){for(var b=0;b<16;b++){var t=f+b,s=c[t];c[t]=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360}var i=this._hash.words,u=c[f+0],p=c[f+1],y=c[f+2],S=c[f+3],T=c[f+4],R=c[f+5],k=c[f+6],z=c[f+7],W=c[f+8],U=c[f+9],$=c[f+10],P=c[f+11],q=c[f+12],L=c[f+13],F=c[f+14],O=c[f+15],e=i[0],r=i[1],n=i[2],o=i[3];e=d(e,r,n,o,u,7,a[0]),o=d(o,e,r,n,p,12,a[1]),n=d(n,o,e,r,y,17,a[2]),r=d(r,n,o,e,S,22,a[3]),e=d(e,r,n,o,T,7,a[4]),o=d(o,e,r,n,R,12,a[5]),n=d(n,o,e,r,k,17,a[6]),r=d(r,n,o,e,z,22,a[7]),e=d(e,r,n,o,W,7,a[8]),o=d(o,e,r,n,U,12,a[9]),n=d(n,o,e,r,$,17,a[10]),r=d(r,n,o,e,P,22,a[11]),e=d(e,r,n,o,q,7,a[12]),o=d(o,e,r,n,L,12,a[13]),n=d(n,o,e,r,F,17,a[14]),r=d(r,n,o,e,O,22,a[15]),e=v(e,r,n,o,p,5,a[16]),o=v(o,e,r,n,k,9,a[17]),n=v(n,o,e,r,P,14,a[18]),r=v(r,n,o,e,u,20,a[19]),e=v(e,r,n,o,R,5,a[20]),o=v(o,e,r,n,$,9,a[21]),n=v(n,o,e,r,O,14,a[22]),r=v(r,n,o,e,T,20,a[23]),e=v(e,r,n,o,U,5,a[24]),o=v(o,e,r,n,F,9,a[25]),n=v(n,o,e,r,S,14,a[26]),r=v(r,n,o,e,W,20,a[27]),e=v(e,r,n,o,L,5,a[28]),o=v(o,e,r,n,y,9,a[29]),n=v(n,o,e,r,z,14,a[30]),r=v(r,n,o,e,q,20,a[31]),e=l(e,r,n,o,R,4,a[32]),o=l(o,e,r,n,W,11,a[33]),n=l(n,o,e,r,P,16,a[34]),r=l(r,n,o,e,F,23,a[35]),e=l(e,r,n,o,p,4,a[36]),o=l(o,e,r,n,T,11,a[37]),n=l(n,o,e,r,z,16,a[38]),r=l(r,n,o,e,$,23,a[39]),e=l(e,r,n,o,L,4,a[40]),o=l(o,e,r,n,u,11,a[41]),n=l(n,o,e,r,S,16,a[42]),r=l(r,n,o,e,k,23,a[43]),e=l(e,r,n,o,U,4,a[44]),o=l(o,e,r,n,q,11,a[45]),n=l(n,o,e,r,O,16,a[46]),r=l(r,n,o,e,y,23,a[47]),e=h(e,r,n,o,u,6,a[48]),o=h(o,e,r,n,z,10,a[49]),n=h(n,o,e,r,F,15,a[50]),r=h(r,n,o,e,R,21,a[51]),e=h(e,r,n,o,q,6,a[52]),o=h(o,e,r,n,S,10,a[53]),n=h(n,o,e,r,$,15,a[54]),r=h(r,n,o,e,p,21,a[55]),e=h(e,r,n,o,W,6,a[56]),o=h(o,e,r,n,O,10,a[57]),n=h(n,o,e,r,k,15,a[58]),r=h(r,n,o,e,L,21,a[59]),e=h(e,r,n,o,T,6,a[60]),o=h(o,e,r,n,P,10,a[61]),n=h(n,o,e,r,y,15,a[62]),r=h(r,n,o,e,U,21,a[63]),i[0]=i[0]+e|0,i[1]=i[1]+r|0,i[2]=i[2]+n|0,i[3]=i[3]+o|0},_doFinalize:function(){var c=this._data,f=c.words,b=this._nDataBytes*8,t=c.sigBytes*8;f[t>>>5]|=128<<24-t%32;var s=_.floor(b/4294967296),i=b;f[(t+64>>>9<<4)+15]=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360,f[(t+64>>>9<<4)+14]=(i<<8|i>>>24)&16711935|(i<<24|i>>>8)&4278255360,c.sigBytes=(f.length+1)*4,this._process();for(var u=this._hash,p=u.words,y=0;y<4;y++){var S=p[y];p[y]=(S<<8|S>>>24)&16711935|(S<<24|S>>>8)&4278255360}return u},clone:function(){var c=D.clone.call(this);return c._hash=this._hash.clone(),c}});function d(c,f,b,t,s,i,u){var p=c+(f&b|~f&t)+s+u;return(p<<i|p>>>32-i)+f}function v(c,f,b,t,s,i,u){var p=c+(f&t|b&~t)+s+u;return(p<<i|p>>>32-i)+f}function l(c,f,b,t,s,i,u){var p=c+(f^b^t)+s+u;return(p<<i|p>>>32-i)+f}function h(c,f,b,t,s,i,u){var p=c+(b^(f|~t))+s+u;return(p<<i|p>>>32-i)+f}B.MD5=D._createHelper(w),B.HmacMD5=D._createHmacHelper(w)}(Math),m.MD5})})(ht);var Et=ht.exports;const at=N(Et),rt=g=>(ft("data-v-4ca3eebe"),g=g(),ut(),g),Rt=rt(()=>I("h2",null,"散列",-1)),zt=rt(()=>I("label",null,"MD5 (Hex)",-1)),At=rt(()=>I("label",null,"MD5 (Base64)",-1)),kt=Q({__name:"HashBox",setup(g){const H=st({originText:""}),m=M(()=>{const B=G.parse(H.originText);return vt.stringify(at(B))}),_=M(()=>{const B=G.parse(H.originText);return _t.stringify(at(B))});return(B,x)=>{const E=X("center-part-box");return Y(),Z(E,{class:"toolbox-cryptic-hash-box"},{default:J(()=>[Rt,it(I("textarea",{"onUpdate:modelValue":x[0]||(x[0]=D=>H.originText=D),rows:"4"},null,512),[[ct,H.originText]]),zt,I("p",null,V(m.value),1),At,I("p",null,V(_.value),1)]),_:1})}}});const Wt=tt(kt,[["__scopeId","data-v-4ca3eebe"]]),Ut=Q({__name:"CrypticDataPage",setup(g){return(H,m)=>{const _=X("center-part-page");return Y(),Z(_,{class:"cryptic-data-page"},{default:J(()=>[nt(It),nt(Wt)]),_:1})}}});const qt=tt(Ut,[["__scopeId","data-v-90301049"]]);export{qt as default};