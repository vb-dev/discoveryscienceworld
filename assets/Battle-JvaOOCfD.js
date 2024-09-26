import{d as Y}from"./pinia-BP0IfFWe.js";import{d as l,l as B,e as P,f as q,u as x,m as E,q as N,n as F,p as V,t as W}from"./@firebase-Hco5RtB1.js";import{d as r,_ as Q}from"./index-CNjd1MPY.js";import{r as _,e as w,o as H,w as J,f as k,g as v,j as b,m as T,F as i,L as A,J as m,G as C,l as j,E as K,H as L,A as Z,B as $,af as f,ah as tt,ai as st}from"./@vue-NjKOnEGT.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";import"./@townsquarelabs-DM-69Jax.js";import"./@tonconnect-M86Ec7Bf.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-BKpq8BhR.js";import"./deepmerge-D8huMqX6.js";import"./axios-C8DqakIB.js";import"./vue-i18n-5Qi6QEAo.js";import"./@intlify-YGwFW6EB.js";import"./vue-router-DZppbSTe.js";import"./vue-cookies-oMoGE7eu.js";/* empty css             */import"./@vuepic-CdScWKV-.js";import"./date-fns-C7_rVUPb.js";import"./vuetify-MtPVAfi-.js";import"./vue-lazyload-Bd2acmnH.js";import"./firebase-DvzBAoB-.js";const et=async(t,e)=>{try{const s=l(r,"users",t);(await B(s)).exists()?console.log("User document loaded"):(await P(s,{userId:t,userName:e,pointsData:{},totalPoints:0,isMining:!1,miningStartedAt:null,miningEndsAt:null,dailyResetTime:U(!1),lastUpdated:q(),isTestMode:!1}),console.log("User document created"))}catch(s){console.error("Error creating or loading user document: ",s)}},nt=Y("cardsMining",{state:()=>({pointsData:{},totalPoints:0,userId:"guest",userName:"guest",isMining:!1,miningStartedAt:null,miningEndsAt:null,dailyResetTime:U(!1),isTestMode:!1,users:[],bank:0,correctAnswer:null,userAnswers:{},stakesA:0,stakesB:0}),actions:{setUser(t,e){this.userId=t,this.userName=e,et(t,e)},async loadUserData(){const t=l(r,"users",this.userId),e=await B(t);if(e.exists()){const s=e.data();this.totalPoints=s.totalPoints,this.pointsData=s.pointsData,this.isMining=s.isMining||!1,this.miningStartedAt=s.miningStartedAt||null,this.miningEndsAt=s.miningEndsAt||null,this.dailyResetTime=s.dailyResetTime||U(this.isTestMode),this.isTestMode=s.isTestMode||!1,console.log("User data loaded:",s)}else await P(t,{userId:this.userId,userName:this.userName,totalPoints:this.totalPoints,pointsData:this.pointsData,isMining:this.isMining,miningStartedAt:this.miningStartedAt,miningEndsAt:this.miningEndsAt,dailyResetTime:U(this.isTestMode),lastUpdated:q(),isTestMode:this.isTestMode}),console.log("User document initialized.")},async saveUserData(){const t=l(r,"users",this.userId);await x(t,{totalPoints:this.totalPoints,isMining:this.isMining,miningEndsAt:this.miningEndsAt}),console.log("User data saved.")},async updateTopUsersCollection(){const t=E(r,"topUsers");console.log("topUsersRef created:",t);const e=l(t,this.userId);await P(e,{userId:this.userId,userName:this.userName||"Unknown",totalPoints:this.totalPoints,lastUpdated:q()},{merge:!0}),console.log("User document updated/created in topUsers");const s=N(t,F("totalPoints","desc"));console.log("topUsersQuery created:",s);const n=await V(s);console.log("topUsersSnapshot fetched:",n.size),this.users=n.docs.map(a=>a.data()),console.log("Top users loaded and sorted:",this.users)},async decrementPoints(t){this.totalPoints-=t,await this.saveUserData(),console.log("Points decremented by",t)},async checkAndStartMining(t){if(await this.loadUserData(),this.isMining)return console.log("Mining is already in progress."),!1;this.isMining=!0,this.miningStartedAt=Date.now(),this.miningEndsAt=this.miningStartedAt+144e5;const e=this.getPoints(t)+4;return this.totalPoints+=4,await this.updateCardPoints(t,e,!0,this.miningStartedAt),await this.saveUserData(),console.log("Mining started."),setTimeout(async()=>{this.finishMining()},144e5),!0},async finishMining(){this.isMining=!1,this.miningStartedAt=null,this.miningEndsAt=null,Object.keys(this.pointsData).forEach(t=>{this.pointsData[t].isButtonDisabled=!1}),await this.saveUserData(),console.log("Mining finished and button re-enabled.")},async updateCardPoints(t,e,s,n){this.pointsData[t]||(this.pointsData[t]={points:0,isButtonDisabled:!1,lastClickedTime:null}),this.pointsData[t].points=e,this.pointsData[t].isButtonDisabled=s,this.pointsData[t].lastClickedTime=n,await this.saveUserData()},async resetPoints(){for(const t in this.pointsData)this.pointsData[t]&&(this.pointsData[t].points=0);this.dailyResetTime=U(this.isTestMode),await this.saveUserData(),console.log("Points reset at:",new Date().toLocaleTimeString())},getPoints(t){return this.pointsData[t]?this.pointsData[t].points:0},calculateNextResetTime(t){const e=new Date;if(t)return e.getTime()+6e4;{let s=new Date(e.getFullYear(),e.getMonth(),e.getDate(),3,0,0);return e>=s&&s.setDate(s.getDate()+1),s.getTime()}},async toggleTestMode(){this.isTestMode=!this.isTestMode,this.dailyResetTime=this.calculateNextResetTime(this.isTestMode),await this.saveUserData()},async loadQuizData(){const t=l(r,"quiz","current"),e=await B(t);if(e.exists()){const s=e.data();this.bank=s.bank!==void 0?s.bank:0,this.correctAnswer=s.correctAnswer||null,this.userAnswers=s.userAnswers||{},this.stakesA=s.stakesA!==void 0?s.stakesA:0,this.stakesB=s.stakesB!==void 0?s.stakesB:0}else await P(t,{bank:0,correctAnswer:null,userAnswers:{},stakesA:0,stakesB:0})},async addToBank(t,e){const s=l(r,"quiz","current"),n=await B(s),g=(n.exists()&&n.data().bank?n.data().bank:0)+t,u=n.exists()&&n.data().stakesA?n.data().stakesA:0,d=n.exists()&&n.data().stakesB?n.data().stakesB:0;let c=u,h=d;e==="А"?c+=t:e==="Б"&&(h+=t),await x(s,{bank:g,stakesA:c,stakesB:h}),this.bank=g,this.stakesA=c,this.stakesB=h},async recordUserAnswer(t,e){const s=l(r,"quiz","current");await x(s,{[`userAnswers.${t}`]:e}),this.userAnswers[t]=e},async setCorrectAnswer(t){this.correctAnswer=t;const e=l(r,"quiz","current");await x(e,{correctAnswer:t}),await this.distributeWinnings()},async distributeWinnings(){const t=Object.keys(this.userAnswers).filter(s=>this.userAnswers[s]===this.correctAnswer);if(t.length>0){const s=this.bank,n=Math.floor(s/t.length);let a=s%t.length;for(const g of t){const u=l(r,"users",g),d=await B(u);if(d.exists()){const c=d.data(),h=n+(a>0?1:0);a>0&&a--,await x(u,{totalPoints:c.totalPoints+h})}}}this.bank=0,this.stakesA=0,this.stakesB=0,this.userAnswers={};const e=l(r,"quiz","current");await P(e,{bank:0,correctAnswer:null,userAnswers:{},stakesA:0,stakesB:0})},async loadTopUsers(){const t=N(E(r,"topUsers"),F("totalPoints","desc")),e=await V(t);this.users=e.docs.map(s=>s.data()),console.log("Top users loaded:",this.users)},startPolling(){const t=this.userId,e=l(r,"users",t);W(e,n=>{if(n.exists()){const a=n.data();this.pointsData=a.pointsData,this.totalPoints=a.totalPoints,this.isMining=a.isMining||!1,this.miningStartedAt=a.miningStartedAt||null,this.miningEndsAt=a.miningEndsAt||null,this.dailyResetTime=a.dailyResetTime||this.calculateNextResetTime(this.isTestMode),console.log("Data updated from Firestore:",this.pointsData)}});const s=l(r,"quiz","current");W(s,n=>{if(n.exists()){const a=n.data();this.bank=a.bank,this.correctAnswer=a.correctAnswer,this.userAnswers=a.userAnswers,this.stakesA=a.stakesA,this.stakesB=a.stakesB}})},loadPointsFromLocalStorage(){const t=localStorage.getItem(`points_${this.userId}`);t&&(this.totalPoints=parseInt(t,10))},savePointsToLocalStorage(){localStorage.setItem(`points_${this.userId}`,this.totalPoints.toString())}}});function U(t){const e=new Date;if(t)return e.getTime()+6e4;{let s=new Date(e.getFullYear(),e.getMonth(),e.getDate(),3,0,0);return e>=s&&s.setDate(s.getDate()+1),s.getTime()}}const at={setup(){const t=nt(),e=_(""),s=_(""),n=_(!1),a=_(!1),g=["1227459883","389603194"],u=w(()=>t.bank),d=w(()=>t.stakesA),c=w(()=>t.stakesB),h=w(()=>t.userAnswers),M=_("Usik or Fury?!"),S=_("Usik or Fury?!Who will win in a rematch: Usik (A) or Fury (B)?"),R=_(["А","Б"]),p=w(()=>t.totalPoints),D=w(()=>p.value>=10),z=w(()=>{const o=d.value+c.value;return o?d.value/o*100:0}),G=w(()=>{const o=d.value+c.value;return o?c.value/o*100:0}),X=async o=>{if(console.log("Submitting answer:",o),console.log("UserId:",e.value),D.value&&!n.value){n.value=!0;try{alert("Bid accepted!"),await t.decrementPoints(10),await t.addToBank(10,o),await t.recordUserAnswer(e.value,o)}finally{n.value=!1}}},O=async o=>{console.log("Choosing correct answer:",o),await t.setCorrectAnswer(o)};return H(async()=>{var o;if(window.Telegram&&window.Telegram.WebApp){const I=((o=window.Telegram.WebApp.initDataUnsafe)==null?void 0:o.user)||{};s.value=I.username||"Guest",e.value=I.id?I.id.toString():"Unknown",t.setUser(e.value,s.value),g.includes(e.value)&&(a.value=!0)}else e.value=t.userId;await t.loadUserData(),await t.loadQuizData(),t.startPolling()}),J(()=>t.userAnswers,o=>{console.log("User answers updated:",o)}),{quizTitle:M,quizDescription:S,answers:R,canParticipate:D,submitAnswer:X,chooseCorrectAnswer:O,bank:u,stakesA:d,stakesB:c,userId:e,userName:s,userAnswers:h,percentageA:z,percentageB:G,isSubmitting:n,isAdmin:a}}},y=t=>(tt("data-v-dec176eb"),t=t(),st(),t),it={class:"dark"},ot={style:{"font-size":"14px"}},rt=y(()=>i("img",{style:{width:"50px"},src:"https://cdn3d.iconscout.com/3d/premium/thumb/boxing-gloves-5236962-4379967.png?f=webp"},null,-1)),ct=y(()=>i("br",null,null,-1)),lt=["disabled","onClick"],dt={class:"progress mx-2"},ut=["aria-valuenow"],ht={class:"progress mt-2 mx-2"},mt=["aria-valuenow"],gt={style:{"font-size":"12px"},class:"fw-bold"},pt={class:"text-warning fs-6"},wt={style:{"font-size":"12px"},class:"fw-bold"},ft={class:"text-warning fs-6"},_t={style:{"font-size":"12px"},class:"fw-bold"},At={class:"text-warning fs-6"},kt=y(()=>i("br",null,null,-1)),bt=["onClick"],Dt=y(()=>i("br",null,null,-1)),vt=y(()=>i("br",null,null,-1)),yt=y(()=>i("br",null,null,-1));function xt(t,e,s,n,a,g){const u=f("v-img"),d=f("v-card-title"),c=f("v-divider"),h=f("v-card-subtitle"),M=f("v-card-text"),S=f("v-card-actions"),R=f("v-card");return k(),v(C,null,[b(R,{class:"text-white text-center dark",style:{"margin-top":"110px"}},{default:T(()=>[i("span",it,[b(u,{style:{"box-shadow":"2px 2px 2px 2px rgb(190, 15, 15)"},src:"https://cdn.fakty.com.ua/wp-content/uploads/2024/01/08/usyk-fyuri-promo-632x356.jpg",height:"200px",class:"white--text align-end",cover:""})]),b(d,{class:"text-h6 fw-bold"},{default:T(()=>[A(m(n.quizTitle),1)]),_:1}),b(M,null,{default:T(()=>[i("p",ot,m(n.quizDescription),1),rt,ct,(k(!0),v(C,null,j(n.answers,(p,D)=>(k(),v("button",{key:D,disabled:!n.canParticipate||n.userAnswers[n.userId]!==void 0||n.isSubmitting,class:K(["ma-2 bt btn btn-light text-white",{"btn-green":n.userAnswers[n.userId]===p}]),onClick:z=>n.submitAnswer(p)},m(p),11,lt))),128)),b(c,{class:"my-4"}),i("div",dt,[i("div",{class:"progress-bar bg-primary",role:"progressbar",style:L({width:n.percentageA+"%"}),"aria-valuenow":n.percentageA,"aria-valuemin":"0","aria-valuemax":"100"},m(Math.round(n.percentageA))+"% на А ",13,ut)]),i("div",ht,[i("div",{class:"progress-bar bg-success",role:"progressbar",style:L({width:n.percentageB+"%"}),"aria-valuenow":n.percentageB,"aria-valuemin":"0","aria-valuemax":"100"},m(Math.round(n.percentageB))+"% на Б ",13,mt)]),b(h,{class:"text-center mt-4 fw-bold"},{default:T(()=>[i("h6",gt,[A(" General bank: "),i("span",pt,m(n.bank),1),A(" FVX ")]),i("h6",wt,[A(" Bet on A: "),i("span",ft,m(n.stakesA),1),A(" FVX ")]),i("h6",_t,[A(" Bet on B: "),i("span",At,m(n.stakesB),1),A(" FVX ")])]),_:1})]),_:1}),kt,n.isAdmin?(k(),Z(S,{key:0,class:"justify-center"},{default:T(()=>[(k(!0),v(C,null,j(n.answers,(p,D)=>(k(),v("button",{key:"admin-"+D,class:"btn ma-2 mb-16 bg-warning text-white fw-bold",onClick:z=>n.chooseCorrectAnswer(p)}," Админ "+m(p),9,bt))),128))]),_:1})):$("",!0)]),_:1}),Dt,vt,yt],64)}const Tt=Q(at,[["render",xt],["__scopeId","data-v-dec176eb"]]),Bt={components:{bet:Tt},props:{isDarkMode:{type:Boolean,required:!0}}},Pt={class:""};function Ut(t,e,s,n,a,g){const u=f("bet");return k(),v("div",Pt,[b(u)])}const ss=Q(Bt,[["render",Ut],["__scopeId","data-v-062526db"]]);export{ss as default};
