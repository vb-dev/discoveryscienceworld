import{_ as D,a as E}from"./@townsquarelabs-DM-69Jax.js";import{r as i,c as I,g as x,j as c,m as r,G as L,af as d,f as _,F as t,J as a,N as V,ae as N,ak as q,E as B,A as b,L as k,B as C,I as F,ah as z,ai as W}from"./@vue-NjKOnEGT.js";import{u as j}from"./vue-i18n-5Qi6QEAo.js";import{_ as H,d as M,a as p}from"./index-D3N4rZrK.js";import{o as G,d as T,u as U,e as J,f as S,h as O,j as K,k as Q}from"./@firebase-D7pW4xTT.js";import"./@tonconnect-M86Ec7Bf.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-BKpq8BhR.js";import"./deepmerge-D8huMqX6.js";import"./@intlify-YGwFW6EB.js";import"./pinia-CrJ5cDv_.js";import"./axios-C8DqakIB.js";import"./vue-router-DZppbSTe.js";import"./vue-cookies-oMoGE7eu.js";/* empty css             */import"./@vuepic-CdScWKV-.js";import"./date-fns-C7_rVUPb.js";import"./vuetify-MtPVAfi-.js";import"./vue-lazyload-Bd2acmnH.js";import"./firebase-BaZfWIHc.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";const X={components:{TonConnectButton:D,TonConnectUIProvider:E},setup(){j();const o=i(""),l=i(""),u=i(""),e=i(!0),m=i(null),w=i(!1),g=i(null),f=i(!1),v=()=>{w.value=!w.value,console.log("Password visibility toggled")};G(p,async s=>{if(m.value=s,console.log("Auth state changed, currentUser:",s),s){const n=T(M,"users",s.uid);console.log("Setting user doc with currentUser.uid:",s.uid),await J(n,{email:s.email,online:!0,lastSeen:S()},{merge:!0}),window.addEventListener("beforeunload",async()=>{console.log("Window unload, setting user offline"),await U(n,{online:!1,lastSeen:S()})})}});const R=async()=>{if(f.value=!0,console.log("Register function called"),g.value.checkValidity()){console.log("Form is valid, attempting to register with email:",o.value);try{await O(p,o.value,l.value),console.log("User registered successfully"),alert("User registered successfully!")}catch(s){console.error("Error during registration:",s),u.value=s.message}}},A=async()=>{if(f.value=!0,console.log("Login function called"),g.value.checkValidity()){console.log("Form is valid, attempting to log in with email:",o.value);try{await K(p,o.value,l.value),console.log("User logged in successfully"),alert("User logged in successfully!")}catch(s){console.error("Error during login:",s),u.value=s.message}}},y=async()=>{try{console.log("Logout function called");const s=T(M,"users",p.currentUser.uid);await U(s,{online:!1,lastSeen:S()}),await Q(p),console.log("User logged out successfully"),alert("User logged out successfully!")}catch(s){console.error("Error during logout:",s),u.value=s.message}},P=()=>{e.value=!e.value,console.log("Auth mode toggled, isRegister:",e.value),u.value=""};return I(()=>{if(m.value){console.log("Component unmounted, setting user offline");const s=T(M,"users",m.value.uid);U(s,{online:!1,lastSeen:S()})}}),{email:o,password:l,errorMessage:u,isRegister:e,user:m,showPassword:w,register:R,login:A,logout:y,toggleAuthMode:P,toggleShowPassword:v,form:g,triedToSubmit:f}}},h=o=>(z("data-v-806a24ed"),o=o(),W(),o),Y={class:"headline"},Z={class:"mb-3"},$={for:"email",class:"form-label"},ee={class:"invalid-feedback"},oe={class:"invalid-feedback"},se={class:"mb-3"},te={for:"password",class:"form-label"},le={class:"input-group"},ae=["type"],ne={class:"invalid-feedback"},re={class:"invalid-feedback"},ie=h(()=>t("br",null,null,-1)),de=h(()=>t("br",null,null,-1)),ce=h(()=>t("br",null,null,-1)),ue=h(()=>t("br",null,null,-1)),me=h(()=>t("br",null,null,-1));function ge(o,l,u,e,m,w){const g=d("TonConnectButton"),f=d("v-card-title"),v=d("v-btn"),R=d("v-alert"),A=d("v-card-text"),y=d("v-card-actions"),P=d("v-card"),s=d("v-container");return _(),x(L,null,[c(g,{class:"position"}),c(s,{class:"auth-container",style:{"margin-top":"150px"}},{default:r(()=>[c(P,{class:"mx-auto text-white card","max-width":"400",outlined:"",style:{"background-color":"#091520"}},{default:r(()=>[c(f,null,{default:r(()=>[t("span",Y,a(e.isRegister?o.$t("register"):o.$t("login")),1)]),_:1}),c(A,null,{default:r(()=>[t("form",{onSubmit:l[3]||(l[3]=F(n=>e.isRegister?e.register():e.login(),["prevent"])),ref:"form",novalidate:"",class:B({"was-validated":e.triedToSubmit})},[t("div",Z,[t("label",$,a(o.$t("email")),1),V(t("input",{style:{"z-index":"10000000"},type:"email",class:"form-control",id:"email","onUpdate:modelValue":l[0]||(l[0]=n=>e.email=n),required:""},null,512),[[N,e.email]]),t("div",ee,a(o.$t("emailRequired")),1),t("div",oe,a(o.$t("emailValid")),1)]),t("div",se,[t("label",te,a(o.$t("password")),1),t("div",le,[V(t("input",{type:e.showPassword?"text":"password",class:"form-control",id:"password","onUpdate:modelValue":l[1]||(l[1]=n=>e.password=n),required:"",minlength:"6"},null,8,ae),[[q,e.password]]),t("button",{class:"",type:"button",onClick:l[2]||(l[2]=(...n)=>e.toggleShowPassword&&e.toggleShowPassword(...n))},[t("i",{class:B(e.showPassword?"mdi mdi-eye-off":"mdi mdi-eye")},null,2)]),t("div",ne,a(o.$t("passwordRequired")),1),t("div",re,a(o.$t("passwordLength")),1)])]),e.user?C("",!0):(_(),b(v,{key:0,class:"mt-4 text-white",color:"dark",type:"submit"},{default:r(()=>[k(a(e.isRegister?o.$t("register"):o.$t("login")),1)]),_:1}))],34),e.errorMessage?(_(),b(R,{key:0,type:"error",dismissible:"","onClick:close":l[4]||(l[4]=n=>e.errorMessage="")},{default:r(()=>[k(a(e.errorMessage),1)]),_:1})):C("",!0)]),_:1}),c(y,null,{default:r(()=>[e.user?C("",!0):(_(),b(v,{key:0,style:{"font-size":"10px"},text:"",onClick:e.toggleAuthMode},{default:r(()=>[k(a(e.isRegister?o.$t("alreadyHaveAccount"):o.$t("dontHaveAccount")),1)]),_:1},8,["onClick"]))]),_:1}),e.user?(_(),b(y,{key:0},{default:r(()=>[c(v,{class:"logout-btn text-danger",text:"",onClick:e.logout},{default:r(()=>[k(a(o.$t("logout")),1)]),_:1},8,["onClick"])]),_:1})):C("",!0)]),_:1}),ie,de,ce,ue,me]),_:1})],64)}const Ne=H(X,[["render",ge],["__scopeId","data-v-806a24ed"]]);export{Ne as default};
