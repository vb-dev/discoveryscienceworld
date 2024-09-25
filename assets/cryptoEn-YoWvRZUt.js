import{g as a,F as e,L as h,J as l,I as g,j as w,m as b,B as u,G as _,l as m,af as y,f as i,ah as v,ai as k}from"./@vue-NjKOnEGT.js";import{_ as N}from"./index-BhJLfWag.js";import"./pinia-BP0IfFWe.js";import"./@townsquarelabs-DM-69Jax.js";import"./@tonconnect-M86Ec7Bf.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-BKpq8BhR.js";import"./deepmerge-D8huMqX6.js";import"./axios-C8DqakIB.js";import"./vue-i18n-5Qi6QEAo.js";import"./@intlify-YGwFW6EB.js";import"./vue-router-DZppbSTe.js";import"./vue-cookies-oMoGE7eu.js";/* empty css             */import"./@vuepic-CdScWKV-.js";import"./date-fns-C7_rVUPb.js";import"./vuetify-MtPVAfi-.js";import"./vue-lazyload-Bd2acmnH.js";import"./firebase-DvzBAoB-.js";import"./@firebase-Hco5RtB1.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";const L={data(){return{selectedLanguage:"EN",news:[],russianNews:[],loading:!0}},computed:{currentLanguageLabel(){return{EN:"EN",ES:"ES",FR:"FR",TR:"TR",RU:"RU"}[this.selectedLanguage]||"en"}},methods:{changeLanguage(s){this.selectedLanguage=s,this.fetchNews(s)},async fetchNews(s="EN"){if(this.loading=!0,s==="RU"){const o="https://4v-news-api.azurewebsites.net/News",p={SiteId:1,Language:52,CategoryId:16,WithImageOnly:!0,Page:1,PageSize:30};try{const n=await(await fetch(`${o}?${new URLSearchParams(p)}`)).json();this.russianNews=n.items||[]}catch(c){console.error("Ошибка при получении русских новостей:",c)}finally{this.loading=!1}}else{const o=`https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite&lang=${s}`;try{const c=await(await fetch(o)).json();c.Type===100?this.news=c.Data||[]:console.error("Ошибка при получении новостей:",c.Message)}catch(p){console.error("Ошибка:",p)}finally{this.loading=!1}}}},mounted(){this.fetchNews(this.selectedLanguage)}},r=s=>(v("data-v-b3f48282"),s=s(),k(),s),R={class:"container my-5"},x=r(()=>e("br",null,null,-1)),E=r(()=>e("br",null,null,-1)),C=r(()=>e("br",null,null,-1)),S=r(()=>e("br",null,null,-1)),T={class:"row"},U={class:"col-12 d-flex justify-content-start align-items-center"},F={class:"dropdown me-2"},M={style:{"font-size":"9px"},class:"btn btn-danger dropdown-toggle fixed-button",type:"button",id:"dropdownLanguage","data-bs-toggle":"dropdown","aria-expanded":"false"},j={class:"dropdown-menu","aria-labelledby":"dropdownLanguage"},B={class:"btn btn-danger mt-2 fixed-button1",style:{"font-size":"9px"}},I=r(()=>e("img",{style:{width:"15px"},src:"https://cdn3d.iconscout.com/3d/premium/thumb/network-pole-3d-icon-download-in-png-blend-fbx-gltf-file-formats--wifi-logo-tower-signal-podcast-pack-entertainment-icons-7597392.png?f=webp"},null,-1)),z={key:0,class:"spinner-container"},D=r(()=>e("div",{class:"spinner-border text-warning",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1)),P=[D],V={key:1},H={key:0,class:"row"},A={class:"card mb-4 shadow-sm"},W=["src"],Y={class:"card-body"},G={class:"card-title"},J={class:"card-text"},O=["href"],Q=r(()=>e("br",null,null,-1)),X={key:1},q=r(()=>e("p",null,"Ошибка загрузки русских новостей или новости недоступны.",-1)),K=[q],Z={key:2},$={key:0,class:"row"},ee={class:"card mb-4 shadow-sm"},te=["src"],se={key:1,src:"https://media.licdn.com/dms/image/D5612AQFy5W3uXU0sNw/article-cover_image-shrink_720_1280/0/1708932951704?e=2147483647&v=beta&t=v-NpllAfRHhajeMi691pM29UDfIHgdfyTYClEl0neg4",class:"card-img-top",alt:"News image"},oe={class:"card-body"},ne={class:"card-title"},ae={class:"card-text"},ie=["href"],re=r(()=>e("br",null,null,-1)),le={key:3},ce=r(()=>e("p",null,"Новостей нет на выбранном языке.",-1)),de=[ce];function pe(s,o,p,c,n,d){const f=y("router-link");return i(),a("div",R,[x,E,C,S,e("div",T,[e("div",U,[e("div",F,[e("button",M,[h(l(s.$t("CryptoNews"))+" (",1),e("span",null,l(d.currentLanguageLabel),1),h(") ")]),e("ul",j,[e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:o[0]||(o[0]=g(t=>d.changeLanguage("EN"),["prevent"]))},"English")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:o[1]||(o[1]=g(t=>d.changeLanguage("ES"),["prevent"]))},"Español")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:o[2]||(o[2]=g(t=>d.changeLanguage("FR"),["prevent"]))},"Français")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:o[3]||(o[3]=g(t=>d.changeLanguage("TR"),["prevent"]))},"Türkçe")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:o[4]||(o[4]=g(t=>d.changeLanguage("RU"),["prevent"]))},"Русский")])])]),e("button",B,[w(f,{to:"/radio"},{default:b(()=>[I]),_:1})])])]),n.loading?(i(),a("div",z,P)):u("",!0),n.selectedLanguage==="RU"?(i(),a("div",V,[!n.loading&&n.russianNews.length>0?(i(),a("div",H,[(i(!0),a(_,null,m(n.russianNews,t=>(i(),a("div",{class:"col-12 col-sm-6 col-md-4",key:t.id},[e("div",A,[e("img",{src:t.urlToImage,class:"card-img-top",alt:"News image"},null,8,W),e("div",Y,[e("h5",G,l(t.title),1),e("p",J,l(t.content),1),e("a",{href:t.url,target:"_blank",class:"btn btn-primary"},l(s.$t("ReadMore")),9,O)])])]))),128)),Q])):n.loading?u("",!0):(i(),a("div",X,K))])):(i(),a("div",Z,[!n.loading&&n.news.length>0?(i(),a("div",$,[(i(!0),a(_,null,m(n.news,t=>(i(),a("div",{class:"col-12 col-sm-6 col-md-4",key:t.id},[e("div",ee,[t.imageurl?(i(),a("img",{key:0,src:t.imageurl,class:"card-img-top",alt:"News image"},null,8,te)):(i(),a("img",se)),e("div",oe,[e("h5",ne,l(t.title),1),e("p",ae,l(t.body),1),e("a",{href:t.url,target:"_blank",class:"btn btn-primary"},l(s.$t("ReadMore")),9,ie)])])]))),128))])):u("",!0)])),re,!n.loading&&(!n.news||n.news.length===0)?(i(),a("div",le,de)):u("",!0)])}const Ie=N(L,[["render",pe],["__scopeId","data-v-b3f48282"]]);export{Ie as default};
