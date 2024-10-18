import{S as H,r as M,U as z,i as G,w as $,b as T,z as x,V as B,W as tt,X as et,Q as st,R as nt,n as ot,Y as ct,e as rt}from"./@vue-NjKOnEGT.js";var ut=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let D;const E=t=>D=t,J=Symbol();function k(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var g;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(g||(g={}));function yt(){const t=H(!0),c=t.run(()=>M({}));let s=[],e=[];const r=z({install(u){E(r),r._a=u,u.provide(J,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ut?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:c});return r}const K=()=>{};function F(t,c,s,e=K){t.push(c);const r=()=>{const u=t.indexOf(c);u>-1&&(t.splice(u,1),e())};return!s&&st()&&nt(r),r}function P(t,...c){t.slice().forEach(s=>{s(...c)})}const at=t=>t(),A=Symbol(),I=Symbol();function L(t,c){t instanceof Map&&c instanceof Map?c.forEach((s,e)=>t.set(e,s)):t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const s in c){if(!c.hasOwnProperty(s))continue;const e=c[s],r=t[s];k(r)&&k(e)&&t.hasOwnProperty(s)&&!x(e)&&!B(e)?t[s]=L(r,e):t[s]=e}return t}const ft=Symbol();function it(t){return!k(t)||!t.hasOwnProperty(ft)}const{assign:S}=Object;function lt(t){return!!(x(t)&&t.effect)}function ht(t,c,s,e){const{state:r,actions:u,getters:f}=c,a=s.state.value[t];let C;function b(){a||(s.state.value[t]=r?r():{});const y=ct(s.state.value[t]);return S(y,u,Object.keys(f||{}).reduce((v,d)=>(v[d]=z(rt(()=>{E(s);const _=s._s.get(t);return f[d].call(_,_)})),v),{}))}return C=Q(t,b,c,s,e,!0),C}function Q(t,c,s={},e,r,u){let f;const a=S({actions:{}},s),C={deep:!0};let b,y,v=[],d=[],_;const m=e.state.value[t];!u&&!m&&(e.state.value[t]={}),M({});let W;function N(o){let n;b=y=!1,typeof o=="function"?(o(e.state.value[t]),n={type:g.patchFunction,storeId:t,events:_}):(L(e.state.value[t],o),n={type:g.patchObject,payload:o,storeId:t,events:_});const i=W=Symbol();ot().then(()=>{W===i&&(b=!0)}),y=!0,P(v,n,e.state.value[t])}const U=u?function(){const{state:n}=s,i=n?n():{};this.$patch(j=>{S(j,i)})}:K;function X(){f.stop(),v=[],d=[],e._s.delete(t)}const V=(o,n="")=>{if(A in o)return o[I]=n,o;const i=function(){E(e);const j=Array.from(arguments),p=[],R=[];function q(l){p.push(l)}function Z(l){R.push(l)}P(d,{args:j,name:i[I],store:h,after:q,onError:Z});let w;try{w=o.apply(this&&this.$id===t?this:h,j)}catch(l){throw P(R,l),l}return w instanceof Promise?w.then(l=>(P(p,l),l)).catch(l=>(P(R,l),Promise.reject(l))):(P(p,w),w)};return i[A]=!0,i[I]=n,i},Y={_p:e,$id:t,$onAction:F.bind(null,d),$patch:N,$reset:U,$subscribe(o,n={}){const i=F(v,o,n.detached,()=>j()),j=f.run(()=>$(()=>e.state.value[t],p=>{(n.flush==="sync"?y:b)&&o({storeId:t,type:g.direct,events:_},p)},S({},C,n)));return i},$dispose:X},h=T(Y);e._s.set(t,h);const O=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(f=H()).run(()=>c({action:V}))));for(const o in O){const n=O[o];if(x(n)&&!lt(n)||B(n))u||(m&&it(n)&&(x(n)?n.value=m[o]:L(n,m[o])),e.state.value[t][o]=n);else if(typeof n=="function"){const i=V(n,o);O[o]=i,a.actions[o]=n}}return S(h,O),S(tt(h),O),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:o=>{N(n=>{S(n,o)})}}),e._p.forEach(o=>{S(h,f.run(()=>o({store:h,app:e._a,pinia:e,options:a})))}),m&&u&&s.hydrate&&s.hydrate(h.$state,m),b=!0,y=!0,h}function vt(t,c,s){let e,r;const u=typeof c=="function";e=t,r=u?s:c;function f(a,C){const b=et();return a=a||(b?G(J,null):null),a&&E(a),a=D,a._s.has(e)||(u?Q(e,c,r,a):ht(e,r,a)),a._s.get(e)}return f.$id=e,f}export{yt as c,vt as d};
