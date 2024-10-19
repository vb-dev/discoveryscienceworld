import{g as a,F as o,j as _,J as l,B as c,G as h,l as f,af as v,f as r,L as S,I as y,ah as g,ai as b}from"./@vue-NjKOnEGT.js";import{_ as w}from"./index-5uDzBybC.js";import"./pinia-CrJ5cDv_.js";import"./@townsquarelabs-DM-69Jax.js";import"./@tonconnect-M86Ec7Bf.js";import"./tweetnacl-util-2xfJoBJT.js";import"./classnames-CVOySMdS.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-BKpq8BhR.js";import"./deepmerge-D8huMqX6.js";import"./axios-C8DqakIB.js";import"./vue-i18n-5Qi6QEAo.js";import"./@intlify-YGwFW6EB.js";import"./vue-router-DZppbSTe.js";import"./vue-cookies-oMoGE7eu.js";/* empty css             */import"./@vuepic-CdScWKV-.js";import"./date-fns-C7_rVUPb.js";import"./vuetify-MtPVAfi-.js";import"./vue-lazyload-Bd2acmnH.js";import"./firebase-BaZfWIHc.js";import"./@firebase-D7pW4xTT.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";const k={data(){return{playingStation:null,stations:[],filteredStations:[],selectedStation:null,loading:!0,offset:0,searchQuery:"",favorites:[]}},methods:{selectStation(t){this.selectedStation=t,this.playingStation=t},playFavoriteStation(t){this.playingStation=t},async fetchRadioStations(){this.loading=!0;const t=`https://de1.api.radio-browser.info/json/stations/topclick/1000?offset=${this.offset}`;try{const p=await(await fetch(t)).json();this.stations.push(...p),this.filteredStations=this.stations}catch(i){console.error("Ошибка загрузки радиостанций:",i)}finally{this.loading=!1}},filterStations(){this.filteredStations=this.stations.filter(t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase()))},addToFavorites(){this.isFavorite(this.selectedStation)?console.log("Станция уже в избранных"):(this.favorites.push(this.selectedStation),localStorage.setItem("favorites",JSON.stringify(this.favorites)),console.log("Станция добавлена в избранное"))},isFavorite(t){return this.favorites.some(i=>i.stationuuid===t.stationuuid)},removeFromFavorites(t){this.playingStation&&this.playingStation.stationuuid===t.stationuuid&&(this.playingStation=null),this.favorites=this.favorites.filter(i=>i.stationuuid!==t.stationuuid),localStorage.setItem("favorites",JSON.stringify(this.favorites))},loadMoreStations(){this.offset+=1e3,this.fetchRadioStations()},loadFavorites(){const t=localStorage.getItem("favorites");t&&(this.favorites=JSON.parse(t))}},watch:{searchQuery(){this.filterStations()}},mounted(){this.fetchRadioStations(),this.loadFavorites()}},n=t=>(g("data-v-b5f32286"),t=t(),b(),t),F=n(()=>o("br",null,null,-1)),x=n(()=>o("br",null,null,-1)),C=n(()=>o("br",null,null,-1)),N=n(()=>o("br",null,null,-1)),I=n(()=>o("br",null,null,-1)),M=n(()=>o("br",null,null,-1)),V={class:"radio-player container text-white"},B={class:"dropdown my-3"},L={class:"btn btn-danger4 dropdown-toggle station-button text-white",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false"},Q={key:0},T={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},J=["onClick"],j={key:0,class:"text-white"},O={class:"text-white-50"},R={class:"text-info"},U=["src"],D={key:1,class:"spinner-border text-primary",role:"status"},E=n(()=>o("span",{class:"visually-hidden"},"Loading...",-1)),G=[E],P={key:2},q={key:3,class:"favorites-section"},z=["onClick"],A=["onClick"],H=n(()=>o("br",null,null,-1)),K=n(()=>o("br",null,null,-1)),W=n(()=>o("br",null,null,-1)),X=n(()=>o("br",null,null,-1));function Y(t,i,p,Z,e,d){const m=v("v-text-field");return r(),a(h,null,[F,x,C,N,I,M,o("div",V,[_(m,{variant:"underlined",modelValue:e.searchQuery,"onUpdate:modelValue":i[0]||(i[0]=s=>e.searchQuery=s),type:"text",label:t.$t("searchForStation"),placeholder:t.$t("enterStationName")},null,8,["modelValue","label","placeholder"]),o("div",B,[o("button",L,l(e.selectedStation?e.selectedStation.name:t.$t("selectedStation")),1),e.stations.length>0&&!e.loading?(r(),a("div",Q,[o("button",{class:"btn btn-danger4 text-white",onClick:i[1]||(i[1]=(...s)=>d.loadMoreStations&&d.loadMoreStations(...s))},l(t.$t("loadMoreStations")),1)])):c("",!0),o("ul",T,[(r(!0),a(h,null,f(e.filteredStations,(s,u)=>(r(),a("li",{style:{"max-width":"250px"},key:u,class:"dropdown-item fw-bold text-white",onClick:$=>d.selectStation(s)},l(s.name),9,J))),128))])]),e.playingStation?(r(),a("div",j,[o("h4",O,l(e.playingStation.name),1),o("p",R,l(e.playingStation.country)+" | "+l(e.playingStation.language),1),o("audio",{ref:"audioPlayer",controls:"",src:e.playingStation.url_resolved,autoplay:""},null,8,U),o("button",{class:"btn btn-danger4 mt-2 text-white",onClick:i[2]||(i[2]=(...s)=>d.addToFavorites&&d.addToFavorites(...s))},l(t.$t("addToFavorites")),1)])):c("",!0),e.loading?(r(),a("div",D,G)):c("",!0),!e.loading&&e.stations.length===0?(r(),a("div",P,[o("p",null,l(t.$t("No stations available")),1)])):c("",!0),e.favorites.length>0?(r(),a("div",q,[o("ul",null,[(r(!0),a(h,null,f(e.favorites,s=>(r(),a("li",{key:s.stationuuid,onClick:u=>d.playFavoriteStation(s),class:"favorite-station text-white-50"},[S(l(s.name)+" ",1),o("button",{class:"btn btn-sm fw-bold",onClick:y(u=>d.removeFromFavorites(s),["stop"]),style:{"background-color":"red",color:"white"}},l(t.$t("remove")),9,A)],8,z))),128))])])):c("",!0),H,K,W,X])],64)}const Ft=w(k,[["render",Y],["__scopeId","data-v-b5f32286"]]);export{Ft as default};