import{_ as v,a as V}from"./@townsquarelabs-BS-uiH3p.js";import{a2 as y,y as o,aa as s,F as P,$ as a,a1 as x,W as u,Y as h,a3 as k,a4 as C,a5 as t}from"./@vue-DcaRQrEV.js";import{_ as L}from"./index-UOjnMblu.js";import"./@tonconnect-Bdfz1Hmc.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-tCHOh2cX.js";import"./deepmerge-D8huMqX6.js";import"./pinia-BpcJfL22.js";import"./axios-gbnyky6P.js";import"./vue-i18n-DnT-njvb.js";import"./@intlify-Du3kGuGm.js";import"./vue-router-esc5Ehka.js";import"./vue-cookies-oMoGE7eu.js";import"./vuetify-Cn8jMMVq.js";import"./vue-lazyload-BBtGN9-g.js";const S={components:{TonConnectButton:v,TonConnectUIProvider:V},data(){return{email:"",password:"",confirmPassword:"",showPassword:!1,loginEmail:"",loginPassword:"",showLoginPassword:!1}},methods:{togglePasswordVisibility(){this.showPassword=!this.showPassword},toggleLoginPasswordVisibility(){this.showLoginPassword=!this.showLoginPassword},submitForm(){this.password!==this.confirmPassword?alert("Пароли не совпадают"):alert("Форма успешно отправлена")},submitLogin(){alert("Авторизация успешна")}}},l=p=>(k("data-v-22c7470f"),p=p(),C(),p),B=l(()=>t("br",null,null,-1)),E=l(()=>t("br",null,null,-1)),U=l(()=>t("br",null,null,-1)),q=l(()=>t("button",{type:"submit",class:"mt-4 ml-2 btn-danger1",block:""},"Регистрация",-1)),I=l(()=>t("br",null,null,-1)),T=l(()=>t("button",{type:"submit",class:"mt-4 ml-2 btn-danger1",block:""},"Войти",-1)),F=l(()=>t("br",null,null,-1)),N=l(()=>t("br",null,null,-1)),j=l(()=>t("br",null,null,-1)),M=l(()=>t("br",null,null,-1)),W=l(()=>t("br",null,null,-1)),Y=l(()=>t("br",null,null,-1));function z(p,n,A,D,e,r){const f=a("TonConnectButton"),c=a("v-card-title"),d=a("v-text-field"),m=a("v-form"),_=a("v-card"),w=a("v-col"),b=a("v-row"),g=a("v-container");return x(),y(P,null,[B,E,U,o(g,null,{default:s(()=>[o(f,{class:"position"}),o(b,{justify:"center"},{default:s(()=>[o(w,{cols:"12",sm:"6"},{default:s(()=>[o(_,{style:{background:"none !important"},class:"mt-10 text-white"},{default:s(()=>[o(c,null,{default:s(()=>[u("Регистрация")]),_:1}),o(m,{onSubmit:h(r.submitForm,["prevent"]),autocomplete:"off"},{default:s(()=>[o(d,{variant:"underlined",modelValue:e.email,"onUpdate:modelValue":n[0]||(n[0]=i=>e.email=i),label:"Email",required:"",type:"email",autocomplete:"off",color:"white",class:"text-white","hide-details":"auto"},null,8,["modelValue"]),o(d,{variant:"underlined",modelValue:e.password,"onUpdate:modelValue":n[1]||(n[1]=i=>e.password=i),type:e.showPassword?"text":"password",label:"Пароль",required:"",autocomplete:"new-password","append-icon":"bi-eye","append-icon-color":"white","onClick:append":r.togglePasswordVisibility,color:"white",class:"text-white","hide-details":"auto"},null,8,["modelValue","type","append-icon","onClick:append"]),o(d,{variant:"underlined",modelValue:e.confirmPassword,"onUpdate:modelValue":n[2]||(n[2]=i=>e.confirmPassword=i),type:e.showPassword?"text":"password",label:"Подтвердите Пароль",required:"",autocomplete:"new-password","append-icon":"bi-eye","append-icon-color":"white","onClick:append":r.togglePasswordVisibility,color:"white",class:"text-white","hide-details":"auto"},null,8,["modelValue","type","append-icon","onClick:append"]),q]),_:1},8,["onSubmit"]),I]),_:1})]),_:1}),o(w,{cols:"12",sm:"6"},{default:s(()=>[o(_,{style:{background:"none !important"},class:"text-white"},{default:s(()=>[o(c,null,{default:s(()=>[u("Авторизация")]),_:1}),o(m,{onSubmit:h(r.submitLogin,["prevent"]),autocomplete:"off"},{default:s(()=>[o(d,{variant:"underlined",modelValue:e.loginEmail,"onUpdate:modelValue":n[3]||(n[3]=i=>e.loginEmail=i),label:"Email",required:"",type:"email",autocomplete:"off",color:"white",class:"text-white","hide-details":"auto"},null,8,["modelValue"]),o(d,{variant:"underlined",modelValue:e.loginPassword,"onUpdate:modelValue":n[4]||(n[4]=i=>e.loginPassword=i),type:e.showLoginPassword?"text":"password",label:"Пароль",required:"",autocomplete:"new-password","append-icon":"bi-eye","append-icon-color":"white","onClick:append":r.toggleLoginPasswordVisibility,color:"white",class:"text-white","hide-details":"auto"},null,8,["modelValue","type","append-icon","onClick:append"]),T,F,N,j,u(),M,W,Y]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}const ao=L(S,[["render",z],["__scopeId","data-v-22c7470f"]]);export{ao as default};
