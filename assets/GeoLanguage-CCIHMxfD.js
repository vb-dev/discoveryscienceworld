import{_ as a}from"./index-CtPcEAMt.js";import{e as n,f as i}from"./@vue-YabPxuRK.js";import"./pinia-fCP3To2e.js";import"./axios-C8DqakIB.js";import"./vue-i18n-BhdDuxnn.js";import"./@intlify-YGwFW6EB.js";import"./vue-router-Cn2cbo7y.js";import"./firebase-BvARmSDE.js";import"./@firebase-Cy9aZb5H.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";import"./vue-cookies-oMoGE7eu.js";import"./classnames-CVOySMdS.js";/* empty css             */import"./@vuepic-eWYv40QC.js";import"./date-fns-C7_rVUPb.js";import"./vuetify-C0TwpWGb.js";import"./@tonconnect-hpcNXwwh.js";import"./tweetnacl-util-2xfJoBJT.js";import"./tweetnacl-B8ikFTel.js";import"./ua-parser-js-BKpq8BhR.js";import"./deepmerge-D8huMqX6.js";import"./vue-lazyload-B9ZhgbaI.js";const s={name:"GeoLanguage",mounted(){this.detectLanguage()},methods:{async detectLanguage(){try{const o=await(await fetch("https://ipapi.co/json/")).json();console.log(`Страна: ${o.country_name}, Код страны: ${o.country_code}`);const t=o.country_code,e={RU:"ru",SA:"ar",CN:"zh-CN",DE:"de",ES:"es",FR:"fr",IN:"hi",IT:"it",JP:"ja",KR:"ko",NL:"nl",PL:"pl",PT:"pt",TR:"tr",UA:"ua",GB:"en",US:"en"};e[t]?(console.log(`Устанавливаю язык: ${e[t]}`),this.$i18n.locale=e[t]):this.setDefaultLanguage()}catch(r){console.error("Ошибка при определении местоположения по IP:",r),this.setDefaultLanguage()}},setDefaultLanguage(){console.log("Устанавливаю язык по умолчанию: en"),this.$i18n.locale="en"}}};function p(r,o,t,e,c,m){return n(),i("div")}const T=a(s,[["render",p]]);export{T as default};
