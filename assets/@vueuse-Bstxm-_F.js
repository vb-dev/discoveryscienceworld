import{a as d,s as m,w as y,N as v,O as S,p as w}from"./@vue-aKCDW-zX.js";function s(e){return v()?(S(e),!0):!1}function b(e){return typeof e=="function"?e():w(e)}const r=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function k(e,n=1e3,l={}){const{immediate:c=!0,immediateCallback:p=!1}=l;let t=null;const o=d(!1);function i(){t&&(clearInterval(t),t=null)}function a(){o.value=!1,i()}function f(){const u=b(n);u<=0||(o.value=!0,p&&e(),i(),t=setInterval(e,u))}if(c&&r&&f(),m(n)||typeof n=="function"){const u=y(n,()=>{o.value&&r&&f()});s(u)}return s(a),{isActive:o,pause:a,resume:f}}export{k as u};
