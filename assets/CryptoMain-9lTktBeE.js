import{_ as g,o as a,c,a as s,F as d,r as h,t as l,p as y,d as $,b as f,e as v,f as b,s as S,g as w,h as m}from"./index-_LziHojK.js";const N={components:{},data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:2,rows2:14}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,o=t+this.rows;return this.articles.slice(t,o)},paginatedArticles2(){const t=(this.currentPage-1)*this.rows2,o=t+this.rows2;return this.articles2.slice(t,o)}},methods:{formatDateTime(t){const o={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,o)},async getData2(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData2();this.articles2=t,this.totalPages=Math.ceil(t.length/this.rows)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews2(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},k=t=>(y("data-v-618c5a28"),t=t(),$(),t),j={class:"container"},I={class:""},A=k(()=>s("br",null,null,-1)),E={class:""},H={class:"row mt-16"},M=k(()=>s("h5",{class:"fw-bold p-2 text-white",style:{"background-color":"black"}}," CRYPTO ",-1)),z={class:"col-lg-8"},B={class:"row"},C={class:""},L={class:"position-relative"},Y=["src"],U=["src"],V={class:"bg-white"},F=["href"],O={class:"col-lg-4"},q={class:"mb-3"},J={class:"bg-white"},K={class:"row"},R=["href"],X=["src"],Z=["src"],G={class:"text"},Q=["href"];function W(t,o,_,p,r,n){return a(),c("div",j,[s("div",I,[A,s("div",E,[s("div",H,[M,s("div",z,[s("div",B,[s("div",C,[(a(!0),c(d,null,h(n.paginatedArticles,e=>(a(),c("div",{class:"col-lg-12 lg-4 md-6",key:e},[s("div",L,[e.imageurl?(a(),c("img",{key:0,class:"img-fluid w-100 hover",src:e.imageurl,style:{"object-fit":"cover"}},null,8,Y)):(a(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,U)),s("div",V,[s("a",{class:"d-block text-uppercase fw-bold",href:e.url,target:"_blank"},l(e.title),9,F)])])]))),128))])])]),s("div",O,[s("div",q,[s("div",J,[s("div",K,[(a(!0),c(d,null,h(n.paginatedArticles2.slice(2),(e,i)=>(a(),c("div",{class:"col-6",key:i},[s("a",{href:e.url},[e.imageurl?(a(),c("img",{key:0,class:"w-100",src:e.imageurl,alt:""},null,8,X)):(a(),c("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,Z))],8,R),s("div",G,[s("span",null,[s("a",{class:"fw-bold font",href:e.url,target:"_blank"},l(e.title),9,Q)])])]))),128))])])])])])])])])}const tt=g(N,[["render",W],["__scopeId","data-v-618c5a28"]]),st={data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,o=t+this.rows;return this.articles.slice(t,o)}},methods:{formatDateTime(t){const o={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,o)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)}},mounted(){this.fetchNews()}},et={class:""},ot={class:"row row-cols-1 row-cols-md-4 g-4"},at={class:"card"},ct=["src"],rt=["src"],nt={class:"card-body"},it=["href"];function lt(t,o,_,p,r,n){return a(),c("main",et,[s("div",ot,[(a(!0),c(d,null,h(r.articles.slice(14),(e,i)=>(a(),c("div",{class:"col",key:i},[s("div",at,[e.imageurl?(a(),c("img",{key:0,src:e.imageurl,class:"card-img-top img"},null,8,ct)):(a(),c("img",{key:1,src:r.image,class:"card-img-top",alt:"..."},null,8,rt)),s("div",nt,[s("a",{class:"card-title text-black fw-bold font",href:e.url,target:"_blank"},l(e.title),9,it)])])]))),128))])])}const dt=g(st,[["render",lt],["__scopeId","data-v-0de1c504"]]),ht={data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,o=t+this.rows;return this.articles.slice(t,o)}},methods:{formatDateTime(t){const o={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,o)},async getData(){try{return(await(await fetch("https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=97")).json()).items}catch(o){return console.error("Error fetching news:",o),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)}},mounted(){this.fetchNews()}},u=t=>(y("data-v-f41bb64f"),t=t(),$(),t),_t={class:""},gt={class:"row row-cols-1 row-cols-md-4 g-4"},ut={class:"card"},pt=["src"],wt=["src"],mt={class:"card-body"},ft=["href"],yt={key:2,class:""},$t={style:{"font-family":"gotic","font-size":"10px"}},vt=u(()=>s("img",{style:{width:"15px"},src:v},null,-1)),bt=u(()=>s("br",null,null,-1)),kt=u(()=>s("img",{style:{width:"15px"},src:b},null,-1)),xt={style:{"font-size":"10px"},class:"pl-1"},Dt={key:3},Pt=u(()=>s("strong",{style:{"font-family":"gotic","font-size":"10px"}},[s("img",{style:{width:"15px"},src:v}),f("Mr.X")],-1)),Tt=u(()=>s("br",null,null,-1)),St=u(()=>s("img",{style:{width:"15px"},src:b},null,-1)),Nt={style:{"font-size":"10px"},class:"pl-1"};function jt(t,o,_,p,r,n){return a(),c("main",_t,[s("div",gt,[(a(!0),c(d,null,h(r.articles.slice(89),(e,i)=>(a(),c("div",{class:"col",key:i},[s("div",ut,[e.urlToImage?(a(),c("img",{key:0,src:e.urlToImage,class:"card-img-top w-100 h-100"},null,8,pt)):(a(),c("img",{key:1,src:r.image,class:"card-img-top",alt:"..."},null,8,wt)),s("div",mt,[s("a",{class:"card-title text-black fw-bold font",href:e.url,target:"_blank"},l(e.title),9,ft)]),e.author?(a(),c("p",yt,[s("strong",$t,[vt,f(" "+l(e.author),1)]),f(),bt,kt,s("span",xt,l(n.formatDateTime(e.publishedAt)),1)])):(a(),c("p",Dt,[Pt,f(),Tt,f(),St,s("span",Nt,l(n.formatDateTime(e.publishedAt)),1)]))])]))),128))])])}const It=g(ht,[["render",jt],["__scopeId","data-v-f41bb64f"]]),At={components:{},data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:2,rows2:14}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,o=t+this.rows;return this.articles.slice(t,o)},paginatedArticles2(){const t=(this.currentPage-1)*this.rows2,o=t+this.rows2;return this.articles2.slice(t,o)}},methods:{formatDateTime(t){const o={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,o)},async getData2(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=Blockcain,Technology&extraParams=YourSite")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData2();this.articles2=t,this.totalPages=Math.ceil(t.length/this.rows)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=Blockcain,Technology&extraParams=YourSite")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews2(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)}},mounted(){this.fetchNews(),this.fetchNews2()}},x=t=>(y("data-v-a2dbf856"),t=t(),$(),t),Et={class:"container"},Ht={class:""},Mt=x(()=>s("br",null,null,-1)),zt={class:""},Bt={class:"row mt-16"},Ct=x(()=>s("h5",{class:"fw-bold p-2 text-white",style:{"background-color":"black"}}," BLOCKCHAIN ",-1)),Lt={class:"col-lg-4"},Yt={class:"mb-3"},Ut={class:"bg-white"},Vt={class:"row"},Ft=["href"],Ot=["src"],qt=["src"],Jt={class:"text"},Kt=["href"],Rt={class:"col-lg-8"},Xt={class:"row"},Zt={class:""},Gt={class:"position-relative"},Qt=["src"],Wt=["src"],ts={class:"bg-white"},ss=["href"];function es(t,o,_,p,r,n){return a(),c("div",Et,[s("div",Ht,[Mt,s("div",zt,[s("div",Bt,[Ct,s("div",Lt,[s("div",Yt,[s("div",Ut,[s("div",Vt,[(a(!0),c(d,null,h(n.paginatedArticles2.slice(2),(e,i)=>(a(),c("div",{class:"col-6",key:i},[s("a",{href:e.url},[e.imageurl?(a(),c("img",{key:0,class:"w-100",src:e.imageurl,alt:""},null,8,Ot)):(a(),c("img",{key:1,class:"w-100",src:r.image,alt:""},null,8,qt))],8,Ft),s("div",Jt,[s("span",null,[s("a",{class:"fw-bold font",href:e.url,target:"_blank"},l(e.title),9,Kt)])])]))),128))])])])]),s("div",Rt,[s("div",Xt,[s("div",Zt,[(a(!0),c(d,null,h(n.paginatedArticles,e=>(a(),c("div",{class:"col-lg-12 lg-4 md-6",key:e},[s("div",Gt,[e.imageurl?(a(),c("img",{key:0,class:"img-fluid w-100 hover",src:e.imageurl,style:{"object-fit":"cover"}},null,8,Qt)):(a(),c("img",{key:1,class:"img-fluid w-100",src:r.image,style:{"object-fit":"cover"}},null,8,Wt)),s("div",ts,[s("a",{class:"d-block text-uppercase fw-bold",href:e.url,target:"_blank"},l(e.title),9,ss)])])]))),128))])])])])])])])}const os=g(At,[["render",es],["__scopeId","data-v-a2dbf856"]]),as={data(){return{image:"https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg",articles:[],articles2:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,o=t+this.rows;return this.articles.slice(t,o)}},methods:{formatDateTime(t){const o={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,o)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=Blockcain,Technology&extraParams=YourSite")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)}},mounted(){this.fetchNews()}},cs={class:""},rs={class:"row row-cols-1 row-cols-md-4 g-4"},ns={class:"card"},is=["src"],ls=["src"],ds={class:"card-body"},hs=["href"];function _s(t,o,_,p,r,n){return a(),c("main",cs,[s("div",rs,[(a(!0),c(d,null,h(r.articles.slice(14),(e,i)=>(a(),c("div",{class:"col",key:i},[s("div",ns,[e.imageurl?(a(),c("img",{key:0,src:e.imageurl,class:"card-img-top img"},null,8,is)):(a(),c("img",{key:1,src:r.image,class:"card-img-top",alt:"..."},null,8,ls)),s("div",ds,[s("a",{class:"card-title text-black fw-bold font",href:e.url,target:"_blank"},l(e.title),9,hs)])])]))),128))])])}const gs=g(as,[["render",_s],["__scopeId","data-v-507cf64f"]]),us={components:{crypto:tt,crypto2:dt,crypto4:os,crypto5:gs,crypto3:It,spinner:S}},ps={class:"container mt-5"},ws=s("div",{class:"video-container"},[s("iframe",{src:"https://www.youtube.com/embed/IUmz-sUbnMw?si=4zmxJLU0wdZMnq4H",title:"YouTube video player",allowfullscreen:""})],-1);function ms(t,o,_,p,r,n){const e=w("spinner"),i=w("crypto"),D=w("crypto2"),P=w("crypto4"),T=w("crypto5");return a(),c("div",ps,[m(e),ws,m(i),m(D),m(P),m(T)])}const ys=g(us,[["render",ms]]);export{ys as default};
