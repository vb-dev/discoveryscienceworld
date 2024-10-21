import{a2 as n,a6 as e,v as f,ab as v,W as p,Z as d,Y as u,a9 as h,F as _,a7 as m,$ as y,a1 as a,a4 as b,a5 as k}from"./@vue-CHbXVfj0.js";import{_ as N}from"./index-IgIvD6bd.js";import"./pinia-CXEeXu6L.js";import"./axios-gbnyky6P.js";import"./vue-i18n-Cd6C3eY4.js";import"./@intlify-Du3kGuGm.js";import"./vue-router-Cw_MtoAk.js";import"./vue-cookies-BX8su8Ws.js";import"./vuetify-Bf-yT64S.js";import"./vue-lazyload-DGUnQfap.js";const L={data(){return{selectedLanguage:"EN",news:[],russianNews:[],loading:!0}},computed:{currentLanguageLabel(){return{EN:"EN",ES:"ES",FR:"FR",TR:"TR",RU:"RU"}[this.selectedLanguage]||"en"}},methods:{changeLanguage(i){this.selectedLanguage=i,this.fetchNews(i)},async fetchNews(i="EN"){if(this.loading=!0,i==="RU"){const t="https://4v-news-api.azurewebsites.net/News",g={SiteId:1,Language:52,CategoryId:16,WithImageOnly:!0,Page:1,PageSize:30};try{const o=await(await fetch(`${t}?${new URLSearchParams(g)}`)).json();this.russianNews=o.items||[]}catch(r){console.error("Ошибка при получении русских новостей:",r)}finally{this.loading=!1}}else{const t=`https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite&lang=${i}`;try{const r=await(await fetch(t)).json();r.Type===100?this.news=r.Data||[]:console.error("Ошибка при получении новостей:",r.Message)}catch(g){console.error("Ошибка:",g)}finally{this.loading=!1}}}},mounted(){this.fetchNews(this.selectedLanguage)}},l=i=>(b("data-v-75f2147e"),i=i(),k(),i),x={class:"container my-5"},E=l(()=>e("br",null,null,-1)),R=l(()=>e("br",null,null,-1)),C=l(()=>e("br",null,null,-1)),S=l(()=>e("br",null,null,-1)),T={class:"row"},U={class:"col-12 d-flex justify-content-start align-items-center"},F=l(()=>e("button",{class:"btn btn-danger3 fixed-button1",style:{"font-size":"9px"}},[e("img",{style:{width:"15px",height:"15px"},src:"https://cdn3d.iconscout.com/3d/premium/thumb/network-pole-3d-icon-download-in-png-blend-fbx-gltf-file-formats--wifi-logo-tower-signal-podcast-pack-entertainment-icons-7597392.png?f=webp"})],-1)),I={class:"dropdown"},j={style:{"font-size":"9px"},class:"btn btn-danger3 dropdown-toggle fixed-button text-white",type:"button",id:"dropdownLanguage","data-bs-toggle":"dropdown","aria-expanded":"false"},z={class:"dropdown-menu","aria-labelledby":"dropdownLanguage"},B={key:0,class:"spinner-container"},D=l(()=>e("div",{class:"spinner-border text-warning",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1)),M=[D],P={key:1},V={key:0,class:"row"},H={class:"card mb-4 shadow-sm"},W=["src"],Y={class:"card-body"},A={class:"card-title"},O={class:"card-text"},Q=l(()=>e("br",null,null,-1)),X={key:1},Z=l(()=>e("p",null,"Ошибка загрузки русских новостей или новости недоступны.",-1)),q=[Z],G={key:2},J={key:0,class:"row"},K={class:"card mb-4 shadow-sm"},$=["src"],ee={key:1,src:"https://media.licdn.com/dms/image/D5612AQFy5W3uXU0sNw/article-cover_image-shrink_720_1280/0/1708932951704?e=2147483647&v=beta&t=v-NpllAfRHhajeMi691pM29UDfIHgdfyTYClEl0neg4",class:"card-img-top",alt:"News image"},se={class:"card-body"},te={class:"card-title"},oe={class:"card-text"},ne=l(()=>e("br",null,null,-1)),ae={key:3},ie=l(()=>e("p",null,"Новостей нет на выбранном языке.",-1)),le=[ie];function re(i,t,g,r,o,c){const w=y("router-link");return a(),n("div",x,[E,R,C,S,e("div",T,[e("div",U,[f(w,{to:"/radio"},{default:v(()=>[F]),_:1})])]),e("div",I,[e("button",j,[p(d(i.$t("CryptoNews"))+" (",1),e("span",null,d(c.currentLanguageLabel),1),p(") ")]),e("ul",z,[e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:t[0]||(t[0]=u(s=>c.changeLanguage("EN"),["prevent"]))},"English")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:t[1]||(t[1]=u(s=>c.changeLanguage("ES"),["prevent"]))},"Español")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:t[2]||(t[2]=u(s=>c.changeLanguage("FR"),["prevent"]))},"Français")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:t[3]||(t[3]=u(s=>c.changeLanguage("TR"),["prevent"]))},"Türkçe")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:t[4]||(t[4]=u(s=>c.changeLanguage("RU"),["prevent"]))},"Русский")])])]),o.loading?(a(),n("div",B,M)):h("",!0),o.selectedLanguage==="RU"?(a(),n("div",P,[!o.loading&&o.russianNews.length>0?(a(),n("div",V,[(a(!0),n(_,null,m(o.russianNews,s=>(a(),n("div",{class:"col-12 col-sm-6 col-md-4",key:s.id},[e("div",H,[e("img",{src:s.urlToImage,class:"card-img-top",alt:"News image"},null,8,W),e("div",Y,[e("h5",A,d(s.title),1),e("p",O,d(s.content),1)])])]))),128)),Q])):o.loading?h("",!0):(a(),n("div",X,q))])):(a(),n("div",G,[!o.loading&&o.news.length>0?(a(),n("div",J,[(a(!0),n(_,null,m(o.news,s=>(a(),n("div",{class:"col-12 col-sm-6 col-md-4",key:s.id},[e("div",K,[s.imageurl?(a(),n("img",{key:0,src:s.imageurl,class:"card-img-top",alt:"News image"},null,8,$)):(a(),n("img",ee)),e("div",se,[e("h5",te,d(s.title),1),e("p",oe,d(s.body),1)])])]))),128))])):h("",!0)])),ne,!o.loading&&(!o.news||o.news.length===0)?(a(),n("div",ae,le)):h("",!0)])}const ve=N(L,[["render",re],["__scopeId","data-v-75f2147e"]]);export{ve as default};
