import{g as a,F as o,N as f,ae as v,J as r,G as h,l as m,B as c,f as l,L as _,I as S,ah as y,ai as g}from"./@vue-NjKOnEGT.js";import{_ as b}from"./index-BhJLfWag.js";import"./pinia-BP0IfFWe.js";import"./@townsquarelabs-DM-69Jax.js";import"./@tonconnect-M86Ec7Bf.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-BKpq8BhR.js";import"./deepmerge-D8huMqX6.js";import"./axios-C8DqakIB.js";import"./vue-i18n-5Qi6QEAo.js";import"./@intlify-YGwFW6EB.js";import"./vue-router-DZppbSTe.js";import"./vue-cookies-oMoGE7eu.js";/* empty css             */import"./@vuepic-CdScWKV-.js";import"./date-fns-C7_rVUPb.js";import"./vuetify-MtPVAfi-.js";import"./vue-lazyload-Bd2acmnH.js";import"./firebase-DvzBAoB-.js";import"./@firebase-Hco5RtB1.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";const F={data(){return{playingStation:null,stations:[],filteredStations:[],selectedStation:null,loading:!0,offset:0,searchQuery:"",favorites:[]}},methods:{selectStation(t){this.selectedStation=t,this.playingStation=t},playFavoriteStation(t){this.playingStation=t},async fetchRadioStations(){this.loading=!0;const t=`https://de1.api.radio-browser.info/json/stations/topclick/1000?offset=${this.offset}`;try{const p=await(await fetch(t)).json();this.stations.push(...p),this.filteredStations=this.stations}catch(s){console.error("Ошибка загрузки радиостанций:",s)}finally{this.loading=!1}},filterStations(){this.filteredStations=this.stations.filter(t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase()))},saveToFavorites(){this.isFavorite(this.selectedStation)?this.removeFromFavorites(this.selectedStation):(this.favorites.push(this.selectedStation),localStorage.setItem("favorites",JSON.stringify(this.favorites)))},isFavorite(t){return this.favorites.some(s=>s.stationuuid===t.stationuuid)},removeFromFavorites(t){this.playingStation&&this.playingStation.stationuuid===t.stationuuid&&(this.playingStation=null),this.favorites=this.favorites.filter(s=>s.stationuuid!==t.stationuuid),localStorage.setItem("favorites",JSON.stringify(this.favorites))},loadMoreStations(){this.offset+=1e3,this.fetchRadioStations()},loadFavorites(){const t=localStorage.getItem("favorites");t&&(this.favorites=JSON.parse(t))}},watch:{searchQuery(){this.filterStations()}},mounted(){this.fetchRadioStations(),this.loadFavorites()}},n=t=>(y("data-v-1178c59a"),t=t(),g(),t),w=n(()=>o("br",null,null,-1)),k=n(()=>o("br",null,null,-1)),C=n(()=>o("br",null,null,-1)),x=n(()=>o("br",null,null,-1)),I=n(()=>o("br",null,null,-1)),M=n(()=>o("br",null,null,-1)),N={class:"radio-player container text-white"},B={class:"dropdown my-3"},L={class:"btn btn-danger1 dropdown-toggle station-button",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false"},Q={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},R=["onClick"],T={key:0,class:"text-white"},J={class:"text-info"},V=["src"],O={key:1,class:"spinner-border text-primary",role:"status"},j=n(()=>o("span",{class:"visually-hidden"},"Loading...",-1)),D=[j],U={key:2},A={key:3,class:"favorites-section"},E=["onClick"],G=["onClick"],P={key:4},q=n(()=>o("br",null,null,-1)),z=n(()=>o("br",null,null,-1)),H=n(()=>o("br",null,null,-1)),K=n(()=>o("br",null,null,-1));function W(t,s,p,X,e,d){return l(),a(h,null,[w,k,C,x,I,M,o("div",N,[f(o("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>e.searchQuery=i),type:"text",class:"form-control my-3",placeholder:"Search for a station..."},null,512),[[v,e.searchQuery]]),o("div",B,[o("button",L,r(e.selectedStation?e.selectedStation.name:t.$t("Select Station")),1),o("ul",Q,[(l(!0),a(h,null,m(e.filteredStations,(i,u)=>(l(),a("li",{style:{"max-width":"250px"},key:u,class:"dropdown-item",onClick:Y=>d.selectStation(i)},r(i.name),9,R))),128))])]),e.playingStation?(l(),a("div",T,[o("h3",null,r(e.playingStation.name),1),o("p",J,r(e.playingStation.country)+" | "+r(e.playingStation.language),1),o("audio",{ref:"audioPlayer",controls:"",src:e.playingStation.url_resolved,autoplay:""},null,8,V),o("button",{class:"btn btn-danger1 mt-2",onClick:s[1]||(s[1]=(...i)=>d.saveToFavorites&&d.saveToFavorites(...i))},r(d.isFavorite(e.playingStation)?"Remove from Favorites":"Add to Favorites"),1)])):c("",!0),e.loading?(l(),a("div",O,D)):c("",!0),!e.loading&&e.stations.length===0?(l(),a("div",U,[o("p",null,r(t.$t("No stations available")),1)])):c("",!0),e.favorites.length>0?(l(),a("div",A,[o("ul",null,[(l(!0),a(h,null,m(e.favorites,i=>(l(),a("li",{key:i.stationuuid,onClick:u=>d.playFavoriteStation(i),class:"favorite-station"},[_(r(i.name)+" ",1),o("button",{class:"btn btn-danger btn-sm",onClick:S(u=>d.removeFromFavorites(i),["stop"])},r(t.$t("Remove")),9,G)],8,E))),128))])])):c("",!0),e.stations.length>0&&!e.loading?(l(),a("div",P,[o("button",{class:"btn btn-danger1",onClick:s[2]||(s[2]=(...i)=>d.loadMoreStations&&d.loadMoreStations(...i))},r(t.$t("Load More Stations")),1)])):c("",!0),q,z,H,K])],64)}const Ft=b(F,[["render",W],["__scopeId","data-v-1178c59a"]]);export{Ft as default};
