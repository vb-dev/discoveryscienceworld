import{a as p}from"./axios-C8DqakIB.js";import{_ as m,a as g}from"./@townsquarelabs-mmpkNMp_.js";import{_}from"./index-C-ccJWeZ.js";import{a2 as l,a5 as e,Z as r,a8 as h,W as n,F as f,a1 as u}from"./@vue-ChGo5w3C.js";import"./@tonconnect-M86Ec7Bf.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-BKpq8BhR.js";import"./deepmerge-D8huMqX6.js";import"./pinia-BA2ma1PH.js";import"./vue-i18n-CFS_FaRd.js";import"./@intlify-Du3kGuGm.js";import"./vue-router-BsIn1iu0.js";import"./vue-cookies-oMoGE7eu.js";/* empty css                */import"./vuetify-C3wLBvbz.js";const w={components:{TonConnectButton:m,TonConnectUIProvider:g},data(){return{imageSrc:"/img/www.webp",referralLink:"",userId:null,ownerId:null,defaultUserId:"1227459883",statistics:{invitedUsersCount:0,invitedPremiumUsersCount:0,friendsBonus:0,friendsOfFriendsBonus:0,totalBonus:0,total:0}}},methods:{generateReferralLink(){const t=this.getTelegramUserId();t?(this.referralLink=`https://t.me/FourVrobot/FourVworldNews?startapp=owner_${t}&startApp=owner_${t}`,this.updateDebugOutput(`Сгенерирована реферальная ссылка: ${this.referralLink}`),console.log(`Сгенерирована реферальная ссылка: ${this.referralLink}`)):alert("Ошибка: ID пользователя не был получен.")},sendReferralToFriend(){if(this.referralLink){const t=`https://t.me/share/url?text=${encodeURIComponent(`🔥Hello! Earn together with friends!

Invite your friends and earn together! When your friend receives a reward, you get 10% of their reward🏆 . And when your friend's friend receives a reward, you get an additional 3% of their earnings🎉!`)}&url=${encodeURIComponent(this.referralLink)}`;window.open(t,"_blank")}else alert("Реферальная ссылка не сгенерирована.")},getTelegramUserId(){return window.Telegram&&window.Telegram.WebApp&&window.Telegram.WebApp.initDataUnsafe?this.userId=window.Telegram.WebApp.initDataUnsafe.user?window.Telegram.WebApp.initDataUnsafe.user.id:this.defaultUserId:(this.userId=this.defaultUserId,this.updateDebugOutput("Не удалось получить Telegram ID, используется значение по умолчанию: "+this.defaultUserId)),this.updateDebugOutput(`Полученный Telegram User ID: ${this.userId}`),this.userId},copyToClipboard(t){t?navigator.clipboard.writeText(t).then(()=>{alert(this.$t("linkCopied"))}).catch(i=>{alert("Ошибка при копировании ссылки: "+i)}):alert("Ссылка для копирования отсутствует.")},getReferralStatistics(){const i=`https://4v-news-api.azurewebsites.net/Games4V/User/Statistics?TelegramUserId=${this.getTelegramUserId()}`;p.get(i).then(o=>{this.statistics=o.data,this.updateDebugOutput("Статистика успешно загружена."),console.log("Статистика:",this.statistics)}).catch(o=>{console.error("Ошибка при загрузке статистики:",o),this.updateDebugOutput("Ошибка при загрузке статистики.")})},processReferral(){if(window.Telegram&&window.Telegram.WebApp&&window.Telegram.WebApp.initDataUnsafe){const i=window.Telegram.WebApp.initDataUnsafe.start_param||"";if(i&&i.includes("owner_")){this.ownerId=i.split("_")[1],this.updateDebugOutput(`ID пригласившего: ${this.ownerId}`),console.log(`Вы перешли по реферальной ссылке от пользователя с ID: ${this.ownerId}`);const o=this.getTelegramUserId();if(this.ownerId&&o&&this.ownerId!==o.toString()){const a=`https://4v-news-api.azurewebsites.net/Games4V/Referral/Create?TelegramUserId=${this.ownerId}&TelegramChildUserId=${o}`;console.log(`Отправляем запрос на сервер: ${a}`),p.post(a).then(s=>{s.data.isSuccess?(console.log("Успешно зарегистрирован реферал."),this.updateDebugOutput("Успешно зарегистрирован реферал.")):(console.log("Ошибка при регистрации реферала: "+s.data.errors),this.updateDebugOutput("Ошибка при регистрации реферала: "+s.data.errors))}).catch(s=>{console.log(`Ошибка при отправке данных на сервер: ${s.response?s.response.data:s.message}`),this.updateDebugOutput(`Ошибка при отправке данных на сервер: ${s.response?s.response.data:s.message}`)})}else this.ownerId===o.toString()&&(console.log("Пользователь не может приглашать сам себя."),this.updateDebugOutput("Пользователь не может приглашать сам себя."))}}else this.getParamsFromUrl()},updateDebugOutput(t){const i=document.getElementById("debug-output");i&&(i.innerText=t)}},mounted(){this.processReferral(),this.updateDebugOutput("mounted() вызван"),this.generateReferralLink(),this.getReferralStatistics()}},b={id:"app1"},v={class:"container text-white",style:{"margin-top":"130px"}},I={class:"row"},y={class:"col mx-2 img",style:{"border-radius":"15px"}},T=["src"],U={class:"fw-bold"},x={style:{"font-size":"14px"}},D={class:"mb-2"},$=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-copy",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"})],-1),k=[$],C={class:"container"},F={class:"col text-white mt-2 btn-danger mx-2",style:{"border-radius":"15px"}},O={class:"info-row"},R={style:{"font-size":"12px"}},B={style:{},class:"badge"},V=e("br",null,null,-1),z={style:{},class:"badge ml-1"},L=e("br",null,null,-1),A={class:"container"},S={class:"col text-white mt-2 btn-danger mx-2",style:{"border-radius":"15px"}},W={class:"info-row"},P={style:{"font-size":"12px"}},N={class:"badge"},E={class:"container"},H={class:"col text-white mt-2 btn-danger mx-2",style:{"border-radius":"15px"}},X={class:"info-row"},G={style:{"font-size":"12px"}},M={class:"badge"},Z={class:"container"},j={class:"col text-white mt-2 btn-danger mx-2",style:{"border-radius":"15px"}},q={class:"info-row"},J={style:{"font-size":"12px"}},K={class:"badge"},Q=e("br",null,null,-1),Y=e("br",null,null,-1),ee=e("br",null,null,-1),te=e("br",null,null,-1),se=e("br",null,null,-1);function ie(t,i,o,a,s,d){return u(),l(f,null,[e("div",b,[e("div",v,[e("div",I,[e("div",y,[e("img",{loading:"lazy",style:{"border-radius":"10%","max-width":"190px"},class:"img-fluid mt-2 img",src:s.imageSrc},null,8,T),e("h5",U,r(t.$t("refTitle")),1),e("p",x,r(t.$t("refContent")),1),e("div",D,[s.referralLink?(u(),l("button",{key:0,onClick:i[0]||(i[0]=(...c)=>d.sendReferralToFriend&&d.sendReferralToFriend(...c)),class:"btn-danger fw-bold text-white-50",style:{"border-radius":"30px"}},r(t.$t("invite")),1)):h("",!0),s.referralLink?(u(),l("button",{key:1,onClick:i[1]||(i[1]=c=>d.copyToClipboard(s.referralLink)),class:"btn-danger1 ml-4 text-white-50",style:{"border-radius":"15px"}},k)):h("",!0)])]),e("div",C,[e("div",F,[e("div",O,[e("span",R,r(t.$t("invited")),1),e("span",B,[n(r(t.$t("premium")),1),V,n(r(s.statistics.invitedPremiumUsersCount),1)]),e("span",z,[n(r(t.$t("ordinary")),1),L,n(r(s.statistics.invitedUsersCount),1)])])])]),e("div",A,[e("div",S,[e("div",W,[e("span",P,r(t.$t("bonusForFriends")),1),e("span",N,r(s.statistics.friendsBonus)+" FVX",1)])])]),e("div",E,[e("div",H,[e("div",X,[e("span",G,r(t.$t("bonusForFriendsFriends")),1),e("span",M,r(s.statistics.friendsOfFriendsBonus)+" FVX",1)])])]),e("div",Z,[e("div",j,[e("div",q,[e("span",J,r(t.$t("totalAccrued")),1),e("span",K,r(s.statistics.totalBonus)+" FVX",1)])])])])])]),Q,Y,ee,te,se],64)}const Ie=_(w,[["render",ie]]);export{Ie as default};
