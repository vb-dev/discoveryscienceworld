import{a as h}from"./axios-gbnyky6P.js";import{_ as g}from"./index-B8G8voQF.js";import{a2 as l,a6 as e,Z as r,a9 as p,W as n,F as m,a1 as u}from"./@vue-CHbXVfj0.js";import"./pinia-CXEeXu6L.js";import"./vue-i18n-Cd6C3eY4.js";import"./@intlify-Du3kGuGm.js";import"./vue-router-Cw_MtoAk.js";import"./vue-cookies-BX8su8Ws.js";import"./vuetify-Bf-yT64S.js";import"./vue-lazyload-DGUnQfap.js";const _={components:{},data(){return{imageSrc:"/img/www.webp",referralLink:"",userId:null,ownerId:null,defaultUserId:"1227459883",statistics:{invitedUsersCount:0,invitedPremiumUsersCount:0,friendsBonus:0,friendsOfFriendsBonus:0,totalBonus:0,total:0}}},methods:{generateReferralLink(){const t=this.getTelegramUserId();t?(this.referralLink=`https://t.me/FourVrobot/FourVworldNews?startapp=owner_${t}&startApp=owner_${t}`,this.updateDebugOutput(`Сгенерирована реферальная ссылка: ${this.referralLink}`),console.log(`Сгенерирована реферальная ссылка: ${this.referralLink}`)):alert("Ошибка: ID пользователя не был получен.")},sendReferralToFriend(){if(this.referralLink){const t=`https://t.me/share/url?text=${encodeURIComponent(`🔥Hello! Earn together with friends!

Invite your friends and earn together! When your friend receives a reward, you get 10% of their reward🏆 . And when your friend's friend receives a reward, you get an additional 3% of their earnings🎉!`)}&url=${encodeURIComponent(this.referralLink)}`;window.open(t,"_blank")}else alert("Реферальная ссылка не сгенерирована.")},getTelegramUserId(){return window.Telegram&&window.Telegram.WebApp&&window.Telegram.WebApp.initDataUnsafe?this.userId=window.Telegram.WebApp.initDataUnsafe.user?window.Telegram.WebApp.initDataUnsafe.user.id:this.defaultUserId:(this.userId=this.defaultUserId,this.updateDebugOutput("Не удалось получить Telegram ID, используется значение по умолчанию: "+this.defaultUserId)),this.updateDebugOutput(`Полученный Telegram User ID: ${this.userId}`),this.userId},copyToClipboard(t){t?navigator.clipboard.writeText(t).then(()=>{alert(this.$t("linkCopied"))}).catch(i=>{alert("Ошибка при копировании ссылки: "+i)}):alert("Ссылка для копирования отсутствует.")},getReferralStatistics(){const i=`https://4v-news-api.azurewebsites.net/Games4V/User/Statistics?TelegramUserId=${this.getTelegramUserId()}`;h.get(i).then(o=>{this.statistics=o.data,this.updateDebugOutput("Статистика успешно загружена."),console.log("Статистика:",this.statistics)}).catch(o=>{console.error("Ошибка при загрузке статистики:",o),this.updateDebugOutput("Ошибка при загрузке статистики.")})},processReferral(){if(window.Telegram&&window.Telegram.WebApp&&window.Telegram.WebApp.initDataUnsafe){const i=window.Telegram.WebApp.initDataUnsafe.start_param||"";if(i&&i.includes("owner_")){this.ownerId=i.split("_")[1],this.updateDebugOutput(`ID пригласившего: ${this.ownerId}`),console.log(`Вы перешли по реферальной ссылке от пользователя с ID: ${this.ownerId}`);const o=this.getTelegramUserId();if(this.ownerId&&o&&this.ownerId!==o.toString()){const a=`https://4v-news-api.azurewebsites.net/Games4V/Referral/Create?TelegramUserId=${this.ownerId}&TelegramChildUserId=${o}`;console.log(`Отправляем запрос на сервер: ${a}`),h.post(a).then(s=>{s.data.isSuccess?(console.log("Успешно зарегистрирован реферал."),this.updateDebugOutput("Успешно зарегистрирован реферал.")):(console.log("Ошибка при регистрации реферала: "+s.data.errors),this.updateDebugOutput("Ошибка при регистрации реферала: "+s.data.errors))}).catch(s=>{console.log(`Ошибка при отправке данных на сервер: ${s.response?s.response.data:s.message}`),this.updateDebugOutput(`Ошибка при отправке данных на сервер: ${s.response?s.response.data:s.message}`)})}else this.ownerId===o.toString()&&(console.log("Пользователь не может приглашать сам себя."),this.updateDebugOutput("Пользователь не может приглашать сам себя."))}}else this.getParamsFromUrl()},updateDebugOutput(t){const i=document.getElementById("debug-output");i&&(i.innerText=t)}},mounted(){this.processReferral(),this.updateDebugOutput("mounted() вызван"),this.generateReferralLink(),this.getReferralStatistics()}},f={id:"app1"},w={class:"container text-white",style:{"margin-top":"130px"}},b={class:"row"},v={class:"col mx-2 dark img",style:{"border-radius":"15px"}},I=["src"],y={class:"fw-bold"},x={style:{"font-size":"14px"}},T={class:"mb-2"},U=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-copy",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"})],-1),D=[U],k={class:"container"},F={class:"col text-white mt-2 btn-danger2 mx-2",style:{"border-radius":"15px"}},$={class:"info-row"},C={style:{"font-size":"12px","margin-right":"3px"}},O={style:{},class:"badge"},R=e("br",null,null,-1),V={style:{},class:"badge ml-1"},B=e("br",null,null,-1),L={class:"container"},z={class:"col text-white mt-2 btn-danger2 mx-2",style:{"border-radius":"15px"}},A={class:"info-row"},S={style:{"font-size":"12px"}},W={class:"badge"},N={class:"container"},P={class:"col text-white mt-2 btn-danger2 mx-2",style:{"border-radius":"15px"}},E={class:"info-row"},H={style:{"font-size":"12px"}},X={class:"badge"},G={class:"container"},M={class:"col text-white mt-2 btn-danger2 mx-2",style:{"border-radius":"15px"}},Z={class:"info-row"},j={style:{"font-size":"12px"}},q={class:"badge"},J=e("br",null,null,-1),K=e("br",null,null,-1),Q=e("br",null,null,-1),Y=e("br",null,null,-1),ee=e("br",null,null,-1);function te(t,i,o,a,s,d){return u(),l(m,null,[e("div",f,[e("div",w,[e("div",b,[e("div",v,[e("img",{alt:"image",style:{"border-radius":"10%","max-width":"190px"},class:"img-fluid mt-2 img",src:s.imageSrc},null,8,I),e("h5",y,r(t.$t("refTitle")),1),e("p",x,r(t.$t("refContent")),1),e("div",T,[s.referralLink?(u(),l("button",{key:0,onClick:i[0]||(i[0]=(...c)=>d.sendReferralToFriend&&d.sendReferralToFriend(...c)),class:"btn-danger1 fw-bold text-white",style:{"border-radius":"30px"}},r(t.$t("invite")),1)):p("",!0),s.referralLink?(u(),l("button",{key:1,onClick:i[1]||(i[1]=c=>d.copyToClipboard(s.referralLink)),class:"btn-danger1 ml-4 text-white",style:{"border-radius":"15px"}},D)):p("",!0)])]),e("div",k,[e("div",F,[e("div",$,[e("span",C,r(t.$t("invited")),1),e("span",O,[n(r(t.$t("premium")),1),R,n(r(s.statistics.invitedPremiumUsersCount),1)]),e("span",V,[n(r(t.$t("ordinary")),1),B,n(r(s.statistics.invitedUsersCount),1)])])])]),e("div",L,[e("div",z,[e("div",A,[e("span",S,r(t.$t("bonusForFriends")),1),e("span",W,r(s.statistics.friendsBonus)+" FVX",1)])])]),e("div",N,[e("div",P,[e("div",E,[e("span",H,r(t.$t("bonusForFriendsFriends")),1),e("span",X,r(s.statistics.friendsOfFriendsBonus)+" FVX",1)])])]),e("div",G,[e("div",M,[e("div",Z,[e("span",j,r(t.$t("totalAccrued")),1),e("span",q,r(s.statistics.totalBonus)+" FVX",1)])])])])])]),J,K,Q,Y,ee],64)}const he=g(_,[["render",te]]);export{he as default};
