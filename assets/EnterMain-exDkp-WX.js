import{_ as m,o,c,a as t,F as u,r as w,t as i,b as n,p as x,d as T,e as _,f as g,g as v,h as k}from"./index-WEmW1-3d.js";const P={components:{},data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData2(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=12")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=2")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews2(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},z=s=>(x("data-v-f50db054"),s=s(),T(),s),A={class:"container"},N={class:""},E=z(()=>t("br",null,null,-1)),M={class:""},j={class:"row"},H={class:"col-lg-8"},L={class:"row"},C={class:"mt-16"},X={class:"position-relative"},B=["src"],R=["src"],V={class:"bg-white"},Y=["href"],F={key:2,class:""},J={style:{"font-family":"gotic","font-size":"10px"}},q=z(()=>t("img",{style:{width:"20px"},src:_},null,-1)),G=z(()=>t("img",{style:{width:"20px"},src:g},null,-1)),K={class:"pl-1"},Q={key:3},O=z(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),U=z(()=>t("img",{style:{width:"20px"},src:g},null,-1)),W={class:"pl-1"},Z={class:"col-lg-4"},tt={class:"mb-3"},st={class:"bg-white"},et={class:"row"},ot=["href"],ct=["src"],at=["src"],it={class:"text"},nt=["href"];function rt(s,a,h,b,r,l){return o(),c("div",A,[t("div",N,[E,t("div",M,[t("div",j,[t("div",H,[t("div",L,[t("div",C,[(o(!0),c(u,null,w(r.articles,e=>(o(),c("div",{class:"col-lg-12 lg-4 md-6",key:e},[t("div",X,[e.urlToImage?(o(),c("img",{key:0,class:"img-fluid w-100 hover",src:e.urlToImage,style:{"object-fit":"cover"}},null,8,B)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,R)),t("div",V,[t("a",{class:"d-block text-uppercase fw-bold",href:e.url,target:"_blank"},i(e.title),9,Y)]),e.author?(o(),c("p",F,[t("strong",J,[q,n(" "+i(e.author),1)]),G,t("span",K,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",Q,[O,n(),U,t("span",W,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])]),t("div",Z,[t("div",tt,[t("div",st,[t("div",et,[(o(!0),c(u,null,w(r.articles2.slice(2),(e,d)=>(o(),c("div",{class:"col-6",key:d},[t("a",{href:e.url},[e.urlToImage?(o(),c("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,ct)):(o(),c("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,at))],8,ot),t("div",it,[t("span",null,[t("a",{class:"fw-bold font",href:e.url,target:"_blank"},i(e.title),9,nt)])])]))),128))])])])])])])])])}const lt=m(P,[["render",rt],["__scopeId","data-v-f50db054"]]),dt={data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=24")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews()}},y=s=>(x("data-v-f437b571"),s=s(),T(),s),ht={class:""},_t={class:"row row-cols-1 row-cols-md-4 g-4"},gt={class:"card"},pt=["src"],ut=["src"],wt={class:"card-body"},ft=["href"],mt={key:2,class:""},yt={style:{"font-family":"gotic","font-size":"10px"}},$t=y(()=>t("img",{style:{width:"15px"},src:_},null,-1)),bt=y(()=>t("br",null,null,-1)),vt=y(()=>t("img",{style:{width:"15px"},src:g},null,-1)),kt={style:{"font-size":"10px"},class:"pl-1"},xt={key:3},Tt=y(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"15px"},src:_}),n("Mr.X")],-1)),zt=y(()=>t("br",null,null,-1)),It=y(()=>t("img",{style:{width:"15px"},src:g},null,-1)),St={style:{"font-size":"10px"},class:"pl-1"};function Dt(s,a,h,b,r,l){return o(),c("main",ht,[t("div",_t,[(o(!0),c(u,null,w(r.articles.slice(12),(e,d)=>(o(),c("div",{class:"col",key:d},[t("div",gt,[e.urlToImage?(o(),c("img",{key:0,src:e.urlToImage,class:"card-img-top img"},null,8,pt)):(o(),c("img",{key:1,src:r.image,class:"card-img-top",alt:"..."},null,8,ut)),t("div",wt,[t("a",{class:"card-title text-black fw-bold font",href:e.url,target:"_blank"},i(e.title),9,ft)]),e.author?(o(),c("p",mt,[t("strong",yt,[$t,n(" "+i(e.author),1)]),n(),bt,vt,t("span",kt,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",xt,[Tt,n(),zt,n(),It,t("span",St,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])}const Pt=m(dt,[["render",Dt],["__scopeId","data-v-f437b571"]]),At={data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=97")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews()}},$=s=>(x("data-v-860f68eb"),s=s(),T(),s),Nt={class:""},Et={class:"row row-cols-1 row-cols-md-4 g-4"},Mt={class:"card"},jt=["src"],Ht=["src"],Lt={class:"card-body"},Ct=["href"],Xt={key:2,class:""},Bt={style:{"font-family":"gotic","font-size":"10px"}},Rt=$(()=>t("img",{style:{width:"15px"},src:_},null,-1)),Vt=$(()=>t("br",null,null,-1)),Yt=$(()=>t("img",{style:{width:"15px"},src:g},null,-1)),Ft={style:{"font-size":"10px"},class:"pl-1"},Jt={key:3},qt=$(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"15px"},src:_}),n("Mr.X")],-1)),Gt=$(()=>t("br",null,null,-1)),Kt=$(()=>t("img",{style:{width:"15px"},src:g},null,-1)),Qt={style:{"font-size":"10px"},class:"pl-1"};function Ot(s,a,h,b,r,l){return o(),c("main",Nt,[t("div",Et,[(o(!0),c(u,null,w(r.articles.slice(89),(e,d)=>(o(),c("div",{class:"col",key:d},[t("div",Mt,[e.urlToImage?(o(),c("img",{key:0,src:e.urlToImage,class:"card-img-top w-100 h-100"},null,8,jt)):(o(),c("img",{key:1,src:r.image,class:"card-img-top",alt:"..."},null,8,Ht)),t("div",Lt,[t("a",{class:"card-title text-black fw-bold font",href:e.url,target:"_blank"},i(e.title),9,Ct)]),e.author?(o(),c("p",Xt,[t("strong",Bt,[Rt,n(" "+i(e.author),1)]),n(),Vt,Yt,t("span",Ft,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",Jt,[qt,n(),Gt,n(),Kt,t("span",Qt,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])}const Ut=m(At,[["render",Ot],["__scopeId","data-v-860f68eb"]]),Wt={data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},mounted(){},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData2(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=49")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews2(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=46")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},f=s=>(x("data-v-cba44e8f"),s=s(),T(),s),Zt={class:"container"},ts={class:"mt-5"},ss={class:""},es={class:"row"},os={class:"col-lg-4"},cs={class:"row"},as={class:"mb-3"},is={class:"bg-white"},ns={class:"row"},rs=["href"],ls=["src"],ds={key:1,class:"w-100",src:"https://healthcenter.uga.edu/wp-content/uploads/sites/19/2022/02/heart-healthy-diet.jpg",alt:""},hs={class:"text"},_s=["href"],gs={key:0,class:""},ps={style:{"font-family":"gotic","font-size":"10px"}},us=f(()=>t("img",{style:{width:"20px"},src:_},null,-1)),ws=f(()=>t("img",{style:{width:"20px"},src:g},null,-1)),fs={class:"pl-1"},ms={key:1},ys=f(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),$s=f(()=>t("img",{style:{width:"20px"},src:g},null,-1)),bs={class:"pl-1"},vs={class:"col-lg-8"},ks=f(()=>t("div",{class:"section-title mb-0"},[t("h4",{class:"m-0 fw-bold text-white p-2",style:{"background-color":"indigo"}},"ENTERTAINMENT")],-1)),xs={class:"card-body mt-4"},Ts={class:""},zs={class:"fw-bold p-1"},Is=["href"],Ss=["href"],Ds=["src"],Ps=["src"],As=f(()=>t("br",null,null,-1)),Ns={key:0,class:""},Es={style:{"font-family":"gotic","font-size":"10px"}},Ms={class:"pl-1"},js={key:1},Hs=f(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}}," Mr.X",-1)),Ls={class:"pl-1"},Cs=["href"];function Xs(s,a,h,b,r,l){return o(),c("div",Zt,[t("div",ts,[t("div",ss,[t("div",es,[t("div",os,[t("div",cs,[t("div",as,[t("div",is,[t("div",ns,[(o(!0),c(u,null,w(r.articles2.slice(46),(e,d)=>(o(),c("div",{class:"col-12",key:d},[t("a",{href:e.url},[e.urlToImage?(o(),c("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,ls)):(o(),c("img",ds))],8,rs),t("div",hs,[t("span",null,[t("a",{class:"fw-bold font",href:e.url,target:"_blank"},i(e.title)+"/",9,_s)]),e.author?(o(),c("p",gs,[t("strong",ps,[us,n(" "+i(e.author),1)]),ws,t("span",fs,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",ms,[ys,n(),$s,t("span",bs,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])])])]),t("div",vs,[ks,t("div",xs,[(o(!0),c(u,null,w(r.articles.slice(24),(e,d)=>(o(),c("div",{class:"bg-white border border-top-0",key:d},[t("div",Ts,[t("p",zs,[t("a",{href:e.url,target:"_blank"},i(e.title),9,Is),t("a",{href:e.url},[e.urlToImage?(o(),c("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,Ds)):(o(),c("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,Ps))],8,Ss),As,e.author?(o(),c("span",Ns,[t("strong",Es,i(e.author),1),t("span",Ms,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("span",js,[Hs,t("span",Ls,i(l.formatDateTime(e.publishedAt)),1)]))])]),t("a",{href:e.url,target:"_blank",class:"d-block rounded",style:{}},null,8,Cs)]))),128))])])])])])])}const Bs=m(Wt,[["render",Xs],["__scopeId","data-v-cba44e8f"]]),Rs={components:{},data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:8}},computed:{paginatedArticles(){const s=(this.currentPage-1)*this.rows,a=s+this.rows;return this.articles.slice(s,a)}},methods:{formatDateTime(s){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(s).toLocaleString(void 0,a)},async getData2(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=89")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const s=await this.getData2();this.articles2=s,this.totalPages=Math.ceil(s.length/this.rows)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=58")).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews2(){const s=await this.getData();this.articles=s,this.totalPages=Math.ceil(s.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},p=s=>(x("data-v-4c310676"),s=s(),T(),s),Vs={class:""},Ys={class:"mt-5"},Fs=p(()=>t("h3",{class:"fw-bold text-white p-2",style:{"background-color":"indigo"}},"ENTERTAINMENT",-1)),Js={class:""},qs={class:"row"},Gs={class:"col-lg-6"},Ks={class:"row"},Qs={class:"mb-3"},Os={class:"bg-white"},Us={class:"row"},Ws=["href"],Zs=["src"],te=["src"],se={class:"text"},ee=["href"],oe={key:0,class:""},ce={style:{"font-family":"gotic","font-size":"10px"}},ae=p(()=>t("img",{style:{width:"20px"},src:_},null,-1)),ie=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),ne={class:"pl-1"},re={key:1},le=p(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),de=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),he={class:"pl-1"},_e={class:"col-lg-6"},ge={class:"mt-16"},pe={class:"position-relative"},ue=["src"],we=["src"],fe={class:"bg-white text"},me=["href"],ye={key:0,class:""},$e={style:{"font-family":"gotic","font-size":"10px"}},be=p(()=>t("img",{style:{width:"20px"},src:_},null,-1)),ve=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),ke={class:"pl-1"},xe={key:1},Te=p(()=>t("strong",{style:{"font-family":"gotic","font-size":"10px"}},[t("img",{style:{width:"20px"},src:_}),n("Mr.X")],-1)),ze=p(()=>t("img",{style:{width:"20px"},src:g},null,-1)),Ie={class:"pl-1"};function Se(s,a,h,b,r,l){return o(),c("div",Vs,[t("div",Ys,[Fs,t("div",Js,[t("div",qs,[t("div",Gs,[t("div",Ks,[t("div",Qs,[t("div",Os,[t("div",Us,[(o(!0),c(u,null,w(r.articles2.slice(59),(e,d)=>(o(),c("div",{class:"col-6",key:d},[t("a",{href:e.url},[e.urlToImage?(o(),c("img",{key:0,class:"w-100",src:e.urlToImage,alt:""},null,8,Zs)):(o(),c("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,te))],8,Ws),t("div",se,[t("span",null,[t("a",{class:"fw-bold font",href:e.url,target:"_blank"},i(e.title),9,ee)]),e.author?(o(),c("p",oe,[t("strong",ce,[ae,n(" "+i(e.author),1)]),ie,t("span",ne,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",re,[le,n(),de,t("span",he,i(l.formatDateTime(e.publishedAt)),1)]))])]))),128))])])])])]),t("div",_e,[t("div",ge,[(o(!0),c(u,null,w(r.articles.slice(49),(e,d)=>(o(),c("div",{class:"col-lg-12 lg-4 md-6",key:e},[t("div",pe,[e.urlToImage?(o(),c("img",{key:0,class:"img-fluid w-100",src:e.urlToImage,style:{"object-fit":"cover"}},null,8,ue)):(o(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,we)),t("div",fe,[t("a",{class:"d-block text-uppercase fw-bold",href:e.url,target:"_blank"},i(e.title),9,me),e.author?(o(),c("p",ye,[t("strong",$e,[be,n(" "+i(e.author),1)]),ve,t("span",ke,i(l.formatDateTime(e.publishedAt)),1)])):(o(),c("p",xe,[Te,n(),ze,t("span",Ie,i(l.formatDateTime(e.publishedAt)),1)]))])])]))),128))])])])])])])}const De=m(Rs,[["render",Se],["__scopeId","data-v-4c310676"]]),Pe={components:{enter:lt,enter2:Pt,enter4:Bs,enter5:De,enter3:Ut}},Ae={class:"container mt-5"},Ne=t("h5",{class:"fw-bold p-2 text-white",style:{"background-color":"indigo"}}," ENTERTAINMENT ",-1),Ee=t("div",{class:"video-container"},[t("iframe",{src:"https://www.youtube.com/embed/KHf2YYE9qdk?si=c35HtukDJfJXQ1gG",title:"YouTube video player",allowfullscreen:""})],-1);function Me(s,a,h,b,r,l){const e=v("enter"),d=v("enter2"),I=v("enter4"),S=v("enter5"),D=v("enter3");return o(),c("div",Ae,[Ne,Ee,k(e),k(d),k(I),k(S),k(D)])}const He=m(Pe,[["render",Me]]);export{He as default};
