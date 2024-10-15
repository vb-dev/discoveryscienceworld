import{_ as D,a as E}from"./@townsquarelabs-DM-69Jax.js";import{r as i,c as I,g as x,j as c,m as r,G as L,af as d,f as _,F as s,J as a,N as V,ae as N,ak as q,E as B,A as y,L as k,B as C,I as F,ah as W,ai as j}from"./@vue-NjKOnEGT.js";import{u as z}from"./vue-i18n-5Qi6QEAo.js";import{_ as H,d as M,b as p}from"./index-DtX1yX9X.js";import{o as G,d as T,u as U,e as J,f as S,h as O,j as K,k as Q}from"./@firebase-Hco5RtB1.js";import"./@tonconnect-M86Ec7Bf.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-BKpq8BhR.js";import"./deepmerge-D8huMqX6.js";import"./@intlify-YGwFW6EB.js";import"./pinia-BP0IfFWe.js";import"./axios-C8DqakIB.js";import"./vue-router-DZppbSTe.js";import"./vue-cookies-oMoGE7eu.js";/* empty css             */import"./@vuepic-CdScWKV-.js";import"./date-fns-C7_rVUPb.js";import"./vuetify-MtPVAfi-.js";import"./vue-lazyload-Bd2acmnH.js";import"./firebase-DvzBAoB-.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";const X={components:{TonConnectButton:D,TonConnectUIProvider:E},setup(){z();const o=i(""),l=i(""),u=i(""),e=i(!0),m=i(null),w=i(!1),g=i(null),f=i(!1),v=()=>{w.value=!w.value,console.log("Password visibility toggled")};G(p,async t=>{if(m.value=t,console.log("Auth state changed, currentUser:",t),t){const n=T(M,"users",t.uid);console.log("Setting user doc with currentUser.uid:",t.uid),await J(n,{email:t.email,online:!0,lastSeen:S()},{merge:!0}),window.addEventListener("beforeunload",async()=>{console.log("Window unload, setting user offline"),await U(n,{online:!1,lastSeen:S()})})}});const R=async()=>{if(f.value=!0,console.log("Register function called"),g.value.checkValidity()){console.log("Form is valid, attempting to register with email:",o.value);try{await O(p,o.value,l.value),console.log("User registered successfully"),alert("User registered successfully!")}catch(t){console.error("Error during registration:",t),u.value=t.message}}},A=async()=>{if(f.value=!0,console.log("Login function called"),g.value.checkValidity()){console.log("Form is valid, attempting to log in with email:",o.value);try{await K(p,o.value,l.value),console.log("User logged in successfully"),alert("User logged in successfully!")}catch(t){console.error("Error during login:",t),u.value=t.message}}},b=async()=>{try{console.log("Logout function called");const t=T(M,"users",p.currentUser.uid);await U(t,{online:!1,lastSeen:S()}),await Q(p),console.log("User logged out successfully"),alert("User logged out successfully!")}catch(t){console.error("Error during logout:",t),u.value=t.message}},P=()=>{e.value=!e.value,console.log("Auth mode toggled, isRegister:",e.value),u.value=""};return I(()=>{if(m.value){console.log("Component unmounted, setting user offline");const t=T(M,"users",m.value.uid);U(t,{online:!1,lastSeen:S()})}}),{email:o,password:l,errorMessage:u,isRegister:e,user:m,showPassword:w,register:R,login:A,logout:b,toggleAuthMode:P,toggleShowPassword:v,form:g,triedToSubmit:f}}},h=o=>(W("data-v-db8f06d5"),o=o(),j(),o),Y={class:"headline"},Z={class:"mb-3"},$={for:"email",class:"form-label"},ee={class:"invalid-feedback"},oe={class:"invalid-feedback"},te={class:"mb-3"},se={for:"password",class:"form-label"},le={class:"input-group"},ae=["type"],ne={class:"invalid-feedback"},re={class:"invalid-feedback"},ie=h(()=>s("br",null,null,-1)),de=h(()=>s("br",null,null,-1)),ce=h(()=>s("br",null,null,-1)),ue=h(()=>s("br",null,null,-1)),me=h(()=>s("br",null,null,-1));function ge(o,l,u,e,m,w){const g=d("TonConnectButton"),f=d("v-card-title"),v=d("v-btn"),R=d("v-alert"),A=d("v-card-text"),b=d("v-card-actions"),P=d("v-card"),t=d("v-container");return _(),x(L,null,[c(g,{class:"position"}),c(t,{class:"auth-container",style:{"margin-top":"150px"}},{default:r(()=>[c(P,{class:"mx-auto text-white card","max-width":"400",outlined:"",style:{"background-color":"#2b2b2b"}},{default:r(()=>[c(f,null,{default:r(()=>[s("span",Y,a(e.isRegister?o.$t("register"):o.$t("login")),1)]),_:1}),c(A,null,{default:r(()=>[s("form",{onSubmit:l[3]||(l[3]=F(n=>e.isRegister?e.register():e.login(),["prevent"])),ref:"form",novalidate:"",class:B({"was-validated":e.triedToSubmit})},[s("div",Z,[s("label",$,a(o.$t("email")),1),V(s("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":l[0]||(l[0]=n=>e.email=n),required:""},null,512),[[N,e.email]]),s("div",ee,a(o.$t("emailRequired")),1),s("div",oe,a(o.$t("emailValid")),1)]),s("div",te,[s("label",se,a(o.$t("password")),1),s("div",le,[V(s("input",{type:e.showPassword?"text":"password",class:"form-control",id:"password","onUpdate:modelValue":l[1]||(l[1]=n=>e.password=n),required:"",minlength:"6"},null,8,ae),[[q,e.password]]),s("button",{class:"btn btn-dark",type:"button",onClick:l[2]||(l[2]=(...n)=>e.toggleShowPassword&&e.toggleShowPassword(...n))},[s("i",{class:B(e.showPassword?"mdi mdi-eye-off":"mdi mdi-eye")},null,2)]),s("div",ne,a(o.$t("passwordRequired")),1),s("div",re,a(o.$t("passwordLength")),1)])]),e.user?C("",!0):(_(),y(v,{key:0,class:"mt-4 text-white",color:"dark",type:"submit"},{default:r(()=>[k(a(e.isRegister?o.$t("register"):o.$t("login")),1)]),_:1}))],34),e.errorMessage?(_(),y(R,{key:0,type:"error",dismissible:"","onClick:close":l[4]||(l[4]=n=>e.errorMessage="")},{default:r(()=>[k(a(e.errorMessage),1)]),_:1})):C("",!0)]),_:1}),c(b,null,{default:r(()=>[e.user?C("",!0):(_(),y(v,{key:0,style:{"font-size":"10px"},text:"",onClick:e.toggleAuthMode},{default:r(()=>[k(a(e.isRegister?o.$t("alreadyHaveAccount"):o.$t("dontHaveAccount")),1)]),_:1},8,["onClick"]))]),_:1}),e.user?(_(),y(b,{key:0},{default:r(()=>[c(v,{class:"logout-btn bg-dark text-danger",text:"",onClick:e.logout},{default:r(()=>[k(a(o.$t("logout")),1)]),_:1},8,["onClick"])]),_:1})):C("",!0)]),_:1}),ie,de,ce,ue,me]),_:1})],64)}const Ne=H(X,[["render",ge],["__scopeId","data-v-db8f06d5"]]);export{Ne as default};