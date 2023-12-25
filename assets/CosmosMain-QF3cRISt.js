import{_ as d,o,c,a as t,F as n,r as l,t as i,p as g,d as p,g as y,h as $}from"./index-giXuXg8W.js";const m={components:{},data(){return{image:"https://storage.googleapis.com/pod_public/1300/139326.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData2(){try{return await(await fetch("https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=10")).json()}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return await(await fetch("https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=3")).json()}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews2(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},b=s=>(g("data-v-7c7e526a"),s=s(),p(),s),k={class:"container"},x={class:""},P=b(()=>t("br",null,null,-1)),j={class:""},D={class:"row"},H={class:"col-lg-8"},O={class:"row"},S={class:"mt-16"},F={class:"position-relative"},N=["src"],E=["src"],L={class:"bg-white"},T=["href"],C={class:"col-lg-4"},M={class:""},I={class:"bg-white"},B={class:"row"},q=["href"],K=["src"],Y=["src"],U={class:"text"},Z=["href"],A=["href"];function z(s,a,h,_,r,u){return o(),c("div",k,[t("div",x,[P,t("div",j,[t("div",D,[t("div",H,[t("div",O,[t("div",S,[(o(!0),c(n,null,l(r.articles,e=>(o(),c("div",{class:"col-lg-12 lg-4 md-6",key:e},[t("div",F,[e.hdurl?(o(),c("img",{key:0,class:"img-fluid w-100 hover px-0",src:e.hdurl,style:{"object-fit":"cover"}},null,8,N)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,E)),t("div",L,[t("a",{class:"d-block text-uppercase fw-bold",href:e.hdurl,target:"_blank"},i(e.title),9,T)])])]))),128))])])]),t("div",C,[t("div",M,[t("div",I,[t("div",B,[(o(!0),c(n,null,l(r.articles2,e=>(o(),c("div",{class:"col-6",key:e},[t("a",{href:e.url},[e.hdurl?(o(),c("img",{key:0,class:"img-fluid w-100 hover px-0 img",src:e.hdurl,style:{"object-fit":"cover"}},null,8,K)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,Y))],8,q),t("div",U,[t("span",null,[t("a",{class:"fw-bold",href:e.url,target:"_blank"},i(e.title),9,Z)]),t("p",{class:"a",style:{"font-size":"16px"},href:e.url,target:"_blank"},i(e.explanation),9,A)])]))),128))])])])])])])])])}const V=d(m,[["render",z],["__scopeId","data-v-7c7e526a"]]),G={data(){return{image:"https://storage.googleapis.com/pod_public/1300/139326.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData(){try{return await(await fetch("https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=24")).json()}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews()}},Q={class:""},J={class:"row row-cols-1 row-cols-md-4 g-4"},R={class:"card p-3 card-body"},W={class:""},X=["href"],ss=["src"],ts=["src"],es=["href"];function os(s,a,h,_,r,u){return o(),c("main",Q,[t("div",J,[(o(!0),c(n,null,l(r.articles.slice(0),(e,f)=>(o(),c("div",{class:"col",key:f},[t("div",R,[t("div",W,[t("a",{class:"card-title text-black fw-bold",href:e.url,target:"_blank"},i(e.title),9,X)]),e.hdurl?(o(),c("img",{key:0,class:"img-fluid w-100 hover px-0",src:e.hdurl,style:{"object-fit":"cover"}},null,8,ss)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,ts)),t("p",{class:"a",style:{"font-size":"16px"},href:e.url,target:"_blank"},i(e.explanation),9,es)])]))),128))])])}const cs=d(G,[["render",os],["__scopeId","data-v-414d6829"]]),as={data(){return{image:"https://storage.googleapis.com/pod_public/1300/139326.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData(){try{return await(await fetch("https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=24")).json()}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews()}},rs={class:""},is={class:"row row-cols-1 row-cols-md-4 g-4"},ns={class:"card p-3 card-body"},ls=["src"],ds=["src"],hs={class:""},_s=["href"],us=["href"];function gs(s,a,h,_,r,u){return o(),c("main",rs,[t("div",is,[(o(!0),c(n,null,l(r.articles.slice(0),(e,f)=>(o(),c("div",{class:"col",key:f},[t("div",ns,[e.hdurl?(o(),c("img",{key:0,class:"img-fluid w-100 hover px-0",src:e.hdurl,style:{"object-fit":"cover"}},null,8,ls)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,ds)),t("div",hs,[t("span",null,[t("a",{class:"fw-bold",href:e.url,target:"_blank"},i(e.title),9,_s)]),t("p",{class:"a",style:{"font-size":"16px"},href:e.url,target:"_blank"},i(e.explanation),9,us)])])]))),128))])])}const ps=d(as,[["render",gs],["__scopeId","data-v-cfc50385"]]),fs={data(){return{image:"https://storage.googleapis.com/pod_public/1300/139326.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},mounted(){},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData2(){try{return await(await fetch("https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=100")).json()}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews2(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return await(await fetch("https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=100")).json()}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},w=s=>(g("data-v-661d6a60"),s=s(),p(),s),ws={class:"container"},vs={class:"mt-5"},ys={class:""},$s={class:"row"},ms={class:"col-lg-4"},bs={class:"row"},ks={class:"mb-3"},xs={class:"bg-white"},Ps={class:"row card-body"},js=["href"],Ds=["src"],Hs=["src"],Os={class:"text"},Ss=["href"],Fs=["href"],Ns={class:"col-lg-8"},Es=w(()=>t("div",{class:"section-title mb-0"},[t("h4",{class:"m-0 fw-bold text-white cosmos p-2"},"COSMOS")],-1)),Ls={class:"card-body mt-4"},Ts={class:""},Cs={class:"fw-bold p-1"},Ms=["href"],Is=["href"],Bs=["src"],qs=["src"],Ks=w(()=>t("br",null,null,-1)),Ys=["href"];function Us(s,a,h,_,r,u){return o(),c("div",ws,[t("div",vs,[t("div",ys,[t("div",$s,[t("div",ms,[t("div",bs,[t("div",ks,[t("div",xs,[t("div",Ps,[(o(!0),c(n,null,l(r.articles2,e=>(o(),c("div",{class:"col-12",key:e},[t("a",{href:e.url},[e.hdurl?(o(),c("img",{key:0,class:"img-fluid w-100 hover px-0",src:e.hdurl,style:{"object-fit":"cover"}},null,8,Ds)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,Hs))],8,js),t("div",Os,[t("span",null,[t("a",{class:"fw-bold",href:e.url,target:"_blank"},i(e.title),9,Ss)]),t("p",{class:"a",style:{"font-size":"16px"},href:e.url,target:"_blank"},i(e.explanation),9,Fs)])]))),128))])])])])]),t("div",Ns,[Es,t("div",Ls,[(o(!0),c(n,null,l(r.articles,e=>(o(),c("div",{class:"bg-white border border-top-0",key:e},[t("div",Ts,[t("p",Cs,[t("a",{href:e.url,target:"_blank"},i(e.title),9,Ms)]),t("a",{href:e.url},[e.hdurl?(o(),c("img",{key:0,class:"img-fluid w-100 hover px-0",src:e.hdurl,style:{"object-fit":"cover"}},null,8,Bs)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,qs))],8,Is),Ks]),t("a",{href:e.url,target:"_blank",class:"d-block rounded",style:{}},null,8,Ys)]))),128))])])])])])])}const Zs=d(fs,[["render",Us],["__scopeId","data-v-661d6a60"]]),As={components:{},data(){return{image:"https://storage.googleapis.com/pod_public/1300/139326.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData2(){try{return await(await fetch("https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=5")).json()}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return await(await fetch("https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=3")).json()}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews2(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},zs=s=>(g("data-v-014aa2ba"),s=s(),p(),s),Vs={class:""},Gs={class:"mt-5"},Qs=zs(()=>t("h3",{class:"fw-bold cosmos text-white p-2"},"COSMOS",-1)),Js={class:""},Rs={class:"row"},Ws={class:"col-lg-6"},Xs={class:"row"},st={class:"mb-3"},tt={class:"bg-white"},et={class:"row"},ot=["href"],ct=["src"],at=["src"],rt={class:"text"},it=["href"],nt={class:"col-lg-6"},lt={class:"mt-16"},dt={class:"position-relative"},ht=["href"],_t=["src"],ut=["src"],gt={class:"bg-white text"},pt={class:"fw-bold p-1"},ft=["href"];function wt(s,a,h,_,r,u){return o(),c("div",Vs,[t("div",Gs,[Qs,t("div",Js,[t("div",Rs,[t("div",Ws,[t("div",Xs,[t("div",st,[t("div",tt,[t("div",et,[(o(!0),c(n,null,l(r.articles2,e=>(o(),c("div",{class:"col-6",key:e},[t("a",{href:e.url},[e.hdurl?(o(),c("img",{key:0,class:"w-100",src:e.hdurl,alt:""},null,8,ct)):(o(),c("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,at))],8,ot),t("div",rt,[t("span",null,[t("a",{class:"fw-bold",href:e.url,target:"_blank"},i(e.title),9,it)])])]))),128))])])])])]),t("div",nt,[t("div",lt,[(o(!0),c(n,null,l(r.articles,e=>(o(),c("div",{class:"col-lg-12 lg-4 md-6",key:e},[t("div",dt,[t("a",{href:e.url},[e.hdurl?(o(),c("img",{key:0,class:"img-fluid w-100 hover px-0",src:e.hdurl,style:{"object-fit":"cover"}},null,8,_t)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,ut))],8,ht),t("div",gt,[t("p",pt,[t("a",{href:e.url,target:"_blank"},i(e.title),9,ft)])])])]))),128))])])])])])])}const vt=d(As,[["render",wt],["__scopeId","data-v-014aa2ba"]]),yt={components:{cosmos:V,cosmos2:ps,cosmos4:Zs,cosmos5:vt,cosmos3:cs}},v=s=>(g("data-v-c3c2302c"),s=s(),p(),s),$t={class:"container mt-5"},mt=v(()=>t("h5",{class:"fw-bold cosmos p-2 text-white"}," COSMOS ",-1)),bt=v(()=>t("div",{class:"video-container"},[t("iframe",{src:"https://www.youtube.com/embed/o3oayKQtDbM?si=S-GylLjL6qPdo71v",title:"YouTube video player",allowfullscreen:""})],-1));function kt(s,a,h,_,r,u){const e=y("cosmos5");return o(),c("div",$t,[mt,bt,$(e)])}const Pt=d(yt,[["render",kt],["__scopeId","data-v-c3c2302c"]]);export{Pt as default};
