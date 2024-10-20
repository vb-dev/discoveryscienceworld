import{_ as g,l as I,u as M}from"./index-B8G8voQF.js";import{a1 as d,a2 as p,a4 as x,a5 as C,a6 as i,r as m,l as N,p as b,a8 as w,v,Z as f,$ as _,aa as y}from"./@vue-CHbXVfj0.js";import"./pinia-CXEeXu6L.js";import"./axios-gbnyky6P.js";import"./vue-i18n-Cd6C3eY4.js";import"./@intlify-Du3kGuGm.js";import"./vue-router-Cw_MtoAk.js";import"./vue-cookies-BX8su8Ws.js";import"./vuetify-Bf-yT64S.js";import"./vue-lazyload-DGUnQfap.js";const O="/img/boss5.webp",$={},A=n=>(x("data-v-1d78fc71"),n=n(),C(),n),E={class:"coin-container"},R=A(()=>i("img",{class:"img-fluid",style:{"max-width":"280px","max-height":"280px",position:"relative"},src:O,alt:"Coin Image"},null,-1)),T=[R];function k(n,e,o,t,r,l){return d(),p("div",E,T)}const B=g($,[["render",k],["__scopeId","data-v-1d78fc71"]]),Z={components:{logo:B,level:I},setup(){const n=M(),e=m(""),o=m(!0),t=m(null),r=m(!1),l=["НАЧАТЬ МАЙНИНГ","START MINING","ابدأ التعدين","开始挖矿","COMENZAR MINERÍA","COMMENCER MINER","खनन शुरू करें","INIZIA MINING","マイニング開始","마이닝 시작","ROZPOCZNIJ GÓRNICTWO","COMEÇAR MINERAÇÃO","MADENCІЛІГЕ БАШЛА","РОЗПОЧАТИ МАЙНІНГ"];let a=0,s=null;const c=()=>{a=(a+1)%l.length,e.value=l[a]},S=()=>{o.value=!o.value,localStorage.setItem("isSoundOn",o.value),t.value&&(t.value.muted=!o.value)},h=async()=>{s&&clearInterval(s);try{t.value&&o.value&&t.value.play(),await n.startMining(),await n.getCoinBalance()}catch(u){console.log(`Ошибка при запуске майнинга: ${u.message}`)}};return N(()=>{const u=localStorage.getItem("isSoundOn");u!==null&&(o.value=u==="true"),c(),s=setInterval(c,1e3),setTimeout(()=>{r.value=!0},1e3),n.syncServerTime().then(async()=>{await n.checkMiningStatus(),await n.getCoinBalance()})}),b(()=>{s&&clearInterval(s)}),{miningStore:n,handleStartMining:h,buttonText:e,startSound:t,isSoundOn:o,toggleSound:S,showContent:r}}},G={class:"mining-app"},D={key:0,class:"center-content"},V=["disabled"],z={key:1,class:"text-white center-content"},J={class:"fs-2 fw-bold"},L={ref:"startSound",src:"/img/1.mp3"};function P(n,e,o,t,r,l){const a=_("logo"),s=_("level");return d(),p("div",G,[i("div",{class:"sound-icon",onClick:e[0]||(e[0]=(...c)=>t.toggleSound&&t.toggleSound(...c)),style:{cursor:"pointer","margin-top":"130px"}},[i("i",{style:{color:"white"},class:w(t.isSoundOn?"bi bi-volume-up":"bi bi-volume-mute"),"aria-hidden":"true"},null,2)]),v(a,{style:{cursor:"pointer","margin-top":"180px"}}),t.showContent&&!t.miningStore.isMiningActive?(d(),p("div",D,[i("button",{class:"btn-main fw-bold text-white",onClick:e[1]||(e[1]=(...c)=>t.handleStartMining&&t.handleStartMining(...c)),disabled:t.miningStore.loading||t.miningStore.isMiningActive},[i("span",null,f(t.buttonText),1)],8,V)])):(d(),p("div",z,[v(s,{style:{cursor:"pointer"}}),i("span",J,f(t.miningStore.formattedTimeLeft),1)])),i("audio",L,null,512)])}const U=g(Z,[["render",P],["__scopeId","data-v-86c96424"]]),W={components:{card:U},data:()=>({})};function j(n,e,o,t,r,l){const a=_("card");return d(),y(a,{class:""})}const et=g(W,[["render",j],["__scopeId","data-v-3339a27c"]]);export{et as default};
