import{a2 as a,a5 as e,y as v,Z as l,a8 as c,F as h,a6 as f,$ as m,a1 as r,W as S,Y as y,a3 as g,a4 as b}from"./@vue-ChGo5w3C.js";import{_ as w}from"./index-fGnMyK-4.js";import"./pinia-BA2ma1PH.js";import"./axios-C8DqakIB.js";import"./vue-i18n-CFS_FaRd.js";import"./@intlify-Du3kGuGm.js";import"./vue-router-BsIn1iu0.js";import"./vue-cookies-oMoGE7eu.js";import"./classnames-CVOySMdS.js";/* empty css                */import"./vuetify-C3wLBvbz.js";const k={data(){return{playingStation:null,stations:[],filteredStations:[],selectedStation:null,loading:!0,offset:0,searchQuery:"",favorites:[]}},methods:{selectStation(t){this.selectedStation=t,this.playingStation=t},playFavoriteStation(t){this.playingStation=t},async fetchRadioStations(){this.loading=!0;const t=`https://de1.api.radio-browser.info/json/stations/topclick/1000?offset=${this.offset}`;try{const p=await(await fetch(t)).json();this.stations.push(...p),this.filteredStations=this.stations}catch(s){console.error("Ошибка загрузки радиостанций:",s)}finally{this.loading=!1}},filterStations(){this.filteredStations=this.stations.filter(t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase()))},addToFavorites(){this.isFavorite(this.selectedStation)?console.log("Станция уже в избранных"):(this.favorites.push(this.selectedStation),localStorage.setItem("favorites",JSON.stringify(this.favorites)),console.log("Станция добавлена в избранное"))},isFavorite(t){return this.favorites.some(s=>s.stationuuid===t.stationuuid)},removeFromFavorites(t){this.playingStation&&this.playingStation.stationuuid===t.stationuuid&&(this.playingStation=null),this.favorites=this.favorites.filter(s=>s.stationuuid!==t.stationuuid),localStorage.setItem("favorites",JSON.stringify(this.favorites))},loadMoreStations(){this.offset+=1e3,this.fetchRadioStations()},loadFavorites(){const t=localStorage.getItem("favorites");t&&(this.favorites=JSON.parse(t))}},watch:{searchQuery(){this.filterStations()}},mounted(){this.fetchRadioStations(),this.loadFavorites()}},n=t=>(g("data-v-3da220c0"),t=t(),b(),t),F=n(()=>e("br",null,null,-1)),C=n(()=>e("br",null,null,-1)),x=n(()=>e("br",null,null,-1)),N=n(()=>e("br",null,null,-1)),I=n(()=>e("br",null,null,-1)),M=n(()=>e("br",null,null,-1)),V={class:"radio-player container text-white"},B={class:"dropdown my-3"},Q={class:"btn btn-danger1 dropdown-toggle station-button text-white",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false"},T={key:0},L={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},J=["onClick"],O={key:0,class:"text-white"},R={class:"text-white-50"},j={class:"text-info"},U=["src"],D={key:1,class:"spinner-border text-primary",role:"status"},E=n(()=>e("span",{class:"visually-hidden"},"Loading...",-1)),P=[E],W={key:2},Y={key:3,class:"favorites-section"},Z=["onClick"],q=["onClick"],z=n(()=>e("br",null,null,-1)),A=n(()=>e("br",null,null,-1)),G=n(()=>e("br",null,null,-1)),H=n(()=>e("br",null,null,-1));function K(t,s,p,X,o,d){const _=m("v-text-field");return r(),a(h,null,[F,C,x,N,I,M,e("div",V,[v(_,{variant:"underlined",modelValue:o.searchQuery,"onUpdate:modelValue":s[0]||(s[0]=i=>o.searchQuery=i),type:"text",label:t.$t("searchForStation"),placeholder:t.$t("enterStationName")},null,8,["modelValue","label","placeholder"]),e("div",B,[e("button",Q,l(o.selectedStation?o.selectedStation.name:t.$t("selectedStation")),1),o.stations.length>0&&!o.loading?(r(),a("div",T,[e("button",{class:"btn btn-danger1",onClick:s[1]||(s[1]=(...i)=>d.loadMoreStations&&d.loadMoreStations(...i))},l(t.$t("loadMoreStations")),1)])):c("",!0),e("ul",L,[(r(!0),a(h,null,f(o.filteredStations,(i,u)=>(r(),a("li",{style:{"max-width":"250px"},key:u,class:"dropdown-item fw-bold",onClick:$=>d.selectStation(i)},l(i.name),9,J))),128))])]),o.playingStation?(r(),a("div",O,[e("h4",R,l(o.playingStation.name),1),e("p",j,l(o.playingStation.country)+" | "+l(o.playingStation.language),1),e("audio",{ref:"audioPlayer",controls:"",src:o.playingStation.url_resolved,autoplay:""},null,8,U),e("button",{class:"btn btn-danger1 mt-2",onClick:s[2]||(s[2]=(...i)=>d.addToFavorites&&d.addToFavorites(...i))},l(t.$t("addToFavorites")),1)])):c("",!0),o.loading?(r(),a("div",D,P)):c("",!0),!o.loading&&o.stations.length===0?(r(),a("div",W,[e("p",null,l(t.$t("No stations available")),1)])):c("",!0),o.favorites.length>0?(r(),a("div",Y,[e("ul",null,[(r(!0),a(h,null,f(o.favorites,i=>(r(),a("li",{key:i.stationuuid,onClick:u=>d.playFavoriteStation(i),class:"favorite-station text-white-50"},[S(l(i.name)+" ",1),e("button",{class:"btn btn-sm fw-bold",onClick:y(u=>d.removeFromFavorites(i),["stop"]),style:{"background-color":"red",color:"white"}},l(t.$t("remove")),9,q)],8,Z))),128))])])):c("",!0),z,A,G,H])],64)}const ut=w(k,[["render",K],["__scopeId","data-v-3da220c0"]]);export{ut as default};
