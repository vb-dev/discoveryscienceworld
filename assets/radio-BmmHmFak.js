import{a2 as a,a5 as o,y as m,Z as l,a8 as c,F as h,a6 as f,$ as v,a1 as r,W as S,Y as y,a3 as g,a4 as b}from"./@vue-DcaRQrEV.js";import{_ as w}from"./index-B_8IehPi.js";import"./pinia-BpcJfL22.js";import"./@townsquarelabs-BS-uiH3p.js";import"./@tonconnect-Bdfz1Hmc.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-tCHOh2cX.js";import"./deepmerge-D8huMqX6.js";import"./axios-gbnyky6P.js";import"./vue-i18n-DnT-njvb.js";import"./@intlify-Du3kGuGm.js";import"./vue-router-esc5Ehka.js";import"./vue-cookies-oMoGE7eu.js";import"./vuetify-Cn8jMMVq.js";import"./vue-lazyload-BBtGN9-g.js";const k={data(){return{playingStation:null,stations:[],filteredStations:[],selectedStation:null,loading:!0,offset:0,searchQuery:"",favorites:[]}},methods:{selectStation(t){this.selectedStation=t,this.playingStation=t},playFavoriteStation(t){this.playingStation=t},async fetchRadioStations(){this.loading=!0;const t=`https://de1.api.radio-browser.info/json/stations/topclick/1000?offset=${this.offset}`;try{const p=await(await fetch(t)).json();this.stations.push(...p),this.filteredStations=this.stations}catch(s){console.error("Ошибка загрузки радиостанций:",s)}finally{this.loading=!1}},filterStations(){this.filteredStations=this.stations.filter(t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase()))},addToFavorites(){this.isFavorite(this.selectedStation)?console.log("Станция уже в избранных"):(this.favorites.push(this.selectedStation),localStorage.setItem("favorites",JSON.stringify(this.favorites)),console.log("Станция добавлена в избранное"))},isFavorite(t){return this.favorites.some(s=>s.stationuuid===t.stationuuid)},removeFromFavorites(t){this.playingStation&&this.playingStation.stationuuid===t.stationuuid&&(this.playingStation=null),this.favorites=this.favorites.filter(s=>s.stationuuid!==t.stationuuid),localStorage.setItem("favorites",JSON.stringify(this.favorites))},loadMoreStations(){this.offset+=1e3,this.fetchRadioStations()},loadFavorites(){const t=localStorage.getItem("favorites");t&&(this.favorites=JSON.parse(t))}},watch:{searchQuery(){this.filterStations()}},mounted(){this.fetchRadioStations(),this.loadFavorites()}},n=t=>(g("data-v-cb7b743c"),t=t(),b(),t),F=n(()=>o("br",null,null,-1)),x=n(()=>o("br",null,null,-1)),C=n(()=>o("br",null,null,-1)),N=n(()=>o("br",null,null,-1)),I=n(()=>o("br",null,null,-1)),M=n(()=>o("br",null,null,-1)),V={class:"radio-player container text-white"},B={class:"dropdown my-3"},Q={class:"btn btn-danger4 dropdown-toggle station-button text-white",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false"},T={key:0},L={style:{"background-color":"#091520"},class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},J=["onClick"],O={key:0,class:"text-white"},R={class:"text-white-50"},j={class:"text-info"},U=["src"],D={key:1,class:"spinner-border text-primary",role:"status"},E=n(()=>o("span",{class:"visually-hidden"},"Loading...",-1)),P=[E],W={key:2},Y={key:3,class:"favorites-section"},Z=["onClick"],q=["onClick"],z=n(()=>o("br",null,null,-1)),A=n(()=>o("br",null,null,-1)),G=n(()=>o("br",null,null,-1)),H=n(()=>o("br",null,null,-1));function K(t,s,p,X,e,d){const _=v("v-text-field");return r(),a(h,null,[F,x,C,N,I,M,o("div",V,[m(_,{variant:"underlined",modelValue:e.searchQuery,"onUpdate:modelValue":s[0]||(s[0]=i=>e.searchQuery=i),type:"text",label:t.$t("searchForStation"),placeholder:t.$t("enterStationName")},null,8,["modelValue","label","placeholder"]),o("div",B,[o("button",Q,l(e.selectedStation?e.selectedStation.name:t.$t("selectedStation")),1),e.stations.length>0&&!e.loading?(r(),a("div",T,[o("button",{class:"btn btn-danger4 text-white",onClick:s[1]||(s[1]=(...i)=>d.loadMoreStations&&d.loadMoreStations(...i))},l(t.$t("loadMoreStations")),1)])):c("",!0),o("ul",L,[(r(!0),a(h,null,f(e.filteredStations,(i,u)=>(r(),a("li",{style:{"max-width":"250px","background-color":"#091520"},key:u,class:"dropdown-item fw-bold text-white",onClick:$=>d.selectStation(i)},l(i.name),9,J))),128))])]),e.playingStation?(r(),a("div",O,[o("h4",R,l(e.playingStation.name),1),o("p",j,l(e.playingStation.country)+" | "+l(e.playingStation.language),1),o("audio",{ref:"audioPlayer",controls:"",src:e.playingStation.url_resolved,autoplay:""},null,8,U),o("button",{class:"btn btn-danger4 mt-2 text-white",onClick:s[2]||(s[2]=(...i)=>d.addToFavorites&&d.addToFavorites(...i))},l(t.$t("addToFavorites")),1)])):c("",!0),e.loading?(r(),a("div",D,P)):c("",!0),!e.loading&&e.stations.length===0?(r(),a("div",W,[o("p",null,l(t.$t("No stations available")),1)])):c("",!0),e.favorites.length>0?(r(),a("div",Y,[o("ul",null,[(r(!0),a(h,null,f(e.favorites,i=>(r(),a("li",{key:i.stationuuid,onClick:u=>d.playFavoriteStation(i),class:"favorite-station text-white-50"},[S(l(i.name)+" ",1),o("button",{class:"btn btn-sm fw-bold",onClick:y(u=>d.removeFromFavorites(i),["stop"]),style:{"background-color":"red",color:"white"}},l(t.$t("remove")),9,q)],8,Z))),128))])])):c("",!0),z,A,G,H])],64)}const vt=w(k,[["render",K],["__scopeId","data-v-cb7b743c"]]);export{vt as default};
