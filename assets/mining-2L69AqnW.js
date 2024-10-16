import{_ as g,a as I,l as M,u as x}from"./index-4Q1uNjxH.js";import{a1 as d,a2 as p,a3 as C,a4 as N,a5 as i,r as u,o as y,s as b,a7 as w,y as v,Z as f,$ as _,a9 as O}from"./@vue-ChGo5w3C.js";import"./pinia-BA2ma1PH.js";import"./@townsquarelabs-mmpkNMp_.js";import"./@tonconnect-M86Ec7Bf.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-BKpq8BhR.js";import"./deepmerge-D8huMqX6.js";import"./axios-C8DqakIB.js";import"./vue-i18n-CFS_FaRd.js";import"./@intlify-Du3kGuGm.js";import"./vue-router-BsIn1iu0.js";import"./vue-cookies-oMoGE7eu.js";/* empty css                */import"./vuetify-C3wLBvbz.js";const $={},A=n=>(C("data-v-f3bfe09f"),n=n(),N(),n),E={class:"coin-container"},R=A(()=>i("img",{class:"img-fluid",style:{"max-width":"280px","max-height":"280px",position:"relative"},src:I,alt:"Coin Image"},null,-1)),T=[R];function k(n,e,o,t,c,l){return d(),p("div",E,T)}const B=g($,[["render",k],["__scopeId","data-v-f3bfe09f"]]),Z={components:{logo:B,level:M},setup(){const n=x(),e=u(""),o=u(!0),t=u(null),c=u(!1),l=["НАЧАТЬ МАЙНИНГ","START MINING","ابدأ التعدين","开始挖矿","COMENZAR MINERÍA","COMMENCER MINER","खनन शुरू करें","INIZIA MINING","マイニング開始","마이닝 시작","ROZPOCZNIJ GÓRNICTWO","COMEÇAR MINERAÇÃO","MADENCІЛІГЕ БАШЛА","РОЗПОЧАТИ МАЙНІНГ"];let a=0,s=null;const r=()=>{a=(a+1)%l.length,e.value=l[a]},S=()=>{o.value=!o.value,localStorage.setItem("isSoundOn",o.value),t.value&&(t.value.muted=!o.value)},h=async()=>{s&&clearInterval(s);try{t.value&&o.value&&t.value.play(),await n.startMining(),await n.getCoinBalance()}catch(m){console.log(`Ошибка при запуске майнинга: ${m.message}`)}};return y(()=>{const m=localStorage.getItem("isSoundOn");m!==null&&(o.value=m==="true"),r(),s=setInterval(r,1e3),setTimeout(()=>{c.value=!0},1e3),n.syncServerTime().then(async()=>{await n.checkMiningStatus(),await n.getCoinBalance()})}),b(()=>{s&&clearInterval(s)}),{miningStore:n,handleStartMining:h,buttonText:e,startSound:t,isSoundOn:o,toggleSound:S,showContent:c}}},G={class:"mining-app"},D={key:0,class:"center-content"},V=["disabled"],z={key:1,class:"text-white center-content"},J={class:"fs-2"},L={ref:"startSound",src:"/img/1.mp3"};function P(n,e,o,t,c,l){const a=_("logo"),s=_("level");return d(),p("div",G,[i("div",{class:"sound-icon",onClick:e[0]||(e[0]=(...r)=>t.toggleSound&&t.toggleSound(...r)),style:{cursor:"pointer","margin-top":"130px"}},[i("i",{style:{color:"white"},class:w(t.isSoundOn?"bi bi-volume-up":"bi bi-volume-mute"),"aria-hidden":"true"},null,2)]),t.showContent&&!t.miningStore.isMiningActive?(d(),p("div",D,[v(a,{style:{cursor:"pointer","margin-top":"130px"}}),i("button",{class:"btn-danger1 fw-bold text-white",onClick:e[1]||(e[1]=(...r)=>t.handleStartMining&&t.handleStartMining(...r)),disabled:t.miningStore.loading||t.miningStore.isMiningActive},[i("span",null,f(t.buttonText),1)],8,V)])):(d(),p("div",z,[v(s,{style:{cursor:"pointer"}}),i("span",J,f(t.miningStore.formattedTimeLeft),1)])),i("audio",L,null,512)])}const U=g(Z,[["render",P],["__scopeId","data-v-d0352c33"]]),W={components:{card:U},data:()=>({})};function j(n,e,o,t,c,l){const a=_("card");return d(),O(a,{class:""})}const dt=g(W,[["render",j],["__scopeId","data-v-3339a27c"]]);export{dt as default};
