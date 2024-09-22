import{g as h}from"./classnames-CVOySMdS.js";var u={exports:{}};(function(g,l){(function(){var n={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax",partitioned:""},d={install:function(t,e){e&&this.config(e.expires,e.path,e.domain,e.secure,e.sameSite,e.partitioned),t.prototype&&(t.prototype.$cookies=this),t.config&&t.config.globalProperties&&(t.config.globalProperties.$cookies=this,t.provide("$cookies",this)),t.$cookies=this},config:function(t,e,o,s,r,c){n.expires=t||"1d",n.path=e?"; path="+e:"; path=/",n.domain=o?"; domain="+o:"",n.secure=s?"; Secure":"",n.sameSite=r?"; SameSite="+r:"; SameSite=Lax",n.partitioned=c?"; Partitioned":""},get:function(t){var e=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(e&&(e.substring(0,1)==="{"&&e.substring(e.length-1,e.length)==="}"||e.substring(0,1)==="["&&e.substring(e.length-1,e.length)==="]"))try{e=JSON.parse(e)}catch{return e}return e},set:function(t,e,o,s,r,c,m,f){if(t){if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(t))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: '+t)}else throw new Error("Cookie name is not found in the first argument.");e&&typeof e=="object"&&(e=JSON.stringify(e));var a="";if(o=o===void 0?n.expires:o,o&&o!==0)switch(o.constructor){case Number:o===1/0||o===-1?a="; expires=Fri, 31 Dec 9999 23:59:59 GMT":a="; max-age="+o;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(o)){var i=o.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(o.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":a="; max-age="+ +i*2592e3;break;case"d":a="; max-age="+ +i*86400;break;case"h":a="; max-age="+ +i*3600;break;case"min":a="; max-age="+ +i*60;break;case"s":a="; max-age="+i;break;case"y":a="; max-age="+ +i*31104e3;break}}else a="; expires="+o;break;case Date:a="; expires="+o.toUTCString();break}return document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+a+(r?"; domain="+r:n.domain)+(s?"; path="+s:n.path)+(c===void 0?n.secure:c?"; Secure":"")+(m===void 0?n.sameSite:m?"; SameSite="+m:"")+(f===void 0?n.partitioned:f?"; Partitioned":""),this},remove:function(t,e,o){return!t||!this.isKey(t)?!1:(document.cookie=encodeURIComponent(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(o?"; domain="+o:n.domain)+(e?"; path="+e:n.path)+"; SameSite=Lax",!0)},isKey:function(t){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var t=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),e=0;e<t.length;e++)t[e]=decodeURIComponent(t[e]);return t}};g.exports=d,typeof window<"u"&&(window.$cookies=d)})()})(u);var p=u.exports;const S=h(p);export{S as V};