import{_ as m,o,c as a,a as t,F as u,r as w,t as i,b as n,p as k,d as z,e as _,f as g,g as v,h as x}from"./index-79yv7jko.js";const P={components:{},data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,c=s+this.rows;return this.articles.slice(s,c)}},methods:{formatDateTime(s){const c={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,c)},async getData2(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=14&Page=1&PageSize=12")).json()).items}catch(c){return console.error("Error fetching news:",c),[]}},async fetchNews(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=14&Page=1&PageSize=2")).json()).items}catch(c){return console.error("Error fetching news:",c),[]}},async fetchNews2(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},T=s=>(k("data-v-68eb2920"),s=s(),z(),s),A={class:"container"},j={class:""},H=T(()=>t("br",null,null,-1)),N={class:""},L={class:"row"},M={class:"col-lg-8"},E={class:"row"},C={class:"mt-16"},X={class:"position-relative"},B=["src"],V=["src"],F={class:"bg-white"},W=["href"],G={key:2,class:""},Y={style:{"font-family":"gotic","font-size":"10px"}},q=T(()=>t("img",{style:{width:"20px"},src:_},null,-1)),J=T(()=>t("img",{style:{width:"20px"},src:g},null,-1)),K={class:"pl-1"},O={key:3},Q=T(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),R=T(()=>t("img",{style:{width:"20px"},src:g},null,-1)),U={class:"pl-1"},Z={class:"col-lg-4"},tt={class:"mb-3"},st={class:"bg-white"},et={class:"row"},ot=["href"],at=["src"],ct=["src"],it={class:"text"},nt=["href"];function rt(s,c,d,b,r,l){return o(),a("div",A,[t("div",j,[H,t("div",N,[t("div",L,[t("div",M,[t("div",E,[t("div",C,[(o(!0),a(u,null,w(r.articles,e=>(o(),a("div",{class:"col-lg-12 lg-4 md-6",key:e},[t("div",X,[e.urlToImage?(o(),a("img",{key:0,class:"img-fluid w-100 hover",src:e.urlToImage,style:{"object-fit":"cover"}},null,8,B)):(o(),a("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,V)),t("div",F,[t("a",{class:"d-block text-uppercase fw-bold",href:e.url,target:"_blank"},i(e.title),9,W)]),e.author?(o(),a("p",G,[t("strong",Y,[q,n(" "+i(e.author),1)]),J,t("span",K,i(l.formatDateTime(e.publishedAt)),1)])):(o(),a("p",O,[Q,n(),R,t("span",U,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])]),t("div",Z,[t("div",tt,[t("div",st,[t("div",et,[(o(!0),a(u,null,w(r.articles2.slice(2),(e,h)=>(o(),a("div",{class:"col-6",key:h},[t("a",{href:e.url},[e.urlToImage?(o(),a("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,at)):(o(),a("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,ct))],8,ot),t("div",it,[t("span",null,[t("a",{class:"fw-bold font",href:e.url,target:"_blank"},i(e.title),9,nt)])])]))),128))])])])])])])])])}const lt=m(P,[["render",rt],["__scopeId","data-v-68eb2920"]]),ht={data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,c=s+this.rows;return this.articles.slice(s,c)}},methods:{formatDateTime(s){const c={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,c)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=14&Page=1&PageSize=97")).json()).items}catch(c){return console.error("Error fetching news:",c),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews()}},y=s=>(k("data-v-0d7482d3"),s=s(),z(),s),dt={class:""},_t={class:"row row-cols-1 row-cols-md-4 g-4"},gt={class:"card"},pt=["src"],ut=["src"],wt={class:"card-body"},ft=["href"],mt={key:2,class:""},yt={style:{"font-family":"gotic","font-size":"10px"}},$t=y(()=>t("img",{style:{width:"15px"},src:_},null,-1)),bt=y(()=>t("br",null,null,-1)),vt=y(()=>t("img",{style:{width:"15px"},src:g},null,-1)),xt={style:{"font-size":"10px"},class:"pl-1"},kt={key:3},zt=y(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"15px"},src:_}),n("Mr.X")],-1)),Tt=y(()=>t("br",null,null,-1)),St=y(()=>t("img",{style:{width:"15px"},src:g},null,-1)),It={style:{"font-size":"10px"},class:"pl-1"};function Dt(s,c,d,b,r,l){return o(),a("main",dt,[t("div",_t,[(o(!0),a(u,null,w(r.articles.slice(89),(e,h)=>(o(),a("div",{class:"col",key:h},[t("div",gt,[e.urlToImage?(o(),a("img",{key:0,src:e.urlToImage,class:"card-img-top w-100 h-100"},null,8,pt)):(o(),a("img",{key:1,src:r.image,class:"card-img-top",alt:"..."},null,8,ut)),t("div",wt,[t("a",{class:"card-title text-black fw-bold font",href:e.url,target:"_blank"},i(e.title),9,ft)]),e.author?(o(),a("p",mt,[t("strong",yt,[$t,n(" "+i(e.author),1)]),n(),bt,vt,t("span",xt,i(l.formatDateTime(e.publishedAt)),1)])):(o(),a("p",kt,[zt,n(),Tt,n(),St,t("span",It,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])}const Pt=m(ht,[["render",Dt],["__scopeId","data-v-0d7482d3"]]),At={data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,c=s+this.rows;return this.articles.slice(s,c)}},methods:{formatDateTime(s){const c={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,c)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=14&Page=1&PageSize=24")).json()).items}catch(c){return console.error("Error fetching news:",c),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews()}},$=s=>(k("data-v-99b2f5ff"),s=s(),z(),s),jt={class:""},Ht={class:"row row-cols-1 row-cols-md-4 g-4"},Nt={class:"card"},Lt=["src"],Mt=["src"],Et={class:"card-body"},Ct=["href"],Xt={key:2,class:""},Bt={style:{"font-family":"gotic","font-size":"10px"}},Vt=$(()=>t("img",{style:{width:"15px"},src:_},null,-1)),Ft=$(()=>t("br",null,null,-1)),Wt=$(()=>t("img",{style:{width:"15px"},src:g},null,-1)),Gt={style:{"font-size":"10px"},class:"pl-1"},Yt={key:3},qt=$(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"15px"},src:_}),n("Mr.X")],-1)),Jt=$(()=>t("br",null,null,-1)),Kt=$(()=>t("img",{style:{width:"15px"},src:g},null,-1)),Ot={style:{"font-size":"10px"},class:"pl-1"};function Qt(s,c,d,b,r,l){return o(),a("main",jt,[t("div",Ht,[(o(!0),a(u,null,w(r.articles.slice(12),(e,h)=>(o(),a("div",{class:"col",key:h},[t("div",Nt,[e.urlToImage?(o(),a("img",{key:0,src:e.urlToImage,class:"card-img-top img"},null,8,Lt)):(o(),a("img",{key:1,src:r.image,class:"card-img-top",alt:"..."},null,8,Mt)),t("div",Et,[t("a",{class:"card-title text-black fw-bold font",href:e.url,target:"_blank"},i(e.title),9,Ct)]),e.author?(o(),a("p",Xt,[t("strong",Bt,[Vt,n(" "+i(e.author),1)]),n(),Ft,Wt,t("span",Gt,i(l.formatDateTime(e.publishedAt)),1)])):(o(),a("p",Yt,[qt,n(),Jt,n(),Kt,t("span",Ot,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])}const Rt=m(At,[["render",Qt],["__scopeId","data-v-99b2f5ff"]]),Ut={data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},mounted(){},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,c=s+this.rows;return this.articles.slice(s,c)}},methods:{formatDateTime(s){const c={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,c)},async getData2(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=14&Page=1&PageSize=49")).json()).items}catch(c){return console.error("Error fetching news:",c),[]}},async fetchNews2(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=14&Page=1&PageSize=46")).json()).items}catch(c){return console.error("Error fetching news:",c),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},f=s=>(k("data-v-7fa7c159"),s=s(),z(),s),Zt={class:"container"},ts={class:"mt-5"},ss={class:""},es={class:"row"},os={class:"col-lg-4"},as={class:"row"},cs={class:"mb-3"},is={class:"bg-white"},ns={class:"row"},rs=["href"],ls=["src"],hs={key:1,class:"w-100",src:"https://healthcenter.uga.edu/wp-content/uploads/sites/19/2022/02/heart-healthy-diet.jpg",alt:""},ds={class:"text"},_s=["href"],gs={key:0,class:""},ps={style:{"font-family":"gotic","font-size":"10px"}},us=f(()=>t("img",{style:{width:"20px"},src:_},null,-1)),ws=f(()=>t("img",{style:{width:"20px"},src:g},null,-1)),fs={class:"pl-1"},ms={key:1},ys=f(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),$s=f(()=>t("img",{style:{width:"20px"},src:g},null,-1)),bs={class:"pl-1"},vs={class:"col-lg-8"},xs=f(()=>t("div",{class:"section-title mb-0"},[t("h4",{class:"m-0 fw-bold text-white bg-success p-2"},"HEALTH")],-1)),ks={class:"card-body mt-4"},zs={class:""},Ts={class:"fw-bold p-1"},Ss=["href"],Is=["href"],Ds=["src"],Ps=["src"],As=f(()=>t("br",null,null,-1)),js={key:0,class:""},Hs={style:{"font-family":"gotic","font-size":"10px"}},Ns={class:"pl-1"},Ls={key:1},Ms=f(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}}," Mr.X",-1)),Es={class:"pl-1"},Cs=["href"];function Xs(s,c,d,b,r,l){return o(),a("div",Zt,[t("div",ts,[t("div",ss,[t("div",es,[t("div",os,[t("div",as,[t("div",cs,[t("div",is,[t("div",ns,[(o(!0),a(u,null,w(r.articles2.slice(46),(e,h)=>(o(),a("div",{class:"col-12",key:h},[t("a",{href:e.url},[e.urlToImage?(o(),a("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,ls)):(o(),a("img",hs))],8,rs),t("div",ds,[t("span",null,[t("a",{class:"fw-bold font",href:e.url,target:"_blank"},i(e.title)+"/",9,_s)]),e.author?(o(),a("p",gs,[t("strong",ps,[us,n(" "+i(e.author),1)]),ws,t("span",fs,i(l.formatDateTime(e.publishedAt)),1)])):(o(),a("p",ms,[ys,n(),$s,t("span",bs,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])])])]),t("div",vs,[xs,t("div",ks,[(o(!0),a(u,null,w(r.articles.slice(24),(e,h)=>(o(),a("div",{class:"bg-white border border-top-0",key:h},[t("div",zs,[t("p",Ts,[t("a",{href:e.url,target:"_blank"},i(e.title),9,Ss),t("a",{href:e.url},[e.urlToImage?(o(),a("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,Ds)):(o(),a("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,Ps))],8,Is),As,e.author?(o(),a("span",js,[t("strong",Hs,i(e.author),1),t("span",Ns,i(l.formatDateTime(e.publishedAt)),1)])):(o(),a("span",Ls,[Ms,t("span",Es,i(l.formatDateTime(e.publishedAt)),1)]))])]),t("a",{href:e.url,target:"_blank",class:"d-block rounded",style:{}},null,8,Cs)]))),128))])])])])])])}const Bs=m(Ut,[["render",Xs],["__scopeId","data-v-7fa7c159"]]),Vs={components:{},data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,c=s+this.rows;return this.articles.slice(s,c)}},methods:{formatDateTime(s){const c={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,c)},async getData2(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=14&Page=1&PageSize=89")).json()).items}catch(c){return console.error("Error fetching news:",c),[]}},async fetchNews(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=14&Page=1&PageSize=58")).json()).items}catch(c){return console.error("Error fetching news:",c),[]}},async fetchNews2(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},p=s=>(k("data-v-14fd598a"),s=s(),z(),s),Fs={class:""},Ws={class:"mt-5"},Gs=p(()=>t("h3",{class:"fw-bold bg-success text-white p-2"},"HEALTH",-1)),Ys={class:""},qs={class:"row"},Js={class:"col-lg-6"},Ks={class:"row"},Os={class:"mb-3"},Qs={class:"bg-white"},Rs={class:"row"},Us=["href"],Zs=["src"],te=["src"],se={class:"text"},ee=["href"],oe={key:0,class:""},ae={style:{"font-family":"gotic","font-size":"10px"}},ce=p(()=>t("img",{style:{width:"20px"},src:_},null,-1)),ie=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),ne={class:"pl-1"},re={key:1},le=p(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),he=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),de={class:"pl-1"},_e={class:"col-lg-6"},ge={class:"mt-16"},pe={class:"position-relative"},ue=["src"],we=["src"],fe={class:"bg-white text"},me=["href"],ye={key:0,class:""},$e={style:{"font-family":"gotic","font-size":"10px"}},be=p(()=>t("img",{style:{width:"20px"},src:_},null,-1)),ve=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),xe={class:"pl-1"},ke={key:1},ze=p(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),Te=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),Se={class:"pl-1"};function Ie(s,c,d,b,r,l){return o(),a("div",Fs,[t("div",Ws,[Gs,t("div",Ys,[t("div",qs,[t("div",Js,[t("div",Ks,[t("div",Os,[t("div",Qs,[t("div",Rs,[(o(!0),a(u,null,w(r.articles2.slice(59),(e,h)=>(o(),a("div",{class:"col-6",key:h},[t("a",{href:e.url},[e.urlToImage?(o(),a("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,Zs)):(o(),a("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,te))],8,Us),t("div",se,[t("span",null,[t("a",{class:"fw-bold font",href:e.url,target:"_blank"},i(e.title),9,ee)]),e.author?(o(),a("p",oe,[t("strong",ae,[ce,n(" "+i(e.author),1)]),ie,t("span",ne,i(l.formatDateTime(e.publishedAt)),1)])):(o(),a("p",re,[le,n(),he,t("span",de,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])])])]),t("div",_e,[t("div",ge,[(o(!0),a(u,null,w(r.articles.slice(49),(e,h)=>(o(),a("div",{class:"col-lg-12 lg-4 md-6",key:e},[t("div",pe,[e.urlToImage?(o(),a("img",{key:0,class:"img-fluid w-100",src:e.urlToImage,style:{"object-fit":"cover"}},null,8,ue)):(o(),a("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,we)),t("div",fe,[t("a",{class:"d-block text-uppercase fw-bold",href:e.url,target:"_blank"},i(e.title),9,me),e.author?(o(),a("p",ye,[t("strong",$e,[be,n(" "+i(e.author),1)]),ve,t("span",xe,i(l.formatDateTime(e.publishedAt)),1)])):(o(),a("p",ke,[ze,n(),Te,t("span",Se,i(l.formatDateTime(e.publishedAt)),1)]))])])]))),128))])])])])])])}const De=m(Vs,[["render",Ie],["__scopeId","data-v-14fd598a"]]),Pe={components:{health:lt,health2:Rt,health4:Bs,health5:De,health3:Pt}},Ae={class:"container mt-5"},je=t("h5",{class:"fw-bold bg-success p-2 text-white"}," HEALTH ",-1),He=t("div",{class:"video-container"},[t("iframe",{src:"https://www.youtube.com/embed/jgjiMixh_nE?si=u2W7pGmnW-TTPiNC",title:"YouTube video player",allowfullscreen:""})],-1);function Ne(s,c,d,b,r,l){const e=v("health"),h=v("health2"),S=v("health4"),I=v("health5"),D=v("health3");return o(),a("div",Ae,[je,He,x(e),x(h),x(S),x(I),x(D)])}const Me=m(Pe,[["render",Ne]]);export{Me as default};
