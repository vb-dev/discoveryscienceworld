import{_ as m,o,c,a as t,F as u,r as f,t as i,b as n,p as k,d as T,e as _,f as g,g as v,h as x}from"./index-STEFgROh.js";const P={components:{},data(){return{image:"https://i0.wp.com/telugubullet.com/wp-content/uploads/2021/01/The-Best-Part-about-the-Online-Entertainment.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData2(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=12")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=2")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews2(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},z=s=>(k("data-v-5702a356"),s=s(),T(),s),A={class:"container"},N={class:""},j=z(()=>t("br",null,null,-1)),L={class:""},M={class:"row"},E={class:"col-lg-8"},C={class:"row"},H={class:"mt-16"},O={class:"position-relative"},X=["src"],Y=["src"],B={class:"bg-white"},G=["href"],V={key:2,class:""},F={style:{"font-family":"gotic","font-size":"10px"}},q=z(()=>t("img",{style:{width:"20px"},src:_},null,-1)),J=z(()=>t("img",{style:{width:"20px"},src:g},null,-1)),U={class:"pl-1"},Z={key:3},K=z(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),Q=z(()=>t("img",{style:{width:"20px"},src:g},null,-1)),R={class:"pl-1"},W={class:"col-lg-4"},tt={class:"mb-3"},st={class:"bg-white"},et={class:"row"},ot=["href"],ct=["src"],at=["src"],it={class:"text"},nt=["href"];function rt(s,a,h,b,r,l){return o(),c("div",A,[t("div",N,[j,t("div",L,[t("div",M,[t("div",E,[t("div",C,[t("div",H,[(o(!0),c(u,null,f(r.articles,e=>(o(),c("div",{class:"col-lg-12 lg-4 md-6",key:e},[t("div",O,[e.urlToImage?(o(),c("img",{key:0,class:"img-fluid w-100 hover",src:e.urlToImage,style:{"object-fit":"cover"}},null,8,X)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,Y)),t("div",B,[t("a",{class:"d-block text-uppercase fw-bold",href:e.url,target:"_blank"},i(e.title),9,G)]),e.author?(o(),c("p",V,[t("strong",F,[q,n(" "+i(e.author),1)]),J,t("span",U,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",Z,[K,n(),Q,t("span",R,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])]),t("div",W,[t("div",tt,[t("div",st,[t("div",et,[(o(!0),c(u,null,f(r.articles2.slice(2),(e,d)=>(o(),c("div",{class:"col-6",key:d},[t("a",{href:e.url},[e.urlToImage?(o(),c("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,ct)):(o(),c("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,at))],8,ot),t("div",it,[t("span",null,[t("a",{class:"fw-bold font",href:e.url,target:"_blank"},i(e.title),9,nt)])])]))),128))])])])])])])])])}const lt=m(P,[["render",rt],["__scopeId","data-v-5702a356"]]),dt={data(){return{image:"https://themoney.co/wp-content/uploads/2022/03/Top-10-des-sports-les-plus-populaires-au-monde-en.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=97")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews()}},y=s=>(k("data-v-9cff0d99"),s=s(),T(),s),ht={class:""},_t={class:"row row-cols-1 row-cols-md-4 g-4"},gt={class:"card"},pt=["src"],ut=["src"],ft={class:"card-body"},wt=["href"],mt={key:2,class:""},yt={style:{"font-family":"gotic","font-size":"10px"}},$t=y(()=>t("img",{style:{width:"15px"},src:_},null,-1)),bt=y(()=>t("br",null,null,-1)),vt=y(()=>t("img",{style:{width:"15px"},src:g},null,-1)),xt={style:{"font-size":"10px"},class:"pl-1"},kt={key:3},Tt=y(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"15px"},src:_}),n("Mr.X")],-1)),zt=y(()=>t("br",null,null,-1)),St=y(()=>t("img",{style:{width:"15px"},src:g},null,-1)),It={style:{"font-size":"10px"},class:"pl-1"};function Dt(s,a,h,b,r,l){return o(),c("main",ht,[t("div",_t,[(o(!0),c(u,null,f(r.articles.slice(89),(e,d)=>(o(),c("div",{class:"col",key:d},[t("div",gt,[e.urlToImage?(o(),c("img",{key:0,src:e.urlToImage,class:"card-img-top w-100 h-100"},null,8,pt)):(o(),c("img",{key:1,src:r.image,class:"card-img-top",alt:"..."},null,8,ut)),t("div",ft,[t("a",{class:"card-title text-black fw-bold font",href:e.url,target:"_blank"},i(e.title),9,wt)]),e.author?(o(),c("p",mt,[t("strong",yt,[$t,n(" "+i(e.author),1)]),n(),bt,vt,t("span",xt,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",kt,[Tt,n(),zt,n(),St,t("span",It,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])}const Pt=m(dt,[["render",Dt],["__scopeId","data-v-9cff0d99"]]),At={data(){return{image:"https://themoney.co/wp-content/uploads/2022/03/Top-10-des-sports-les-plus-populaires-au-monde-en.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=24")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews()}},$=s=>(k("data-v-2f0470fc"),s=s(),T(),s),Nt={class:""},jt={class:"row row-cols-1 row-cols-md-4 g-4"},Lt={class:"card"},Mt=["src"],Et=["src"],Ct={class:"card-body"},Ht=["href"],Ot={key:2,class:""},Xt={style:{"font-family":"gotic","font-size":"10px"}},Yt=$(()=>t("img",{style:{width:"15px"},src:_},null,-1)),Bt=$(()=>t("br",null,null,-1)),Gt=$(()=>t("img",{style:{width:"15px"},src:g},null,-1)),Vt={style:{"font-size":"10px"},class:"pl-1"},Ft={key:3},qt=$(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"15px"},src:_}),n("Mr.X")],-1)),Jt=$(()=>t("br",null,null,-1)),Ut=$(()=>t("img",{style:{width:"15px"},src:g},null,-1)),Zt={style:{"font-size":"10px"},class:"pl-1"};function Kt(s,a,h,b,r,l){return o(),c("main",Nt,[t("div",jt,[(o(!0),c(u,null,f(r.articles.slice(12),(e,d)=>(o(),c("div",{class:"col",key:d},[t("div",Lt,[e.urlToImage?(o(),c("img",{key:0,src:e.urlToImage,class:"card-img-top img"},null,8,Mt)):(o(),c("img",{key:1,src:r.image,class:"card-img-top",alt:"..."},null,8,Et)),t("div",Ct,[t("a",{class:"card-title text-black fw-bold font",href:e.url,target:"_blank"},i(e.title),9,Ht)]),e.author?(o(),c("p",Ot,[t("strong",Xt,[Yt,n(" "+i(e.author),1)]),n(),Bt,Gt,t("span",Vt,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",Ft,[qt,n(),Jt,n(),Ut,t("span",Zt,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])}const Qt=m(At,[["render",Kt],["__scopeId","data-v-2f0470fc"]]),Rt={data(){return{image:"https://i0.wp.com/telugubullet.com/wp-content/uploads/2021/01/The-Best-Part-about-the-Online-Entertainment.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},mounted(){},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData2(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=49")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews2(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=46")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},w=s=>(k("data-v-da33fbf0"),s=s(),T(),s),Wt={class:"container"},ts={class:"mt-5"},ss={class:""},es={class:"row"},os={class:"col-lg-4"},cs={class:"row"},as={class:"mb-3"},is={class:"bg-white"},ns={class:"row"},rs=["href"],ls=["src"],ds={key:1,class:"w-100",src:"https://healthcenter.uga.edu/wp-content/uploads/sites/19/2022/02/heart-healthy-diet.jpg",alt:""},hs={class:"text"},_s=["href"],gs={key:0,class:""},ps={style:{"font-family":"gotic","font-size":"10px"}},us=w(()=>t("img",{style:{width:"20px"},src:_},null,-1)),fs=w(()=>t("img",{style:{width:"20px"},src:g},null,-1)),ws={class:"pl-1"},ms={key:1},ys=w(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),$s=w(()=>t("img",{style:{width:"20px"},src:g},null,-1)),bs={class:"pl-1"},vs={class:"col-lg-8"},xs=w(()=>t("div",{class:"section-title mb-0"},[t("h4",{class:"m-0 fw-bold text-white bg-dark p-2"},"TECHNOLOGY")],-1)),ks={class:"card-body mt-4"},Ts={class:""},zs={class:"fw-bold p-1"},Ss=["href"],Is=["href"],Ds=["src"],Ps=["src"],As=w(()=>t("br",null,null,-1)),Ns={key:0,class:""},js={style:{"font-family":"gotic","font-size":"10px"}},Ls={class:"pl-1"},Ms={key:1},Es=w(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}}," Mr.X",-1)),Cs={class:"pl-1"},Hs=["href"];function Os(s,a,h,b,r,l){return o(),c("div",Wt,[t("div",ts,[t("div",ss,[t("div",es,[t("div",os,[t("div",cs,[t("div",as,[t("div",is,[t("div",ns,[(o(!0),c(u,null,f(r.articles2.slice(46),(e,d)=>(o(),c("div",{class:"col-12",key:d},[t("a",{href:e.url},[e.urlToImage?(o(),c("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,ls)):(o(),c("img",ds))],8,rs),t("div",hs,[t("span",null,[t("a",{class:"fw-bold font",href:e.url,target:"_blank"},i(e.title)+"/",9,_s)]),e.author?(o(),c("p",gs,[t("strong",ps,[us,n(" "+i(e.author),1)]),fs,t("span",ws,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",ms,[ys,n(),$s,t("span",bs,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])])])]),t("div",vs,[xs,t("div",ks,[(o(!0),c(u,null,f(r.articles.slice(24),(e,d)=>(o(),c("div",{class:"bg-white border border-top-0",key:d},[t("div",Ts,[t("p",zs,[t("a",{href:e.url,target:"_blank"},i(e.title),9,Ss),t("a",{href:e.url},[e.urlToImage?(o(),c("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,Ds)):(o(),c("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,Ps))],8,Is),As,e.author?(o(),c("span",Ns,[t("strong",js,i(e.author),1),t("span",Ls,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("span",Ms,[Es,t("span",Cs,i(l.formatDateTime(e.publishedAt)),1)]))])]),t("a",{href:e.url,target:"_blank",class:"d-block rounded",style:{}},null,8,Hs)]))),128))])])])])])])}const Xs=m(Rt,[["render",Os],["__scopeId","data-v-da33fbf0"]]),Ys={components:{},data(){return{image:"https://community.thriveglobal.com/wp-content/uploads/2020/07/Modren-Tech.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData2(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=89")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=58")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews2(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},p=s=>(k("data-v-220426ea"),s=s(),T(),s),Bs={class:""},Gs={class:"mt-5"},Vs=p(()=>t("h3",{class:"fw-bold bg-dark text-white p-2"},"TECHNOLOGY",-1)),Fs={class:""},qs={class:"row"},Js={class:"col-lg-6"},Us={class:"row"},Zs={class:"mb-3"},Ks={class:"bg-white"},Qs={class:"row"},Rs=["href"],Ws=["src"],te=["src"],se={class:"text"},ee=["href"],oe={key:0,class:""},ce={style:{"font-family":"gotic","font-size":"10px"}},ae=p(()=>t("img",{style:{width:"20px"},src:_},null,-1)),ie=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),ne={class:"pl-1"},re={key:1},le=p(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),de=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),he={class:"pl-1"},_e={class:"col-lg-6"},ge={class:"mt-16"},pe={class:"position-relative"},ue=["src"],fe=["src"],we={class:"bg-white text"},me=["href"],ye={key:0,class:""},$e={style:{"font-family":"gotic","font-size":"10px"}},be=p(()=>t("img",{style:{width:"20px"},src:_},null,-1)),ve=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),xe={class:"pl-1"},ke={key:1},Te=p(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),ze=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),Se={class:"pl-1"};function Ie(s,a,h,b,r,l){return o(),c("div",Bs,[t("div",Gs,[Vs,t("div",Fs,[t("div",qs,[t("div",Js,[t("div",Us,[t("div",Zs,[t("div",Ks,[t("div",Qs,[(o(!0),c(u,null,f(r.articles2.slice(59),(e,d)=>(o(),c("div",{class:"col-6",key:d},[t("a",{href:e.url},[e.urlToImage?(o(),c("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,Ws)):(o(),c("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,te))],8,Rs),t("div",se,[t("span",null,[t("a",{class:"fw-bold font",href:e.url,target:"_blank"},i(e.title),9,ee)]),e.author?(o(),c("p",oe,[t("strong",ce,[ae,n(" "+i(e.author),1)]),ie,t("span",ne,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",re,[le,n(),de,t("span",he,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])])])]),t("div",_e,[t("div",ge,[(o(!0),c(u,null,f(r.articles.slice(49),(e,d)=>(o(),c("div",{class:"col-lg-12 lg-4 md-6",key:e},[t("div",pe,[e.urlToImage?(o(),c("img",{key:0,class:"img-fluid w-100",src:e.urlToImage,style:{"object-fit":"cover"}},null,8,ue)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,fe)),t("div",we,[t("a",{class:"d-block text-uppercase fw-bold",href:e.url,target:"_blank"},i(e.title),9,me),e.author?(o(),c("p",ye,[t("strong",$e,[be,n(" "+i(e.author),1)]),ve,t("span",xe,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",ke,[Te,n(),ze,t("span",Se,i(l.formatDateTime(e.publishedAt)),1)]))])])]))),128))])])])])])])}const De=m(Ys,[["render",Ie],["__scopeId","data-v-220426ea"]]),Pe={components:{tech:lt,tech2:Qt,tech4:Xs,tech5:De,tech3:Pt}},Ae={class:"container mt-5"},Ne=t("h5",{class:"fw-bold bg-dark p-2 text-white"}," TECHNOLOGY ",-1),je=t("div",{class:"video-container"},[t("iframe",{src:"https://www.youtube.com/embed/GdYa6VpZ27E?si=lUGlquz5806-Y4DJ",title:"YouTube video player",allowfullscreen:""})],-1);function Le(s,a,h,b,r,l){const e=v("tech"),d=v("tech2"),S=v("tech4"),I=v("tech5"),D=v("tech3");return o(),c("div",Ae,[Ne,je,x(e),x(d),x(S),x(I),x(D)])}const Ee=m(Pe,[["render",Le]]);export{Ee as default};
