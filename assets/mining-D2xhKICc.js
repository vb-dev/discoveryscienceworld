import{_ as g,a as I,l as b,u as M}from"./index-B6Qm5ypN.js";import{ab as y,f as d,g as u,F as s,N as C,ah as N,ai as w,r as p,o as x,c as O,E as A,j as v,J as f,af as _,A as E}from"./@vue-NjKOnEGT.js";import"./pinia-BP0IfFWe.js";import"./@townsquarelabs-DM-69Jax.js";import"./@tonconnect-M86Ec7Bf.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-BKpq8BhR.js";import"./deepmerge-D8huMqX6.js";import"./axios-C8DqakIB.js";import"./vue-i18n-5Qi6QEAo.js";import"./@intlify-YGwFW6EB.js";import"./vue-router-DZppbSTe.js";import"./vue-cookies-oMoGE7eu.js";/* empty css             */import"./@vuepic-CdScWKV-.js";import"./date-fns-C7_rVUPb.js";import"./vuetify-MtPVAfi-.js";import"./vue-lazyload-Bd2acmnH.js";import"./firebase-DvzBAoB-.js";import"./@firebase-Hco5RtB1.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";const $={},R=o=>(N("data-v-740cb2bf"),o=o(),w(),o),T=I,k={class:"coin-container"},B=R(()=>s("source",{srcset:T,type:"image/webp"},null,-1)),z={class:"img-fluid",style:{"max-width":"280px",position:"relative"},alt:"Coin Image",loading:"lazy"};function D(o,n,e,t,c,l){const i=y("lazy");return d(),u("div",k,[s("picture",null,[B,C(s("img",z,null,512),[[i,"../img/boss5.webp"]])])])}const Z=g($,[["render",D],["__scopeId","data-v-740cb2bf"]]),G={components:{logo:Z,level:b},setup(){const o=M(),n=p(""),e=p(!0),t=p(null),c=p(!1),l=["НАЧАТЬ МАЙНИНГ","START MINING","ابدأ التعدين","开始挖矿","COMENZAR MINERÍA","COMMENCER MINER","खनन शुरू करें","INIZIA MINING","マイニング開始","마이닝 시작","ROZPOCZNIJ GÓRNICTWO","COMEÇAR MINERAÇÃO","MADENCІЛІГЕ БАШЛА","РОЗПОЧАТИ МАЙНІНГ"];let i=0,a=null;const r=()=>{i=(i+1)%l.length,n.value=l[i]},S=()=>{e.value=!e.value,localStorage.setItem("isSoundOn",e.value),t.value&&(t.value.muted=!e.value)},h=async()=>{a&&clearInterval(a);try{t.value&&e.value&&t.value.play(),await o.startMining(),await o.getCoinBalance()}catch(m){console.log(`Ошибка при запуске майнинга: ${m.message}`)}};return x(()=>{const m=localStorage.getItem("isSoundOn");m!==null&&(e.value=m==="true"),r(),a=setInterval(r,1e3),setTimeout(()=>{c.value=!0},1e3),o.syncServerTime().then(async()=>{await o.checkMiningStatus(),await o.getCoinBalance()})}),O(()=>{a&&clearInterval(a)}),{miningStore:o,handleStartMining:h,buttonText:n,startSound:t,isSoundOn:e,toggleSound:S,showContent:c}}},J={class:"mining-app"},V={key:0,class:"center-content"},j=["disabled"],F={key:1,class:"text-white center-content"},L={class:"fs-2"},P={ref:"startSound",src:"/img/1.mp3"};function U(o,n,e,t,c,l){const i=_("logo"),a=_("level");return d(),u("div",J,[s("div",{class:"sound-icon",onClick:n[0]||(n[0]=(...r)=>t.toggleSound&&t.toggleSound(...r)),style:{cursor:"pointer","margin-top":"130px"}},[s("i",{style:{color:"white"},class:A(t.isSoundOn?"bi bi-volume-up":"bi bi-volume-mute"),"aria-hidden":"true"},null,2)]),t.showContent&&!t.miningStore.isMiningActive?(d(),u("div",V,[v(i,{style:{cursor:"pointer","margin-top":"130px"}}),s("button",{class:"btn btn-danger1 fw-bold",onClick:n[1]||(n[1]=(...r)=>t.handleStartMining&&t.handleStartMining(...r)),disabled:t.miningStore.loading||t.miningStore.isMiningActive},[s("span",null,f(t.buttonText),1)],8,j)])):(d(),u("div",F,[v(a,{style:{cursor:"pointer"}}),s("span",L,f(t.miningStore.formattedTimeLeft),1)])),s("audio",P,null,512)])}const W=g(G,[["render",U],["__scopeId","data-v-e37e25ec"]]),q={components:{card:W},data:()=>({})};function H(o,n,e,t,c,l){const i=_("card");return d(),E(i,{class:""})}const It=g(q,[["render",H],["__scopeId","data-v-3339a27c"]]);export{It as default};
