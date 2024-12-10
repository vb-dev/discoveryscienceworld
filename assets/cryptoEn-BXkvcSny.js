import{a2 as n,a5 as e,y as f,aa as b,W as _,Z as d,Y as p,a8 as u,F as h,a6 as m,$ as y,a1 as a,a3 as v,a4 as k}from"./@vue-DcaRQrEV.js";import{_ as N}from"./index-sslxeiZ4.js";import"./pinia-BpcJfL22.js";import"./@townsquarelabs-BS-uiH3p.js";import"./@tonconnect-Bdfz1Hmc.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-tCHOh2cX.js";import"./deepmerge-D8huMqX6.js";import"./axios-gbnyky6P.js";import"./vue-i18n-DnT-njvb.js";import"./@intlify-Du3kGuGm.js";import"./vue-router-esc5Ehka.js";import"./vue-cookies-oMoGE7eu.js";import"./vuetify-Cn8jMMVq.js";import"./vue-lazyload-BBtGN9-g.js";const L="/img/bis.webp",x={data(){return{selectedLanguage:"EN",news:[],russianNews:[],loading:!0}},computed:{currentLanguageLabel(){return{EN:"EN",ES:"ES",FR:"FR",TR:"TR",RU:"RU"}[this.selectedLanguage]||"en"}},methods:{changeLanguage(i){this.selectedLanguage=i,this.fetchNews(i)},async fetchNews(i="EN"){if(this.loading=!0,i==="RU"){const s="https://4v-news-api.azurewebsites.net/News",g={SiteId:1,Language:52,CategoryId:16,WithImageOnly:!0,Page:1,PageSize:30};try{const o=await(await fetch(`${s}?${new URLSearchParams(g)}`)).json();this.russianNews=o.items||[]}catch(r){console.error("Ошибка при получении русских новостей:",r)}finally{this.loading=!1}}else{const s=`https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite&lang=${i}`;try{const r=await(await fetch(s)).json();r.Type===100?this.news=r.Data||[]:console.error("Ошибка при получении новостей:",r.Message)}catch(g){console.error("Ошибка:",g)}finally{this.loading=!1}}}},mounted(){this.fetchNews(this.selectedLanguage)}},l=i=>(v("data-v-94adfbf2"),i=i(),k(),i),E={class:"container my-5"},R=l(()=>e("br",null,null,-1)),C=l(()=>e("br",null,null,-1)),S=l(()=>e("br",null,null,-1)),T=l(()=>e("br",null,null,-1)),U={class:"row"},F={class:"col-12 d-flex justify-content-start align-items-center"},I=l(()=>e("button",{class:"btn-danger3 fixed-button1",style:{"font-size":"7px"}},[e("img",{style:{width:"15px",height:"15px"},src:"https://cdn3d.iconscout.com/3d/premium/thumb/network-pole-3d-icon-download-in-png-blend-fbx-gltf-file-formats--wifi-logo-tower-signal-podcast-pack-entertainment-icons-7597392.png?f=webp"})],-1)),j={class:"dropdown"},z={style:{"font-size":"9px"},class:"btn btn-danger3 dropdown-toggle fixed-button text-white",type:"button",id:"dropdownLanguage","data-bs-toggle":"dropdown","aria-expanded":"false"},B={class:"dropdown-menu","aria-labelledby":"dropdownLanguage"},D={key:0,class:"spinner-container"},M=l(()=>e("img",{src:L},null,-1)),P=[M],V={key:1},H={key:0,class:"row"},W={class:"card mb-4 shadow-sm"},Y=["src"],A={class:"card-body"},O={class:"card-title"},Q={class:"card-text"},X=l(()=>e("br",null,null,-1)),Z={key:1},q=l(()=>e("p",null,"Ошибка загрузки русских новостей или новости недоступны.",-1)),G=[q],J={key:2},K={key:0,class:"row"},$={class:"card mb-4 shadow-sm"},ee=["src"],te={key:1,src:"https://media.licdn.com/dms/image/D5612AQFy5W3uXU0sNw/article-cover_image-shrink_720_1280/0/1708932951704?e=2147483647&v=beta&t=v-NpllAfRHhajeMi691pM29UDfIHgdfyTYClEl0neg4",class:"card-img-top",alt:"News image"},se={class:"card-body"},oe={class:"card-title"},ne={class:"card-text"},ae=l(()=>e("br",null,null,-1)),ie={key:3},le=l(()=>e("p",null,"Новостей нет на выбранном языке.",-1)),re=[le];function ce(i,s,g,r,o,c){const w=y("router-link");return a(),n("div",E,[R,C,S,T,e("div",U,[e("div",F,[f(w,{to:"/radio"},{default:b(()=>[I]),_:1})])]),e("div",j,[e("button",z,[_(d(i.$t("CryptoNews"))+" (",1),e("span",null,d(c.currentLanguageLabel),1),_(") ")]),e("ul",B,[e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:s[0]||(s[0]=p(t=>c.changeLanguage("EN"),["prevent"]))},"English")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:s[1]||(s[1]=p(t=>c.changeLanguage("ES"),["prevent"]))},"Español")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:s[2]||(s[2]=p(t=>c.changeLanguage("FR"),["prevent"]))},"Français")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:s[3]||(s[3]=p(t=>c.changeLanguage("TR"),["prevent"]))},"Türkçe")]),e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:s[4]||(s[4]=p(t=>c.changeLanguage("RU"),["prevent"]))},"Русский")])])]),o.loading?(a(),n("div",D,P)):u("",!0),o.selectedLanguage==="RU"?(a(),n("div",V,[!o.loading&&o.russianNews.length>0?(a(),n("div",H,[(a(!0),n(h,null,m(o.russianNews,t=>(a(),n("div",{class:"col-12 col-sm-6 col-md-4",key:t.id},[e("div",W,[e("img",{src:t.urlToImage,class:"card-img-top",alt:"News image"},null,8,Y),e("div",A,[e("h5",O,d(t.title),1),e("p",Q,d(t.content),1)])])]))),128)),X])):o.loading?u("",!0):(a(),n("div",Z,G))])):(a(),n("div",J,[!o.loading&&o.news.length>0?(a(),n("div",K,[(a(!0),n(h,null,m(o.news,t=>(a(),n("div",{class:"col-12 col-sm-6 col-md-4",key:t.id},[e("div",$,[t.imageurl?(a(),n("img",{key:0,src:t.imageurl,class:"card-img-top",alt:"News image"},null,8,ee)):(a(),n("img",te)),e("div",se,[e("h5",oe,d(t.title),1),e("p",ne,d(t.body),1)])])]))),128))])):u("",!0)])),ae,!o.loading&&(!o.news||o.news.length===0)?(a(),n("div",ie,re)):u("",!0)])}const Re=N(x,[["render",ce],["__scopeId","data-v-94adfbf2"]]);export{Re as default};
