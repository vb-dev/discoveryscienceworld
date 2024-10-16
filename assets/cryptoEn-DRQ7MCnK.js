import{g as n,F as e,j as f,m as b,L as _,J as d,I as g,B as u,G as h,l as m,af as v,f as i,ag as y,ah as k}from"./@vue-__l9B_85.js";import{_ as N}from"./index-BmeFPldV.js";import"./pinia-lwTlpTIT.js";import"./@townsquarelabs-16PzzAQ_.js";import"./@tonconnect-M86Ec7Bf.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-BKpq8BhR.js";import"./deepmerge-D8huMqX6.js";import"./axios-C8DqakIB.js";import"./vue-i18n-BYwOkJVi.js";import"./@intlify-Du3kGuGm.js";import"./vue-router-LHJ1DXGb.js";import"./vue-cookies-oMoGE7eu.js";/* empty css             */import"./@vuepic-DxQbSENG.js";import"./date-fns-C7_rVUPb.js";import"./vuetify-BE4X0aUx.js";import"./vue-lazyload-f4_DPajf.js";const L={data(){return{selectedLanguage:"EN",news:[],russianNews:[],loading:!0}},computed:{currentLanguageLabel(){return{EN:"EN",ES:"ES",FR:"FR",TR:"TR",RU:"RU"}[this.selectedLanguage]||"en"}},methods:{changeLanguage(a){this.selectedLanguage=a,this.fetchNews(a)},async fetchNews(a="EN"){if(this.loading=!0,a==="RU"){const t="https://4v-news-api.azurewebsites.net/News",p={SiteId:1,Language:52,CategoryId:16,WithImageOnly:!0,Page:1,PageSize:30};try{const o=await(await fetch(`${t}?${new URLSearchParams(p)}`)).json();this.russianNews=o.items||[]}catch(l){console.error("Ошибка при получении русских новостей:",l)}finally{this.loading=!1}}else{const t=`https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite&lang=${a}`;try{const l=await(await fetch(t)).json();l.Type===100?this.news=l.Data||[]:console.error("Ошибка при получении новостей:",l.Message)}catch(p){console.error("Ошибка:",p)}finally{this.loading=!1}}}},mounted(){this.fetchNews(this.selectedLanguage)}},r=a=>(y("data-v-beb4c671"),a=a(),k(),a),x={class:"container my-5"},E=r(()=>e("br",null,null,-1)),R=r(()=>e("br",null,null,-1)),C=r(()=>e("br",null,null,-1)),S=r(()=>e("br",null,null,-1)),T={class:"row"},U={class:"col-12 d-flex justify-content-start align-items-center"},F=r(()=>e("button",{class:"btn btn-danger mt-2 fixed-button1",style:{"font-size":"9px"}},[e("img",{style:{width:"15px"},src:"https://cdn3d.iconscout.com/3d/premium/thumb/network-pole-3d-icon-download-in-png-blend-fbx-gltf-file-formats--wifi-logo-tower-signal-podcast-pack-entertainment-icons-7597392.png?f=webp"})],-1)),I={class:"dropdown me-2"},j={style:{"font-size":"9px"},class:"btn btn-danger dropdown-toggle fixed-button",type:"button",id:"dropdownLanguage","data-bs-toggle":"dropdown","aria-expanded":"false"},B={class:"dropdown-menu","aria-labelledby":"dropdownLanguage"},z={key:0,class:"spinner-container"},D=r(()=>e("div",{class:"spinner-border text-warning",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1)),M=[D],P={key:1},V={key:0,class:"row"},H={class:"card mb-4 shadow-sm"},A=["src"],W={class:"card-body"},Y={class:"card-title"},G={class:"card-text"},J=r(()=>e("br",null,null,-1)),O={key:1},Q=r(()=>e("p",null,"Ошибка загрузки русских новостей или новости недоступны.",-1)),X=[Q],q={key:2},K={key:0,class:"row"},Z={class:"card mb-4 shadow-sm"},$=["src"],ee={key:1,src:"https://media.licdn.com/dms/image/D5612AQFy5W3uXU0sNw/article-cover_image-shrink_720_1280/0/1708932951704?e=2147483647&v=beta&t=v-NpllAfRHhajeMi691pM29UDfIHgdfyTYClEl0neg4",class:"card-img-top",alt:"News image"},se={class:"card-body"},te={class:"card-title"},oe={class:"card-text"},ne=r(()=>e("br",null,null,-1)),ie={key:3},ae=r(()=>e("p",null,"Новостей нет на выбранном языке.",-1)),re=[ae];function le(a,t,p,l,o,c){const w=v("router-link");return i(),n("div",x,[E,R,C,S,e("div",T,[e("div",U,[f(w,{to:"/radio"},{default:b(()=>[F]),_:1})])]),e("div",I,[e("button",j,[_(d(a.$t("CryptoNews"))+" (",1),e("span",null,d(c.currentLanguageLabel),1),_(") ")]),e("ul",B,[e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:t[0]||(t[0]=g(s=>c.changeLanguage("EN"),["prevent"]))},"English")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:t[1]||(t[1]=g(s=>c.changeLanguage("ES"),["prevent"]))},"Español")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:t[2]||(t[2]=g(s=>c.changeLanguage("FR"),["prevent"]))},"Français")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:t[3]||(t[3]=g(s=>c.changeLanguage("TR"),["prevent"]))},"Türkçe")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:t[4]||(t[4]=g(s=>c.changeLanguage("RU"),["prevent"]))},"Русский")])])]),o.loading?(i(),n("div",z,M)):u("",!0),o.selectedLanguage==="RU"?(i(),n("div",P,[!o.loading&&o.russianNews.length>0?(i(),n("div",V,[(i(!0),n(h,null,m(o.russianNews,s=>(i(),n("div",{class:"col-12 col-sm-6 col-md-4",key:s.id},[e("div",H,[e("img",{src:s.urlToImage,class:"card-img-top",alt:"News image"},null,8,A),e("div",W,[e("h5",Y,d(s.title),1),e("p",G,d(s.content),1)])])]))),128)),J])):o.loading?u("",!0):(i(),n("div",O,X))])):(i(),n("div",q,[!o.loading&&o.news.length>0?(i(),n("div",K,[(i(!0),n(h,null,m(o.news,s=>(i(),n("div",{class:"col-12 col-sm-6 col-md-4",key:s.id},[e("div",Z,[s.imageurl?(i(),n("img",{key:0,src:s.imageurl,class:"card-img-top",alt:"News image"},null,8,$)):(i(),n("img",ee)),e("div",se,[e("h5",te,d(s.title),1),e("p",oe,d(s.body),1)])])]))),128))])):u("",!0)])),ne,!o.loading&&(!o.news||o.news.length===0)?(i(),n("div",ie,re)):u("",!0)])}const Se=N(L,[["render",le],["__scopeId","data-v-beb4c671"]]);export{Se as default};
