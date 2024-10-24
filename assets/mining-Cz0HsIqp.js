import{_ as g,l as b,u as C}from"./index-Cw9y_9OA.js";import{a1 as d,a2 as u,a3 as h,a4 as f,a5 as s,r as p,o as w,s as x,a7 as N,y as v,Z as S,$ as _,a9 as y}from"./@vue-DcaRQrEV.js";import"./pinia-BpcJfL22.js";import"./@townsquarelabs-BS-uiH3p.js";import"./@tonconnect-Bdfz1Hmc.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-tCHOh2cX.js";import"./deepmerge-D8huMqX6.js";import"./axios-gbnyky6P.js";import"./vue-i18n-DnT-njvb.js";import"./@intlify-Du3kGuGm.js";import"./vue-router-esc5Ehka.js";import"./vue-cookies-oMoGE7eu.js";import"./vuetify-Cn8jMMVq.js";import"./vue-lazyload-BBtGN9-g.js";const $="/img/logoboss.webp",O={},A=t=>(h("data-v-9e8c6455"),t=t(),f(),t),E={class:"coin-container"},R=A(()=>s("img",{class:"img-fluid",style:{"max-width":"280px","max-height":"280px",position:"relative"},src:$,alt:"Coin Image"},null,-1)),k=[R];function T(t,e,n,o,c,l){return d(),u("div",E,k)}const B=g(O,[["render",T],["__scopeId","data-v-9e8c6455"]]),Z={components:{logo:B,level:b},setup(){const t=C(),e=p(""),n=p(!0),o=p(null),c=p(!1),l=["НАЧАТЬ МАЙНИНГ","START MINING","ابدأ التعدين","开始挖矿","COMENZAR MINERÍA","COMMENCER MINER","खनन शुरू करें","INIZIA MINING","マイニング開始","마이닝 시작","ROZPOCZNIJ GÓRNICTWO","COMEÇAR MINERAÇÃO","MADENCІЛІГЕ БАШЛА","РОЗПОЧАТИ МАЙНІНГ"];let a=0,i=null;const r=()=>{a=(a+1)%l.length,e.value=l[a]},I=()=>{n.value=!n.value,localStorage.setItem("isSoundOn",n.value),o.value&&(o.value.muted=!n.value)},M=async()=>{i&&clearInterval(i);try{o.value&&n.value&&o.value.play(),await t.startMining(),await t.getCoinBalance()}catch(m){console.log(`Ошибка при запуске майнинга: ${m.message}`)}};return w(()=>{const m=localStorage.getItem("isSoundOn");m!==null&&(n.value=m==="true"),r(),i=setInterval(r,1e3),setTimeout(()=>{c.value=!0},1e3),t.syncServerTime().then(async()=>{await t.checkMiningStatus(),await t.getCoinBalance()})}),x(()=>{i&&clearInterval(i)}),{miningStore:t,handleStartMining:M,buttonText:e,startSound:o,isSoundOn:n,toggleSound:I,showContent:c}}},G=t=>(h("data-v-071321b5"),t=t(),f(),t),D={class:"mining-app"},V={key:0,class:"center-content"},z=["disabled"],J={key:1,class:"text-white center-content"},L=G(()=>s("br",null,null,-1)),P={class:"fs-2 fw-bold"},U={ref:"startSound",src:"/img/1.mp3"};function W(t,e,n,o,c,l){const a=_("logo"),i=_("level");return d(),u("div",D,[s("div",{class:"sound-icon",onClick:e[0]||(e[0]=(...r)=>o.toggleSound&&o.toggleSound(...r)),style:{cursor:"pointer","margin-top":"130px"}},[s("i",{style:{color:"white"},class:N(o.isSoundOn?"bi bi-volume-up":"bi bi-volume-mute"),"aria-hidden":"true"},null,2)]),v(a,{style:{cursor:"pointer","margin-top":"150px"}}),o.showContent&&!o.miningStore.isMiningActive?(d(),u("div",V,[s("button",{class:"btn-main fw-bold text-white mt-5",onClick:e[1]||(e[1]=(...r)=>o.handleStartMining&&o.handleStartMining(...r)),disabled:o.miningStore.loading||o.miningStore.isMiningActive},[s("span",null,S(t.$t("startMining")),1)],8,z)])):(d(),u("div",J,[v(i,{style:{cursor:"pointer"}}),L,s("span",P,S(o.miningStore.formattedTimeLeft),1)])),s("audio",U,null,512)])}const j=g(Z,[["render",W],["__scopeId","data-v-071321b5"]]),q={components:{card:j},data:()=>({})};function F(t,e,n,o,c,l){const a=_("card");return d(),y(a,{class:""})}const pt=g(q,[["render",F],["__scopeId","data-v-3339a27c"]]);export{pt as default};
