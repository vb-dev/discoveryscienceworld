import{_ as m,o,c,a as t,F as u,r as f,t as i,b as n,p as k,d as z,e as _,f as g,g as v,h as x}from"./index-giXuXg8W.js";const P={components:{},data(){return{image:"https://i0.wp.com/telugubullet.com/wp-content/uploads/2021/01/The-Best-Part-about-the-Online-Entertainment.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData2(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=12")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=2")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews2(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},T=s=>(k("data-v-fbcb2ba6"),s=s(),z(),s),A={class:"container"},N={class:""},j=T(()=>t("br",null,null,-1)),M={class:""},E={class:"row"},C={class:"col-lg-8"},L={class:"row"},H={class:"mt-16"},X={class:"position-relative"},B=["src"],V=["src"],F={class:"bg-white"},G=["href"],O={key:2,class:""},Q={style:{"font-family":"gotic","font-size":"10px"}},Y=T(()=>t("img",{style:{width:"20px"},src:_},null,-1)),Z=T(()=>t("img",{style:{width:"20px"},src:g},null,-1)),q={class:"pl-1"},J={key:3},K=T(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),R=T(()=>t("img",{style:{width:"20px"},src:g},null,-1)),U={class:"pl-1"},W={class:"col-lg-4"},tt={class:"mb-3"},st={class:"bg-white"},et={class:"row"},ot=["href"],ct=["src"],at=["src"],it={class:"text"},nt=["href"];function rt(s,a,h,b,r,l){return o(),c("div",A,[t("div",N,[j,t("div",M,[t("div",E,[t("div",C,[t("div",L,[t("div",H,[(o(!0),c(u,null,f(r.articles,e=>(o(),c("div",{class:"col-lg-12 lg-4 md-6",key:e},[t("div",X,[e.urlToImage?(o(),c("img",{key:0,class:"img-fluid w-100 hover",src:e.urlToImage,style:{"object-fit":"cover"}},null,8,B)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,V)),t("div",F,[t("a",{class:"d-block text-uppercase fw-bold",href:e.url,target:"_blank"},i(e.title),9,G)]),e.author?(o(),c("p",O,[t("strong",Q,[Y,n(" "+i(e.author),1)]),Z,t("span",q,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",J,[K,n(),R,t("span",U,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])]),t("div",W,[t("div",tt,[t("div",st,[t("div",et,[(o(!0),c(u,null,f(r.articles2.slice(2),(e,d)=>(o(),c("div",{class:"col-6",key:d},[t("a",{href:e.url},[e.urlToImage?(o(),c("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,ct)):(o(),c("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,at))],8,ot),t("div",it,[t("span",null,[t("a",{class:"fw-bold font",href:e.url,target:"_blank"},i(e.title),9,nt)])])]))),128))])])])])])])])])}const lt=m(P,[["render",rt],["__scopeId","data-v-fbcb2ba6"]]),dt={data(){return{image:"https://themoney.co/wp-content/uploads/2022/03/Top-10-des-sports-les-plus-populaires-au-monde-en.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=24")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews()}},y=s=>(k("data-v-bf815eac"),s=s(),z(),s),ht={class:""},_t={class:"row row-cols-1 row-cols-md-4 g-4"},gt={class:"card"},pt=["src"],ut=["src"],ft={class:"card-body"},wt=["href"],mt={key:2,class:""},yt={style:{"font-family":"gotic","font-size":"10px"}},$t=y(()=>t("img",{style:{width:"15px"},src:_},null,-1)),bt=y(()=>t("br",null,null,-1)),vt=y(()=>t("img",{style:{width:"15px"},src:g},null,-1)),xt={style:{"font-size":"10px"},class:"pl-1"},kt={key:3},zt=y(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"15px"},src:_}),n("Mr.X")],-1)),Tt=y(()=>t("br",null,null,-1)),St=y(()=>t("img",{style:{width:"15px"},src:g},null,-1)),It={style:{"font-size":"10px"},class:"pl-1"};function Dt(s,a,h,b,r,l){return o(),c("main",ht,[t("div",_t,[(o(!0),c(u,null,f(r.articles.slice(12),(e,d)=>(o(),c("div",{class:"col",key:d},[t("div",gt,[e.urlToImage?(o(),c("img",{key:0,src:e.urlToImage,class:"card-img-top img"},null,8,pt)):(o(),c("img",{key:1,src:r.image,class:"card-img-top",alt:"..."},null,8,ut)),t("div",ft,[t("a",{class:"card-title text-black fw-bold font",href:e.url,target:"_blank"},i(e.title),9,wt)]),e.author?(o(),c("p",mt,[t("strong",yt,[$t,n(" "+i(e.author),1)]),n(),bt,vt,t("span",xt,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",kt,[zt,n(),Tt,n(),St,t("span",It,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])}const Pt=m(dt,[["render",Dt],["__scopeId","data-v-bf815eac"]]),At={data(){return{image:"https://themoney.co/wp-content/uploads/2022/03/Top-10-des-sports-les-plus-populaires-au-monde-en.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=100")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews()}},$=s=>(k("data-v-3f89f806"),s=s(),z(),s),Nt={class:""},jt={class:"row row-cols-1 row-cols-md-4 g-4"},Mt={class:"card p-3"},Et=["src"],Ct=["src"],Lt={class:"card-body"},Ht=["href"],Xt={key:2,class:""},Bt={style:{"font-family":"gotic","font-size":"10px"}},Vt=$(()=>t("img",{style:{width:"15px"},src:_},null,-1)),Ft=$(()=>t("br",null,null,-1)),Gt=$(()=>t("img",{style:{width:"15px"},src:g},null,-1)),Ot={style:{"font-size":"10px"},class:"pl-1"},Qt={key:3},Yt=$(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"15px"},src:_}),n("Mr.X")],-1)),Zt=$(()=>t("br",null,null,-1)),qt=$(()=>t("img",{style:{width:"15px"},src:g},null,-1)),Jt={style:{"font-size":"10px"},class:"pl-1"};function Kt(s,a,h,b,r,l){return o(),c("main",Nt,[t("div",jt,[(o(!0),c(u,null,f(r.articles.slice(96),(e,d)=>(o(),c("div",{class:"col",key:d},[t("div",Mt,[e.urlToImage?(o(),c("img",{key:0,src:e.urlToImage,class:"card-img-top w-100 h-100"},null,8,Et)):(o(),c("img",{key:1,src:r.image,class:"card-img-top",alt:"..."},null,8,Ct)),t("div",Lt,[t("a",{class:"card-title text-black fw-bold font",href:e.url,target:"_blank"},i(e.title),9,Ht)]),e.author?(o(),c("p",Xt,[t("strong",Bt,[Vt,n(" "+i(e.author),1)]),n(),Ft,Gt,t("span",Ot,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",Qt,[Yt,n(),Zt,n(),qt,t("span",Jt,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])}const Rt=m(At,[["render",Kt],["__scopeId","data-v-3f89f806"]]),Ut={data(){return{image:"https://i0.wp.com/telugubullet.com/wp-content/uploads/2021/01/The-Best-Part-about-the-Online-Entertainment.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},mounted(){},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData2(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=49")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews2(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=46")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},w=s=>(k("data-v-1c1b7cbd"),s=s(),z(),s),Wt={class:"container"},ts={class:"mt-5"},ss={class:""},es={class:"row"},os={class:"col-lg-4"},cs={class:"row"},as={class:"mb-3"},is={class:"bg-white"},ns={class:"row"},rs=["href"],ls=["src"],ds={key:1,class:"w-100",src:"https://healthcenter.uga.edu/wp-content/uploads/sites/19/2022/02/heart-healthy-diet.jpg",alt:""},hs={class:"text"},_s=["href"],gs={key:0,class:""},ps={style:{"font-family":"gotic","font-size":"10px"}},us=w(()=>t("img",{style:{width:"20px"},src:_},null,-1)),fs=w(()=>t("img",{style:{width:"20px"},src:g},null,-1)),ws={class:"pl-1"},ms={key:1},ys=w(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),$s=w(()=>t("img",{style:{width:"20px"},src:g},null,-1)),bs={class:"pl-1"},vs={class:"col-lg-8"},xs=w(()=>t("div",{class:"section-title mb-0"},[t("h4",{class:"m-0 fw-bold text-white bg-primary p-2"},"SCIENCE")],-1)),ks={class:"card-body mt-4"},zs={class:""},Ts={class:"fw-bold p-1"},Ss=["href"],Is=["href"],Ds=["src"],Ps=["src"],As=w(()=>t("br",null,null,-1)),Ns={key:0,class:""},js={style:{"font-family":"gotic","font-size":"10px"}},Ms={class:"pl-1"},Es={key:1},Cs=w(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}}," Mr.X",-1)),Ls={class:"pl-1"},Hs=["href"];function Xs(s,a,h,b,r,l){return o(),c("div",Wt,[t("div",ts,[t("div",ss,[t("div",es,[t("div",os,[t("div",cs,[t("div",as,[t("div",is,[t("div",ns,[(o(!0),c(u,null,f(r.articles2.slice(46),(e,d)=>(o(),c("div",{class:"col-12",key:d},[t("a",{href:e.url},[e.urlToImage?(o(),c("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,ls)):(o(),c("img",ds))],8,rs),t("div",hs,[t("span",null,[t("a",{class:"fw-bold font",href:e.url,target:"_blank"},i(e.title)+"/",9,_s)]),e.author?(o(),c("p",gs,[t("strong",ps,[us,n(" "+i(e.author),1)]),fs,t("span",ws,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",ms,[ys,n(),$s,t("span",bs,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])])])]),t("div",vs,[xs,t("div",ks,[(o(!0),c(u,null,f(r.articles.slice(24),(e,d)=>(o(),c("div",{class:"bg-white border border-top-0",key:d},[t("div",zs,[t("p",Ts,[t("a",{href:e.url,target:"_blank"},i(e.title),9,Ss),t("a",{href:e.url},[e.urlToImage?(o(),c("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,Ds)):(o(),c("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,Ps))],8,Is),As,e.author?(o(),c("span",Ns,[t("strong",js,i(e.author),1),t("span",Ms,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("span",Es,[Cs,t("span",Ls,i(l.formatDateTime(e.publishedAt)),1)]))])]),t("a",{href:e.url,target:"_blank",class:"d-block rounded",style:{}},null,8,Hs)]))),128))])])])])])])}const Bs=m(Ut,[["render",Xs],["__scopeId","data-v-1c1b7cbd"]]),Vs={components:{},data(){return{image:"https://community.thriveglobal.com/wp-content/uploads/2020/07/Modren-Tech.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData2(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=95")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=58")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews2(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},p=s=>(k("data-v-1d6e6e79"),s=s(),z(),s),Fs={class:""},Gs={class:"mt-5"},Os=p(()=>t("h3",{class:"fw-bold bg-primary text-white p-2"},"SCIENCE",-1)),Qs={class:""},Ys={class:"row"},Zs={class:"col-lg-6"},qs={class:"row"},Js={class:"mb-3"},Ks={class:"bg-white"},Rs={class:"row"},Us=["href"],Ws=["src"],te=["src"],se={class:"text"},ee=["href"],oe={key:0,class:""},ce={style:{"font-family":"gotic","font-size":"10px"}},ae=p(()=>t("img",{style:{width:"20px"},src:_},null,-1)),ie=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),ne={class:"pl-1"},re={key:1},le=p(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),de=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),he={class:"pl-1"},_e={class:"col-lg-6"},ge={class:"mt-16"},pe={class:"position-relative"},ue=["src"],fe=["src"],we={class:"bg-white text"},me=["href"],ye={key:0,class:""},$e={style:{"font-family":"gotic","font-size":"10px"}},be=p(()=>t("img",{style:{width:"20px"},src:_},null,-1)),ve=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),xe={class:"pl-1"},ke={key:1},ze=p(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),Te=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),Se={class:"pl-1"};function Ie(s,a,h,b,r,l){return o(),c("div",Fs,[t("div",Gs,[Os,t("div",Qs,[t("div",Ys,[t("div",Zs,[t("div",qs,[t("div",Js,[t("div",Ks,[t("div",Rs,[(o(!0),c(u,null,f(r.articles2.slice(59),(e,d)=>(o(),c("div",{class:"col-6",key:d},[t("a",{href:e.url},[e.urlToImage?(o(),c("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,Ws)):(o(),c("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,te))],8,Us),t("div",se,[t("span",null,[t("a",{class:"fw-bold font",href:e.url,target:"_blank"},i(e.title),9,ee)]),e.author?(o(),c("p",oe,[t("strong",ce,[ae,n(" "+i(e.author),1)]),ie,t("span",ne,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",re,[le,n(),de,t("span",he,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])])])]),t("div",_e,[t("div",ge,[(o(!0),c(u,null,f(r.articles.slice(49),(e,d)=>(o(),c("div",{class:"col-lg-12 lg-4 md-6",key:e},[t("div",pe,[e.urlToImage?(o(),c("img",{key:0,class:"img-fluid w-100",src:e.urlToImage,style:{"object-fit":"cover"}},null,8,ue)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,fe)),t("div",we,[t("a",{class:"d-block text-uppercase fw-bold",href:e.url,target:"_blank"},i(e.title),9,me),e.author?(o(),c("p",ye,[t("strong",$e,[be,n(" "+i(e.author),1)]),ve,t("span",xe,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",ke,[ze,n(),Te,t("span",Se,i(l.formatDateTime(e.publishedAt)),1)]))])])]))),128))])])])])])])}const De=m(Vs,[["render",Ie],["__scopeId","data-v-1d6e6e79"]]),Pe={components:{science:lt,science2:Pt,science4:Bs,science5:De,science3:Rt}},Ae={class:"container mt-5"},Ne=t("h5",{class:"fw-bold bg-primary p-2 text-white"}," SCIENCE ",-1),je=t("div",{class:"video-container"},[t("iframe",{src:"https://www.youtube.com/embed/ahbzGdQtzoM?si=aZznygd7HI73G_d2",title:"YouTube video player",allowfullscreen:""})],-1);function Me(s,a,h,b,r,l){const e=v("science"),d=v("science2"),S=v("science4"),I=v("science5"),D=v("science3");return o(),c("div",Ae,[Ne,je,x(e),x(d),x(S),x(I),x(D)])}const Ce=m(Pe,[["render",Me]]);export{Ce as default};
