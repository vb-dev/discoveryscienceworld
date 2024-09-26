import{g as a,F as o,j as _,J as r,B as c,G as h,l as f,af as v,f as l,L as S,I as y,ah as g,ai as b}from"./@vue-NjKOnEGT.js";import{_ as w}from"./index-CNjd1MPY.js";import"./pinia-BP0IfFWe.js";import"./@townsquarelabs-DM-69Jax.js";import"./@tonconnect-M86Ec7Bf.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-BKpq8BhR.js";import"./deepmerge-D8huMqX6.js";import"./axios-C8DqakIB.js";import"./vue-i18n-5Qi6QEAo.js";import"./@intlify-YGwFW6EB.js";import"./vue-router-DZppbSTe.js";import"./vue-cookies-oMoGE7eu.js";/* empty css             */import"./@vuepic-CdScWKV-.js";import"./date-fns-C7_rVUPb.js";import"./vuetify-MtPVAfi-.js";import"./vue-lazyload-Bd2acmnH.js";import"./firebase-DvzBAoB-.js";import"./@firebase-Hco5RtB1.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";const k={data(){return{playingStation:null,stations:[],filteredStations:[],selectedStation:null,loading:!0,offset:0,searchQuery:"",favorites:[]}},methods:{selectStation(t){this.selectedStation=t,this.playingStation=t},playFavoriteStation(t){this.playingStation=t},async fetchRadioStations(){this.loading=!0;const t=`https://de1.api.radio-browser.info/json/stations/topclick/1000?offset=${this.offset}`;try{const p=await(await fetch(t)).json();this.stations.push(...p),this.filteredStations=this.stations}catch(s){console.error("Ошибка загрузки радиостанций:",s)}finally{this.loading=!1}},filterStations(){this.filteredStations=this.stations.filter(t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase()))},addToFavorites(){this.isFavorite(this.selectedStation)?console.log("Станция уже в избранных"):(this.favorites.push(this.selectedStation),localStorage.setItem("favorites",JSON.stringify(this.favorites)),console.log("Станция добавлена в избранное"))},isFavorite(t){return this.favorites.some(s=>s.stationuuid===t.stationuuid)},removeFromFavorites(t){this.playingStation&&this.playingStation.stationuuid===t.stationuuid&&(this.playingStation=null),this.favorites=this.favorites.filter(s=>s.stationuuid!==t.stationuuid),localStorage.setItem("favorites",JSON.stringify(this.favorites))},loadMoreStations(){this.offset+=1e3,this.fetchRadioStations()},loadFavorites(){const t=localStorage.getItem("favorites");t&&(this.favorites=JSON.parse(t))}},watch:{searchQuery(){this.filterStations()}},mounted(){this.fetchRadioStations(),this.loadFavorites()}},n=t=>(g("data-v-5a32329e"),t=t(),b(),t),F=n(()=>o("br",null,null,-1)),C=n(()=>o("br",null,null,-1)),x=n(()=>o("br",null,null,-1)),I=n(()=>o("br",null,null,-1)),N=n(()=>o("br",null,null,-1)),M=n(()=>o("br",null,null,-1)),V={class:"radio-player container text-white"},B={class:"dropdown my-3"},L={class:"btn btn-danger1 dropdown-toggle station-button",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false"},Q={key:0},J={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},R=["onClick"],T={key:0,class:"text-white"},j={class:"text-info"},O=["src"],E={key:1,class:"spinner-border text-primary",role:"status"},U=n(()=>o("span",{class:"visually-hidden"},"Loading...",-1)),A=[U],D={key:2},G={key:3,class:"favorites-section"},P=["onClick"],q=["onClick"],z=n(()=>o("br",null,null,-1)),H=n(()=>o("br",null,null,-1)),K=n(()=>o("br",null,null,-1)),W=n(()=>o("br",null,null,-1));function X(t,s,p,Y,e,d){const m=v("v-text-field");return l(),a(h,null,[F,C,x,I,N,M,o("div",V,[_(m,{variant:"underlined",modelValue:e.searchQuery,"onUpdate:modelValue":s[0]||(s[0]=i=>e.searchQuery=i),type:"text",label:"Search for a station...",placeholder:"Enter the name of your radio station"},null,8,["modelValue"]),o("div",B,[o("button",L,r(e.selectedStation?e.selectedStation.name:t.$t("Select Station")),1),e.stations.length>0&&!e.loading?(l(),a("div",Q,[o("button",{class:"btn btn-danger1",onClick:s[1]||(s[1]=(...i)=>d.loadMoreStations&&d.loadMoreStations(...i))},r(t.$t("Load More Stations")),1)])):c("",!0),o("ul",J,[(l(!0),a(h,null,f(e.filteredStations,(i,u)=>(l(),a("li",{style:{"max-width":"250px"},key:u,class:"dropdown-item",onClick:Z=>d.selectStation(i)},r(i.name),9,R))),128))])]),e.playingStation?(l(),a("div",T,[o("h4",null,r(e.playingStation.name),1),o("p",j,r(e.playingStation.country)+" | "+r(e.playingStation.language),1),o("audio",{ref:"audioPlayer",controls:"",src:e.playingStation.url_resolved,autoplay:""},null,8,O),o("button",{class:"btn btn-danger1 mt-2",onClick:s[2]||(s[2]=(...i)=>d.addToFavorites&&d.addToFavorites(...i))}," Add to Favorites ")])):c("",!0),e.loading?(l(),a("div",E,A)):c("",!0),!e.loading&&e.stations.length===0?(l(),a("div",D,[o("p",null,r(t.$t("No stations available")),1)])):c("",!0),e.favorites.length>0?(l(),a("div",G,[o("ul",null,[(l(!0),a(h,null,f(e.favorites,i=>(l(),a("li",{key:i.stationuuid,onClick:u=>d.playFavoriteStation(i),class:"favorite-station"},[S(r(i.name)+" ",1),o("button",{class:"btn btn-sm fw-bold",onClick:y(u=>d.removeFromFavorites(i),["stop"]),style:{"background-color":"red",color:"white"}},r(t.$t("Remove")),9,q)],8,P))),128))])])):c("",!0),z,H,K,W])],64)}const kt=w(k,[["render",X],["__scopeId","data-v-5a32329e"]]);export{kt as default};
