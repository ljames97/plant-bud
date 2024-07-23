(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Po="/Plant-Care-Assistant-App/assets/add-DfPL7aol.png",Uf="/Plant-Care-Assistant-App/assets/home-CrrGhyeF.png",Ff="/Plant-Care-Assistant-App/assets/plant-BhAigKyc.png",Bf="/Plant-Care-Assistant-App/assets/quiz-_3H2ladB.png",qf="/Plant-Care-Assistant-App/assets/search-BxN_USk1.png",Hf="/Plant-Care-Assistant-App/assets/add-DsYdsqZN.png",zf="/Plant-Care-Assistant-App/assets/home-C9ONuVPF.png",jf="/Plant-Care-Assistant-App/assets/plant-aWTnh3ZP.png",$f="/Plant-Care-Assistant-App/assets/quiz-6MWY4zf-.png",Gf="/Plant-Care-Assistant-App/assets/search-BdxZNR9F.png",Wf="/Plant-Care-Assistant-App/assets/home-page-logo-B0yGqkh6.png",ru="/Plant-Care-Assistant-App/assets/add-icon-1-BYRDZxIr.png",Kf="/Plant-Care-Assistant-App/assets/added-icon-CKuvKSNF.png",su="/Plant-Care-Assistant-App/assets/back-button-light-CJkLvN3c.png",Qf="/Plant-Care-Assistant-App/assets/pin-icon-Bs6cdHuO.png",Yf="/Plant-Care-Assistant-App/assets/water-icon-BQQQoVQU.png",Xf="/Plant-Care-Assistant-App/assets/plant-aWTnh3ZP.png",Jf="/Plant-Care-Assistant-App/assets/archive-icon-BZQVfEXH.png",Zf="/Plant-Care-Assistant-App/assets/african-violet-B0hxxcN3.png",eg="/Plant-Care-Assistant-App/assets/aloe-vera-U4W8i-Jp.png",tg="/Plant-Care-Assistant-App/assets/anthurium-CpXDosPt.png",ng="/Plant-Care-Assistant-App/assets/bamboo-DuAL3g9n.png",rg="/Plant-Care-Assistant-App/assets/bird-of-paradise-BOmBPcnn.png",sg="/Plant-Care-Assistant-App/assets/boston-fern-BU9zAjxC.png",ig="/Plant-Care-Assistant-App/assets/bromeliad-BbAI_8yU.png",og="/Plant-Care-Assistant-App/assets/cactus-DCz3CvUo.png",ag="/Plant-Care-Assistant-App/assets/calathea-Bx6j9681.png",cg="/Plant-Care-Assistant-App/assets/chinese-money-plant-DhWD7-8G.png",lg="/Plant-Care-Assistant-App/assets/croton-BOp_y_78.png",ug="/Plant-Care-Assistant-App/assets/dieffenbachia-59qx3PYE.png",hg="/Plant-Care-Assistant-App/assets/dracaena-OyBDm4Ss.png",dg="/Plant-Care-Assistant-App/assets/fern-D4LlwWGC.png",fg="/Plant-Care-Assistant-App/assets/ficus-DXkrMvSE.png",gg="/Plant-Care-Assistant-App/assets/fiddle-leaf-fig-xI4cbIfl.png",pg="/Plant-Care-Assistant-App/assets/hoya-CusHqMC9.png",mg="/Plant-Care-Assistant-App/assets/jade-plant-Cfiosnlr.png",_g="/Plant-Care-Assistant-App/assets/kentia-palm-DPPRNYZe.png",yg="/Plant-Care-Assistant-App/assets/lavender-W-a3e19-.png",vg="/Plant-Care-Assistant-App/assets/monstera-deliciosa-293s8IRR.png",Eg="/Plant-Care-Assistant-App/assets/nerve-plant-RBnGwML5.png",wg="/Plant-Care-Assistant-App/assets/orchid-keM-4CE_.png",Tg="/Plant-Care-Assistant-App/assets/parlor-palm-DED4BNLa.png",iu="/Plant-Care-Assistant-App/assets/peace-lily-CuBEKGqN.png",Ig="/Plant-Care-Assistant-App/assets/peperomia-Blrwcth3.png",Ag="/Plant-Care-Assistant-App/assets/philodendron-BoPf5H8H.png",bg="/Plant-Care-Assistant-App/assets/pothos-C4fHzRj8.png",Pg="/Plant-Care-Assistant-App/assets/rubber-plant-DSkM_Yz-.png",Cg="/Plant-Care-Assistant-App/assets/schefflera-wb16-0Zg.png",ou="/Plant-Care-Assistant-App/assets/snake-plant-DJGLD-N1.png",Rg="/Plant-Care-Assistant-App/assets/spider-plant-WoHmcTbs.png",kg="/Plant-Care-Assistant-App/assets/succulents-DTaV7_1e.png",Sg="/Plant-Care-Assistant-App/assets/swiss-cheese-plant-DaQ3ZNbv.png",Ng="/Plant-Care-Assistant-App/assets/yucca-BCvyT1S_.png",Lg="/Plant-Care-Assistant-App/assets/zz-plant-Bd3EHTn2.png",au="/Plant-Care-Assistant-App/assets/clear-DQryCYwf.png",Sc="/Plant-Care-Assistant-App/assets/clouds-BRn0qWmu.png",Dg="/Plant-Care-Assistant-App/assets/drizzle-BfWf7GzK.png",Og="/Plant-Care-Assistant-App/assets/rain-BkDgNj6i.png",Vg="/Plant-Care-Assistant-App/assets/snow-DXgc5BjK.png",Mg="/Plant-Care-Assistant-App/assets/thunderstorm-t4C48DOr.png",xg="/Plant-Care-Assistant-App/assets/moon-QzjZNXra.png",cn=(n,e)=>n.filter(r=>r.id!==e),$e=(n,e)=>n.find(r=>r.id===e),Tr=(n,...e)=>{e.forEach(t=>{n.contains(t)&&n.removeChild(t)})},R=(n,...e)=>{e.forEach(t=>{t&&n.appendChild(t)})},Jt=(...n)=>{n.forEach(e=>{e&&(e.classList.add("hidden"),e.classList.remove("flex"))})},cu=(n,...e)=>{e.forEach(t=>{t&&(t.style.display=`${n}`)})},Ug=(n,e)=>{let t=n.slice(0),r=n.length,s,i;for(;r--;)i=Math.floor((r+1)*Math.random()),s=t[i],t[i]=t[r],t[r]=s;return t.slice(0,e)},Fg=()=>{const n=new Date,e=String(n.getDate()).padStart(2,"0"),t=String(n.getMonth()+1).padStart(2,"0"),r=n.getFullYear();return e+"/"+t+"/"+r},Bg=async()=>new Promise((n,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{const{latitude:r,longitude:s}=t.coords;n({latitude:r,longitude:s})},t=>{e(t)}):e(new Error("Geolocation is not supported by this browser."))}),qg=n=>Math.round(n),Hg=n=>n instanceof File,_=({tagName:n="",placeholder:e="",textContent:t="",classEl:r=[],id:s="",value:i="",type:a="",fr:c="",dataAttributes:u={},ariaLabel:d="",alt:f=""})=>{const p=document.createElement(n);return e&&(p.placeholder=e),t&&(p.textContent=t),r&&r.forEach(E=>p.classList.add(E)),s&&(p.id=s),i&&(p.value=i),a&&(p.type=a),c&&(p.htmlFor=c),d&&p.setAttribute("aria-label",d),n==="img"&&f&&(p.alt=f),Object.keys(u).forEach(E=>{p.setAttribute(`data-${E}`,u[E])}),p},Ir=()=>{let n="";const e=_({tagName:"div",classEl:["menu-dots-container"]});return n=_({tagName:"div",classEl:["menu-dot"]}),R(e,n),n=_({tagName:"div",classEl:["menu-dot"]}),R(e,n),n=_({tagName:"div",classEl:["menu-dot"]}),R(e,n),e},Yi=n=>{const e=_({tagName:"div",classEl:["added-to-plants-icon","back-button"]}),t=_({tagName:"img"}),r=n==="ADDED"?Kf:Jf;return t.src=r,R(e,t),e};var Nc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},zg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},uu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let E=(c&15)<<2|d>>6,P=d&63;u||(P=64,a||(E=64)),r.push(t[f],t[p],t[E],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(lu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||p==null)throw new jg;const E=i<<2|c>>4;if(r.push(E),d!==64){const P=c<<4&240|d>>2;if(r.push(P),p!==64){const N=d<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $g=function(n){const e=lu(n);return uu.encodeByteArray(e,!0)},ws=function(n){return $g(n).replace(/\./g,"")},hu=function(n){try{return uu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=()=>Gg().__FIREBASE_DEFAULTS__,Kg=()=>{if(typeof process>"u"||typeof Nc>"u")return;const n=Nc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hu(n[1]);return e&&JSON.parse(e)},Bs=()=>{try{return Wg()||Kg()||Qg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},du=n=>{var e,t;return(t=(e=Bs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},fu=n=>{const e=du(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},gu=()=>{var n;return(n=Bs())===null||n===void 0?void 0:n.config},pu=n=>{var e;return(e=Bs())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ws(JSON.stringify(t)),ws(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Jg(){var n;const e=(n=Bs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ep(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tp(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function np(){return!Jg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rp(){try{return typeof indexedDB=="object"}catch{return!1}}function sp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="FirebaseError";class Ze extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ip,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?op(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ze(s,c,r)}}function op(n,e){return n.replace(ap,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ap=/\{\$([^}]+)}/g;function cp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ts(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Lc(i)&&Lc(a)){if(!Ts(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Lc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function nr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function lp(n,e){const t=new up(n,e);return t.subscribe.bind(t)}class up{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");hp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=xi),s.error===void 0&&(s.error=xi),s.complete===void 0&&(s.complete=xi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n){return n&&n._delegate?n._delegate:n}class Rt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Yg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gp(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fp(n){return n===Ut?void 0:n}function gp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const mp={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},_p=K.INFO,yp={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},vp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=yp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Co{constructor(e){this.name=e,this._logLevel=_p,this._logHandler=vp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const Ep=(n,e)=>e.some(t=>n instanceof t);let Dc,Oc;function wp(){return Dc||(Dc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tp(){return Oc||(Oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _u=new WeakMap,Xi=new WeakMap,yu=new WeakMap,Ui=new WeakMap,Ro=new WeakMap;function Ip(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(At(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&_u.set(t,n)}).catch(()=>{}),Ro.set(e,n),e}function Ap(n){if(Xi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Xi.set(n,e)}let Ji={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return At(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bp(n){Ji=n(Ji)}function Pp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Fi(this),e,...t);return yu.set(r,e.sort?e.sort():[e]),At(r)}:Tp().includes(n)?function(...e){return n.apply(Fi(this),e),At(_u.get(this))}:function(...e){return At(n.apply(Fi(this),e))}}function Cp(n){return typeof n=="function"?Pp(n):(n instanceof IDBTransaction&&Ap(n),Ep(n,wp())?new Proxy(n,Ji):n)}function At(n){if(n instanceof IDBRequest)return Ip(n);if(Ui.has(n))return Ui.get(n);const e=Cp(n);return e!==n&&(Ui.set(n,e),Ro.set(e,n)),e}const Fi=n=>Ro.get(n);function Rp(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=At(a);return r&&a.addEventListener("upgradeneeded",u=>{r(At(a.result),u.oldVersion,u.newVersion,At(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const kp=["get","getKey","getAll","getAllKeys","count"],Sp=["put","add","delete","clear"],Bi=new Map;function Vc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bi.get(e))return Bi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Sp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kp.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return Bi.set(e,i),i}bp(n=>({...n,get:(e,t,r)=>Vc(e,t)||n.get(e,t,r),has:(e,t)=>!!Vc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Lp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zi="@firebase/app",Mc="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Co("@firebase/app"),Dp="@firebase/app-compat",Op="@firebase/analytics-compat",Vp="@firebase/analytics",Mp="@firebase/app-check-compat",xp="@firebase/app-check",Up="@firebase/auth",Fp="@firebase/auth-compat",Bp="@firebase/database",qp="@firebase/database-compat",Hp="@firebase/functions",zp="@firebase/functions-compat",jp="@firebase/installations",$p="@firebase/installations-compat",Gp="@firebase/messaging",Wp="@firebase/messaging-compat",Kp="@firebase/performance",Qp="@firebase/performance-compat",Yp="@firebase/remote-config",Xp="@firebase/remote-config-compat",Jp="@firebase/storage",Zp="@firebase/storage-compat",em="@firebase/firestore",tm="@firebase/vertexai-preview",nm="@firebase/firestore-compat",rm="firebase",sm="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="[DEFAULT]",im={[Zi]:"fire-core",[Dp]:"fire-core-compat",[Vp]:"fire-analytics",[Op]:"fire-analytics-compat",[xp]:"fire-app-check",[Mp]:"fire-app-check-compat",[Up]:"fire-auth",[Fp]:"fire-auth-compat",[Bp]:"fire-rtdb",[qp]:"fire-rtdb-compat",[Hp]:"fire-fn",[zp]:"fire-fn-compat",[jp]:"fire-iid",[$p]:"fire-iid-compat",[Gp]:"fire-fcm",[Wp]:"fire-fcm-compat",[Kp]:"fire-perf",[Qp]:"fire-perf-compat",[Yp]:"fire-rc",[Xp]:"fire-rc-compat",[Jp]:"fire-gcs",[Zp]:"fire-gcs-compat",[em]:"fire-fst",[nm]:"fire-fst-compat",[tm]:"fire-vertex","fire-js":"fire-js",[rm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Map,om=new Map,to=new Map;function xc(n,e){try{n.container.addComponent(e)}catch(t){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function jt(n){const e=n.name;if(to.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;to.set(e,n);for(const t of Is.values())xc(t,n);for(const t of om.values())xc(t,n);return!0}function qs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Tt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bt=new Ar("app","Firebase",am);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=sm;function vu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw bt.create("bad-app-name",{appName:String(s)});if(t||(t=gu()),!t)throw bt.create("no-options");const i=Is.get(s);if(i){if(Ts(t,i.options)&&Ts(r,i.config))return i;throw bt.create("duplicate-app",{appName:s})}const a=new pp(s);for(const u of to.values())a.addComponent(u);const c=new cm(t,r,a);return Is.set(s,c),c}function ko(n=eo){const e=Is.get(n);if(!e&&n===eo&&gu())return vu();if(!e)throw bt.create("no-app",{appName:n});return e}function We(n,e,t){var r;let s=(r=im[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(c.join(" "));return}jt(new Rt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="firebase-heartbeat-database",um=1,dr="firebase-heartbeat-store";let qi=null;function Eu(){return qi||(qi=Rp(lm,um,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(dr)}catch(t){console.warn(t)}}}}).catch(n=>{throw bt.create("idb-open",{originalErrorMessage:n.message})})),qi}async function hm(n){try{const t=(await Eu()).transaction(dr),r=await t.objectStore(dr).get(wu(n));return await t.done,r}catch(e){if(e instanceof Ze)zt.warn(e.message);else{const t=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(t.message)}}}async function Uc(n,e){try{const r=(await Eu()).transaction(dr,"readwrite");await r.objectStore(dr).put(e,wu(n)),await r.done}catch(t){if(t instanceof Ze)zt.warn(t.message);else{const r=bt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});zt.warn(r.message)}}}function wu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=1024,fm=30*24*60*60*1e3;class gm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=fm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fc(),{heartbeatsToSend:r,unsentEntries:s}=pm(this._heartbeatsCache.heartbeats),i=ws(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fc(){return new Date().toISOString().substring(0,10)}function pm(n,e=dm){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Bc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Bc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class mm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rp()?sp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bc(n){return ws(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(n){jt(new Rt("platform-logger",e=>new Np(e),"PRIVATE")),jt(new Rt("heartbeat",e=>new gm(e),"PRIVATE")),We(Zi,Mc,n),We(Zi,Mc,"esm2017"),We("fire-js","")}_m("");function So(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Tu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ym=Tu,Iu=new Ar("auth","Firebase",Tu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Co("@firebase/auth");function vm(n,...e){As.logLevel<=K.WARN&&As.warn(`Auth (${Zt}): ${n}`,...e)}function ds(n,...e){As.logLevel<=K.ERROR&&As.error(`Auth (${Zt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(n,...e){throw No(n,...e)}function Ke(n,...e){return No(n,...e)}function Au(n,e,t){const r=Object.assign(Object.assign({},ym()),{[e]:t});return new Ar("auth","Firebase",r).create(e,{appName:n.name})}function Bt(n){return Au(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function No(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Iu.create(n,...e)}function F(n,e,...t){if(!n)throw No(e,...t)}function rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ds(e),new Error(e)}function ot(n,e){n||rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Em(){return qc()==="http:"||qc()==="https:"}function qc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Em()||Zg()||"connection"in navigator)?navigator.onLine:!0}function Tm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ot(t>e,"Short delay should be less than long delay!"),this.isMobile=Xg()||ep()}get(){return wm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n,e){ot(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=new Pr(3e4,6e4);function en(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Lt(n,e,t,r,s={}){return Pu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=br(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),bu.fetch()(Cu(n,n.config.apiHost,t,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},i))})}async function Pu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Im),e);try{const s=new Pm(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw rs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw rs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw rs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw rs(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Au(n,f,d);ze(n,f)}}catch(s){if(s instanceof Ze)throw s;ze(n,"network-request-failed",{message:String(s)})}}async function Hs(n,e,t,r,s={}){const i=await Lt(n,e,t,r,s);return"mfaPendingCredential"in i&&ze(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Cu(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Lo(n.config,s):`${n.config.apiScheme}://${s}`}function bm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),Am.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ke(n,e,r);return s.customData._tokenResponse=t,s}function Hc(n){return n!==void 0&&n.enterprise!==void 0}class Cm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return bm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Rm(n,e){return Lt(n,"GET","/v2/recaptchaConfig",en(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(n,e){return Lt(n,"POST","/v1/accounts:delete",e)}async function Ru(n,e){return Lt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sm(n,e=!1){const t=ie(n),r=await t.getIdToken(e),s=Do(r);F(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:or(Hi(s.auth_time)),issuedAtTime:or(Hi(s.iat)),expirationTime:or(Hi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hi(n){return Number(n)*1e3}function Do(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ds("JWT malformed, contained fewer than 3 sections"),null;try{const s=hu(t);return s?JSON.parse(s):(ds("Failed to decode base64 JWT payload"),null)}catch(s){return ds("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zc(n){const e=Do(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ze&&Nm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Nm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=or(this.lastLoginAt),this.creationTime=or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(n){var e;const t=n.auth,r=await n.getIdToken(),s=await fr(n,Ru(t,{idToken:r}));F(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ku(i.providerUserInfo):[],c=Om(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=u?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ro(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function Dm(n){const e=ie(n);await bs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Om(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ku(n){return n.map(e=>{var{providerId:t}=e,r=So(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(n,e){const t=await Pu(n,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Cu(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",bu.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Mm(n,e){return Lt(n,"POST","/v2/accounts:revokeToken",en(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=zc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Vm(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new fn;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fn,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class st{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=So(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ro(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await fr(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sm(this,e)}reload(){return Dm(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await bs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(Bt(this.auth));const e=await this.getIdToken();return await fr(this,km(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(s=t.email)!==null&&s!==void 0?s:void 0,P=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,L=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,z=(d=t.createdAt)!==null&&d!==void 0?d:void 0,j=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:G,isAnonymous:oe,providerData:ne,stsTokenManager:T}=t;F(q&&T,e,"internal-error");const m=fn.fromJSON(this.name,T);F(typeof q=="string",e,"internal-error"),pt(p,e.name),pt(E,e.name),F(typeof G=="boolean",e,"internal-error"),F(typeof oe=="boolean",e,"internal-error"),pt(P,e.name),pt(N,e.name),pt(V,e.name),pt(L,e.name),pt(z,e.name),pt(j,e.name);const v=new st({uid:q,auth:e,email:E,emailVerified:G,displayName:p,isAnonymous:oe,photoURL:N,phoneNumber:P,tenantId:V,stsTokenManager:m,createdAt:z,lastLoginAt:j});return ne&&Array.isArray(ne)&&(v.providerData=ne.map(w=>Object.assign({},w))),L&&(v._redirectEventId=L),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new fn;s.updateFromServerResponse(t);const i=new st({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await bs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ku(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new fn;c.updateFromIdToken(r);const u=new st({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ro(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new Map;function it(n){ot(n instanceof Function,"Expected a class definition");let e=jc.get(n);return e?(ot(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Su.type="NONE";const $c=Su;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n,e,t){return`firebase:${n}:${e}:${t}`}class gn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fs(this.userKey,s.apiKey,i),this.fullPersistenceKey=fs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new gn(it($c),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||it($c);const a=fs(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){const p=st._fromJSON(e,f);d!==i&&(c=p),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new gn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new gn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Du(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vu(e))return"Blackberry";if(Mu(e))return"Webos";if(Oo(e))return"Safari";if((e.includes("chrome/")||Lu(e))&&!e.includes("edge/"))return"Chrome";if(Ou(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nu(n=we()){return/firefox\//i.test(n)}function Oo(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lu(n=we()){return/crios\//i.test(n)}function Du(n=we()){return/iemobile/i.test(n)}function Ou(n=we()){return/android/i.test(n)}function Vu(n=we()){return/blackberry/i.test(n)}function Mu(n=we()){return/webos/i.test(n)}function zs(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xm(n=we()){var e;return zs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Um(){return tp()&&document.documentMode===10}function xu(n=we()){return zs(n)||Ou(n)||Mu(n)||Vu(n)||/windows phone/i.test(n)||Du(n)}function Fm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(n,e=[]){let t;switch(n){case"Browser":t=Gc(we());break;case"Worker":t=`${Gc(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(n,e={}){return Lt(n,"GET","/v2/passwordPolicy",en(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=6;class zm{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Hm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wc(this),this.idTokenSubscription=new Wc(this),this.beforeStateQueue=new Bm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=it(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await gn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ru(this,{idToken:e}),r=await st._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(Bt(this));const t=e?ie(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(Bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(Bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qm(this),t=new zm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&it(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await gn.create(this,[it(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function js(n){return ie(n)}class Wc{constructor(e){this.auth=e,this.observer=null,this.addObserver=lp(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $m(n){$s=n}function Fu(n){return $s.loadJS(n)}function Gm(){return $s.recaptchaEnterpriseScript}function Wm(){return $s.gapiScript}function Km(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Qm="recaptcha-enterprise",Ym="NO_RECAPTCHA";class Xm{constructor(e){this.type=Qm,this.auth=js(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Rm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Cm(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Hc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Ym)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Hc(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Gm();u.length!==0&&(u+=c),Fu(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Kc(n,e,t,r=!1){const s=new Xm(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Qc(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Kc(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Kc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(n,e){const t=qs(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ts(i,e??{}))return s;ze(s,"already-initialized")}return t.initialize({options:e})}function Zm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(it);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function e_(n,e,t){const r=js(n);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Bu(e),{host:a,port:c}=t_(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),n_()}function Bu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function t_(n){const e=Bu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Yc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Yc(a)}}}function Yc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function n_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,t){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}async function r_(n,e){return Lt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(n,e){return Hs(n,"POST","/v1/accounts:signInWithPassword",en(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(n,e){return Hs(n,"POST","/v1/accounts:signInWithEmailLink",en(n,e))}async function o_(n,e){return Hs(n,"POST","/v1/accounts:signInWithEmailLink",en(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Vo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new gr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new gr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qc(e,t,"signInWithPassword",s_);case"emailLink":return i_(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qc(e,r,"signUpPassword",r_);case"emailLink":return o_(e,{idToken:t,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(n,e){return Hs(n,"POST","/v1/accounts:signInWithIdp",en(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="http://localhost";class $t extends Vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=So(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new $t(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return pn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,pn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pn(e,t)}buildRequest(){const e={requestUri:a_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=br(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function l_(n){const e=tr(nr(n)).link,t=e?tr(nr(e)).deep_link_id:null,r=tr(nr(n)).deep_link_id;return(r?tr(nr(r)).link:null)||r||t||e||n}class Mo{constructor(e){var t,r,s,i,a,c;const u=tr(nr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=c_((s=u.mode)!==null&&s!==void 0?s:null);F(d&&f&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=f,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=l_(e);try{return new Mo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.providerId=Cn.PROVIDER_ID}static credential(e,t){return gr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Mo.parseLink(t);return F(r,"argument-error"),gr._fromEmailAndCode(e,r.code,r.tenantId)}}Cn.PROVIDER_ID="password";Cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends qu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Cr{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Cr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _t.credential(t,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Cr{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Cr{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vt.credential(t,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await st._fromIdTokenResponse(e,r,s),a=Xc(r);return new vn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Xc(r);return new vn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Xc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends Ze{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ps.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ps(e,t,r,s)}}function Hu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ps._fromErrorAndOperation(n,i,e,r):i})}async function u_(n,e,t=!1){const r=await fr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(n,e,t=!1){const{auth:r}=n;if(Tt(r.app))return Promise.reject(Bt(r));const s="reauthenticate";try{const i=await fr(n,Hu(r,s,e,n),t);F(i.idToken,r,"internal-error");const a=Do(i.idToken);F(a,r,"internal-error");const{sub:c}=a;return F(n.uid===c,r,"user-mismatch"),vn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(n,e,t=!1){if(Tt(n.app))return Promise.reject(Bt(n));const r="signIn",s=await Hu(n,r,e),i=await vn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function d_(n,e){return zu(ie(n),e)}function f_(n,e,t,r){return ie(n).onIdTokenChanged(e,t,r)}function g_(n,e,t){return ie(n).beforeAuthStateChanged(e,t)}function ju(n,e,t,r){return ie(n).onAuthStateChanged(e,t,r)}function p_(n){return ie(n).signOut()}async function m_(n){return ie(n).delete()}const Cs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cs,"1"),this.storage.removeItem(Cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(){const n=we();return Oo(n)||zs(n)}const y_=1e3,v_=10;class Gu extends $u{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=__()&&Fm(),this.fallbackToPolling=xu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Um()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,v_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},y_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gu.type="LOCAL";const E_=Gu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends $u{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wu.type="SESSION";const Ku=Wu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Gs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await w_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=xo("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const E=p;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function I_(n){Qe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function A_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function b_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function P_(){return Qu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="firebaseLocalStorageDb",C_=1,Rs="firebaseLocalStorage",Xu="fbase_key";class Rr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ws(n,e){return n.transaction([Rs],e?"readwrite":"readonly").objectStore(Rs)}function R_(){const n=indexedDB.deleteDatabase(Yu);return new Rr(n).toPromise()}function so(){const n=indexedDB.open(Yu,C_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Rs,{keyPath:Xu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Rs)?e(r):(r.close(),await R_(),e(await so()))})})}async function Jc(n,e,t){const r=Ws(n,!0).put({[Xu]:e,value:t});return new Rr(r).toPromise()}async function k_(n,e){const t=Ws(n,!1).get(e),r=await new Rr(t).toPromise();return r===void 0?null:r.value}function Zc(n,e){const t=Ws(n,!0).delete(e);return new Rr(t).toPromise()}const S_=800,N_=3;class Ju{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await so(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>N_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gs._getInstance(P_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await A_(),!this.activeServiceWorker)return;this.sender=new T_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||b_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await so();return await Jc(e,Cs,"1"),await Zc(e,Cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>k_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ws(s,!1).getAll();return new Rr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ju.type="LOCAL";const L_=Ju;new Pr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(n,e){return e?it(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends Vo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function O_(n){return h_(n.auth,new Uo(n),n.bypassAuthState)}function V_(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),zu(t,new Uo(n),n.bypassAuthState)}async function M_(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),u_(t,new Uo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return O_;case"linkViaPopup":case"linkViaRedirect":return M_;case"reauthViaPopup":case"reauthViaRedirect":return V_;default:ze(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=new Pr(2e3,1e4);class dn extends Zu{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=xo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,x_.get())};e()}}dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="pendingRedirect",gs=new Map;class F_ extends Zu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=gs.get(this.auth._key());if(!e){try{const r=await B_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}gs.set(this.auth._key(),e)}return this.bypassAuthState||gs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B_(n,e){const t=z_(e),r=H_(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function q_(n,e){gs.set(n._key(),e)}function H_(n){return it(n._redirectPersistence)}function z_(n){return fs(U_,n.config.apiKey,n.name)}async function j_(n,e,t=!1){if(Tt(n.app))return Promise.reject(Bt(n));const r=js(n),s=D_(r,e),a=await new F_(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=10*60*1e3;class G_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!W_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!eh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ke(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$_&&this.cachedEventUids.clear(),this.cachedEventUids.has(el(e))}saveEventToCache(e){this.cachedEventUids.add(el(e)),this.lastProcessedEventTime=Date.now()}}function el(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function eh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function W_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(n,e={}){return Lt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y_=/^https?/;async function X_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await K_(n);for(const t of e)try{if(J_(t))return}catch{}ze(n,"unauthorized-domain")}function J_(n){const e=no(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Y_.test(t))return!1;if(Q_.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=new Pr(3e4,6e4);function tl(){const n=Qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ey(n){return new Promise((e,t)=>{var r,s,i;function a(){tl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tl(),t(Ke(n,"network-request-failed"))},timeout:Z_.get()})}if(!((s=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qe().gapi)===null||i===void 0)&&i.load)a();else{const c=Km("iframefcb");return Qe()[c]=()=>{gapi.load?a():t(Ke(n,"network-request-failed"))},Fu(`${Wm()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw ps=null,e})}let ps=null;function ty(n){return ps=ps||ey(n),ps}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=new Pr(5e3,15e3),ry="__/auth/iframe",sy="emulator/auth/iframe",iy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ay(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Lo(e,sy):`https://${n.config.authDomain}/${ry}`,r={apiKey:e.apiKey,appName:n.name,v:Zt},s=oy.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${br(r).slice(1)}`}async function cy(n){const e=await ty(n),t=Qe().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:ay(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ke(n,"network-request-failed"),c=Qe().setTimeout(()=>{i(a)},ny.get());function u(){Qe().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uy=500,hy=600,dy="_blank",fy="http://localhost";class nl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gy(n,e,t,r=uy,s=hy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},ly),{width:r.toString(),height:s.toString(),top:i,left:a}),d=we().toLowerCase();t&&(c=Lu(d)?dy:t),Nu(d)&&(e=e||fy,u.scrollbars="yes");const f=Object.entries(u).reduce((E,[P,N])=>`${E}${P}=${N},`,"");if(xm(d)&&c!=="_self")return py(e||"",c),new nl(null);const p=window.open(e||"",c,f);F(p,n,"popup-blocked");try{p.focus()}catch{}return new nl(p)}function py(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="__/auth/handler",_y="emulator/auth/handler",yy=encodeURIComponent("fac");async function rl(n,e,t,r,s,i){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Zt,eventId:s};if(e instanceof qu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",cp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Cr){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),d=u?`#${yy}=${encodeURIComponent(u)}`:"";return`${vy(n)}?${br(c).slice(1)}${d}`}function vy({config:n}){return n.emulator?Lo(n,_y):`https://${n.authDomain}/${my}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="webStorageSupport";class Ey{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ku,this._completeRedirectFn=j_,this._overrideRedirectResult=q_}async _openPopup(e,t,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await rl(e,t,r,no(),s);return gy(e,a,xo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await rl(e,t,r,no(),s);return I_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await cy(e),r=new G_(e);return t.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zi,{type:zi},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zi];a!==void 0&&t(!!a),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=X_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xu()||Oo()||zs()}}const wy=Ey;var sl="@firebase/auth",il="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ay(n){jt(new Rt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uu(n)},d=new jm(r,s,i,u);return Zm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),jt(new Rt("auth-internal",e=>{const t=js(e.getProvider("auth").getImmediate());return(r=>new Ty(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(sl,il,Iy(n)),We(sl,il,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=5*60,Py=pu("authIdTokenMaxAge")||by;let ol=null;const Cy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Py)return;const s=t==null?void 0:t.token;ol!==s&&(ol=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ry(n=ko()){const e=qs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Jm(n,{popupRedirectResolver:wy,persistence:[L_,E_,Ku]}),r=pu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Cy(i.toString());g_(t,a,()=>a(t.currentUser)),f_(t,c=>a(c))}}const s=du("auth");return s&&e_(t,`http://${s}`),t}function ky(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}$m({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",ky().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ay("Browser");var Sy="firebase",Ny="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(Sy,Ny,"app");var al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qt,th;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function v(){}v.prototype=m.prototype,T.D=m.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(w,I,b){for(var y=Array(arguments.length-2),et=2;et<arguments.length;et++)y[et-2]=arguments[et];return m.prototype[I].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,v){v||(v=0);var w=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)w[I]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(I=0;16>I;++I)w[I]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=T.g[0],v=T.g[1],I=T.g[2];var b=T.g[3],y=m+(b^v&(I^b))+w[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=b+(I^m&(v^I))+w[1]+3905402710&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(v^b&(m^v))+w[2]+606105819&4294967295,I=b+(y<<17&4294967295|y>>>15),y=v+(m^I&(b^m))+w[3]+3250441966&4294967295,v=I+(y<<22&4294967295|y>>>10),y=m+(b^v&(I^b))+w[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=b+(I^m&(v^I))+w[5]+1200080426&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(v^b&(m^v))+w[6]+2821735955&4294967295,I=b+(y<<17&4294967295|y>>>15),y=v+(m^I&(b^m))+w[7]+4249261313&4294967295,v=I+(y<<22&4294967295|y>>>10),y=m+(b^v&(I^b))+w[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=b+(I^m&(v^I))+w[9]+2336552879&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(v^b&(m^v))+w[10]+4294925233&4294967295,I=b+(y<<17&4294967295|y>>>15),y=v+(m^I&(b^m))+w[11]+2304563134&4294967295,v=I+(y<<22&4294967295|y>>>10),y=m+(b^v&(I^b))+w[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=b+(I^m&(v^I))+w[13]+4254626195&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(v^b&(m^v))+w[14]+2792965006&4294967295,I=b+(y<<17&4294967295|y>>>15),y=v+(m^I&(b^m))+w[15]+1236535329&4294967295,v=I+(y<<22&4294967295|y>>>10),y=m+(I^b&(v^I))+w[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=b+(v^I&(m^v))+w[6]+3225465664&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^v&(b^m))+w[11]+643717713&4294967295,I=b+(y<<14&4294967295|y>>>18),y=v+(b^m&(I^b))+w[0]+3921069994&4294967295,v=I+(y<<20&4294967295|y>>>12),y=m+(I^b&(v^I))+w[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=b+(v^I&(m^v))+w[10]+38016083&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^v&(b^m))+w[15]+3634488961&4294967295,I=b+(y<<14&4294967295|y>>>18),y=v+(b^m&(I^b))+w[4]+3889429448&4294967295,v=I+(y<<20&4294967295|y>>>12),y=m+(I^b&(v^I))+w[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=b+(v^I&(m^v))+w[14]+3275163606&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^v&(b^m))+w[3]+4107603335&4294967295,I=b+(y<<14&4294967295|y>>>18),y=v+(b^m&(I^b))+w[8]+1163531501&4294967295,v=I+(y<<20&4294967295|y>>>12),y=m+(I^b&(v^I))+w[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=b+(v^I&(m^v))+w[2]+4243563512&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^v&(b^m))+w[7]+1735328473&4294967295,I=b+(y<<14&4294967295|y>>>18),y=v+(b^m&(I^b))+w[12]+2368359562&4294967295,v=I+(y<<20&4294967295|y>>>12),y=m+(v^I^b)+w[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=b+(m^v^I)+w[8]+2272392833&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^v)+w[11]+1839030562&4294967295,I=b+(y<<16&4294967295|y>>>16),y=v+(I^b^m)+w[14]+4259657740&4294967295,v=I+(y<<23&4294967295|y>>>9),y=m+(v^I^b)+w[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=b+(m^v^I)+w[4]+1272893353&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^v)+w[7]+4139469664&4294967295,I=b+(y<<16&4294967295|y>>>16),y=v+(I^b^m)+w[10]+3200236656&4294967295,v=I+(y<<23&4294967295|y>>>9),y=m+(v^I^b)+w[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=b+(m^v^I)+w[0]+3936430074&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^v)+w[3]+3572445317&4294967295,I=b+(y<<16&4294967295|y>>>16),y=v+(I^b^m)+w[6]+76029189&4294967295,v=I+(y<<23&4294967295|y>>>9),y=m+(v^I^b)+w[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=b+(m^v^I)+w[12]+3873151461&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^v)+w[15]+530742520&4294967295,I=b+(y<<16&4294967295|y>>>16),y=v+(I^b^m)+w[2]+3299628645&4294967295,v=I+(y<<23&4294967295|y>>>9),y=m+(I^(v|~b))+w[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=b+(v^(m|~I))+w[7]+1126891415&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~v))+w[14]+2878612391&4294967295,I=b+(y<<15&4294967295|y>>>17),y=v+(b^(I|~m))+w[5]+4237533241&4294967295,v=I+(y<<21&4294967295|y>>>11),y=m+(I^(v|~b))+w[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=b+(v^(m|~I))+w[3]+2399980690&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~v))+w[10]+4293915773&4294967295,I=b+(y<<15&4294967295|y>>>17),y=v+(b^(I|~m))+w[1]+2240044497&4294967295,v=I+(y<<21&4294967295|y>>>11),y=m+(I^(v|~b))+w[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=b+(v^(m|~I))+w[15]+4264355552&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~v))+w[6]+2734768916&4294967295,I=b+(y<<15&4294967295|y>>>17),y=v+(b^(I|~m))+w[13]+1309151649&4294967295,v=I+(y<<21&4294967295|y>>>11),y=m+(I^(v|~b))+w[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=b+(v^(m|~I))+w[11]+3174756917&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~v))+w[2]+718787259&4294967295,I=b+(y<<15&4294967295|y>>>17),y=v+(b^(I|~m))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var v=m-this.blockSize,w=this.B,I=this.h,b=0;b<m;){if(I==0)for(;b<=v;)s(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<m;)if(w[I++]=T.charCodeAt(b++),I==this.blockSize){s(this,w),I=0;break}}else for(;b<m;)if(w[I++]=T[b++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var v=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=v&255,v/=256;for(this.u(T),T=Array(16),m=v=0;4>m;++m)for(var w=0;32>w;w+=8)T[v++]=this.g[m]>>>w&255;return T};function i(T,m){var v=c;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=m(T)}function a(T,m){this.h=m;for(var v=[],w=!0,I=T.length-1;0<=I;I--){var b=T[I]|0;w&&b==m||(v[I]=b,w=!1)}this.g=v}var c={};function u(T){return-128<=T&&128>T?i(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return L(d(-T));for(var m=[],v=1,w=0;T>=v;w++)m[w]=T/v|0,v*=4294967296;return new a(m,0)}function f(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return L(f(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(m,8)),w=p,I=0;I<T.length;I+=8){var b=Math.min(8,T.length-I),y=parseInt(T.substring(I,I+b),m);8>b?(b=d(Math.pow(m,b)),w=w.j(b).add(d(y))):(w=w.j(v),w=w.add(d(y)))}return w}var p=u(0),E=u(1),P=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-L(this).m();for(var T=0,m=1,v=0;v<this.g.length;v++){var w=this.i(v);T+=(0<=w?w:4294967296+w)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(V(this))return"-"+L(this).toString(T);for(var m=d(Math.pow(T,6)),v=this,w="";;){var I=G(v,m).g;v=z(v,I.j(m));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=I,N(v))return b+w;for(;6>b.length;)b="0"+b;w=b+w}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function V(T){return T.h==-1}n.l=function(T){return T=z(this,T),V(T)?-1:N(T)?0:1};function L(T){for(var m=T.g.length,v=[],w=0;w<m;w++)v[w]=~T.g[w];return new a(v,~T.h).add(E)}n.abs=function(){return V(this)?L(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),v=[],w=0,I=0;I<=m;I++){var b=w+(this.i(I)&65535)+(T.i(I)&65535),y=(b>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);w=y>>>16,b&=65535,y&=65535,v[I]=y<<16|b}return new a(v,v[v.length-1]&-2147483648?-1:0)};function z(T,m){return T.add(L(m))}n.j=function(T){if(N(this)||N(T))return p;if(V(this))return V(T)?L(this).j(L(T)):L(L(this).j(T));if(V(T))return L(this.j(L(T)));if(0>this.l(P)&&0>T.l(P))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,v=[],w=0;w<2*m;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var I=0;I<T.g.length;I++){var b=this.i(w)>>>16,y=this.i(w)&65535,et=T.i(I)>>>16,Vn=T.i(I)&65535;v[2*w+2*I]+=y*Vn,j(v,2*w+2*I),v[2*w+2*I+1]+=b*Vn,j(v,2*w+2*I+1),v[2*w+2*I+1]+=y*et,j(v,2*w+2*I+1),v[2*w+2*I+2]+=b*et,j(v,2*w+2*I+2)}for(w=0;w<m;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=m;w<2*m;w++)v[w]=0;return new a(v,0)};function j(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function q(T,m){this.g=T,this.h=m}function G(T,m){if(N(m))throw Error("division by zero");if(N(T))return new q(p,p);if(V(T))return m=G(L(T),m),new q(L(m.g),L(m.h));if(V(m))return m=G(T,L(m)),new q(L(m.g),m.h);if(30<T.g.length){if(V(T)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var v=E,w=m;0>=w.l(T);)v=oe(v),w=oe(w);var I=ne(v,1),b=ne(w,1);for(w=ne(w,2),v=ne(v,2);!N(w);){var y=b.add(w);0>=y.l(T)&&(I=I.add(v),b=y),w=ne(w,1),v=ne(v,1)}return m=z(T,I.j(m)),new q(I,m)}for(I=p;0<=T.l(m);){for(v=Math.max(1,Math.floor(T.m()/m.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),b=d(v),y=b.j(m);V(y)||0<y.l(T);)v-=w,b=d(v),y=b.j(m);N(b)&&(b=E),I=I.add(b),T=z(T,y)}return new q(I,T)}n.A=function(T){return G(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),v=[],w=0;w<m;w++)v[w]=this.i(w)&T.i(w);return new a(v,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),v=[],w=0;w<m;w++)v[w]=this.i(w)|T.i(w);return new a(v,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),v=[],w=0;w<m;w++)v[w]=this.i(w)^T.i(w);return new a(v,this.h^T.h)};function oe(T){for(var m=T.g.length+1,v=[],w=0;w<m;w++)v[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(v,T.h)}function ne(T,m){var v=m>>5;m%=32;for(var w=T.g.length-v,I=[],b=0;b<w;b++)I[b]=0<m?T.i(b+v)>>>m|T.i(b+v+1)<<32-m:T.i(b+v);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,th=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,qt=a}).apply(typeof al<"u"?al:typeof self<"u"?self:typeof window<"u"?window:{});var ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nh,rh,rr,sh,ms,io,ih,oh,ah;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ss=="object"&&ss];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var A=o[g];if(!(A in h))break e;h=h[A]}o=o[o.length-1],g=h[o],l=l(g),l!=g&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,g=!1,A={next:function(){if(!g&&h<o.length){var C=h++;return{value:l(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function p(o,l,h){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,g),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function E(o,l,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,E.apply(null,arguments)}function P(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function N(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(g,A,C){for(var O=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)O[Z-2]=arguments[Z];return l.prototype[A].apply(g,O)}}function V(o){const l=o.length;if(0<l){const h=Array(l);for(let g=0;g<l;g++)h[g]=o[g];return h}return[]}function L(o,l){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(u(g)){const A=o.length||0,C=g.length||0;o.length=A+C;for(let O=0;O<C;O++)o[A+O]=g[O]}else o.push(g)}}class z{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function G(o){return G[" "](o),o}G[" "]=function(){};var oe=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ne(o,l,h){for(const g in o)l.call(h,o[g],g,o)}function T(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function m(o){const l={};for(const h in o)l[h]=o[h];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,l){let h,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(h in g)o[h]=g[h];for(let C=0;C<v.length;C++)h=v[C],Object.prototype.hasOwnProperty.call(g,h)&&(o[h]=g[h])}}function I(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function b(o){c.setTimeout(()=>{throw o},0)}function y(){var o=fi;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class et{constructor(){this.h=this.g=null}add(l,h){const g=Vn.get();g.set(l,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Vn=new z(()=>new nf,o=>o.reset());class nf{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Mn,xn=!1,fi=new et,Sa=()=>{const o=c.Promise.resolve(void 0);Mn=()=>{o.then(rf)}};var rf=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){b(h)}var l=Vn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}xn=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var sf=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function Un(o,l){if(Te.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(oe){e:{try{G(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:of[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Un.aa.h.call(this)}}N(Un,Te);var of={2:"touch",3:"pen",4:"mouse"};Un.prototype.h=function(){Un.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Fr="closure_listenable_"+(1e6*Math.random()|0),af=0;function cf(o,l,h,g,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!g,this.ha=A,this.key=++af,this.da=this.fa=!1}function Br(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function qr(o){this.src=o,this.g={},this.h=0}qr.prototype.add=function(o,l,h,g,A){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var O=pi(o,l,g,A);return-1<O?(l=o[O],h||(l.fa=!1)):(l=new cf(l,this.src,C,!!g,A),l.fa=h,o.push(l)),l};function gi(o,l){var h=l.type;if(h in o.g){var g=o.g[h],A=Array.prototype.indexOf.call(g,l,void 0),C;(C=0<=A)&&Array.prototype.splice.call(g,A,1),C&&(Br(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function pi(o,l,h,g){for(var A=0;A<o.length;++A){var C=o[A];if(!C.da&&C.listener==l&&C.capture==!!h&&C.ha==g)return A}return-1}var mi="closure_lm_"+(1e6*Math.random()|0),_i={};function Na(o,l,h,g,A){if(Array.isArray(l)){for(var C=0;C<l.length;C++)Na(o,l[C],h,g,A);return null}return h=Oa(h),o&&o[Fr]?o.K(l,h,d(g)?!!g.capture:!!g,A):lf(o,l,h,!1,g,A)}function lf(o,l,h,g,A,C){if(!l)throw Error("Invalid event type");var O=d(A)?!!A.capture:!!A,Z=vi(o);if(Z||(o[mi]=Z=new qr(o)),h=Z.add(l,h,g,O,C),h.proxy)return h;if(g=uf(),h.proxy=g,g.src=o,g.listener=h,o.addEventListener)sf||(A=O),A===void 0&&(A=!1),o.addEventListener(l.toString(),g,A);else if(o.attachEvent)o.attachEvent(Da(l.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function uf(){function o(h){return l.call(o.src,o.listener,h)}const l=hf;return o}function La(o,l,h,g,A){if(Array.isArray(l))for(var C=0;C<l.length;C++)La(o,l[C],h,g,A);else g=d(g)?!!g.capture:!!g,h=Oa(h),o&&o[Fr]?(o=o.i,l=String(l).toString(),l in o.g&&(C=o.g[l],h=pi(C,h,g,A),-1<h&&(Br(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[l],o.h--)))):o&&(o=vi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=pi(l,h,g,A)),(h=-1<o?l[o]:null)&&yi(h))}function yi(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Fr])gi(l.i,o);else{var h=o.type,g=o.proxy;l.removeEventListener?l.removeEventListener(h,g,o.capture):l.detachEvent?l.detachEvent(Da(h),g):l.addListener&&l.removeListener&&l.removeListener(g),(h=vi(l))?(gi(h,o),h.h==0&&(h.src=null,l[mi]=null)):Br(o)}}}function Da(o){return o in _i?_i[o]:_i[o]="on"+o}function hf(o,l){if(o.da)o=!0;else{l=new Un(l,this);var h=o.listener,g=o.ha||o.src;o.fa&&yi(o),o=h.call(g,l)}return o}function vi(o){return o=o[mi],o instanceof qr?o:null}var Ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oa(o){return typeof o=="function"?o:(o[Ei]||(o[Ei]=function(l){return o.handleEvent(l)}),o[Ei])}function Ie(){ht.call(this),this.i=new qr(this),this.M=this,this.F=null}N(Ie,ht),Ie.prototype[Fr]=!0,Ie.prototype.removeEventListener=function(o,l,h,g){La(this,o,l,h,g)};function Ne(o,l){var h,g=o.F;if(g)for(h=[];g;g=g.F)h.push(g);if(o=o.M,g=l.type||l,typeof l=="string")l=new Te(l,o);else if(l instanceof Te)l.target=l.target||o;else{var A=l;l=new Te(g,o),w(l,A)}if(A=!0,h)for(var C=h.length-1;0<=C;C--){var O=l.g=h[C];A=Hr(O,g,!0,l)&&A}if(O=l.g=o,A=Hr(O,g,!0,l)&&A,A=Hr(O,g,!1,l)&&A,h)for(C=0;C<h.length;C++)O=l.g=h[C],A=Hr(O,g,!1,l)&&A}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],g=0;g<h.length;g++)Br(h[g]);delete o.g[l],o.h--}}this.F=null},Ie.prototype.K=function(o,l,h,g){return this.i.add(String(o),l,!1,h,g)},Ie.prototype.L=function(o,l,h,g){return this.i.add(String(o),l,!0,h,g)};function Hr(o,l,h,g){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,C=0;C<l.length;++C){var O=l[C];if(O&&!O.da&&O.capture==h){var Z=O.listener,_e=O.ha||O.src;O.fa&&gi(o.i,O),A=Z.call(_e,g)!==!1&&A}}return A&&!g.defaultPrevented}function Va(o,l,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Ma(o){o.g=Va(()=>{o.g=null,o.i&&(o.i=!1,Ma(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class df extends ht{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ma(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fn(o){ht.call(this),this.h=o,this.g={}}N(Fn,ht);var xa=[];function Ua(o){ne(o.g,function(l,h){this.g.hasOwnProperty(h)&&yi(l)},o),o.g={}}Fn.prototype.N=function(){Fn.aa.N.call(this),Ua(this)},Fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wi=c.JSON.stringify,ff=c.JSON.parse,gf=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ti(){}Ti.prototype.h=null;function Fa(o){return o.h||(o.h=o.i())}function Ba(){}var Bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ii(){Te.call(this,"d")}N(Ii,Te);function Ai(){Te.call(this,"c")}N(Ai,Te);var Ot={},qa=null;function zr(){return qa=qa||new Ie}Ot.La="serverreachability";function Ha(o){Te.call(this,Ot.La,o)}N(Ha,Te);function qn(o){const l=zr();Ne(l,new Ha(l))}Ot.STAT_EVENT="statevent";function za(o,l){Te.call(this,Ot.STAT_EVENT,o),this.stat=l}N(za,Te);function Le(o){const l=zr();Ne(l,new za(l,o))}Ot.Ma="timingevent";function ja(o,l){Te.call(this,Ot.Ma,o),this.size=l}N(ja,Te);function Hn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function zn(){this.g=!0}zn.prototype.xa=function(){this.g=!1};function pf(o,l,h,g,A,C){o.info(function(){if(o.g)if(C)for(var O="",Z=C.split("&"),_e=0;_e<Z.length;_e++){var X=Z[_e].split("=");if(1<X.length){var Ae=X[0];X=X[1];var be=Ae.split("_");O=2<=be.length&&be[1]=="type"?O+(Ae+"="+X+"&"):O+(Ae+"=redacted&")}}else O=null;else O=C;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+l+`
`+h+`
`+O})}function mf(o,l,h,g,A,C,O){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+l+`
`+h+`
`+C+" "+O})}function rn(o,l,h,g){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+yf(o,h)+(g?" "+g:"")})}function _f(o,l){o.info(function(){return"TIMEOUT: "+l})}zn.prototype.info=function(){};function yf(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var g=h[o];if(!(2>g.length)){var A=g[1];if(Array.isArray(A)&&!(1>A.length)){var C=A[0];if(C!="noop"&&C!="stop"&&C!="close")for(var O=1;O<A.length;O++)A[O]=""}}}}return wi(h)}catch{return l}}var jr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$a={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bi;function $r(){}N($r,Ti),$r.prototype.g=function(){return new XMLHttpRequest},$r.prototype.i=function(){return{}},bi=new $r;function dt(o,l,h,g){this.j=o,this.i=l,this.l=h,this.R=g||1,this.U=new Fn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ga}function Ga(){this.i=null,this.g="",this.h=!1}var Wa={},Pi={};function Ci(o,l,h){o.L=1,o.v=Qr(tt(l)),o.m=h,o.P=!0,Ka(o,null)}function Ka(o,l){o.F=Date.now(),Gr(o),o.A=tt(o.v);var h=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),cc(h.i,"t",g),o.C=0,h=o.j.J,o.h=new Ga,o.g=Pc(o.j,h?l:null,!o.m),0<o.O&&(o.M=new df(E(o.Y,o,o.g),o.O)),l=o.U,h=o.g,g=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(xa[0]=A.toString()),A=xa);for(var C=0;C<A.length;C++){var O=Na(h,A[C],g||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),qn(),pf(o.i,o.u,o.A,o.l,o.R,o.m)}dt.prototype.ca=function(o){o=o.target;const l=this.M;l&&nt(o)==3?l.j():this.Y(o)},dt.prototype.Y=function(o){try{if(o==this.g)e:{const be=nt(this.g);var l=this.g.Ba();const an=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||pc(this.g)))){this.J||be!=4||l==7||(l==8||0>=an?qn(3):qn(2)),Ri(this);var h=this.g.Z();this.X=h;t:if(Qa(this)){var g=pc(this.g);o="";var A=g.length,C=nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vt(this),jn(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(g[l],{stream:!(C&&l==A-1)});g.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=h==200,mf(this.i,this.u,this.A,this.l,this.R,be,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,_e=this.g;if((Z=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Z)){var X=Z;break t}}X=null}if(h=X)rn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ki(this,h);else{this.o=!1,this.s=3,Le(12),Vt(this),jn(this);break e}}if(this.P){h=!0;let qe;for(;!this.J&&this.C<O.length;)if(qe=vf(this,O),qe==Pi){be==4&&(this.s=4,Le(14),h=!1),rn(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Wa){this.s=4,Le(15),rn(this.i,this.l,O,"[Invalid Chunk]"),h=!1;break}else rn(this.i,this.l,qe,null),ki(this,qe);if(Qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||O.length!=0||this.h.h||(this.s=1,Le(16),h=!1),this.o=this.o&&h,!h)rn(this.i,this.l,O,"[Invalid Chunked Response]"),Vt(this),jn(this);else if(0<O.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Vi(Ae),Ae.M=!0,Le(11))}}else rn(this.i,this.l,O,null),ki(this,O);be==4&&Vt(this),this.o&&!this.J&&(be==4?Tc(this.j,this):(this.o=!1,Gr(this)))}else Mf(this.g),h==400&&0<O.indexOf("Unknown SID")?(this.s=3,Le(12)):(this.s=0,Le(13)),Vt(this),jn(this)}}}catch{}finally{}};function Qa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function vf(o,l){var h=o.C,g=l.indexOf(`
`,h);return g==-1?Pi:(h=Number(l.substring(h,g)),isNaN(h)?Wa:(g+=1,g+h>l.length?Pi:(l=l.slice(g,g+h),o.C=g+h,l)))}dt.prototype.cancel=function(){this.J=!0,Vt(this)};function Gr(o){o.S=Date.now()+o.I,Ya(o,o.I)}function Ya(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Hn(E(o.ba,o),l)}function Ri(o){o.B&&(c.clearTimeout(o.B),o.B=null)}dt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(_f(this.i,this.A),this.L!=2&&(qn(),Le(17)),Vt(this),this.s=2,jn(this)):Ya(this,this.S-o)};function jn(o){o.j.G==0||o.J||Tc(o.j,o)}function Vt(o){Ri(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Ua(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function ki(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Si(h.h,o))){if(!o.K&&Si(h.h,o)&&h.G==3){try{var g=h.Da.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)es(h),Jr(h);else break e;Oi(h),Le(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Hn(E(h.Za,h),6e3));if(1>=Za(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else xt(h,11)}else if((o.K||h.g==o)&&es(h),!j(l))for(A=h.Da.g.parse(l),l=0;l<A.length;l++){let X=A[l];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const Ae=X[3];Ae!=null&&(h.la=Ae,h.j.info("VER="+h.la));const be=X[4];be!=null&&(h.Aa=be,h.j.info("SVER="+h.Aa));const an=X[5];an!=null&&typeof an=="number"&&0<an&&(g=1.5*an,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const qe=o.g;if(qe){const ns=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ns){var C=g.h;C.g||ns.indexOf("spdy")==-1&&ns.indexOf("quic")==-1&&ns.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ni(C,C.h),C.h=null))}if(g.D){const Mi=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Mi&&(g.ya=Mi,re(g.I,g.D,Mi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var O=o;if(g.qa=bc(g,g.J?g.ia:null,g.W),O.K){ec(g.h,O);var Z=O,_e=g.L;_e&&(Z.I=_e),Z.B&&(Ri(Z),Gr(Z)),g.g=O}else Ec(g);0<h.i.length&&Zr(h)}else X[0]!="stop"&&X[0]!="close"||xt(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?xt(h,7):Di(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}qn(4)}catch{}}var Ef=class{constructor(o,l){this.g=o,this.map=l}};function Xa(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ja(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Za(o){return o.h?1:o.g?o.g.size:0}function Si(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Ni(o,l){o.g?o.g.add(l):o.h=l}function ec(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Xa.prototype.cancel=function(){if(this.i=tc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function tc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return V(o.i)}function wf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,g=0;g<h;g++)l.push(o[g]);return l}l=[],h=0;for(g in o)l[h++]=o[g];return l}function Tf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const g in o)l[h++]=g;return l}}}function nc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=Tf(o),g=wf(o),A=g.length,C=0;C<A;C++)l.call(void 0,g[C],h&&h[C],o)}var rc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function If(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var g=o[h].indexOf("="),A=null;if(0<=g){var C=o[h].substring(0,g);A=o[h].substring(g+1)}else C=o[h];l(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Mt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Mt){this.h=o.h,Wr(this,o.j),this.o=o.o,this.g=o.g,Kr(this,o.s),this.l=o.l;var l=o.i,h=new Wn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),sc(this,h),this.m=o.m}else o&&(l=String(o).match(rc))?(this.h=!1,Wr(this,l[1]||"",!0),this.o=$n(l[2]||""),this.g=$n(l[3]||"",!0),Kr(this,l[4]),this.l=$n(l[5]||"",!0),sc(this,l[6]||"",!0),this.m=$n(l[7]||"")):(this.h=!1,this.i=new Wn(null,this.h))}Mt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Gn(l,ic,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Gn(l,ic,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Gn(h,h.charAt(0)=="/"?Pf:bf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Gn(h,Rf)),o.join("")};function tt(o){return new Mt(o)}function Wr(o,l,h){o.j=h?$n(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Kr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function sc(o,l,h){l instanceof Wn?(o.i=l,kf(o.i,o.h)):(h||(l=Gn(l,Cf)),o.i=new Wn(l,o.h))}function re(o,l,h){o.i.set(l,h)}function Qr(o){return re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function $n(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Gn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Af),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Af(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ic=/[#\/\?@]/g,bf=/[#\?:]/g,Pf=/[#\?]/g,Cf=/[#\?@]/g,Rf=/#/g;function Wn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function ft(o){o.g||(o.g=new Map,o.h=0,o.i&&If(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Wn.prototype,n.add=function(o,l){ft(this),this.i=null,o=sn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function oc(o,l){ft(o),l=sn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function ac(o,l){return ft(o),l=sn(o,l),o.g.has(l)}n.forEach=function(o,l){ft(this),this.g.forEach(function(h,g){h.forEach(function(A){o.call(l,A,g,this)},this)},this)},n.na=function(){ft(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let g=0;g<l.length;g++){const A=o[g];for(let C=0;C<A.length;C++)h.push(l[g])}return h},n.V=function(o){ft(this);let l=[];if(typeof o=="string")ac(this,o)&&(l=l.concat(this.g.get(sn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return ft(this),this.i=null,o=sn(this,o),ac(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function cc(o,l,h){oc(o,l),0<h.length&&(o.i=null,o.g.set(sn(o,l),V(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var g=l[h];const C=encodeURIComponent(String(g)),O=this.V(g);for(g=0;g<O.length;g++){var A=C;O[g]!==""&&(A+="="+encodeURIComponent(String(O[g]))),o.push(A)}}return this.i=o.join("&")};function sn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function kf(o,l){l&&!o.j&&(ft(o),o.i=null,o.g.forEach(function(h,g){var A=g.toLowerCase();g!=A&&(oc(this,g),cc(this,A,h))},o)),o.j=l}function Sf(o,l){const h=new zn;if(c.Image){const g=new Image;g.onload=P(gt,h,"TestLoadImage: loaded",!0,l,g),g.onerror=P(gt,h,"TestLoadImage: error",!1,l,g),g.onabort=P(gt,h,"TestLoadImage: abort",!1,l,g),g.ontimeout=P(gt,h,"TestLoadImage: timeout",!1,l,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else l(!1)}function Nf(o,l){const h=new zn,g=new AbortController,A=setTimeout(()=>{g.abort(),gt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(A),C.ok?gt(h,"TestPingServer: ok",!0,l):gt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),gt(h,"TestPingServer: error",!1,l)})}function gt(o,l,h,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(h)}catch{}}function Lf(){this.g=new gf}function Df(o,l,h){const g=h||"";try{nc(o,function(A,C){let O=A;d(A)&&(O=wi(A)),l.push(g+C+"="+encodeURIComponent(O))})}catch(A){throw l.push(g+"type="+encodeURIComponent("_badmap")),A}}function Kn(o){this.l=o.Ub||null,this.j=o.eb||!1}N(Kn,Ti),Kn.prototype.g=function(){return new Yr(this.l,this.j)},Kn.prototype.i=function(o){return function(){return o}}({});function Yr(o,l){Ie.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Yr,Ie),n=Yr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Yn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Yn(this)),this.g&&(this.readyState=3,Yn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function lc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Qn(this):Yn(this),this.readyState==3&&lc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Qn(this))},n.Qa=function(o){this.g&&(this.response=o,Qn(this))},n.ga=function(){this.g&&Qn(this)};function Qn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Yn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Yn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Yr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function uc(o){let l="";return ne(o,function(h,g){l+=g,l+=":",l+=h,l+=`\r
`}),l}function Li(o,l,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=uc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):re(o,l,h))}function ce(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ce,Ie);var Of=/^https?$/i,Vf=["POST","PUT"];n=ce.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bi.g(),this.v=this.o?Fa(this.o):Fa(bi),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){hc(this,C);return}if(o=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)h.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())h.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),A=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Vf,l,void 0))||g||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,O]of h)this.g.setRequestHeader(C,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){hc(this,C)}};function hc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,dc(o),Xr(o)}function dc(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),Xr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xr(this,!0)),ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fc(this):this.bb())},n.bb=function(){fc(this)};function fc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nt(o)!=4||o.Z()!=2)){if(o.u&&nt(o)==4)Va(o.Ea,0,o);else if(Ne(o,"readystatechange"),nt(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var g;if(g=O===0){var A=String(o.D).match(rc)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),g=!Of.test(A?A.toLowerCase():"")}h=g}if(h)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var C=2<nt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",dc(o)}}finally{Xr(o)}}}}function Xr(o,l){if(o.g){gc(o);const h=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ne(o,"ready");try{h.onreadystatechange=g}catch{}}}function gc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function nt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),ff(l)}};function pc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Mf(o){const l={};o=(o.g&&2<=nt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(j(o[g]))continue;var h=I(o[g]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=l[A]||[];l[A]=C,C.push(h)}T(l,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function mc(o){this.Aa=0,this.i=[],this.j=new zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,o),this.cb=Xn("retryDelaySeedMs",1e4,o),this.Wa=Xn("forwardChannelMaxRetries",2,o),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Xa(o&&o.concurrentRequestLimit),this.Da=new Lf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=mc.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,g){Le(0),this.W=o,this.H=l||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=bc(this,null,this.W),Zr(this)};function Di(o){if(_c(o),o.G==3){var l=o.U++,h=tt(o.I);if(re(h,"SID",o.K),re(h,"RID",l),re(h,"TYPE","terminate"),Jn(o,h),l=new dt(o,o.j,l),l.L=2,l.v=Qr(tt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Pc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Gr(l)}Ac(o)}function Jr(o){o.g&&(Vi(o),o.g.cancel(),o.g=null)}function _c(o){Jr(o),o.u&&(c.clearTimeout(o.u),o.u=null),es(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Zr(o){if(!Ja(o.h)&&!o.s){o.s=!0;var l=o.Ga;Mn||Sa(),xn||(Mn(),xn=!0),fi.add(l,o),o.B=0}}function xf(o,l){return Za(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Hn(E(o.Ga,o,l),Ic(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new dt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),w(C,this.S)):C=this.S),this.m!==null||this.O||(A.H=C,C=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=vc(this,A,l),h=tt(this.I),re(h,"RID",o),re(h,"CVER",22),this.D&&re(h,"X-HTTP-Session-Id",this.D),Jn(this,h),C&&(this.O?l="headers="+encodeURIComponent(String(uc(C)))+"&"+l:this.m&&Li(h,this.m,C)),Ni(this.h,A),this.Ua&&re(h,"TYPE","init"),this.P?(re(h,"$req",l),re(h,"SID","null"),A.T=!0,Ci(A,h,null)):Ci(A,h,l),this.G=2}}else this.G==3&&(o?yc(this,o):this.i.length==0||Ja(this.h)||yc(this))};function yc(o,l){var h;l?h=l.l:h=o.U++;const g=tt(o.I);re(g,"SID",o.K),re(g,"RID",h),re(g,"AID",o.T),Jn(o,g),o.m&&o.o&&Li(g,o.m,o.o),h=new dt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=vc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ni(o.h,h),Ci(h,g,l)}function Jn(o,l){o.H&&ne(o.H,function(h,g){re(l,g,h)}),o.l&&nc({},function(h,g){re(l,g,h)})}function vc(o,l,h){h=Math.min(o.i.length,h);var g=o.l?E(o.l.Na,o.l,o):null;e:{var A=o.i;let C=-1;for(;;){const O=["count="+h];C==-1?0<h?(C=A[0].g,O.push("ofs="+C)):C=0:O.push("ofs="+C);let Z=!0;for(let _e=0;_e<h;_e++){let X=A[_e].g;const Ae=A[_e].map;if(X-=C,0>X)C=Math.max(0,A[_e].g-100),Z=!1;else try{Df(Ae,O,"req"+X+"_")}catch{g&&g(Ae)}}if(Z){g=O.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,g}function Ec(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Mn||Sa(),xn||(Mn(),xn=!0),fi.add(l,o),o.v=0}}function Oi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Hn(E(o.Fa,o),Ic(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,wc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Hn(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Le(10),Jr(this),wc(this))};function Vi(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function wc(o){o.g=new dt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=tt(o.qa);re(l,"RID","rpc"),re(l,"SID",o.K),re(l,"AID",o.T),re(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&re(l,"TO",o.ja),re(l,"TYPE","xmlhttp"),Jn(o,l),o.m&&o.o&&Li(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Qr(tt(l)),h.m=null,h.P=!0,Ka(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Jr(this),Oi(this),Le(19))};function es(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Tc(o,l){var h=null;if(o.g==l){es(o),Vi(o),o.g=null;var g=2}else if(Si(o.h,l))h=l.D,ec(o.h,l),g=1;else return;if(o.G!=0){if(l.o)if(g==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;g=zr(),Ne(g,new ja(g,h)),Zr(o)}else Ec(o);else if(A=l.s,A==3||A==0&&0<l.X||!(g==1&&xf(o,l)||g==2&&Oi(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),A){case 1:xt(o,5);break;case 4:xt(o,10);break;case 3:xt(o,6);break;default:xt(o,2)}}}function Ic(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function xt(o,l){if(o.j.info("Error code "+l),l==2){var h=E(o.fb,o),g=o.Xa;const A=!g;g=new Mt(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Wr(g,"https"),Qr(g),A?Sf(g.toString(),h):Nf(g.toString(),h)}else Le(2);o.G=0,o.l&&o.l.sa(l),Ac(o),_c(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function Ac(o){if(o.G=0,o.ka=[],o.l){const l=tc(o.h);(l.length!=0||o.i.length!=0)&&(L(o.ka,l),L(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function bc(o,l,h){var g=h instanceof Mt?tt(h):new Mt(h);if(g.g!="")l&&(g.g=l+"."+g.g),Kr(g,g.s);else{var A=c.location;g=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var C=new Mt(null);g&&Wr(C,g),l&&(C.g=l),A&&Kr(C,A),h&&(C.l=h),g=C}return h=o.D,l=o.ya,h&&l&&re(g,h,l),re(g,"VER",o.la),Jn(o,g),g}function Pc(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ce(new Kn({eb:h})):new ce(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cc(){}n=Cc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ts(){}ts.prototype.g=function(o,l){return new Me(o,l)};function Me(o,l){Ie.call(this),this.g=new mc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!j(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new on(this)}N(Me,Ie),Me.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){Di(this.g)},Me.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=wi(o),o=h);l.i.push(new Ef(l.Ya++,o)),l.G==3&&Zr(l)},Me.prototype.N=function(){this.g.l=null,delete this.j,Di(this.g),delete this.g,Me.aa.N.call(this)};function Rc(o){Ii.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}N(Rc,Ii);function kc(){Ai.call(this),this.status=1}N(kc,Ai);function on(o){this.g=o}N(on,Cc),on.prototype.ua=function(){Ne(this.g,"a")},on.prototype.ta=function(o){Ne(this.g,new Rc(o))},on.prototype.sa=function(o){Ne(this.g,new kc)},on.prototype.ra=function(){Ne(this.g,"b")},ts.prototype.createWebChannel=ts.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,ah=function(){return new ts},oh=function(){return zr()},ih=Ot,io={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jr.NO_ERROR=0,jr.TIMEOUT=8,jr.HTTP_ERROR=6,ms=jr,$a.COMPLETE="complete",sh=$a,Ba.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,rr=Ba,rh=Kn,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha,nh=ce}).apply(typeof ss<"u"?ss:typeof self<"u"?self:typeof window<"u"?window:{});const cl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Co("@firebase/firestore");function Zn(){return Gt.logLevel}function x(n,...e){if(Gt.logLevel<=K.DEBUG){const t=e.map(Fo);Gt.debug(`Firestore (${Rn}): ${n}`,...t)}}function at(n,...e){if(Gt.logLevel<=K.ERROR){const t=e.map(Fo);Gt.error(`Firestore (${Rn}): ${n}`,...t)}}function En(n,...e){if(Gt.logLevel<=K.WARN){const t=e.map(Fo);Gt.warn(`Firestore (${Rn}): ${n}`,...t)}}function Fo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n="Unexpected state"){const e=`FIRESTORE (${Rn}) INTERNAL ASSERTION FAILED: `+n;throw at(e),new Error(e)}function te(n,e){n||B()}function $(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Ze{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ly{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ce.UNAUTHENTICATED))}shutdown(){}}class Dy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Oy{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new ch(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new Ce(e)}}class Vy{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class My{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Vy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.R=t.token,new xy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Fy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function wn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ge(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new ge(0,0))}static max(){return new H(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(),r===void 0?r=e.length-t:r>e.length-t&&B(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return pr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends pr{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const By=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends pr{construct(e,t,r){return new ve(e,t,r)}static isValidIdentifier(e){return By.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ve(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new M(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new M(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new M(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(se.fromString(e))}static fromName(e){return new U(se.fromString(e).popFirst(5))}static empty(){return new U(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new se(e.slice()))}}function qy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new ge(t+1,0):new ge(t,r));return new kt(s,U.empty(),e)}function Hy(n){return new kt(n.readTime,n.key,-1)}class kt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new kt(H.min(),U.empty(),-1)}static max(){return new kt(H.max(),U.empty(),-1)}}function zy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $y{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==jy)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(s=>s?S.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new S((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new S((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Gy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Sr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Bo.oe=-1;function Ks(n){return n==null}function ks(n){return n===0&&1/n==-1/0}function Wy(n){return typeof n=="number"&&Number.isInteger(n)&&!ks(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function tn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function uh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new is(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new is(this.root,e,this.comparator,!1)}getReverseIterator(){return new is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new is(this.root,e,this.comparator,!0)}}class is{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ye.RED,this.left=s??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ye(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ul(this.data.getIterator())}getIteratorFrom(e){return new ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ee(this.comparator);return t.data=e,t}}class ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new xe([])}unionWith(e){let t=new Ee(ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hh("Invalid base64 string: "+i):i}}(e);return new Se(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const Ky=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(n){if(te(!!n),typeof n=="string"){let e=0;const t=Ky.exec(n);if(te(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(n.seconds),nanos:de(n.nanos)}}function de(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Wt(n){return typeof n=="string"?Se.fromBase64String(n):Se.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ho(n){const e=n.mapValue.fields.__previous_value__;return qo(e)?Ho(e):e}function mr(n){const e=St(n.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,t,r,s,i,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class _r{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new _r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _r&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qo(n)?4:Yy(n)?9007199254740991:10:B()}function Je(n,e){if(n===e)return!0;const t=Kt(n);if(t!==Kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return mr(n).isEqual(mr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=St(s.timestampValue),c=St(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Wt(s.bytesValue).isEqual(Wt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return de(s.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return de(s.integerValue)===de(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=de(s.doubleValue),c=de(i.doubleValue);return a===c?ks(a)===ks(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return wn(n.arrayValue.values||[],e.arrayValue.values||[],Je);case 10:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ll(a)!==ll(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Je(a[u],c[u])))return!1;return!0}(n,e);default:return B()}}function yr(n,e){return(n.values||[]).find(t=>Je(t,e))!==void 0}function Tn(n,e){if(n===e)return 0;const t=Kt(n),r=Kt(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=de(i.integerValue||i.doubleValue),u=de(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return hl(n.timestampValue,e.timestampValue);case 4:return hl(mr(n),mr(e));case 5:return J(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Wt(i),u=Wt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=J(c[d],u[d]);if(f!==0)return f}return J(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=J(de(i.latitude),de(a.latitude));return c!==0?c:J(de(i.longitude),de(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,a){const c=i.values||[],u=a.values||[];for(let d=0;d<c.length&&d<u.length;++d){const f=Tn(c[d],u[d]);if(f)return f}return J(c.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,a){if(i===os.mapValue&&a===os.mapValue)return 0;if(i===os.mapValue)return 1;if(a===os.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const E=J(u[p],f[p]);if(E!==0)return E;const P=Tn(c[u[p]],d[f[p]]);if(P!==0)return P}return J(u.length,f.length)}(n.mapValue,e.mapValue);default:throw B()}}function hl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=St(n),r=St(e),s=J(t.seconds,r.seconds);return s!==0?s:J(t.nanos,r.nanos)}function In(n){return oo(n)}function oo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=St(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Wt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=oo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${oo(t.fields[a])}`;return s+"}"}(n.mapValue):B()}function dl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ao(n){return!!n&&"integerValue"in n}function zo(n){return!!n&&"arrayValue"in n}function fl(n){return!!n&&"nullValue"in n}function gl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _s(n){return!!n&&"mapValue"in n}function ar(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ar(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ar(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Yy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!_s(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ar(t)}setAll(e){let t=ve.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ar(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());_s(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];_s(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){tn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ve(ar(this.value))}}function dh(n){const e=[];return tn(n.fields,(t,r)=>{const s=new ve([t]);if(_s(r)){const i=dh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Re(e,0,H.min(),H.min(),H.min(),Ve.empty(),0)}static newFoundDocument(e,t,r,s){return new Re(e,1,t,H.min(),r,s,0)}static newNoDocument(e,t){return new Re(e,2,t,H.min(),H.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,H.min(),H.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this.position=e,this.inclusive=t}}function pl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=Tn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ml(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Je(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t="asc"){this.field=e,this.dir=t}}function Xy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{}class fe extends fh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Zy(e,t,r):t==="array-contains"?new nv(e,r):t==="in"?new rv(e,r):t==="not-in"?new sv(e,r):t==="array-contains-any"?new iv(e,r):new fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ev(e,r):new tv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Tn(t,this.value)):t!==null&&Kt(this.value)===Kt(t)&&this.matchesComparison(Tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class je extends fh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new je(e,t)}matches(e){return gh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gh(n){return n.op==="and"}function ph(n){return Jy(n)&&gh(n)}function Jy(n){for(const e of n.filters)if(e instanceof je)return!1;return!0}function co(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+In(n.value);if(ph(n))return n.filters.map(e=>co(e)).join(",");{const e=n.filters.map(t=>co(t)).join(",");return`${n.op}(${e})`}}function mh(n,e){return n instanceof fe?function(r,s){return s instanceof fe&&r.op===s.op&&r.field.isEqual(s.field)&&Je(r.value,s.value)}(n,e):n instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&mh(a,s.filters[c]),!0):!1}(n,e):void B()}function _h(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${In(t.value)}`}(n):n instanceof je?function(t){return t.op.toString()+" {"+t.getFilters().map(_h).join(" ,")+"}"}(n):"Filter"}class Zy extends fe{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class ev extends fe{constructor(e,t){super(e,"in",t),this.keys=yh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tv extends fe{constructor(e,t){super(e,"not-in",t),this.keys=yh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function yh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class nv extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zo(t)&&yr(t.arrayValue,this.value)}}class rv extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yr(this.value.arrayValue,t)}}class sv extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!yr(this.value.arrayValue,t)}}class iv extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>yr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function _l(n,e=null,t=[],r=[],s=null,i=null,a=null){return new ov(n,e,t,r,s,i,a)}function jo(n){const e=$(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>co(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ks(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>In(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>In(r)).join(",")),e.ue=t}return e.ue}function $o(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Xy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!mh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ml(n.startAt,e.startAt)&&ml(n.endAt,e.endAt)}function lo(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function av(n,e,t,r,s,i,a,c){return new Nr(n,e,t,r,s,i,a,c)}function vh(n){return new Nr(n)}function yl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Eh(n){return n.collectionGroup!==null}function cr(n){const e=$(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ee(ve.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ns(i,r))}),t.has(ve.keyField().canonicalString())||e.ce.push(new Ns(ve.keyField(),r))}return e.ce}function Ye(n){const e=$(n);return e.le||(e.le=cv(e,cr(n))),e.le}function cv(n,e){if(n.limitType==="F")return _l(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ns(s.field,i)});const t=n.endAt?new Ss(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ss(n.startAt.position,n.startAt.inclusive):null;return _l(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function uo(n,e){const t=n.filters.concat([e]);return new Nr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ho(n,e,t){return new Nr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qs(n,e){return $o(Ye(n),Ye(e))&&n.limitType===e.limitType}function wh(n){return`${jo(Ye(n))}|lt:${n.limitType}`}function ln(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>_h(s)).join(", ")}]`),Ks(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>In(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>In(s)).join(",")),`Target(${r})`}(Ye(n))}; limitType=${n.limitType})`}function Ys(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of cr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=pl(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,cr(r),s)||r.endAt&&!function(a,c,u){const d=pl(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,cr(r),s))}(n,e)}function lv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Th(n){return(e,t)=>{let r=!1;for(const s of cr(n)){const i=uv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function uv(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Tn(u,d):B()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){tn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return uh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=new ae(U.comparator);function ct(){return hv}const Ih=new ae(U.comparator);function sr(...n){let e=Ih;for(const t of n)e=e.insert(t.key,t);return e}function Ah(n){let e=Ih;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ft(){return lr()}function bh(){return lr()}function lr(){return new kn(n=>n.toString(),(n,e)=>n.isEqual(e))}const dv=new ae(U.comparator),fv=new Ee(U.comparator);function W(...n){let e=fv;for(const t of n)e=e.add(t);return e}const gv=new Ee(J);function pv(){return gv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ks(e)?"-0":e}}function Ch(n){return{integerValue:""+n}}function mv(n,e){return Wy(e)?Ch(e):Ph(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this._=void 0}}function _v(n,e,t){return n instanceof Ls?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qo(i)&&(i=Ho(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof vr?kh(n,e):n instanceof Er?Sh(n,e):function(s,i){const a=Rh(s,i),c=vl(a)+vl(s.Pe);return ao(a)&&ao(s.Pe)?Ch(c):Ph(s.serializer,c)}(n,e)}function yv(n,e,t){return n instanceof vr?kh(n,e):n instanceof Er?Sh(n,e):t}function Rh(n,e){return n instanceof Ds?function(r){return ao(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ls extends Xs{}class vr extends Xs{constructor(e){super(),this.elements=e}}function kh(n,e){const t=Nh(e);for(const r of n.elements)t.some(s=>Je(s,r))||t.push(r);return{arrayValue:{values:t}}}class Er extends Xs{constructor(e){super(),this.elements=e}}function Sh(n,e){let t=Nh(e);for(const r of n.elements)t=t.filter(s=>!Je(s,r));return{arrayValue:{values:t}}}class Ds extends Xs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function vl(n){return de(n.integerValue||n.doubleValue)}function Nh(n){return zo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function vv(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof vr&&s instanceof vr||r instanceof Er&&s instanceof Er?wn(r.elements,s.elements,Je):r instanceof Ds&&s instanceof Ds?Je(r.Pe,s.Pe):r instanceof Ls&&s instanceof Ls}(n.transform,e.transform)}class Ev{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ys(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Js{}function Lh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Go(n.key,He.none()):new Lr(n.key,n.data,He.none());{const t=n.data,r=Ve.empty();let s=new Ee(ve.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Dt(n.key,r,new xe(s.toArray()),He.none())}}function wv(n,e,t){n instanceof Lr?function(s,i,a){const c=s.value.clone(),u=wl(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Dt?function(s,i,a){if(!ys(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=wl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Dh(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ur(n,e,t,r){return n instanceof Lr?function(i,a,c,u){if(!ys(i.precondition,a))return c;const d=i.value.clone(),f=Tl(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Dt?function(i,a,c,u){if(!ys(i.precondition,a))return c;const d=Tl(i.fieldTransforms,u,a),f=a.data;return f.setAll(Dh(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,c){return ys(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Tv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Rh(r.transform,s||null);i!=null&&(t===null&&(t=Ve.empty()),t.set(r.field,i))}return t||null}function El(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&wn(r,s,(i,a)=>vv(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Lr extends Js{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dt extends Js{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function wl(n,e,t){const r=new Map;te(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,yv(a,c,t[s]))}return r}function Tl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,_v(i,a,e))}return r}class Go extends Js{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Iv extends Js{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ur(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ur(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Lh(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&wn(this.mutations,e.mutations,(t,r)=>El(t,r))&&wn(this.baseMutations,e.baseMutations,(t,r)=>El(t,r))}}class Wo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){te(e.mutations.length===r.length);let s=function(){return dv}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Wo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,Y;function Cv(n){switch(n){default:return B();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Oh(n){if(n===void 0)return at("GRPC error has no .code"),k.UNKNOWN;switch(n){case he.OK:return k.OK;case he.CANCELLED:return k.CANCELLED;case he.UNKNOWN:return k.UNKNOWN;case he.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case he.INTERNAL:return k.INTERNAL;case he.UNAVAILABLE:return k.UNAVAILABLE;case he.UNAUTHENTICATED:return k.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case he.NOT_FOUND:return k.NOT_FOUND;case he.ALREADY_EXISTS:return k.ALREADY_EXISTS;case he.PERMISSION_DENIED:return k.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case he.ABORTED:return k.ABORTED;case he.OUT_OF_RANGE:return k.OUT_OF_RANGE;case he.UNIMPLEMENTED:return k.UNIMPLEMENTED;case he.DATA_LOSS:return k.DATA_LOSS;default:return B()}}(Y=he||(he={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=new qt([4294967295,4294967295],0);function Il(n){const e=Rv().encode(n),t=new th;return t.update(e),new Uint8Array(t.digest())}function Al(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qt([t,r],0),new qt([s,i],0)]}class Ko{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ir(`Invalid padding: ${t}`);if(r<0)throw new ir(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ir(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ir(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=qt.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(qt.fromNumber(r)));return s.compare(kv)===1&&(s=new qt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Il(e),[r,s]=Al(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ko(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=Il(e),[r,s]=Al(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Dr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Zs(H.min(),s,new ae(J),ct(),W())}}class Dr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Dr(r,t,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Vh{constructor(e,t){this.targetId=e,this.me=t}}class Mh{constructor(e,t,r=Se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class bl{constructor(){this.fe=0,this.ge=Cl(),this.pe=Se.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=W(),t=W(),r=W();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B()}}),new Dr(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=Cl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Sv{constructor(e){this.Le=e,this.Be=new Map,this.ke=ct(),this.qe=Pl(),this.Qe=new ae(J)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:B()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(lo(i))if(r===0){const a=new U(i.path);this.Ue(t,a,Re.newNoDocument(a,H.min()))}else te(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Wt(r).toUint8Array()}catch(u){if(u instanceof hh)return En("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ko(a,s,i)}catch(u){return En(u instanceof ir?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&lo(c.target)){const u=new U(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Re.newNoDocument(u,e))}i.be&&(t.set(a,i.Ce()),i.ve())}});let r=W();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Zs(e,t,this.Qe,this.ke,r);return this.ke=ct(),this.qe=Pl(),this.Qe=new ae(J),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new bl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ee(J),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Pl(){return new ae(U.comparator)}function Cl(){return new ae(U.comparator)}const Nv={asc:"ASCENDING",desc:"DESCENDING"},Lv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dv={and:"AND",or:"OR"};class Ov{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fo(n,e){return n.useProto3Json||Ks(e)?e:{value:e}}function Os(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Vv(n,e){return Os(n,e.toTimestamp())}function Xe(n){return te(!!n),H.fromTimestamp(function(t){const r=St(t);return new ge(r.seconds,r.nanos)}(n))}function Qo(n,e){return go(n,e).canonicalString()}function go(n,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Uh(n){const e=se.fromString(n);return te(zh(e)),e}function po(n,e){return Qo(n.databaseId,e.path)}function ji(n,e){const t=Uh(e);if(t.get(1)!==n.databaseId.projectId)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(Bh(t))}function Fh(n,e){return Qo(n.databaseId,e)}function Mv(n){const e=Uh(n);return e.length===4?se.emptyPath():Bh(e)}function mo(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bh(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Rl(n,e,t){return{name:po(n,e),fields:t.value.mapValue.fields}}function xv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(te(f===void 0||typeof f=="string"),Se.fromBase64String(f||"")):(te(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Se.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?k.UNKNOWN:Oh(d.code);return new M(f,d.message||"")}(a);t=new Mh(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ji(n,r.document.name),i=Xe(r.document.updateTime),a=r.document.createTime?Xe(r.document.createTime):H.min(),c=new Ve({mapValue:{fields:r.document.fields}}),u=Re.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new vs(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ji(n,r.document),i=r.readTime?Xe(r.readTime):H.min(),a=Re.newNoDocument(s,i),c=r.removedTargetIds||[];t=new vs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ji(n,r.document),i=r.removedTargetIds||[];t=new vs([],i,s,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Pv(s,i),c=r.targetId;t=new Vh(c,a)}}return t}function Uv(n,e){let t;if(e instanceof Lr)t={update:Rl(n,e.key,e.value)};else if(e instanceof Go)t={delete:po(n,e.key)};else if(e instanceof Dt)t={update:Rl(n,e.key,e.data),updateMask:Wv(e.fieldMask)};else{if(!(e instanceof Iv))return B();t={verify:po(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Ls)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof vr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Er)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ds)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw B()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Vv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B()}(n,e.precondition)),t}function Fv(n,e){return n&&n.length>0?(te(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Xe(s.updateTime):Xe(i);return a.isEqual(H.min())&&(a=Xe(i)),new Ev(a,s.transformResults||[])}(t,e))):[]}function Bv(n,e){return{documents:[Fh(n,e.path)]}}function qv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Fh(n,s);const i=function(d){if(d.length!==0)return Hh(je.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:un(E.field),direction:jv(E.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=fo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function Hv(n){let e=Mv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){te(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const E=qh(p);return E instanceof je&&ph(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(E=>function(N){return new Ns(hn(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(p){let E;return E=typeof p=="object"?p.value:p,Ks(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(p){const E=!!p.before,P=p.values||[];return new Ss(P,E)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const E=!p.before,P=p.values||[];return new Ss(P,E)}(t.endAt)),av(e,s,a,i,c,"F",u,d)}function zv(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=hn(t.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hn(t.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hn(t.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=hn(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(n):n.fieldFilter!==void 0?function(t){return fe.create(hn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return je.create(t.compositeFilter.filters.map(r=>qh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B()}}(t.compositeFilter.op))}(n):B()}function jv(n){return Nv[n]}function $v(n){return Lv[n]}function Gv(n){return Dv[n]}function un(n){return{fieldPath:n.canonicalString()}}function hn(n){return ve.fromServerFormat(n.fieldPath)}function Hh(n){return n instanceof fe?function(t){if(t.op==="=="){if(gl(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NAN"}};if(fl(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gl(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NOT_NAN"}};if(fl(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(t.field),op:$v(t.op),value:t.value}}}(n):n instanceof je?function(t){const r=t.getFilters().map(s=>Hh(s));return r.length===1?r[0]:{compositeFilter:{op:Gv(t.op),filters:r}}}(n):B()}function Wv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function zh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t,r,s,i=H.min(),a=H.min(),c=Se.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new It(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.ct=e}}function Qv(n){const e=Hv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ho(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this._n=new Xv}addToCollectionParentIndex(e,t){return this._n.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(kt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(kt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Xv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ee(se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ee(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new An(0)}static Ln(){return new An(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.changes=new kn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ur(r.mutation,s,xe.empty(),ge.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const s=Ft();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=sr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ft();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=ct();const a=lr(),c=function(){return lr()}();return t.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Dt)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),ur(f.mutation,d,f.mutation.getFieldMask(),ge.now())):a.set(d.key,xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var p;return c.set(d,new Zv(f,(p=a.get(d))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=lr();let s=new ae((a,c)=>a-c),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||xe.empty();f=c.applyToLocalView(d,f),r.set(u,f);const p=(s.get(c.batchId)||W()).add(u);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,p=bh();f.forEach(E=>{if(!i.has(E)){const P=Lh(t.get(E),r.get(E));P!==null&&p.set(E,P),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Eh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):S.resolve(Ft());let c=-1,u=i;return a.next(d=>S.forEach(d,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?S.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{u=u.insert(f,E)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,W())).next(f=>({batchId:c,changes:Ah(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let s=sr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=sr();return this.indexManager.getCollectionParents(e,i).next(c=>S.forEach(c,u=>{const d=function(p,E){return new Nr(E,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((p,E)=>{a=a.insert(p,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Re.newInvalidDocument(f)))});let c=sr();return a.forEach((u,d)=>{const f=i.get(u);f!==void 0&&ur(f.mutation,d,xe.empty(),ge.now()),Ys(t,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return S.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Xe(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:Qv(s.bundledQuery),readTime:Xe(s.readTime)}}(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.overlays=new ae(U.comparator),this.hr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ft();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const s=Ft(),i=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ae((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=Ft(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=Ft(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return S.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new bv(t,r));let i=this.hr.get(t);i===void 0&&(i=W(),this.hr.set(t,i)),this.hr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.Pr=new Ee(me.Ir),this.Tr=new Ee(me.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new me(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new me(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new U(new se([])),r=new me(t,e),s=new me(t,e+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new U(new se([])),r=new me(t,e),s=new me(t,e+1);let i=W();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new me(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class me{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return U.comparator(e.key,t.key)||J(e.pr,t.pr)}static Er(e,t){return J(e.pr,t.pr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new Ee(me.Ir)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Av(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.wr=this.wr.add(new me(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.br(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new me(t,0),s=new me(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const c=this.Sr(a.pr);i.push(c)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ee(J);return t.forEach(s=>{const i=new me(s,0),a=new me(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],c=>{r=r.add(c.pr)})}),S.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const a=new me(new U(i),0);let c=new Ee(J);return this.wr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.pr)),!0)},a),S.resolve(this.Dr(c))}Dr(e){const t=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){te(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return S.forEach(t.mutations,s=>{const i=new me(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new me(t,0),s=this.wr.firstAfterOrEqual(r);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.vr=e,this.docs=function(){return new ae(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=ct();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ct();const a=t.path,c=new U(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||zy(Hy(f),r)<=0||(s.has(f.key)||Ys(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,r,s){B()}Fr(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new iE(this)}getSize(e){return S.resolve(this.size)}}class iE extends Jv{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.persistence=e,this.Mr=new kn(t=>jo(t),$o),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Yo,this.targetCount=0,this.Lr=An.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),S.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new An(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.qn(t),S.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t){this.Br={},this.overlays={},this.kr=new Bo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new oE(this),this.indexManager=new Yv,this.remoteDocumentCache=function(s){return new sE(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Kv(t),this.$r=new tE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new rE(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new cE(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,t){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class cE extends $y{constructor(e){super(),this.currentSequenceNumber=e}}class Xo{constructor(e){this.persistence=e,this.zr=new Yo,this.jr=null}static Hr(e){return new Xo(e)}get Jr(){if(this.jr)return this.jr;throw B()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),S.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Jr,r=>{const s=U.fromPath(r);return this.Yr(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return S.or([()=>S.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=s}static Ki(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Jo(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return np()?8:Gy(we())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ji(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new lE;return this.Ji(e,t,a).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,t,a,c.size)})}).next(()=>i.result)}Yi(e,t,r,s){return r.documentReadCount<this.Wi?(Zn()<=K.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",ln(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),S.resolve()):(Zn()<=K.DEBUG&&x("QueryEngine","Query:",ln(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Zn()<=K.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",ln(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ye(t))):S.resolve())}ji(e,t){if(yl(t))return S.resolve(null);let r=Ye(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ho(t,null,"F"),r=Ye(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=W(...i);return this.zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Zi(t,c);return this.Xi(t,d,a,u.readTime)?this.ji(e,ho(t,null,"F")):this.es(e,d,t,u)}))})))}Hi(e,t,r,s){return yl(t)||s.isEqual(H.min())?S.resolve(null):this.zi.getDocuments(e,r).next(i=>{const a=this.Zi(t,i);return this.Xi(t,a,r,s)?S.resolve(null):(Zn()<=K.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ln(t)),this.es(e,a,t,qy(s,-1)).next(c=>c))})}Zi(e,t){let r=new Ee(Th(e));return t.forEach((s,i)=>{Ys(e,i)&&(r=r.add(i))}),r}Xi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,t,r){return Zn()<=K.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",ln(t)),this.zi.getDocumentsMatchingQuery(e,t,kt.min(),r)}es(e,t,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t,r,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new ae(J),this.rs=new kn(i=>jo(i),$o),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eE(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function dE(n,e,t,r){return new hE(n,e,t,r)}async function jh(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=W();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(d=>({us:d,removedBatchIds:a,addedBatchIds:c}))})})}function fE(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.os.newChangeBuffer({trackRemovals:!0});return function(c,u,d,f){const p=d.batch,E=p.keys();let P=S.resolve();return E.forEach(N=>{P=P.next(()=>f.getEntry(u,N)).next(V=>{const L=d.docVersions.get(N);te(L!==null),V.version.compareTo(L)<0&&(p.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),f.addEntry(V)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(u,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=W();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function $h(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function gE(n,e){const t=$(n),r=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const c=[];e.targetChanges.forEach((f,p)=>{const E=s.get(p);if(!E)return;c.push(t.Qr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Qr.addMatchingKeys(i,f.addedDocuments,p)));let P=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?P=P.withResumeToken(Se.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,r)),s=s.insert(p,P),function(V,L,z){return V.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(E,P,f)&&c.push(t.Qr.updateTargetData(i,P))});let u=ct(),d=W();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(pE(i,a,e.documentUpdates).next(f=>{u=f.cs,d=f.ls})),!r.isEqual(H.min())){const f=t.Qr.getLastRemoteSnapshotVersion(i).next(p=>t.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return S.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.ns=s,i))}function pE(n,e,t){let r=W(),s=W();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ct();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{cs:a,ls:s}})}function mE(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _E(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Qr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):t.Qr.allocateTargetId(r).next(a=>(s=new It(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function _o(n,e,t){const r=$(n),s=r.ns.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Sr(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function kl(n,e,t){const r=$(n);let s=H.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const p=$(u),E=p.rs.get(f);return E!==void 0?S.resolve(p.ns.get(E)):p.Qr.getTargetData(d,f)}(r,a,Ye(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?s:H.min(),t?i:W())).next(c=>(yE(r,lv(e),c),{documents:c,hs:i})))}function yE(n,e,t){let r=n.ss.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(e,r)}class Sl{constructor(){this.activeTargetIds=pv()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vE{constructor(){this.no=new Sl,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Sl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as=null;function $i(){return as===null?as=function(){return 268435456+Math.round(2147483648*Math.random())}():as++,"0x"+as.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="WebChannelConnection";class IE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(t,r,s,i,a){const c=$i(),u=this.vo(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,i,a),this.Mo(t,u,d,s).then(f=>(x("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw En("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",s),f})}xo(t,r,s,i,a,c){return this.Co(t,r,s,i,a)}Fo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}vo(t,r){const s=wE[t];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,s){const i=$i();return new Promise((a,c)=>{const u=new nh;u.setWithCredentials(!0),u.listenOnce(sh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ms.NO_ERROR:const f=u.getResponseJson();x(Pe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case ms.TIMEOUT:x(Pe,`RPC '${e}' ${i} timed out`),c(new M(k.DEADLINE_EXCEEDED,"Request time out"));break;case ms.HTTP_ERROR:const p=u.getStatus();if(x(Pe,`RPC '${e}' ${i} failed with status:`,p,"response text:",u.getResponseText()),p>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const P=E==null?void 0:E.error;if(P&&P.status&&P.message){const N=function(L){const z=L.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(z)>=0?z:k.UNKNOWN}(P.status);c(new M(N,P.message))}else c(new M(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new M(k.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{x(Pe,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);x(Pe,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)})}Oo(e,t,r){const s=$i(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ah(),c=oh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new rh({})),this.Fo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");x(Pe,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=a.createWebChannel(f,u);let E=!1,P=!1;const N=new TE({lo:L=>{P?x(Pe,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(E||(x(Pe,`Opening RPC '${e}' stream ${s} transport.`),p.open(),E=!0),x(Pe,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},ho:()=>p.close()}),V=(L,z,j)=>{L.listen(z,q=>{try{j(q)}catch(G){setTimeout(()=>{throw G},0)}})};return V(p,rr.EventType.OPEN,()=>{P||(x(Pe,`RPC '${e}' stream ${s} transport opened.`),N.mo())}),V(p,rr.EventType.CLOSE,()=>{P||(P=!0,x(Pe,`RPC '${e}' stream ${s} transport closed`),N.po())}),V(p,rr.EventType.ERROR,L=>{P||(P=!0,En(Pe,`RPC '${e}' stream ${s} transport errored:`,L),N.po(new M(k.UNAVAILABLE,"The operation could not be completed")))}),V(p,rr.EventType.MESSAGE,L=>{var z;if(!P){const j=L.data[0];te(!!j);const q=j,G=q.error||((z=q[0])===null||z===void 0?void 0:z.error);if(G){x(Pe,`RPC '${e}' stream ${s} received error:`,G);const oe=G.status;let ne=function(v){const w=he[v];if(w!==void 0)return Oh(w)}(oe),T=G.message;ne===void 0&&(ne=k.INTERNAL,T="Unknown error status: "+oe+" with message "+G.message),P=!0,N.po(new M(ne,T)),p.close()}else x(Pe,`RPC '${e}' stream ${s} received:`,j),N.yo(j)}}),V(c,ih.STAT_EVENT,L=>{L.stat===io.PROXY?x(Pe,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===io.NOPROXY&&x(Pe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.fo()},0),N}}function Gi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n){return new Ov(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t,r,s,i,a,c,u){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Gh(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(at(t.toString()),at("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===t&&this.u_(r,s)},r=>{e(()=>{const s=new M(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AE extends Wh{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=xv(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Xe(a.readTime):H.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=mo(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=lo(u)?{documents:Bv(i,u)}:{query:qv(i,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=xh(i,a.resumeToken);const d=fo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(H.min())>0){c.readTime=Os(i,a.snapshotVersion.toTimestamp());const d=fo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=zv(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=mo(this.serializer),t.removeTarget=e,this.i_(t)}}class bE extends Wh{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=Fv(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.A_(r,t)}return te(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=mo(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Uv(this.serializer,r))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(e,go(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(k.UNKNOWN,i.toString())})}xo(e,t,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(e,go(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(k.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class CE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(at(t),this.y_=!1):x("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{nn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=$(u);d.M_.add(4),await Or(d),d.N_.set("Unknown"),d.M_.delete(4),await ti(d)}(this))})}),this.N_=new CE(r,s)}}async function ti(n){if(nn(n))for(const e of n.x_)await e(!0)}async function Or(n){for(const e of n.x_)await e(!1)}function Kh(n,e){const t=$(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),na(t)?ta(t):Sn(t).Xo()&&ea(t,e))}function Zo(n,e){const t=$(n),r=Sn(t);t.F_.delete(e),r.Xo()&&Qh(t,e),t.F_.size===0&&(r.Xo()?r.n_():nn(t)&&t.N_.set("Unknown"))}function ea(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Sn(n).P_(e)}function Qh(n,e){n.L_.xe(e),Sn(n).I_(e)}function ta(n){n.L_=new Sv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Sn(n).start(),n.N_.w_()}function na(n){return nn(n)&&!Sn(n).Zo()&&n.F_.size>0}function nn(n){return $(n).M_.size===0}function Yh(n){n.L_=void 0}async function kE(n){n.N_.set("Online")}async function SE(n){n.F_.forEach((e,t)=>{ea(n,e)})}async function NE(n,e){Yh(n),na(n)?(n.N_.D_(e),ta(n)):n.N_.set("Unknown")}async function LE(n,e,t){if(n.N_.set("Online"),e instanceof Mh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.F_.delete(c),s.L_.removeTarget(c))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vs(n,r)}else if(e instanceof vs?n.L_.Ke(e):e instanceof Vh?n.L_.He(e):n.L_.We(e),!t.isEqual(H.min()))try{const r=await $h(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.L_.rt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.F_.get(d);f&&i.F_.set(d,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const f=i.F_.get(u);if(!f)return;i.F_.set(u,f.withResumeToken(Se.EMPTY_BYTE_STRING,f.snapshotVersion)),Qh(i,u);const p=new It(f.target,u,d,f.sequenceNumber);ea(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Vs(n,r)}}async function Vs(n,e,t){if(!Sr(e))throw e;n.M_.add(1),await Or(n),n.N_.set("Offline"),t||(t=()=>$h(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await ti(n)})}function Xh(n,e){return e().catch(t=>Vs(n,t,e))}async function ni(n){const e=$(n),t=Nt(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;DE(e);)try{const s=await mE(e.localStore,r);if(s===null){e.v_.length===0&&t.n_();break}r=s.batchId,OE(e,s)}catch(s){await Vs(e,s)}Jh(e)&&Zh(e)}function DE(n){return nn(n)&&n.v_.length<10}function OE(n,e){n.v_.push(e);const t=Nt(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function Jh(n){return nn(n)&&!Nt(n).Zo()&&n.v_.length>0}function Zh(n){Nt(n).start()}async function VE(n){Nt(n).V_()}async function ME(n){const e=Nt(n);for(const t of n.v_)e.d_(t.mutations)}async function xE(n,e,t){const r=n.v_.shift(),s=Wo.from(r,e,t);await Xh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ni(n)}async function UE(n,e){e&&Nt(n).E_&&await async function(r,s){if(function(a){return Cv(a)&&a!==k.ABORTED}(s.code)){const i=r.v_.shift();Nt(r).t_(),await Xh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ni(r)}}(n,e),Jh(n)&&Zh(n)}async function Ll(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=nn(t);t.M_.add(3),await Or(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await ti(t)}async function FE(n,e){const t=$(n);e?(t.M_.delete(2),await ti(t)):e||(t.M_.add(2),await Or(t),t.N_.set("Unknown"))}function Sn(n){return n.B_||(n.B_=function(t,r,s){const i=$(t);return i.f_(),new AE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:kE.bind(null,n),To:SE.bind(null,n),Ao:NE.bind(null,n),h_:LE.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),na(n)?ta(n):n.N_.set("Unknown")):(await n.B_.stop(),Yh(n))})),n.B_}function Nt(n){return n.k_||(n.k_=function(t,r,s){const i=$(t);return i.f_(),new bE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:VE.bind(null,n),Ao:UE.bind(null,n),R_:ME.bind(null,n),A_:xE.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await ni(n)):(await n.k_.stop(),n.v_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new ra(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sa(n,e){if(at("AsyncQueue",`${e}: ${n}`),Sr(n))return new M(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=sr(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new mn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new mn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.q_=new ae(U.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):B():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class bn{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new bn(e,t,mn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class qE{constructor(){this.queries=new kn(e=>wh(e),Qs),this.onlineState="Unknown",this.z_=new Set}}async function HE(n,e){const t=$(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new BE,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await t.onListen(s,!0);break;case 1:i.K_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=sa(a,`Initialization of query '${ln(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.U_.push(e),e.j_(t.onlineState),i.K_&&e.H_(i.K_)&&ia(t)}async function zE(n,e){const t=$(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.U_.indexOf(e);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jE(n,e){const t=$(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.U_)c.H_(s)&&(r=!0);a.K_=s}}r&&ia(t)}function $E(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(t);r.queries.delete(e)}function ia(n){n.z_.forEach(e=>{e.next()})}var yo,Ol;(Ol=yo||(yo={})).J_="default",Ol.Cache="cache";class GE{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new bn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==yo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.key=e}}class td{constructor(e){this.key=e}}class WE{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=W(),this.mutatedKeys=W(),this.Ia=Th(e),this.Ta=new mn(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new Dl,s=t?t.Ta:this.Ta;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const E=s.get(f),P=Ys(this.query,p)?p:null,N=!!E&&this.mutatedKeys.has(E.key),V=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let L=!1;E&&P?E.data.isEqual(P.data)?N!==V&&(r.track({type:3,doc:P}),L=!0):this.Ra(E,P)||(r.track({type:2,doc:P}),L=!0,(u&&this.Ia(P,u)>0||d&&this.Ia(P,d)<0)&&(c=!0)):!E&&P?(r.track({type:0,doc:P}),L=!0):E&&!P&&(r.track({type:1,doc:E}),L=!0,(u||d)&&(c=!0)),L&&(P?(a=a.add(P),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((f,p)=>function(P,N){const V=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return V(P)-V(N)}(f.type,p.type)||this.Ia(f.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=t&&!s?this.ma():[],u=this.Pa.size===0&&this.current&&!s?1:0,d=u!==this.ha;return this.ha=u,a.length!==0||d?{snapshot:new bn(this.query,e.Ta,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Dl,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=W(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new td(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new ed(r))}),t}pa(e){this.la=e.hs,this.Pa=W();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return bn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class KE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class QE{constructor(e){this.key=e,this.wa=!1}}class YE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new kn(c=>wh(c),Qs),this.Da=new Map,this.Ca=new Set,this.va=new ae(U.comparator),this.Fa=new Map,this.Ma=new Yo,this.xa={},this.Oa=new Map,this.Na=An.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function XE(n,e,t=!0){const r=ad(n);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await nd(r,e,t,!0),s}async function JE(n,e){const t=ad(n);await nd(t,e,!0,!1)}async function nd(n,e,t,r){const s=await _E(n.localStore,Ye(e)),i=s.targetId,a=t?n.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await ZE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Kh(n.remoteStore,s),c}async function ZE(n,e,t,r,s){n.Ba=(p,E,P)=>async function(V,L,z,j){let q=L.view.da(z);q.Xi&&(q=await kl(V.localStore,L.query,!1).then(({documents:T})=>L.view.da(T,q)));const G=j&&j.targetChanges.get(L.targetId),oe=j&&j.targetMismatches.get(L.targetId)!=null,ne=L.view.applyChanges(q,V.isPrimaryClient,G,oe);return Ml(V,L.targetId,ne.fa),ne.snapshot}(n,p,E,P);const i=await kl(n.localStore,e,!0),a=new WE(e,i.hs),c=a.da(i.documents),u=Dr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);Ml(n,t,d.fa);const f=new KE(e,t,a);return n.ba.set(e,f),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),d.snapshot}async function ew(n,e,t){const r=$(n),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(a=>!Qs(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _o(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Zo(r.remoteStore,s.targetId),vo(r,s.targetId)}).catch(kr)):(vo(r,s.targetId),await _o(r.localStore,s.targetId,!0))}async function tw(n,e){const t=$(n),r=t.ba.get(e),s=t.Da.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Zo(t.remoteStore,r.targetId))}async function nw(n,e,t){const r=lw(n);try{const s=await function(a,c){const u=$(a),d=ge.now(),f=c.reduce((P,N)=>P.add(N.key),W());let p,E;return u.persistence.runTransaction("Locally write mutations","readwrite",P=>{let N=ct(),V=W();return u.os.getEntries(P,f).next(L=>{N=L,N.forEach((z,j)=>{j.isValidDocument()||(V=V.add(z))})}).next(()=>u.localDocuments.getOverlayedDocuments(P,N)).next(L=>{p=L;const z=[];for(const j of c){const q=Tv(j,p.get(j.key).overlayedDocument);q!=null&&z.push(new Dt(j.key,q,dh(q.value.mapValue),He.exists(!0)))}return u.mutationQueue.addMutationBatch(P,d,z,c)}).next(L=>{E=L;const z=L.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(P,L.batchId,z)})}).then(()=>({batchId:E.batchId,changes:Ah(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.xa[a.currentUser.toKey()];d||(d=new ae(J)),d=d.insert(c,u),a.xa[a.currentUser.toKey()]=d}(r,s.batchId,t),await Vr(r,s.changes),await ni(r.remoteStore)}catch(s){const i=sa(s,"Failed to persist write");t.reject(i)}}async function rd(n,e){const t=$(n);try{const r=await gE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Fa.get(i);a&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?te(a.wa):s.removedDocuments.size>0&&(te(a.wa),a.wa=!1))}),await Vr(t,r,e)}catch(r){await kr(r)}}function Vl(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ba.forEach((i,a)=>{const c=a.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=$(a);u.onlineState=c;let d=!1;u.queries.forEach((f,p)=>{for(const E of p.U_)E.j_(c)&&(d=!0)}),d&&ia(u)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rw(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Fa.get(e),i=s&&s.key;if(i){let a=new ae(U.comparator);a=a.insert(i,Re.newNoDocument(i,H.min()));const c=W().add(i),u=new Zs(H.min(),new Map,new ae(J),a,c);await rd(r,u),r.va=r.va.remove(i),r.Fa.delete(e),oa(r)}else await _o(r.localStore,e,!1).then(()=>vo(r,e,t)).catch(kr)}async function sw(n,e){const t=$(n),r=e.batch.batchId;try{const s=await fE(t.localStore,e);id(t,r,null),sd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vr(t,s)}catch(s){await kr(s)}}async function iw(n,e,t){const r=$(n);try{const s=await function(a,c){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next(p=>(te(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);id(r,e,t),sd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vr(r,s)}catch(s){await kr(s)}}function sd(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function id(n,e,t){const r=$(n);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function vo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||od(n,r)})}function od(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(Zo(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),oa(n))}function Ml(n,e,t){for(const r of t)r instanceof ed?(n.Ma.addReference(r.key,e),ow(n,r)):r instanceof td?(x("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||od(n,r.key)):B()}function ow(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(x("SyncEngine","New document in limbo: "+t),n.Ca.add(r),oa(n))}function oa(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new U(se.fromString(e)),r=n.Na.next();n.Fa.set(r,new QE(t)),n.va=n.va.insert(t,r),Kh(n.remoteStore,new It(Ye(vh(t.path)),r,"TargetPurposeLimboResolution",Bo.oe))}}async function Vr(n,e,t){const r=$(n),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,u)=>{a.push(r.Ba(u,e,t).then(d=>{if((d||t)&&r.isPrimaryClient){const f=d&&!d.fromCache;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){s.push(d);const f=Jo.Ki(u.targetId,d);i.push(f)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(u,d){const f=$(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>S.forEach(d,E=>S.forEach(E.qi,P=>f.persistence.referenceDelegate.addReference(p,E.targetId,P)).next(()=>S.forEach(E.Qi,P=>f.persistence.referenceDelegate.removeReference(p,E.targetId,P)))))}catch(p){if(!Sr(p))throw p;x("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const E=p.targetId;if(!p.fromCache){const P=f.ns.get(E),N=P.snapshotVersion,V=P.withLastLimboFreeSnapshotVersion(N);f.ns=f.ns.insert(E,V)}}}(r.localStore,i))}async function aw(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await jh(t.localStore,e);t.currentUser=e,function(i,a){i.Oa.forEach(c=>{c.forEach(u=>{u.reject(new M(k.CANCELLED,a))})}),i.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vr(t,r.us)}}function cw(n,e){const t=$(n),r=t.Fa.get(e);if(r&&r.wa)return W().add(r.key);{let s=W();const i=t.Da.get(e);if(!i)return s;for(const a of i){const c=t.ba.get(a);s=s.unionWith(c.view.Ea)}return s}}function ad(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rw.bind(null,e),e.Sa.h_=jE.bind(null,e.eventManager),e.Sa.ka=$E.bind(null,e.eventManager),e}function lw(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iw.bind(null,e),e}class xl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ei(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return dE(this.persistence,new uE,e.initialUser,this.serializer)}createPersistence(e){return new aE(Xo.Hr,this.serializer)}createSharedClientState(e){return new vE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aw.bind(null,this.syncEngine),await FE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qE}()}createDatastore(e){const t=ei(e.databaseInfo.databaseId),r=function(i){return new IE(i)}(e.databaseInfo);return function(i,a,c,u){return new PE(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new RE(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Vl(this.syncEngine,t,0),function(){return Nl.D()?new Nl:new EE}())}createSyncEngine(e,t){return function(s,i,a,c,u,d,f){const p=new YE(s,i,a,c,u,d);return f&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const s=$(r);x("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Or(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):at("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ce.UNAUTHENTICATED,this.clientId=lh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=sa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wi(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ul(n,e){n.asyncQueue.verifyOperationInProgress();const t=await gw(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ll(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ll(e.remoteStore,s)),n._onlineComponents=e}function fw(n){return n.name==="FirebaseError"?n.code===k.FAILED_PRECONDITION||n.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function gw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!fw(t))throw t;En("Error using user provided cache. Falling back to memory cache: "+t),await Wi(n,new xl)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Wi(n,new xl);return n._offlineComponents}async function cd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Ul(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Ul(n,new uw))),n._onlineComponents}function pw(n){return cd(n).then(e=>e.syncEngine)}async function mw(n){const e=await cd(n),t=e.eventManager;return t.onListen=XE.bind(null,e.syncEngine),t.onUnlisten=ew.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=JE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tw.bind(null,e.syncEngine),t}function _w(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const f=new hw({next:E=>{a.enqueueAndForget(()=>zE(i,p)),E.fromCache&&u.source==="server"?d.reject(new M(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),p=new GE(c,f,{includeMetadataChanges:!0,ra:!0});return HE(i,p)}(await mw(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n,e,t){if(!t)throw new M(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function yw(n,e,t,r){if(e===!0&&r===!0)throw new M(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Bl(n){if(!U.isDocumentKey(n))throw new M(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ql(n){if(U.isDocumentKey(n))throw new M(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ri(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B()}function Qt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ri(n);throw new M(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ld((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class si{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ly;switch(r.type){case"firstParty":return new My(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Fl.get(t);r&&(x("ComponentProvider","Removing Datastore"),Fl.delete(t),r.terminate())}(this),Promise.resolve()}}function vw(n,e,t,r={}){var s;const i=(n=Qt(n,si))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&En("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Ce.MOCK_USER;else{c=mu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new M(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ce(d)}n._authCredentials=new Dy(new ch(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nn(this.firestore,e,this._query)}}class Fe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class Ct extends Nn{constructor(e,t,r){super(e,t,vh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new U(e))}withConverter(e){return new Ct(this.firestore,e,this._path)}}function hd(n,e,...t){if(n=ie(n),ud("collection","path",e),n instanceof si){const r=se.fromString(e,...t);return ql(r),new Ct(n,null,r)}{if(!(n instanceof Fe||n instanceof Ct))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return ql(r),new Ct(n.firestore,null,r)}}function aa(n,e,...t){if(n=ie(n),arguments.length===1&&(e=lh.newId()),ud("doc","path",e),n instanceof si){const r=se.fromString(e,...t);return Bl(r),new Fe(n,null,new U(r))}{if(!(n instanceof Fe||n instanceof Ct))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return Bl(r),new Fe(n.firestore,n instanceof Ct?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Gh(this,"async_queue_retry"),this.hu=()=>{const t=Gi();t&&x("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=Gi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=Gi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Pt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Sr(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw at("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const s=ra.createAndSchedule(this,e,t,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&B()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class Mr extends si{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new Ew}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fd(this),this._firestoreClient.terminate()}}function ww(n,e){const t=typeof n=="object"?n:ko(),r=typeof n=="string"?n:"(default)",s=qs(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=fu("firestore");i&&vw(s,...i)}return s}function dd(n){return n._firestoreClient||fd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function fd(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,d,f){return new Qy(c,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ld(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new dw(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pn(Se.fromBase64String(e))}catch(t){throw new M(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pn(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=/^__.*__$/;class Iw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Dt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lr(e,this.data,t,this.fieldTransforms)}}class gd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Dt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function pd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class ua{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ua(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Ms(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(pd(this.fu)&&Tw.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Aw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ei(e)}Fu(e,t,r,s=!1){return new ua({fu:e,methodName:t,vu:r,path:ve.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ha(n){const e=n._freezeSettings(),t=ei(n._databaseId);return new Aw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function bw(n,e,t,r,s,i={}){const a=n.Fu(i.merge||i.mergeFields?2:0,e,t,s);da("Data must be an object, but it was:",a,r);const c=md(r,a);let u,d;if(i.merge)u=new xe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const E=Eo(e,p,t);if(!a.contains(E))throw new M(k.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);yd(f,E)||f.push(E)}u=new xe(f),d=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=a.fieldTransforms;return new Iw(new Ve(c),u,d)}class oi extends ca{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oi}}function Pw(n,e,t,r){const s=n.Fu(1,e,t);da("Data must be an object, but it was:",s,r);const i=[],a=Ve.empty();tn(r,(u,d)=>{const f=fa(e,u,t);d=ie(d);const p=s.Su(f);if(d instanceof oi)i.push(f);else{const E=xr(d,p);E!=null&&(i.push(f),a.set(f,E))}});const c=new xe(i);return new gd(a,c,s.fieldTransforms)}function Cw(n,e,t,r,s,i){const a=n.Fu(1,e,t),c=[Eo(e,r,t)],u=[s];if(i.length%2!=0)throw new M(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(Eo(e,i[E])),u.push(i[E+1]);const d=[],f=Ve.empty();for(let E=c.length-1;E>=0;--E)if(!yd(d,c[E])){const P=c[E];let N=u[E];N=ie(N);const V=a.Su(P);if(N instanceof oi)d.push(P);else{const L=xr(N,V);L!=null&&(d.push(P),f.set(P,L))}}const p=new xe(d);return new gd(f,p,a.fieldTransforms)}function Rw(n,e,t,r=!1){return xr(t,n.Fu(r?4:3,e))}function xr(n,e){if(_d(n=ie(n)))return da("Unsupported field value:",e,n),md(n,e);if(n instanceof ca)return function(r,s){if(!pd(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=xr(c,s.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ge.fromDate(r);return{timestampValue:Os(s.serializer,i)}}if(r instanceof ge){const i=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Os(s.serializer,i)}}if(r instanceof la)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pn)return{bytesValue:xh(s.serializer,r._byteString)};if(r instanceof Fe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qo(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${ri(r)}`)}(n,e)}function md(n,e){const t={};return uh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tn(n,(r,s)=>{const i=xr(s,e.pu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function _d(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ge||n instanceof la||n instanceof Pn||n instanceof Fe||n instanceof ca)}function da(n,e,t){if(!_d(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ri(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function Eo(n,e,t){if((e=ie(e))instanceof ii)return e._internalPath;if(typeof e=="string")return fa(n,e);throw Ms("Field path arguments must be of type string or ",n,!1,void 0,t)}const kw=new RegExp("[~\\*/\\[\\]]");function fa(n,e,t){if(e.search(kw)>=0)throw Ms(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ii(...e.split("."))._internalPath}catch{throw Ms(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ms(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new M(k.INVALID_ARGUMENT,c+n+u)}function yd(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ga("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Sw extends vd{data(){return super.data()}}function ga(n,e){return typeof e=="string"?fa(n,e):e instanceof ii?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pa{}class Lw extends pa{}function Dw(n,e,...t){let r=[];e instanceof pa&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof ma).length,c=i.filter(u=>u instanceof ai).length;if(a>1||a>0&&c>0)throw new M(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ai extends Lw{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ai(e,t,r)}_apply(e){const t=this._parse(e);return Ed(e._query,t),new Nn(e.firestore,e.converter,uo(e._query,t))}_parse(e){const t=ha(e.firestore);return function(i,a,c,u,d,f,p){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new M(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){jl(p,f);const P=[];for(const N of p)P.push(zl(u,i,N));E={arrayValue:{values:P}}}else E=zl(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||jl(p,f),E=Rw(c,a,p,f==="in"||f==="not-in");return fe.create(d,f,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ow(n,e,t){const r=e,s=ga("where",n);return ai._create(s,r,t)}class ma extends pa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ma(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:je.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Ed(a,u),a=uo(a,u)}(e._query,t),new Nn(e.firestore,e.converter,uo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zl(n,e,t){if(typeof(t=ie(t))=="string"){if(t==="")throw new M(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Eh(e)&&t.indexOf("/")!==-1)throw new M(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(se.fromString(t));if(!U.isDocumentKey(r))throw new M(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return dl(n,new U(r))}if(t instanceof Fe)return dl(n,t._key);throw new M(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ri(t)}.`)}function jl(n,e){if(!Array.isArray(n)||n.length===0)throw new M(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ed(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new M(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Vw{convertValue(e,t="none"){switch(Kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw B()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return tn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new la(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ho(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(mr(e));default:return null}}convertTimestamp(e){const t=St(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);te(zh(r));const s=new _r(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||at(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xw extends vd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Es(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ga("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Es extends xw{data(e={}){return super.data(e)}}class Uw{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new cs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Es(this._firestore,this._userDataWriter,r.key,r,new cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Es(s._firestore,s._userDataWriter,c.doc.key,c.doc,new cs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Es(s._firestore,s._userDataWriter,c.doc.key,c.doc,new cs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Fw(c.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Fw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}class Bw extends Vw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,t)}}function qw(n){n=Qt(n,Nn);const e=Qt(n.firestore,Mr),t=dd(e),r=new Bw(e);return Nw(n._query),_w(t,n._query).then(s=>new Uw(e,r,n,s))}function Hw(n,e,t,...r){n=Qt(n,Fe);const s=Qt(n.firestore,Mr),i=ha(s);let a;return a=typeof(e=ie(e))=="string"||e instanceof ii?Cw(i,"updateDoc",n._key,e,t,r):Pw(i,"updateDoc",n._key,e),_a(s,[a.toMutation(n._key,He.exists(!0))])}function zw(n){return _a(Qt(n.firestore,Mr),[new Go(n._key,He.none())])}function jw(n,e){const t=Qt(n.firestore,Mr),r=aa(n),s=Mw(n.converter,e);return _a(t,[bw(ha(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,He.exists(!1))]).then(()=>r)}function _a(n,e){return function(r,s){const i=new Pt;return r.asyncQueue.enqueueAndForget(async()=>nw(await pw(r),s,i)),i.promise}(dd(n),e)}(function(e,t=!0){(function(s){Rn=s})(Zt),jt(new Rt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Mr(new Oy(r.getProvider("auth-internal")),new Uy(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _r(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),We(cl,"4.6.3",e),We(cl,"4.6.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="firebasestorage.googleapis.com",Td="storageBucket",$w=2*60*1e3,Gw=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends Ze{constructor(e,t,r=0){super(Ki(e),`Firebase Storage: ${t} (${Ki(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ki(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var le;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(le||(le={}));function Ki(n){return"storage/"+n}function ya(){const n="An unknown error occurred, please check the error payload for server response.";return new ue(le.UNKNOWN,n)}function Ww(n){return new ue(le.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Kw(n){return new ue(le.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Qw(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ue(le.UNAUTHENTICATED,n)}function Yw(){return new ue(le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Xw(n){return new ue(le.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Jw(){return new ue(le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Zw(){return new ue(le.CANCELED,"User canceled the upload/download.")}function eT(n){return new ue(le.INVALID_URL,"Invalid URL '"+n+"'.")}function tT(n){return new ue(le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function nT(){return new ue(le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Td+"' property when initializing the app?")}function rT(){return new ue(le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sT(){return new ue(le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iT(n){return new ue(le.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function wo(n){return new ue(le.INVALID_ARGUMENT,n)}function Id(){return new ue(le.APP_DELETED,"The Firebase app was deleted.")}function oT(n){return new ue(le.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function hr(n,e){return new ue(le.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function er(n){throw new ue(le.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ue.makeFromUrl(e,t)}catch{return new Ue(e,"")}if(r.path==="")return r;throw tT(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function d(G){G.path_=decodeURIComponent(G.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",P=new RegExp(`^https?://${p}/${f}/b/${s}/o${E}`,"i"),N={bucket:1,path:3},V=t===wd?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",z=new RegExp(`^https?://${V}/${s}/${L}`,"i"),q=[{regex:c,indices:u,postModify:i},{regex:P,indices:N,postModify:d},{regex:z,indices:{bucket:1,path:2},postModify:d}];for(let G=0;G<q.length;G++){const oe=q[G],ne=oe.regex.exec(e);if(ne){const T=ne[oe.indices.bucket];let m=ne[oe.indices.path];m||(m=""),r=new Ue(T,m),oe.postModify(r);break}}if(r==null)throw eT(e);return r}}class aT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function u(){return c===2}let d=!1;function f(...L){d||(d=!0,e.apply(null,L))}function p(L){s=setTimeout(()=>{s=null,n(P,u())},L)}function E(){i&&clearTimeout(i)}function P(L,...z){if(d){E();return}if(L){E(),f.call(null,L,...z);return}if(u()||a){E(),f.call(null,L,...z);return}r<64&&(r*=2);let q;c===1?(c=2,q=0):q=(r+Math.random())*1e3,p(q)}let N=!1;function V(L){N||(N=!0,E(),!d&&(s!==null?(L||(c=2),clearTimeout(s),p(0)):L||(c=1)))}return p(0),i=setTimeout(()=>{a=!0,V(!0)},t),V}function lT(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(n){return n!==void 0}function hT(n){return typeof n=="object"&&!Array.isArray(n)}function va(n){return typeof n=="string"||n instanceof String}function $l(n){return Ea()&&n instanceof Blob}function Ea(){return typeof Blob<"u"}function Gl(n,e,t,r){if(r<e)throw wo(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw wo(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Ad(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ht||(Ht={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,t,r,s,i,a,c,u,d,f,p,E=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=p,this.retry=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,N)=>{this.resolve_=P,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ls(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===Ht.NO_ERROR,u=i.getStatus();if(!c||dT(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Ht.ABORT;r(!1,new ls(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new ls(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());uT(u)?i(u):i()}catch(u){a(u)}else if(c!==null){const u=ya();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(s.canceled){const u=this.appDelete_?Id():Zw();a(u)}else{const u=Jw();a(u)}};this.canceled_?t(!1,new ls(!1,null,!0)):this.backoffId_=cT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ls{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function gT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function pT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function _T(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function yT(n,e,t,r,s,i,a=!0){const c=Ad(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return mT(d,e),gT(d,t),pT(d,i),_T(d,r),new fT(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ET(...n){const e=vT();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Ea())return new Blob(n);throw new ue(le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wT(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(n){if(typeof atob>"u")throw iT("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qi{constructor(e,t){this.data=e,this.contentType=t||null}}function IT(n,e){switch(n){case Ge.RAW:return new Qi(bd(e));case Ge.BASE64:case Ge.BASE64URL:return new Qi(Pd(n,e));case Ge.DATA_URL:return new Qi(bT(e),PT(e))}throw ya()}function bd(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function AT(n){let e;try{e=decodeURIComponent(n)}catch{throw hr(Ge.DATA_URL,"Malformed data URL.")}return bd(e)}function Pd(n,e){switch(n){case Ge.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw hr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ge.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw hr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=TT(e)}catch(s){throw s.message.includes("polyfill")?s:hr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Cd{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw hr(Ge.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=CT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function bT(n){const e=new Cd(n);return e.base64?Pd(Ge.BASE64,e.rest):AT(e.rest)}function PT(n){return new Cd(n).contentType}function CT(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){let r=0,s="";$l(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if($l(this.data_)){const r=this.data_,s=wT(r,e,t);return s===null?null:new Et(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Et(r,!0)}}static getBlob(...e){if(Ea()){const t=e.map(r=>r instanceof Et?r.data_:r);return new Et(ET.apply(null,t))}else{const t=e.map(a=>va(a)?IT(Ge.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)s[i++]=a[c]}),new Et(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(n){let e;try{e=JSON.parse(n)}catch{return null}return hT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function kT(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function kd(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(n,e){return e}class De{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||ST}}let us=null;function NT(n){return!va(n)||n.length<2?n:kd(n)}function Sd(){if(us)return us;const n=[];n.push(new De("bucket")),n.push(new De("generation")),n.push(new De("metageneration")),n.push(new De("name","fullPath",!0));function e(i,a){return NT(a)}const t=new De("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new De("size");return s.xform=r,n.push(s),n.push(new De("timeCreated")),n.push(new De("updated")),n.push(new De("md5Hash",null,!0)),n.push(new De("cacheControl",null,!0)),n.push(new De("contentDisposition",null,!0)),n.push(new De("contentEncoding",null,!0)),n.push(new De("contentLanguage",null,!0)),n.push(new De("contentType",null,!0)),n.push(new De("metadata","customMetadata",!0)),us=n,us}function LT(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Ue(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function DT(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return LT(r,n),r}function Nd(n,e,t){const r=Rd(e);return r===null?null:DT(n,r,t)}function OT(n,e,t,r){const s=Rd(e);if(s===null||!va(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const f=n.bucket,p=n.fullPath,E="/b/"+a(f)+"/o/"+a(p),P=ci(E,t,r),N=Ad({alt:"media",token:d});return P+N})[0]}function VT(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class wa{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(n){if(!n)throw ya()}function MT(n,e){function t(r,s){const i=Nd(n,s,e);return Ld(i!==null),i}return t}function xT(n,e){function t(r,s){const i=Nd(n,s,e);return Ld(i!==null),OT(i,s,n.host,n._protocol)}return t}function Dd(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Yw():s=Qw():t.getStatus()===402?s=Kw(n.bucket):t.getStatus()===403?s=Xw(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Od(n){const e=Dd(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Ww(n.path)),i.serverResponse=s.serverResponse,i}return t}function UT(n,e,t){const r=e.fullServerUrl(),s=ci(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new wa(s,i,xT(n,t),a);return c.errorHandler=Od(e),c}function FT(n,e){const t=e.fullServerUrl(),r=ci(t,n.host,n._protocol),s="DELETE",i=n.maxOperationRetryTime;function a(u,d){}const c=new wa(r,s,a,i);return c.successCodes=[200,204],c.errorHandler=Od(e),c}function BT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function qT(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=BT(null,e)),r}function HT(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let q="";for(let G=0;G<2;G++)q=q+Math.random().toString().slice(2);return q}const u=c();a["Content-Type"]="multipart/related; boundary="+u;const d=qT(e,r,s),f=VT(d,t),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,E=`\r
--`+u+"--",P=Et.getBlob(p,r,E);if(P===null)throw rT();const N={name:d.fullPath},V=ci(i,n.host,n._protocol),L="POST",z=n.maxUploadRetryTime,j=new wa(V,L,MT(n,t),z);return j.urlParams=N,j.headers=a,j.body=P.uploadData(),j.errorHandler=Dd(e),j}class zT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ht.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ht.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ht.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw er("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw er("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw er("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw er("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw er("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jT extends zT{initXhr(){this.xhr_.responseType="text"}}function Ta(){return new jT}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){this._service=e,t instanceof Ue?this._location=t:this._location=Ue.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Yt(e,t)}get root(){const e=new Ue(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kd(this._location.path)}get storage(){return this._service}get parent(){const e=RT(this._location.path);if(e===null)return null;const t=new Ue(this._location.bucket,e);return new Yt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw oT(e)}}function $T(n,e,t){n._throwIfRoot("uploadBytes");const r=HT(n.storage,n._location,Sd(),new Et(e,!0),t);return n.storage.makeRequestWithTokens(r,Ta).then(s=>({metadata:s,ref:n}))}function GT(n){n._throwIfRoot("getDownloadURL");const e=UT(n.storage,n._location,Sd());return n.storage.makeRequestWithTokens(e,Ta).then(t=>{if(t===null)throw sT();return t})}function WT(n){n._throwIfRoot("deleteObject");const e=FT(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Ta)}function KT(n,e){const t=kT(n._location.path,e),r=new Ue(n._location.bucket,t);return new Yt(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(n){return/^[A-Za-z]+:\/\//.test(n)}function YT(n,e){return new Yt(n,e)}function Vd(n,e){if(n instanceof Ia){const t=n;if(t._bucket==null)throw nT();const r=new Yt(t,t._bucket);return e!=null?Vd(r,e):r}else return e!==void 0?KT(n,e):n}function XT(n,e){if(e&&QT(e)){if(n instanceof Ia)return YT(n,e);throw wo("To use ref(service, url), the first argument must be a Storage instance.")}else return Vd(n,e)}function Wl(n,e){const t=e==null?void 0:e[Td];return t==null?null:Ue.makeFromBucketSpec(t,n)}function JT(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:mu(s,n.app.options.projectId))}class Ia{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=wd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$w,this._maxUploadRetryTime=Gw,this._requests=new Set,s!=null?this._bucket=Ue.makeFromBucketSpec(s,this._host):this._bucket=Wl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ue.makeFromBucketSpec(this._url,e):this._bucket=Wl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yt(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new aT(Id());{const a=yT(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Kl="@firebase/storage",Ql="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="storage";function ZT(n,e,t){return n=ie(n),$T(n,e,t)}function eI(n){return n=ie(n),GT(n)}function tI(n){return n=ie(n),WT(n)}function xd(n,e){return n=ie(n),XT(n,e)}function nI(n=ko(),e){n=ie(n);const r=qs(n,Md).getImmediate({identifier:e}),s=fu("storage");return s&&rI(r,...s),r}function rI(n,e,t,r={}){JT(n,e,t,r)}function sI(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Ia(t,r,s,e,Zt)}function iI(){jt(new Rt(Md,sI,"PUBLIC").setMultipleInstances(!0)),We(Kl,Ql,""),We(Kl,Ql,"esm2017")}iI();const oI={apiKey:"AIzaSyCQ0RMXS1vUoRd7P4U5rwt4XfYUg2enddY",authDomain:"plantbudapp.firebaseapp.com",projectId:"plantbudapp",storageBucket:"plantbudapp.appspot.com",messagingSenderId:"806596678411",appId:"1:806596678411:web:576113580c95a0338b080e"},Aa=vu(oI),Ur=Ry(Aa),li=ww(Aa),Ud=nI(Aa),aI=async()=>{try{await p_(Ur)}catch(n){throw console.error("Error logging out:",n),n}},cI=async()=>{const n=Ur.currentUser;if(n)try{const e=Cn.credential(n.email,prompt("Please enter your password:"));await d_(n,e),await m_(n),console.log("Account deleted successfully"),window.location.href="/login.html"}catch(e){console.error("Error deleting account:",e),e.code==="auth/requires-recent-login"&&alert("Please log in again to delete your account.")}else console.log("No user is currently signed in.")},lI=n=>n.includes("firebasestorage.googleapis.com"),Fd=async(n,e)=>{const t=Ur.currentUser;if(!t)throw new Error("User not authenticated");const r=t.uid,s=`${e}/${r}/${n.name}`;try{const i=xd(Ud,s);console.log(`Uploading image: ${n.name}`),await ZT(i,n);const a=await eI(i);return console.log(`Image uploaded successfully: ${a}`),a}catch(i){throw console.error("Error uploading image:",i),i}},ba=async(n,e=!1)=>{if(!lI(n)){console.log("Image URL is not from Firebase Storage, skipping deletion.");return}if(console.log(n),!e&&n.includes("/original")){console.log("Skipping deletion of original image.");return}try{const t=xd(Ud,n);await tI(t),console.log("Image deleted successfully from Firebase Storage")}catch(t){throw console.error("Error deleting image from Firebase Storage:",t),t}},Yl=async(n,e,t)=>{try{return console.log("Adding plant to Firestore:",{userId:n,...e}),(await jw(hd(li,t),{userId:n,...e,createdAt:new Date})).id}catch(r){throw console.error("Error adding plant:",r),r}},Xl=async(n,e)=>{if(!n)return console.error("Error: userId is undefined"),[];try{const t=Dw(hd(li,e),Ow("userId","==",n)),r=await qw(t),s=[];return r.forEach(i=>{s.push({id:i.id,...i.data()})}),console.log("Fetched plants:",s),s}catch(t){throw console.error("Error getting user plants:",t),t}},ke=async(n,e,t)=>{try{const r=aa(li,t,n);await Hw(r,e)}catch(r){throw console.error("Error updating plant:",r),r}},Jl=async(n,e,t)=>{try{await zw(aa(li,e,n)),t&&e!=="original"&&await ba(t.image,!0),console.log("deleted plant from firebase")}catch(r){throw console.error("Error deleting plant:",r),r}},uI=()=>{let n=null,e=null;return{globalDomElements:()=>{if(n)return n;const t=document.querySelector(".mobile-nav-modal"),r=document.querySelector(".menu-bars"),s=document.querySelector(".mobile-nav-close-btn");return n={mobileNavModal:t,mobileMenuBars:r,mobileNavCloseBtn:s},n},dashboardDomElements:()=>{if(e)return e;const t=document.querySelector(".dashboard"),r=document.getElementById("plant-log"),s=document.getElementById("plant-quiz"),i=document.getElementById("plant-library"),a=document.getElementById("home-page"),c=document.getElementById("my-plants-btn"),u=document.getElementById("add-new-plant-btn"),d=document.getElementById("quiz-btn"),f=document.getElementById("library-btn"),p=document.getElementById("home-btn"),E=document.getElementById("desktop-my-plants-btn"),P=document.getElementById("desktop-quiz-btn"),N=document.getElementById("desktop-library-btn"),V=document.getElementById("desktop-home-btn"),L=document.querySelector("header");return ju(Ur,z=>{z&&(c.lightIcon=Ff,u.lightIcon=Po,d.lightIcon=Bf,f.lightIcon=qf,p.lightIcon=Uf,c.darkIcon=jf,u.darkIcon=Hf,d.darkIcon=$f,f.darkIcon=Gf,p.darkIcon=zf)}),e={dashboard:t,plantLogEl:r,plantQuiz:s,plantLibrary:i,homePage:a,myPlantsBtn:c,addNewPlantBtn:u,quizBtn:d,libraryBtn:f,homeBtn:p,header:L,desktopMyPlantsBtn:E,desktopQuizBtn:P,desktopLibraryBtn:N,desktopHomeBtn:V},e}}},hI=uI(),ee=hI.dashboardDomElements(),pe=(n,e)=>{if(n){for(;n.firstChild;)n.removeChild(n.firstChild);D.removeAllEventListeners("GLOBAL")}else return},Ln=(n,e,t)=>{const r=document.getElementById(n);pe(r),e()},lt=(n,e,t)=>{const r=document.querySelector(".modal-overlay");r.classList.add("flex"),n.classList.add("flex"),kb(r,n,t)},Oe=(n,e)=>{const t=document.querySelector(".modal-overlay");pe(n),pe(t),Tr(t,n),t.classList.remove("flex")},Bd=()=>{const{myPlantsBtn:n,addNewPlantBtn:e,quizBtn:t,libraryBtn:r,homeBtn:s,desktopMyPlantsBtn:i,desktopQuizBtn:a,desktopLibraryBtn:c,desktopHomeBtn:u}=ee;[n,e,t,r,s].forEach(f=>{if(f.classList.contains("active")){f.classList.add("button-active"),f.classList.remove("button-inactive");const p=f.querySelector(".icon-container");p.style.backgroundImage=`url(${f.darkIcon})`}else{f.classList.add("button-inactive"),f.classList.remove("button-active");const p=f.querySelector(".icon-container");p.style.backgroundImage=`url(${f.lightIcon})`}})},_n=(n,e,t,r,s,...i)=>{n.classList.add("active"),n.style.backgroundColor=e,n.style.color=r,i.forEach(a=>{a.style.backgroundColor=t,a.style.color=s,a.classList.remove("active")})},Zl=(n,e,...t)=>{var p;const{plantLogEl:r,plantQuiz:s,plantLibrary:i,homePage:a,header:c}=ee,u=document.querySelector(".profile-icon-container");if(n.includes(ee.addNewPlantBtn)){e();return}n.forEach(E=>{E.classList.add("active")}),t.forEach(E=>{E.classList.remove("active")});const d={myPlantsBtn:{section:r,buttons:[ee.myPlantsBtn,ee.desktopMyPlantsBtn]},addNewPlantBtn:{buttons:[ee.addNewPlantBtn,ee.desktopAddNewPlantBtn]},quizBtn:{section:s,buttons:[ee.quizBtn,ee.desktopQuizBtn]},libraryBtn:{section:i,buttons:[ee.libraryBtn,ee.desktopLibraryBtn]},homeBtn:{section:a,buttons:[ee.homeBtn,ee.desktopHomeBtn]}},f=(p=Object.values(d).find(E=>E.buttons.some(P=>n.includes(P))))==null?void 0:p.section;[r,s,i,a].forEach(E=>{pe(E),E.style.height="0"}),f&&(f.style.height="100%",e()),f!==a?(c.classList.add("hidden-nav"),u.classList.add("hidden-nav")):(c.classList.remove("hidden-nav"),u.classList.remove("hidden-nav")),Bd()},xs=[{name:"Snake Plant",id:1,image:ou,skill:["Beginner"],location:["Home","Office","Bedroom","Living Room"],flowering:["No"],size:["Short","Tall"],transferToOutdoors:["Yes"],time:["Not much","A lot"],interest:["Not really","Kind of"],lowEffort:["Yes"],shortDescription:"Tough and adaptable, perfect for beginners.",waterSchedule:"Every 2-3 weeks, less often in winter.",tempLight:"Indirect sunlight to partial shade. 15-26°C.",description:"The Snake Plant, or Sansevieria, is a highly durable and low-maintenance indoor plant known for its air-purifying qualities. Its stiff, upright leaves grow vertically, making it an ideal plant for small spaces.",requirements:[],tasks:[],tags:[]},{name:"Anthurium",id:2,image:tg,skill:["Medium","Advanced"],location:["Home","Bedroom","Living Room"],flowering:["Yes"],size:["Short"],transferToOutdoors:["No"],time:["Medium"],interest:["Very","Kind of"],lowEffort:["No"],shortDescription:"Features glossy, heart-shaped leaves with bright flowers.",waterSchedule:"Weekly, keep soil lightly moist.",tempLight:"Bright, indirect light. 18-27°C.",description:"Anthuriums are beloved for their glossy heart-shaped leaves and bright, waxy flowers, which can bloom throughout the year if cared for properly. These tropical plants prefer environments with high humidity and indirect light, making them a beautiful addition to well-lit bathrooms or kitchens. With their vibrant flowers, Anthuriums add a splash of color to any indoor space.",requirements:[],tasks:[],tags:[]},{name:"Fiddle Leaf Fig",id:3,image:gg,skill:["Advanced","Medium"],location:["Home","Living Room"],flowering:["No"],size:["Tall"],transferToOutdoors:["No"],time:["A lot","A lot"],interest:["Very","Kind of"],lowEffort:["No"],shortDescription:"Large, glossy leaves. Needs attention to thrive.",waterSchedule:"When top inch of soil is dry, about every 1-2 weeks.",tempLight:"Bright, indirect light. 15-24°C.",description:"The Fiddle Leaf Fig is famous for its large, leathery leaves that resemble a violin shape. Its a perfect choice for interior design enthusiasts looking to add a dramatic touch to their living spaces. Fiddle Leaf Figs prefer bright, filtered light and need to be watered only when the top inch of soil is dry. Regular dusting of the leaves helps to keep the plant healthy and absorb light efficiently.",requirements:[],tasks:[],tags:[]},{name:"Peace Lily",id:4,image:iu,skill:["Beginner","Medium"],location:["Home","Office","Bedroom","Living Room"],flowering:["Yes"],size:["Short","Tall"],transferToOutdoors:["Yes","No"],time:["A lot","Not much"],interest:["Kind of","Very"],lowEffort:["Yes"],shortDescription:"Elegant white flowers, thrives in medium to low light.",waterSchedule:"Keep soil moist; water weekly.",tempLight:"Low to medium light. 18-26°C.",description:"Peace Lilies are charming plants with glossy green leaves and white flowers that can boost the aesthetic of any room. Beyond their beauty, they are known for their ability to purify the air. Peace Lilies prefer low to medium light and moist soil, making them suitable for areas away from direct sunlight. Theyre resilient and forgiving, signaling their need for water by drooping slightly.",requirements:[],tasks:[],tags:[]},{name:"Pothos",id:5,image:bg,skill:["Beginner","Medium"],location:["Home","Office","Living Room","Bedroom"],flowering:["No"],size:["Short","Tall"],transferToOutdoors:["Yes"],time:["Not much","A lot"],interest:["Not really","Kind of"],lowEffort:["Yes"],shortDescription:"Vining plant with heart-shaped leaves, very hardy.",waterSchedule:"Let soil dry out between waterings, about every 1-2 weeks.",tempLight:"Low to bright indirect light. 18-24°C.",description:"Pothos, also known as Devils Ivy, is a versatile and easy-to-care-for plant thats ideal for beginners. Its trailing vines can grow long, making it a great option for hanging baskets or shelves where the foliage can elegantly drape down. Pothos can thrive in a variety of light conditions, from low to bright indirect light, and prefers the soil to dry out between waterings.",requirements:[],tasks:[],tags:[]},{name:"Orchid",id:6,image:wg,skill:["Medium","Advanced"],location:["Home","Bedroom"],flowering:["Yes"],size:["Short"],transferToOutdoors:["No"],time:["A lot","A lot"],interest:["Very","Kind of"],lowEffort:["No"],shortDescription:"Exotic flowers, prefers humid conditions.",waterSchedule:"Every 1-2 weeks, less often in winter.",tempLight:"Bright, indirect light. 15-25°C.",description:"Orchids are exotic and elegant, known for their stunning blooms that can last for weeks. They prefer a stable environment with indirect light, high humidity, and good airflow. Orchids require a specific watering routine, allowing their bark-based potting mix to dry out completely before rewatering. With the right care, orchids can rebloom multiple times a year, making them a rewarding challenge for more advanced plant enthusiasts.",requirements:[],tasks:[],tags:[]},{name:"Monstera Deliciosa",id:7,image:vg,skill:["Medium","Beginner"],location:["Home","Living Room","Office"],flowering:["No"],size:["Tall"],transferToOutdoors:["Yes","No"],time:["A lot","Not much"],interest:["Kind of","Very"],lowEffort:["No","Yes"],shortDescription:"Swiss cheese-like leaves, trendy and easy to care for.",waterSchedule:"Every 1-2 weeks, allowing soil to dry out between waterings.",tempLight:"Bright to medium indirect light. 18-27°C.",description:"Monstera Deliciosa, often called the Swiss Cheese Plant, is beloved for its unique leaves with natural holes, giving it a distinct appearance. Monsteras are fast growers under the right conditions, preferring humid environments and indirect light. They make a bold statement in any room and can be trained to climb or allowed to spread outwards. Regular pruning encourages fuller growth and a healthier plant.",requirements:[],tasks:[],tags:[]},{name:"Lavender",id:8,image:yg,skill:["Medium","Beginner"],location:["Home","Outdoor","Office"],flowering:["Yes"],size:["Short","Tall"],transferToOutdoors:["Yes"],time:["A lot","A lot"],interest:["Very","Kind of"],lowEffort:["No","Yes"],shortDescription:"Fragrant purple flowers, prefers full sun.",waterSchedule:"When soil is dry to the touch, about every 1-2 weeks.",tempLight:"Full sun. 18-30°C.",description:"Lavender is not just an outdoor plant; with enough light, it can also thrive indoors. Its renowned for its fragrant flowers and essential oils, known for their relaxing and therapeutic properties. Lavender requires lots of light, so a south-facing window is ideal. The plant prefers well-draining soil and infrequent watering, making it a great choice for those who prefer plants with lower water needs.",requirements:[],tasks:[],tags:[]},{name:"Spider Plant",id:9,image:Rg,skill:["Beginner"],location:["Home","Office","Bathroom","Living Room"],flowering:["No"],size:["Short"],transferToOutdoors:["Yes"],time:["Not much"],interest:["Not really"],lowEffort:["Yes"],shortDescription:"Easy to grow, with arching leaves and small white flowers.",waterSchedule:"Weekly during growth, less often in winter.",tempLight:"Bright, indirect light. 15-23°C.",description:"Spider Plants are resilient and adaptable, making them perfect for new gardeners. They are recognized for their air-purifying qualities and their unique growth habit, producing baby spider plants or “pups” that hang from the mother plant like spiders on a web. Spider Plants thrive in a range of lighting conditions and prefer slightly moist soil, making them a low-fuss addition to any indoor space.",requirements:[],tasks:[],tags:[]},{name:"ZZ Plant",id:10,image:Lg,skill:["Beginner"],location:["Home","Office","Bedroom"],flowering:["No"],size:["Short","Tall"],transferToOutdoors:["No"],time:["Not much"],interest:["Not really"],lowEffort:["Yes"],shortDescription:"Low maintenance, with waxy, green leaves.",waterSchedule:"Every 2-3 weeks, less often in winter.",tempLight:"Low to bright indirect light. 18-24°C.",description:"ZZ Plants are distinguished by their glossy, green leaves and robust nature, making them nearly indestructible. Theyre perfect for offices or homes with low light. ZZ Plants store water in their roots, allowing them to withstand periods of drought. Care for these plants is minimal, requiring only occasional watering and making them ideal for those seeking low-maintenance indoor plants.",requirements:[],tasks:[],tags:[]},{name:"Rubber Plant",id:11,image:Pg,skill:["Medium"],location:["Home","Living Room"],flowering:["No"],size:["Tall"],transferToOutdoors:["No"],time:["Medium"],interest:["Kind of"],lowEffort:["No"],shortDescription:"Glossy dark green leaves, can grow into a tree indoors.",waterSchedule:"Keep soil moist in growing season, less water in winter.",tempLight:"Bright, indirect light. 16-27°C.",description:"The Rubber Plant is a striking addition to any space, known for its large, glossy leaves that can absorb airborne chemicals and purify indoor air. It thrives under bright, indirect light but can tolerate lower light levels, making it versatile for different lighting conditions. Its care routine involves keeping the soil consistently moist but not waterlogged. With proper care, it can grow into a large, tree-like presence indoors.",requirements:[],tasks:[],tags:[]},{name:"Boston Fern",id:12,image:sg,skill:["Medium"],location:["Home","Bathroom"],flowering:["No"],size:["Short"],transferToOutdoors:["Yes"],time:["A lot"],interest:["Kind of"],lowEffort:["No"],shortDescription:"Lush, feathery fronds. Loves humidity.",waterSchedule:"Keep soil consistently moist, mist fronds regularly.",tempLight:"Bright, indirect light. 18-24°C.",description:"Boston Ferns are popular for their lush, green fronds that add a vibrant touch of nature to any room. They thrive in high humidity environments and prefer indirect light, making them perfect for bathrooms or kitchens. Regular misting and watering will keep the fern looking fresh. They are also excellent natural humidifiers and air purifiers, making them as functional as they are beautiful.",requirements:[],tasks:[],tags:[]},{name:"Cactus",id:13,image:og,skill:["Beginner","Medium"],location:["Home","Office","Outdoor"],flowering:["Yes"],size:["Short"],transferToOutdoors:["Yes"],time:["Not much","A lot"],interest:["Not really","Kind of"],lowEffort:["Yes"],shortDescription:"Thrives on neglect, loves the sun.",waterSchedule:"Water every 3-4 weeks in summer, rarely in winter.",tempLight:"Full sun. 21-37°C.",description:"Cacti are the ultimate low-maintenance plants, ideal for those who prefer a hands-off approach to plant care. Thriving in bright light, they require minimal watering, making them perfect for sunny spots. Cacti come in an array of shapes, sizes, and colors, offering endless variety for collectors. Their unique and striking appearance adds a touch of desert beauty to any indoor setting.",requirements:[],tasks:[],tags:[]},{name:"Succulents",id:14,image:kg,skill:["Beginner","Medium"],location:["Home","Office","Living Room"],flowering:["Yes"],size:["Short"],transferToOutdoors:["Yes"],time:["Not much"],interest:["Not really"],lowEffort:["Yes"],shortDescription:"Easy care, comes in various shapes and colors.",waterSchedule:"Water when soil is completely dry, about every 2-3 weeks.",tempLight:"Bright, indirect light. 18-24°C.",description:"Succulents are beloved for their ease of care, drought tolerance, and varied textures and forms. They store water in their thick, fleshy leaves, allowing them to thrive in dry indoor environments. Succulents prefer bright, indirect light and infrequent watering, making them perfect for sunny windowsills. With hundreds of species, theres a succulent to match every aesthetic preference.",requirements:[],tasks:[],tags:[]},{name:"Aloe Vera",id:15,image:eg,skill:["Beginner","Medium"],location:["Home","Office","Bedroom"],flowering:["Yes"],size:["Short"],transferToOutdoors:["Yes"],time:["Not much"],interest:["Not really"],lowEffort:["Yes"],shortDescription:"Medicinal properties, stores water in leaves.",waterSchedule:"Every 3 weeks, less in winter.",tempLight:"Bright, indirect sunlight. 18-24°C.",description:"Aloe Vera is not only known for its medicinal properties, such as soothing burns and skin care, but also as an easy-to-grow indoor plant. It prefers bright, indirect sunlight and minimal watering, making it perfect for a sunny kitchen window. The gel inside the leaves is a handy natural remedy for cuts and burns, making Aloe Vera a practical plant to have around the home.",requirements:[],tasks:[],tags:[]},{name:"Jade Plant",id:16,image:mg,skill:["Beginner"],location:["Home","Office"],flowering:["Yes"],size:["Short"],transferToOutdoors:["No"],time:["Not much"],interest:["Not really"],lowEffort:["Yes"],shortDescription:"Symbolizes good luck, has thick, shiny leaves.",waterSchedule:"Every 2-3 weeks, less in winter.",tempLight:"Full sun to partial shade. 18-24°C.",description:"The Jade Plant is a succulent with thick, woody stems and glossy green leaves that resemble jade stones, symbolizing prosperity and good luck. Its a slow-growing plant that prefers bright light and occasional watering, making it a perfect low-maintenance plant for busy individuals. With proper care, Jade Plants can live for many years, becoming a cherished part of your home.",requirements:[],tasks:[],tags:[]},{name:"Calathea",id:17,image:ag,skill:["Beginner","Medium"],location:["Home","Living Room","Bedroom"],flowering:["No"],size:["Short"],transferToOutdoors:["No"],time:["A lot"],interest:["Very","Kind of"],lowEffort:["No"],shortDescription:"Decorative leaves, enjoys humidity, does not like cold.",waterSchedule:"Keep soil moist, not soggy.",tempLight:"Bright, indirect light. 18-24°C.",description:"Calathea, also known as the prayer plant, is cherished for its beautifully patterned leaves that move up and down with the light cycle, mimicking the act of praying. These tropical plants prefer indirect light and high humidity, making them great for bathrooms. They require consistent moisture but are sensitive to overwatering. Calatheas are perfect for plant enthusiasts looking to add a vibrant and dynamic plant to their collection.",requirements:[],tasks:[],tags:[]},{name:"Fern",id:18,image:dg,skill:["Medium"],location:["Home","Bathroom","Living Room"],flowering:["No"],size:["Short","Tall"],transferToOutdoors:["Yes"],time:["A lot"],interest:["Kind of","Not really"],lowEffort:["Yes","No"],shortDescription:"Loves moisture and shade, great for bathrooms.",waterSchedule:"Keep soil consistently moist.",tempLight:"Partial shade to low light. 18-24°C.",description:"Ferns are ancient plants that add a touch of lush, green elegance to any indoor space. With their feathery fronds, they prefer moist soil and high humidity, thriving in indirect light. Regular misting or a pebble tray can help maintain the humidity they love. Ferns are ideal for hanging baskets or as a lush green backdrop in a plant collection, providing a sense of tranquility and natural beauty.",requirements:[],tasks:[],tags:[]},{name:"Philodendron",id:19,image:Ag,skill:["Beginner"],location:["Home","Office","Living Room"],flowering:["No"],size:["Short","Tall"],transferToOutdoors:["Yes"],time:["Not much"],interest:["Not really","Kind of"],lowEffort:["Yes"],shortDescription:"Heart-shaped leaves, vining or upright types.",waterSchedule:"When top inch of soil dries out, about every 1-2 weeks.",tempLight:"Medium to bright indirect light. 18-27°C.",description:"Philodendrons are a diverse group of plants, offering a range of leaf shapes and growth habits, from trailing vines to large, leafy plants. They are easy to care for, thriving in moderate to bright, indirect light and preferring their soil to dry out slightly between waterings. Philodendrons are not only visually appealing but also effective at purifying the air, making them a popular choice for indoor gardeners.",requirements:[],tasks:[],tags:[]},{name:"Yucca",id:20,image:Ng,skill:["Medium","Advanced"],location:["Home","Office"],flowering:["No"],size:["Tall"],transferToOutdoors:["Yes"],time:["Medium"],interest:["Very"],lowEffort:["No"],shortDescription:"Bold and striking, needs direct sunlight.",waterSchedule:"Let soil dry out between waterings, about every 2-3 weeks.",tempLight:"Full sun. 13-27°C.",description:"The Yucca plant brings a touch of the desert indoors, with its sword-like leaves and sturdy trunk. It’s a drought-tolerant plant that prefers bright, direct light, making it suitable for sunny spots in the home. Water sparingly, allowing the soil to dry out completely between waterings. Yuccas can add architectural interest to your space, with their bold silhouette and minimalist aesthetic.",requirements:[],tasks:[],tags:[]},{name:"Bamboo",id:21,image:ng,skill:["Beginner"],location:["Home","Office","Living Room"],flowering:["No"],size:["Tall"],transferToOutdoors:["Yes"],time:["Not much"],interest:["Not really","Kind of"],lowEffort:["Yes"],shortDescription:"Brings good fortune, grows in water or soil.",waterSchedule:"Keep water-filled or soil consistently moist.",tempLight:"Bright, indirect light. 18-24°C.",description:"Bamboo plants are known for their fast growth and versatility. They can thrive in a variety of conditions but prefer bright, indirect light and regular watering to keep the soil consistently moist. Bamboo is often associated with luck and prosperity, making it a popular choice for homes and offices. It’s an easy-care plant that can add a touch of elegance and a sense of peace to any space.",requirements:[],tasks:[],tags:[]},{name:"Bird of Paradise",id:22,image:rg,skill:["Advanced"],location:["Home","Living Room"],flowering:["Yes"],size:["Tall"],transferToOutdoors:["No"],time:["A lot"],interest:["Very"],lowEffort:["No"],shortDescription:"Large, exotic flowers resemble a bird in flight.",waterSchedule:"Weekly, allowing soil to dry slightly between waterings.",tempLight:"Bright, indirect light. 20-30°C.",description:"The Bird of Paradise plant is named for its spectacular flowers, which resemble the bright plumage of a bird in flight. While it’s grown for its foliage indoors since flowering is rare without ample sunlight, its large, broad leaves provide a tropical feel. It requires bright, indirect light and regular watering during the growing season. This plant can make a bold statement in any room with its height and striking leaves.",requirements:[],tasks:[],tags:[]},{name:"African Violet",id:23,image:Zf,skill:["Medium"],location:["Home","Bedroom","Living Room"],flowering:["Yes"],size:["Short"],transferToOutdoors:["No"],time:["A lot"],interest:["Kind of","Very"],lowEffort:["Yes"],shortDescription:"Small, delicate flowers; prefers consistent conditions.",waterSchedule:"Keep soil lightly moist, use room-temperature water.",tempLight:"Bright, indirect light. 18-24°C.",description:"African Violets are cherished for their vibrant flowers and fuzzy leaves, thriving in warm conditions and indirect light. They prefer consistently moist soil and high humidity, making them ideal for kitchen or bathroom settings. With proper care, African Violets can bloom several times a year, offering a splash of color. They’re small enough to fit on a windowsill, making them perfect for adding a pop of color to small spaces.",requirements:[],tasks:[],tags:[]},{name:"Bromeliad",id:24,image:ig,skill:["Medium"],location:["Home","Office","Bathroom"],flowering:["Yes"],size:["Short"],transferToOutdoors:["Yes"],time:["A lot"],interest:["Kind of"],lowEffort:["Yes"],shortDescription:"Colorful, long-lasting flowers and attractive foliage.",waterSchedule:"Fill the central cup, let dry between waterings.",tempLight:"Bright, indirect light. 18-27°C.",description:"Bromeliads are exotic plants with striking foliage and vibrant flowers that can last for months. They are surprisingly easy to care for, thriving in indirect light and requiring minimal water, as they prefer to be watered in their central cup. Bromeliads are excellent for adding a tropical flair to your home, with their bright colors and unique appearance making them a focal point in any room.",requirements:[],tasks:[],tags:[]},{name:"Chinese Money Plant",id:25,image:cg,skill:["Beginner"],location:["Home","Office"],flowering:["No"],size:["Short"],transferToOutdoors:["No"],time:["Not much"],interest:["Not really","Kind of"],lowEffort:["Yes"],shortDescription:"Round, flat leaves. Said to bring financial luck.",waterSchedule:"Every 1-2 weeks, allowing soil to dry out between waterings.",tempLight:"Bright, indirect light. 16-24°C.",description:"The Chinese Money Plant, with its round, flat leaves, is said to bring good fortune and financial prosperity to its owner. It prefers a bright spot with indirect light and requires watering only when the soil dries out. This plant is ideal for those who love modern and minimalist aesthetics, as its unique appearance adds a stylish touch to any interior design.",requirements:[],tasks:[],tags:[]},{name:"Croton",id:26,image:lg,skill:["Advanced"],location:["Home","Living Room","Outdoor"],flowering:["No"],size:["Tall"],transferToOutdoors:["Yes"],time:["A lot"],interest:["Very"],lowEffort:["No"],shortDescription:"Colorful foliage in red, orange, and yellow.",waterSchedule:"Keep soil moist, more frequent watering in warmer months.",tempLight:"Bright, indirect light. 16-27°C.",description:"Crotons are known for their vibrant, multicolored foliage that can brighten any indoor space. They require a bit more care, thriving in a warm environment with high humidity and bright, indirect light. Consistent moisture and regular feeding will keep the leaves colorful and vibrant. Crotons are perfect for adding a splash of color to your home, with their leaves featuring shades of red, yellow, and green.",requirements:[],tasks:[],tags:[]},{name:"Dieffenbachia",id:27,image:ug,skill:["Medium"],location:["Home","Office"],flowering:["No"],size:["Tall"],transferToOutdoors:["No"],time:["Medium"],interest:["Kind of"],lowEffort:["Yes"],shortDescription:"Large, variegated leaves, can grow tall.",waterSchedule:"Every week, allow the topsoil to dry out between waterings.",tempLight:"Low to bright, indirect light. 18-24°C.",description:"Dieffenbachia, also known as Dumb Cane, features large, attractive leaves that are beautifully marked with patterns of green, white, and yellow. It prefers moderate to bright, indirect sunlight and evenly moist soil. Care should be taken with its sap, which can be irritating to skin and toxic if ingested. Dieffenbachia is a great choice for adding a tropical vibe and a touch of greenery to any room.",requirements:[],tasks:[],tags:[]},{name:"Dracaena",id:28,image:hg,skill:["Beginner","Medium"],location:["Home","Office","Living Room"],flowering:["No"],size:["Tall"],transferToOutdoors:["Yes"],time:["Not much"],interest:["Not really","Kind of"],lowEffort:["Yes"],shortDescription:"Long, strappy leaves, often with red or yellow edges.",waterSchedule:"Every 2-3 weeks, allow soil to dry between waterings.",tempLight:"Bright, indirect light. 16-24°C.",description:"Dracaena plants are popular for their variety of sizes and leaf colors, ranging from green to variegated with white, yellow, or red. They are easy to care for, tolerating a range of light conditions and requiring water only when the soil begins to dry. Dracaenas are effective at purifying the air, making them not only a decorative but also a healthy addition to indoor spaces.",requirements:[],tasks:[],tags:[]},{name:"Ficus",id:29,image:fg,skill:["Medium","Advanced"],location:["Home","Living Room"],flowering:["No"],size:["Tall"],transferToOutdoors:["No"],time:["Medium"],interest:["Very","Kind of"],lowEffort:["No"],shortDescription:"Includes the rubber plant and fiddle leaf fig, among others.",waterSchedule:"When topsoil is dry, about every 1-2 weeks.",tempLight:"Bright, indirect light. 15-24°C.",description:"Ficus plants, including the well-known Fiddle Leaf Fig and Rubber Tree, are beloved for their attractive foliage and growth habit. They prefer bright, indirect light and need to be watered when the soil dries out. Ficus plants can be a bit finicky about their care, but with the right conditions, they make stunning indoor trees that can bring a touch of the outdoors into your home.",requirements:[],tasks:[],tags:[]},{name:"Hoya",id:30,image:pg,skill:["Medium"],location:["Home","Bedroom"],flowering:["Yes"],size:["Short"],transferToOutdoors:["No"],time:["Medium"],interest:["Very","Kind of"],lowEffort:["Yes"],shortDescription:"Waxy leaves and fragrant flowers, climbs or trails.",waterSchedule:"Every 2-3 weeks, less often in winter.",tempLight:"Bright, indirect light. 16-29°C.",description:"Hoya, known as the wax plant, is a stunning trailing plant with thick, waxy leaves and star-shaped flowers. Hoyas are easy to care for, preferring bright, indirect light and dry conditions between waterings. They are perfect for hanging baskets or as a climbing plant on trellises, adding a beautiful and exotic touch to any indoor space.",requirements:[],tasks:[],tags:[]},{name:"Kentia Palm",id:31,image:_g,skill:["Beginner","Medium"],location:["Home","Living Room","Office"],flowering:["No"],size:["Tall"],transferToOutdoors:["Yes"],time:["Not much","A lot"],interest:["Kind of"],lowEffort:["Yes"],shortDescription:"Elegant palm, tolerant of low-light conditions.",waterSchedule:"Keep soil lightly moist, less water in winter.",tempLight:"Low to bright, indirect light. 16-27°C.",description:"Kentia Palm is an elegant palm that can bring a touch of the tropics to any indoor setting. It’s one of the best palms for low light conditions, making it ideal for rooms without direct sunlight. Regular watering and misting will keep it thriving. The Kentia Palm is known for its air-purifying qualities and its ability to add a sophisticated look to any décor.",requirements:[],tasks:[],tags:[]},{name:"Nerve Plant",id:32,image:Eg,skill:["Medium"],location:["Home","Office","Bathroom"],flowering:["No"],size:["Short"],transferToOutdoors:["No"],time:["Medium"],interest:["Very"],lowEffort:["Yes"],shortDescription:"Striking leaves with contrasting veins, loves humidity.",waterSchedule:"Keep soil consistently moist.",tempLight:"Medium to bright, indirect light. 18-27°C.",description:"The Nerve Plant, or Fittonia, is admired for its striking leaf patterns with contrasting veins. It thrives in humid environments and prefers indirect light, making it an excellent choice for terrariums or as a bathroom plant. Regular watering to keep the soil moist and providing high humidity will mimic its native tropical habitat, ensuring this plant remains vibrant and healthy.",requirements:[],tasks:[],tags:[]},{name:"Parlor Palm",id:33,image:Tg,skill:["Beginner"],location:["Home","Office","Living Room"],flowering:["No"],size:["Short","Tall"],transferToOutdoors:["Yes"],time:["Not much"],interest:["Not really"],lowEffort:["Yes"],shortDescription:"Dense, green foliage; ideal for low-light conditions.",waterSchedule:"Every 1-2 weeks, allowing soil to dry slightly between waterings.",tempLight:"Low to bright, indirect light. 18-27°C.",description:"The Parlor Palm is a classic houseplant, popular since Victorian times for its ability to adapt to the low-light conditions of indoor environments. It’s a slow grower that can eventually reach up to 4 feet tall indoors. This palm prefers its soil to be kept evenly moist and benefits from regular misting. It’s perfect for adding a touch of refined greenery to any space.",requirements:[],tasks:[],tags:[]},{name:"Peperomia",id:34,image:Ig,skill:["Beginner","Medium"],location:["Home","Office","Bedroom"],flowering:["No"],size:["Short"],transferToOutdoors:["No"],time:["Not much"],interest:["Kind of"],lowEffort:["Yes"],shortDescription:"Varied and interesting leaf shapes and textures.",waterSchedule:"Let the soil dry out between waterings, about every 2 weeks.",tempLight:"Medium to bright, indirect light. 18-24°C.",description:"Peperomia plants are diverse in leaf shape, color, and texture, making them highly collectible. They are easy to care for, requiring moderate to bright indirect light and infrequent watering, allowing the soil to dry out slightly between waterings. Peperomias are compact and versatile, ideal for small spaces like offices or shelves, where their unique appearance can be fully appreciated.",requirements:[],tasks:[],tags:[]},{name:"Schefflera",id:35,image:Cg,skill:["Medium"],location:["Home","Living Room","Office"],flowering:["No"],size:["Tall"],transferToOutdoors:["Yes"],time:["A lot"],interest:["Very"],lowEffort:["No"],shortDescription:"Umbrella-shaped leaf clusters, grows tall indoors.",waterSchedule:"Keep soil moist, less watering in winter.",tempLight:"Bright, indirect light. 15-24°C.",description:"The Schefflera, or Umbrella Tree, is known for its glossy, palmate leaves that radiate from a central point, resembling an umbrella. It’s a fast grower and can reach impressive sizes indoors with the right care. Preferring bright, indirect light and occasional watering, it’s relatively easy to maintain. Scheffleras are great for adding height and a lush, tropical feel to any interior.",requirements:[],tasks:[],tags:[]},{name:"Swiss Cheese Plant",id:36,image:Sg,skill:["Beginner","Medium"],location:["Home","Office","Living Room"],flowering:["No"],size:["Tall"],transferToOutdoors:["Yes"],time:["Not much","A lot"],interest:["Not really","Kind of"],lowEffort:["Yes"],shortDescription:"Iconic split leaves, grows quickly with enough light.",waterSchedule:"Every 1-2 weeks, allowing soil to dry out between waterings.",tempLight:"Bright to medium indirect light. 18-27°C.",description:"The Swiss Cheese Plant, or Monstera deliciosa, is beloved for its unique, perforated leaves that develop as the plant ages. It’s a vigorous grower that can bring a dramatic tropical flair to your living space. Monsteras do well in bright, indirect light and require watering when the top inch of soil feels dry. This plant is a statement piece, perfect for anyone looking to add a bold, green presence to their home.",requirements:[],tasks:[],tags:[]}],yn=[{question:"How would you describe your ability with plants?",answers:["Beginner","Medium","Advanced"],category:"skill"},{question:"Where will your plant be located?",answers:["Home","Office","Bedroom","Living Room"],category:"location"},{question:"How much time can you dedicate to plant care weekly?",answers:["A lot","Not much"],category:"time"},{question:"How interested are you in learning about plant care?",answers:["Very","Kind of","Not really"],category:"interest"},{question:"Do you prefer plants that require minimal effort to keep alive?",answers:["Yes","No"],category:"lowEffort"},{question:"Do you want a plant that flowers?",answers:["Yes","No"],category:"flowering"},{question:"What size plant would you prefer?",answers:["Short","Tall"],category:"size"},{question:"Do you want a plant that can be transferred to outdoors?",answers:["Yes","No"],category:"transferToOutdoors"}],dI=()=>{const n=document.querySelector(".edit-plant-image"),e=document.querySelector(".file-upload-label"),t=document.querySelector(".plant-page-image-container");n&&Tr(t,n,e)},fI=(n,e)=>{const t=Yi("ADDED");n.parentNode.replaceChild(t,n),e.isAdded=!0},eu=()=>{console.log("HIDE");const n=document.getElementById("task-nav"),e=document.querySelector(".add-requirement-btn");n.classList.add("hidden"),e.classList.add("hidden")},gI=(n,e,...t)=>{const r=document.querySelector(".edit-btn");t.forEach(s=>{s.classList.remove("flex"),s.classList.add("hidden")}),n.classList.remove("hidden"),n.classList.add("flex"),r&&e===!1?r.classList.add("hidden"):r&&r.classList.remove("hidden")},pI=(n,e,t,r)=>{const s=_({tagName:"div",classEl:["plant-page-nav-container"]}),i=_({tagName:"button",textContent:"About",classEl:["plant-page-nav-button"],id:"about-nav"}),a=_({tagName:"button",textContent:"Requirements",classEl:["plant-page-nav-button"],id:"requirement-nav"}),c=_({tagName:"button",textContent:"Tasks",classEl:["plant-page-nav-button"],id:"task-nav"});return i.classList.add("active"),mI(i,a,c,e,n,t),_n(i,"#FCFAF7","rgba(255, 255, 255, 0.224)","black","#FCFAF7",...i.inactiveBtns),[i,a,c].forEach(d=>{D.addEventListener(d,"click",()=>{_n(d,"#FCFAF7","rgba(255, 255, 255, 0.224)","black","#FCFAF7",...d.inactiveBtns),d.classList.contains("active")&&gI(d.activeSection,d.editBtn,...d.inactiveSections)},`PLANT_PAGE_${r}`)}),R(s,i,a,c),s},mI=(n,e,t,r,s,i)=>{n.inactiveBtns=[e,t],e.inactiveBtns=[n,t],t.inactiveBtns=[n,e],n.inactiveSections=[r,i],e.inactiveSections=[s,i],t.inactiveSections=[s,r],n.activeSection=s,e.activeSection=r,t.activeSection=i,n.editBtn=!0,e.editBtn=!1,t.editBtn=!1},wr=()=>{const{searchInput:n,searchResultsContainer:e}=II(),{plantLibrary:t}=ee;Us(t,n.value,e,null,"← back to search",".plant-library",wr),TI(n,t,e)},Us=(n,e,t,r,s,i,a)=>{pe(t),r||(r=yI());const c=r.filter(u=>u.name.toLowerCase().includes(e.toLowerCase()));if(c.length>0){const u=_({tagName:"div",classEl:["plant-page-container"],id:"secondary-plant-page"});c.forEach(d=>{const f=bI(d);R(t,f),D.addEventListener(f,"click",()=>{vI(n,u,d,s,i,a)},"PLANT_SEARCH")})}_I(c)},_I=n=>{const e=document.querySelector(".plants-found-counter");if(!e)return;const t=n.length,r=t>1||t===0?`${t} plants found`:`${t} plant found`;e.textContent=r},yI=()=>{const n=document.getElementById("all-tag"),e=document.getElementById("beginner-tag"),t=document.getElementById("medium-tag"),r=document.getElementById("advanced-tag"),s=[n,e,t,r];for(let i=0;i<s.length;i++){const a=s[i];if(a.classList.contains("active"))return a.id==="all-tag"?xs:xs.filter(c=>c.skill[0]===a.textContent)}},vI=(n,e,t,r,s,i)=>{pe(n),R(n,e),ui(t,e,r,s,i)},EI=(n,e,t)=>{if(t){console.log("ADDED");return}console.log("adding"),zd(e),RI(n),e.isAdded=!0},wI=(n,e,t,r)=>{n.forEach(s=>{D.addEventListener(s,"click",()=>{if(_n(s,"white","rgba(255, 255, 255, 0.224","black","white",...s.inactiveBtns),s.id==="all-tag"){Us(e,t.value,r,null,"← back to search",".plant-library",wr);return}Us(e,t.value,r,null,"← back to search",".plant-library",wr)},"PLANT_SEARCH")})},TI=(n,e,t)=>{D.addEventListener(n,"input",()=>{Us(e,n.value,t,null,"← back to search",".plant-library",wr)},"PLANT_SEARCH"),D.addEventListener(document,"click",On,"PLANT_SEARCH"),D.removeAllEventListeners("PLANT_NAV")},II=()=>{const{plantLibrary:n}=ee,e=_({tagName:"div",classEl:["section-header"]}),t=_({tagName:"h1",textContent:"Plant Library",classEl:["plant-library-title"]}),r=_({tagName:"div",classEl:["library-search-container"]}),{searchTags:s,tagButtons:i}=AI(),a=_({tagName:"label",textContent:"Search Plants:",classEl:["visually-hidden"],fr:"plant-search-input"}),c=_({tagName:"input",placeholder:"Search",id:"plant-search-input"}),u=_({tagName:"p",classEl:["plants-found-counter"],textContent:""}),d=_({tagName:"div",classEl:["search-results"],id:"search-results-container"});return R(r,s),R(e,t),R(r,a,c,u,d),R(n,e,r),wI(i,n,c,d),{searchInput:c,searchResultsContainer:d}},AI=()=>{const n=_({tagName:"div",classEl:["search-tags"]}),e=_({tagName:"button",textContent:"All",classEl:["search-tag"],id:"all-tag"}),t=_({tagName:"button",textContent:"Beginner",classEl:["search-tag"],id:"beginner-tag"}),r=_({tagName:"button",textContent:"Medium",classEl:["search-tag"],id:"medium-tag"}),s=_({tagName:"button",textContent:"Advanced",classEl:["search-tag"],id:"advanced-tag"});e.classList.add("active"),e.inactiveBtns=[t,r,s],t.inactiveBtns=[e,r,s],r.inactiveBtns=[e,t,s],s.inactiveBtns=[e,t,r];const i=[e,t,r,s];return R(n,e,t,r,s),{searchTags:n,tagButtons:i}},bI=n=>{const e=_({tagName:"div",classEl:["plant-element"]}),t=_({tagName:"div",classEl:["plant-result-container"]}),r=_({tagName:"div",classEl:["plant-text-container"]}),s=_({tagName:"p",textContent:n.name,classEl:["plant-result-title"]}),i=_({tagName:"p",textContent:n.shortDescription,classEl:["plant-result-description"]}),a=_({tagName:"p",textContent:n.skill[0],classEl:["plant-result-tag"]}),c=_({tagName:"img",classEl:["plant-result-image"],alt:"Plant image"}),u=_({tagName:"div",classEl:["plant-result-image-container"]}),d=_({tagName:"div",classEl:["line-separator"]});c.src=n.image;const f=Ir(),p=_({tagName:"div",classEl:["search-drop-menu"]});return e.plantObject=n,R(r,s,i,a),R(u,c),R(p,f),R(t,u,r,p),R(e,t,d),D.addEventListener(f,"click",E=>{Xt(E,CI,f,n),D.addEventListener(document,"click",On,"PLANT_LOG")},"PLANT_LOG"),e},PI=()=>{const n=document.querySelector(".drop-menu-container");n&&n.remove()},CI=(n,e)=>{const t=qd(e),r=_({tagName:"div",classEl:["drop-menu-container"]}),s=_({tagName:"p",textContent:t?"Added":"Add to My Plants",classEl:["drop-menu-item"]});t&&(r.style.cursor="default"),R(r,s),R(n,r),D.addEventListener(s,"click",()=>{EI(s,e,t)},"PLANT_SEARCH")},qd=n=>{const e=Q.getPlant(n),t=Q.getDeletedPlants(),r=$e(t,n.id);if(e||r)return!0},RI=n=>{const e=_({tagName:"p",textContent:"Added",classEl:["drop-menu-item"]});n.parentNode.replaceChild(e,n)},kI=(n,e,t)=>{const r=_({tagName:"div",classEl:["requirements-section"]}),s=_({tagName:"div",classEl:["requirements"]}),i=_({tagName:"div",classEl:["requirement-container"]}),a=_({tagName:"div",classEl:["requirement-icon-container"]}),c=_({tagName:"img",classEl:["water-scheduele-icon"],alt:"Watering can icon"}),u=_({tagName:"div",classEl:["requirement-container"]}),d=_({tagName:"div",classEl:["requirement-icon-container"]}),f=_({tagName:"img",classEl:["temp-light-icon"],alt:"Temperature icon"}),p=_({tagName:"p",textContent:e.waterSchedule,classEl:["requirement"]}),E=_({tagName:"p",textContent:e.tempLight,classEl:["requirement"]});n.classList.add("plant-page-modal"),r.classList.add("hidden"),c.src=Yf,f.src=au;const P=_({tagName:"button",classEl:["add-requirement-btn"],ariaLabel:"Add new requirement"}),N=_({tagName:"div",classEl:["add-btn-image-container"]}),V=_({tagName:"img",classEl:["add-btn-image"],alt:"Add icon"});return V.src=ru,R(N,V),R(P,N),R(a,c),R(d,f),R(i,a,p),R(u,d,E),R(s,i,u),R(r,s,n,P),e.requirements&&e.requirements.forEach(L=>{Wd(e,s,L)}),D.addEventListener(P,"click",()=>{hA(n,s,t,e)},`PLANT_PAGE_${t}`),r},hs=n=>_({tagName:"button",textContent:n,classEl:["tag-button"]}),SI=n=>{let e,t,r,s;n.skill&&(e=hs(n.skill[0])),n.florwering&&n.florwering.includes("Yes")&&(t=hs("Flowering")),n.transferToOutdoors&&n.transferToOutdoors.includes("Yes")&&(r=hs("+ Outdoors")),n.lowEffort&&n.lowEffort.includes("No")&&(s=hs("Low effort"));const i=_({tagName:"div",classEl:["tag-container"]});return R(i,e,t,r,s),i},NI=(n,e,t)=>{const r=_({tagName:"div",classEl:["tasks-section"]}),s=_({tagName:"div",classEl:["tasks"]}),i=_({tagName:"button",classEl:["add-task-btn"],ariaLabel:"Add new task"}),a=_({tagName:"div",classEl:["new-task-image-container"]}),c=_({tagName:"img",classEl:["new-task-image"],alt:"Plant image for this task"});return r.classList.add("hidden"),c.src=ru,R(a,c),R(i,a),R(r,s,i),n.tasks&&n.tasks.forEach(u=>{Kd(n,s,u.description,t,e)}),D.addEventListener(i,"click",()=>{dA(e,s,t,n)},`PLANT_PAGE_${t}`),r},LI=(n,e,t,r)=>{const s=_({tagName:"div",classEl:["drop-menu-container"]}),i=_({tagName:"p",textContent:"Edit",classEl:["drop-menu-item"]}),a=_({tagName:"p",textContent:"Delete",classEl:["drop-menu-item"]});R(s,i,a),R(n,s),gA(i,e,a,t,r)},Hd=(n,e,t,r,s,i)=>{n.selected===!1?(e.style.backgroundColor=s,e.style.border=i):(e.style.backgroundColor=t,e.style.border=r)},DI=(n,e,t,r,s)=>{const{mainSection:i,aboutSection:a,requirementsSection:c,tasksSection:u}=VI(n,e),d=_({tagName:"p",textContent:"This plant has been archived",classEl:["archived-plant-message"]});OI(n,d);const f=_({tagName:"div",classEl:["header-container"]}),p=_({tagName:"h1",textContent:n.name,classEl:["plant-title"]}),E=pI(a,c,u,e),P=_({tagName:"div",classEl:["plant-page-image-container"]}),N=_({tagName:"img",classEl:["plant-page-image"],alt:"Plant image"}),{plantDescriptionContainer:V,plantDescription:L}=MI(n),z=_({tagName:"div",classEl:["sub-header"]}),j=_({tagName:"div",classEl:["back-button"],ariaLabel:"Back to dahsboard"}),q=_({tagName:"img",alt:"Back button image"}),G=SI(n);q.src=su,N.src=n.image;let oe="";oe=xI(r,oe,n),oe.classList.add("section-button"),R(j,q),R(f,j,p,oe),R(P,N),R(a,P,G,V),R(t,d,z,f,E,i),uA(oe,n,p,L,P,N,t,e,s,z,j)},OI=(n,e)=>{const t=Q.getDeletedPlants();$e(t,n.id)||e.classList.add("hidden")},VI=(n,e)=>{const t=_({tagName:"div",classEl:["requirement-modal","hidden"]}),r=_({tagName:"div",classEl:["about-section","flex"]}),s=kI(t,n,e),i=NI(n,t,e),a=_({tagName:"div",classEl:["main-plant-section"]});return R(a,r,s,i),{mainSection:a,aboutSection:r,requirementsSection:s,tasksSection:i}},MI=n=>{const e=_({tagName:"p",textContent:n.description,classEl:["plant-description"]}),t=_({tagName:"p",textContent:"Overview",classEl:["plant-description-header"]}),r=_({tagName:"div",classEl:["plant-description-container"]});return R(r,t,e),{plantDescriptionContainer:r,plantDescription:e}},xI=(n,e,t)=>{const r=qd(t),s=$e(Q.getDeletedPlants(),t.id);return console.log(t),n==="← back to My Plants"?_({tagName:"button",textContent:"Edit",id:"edit-btn",classEl:["edit-btn"]}):n==="← back to results"&&!r||n==="← back to search"&&!r?_({tagName:"button",textContent:"Add plant",classEl:["add-to-plants-btn"]}):Yi(s?"ARCHIVE":"ADDED")},ui=(n,e,t,r,s)=>{document.querySelector("footer").classList.add("hidden"),DI(n,r,e,t,s),window.scrollTo(0,0)},UI=n=>{const e=$e(xs,n.id);e&&(e.isAdded=!1),Q.permanentDelete(n)},zd=n=>{const e={name:n.name,dateAdded:Fg(),description:n.description,shortDescription:n.shortDescription,skill:n.skill,flowering:n.flowering,transferToOutdoors:n.transferToOutdoors,waterSchedule:n.waterSchedule,tempLight:n.tempLight,lowEffort:n.lowEffort,image:n.image,id:n.id,requirements:n.requirements,tasks:n.tasks,tags:n.tags};Q.addToUserPlantLog(e)},FI=n=>{const e=xs,{suitablePlants:t,closestPlants:r}=BI(n,e);t.length===0?Io(r):Io(t)},BI=(n,e)=>{const t=e.filter(s=>s.skill.includes(n.skill)&&s.location.includes(n.location)&&s.flowering.includes(n.flowering)&&s.size.includes(n.size)&&s.transferToOutdoors.includes(n.transferToOutdoors)&&s.time.includes(n.time)&&s.interest.includes(n.interest)&&s.lowEffort.includes(n.lowEffort)),r=e.filter(s=>s.skill.includes(n.skill)&&s.size.includes(n.size)&&s.transferToOutdoors.includes(n.transferToOutdoors));return{suitablePlants:t,closestPlants:r}},Pa=()=>{WI()},qI=()=>{let n={};return{addUserAnswer:(e,t)=>{n[e]=t},refreshAnswerLog:()=>{n={}},getUserAnswerLog:()=>n}},To=qI(),HI=(n,e,t,r,s,i)=>{if(To.addUserAnswer(n,e,t),Tr(r,s,i),t===8){const c=To.getUserAnswerLog();FI(c);return}const a=t+1;jd(yn[t].question,yn[t].answers,yn[t].category,a)},zI=()=>{const{plantQuiz:n}=ee;To.refreshAnswerLog(),pe(n),Pa()},jI=(n,e,t,r,s,i,a)=>{Jt(n,e,t,r),a.classList.add("show"),i.classList.add("hidden"),D.addEventListener(a,"click",()=>{zI()},"PLANT_QUIZ"),jd(yn[0].question,yn[0].answers,yn[0].category,1)},$I=(n,e,t)=>{n.classList.add("hidden"),n.classList.remove("flex"),cu("block",e),ui(t,e,"← back to results",".plant-quiz",Pa)},GI=n=>{const e=_({tagName:"div",classEl:["result-container"]}),t=_({tagName:"p",textContent:n.name,classEl:["result-title"]}),r=_({tagName:"div",classEl:["result-image-container"]}),s=_({tagName:"img",alt:"Plant quiz result"});return s.src=n.image,R(r,s),R(e,r,t),{resultContainer:e}},WI=()=>{const{plantQuiz:n}=ee,e=_({tagName:"div",classEl:["quiz-container","flex"]}),t=_({tagName:"h1",classEl:["section-title"],textContent:"Plant Quiz"}),r=_({tagName:"div",classEl:["question-container"]}),s=_({tagName:"p",textContent:"Find suitable plants",classEl:["quiz-subheader"]}),i=_({tagName:"p",classEl:["quiz-description"],textContent:"Take the plant quiz to find out which plants are best suited for you!"}),a=_({tagName:"button",textContent:"Start Quiz",classEl:["start-quiz-btn"]}),c=_({tagName:"div",classEl:["back-button","restart-quiz-button"],ariaLabel:"Restart quiz"}),u=_({tagName:"img",alt:"Back button"});u.src=su,c.classList.add("hidden");const d=tu("Snake Plant","For beginners",ou),f=tu("Peace Lily","Flowering plant",iu),p=_({tagName:"div",classEl:["card-container","flex"]});return R(p,d,f),R(c,u),R(r,s,i,p,a),R(e,c,t,r),R(n,e),D.addEventListener(a,"click",()=>{jI(p,s,i,a,e,t,c)},"PLANT_QUIZ"),{quizContainer:e,quizTitle:t,questionContainer:r,quizSubtitle:s,cardContainer:p,quizDescription:i,startQuizBtn:a,restartQuizBtn:c}},tu=(n,e,t)=>{const r=_({tagName:"div",classEl:["plant-card"]}),s=_({tagName:"p",textContent:n,classEl:["card-title"]}),i=_({tagName:"p",textContent:e,classEl:["card-subtitle"]}),a=_({tagName:"div",classEl:["card-image-container"]}),c=_({tagName:"img",classEl:["card-image"],alt:"Image of plant"});return c.src=t,R(a,c),R(r,s,i,a),r},KI=(n,e,t)=>{let r=n;n.length>2&&(r=Ug(n,2)),e.plantResults=r,t.quizResult=!0,r.forEach(s=>{const{resultContainer:i}=GI(s);R(e,i),D.addEventListener(i,"click",()=>{$I(e,t,s)},"PLANT_QUIZ")})},QI=n=>{const e=document.querySelector(".quiz-container"),t=document.querySelector(".question-container"),r=_({tagName:"div",classEl:["plant-quiz-result-page","plant-page-container"],id:"secondary-plant-page"});return r.classList.add("hidden"),R(n,r),Tr(e,t),{quizContainer:e,plantInfoContainer:r}},Io=n=>{const{plantQuiz:e}=ee,{quizContainer:t,plantInfoContainer:r}=QI(e);KI(n,t,r)},YI=(n,e,t,r,s,i)=>{n.forEach(a=>{const c=_({tagName:"button",textContent:a,classEl:["choice-btn"]});R(i,c),D.addEventListener(c,"click",()=>{HI(e,a,t,r,s,i)},"PLANT_QUIZ")})},jd=(n,e,t,r)=>{const s=document.querySelector(".question-container"),i=_({tagName:"h1",textContent:n,classEl:["question-title"]}),a=_({tagName:"div",classEl:["choice-btn-container"]});R(s,i,a),YI(e,t,r,s,i,a)},XI=(n,e)=>{document.querySelector("footer").classList.remove("hidden");const r=document.getElementById("secondary-plant-page");if(r&&r.quizResult){JI(r);return}else r&&!r.quizResult&&(console.log(r),r.remove());Ln(n,e)},JI=n=>{const e=document.querySelector(".quiz-container"),t=document.querySelectorAll(".result-container");n.remove(),t.forEach(r=>r.remove()),e.classList.add("flex"),e.classList.remove("hidden"),Io(e.plantResults)},ZI=n=>{Q.deletePlantFromLog(n),Ln("plant-log",ut)},$d=()=>{const n=document.querySelector(".modal-overlay"),e=_({tagName:"div",classEl:["are-you-sure-modal"],id:"are-you-sure-modal"}),t=_({tagName:"p",textContent:"Are you sure?",classEl:["modal-text"]}),r=_({tagName:"div",classEl:["are-you-sure-button-container"]}),s=_({tagName:"button",textContent:"Yes",classEl:["are-you-sure-button"],id:"yes-btn"}),i=_({tagName:"button",textContent:"No",classEl:["are-you-sure-button"],id:"no-btn"});return R(r,s,i),R(e,t,r),R(n,e),lt(e),{areYouSureModal:e,yesBtn:s,noBtn:i}},eA=n=>{const{areYouSureModal:e,yesBtn:t,noBtn:r}=$d();D.addEventListener(t,"click",()=>{Oe(e),Q.deletePlantFromLog(n),Ln("plant-log",ut)},"PLANT_PAGE"),D.addEventListener(r,"click",()=>{Oe(e)},"PLANT_PAGE")},tA=(n,e,t,r)=>{const{areYouSureModal:s,yesBtn:i,noBtn:a}=$d();D.addEventListener(i,"click",()=>{Oe(s),nA(n,e,t,r)},"PLANT_PAGE"),D.addEventListener(a,"click",()=>{Oe(s)},"PLANT_PAGE")},nA=async(n,e,t,r)=>{const s=Q.getOriginalPlant(n);n.name=s.name,n.dateAdded=s.dateAdded,n.description=s.description,await ba(n.image,"plants"),n.image=s.image,await ke(n.firestoreId,n,"plants"),pe(e.sectionContainer),ui(n,e.sectionContainer,"← back to My Plants",t,r)},rA=(n,e,t,r,s,i)=>{D.addEventListener(s,"click",()=>{eA(n)},"PLANT_PAGE"),D.addEventListener(i,"click",()=>{tA(n,e,t,r)},"PLANT_PAGE")},sA=(n,e,t,r)=>{n.type="file",n.classList.add("edit-plant-image"),n.accept="image/*",e.plantImageContainer.insertBefore(n,e.plantImageContainer.firstChild),D.addEventListener(n,"change",async s=>{Rb(s,async i=>{const a=new FileReader;a.onload=c=>{e.plantImage.src=c.target.result},a.readAsDataURL(i);try{await ba(r.image);const c=await Fd(i,"plants");r.image=c}catch(c){console.error("Error uploading image:",c)}await ke(r.firestoreId,r,"plants")})},`PLANT_PAGE_${t}`)},iA=(n,e)=>{zd(e),fI(n,e)},oA=(n,e,t,r,s)=>{e.textContent==="Edit"?cA(n,e,t,r,s):lA(n,e,t)},aA=(n,e)=>{pe(e.plantTitle),pe(e.plantDescription);const t=_({tagName:"input",classEl:["edit-plant-title"],placeholder:n.name}),r=_({tagName:"textarea",classEl:["edit-plant-notes"],value:n.description});R(e.plantTitle,t),R(e.plantDescription,r)},cA=(n,e,t,r,s)=>{e.textContent="Save",aA(n,t);const i=_({tagName:"input",classEl:["file-input"],id:"file-upload",type:"file"}),a=_({tagName:"label",classEl:["file-upload-label"],fr:"file-upload"}),c=_({tagName:"img",classEl:["image-input-img"],alt:"Add icon"}),u=document.querySelector(".plant-page-image-container");c.src=Po,R(a,c,i),R(u,a),sA(i,t,r,n);const d=_({tagName:"div",classEl:["edit-button-container"]}),f=_({tagName:"button",textContent:"Delete Plant",classEl:["delete-plant-btn","plant-page-nav-button"]}),p=_({tagName:"button",textContent:"Reset plant details",classEl:["reset-plant-btn","plant-page-nav-button"]}),E=document.querySelector(".about-section");R(d,p,f),R(E,d),rA(n,t,r,s,f,p)},lA=async(n,e,t)=>{e.textContent="Edit";let r=document.querySelector(".edit-plant-title").value,s=document.querySelector(".edit-plant-notes").value;r!==""?n.name=r:r=n.name,s!==""?n.description=s:s=n.description;const i=document.querySelector(".edit-button-container"),a=document.querySelector(".about-section");Tr(a,i),await Q.updatePlantInfo(n),t.plantTitle.textContent=r,t.plantDescription.textContent=s,dI()},Gd=(n,e,t,r,s,i,a,c)=>{const u=document.querySelector(".modal-overlay");D.addEventListener(n,"click",()=>{a(c,r,s.value,i,t)},`PLANT_PAGE_${i}`),D.addEventListener(e,"click",()=>{Oe(t)},`PLANT_PAGE_${i}`),D.addEventListener(u,"click",()=>{Oe(t)},`PLANT_PAGE_${i}`),D.addEventListener(t,"click",d=>{d.stopPropagation()},`PLANT_PAGE_${i}`)},uA=(n,e,t,r,s,i,a,c,u,d,f)=>{const p=n.classList.contains("edit-btn"),E=n.classList.contains("add-to-plants-btn"),P=document.querySelector(".added-to-plants-icon");p&&D.addEventListener(n,"click",()=>oA(e,n,{plantTitle:t,plantDescription:r,plantImageContainer:s,plantImage:i,sectionContainer:a},c,u),`PLANT_PAGE_${c}`),E&&(eu(),D.addEventListener(n,"click",()=>{iA(n,e)},"PLANT_PAGE")),P&&eu(),D.addEventListener(f,"click",()=>{XI(c,u)},`PLANT_PAGE_${c}`)},hA=(n,e,t,r)=>{const s=document.querySelector(".modal-overlay"),i=_({tagName:"input",placeHolder:"New requirement",classEl:["plant-page-input","new-input"]}),a=_({tagName:"button",textContent:"Add requirement",classEl:["submit-requirement-btn","submit-btn"]}),c=_({tagName:"button",textContent:"X",classEl:["cancel-btn"],ariaLabel:"Cancel"});lt(n),R(n,c,i,a),R(s,n),Gd(a,c,n,e,i,t,Wd,r)},Wd=(n,e,t,r,s)=>{if(t==="")return;Oe(s);const i=_({tagName:"div",classEl:["requirement-container"]}),a=_({tagName:"div",classEl:["requirement-icon-container"]}),c=_({tagName:"img",classEl:["requirement-icon"],alt:"A seedling"}),u=_({tagName:"p",textContent:t,classEl:["requirement"]});c.src=Xf,R(a,c),R(i,a,u),R(e,i),n.requirements.includes(t)||(n.requirements.push(t),ke(n.firestoreId,n,"plants"))},dA=(n,e,t,r)=>{const s=document.querySelector(".modal-overlay"),i=_({tagName:"input",placeHolder:"New task",classEl:["plant-page-input","new-input"]}),a=_({tagName:"button",textContent:"Add task",classEl:["submit-requirement-btn","submit-btn"]}),c=_({tagName:"button",textContent:"X",classEl:["cancel-btn"],ariaLabel:"Cancel"});lt(n),R(n,c,i,a),R(s,n),Gd(a,c,n,e,i,t,Kd,r)},Kd=(n,e,t,r,s)=>{if(t==="")return;Oe(s);const i=_({tagName:"div",classEl:["new-task"]}),a=_({tagName:"button",classEl:["select-btn"]}),c=_({tagName:"p",textContent:t,classEl:["new-user-task"]}),u=Ir();if(u.classList.add("plant-page-task-menu"),R(i,a,c,u),R(e,i),!n.tasks.some(f=>f.description===t)){const f={id:Date.now(),description:t,selected:!1};n.tasks.push(f),ke(n.firestoreId,n,"plants")}const d=n.tasks.find(f=>f.description===t);Hd(d,a,"green","none","transparent","0.5px white solid"),fA(a,d,r,u,i,n)},fA=(n,e,t,r,s,i)=>{D.addEventListener(n,"click",()=>{Qd(e,n,"green","none","transparent","0.5px black solid")},`PLANT_PAGE_${t}`),D.addEventListener(r,"click",a=>{Xt(a,LI,r,e,s,i),D.addEventListener(document,"click",On,"PLANT_PAGE")},"PLANT_PAGE")},gA=(n,e,t,r,s)=>{D.addEventListener(n,"click",()=>{Yd(e,s)},"PLANT_PAGE"),D.addEventListener(t,"click",()=>{Xd(e,r,s)},"PLANT_PAGE")},Qd=(n,e,t,r,s,i)=>{n.selected===!1?(e.style.backgroundColor=t,e.style.border=r,n.selected=!0):(e.style.backgroundColor=s,e.style.border=i,n.selected=!1)},pA=(n,e,t)=>{D.addEventListener(n,"click",()=>{yA(e,n)},"PLANT_EDIT"),D.addEventListener(e,"click",r=>{mA(r,e)},"PLANT_EDIT"),D.addEventListener(t,"click",()=>{tf()},"PLANT_EDIT")},mA=(n,e)=>{Xt(n,qA,e,null)},_A=n=>{n.forEach(e=>Q.deletePlantFromLog(e)),Ln("plant-log",ut)},yA=(n,e)=>{const t=document.querySelectorAll(".plant-select-button"),r=document.querySelectorAll(".plant-menu");e.editMode?(Jt(n),e.textContent="Select",e.editMode=!1,t.forEach(i=>i.classList.toggle("hidden")),r.forEach(i=>i.classList.add("flex")),Ln("plant-log",ut),Q.getUserPlantLog().forEach(i=>{i.selected=!1})):(cu("flex",n),e.textContent="Cancel",t.forEach(s=>s.classList.add("show")),r.forEach(s=>s.classList.toggle("hidden")),e.editMode=!0,vA(e))},vA=n=>{const e=document.querySelector(".user-plants");D.removeAllEventListeners("PLANT_CONTAINER"),D.addEventListener(e,"click",t=>{let r=t.target;for(;r&&r!==e;){if(r.classList.contains("plant-image")){const s=r.getAttribute("data-id"),i=Q.getPlantById(s,Q.getUserPlantLog()),c=r.closest(".user-plant").querySelector(".plant-select-button");i&&n.textContent==="Cancel"&&(XA(c),JA(i));return}r=r.parentNode}},"PLANT_CONTAINER")},EA=(n,e)=>{D.addEventListener(n,"click",t=>{e.archived?Xt(t,zA,n,e):Xt(t,jA,n,e),D.addEventListener(document,"click",On,"DOCUMENT")},"DOCUMENT")},wA=async(n,e)=>{const r=n.target.closest(".user-plant");e.pinned?e.pinned=!1:(e.pinned=!0,ef(r)),Dn(Q.getUserPlantLog()),await ke(e.firestoreId,e,"plants")},TA=(n,e,t,r,s,i,a)=>{D.addEventListener(n,"click",()=>{IA(t,r,s)}),D.addEventListener(e,"click",()=>{bA(t,r,s,i,a)})},IA=async(n,e,t)=>{const r=e.tags.find(s=>s.description===n.textContent);e.tags=cn(e.tags,r.id),Oe(t),Dn(Q.getUserPlantLog()),await ke(e.firestoreId,e,"plants")},AA=(n,e)=>{const t=document.querySelector(".modal-overlay"),r=_({tagName:"div",classEl:["new-modal"]}),s=_({tagName:"form",classEl:["modal-form"],id:"edit-tag-form"}),i=_({tagName:"label",classEl:["visualy-hidden"],fr:"edit-tag-input"}),a=_({tagName:"p",textContent:"Tag name needs to be max 10 letters",classEl:["modal-error-message"]}),c=_({tagName:"input",placeholder:n.textContent,classEl:["new-input"],id:"edit=tag=input"}),u=_({tagName:"div",classEl:["edit-tag-buttons"],ariaLabel:"Edit tag"}),d=_({tagName:"button",textContent:"Delete",classEl:["delete-tag-btn"]}),f=_({tagName:"button",textContent:"Update",classEl:["update-tag-btn","submit-btn"]});lt(r,null,"PLANT_LOG"),R(u,d,f),R(s,i,c,u),R(r,a,s),R(t,r),TA(d,f,n,e,r,c,a)},bA=async(n,e,t,r,s)=>{if(r.value==="")return;if(r.value.length>10){s.classList.add("show");return}const i=e.tags.find(a=>a.description===n.textContent);i.description=r.value,Oe(t),Dn(Q.getUserPlantLog()),await ke(e.firestoreId,e,"plants")},PA=n=>{const e=document.querySelector(".modal-overlay"),t=document.querySelector(".drop-menu-container"),r=_({tagName:"div",classEl:["new-modal"]}),s=_({tagName:"form",classEl:["modal-form"],id:"new-tag-form"}),i=_({tagName:"label",textContent:"Tag name:",fr:"new-tag-input",classEl:["visually-hidden"]}),a=_({tagName:"p",textContent:"Tag name needs to be max 10 letters",classEl:["modal-error-message","hidden"]}),c=_({tagName:"input",placeholder:"e.g. New, Flowering",classEl:["new-input"],id:"new-tag-input"}),u=_({tagName:"button",textContent:"Add tag",classEl:["submit-btn"],type:"submit"}),d=_({tagName:"p",textContent:"X",classEl:["cancel-btn"]});lt(r,t,"PLANT_LOG"),R(s,i,c,a,u),R(r,d,s),R(e,r),D.addEventListener(s,"submit",f=>{f.preventDefault(),CA(n,c.value,r,a)},"PLANT_LOG")},CA=async(n,e,t,r)=>{if(e!==""){if(e.length>10){r.classList.add("show");return}if(Oe(t),!n.tags.some(s=>s.description===e)){const s={id:Date.now(),description:e};n.tags.push(s)}Dn(Q.getUserPlantLog()),await ke(n.firestoreId,n,"plants")}},RA=(n,e,t)=>{D.addEventListener(n,"click",()=>{Fs(n,e,!0,t),n.active=!0},"PLANT_TASK"),D.addEventListener(e,"click",()=>{Fs(e,n,!1,t),n.active=!1},"PLANT_TASK")},Fs=(n,e,t,r)=>{pe(r),Jd(t),n.style.fontWeight=600,e.style.fontWeight=100},kA=(n,e,t,r,s)=>{D.addEventListener(n,"click",()=>{Qd(e,n,"rgba(255, 255, 255, 0.95)","none","rgba(255, 255, 255, 0.224)","none"),hi(),Ca()},"PLANT_LOG"),D.addEventListener(t,"click",i=>{Xt(i,KA,t,e,r,s),D.addEventListener(document,"click",On,"PLANT_LOG")},"PLANT_LOG")},SA=(n,e,t,r,s)=>{D.addEventListener(n,"click",()=>{Yd(e,s)},"PLANT_LOG"),D.addEventListener(t,"click",()=>{Xd(e,r,s),Ca(),hi()},"PLANT_LOG")},Yd=(n,e)=>{const t=document.querySelector(".modal-overlay"),r=_({tagName:"div",classEl:["new-modal"]}),s=_({tagName:"form",classEl:["modal-form"],id:"edit-task-form"}),i=_({tagName:"label",textContent:"Task name:",fr:"edit-task-input",classEl:["visually-hidden"]}),a=_({tagName:"input",placeholder:n.description,classEl:["new-input"],id:"edit-task-input"}),c=_({tagName:"button",textContent:"Update",classEl:["update-tag-btn","submit-btn"]});lt(r,null,"PLANT_TASK"),R(s,i,a,c),R(r,s),R(t,r),D.addEventListener(c,"click",()=>{NA(n,a,r,e)})},NA=async(n,e,t,r)=>{e.value!==""&&(n.description=e.value,Oe(t),QA(),await ke(r.firestoreId,r,"plants"))},Xd=async(n,e,t)=>{Q.deletePlantTask(n.id),e&&e.parentNode&&e.parentNode.removeChild(e),await ke(t.firestoreId,t,"plants")},LA=n=>{const e=document.querySelector(".modal-overlay"),t=document.querySelector(".drop-menu-container"),r=_({tagName:"div",classEl:["new-modal"]}),s=_({tagName:"form",classEl:["modal-form"],id:"new-task-form"}),i=_({tagName:"label",textContent:"Task name:",fr:"new-task-input",classEl:["visually-hidden"]}),a=_({tagName:"input",placeholder:"New task",classEl:["new-input"],id:"new-task-input"}),c=_({tagName:"button",textContent:"Add task",classEl:["submit-btn"]}),u=_({tagName:"p",textContent:"X",classEl:["cancel-btn"],ariaLabel:"Cancel task"});lt(r,t,"PLANT_LOG"),R(s,i,a,c),R(r,u,s),R(e,r),D.addEventListener(c,"click",()=>{DA(n,a.value,r)},"PLANT_LOG")},DA=async(n,e,t)=>{if(e!==""){if(Oe(t),!n.tasks.some(r=>r.description===e)){const r={id:Date.now(),description:e,selected:!1};n.tasks.push(r)}Dn(Q.getUserPlantLog()),Ra(),Ca(),await ke(n.firestoreId,n,"plants")}},OA=(n,e,t)=>{D.addEventListener(n,"click",()=>{xA(),_n(n,"white","rgba(255, 255, 255, 0.224","black","white",...n.inactiveBtns)},"PLANT_NAV"),D.addEventListener(e,"click",()=>{MA(),_n(e,"white","rgba(255, 255, 255, 0.224","black","white",...e.inactiveBtns)},"PLANT_NAV"),D.addEventListener(t,"click",()=>{VA(),_n(t,"white","rgba(255, 255, 255, 0.224","black","white",...t.inactiveBtns)},"PLANT_NAV")},VA=()=>{const{editButtonContainer:n,userPlantsContainer:e,addNewPlantDesktopButton:t}=Be.getPlantLogElements(),r=document.querySelector(".task-results"),s=document.querySelector(".task-select-container");pe(r),Jt(s),Zd(),n.classList.add("flex"),n.classList.remove("hidden"),t.classList.remove("hide-desktop"),e.classList.remove("zero-height"),Dn(Q.getUserPlantLog()),Ra()},MA=()=>{const{editButtonContainer:n,userPlantsContainer:e,addNewPlantDesktopButton:t}=Be.getPlantLogElements(),r=document.querySelector(".task-results");pe(r),Jt(n),e.classList.add("zero-height"),t.classList.add("hide-desktop"),Jd(!1),$A(),hi()},xA=()=>{const{editButtonContainer:n,userPlantsContainer:e,addNewPlantDesktopButton:t}=Be.getPlantLogElements(),r=document.querySelector(".task-results"),s=document.querySelector(".task-select-container");pe(r),Zd(),Jt(n,s),e.classList.remove("zero-height"),t.classList.add("hide-desktop"),Ao()},UA=(n,e,t,r,s)=>{D.addEventListener(n,"click",()=>{LA(e)}),D.addEventListener(t,"click",()=>{if(e.tags.length>1){tb();return}PA(e)}),D.addEventListener(r,"click",i=>{wA(i,e)}),D.addEventListener(s,"click",()=>{ZI(e)})},FA=(n,e,t)=>{D.addEventListener(n,"click",()=>{Q.removeFromDeletedPlants(e),Ao(),e.selected=!1},"PLANT_LOG"),D.addEventListener(t,"click",()=>{UI(e),Ao()},"PLANT_LOG")},BA=(n,e,t,r)=>{const{userPlantsContainer:s}=Be.getPlantLogElements(),i=_({tagName:"div",classEl:["plant-page-container"]});D.addEventListener(s,"click",a=>{let c=a.target;for(;c&&c!==s;){if(c.classList.contains("plant-image")){const u=c.getAttribute("data-id"),d=Q.getPlantById(u,e);d&&(D.removeAllEventListeners("PLANT_NAV"),D.removeAllEventListeners("PLANT_SEARCH"),pe(n),R(n,i),ui(d,i,r,"plant-log",t));return}c=c.parentNode}},"PLANT_CONTAINER")},qA=n=>{const t=Q.getUserPlantLog().filter(i=>i.selected===!0);console.log(t);const r=_({tagName:"div",classEl:["drop-menu-container","select-menu"]}),s=_({tagName:"p",textContent:"Delete selected",classEl:["drop-menu-item"]});R(r,s),R(n,r),D.addEventListener(s,"click",()=>{_A(t)})},HA=()=>{const{plantLogEl:n}=ee,e=_({tagName:"div",classEl:["search-tags"]}),t=_({tagName:"button",classEl:["search-tag","log-menu-btn","active"],id:"log-all",textContent:"All"}),r=_({tagName:"button",classEl:["search-tag","log-menu-btn"],id:"log-tasks",textContent:"Tasks"}),s=_({tagName:"div",classEl:["task-count-icon"]}),i=_({tagName:"button",classEl:["search-tag","log-menu-btn"],id:"log-archive",textContent:"Archive"}),a=_({tagName:"div",classEl:["task-results"]});R(n,a),R(r,s);const{numberOfTasks:c}=di(Q.getUserPlantLog());s.textContent=c;const u=c>0?"show":"hidden";return s.classList.remove("show","hidden"),s.classList.add(u),t.inactiveBtns=[r,i],r.inactiveBtns=[t,i],i.inactiveBtns=[t,r],OA(i,r,t),R(e,t,r,i),e},Xt=(n,e,t,r,s,i)=>{n.stopPropagation(),PI(),e(t,r,s,i)},zA=(n,e)=>{const t=_({tagName:"div",classEl:["drop-menu-container","plant-menu"]}),r=_({tagName:"p",textContent:"Unarchive",classEl:["drop-menu-item"]}),s=_({tagName:"p",textContent:"Permanent delete",classEl:["drop-menu-item"]});R(t,r,s),R(n,t),FA(r,e,s)},jA=(n,e)=>{const t=_({tagName:"div",classEl:["drop-menu-container","plant-menu"]}),r=_({tagName:"p",textContent:"New task",classEl:["drop-menu-item"]}),s=_({tagName:"p",textContent:"New tag",classEl:["drop-menu-item"]}),i=_({tagName:"p",textContent:e.pinned?"Unpin":"Pin",classEl:["drop-menu-item"]}),a=_({tagName:"p",textContent:"Delete",classEl:["drop-menu-item"],id:"delete-plant-btn"});R(t,r,s,i,a),R(n,t),UA(r,e,s,i,a)},$A=()=>{document.querySelector(".task-select-container").classList.add("flex")},GA=()=>{const n=document.querySelector(".task-results"),e=_({tagName:"div",classEl:["task-select-container"]}),t=_({tagName:"p",textContent:"|",classEl:["task-select"]}),r=_({tagName:"p",textContent:"Task list",classEl:["task-select","to-do-select"]}),s=_({tagName:"p",textContent:"Completed",classEl:["task-select","completed-select"]});return e.classList.add("hidden"),R(e,r,t,s),RA(s,r,n),e},Jd=n=>{const{plantLogEl:e}=ee,{userPlantsContainer:t}=Be.getPlantLogElements(),r=document.querySelector(".task-results");R(e,r),pe(t),Q.getUserPlantLog().forEach(i=>{i.tasks&&i.tasks.length>0&&i.tasks.forEach(a=>{if(a.selected===n){const c=WA(i,a);R(r,c)}})})},WA=(n,e)=>{const t=_({tagName:"div",classEl:["task-element"]}),r=_({tagName:"div",classEl:["task-result-container"]}),s=_({tagName:"button",classEl:["task-selector"],ariaLabel:"Select task"}),i=_({tagName:"div",classEl:["plant-task-image-container"]}),a=_({tagName:"img",classEl:["plant-task-image"],alt:"Plant image"}),c=_({tagName:"p",classEl:["plant-task-text"]}),u=_({tagName:"p",classEl:["plant-task-title","plant-result-title"],textContent:n.name});let d=_({tagName:"p",classEl:["task-description","plant-result-description"],textContent:e.description});const f=_({tagName:"div",classEl:["line-separator","task-line-seperator"]}),p=Ir(),E=_({tagName:"div",classEl:["search-drop-menu"]});return t.plantObject=e,Hd(e,s,"rgba(255, 255, 255, 0.95)","none","rgba(255, 255, 255, 0.224)","none"),a.src=n.image,R(i,a),R(c,u,d),R(E,p),R(r,s,i,c,E),R(t,r,f),kA(s,e,p,t,n),t},KA=(n,e,t,r)=>{const s=_({tagName:"div",classEl:["drop-menu-container","select-menu"]}),i=_({tagName:"p",textContent:"Edit",classEl:["drop-menu-item"]}),a=_({tagName:"p",textContent:"Delete",classEl:["drop-menu-item"]});R(s,i,a),R(n,s),SA(i,e,a,t,r)},QA=()=>{const n=document.querySelector(".completed-select"),e=document.querySelector(".to-do-select"),t=document.querySelector(".task-results");n&&(n.active===!0?Fs(n,e,!0,t):Fs(e,n,!1,t),hi())},Ca=()=>{const n=document.querySelector(".task-count-icon");if(!n)return;const{numberOfTasks:e}=di(Q.getUserPlantLog());n.textContent=e;const t=e>0?"show":"hidden";n.classList.remove("show","hidden"),n.classList.add(t)},hi=()=>{const{plantInfoBar:n}=Be.getPlantLogElements();if(!n)return;const{numberOfTasks:e}=di(Q.getUserPlantLog());n.textContent=`${e} tasks`},YA=()=>({createPlantLogElements:()=>{const{plantLogEl:n}=ee,e=_({tagName:"div",classEl:["section-header"]}),t=_({tagName:"h1",textContent:"My Plants",classEl:["section-title"]}),r=_({tagName:"button",textContent:"+",id:"add-new-plant-desktop",classEl:["hidden-desktop-button"]}),s=_({tagName:"div",classEl:["info-bar-container"]}),i=_({tagName:"div",classEl:["plant-info-bar"]}),a=_({tagName:"div",classEl:["edit-plant-log-container"]}),c=_({tagName:"button",classEl:["edit-plant-log-button"],id:"select-plant-btn",textContent:"Select"});c.editMode=!1;const u=Ir(),d=_({tagName:"div",classEl:["user-plants"]}),f=HA(),p=GA();R(a,c,u),R(s,i,a),R(e,t),R(n,e,f,r,s,p,d),Jt(u),pA(c,u,r)},getPlantLogElements:()=>{const n=document.querySelector(".section-title"),e=document.querySelector(".add-new-plant-btn"),t=document.querySelector(".user-plants"),r=document.querySelector(".plant-info-bar"),s=document.querySelector(".edit-plant-log-container"),i=document.querySelector(".edit-plant-log-button"),a=document.querySelector(".menu-dots-container"),c=document.getElementById("add-new-plant-desktop");return{plantLogTitle:n,addPlantBtn:e,userPlantsContainer:t,plantInfoBar:r,editButtonContainer:s,editButton:i,editDots:a,addNewPlantDesktopButton:c}}}),Be=YA(),XA=n=>{n.isSelected?(n.style.backgroundColor="transparent",n.isSelected=!1):(n.style.backgroundColor="white",n.isSelected=!0)},JA=n=>{n.selected?n.selected=!1:n.selected=!0},Zd=()=>{const{editButton:n,editDots:e}=Be.getPlantLogElements();n.editMode&&(Jt(e),n.textContent="Edit",n.editMode=!1)},Ra=()=>{const{plantInfoBar:n}=Be.getPlantLogElements(),{numberOfPlants:e}=di(Q.getUserPlantLog());n.textContent=`${e} plants`,ZA(e)},ZA=n=>{const{editButtonContainer:e}=Be.getPlantLogElements();n===0?(e.classList.add("hidden"),e.classList.remove("flex")):(e.classList.add("flex"),e.classList.remove("hidden"))},ef=n=>{const{userPlantsContainer:e}=Be.getPlantLogElements();n&&e.prepend(n)},eb=n=>{const e=_({tagName:"div",classEl:["plant-tag-container"]}),t=n.tags;return t&&t.forEach(r=>{const s=_({tagName:"button",textContent:r.description,classEl:["plant-log-tag"]});R(e,s),D.addEventListener(s,"click",()=>{AA(s,n)},"PLANT_LOG")}),e},tb=()=>{const n=document.querySelector(".modal-overlay"),e=document.querySelector(".drop-menu-container"),t=_({tagName:"div",classEl:["new-modal"]}),r=_({tagName:"p",textContent:"Maximum tags added for this plant!",classEl:["modal-error-message"]});r.classList.add("show"),lt(t,e,"PLANT_LOG"),R(t,r),R(n,t)},Ao=()=>{const{userPlantsContainer:n,plantInfoBar:e}=Be.getPlantLogElements();pe(n),ka(Q.getDeletedPlants(),ut,"← back to Plant Archive"),e.textContent=`${Q.getDeletedPlants().length} archived plants`;const t=document.querySelectorAll(".plant-log-tag");console.log(t),t.forEach(r=>{D.removeEventListener(r,"click","PLANT_LOG"),r.style.cursor="default"})},ka=(n,e,t)=>{if(console.log(n),n.length<0)return;const{plantLogEl:r}=ee;sb(n),BA(r,n,e,t)},Dn=n=>{const{userPlantsContainer:e}=Be.getPlantLogElements();pe(e),ka(n,ut,"← back to My Plants")},nb=n=>{const e=document.querySelector(".user-plants"),t=_({tagName:"div",classEl:["user-plant"]}),r=_({tagName:"div",classEl:["plant-image-container"]}),s=_({tagName:"img",classEl:["plant-image"],dataAttributes:{id:n.id.toString()},alt:"Plant image"}),i=_({tagName:"div",classEl:["edit-plant-buttons"],ariaLabel:"Edit plant"}),a=_({tagName:"button",classEl:["plant-select-button"],ariaLabel:"Select plant"}),c=Ir(),u=eb(n),d=_({tagName:"p",classEl:["task-counter"]}),f=_({tagName:"p",classEl:["plant-grid-title"],textContent:n.name}),p=_({tagName:"div",classEl:["pin-icon-container"]}),E=_({tagName:"img",classEl:["pin-icon-img"],alt:"pin-icon"});if(E.src=Qf,s.src=n.image,c.classList.add("plant-menu"),E.classList.add("hidden"),n.tasks){const P=n.tasks?n.tasks.filter(N=>!N.selected).length:0;d.textContent=`${P} tasks`}R(i,a,c),R(r,s,i),R(t,r,u,d,f),R(p,E),R(t,p),R(e,t),n.pinned===!0&&(E.classList.remove("hidden"),p.classList.add("show"),ef(t)),EA(c,n)},ut=()=>{Be.createPlantLogElements(),ka(Q.getUserPlantLog(),ut,"← back to My Plants"),Ra(),D.removeAllEventListeners("PLANT_SEARCH"),D.removeAllEventListeners("PLANT_LIBRARY")},di=n=>{const e=n.reduce((r,s)=>{const i=s.tasks?s.tasks.filter(a=>!a.selected).length:0;return r+i},0);return{numberOfPlants:n.length,numberOfTasks:e}},rb=()=>{let n=[],e=[],t=[],r=null;return{setUserId:s=>{r=s},initialisePlantLog:(s,i)=>{n=s,e=i,n.forEach(a=>{a.archived===!0&&(n=cn(n,a.id),t.push(a))}),console.log(e)},addToUserPlantLog:async s=>{if(n.push(s),!$e(e,s.id)){const c=JSON.parse(JSON.stringify(s));e.push(c);const u=await Yl(r,c,"original");c.firestoreId=u,await ke(u,c,"original"),s.originalFirestoreId=u}const a=await Yl(r,s,"plants");s.firestoreId=a,await ke(s.firestoreId,s,"plants")},deletePlantFromLog:async s=>{$e(n,s.id)&&(n=cn(n,s.id),t.push(s),s.archived=!0),await ke(s.firestoreId,s,"plants")},updatePlantInfo:async s=>{const i=$e(n,s.id);i&&(i.name=s.name,i.dateAdded=s.dateAdded,i.image=s.image),await ke(s.firestoreId,s,"plants")},removeFromDeletedPlants:async s=>{$e(t,s.id)&&(t=cn(t,s.id),n.push(s),s.archived=!1),await ke(s.firestoreId,s,"plants")},permanentDelete:async s=>{t=cn(t,s.id),e=cn(e,s.id),await Jl(s.firestoreId,"plants",s),await Jl(s.originalFirestoreId,"original",s)},getPlant:s=>{const i=$e(n,s.id);return i||!1},getOriginalPlant:s=>$e(e,s.id),getPlantById:(s,i)=>i.find(a=>a.id.toString()===s),getUserPlantLog:()=>n,getOriginalPlantLog:()=>e,getDeletedPlants:()=>t,deletePlantTask:s=>{n.forEach(i=>{if(i.tasks){const a=i.tasks.findIndex(c=>c.id===s);a!==-1&&i.tasks.splice(a,1)}})}}},Q=rb(),sb=n=>{n.forEach(e=>{nb(e)})},ib=(n,e,t)=>{let r;return D.addEventListener(n,"change",s=>{const i=s.target.files[0];if(i){r=i;const a=new FileReader;a.onload=c=>{e.src=c.target.result,e.classList.add("large-image"),t.classList.toggle("hidden")},a.readAsDataURL(i)}},"ADD_PLANT"),()=>r},ob=async(n,e,t,r,s)=>{const{myPlantsBtn:i}=ee;n.preventDefault(),console.log("Plant Name:",e),console.log("Date Added:",t),console.log("Description:",r),console.log("Image File:",s);let a=s;if(Hg(s))try{a=await Fd(s,"original")}catch(u){console.error("Error uploading image:",u);return}const c={name:e,dateAdded:t,description:r,image:a,id:Date.now(),requirements:[],tasks:[],tags:[]};console.log(c),await Q.addToUserPlantLog(c),i.classList.contains("active")&&Ln("plant-log",ut)},ab=(n,e,t,r,s,i,a)=>{D.addEventListener(n,"click",c=>{if(e.value===""){t.classList.add("show");return}const u=r?e.files[0]:e.value,d=document.querySelector(".new-modal"),f=i(),p=cb(u,s,c,f,d);d&&bo(d,p)},"ADD_PLANT"),D.addEventListener(a,"click",()=>{const c=document.querySelector(".new-modal"),u=lb(s);c&&bo(c,u)},"ADD_PLANT")},cb=(n,e,t,r,s)=>{let i={...e.newPlant};if(e.currentStep===0)i.name=n;else if(e.currentStep===1)i.dateAdded=n;else if(e.currentStep===2)console.log("STEO 2"),i.description=n;else if(e.currentStep===3)return console.log("FINISHED"),ob(t,i.name,i.dateAdded,i.description,r),Oe(s),{currentStep:0,newPlant:{}};return{currentStep:e.currentStep+1,newPlant:i}},lb=n=>n.currentStep>0?{currentStep:n.currentStep-1,newPlant:n.newPlant}:n,bo=(n,e)=>{pe(n);let t,r="",s="input",i="Next",a,c=!1,u;e.currentStep===0?(t="Plant name",a=["new-input"]):e.currentStep===1?(t="Date",r="date",a=["new-input"]):e.currentStep===2?(t="Description",s="textarea",a=["new-input","description-input"]):e.currentStep===3&&(a=["photo-input"],u="file-upload",c=!0,i="Create plant");const d=ub(s,t,i,r,e,c,a,u);R(n,d)},ub=(n,e,t,r,s,i,a,c)=>{const u=_({tagName:"form",classEl:["new-plant-form"],id:"new-plant-form"}),d=_({tagName:"label",textContent:e,fr:c,classEl:["visually-hidden"]}),f=_({tagName:n,placeholder:e,classEl:a,type:i?"file":r,id:c}),p=_({tagName:"p",textContent:"Please complete field",classEl:["modal-error-message"]});let E=()=>null,P;if(i){const V=hb(f);P=V.labelElement,E=V.getImageFile,R(u,P)}const{buttons:N}=db(s,f,p,t,i,E);return R(u,d,f,p,N),u},hb=n=>{n.setAttribute("accept","image/*");const e=_({tagName:"label",classEl:["file-upload"],fr:"file-upload"}),t=_({tagName:"p",textContent:"Upload a photo",classEl:["upload-image-heading"]}),r=_({tagName:"img",classEl:["image-input-img"],alt:"Add icon"});r.src=Po,R(e,t,r,n);const s=ib(n,r,t);return{labelElement:e,getImageFile:s}},db=(n,e,t,r,s,i)=>{const a=_({tagName:"button",textContent:r,classEl:["next-button","submit-btn"],ariaLabel:"Next Button",type:"button"}),c=_({tagName:"button",textContent:"Back",classEl:["submit-btn"],ariaLabel:"Back Button",type:"button"}),u=_({tagName:"div",classEl:["plant-form-buttons"]});return n.currentStep>0&&R(u,c),R(u,a),ab(a,e,t,s,n,i,c),{buttons:u,nextButton:a,backButton:c}},tf=()=>{const n=document.querySelector(".modal-overlay"),e=_({tagName:"div",classEl:["new-modal"]});lt(e,null,"ADD_MODAL"),R(n,e),bo(e,{currentStep:0,newPlant:{}})},fb=()=>{const n=document.querySelector(".profile-icon-container");D.addEventListener(n,"click",e=>{Xt(e,gb,n)},"HOME_PAGE"),D.addEventListener(document,"click",On,"PLANT_LOG")},gb=n=>{const e=_({tagName:"div",classEl:["drop-menu-container","profile-icon-menu"]}),t=_({tagName:"p",textContent:"Logout",classEl:["drop-menu-item"]}),r=_({tagName:"p",textContent:"Delete account",classEl:["drop-menu-item"]});R(e,t,r),R(n,e),pb(t,r)},pb=(n,e)=>{D.addEventListener(n,"click",async()=>{try{await aI(),window.location.href="/login.html"}catch(t){console.error("Error logging out:",t)}},"HOME_PAGE"),D.addEventListener(e,"click",async()=>{console.log("clicked"),await cI()},"HOME_PAGE")},mb=(n,e)=>{D.addEventListener(n,"click",()=>{wt("HOME_PAGE")},"HOME_PAGE"),D.addEventListener(e,"click",()=>{wt("MY_PLANTS")},"HOME_PAGE")},_b=async()=>{const n="7d937292bb8b1f3909c1d557d907ffbc",{latitude:e,longitude:t}=await Bg(),r=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=${n}&units=metric`;try{const s=await fetch(r);if(!s.ok)throw new Error("Error with network response");const i=await s.json();return yb(i)}catch(s){console.log("There was an error in fetching weather data",s)}},yb=n=>{const e={description:n.weather[0].main,temperature:qg(n.main.temp),timestamp:new Date().getTime()};return localStorage.setItem("weatherData",JSON.stringify(e)),e},vb=async()=>{const n=localStorage.getItem("weatherData"),e=10*60*1e3;if(n){const t=JSON.parse(n);if(new Date().getTime()-t.timestamp<e)return t}return await _b()},Eb=async()=>{const{homePage:n}=ee,e=document.querySelector("header"),t=_({tagName:"div",classEl:["logo-container"]}),r=_({tagName:"img",classEl:["logo-img"],alt:"Logo"}),s=_({tagName:"div",classEl:["welcome-message-container"]}),i=_({tagName:"p",textContent:"Welcome to PlantBud!",classEl:["welcome-message"]}),a=_({tagName:"button",textContent:"My Plants →",id:"home-page-action-button"}),c=document.querySelector(".plantBud-desktop-logo");r.src=Wf,e.classList.add("hidden-nav"),R(s,i,a),R(t,r),R(n,t,s),mb(c,a),await wb()},wb=async()=>{try{if(document.getElementById("weather-container"))return;const e=await Ib(),t=document.querySelector("header");R(t,e)}catch(n){console.error("Error creating weather container:",n)}},Tb=(n,e)=>{const i={clear:new Date().getHours()>=18?xg:au,clouds:Sc,rain:Og,drizzle:Dg,thunderstorm:Mg,snow:Vg}[n.toLowerCase()]||Sc;e.src=i},Ib=async()=>{const n=await vb(),e=_({tagName:"div",id:"weather-container"}),t=_({tagName:"div",classEl:["weather-icon-container"]}),r=_({tagName:"img",classEl:["weather-icon"]}),s=_({tagName:"p",classEl:["temperature"]});return s.textContent=`${n.temperature}°C`,Tb(n.description,r),R(t,r),R(e,t,s),e},Ab=()=>{Eb(),fb()},bb=()=>{let n={};return{addEventListener:(e,t,r,s="GLOBAL")=>{n[s]||(n[s]={}),n[s][t]||(n[s][t]=[]),e.addEventListener(t,r),n[s][t].push({element:e,handler:r})},getHandlers:()=>n,removeEventListener:(e,t,r="GLOBAL")=>{n[r]&&n[r][t]&&(n[r][t]=n[r][t].filter(({element:s,handler:i})=>{const a=s===e;return a&&e.removeEventListener(t,i),!a}),n[r][t].length===0&&delete n[r][t],Object.keys(n[r]).length===0&&delete n[r])},removeAllEventListeners:(e="GLOBAL")=>{n[e]&&(Object.keys(n[e]).forEach(t=>{n[e][t].forEach(({element:r,handler:s})=>{r.removeEventListener(t,s)})}),delete n[e])}}},D=bb(),wt=n=>{const{myPlantsBtn:e,addNewPlantBtn:t,quizBtn:r,libraryBtn:s,homeBtn:i,desktopMyPlantsBtn:a,desktopQuizBtn:c,desktopLibraryBtn:u,desktopHomeBtn:d}=ee,f={MY_PLANTS:{buttons:[e,a],renderFunc:ut},PLANT_QUIZ:{buttons:[r,c],renderFunc:Pa},ADD_PLANT:{buttons:[t],renderFunc:tf},PLANT_LIBRARY:{buttons:[s,u],renderFunc:wr},HOME_PAGE:{buttons:[i,d],renderFunc:Ab}},p=f[n],E=Object.values(f).flatMap(P=>P.buttons).filter(P=>!p.buttons.includes(P));if(!(!p||p.buttons.some(P=>P.classList.contains("active")))){if(p.buttons.some(P=>P.classList.contains("dormant"))){Zl(p.buttons,p.renderFunc,...E);return}Zl(p.buttons,p.renderFunc,...E),p.buttons.forEach(P=>P.classList.add("dormant"))}},Pb=()=>{const{myPlantsBtn:n,addNewPlantBtn:e,quizBtn:t,libraryBtn:r,homeBtn:s,desktopMyPlantsBtn:i,desktopQuizBtn:a,desktopLibraryBtn:c,desktopHomeBtn:u}=ee;[n,i].forEach(d=>{D.addEventListener(d,"click",()=>{wt("MY_PLANTS")},"DASHBOARD")}),[t,a].forEach(d=>{D.addEventListener(d,"click",()=>{wt("PLANT_QUIZ")},"DASHBOARD")}),[r,c].forEach(d=>{D.addEventListener(d,"click",()=>{wt("PLANT_LIBRARY")},"DASHBOARD")}),[s,u].forEach(d=>{D.addEventListener(d,"click",()=>{wt("HOME_PAGE")},"DASHBOARD")}),D.addEventListener(e,"click",()=>{wt("ADD_PLANT")},"DASHBOARD")},Cb=()=>{wt("HOME_PAGE"),Pb(),Bd()},Rb=(n,e)=>{const t=n.target.files[0];t&&e(t)},kb=(n,e,t)=>{D.addEventListener(n,"click",()=>{Oe(e)},t),D.addEventListener(e,"click",r=>{r.stopPropagation()},t)},On=n=>{const e=document.querySelector(".drop-menu-container");e&&!e.contains(n.target)&&e.remove()},nu=async n=>{Cb(),Q.setUserId(n);const e=await Xl(n,"plants"),t=await Xl(n,"original");Q.initialisePlantLog(e,t)};ju(Ur,n=>{const e=document.querySelector(".dashboard-page");n?document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{e.classList.add("hidden"),nu(n.uid)}):(e.classList.remove("hidden"),nu(n.uid)):(e.classList.toggle("hidden"),window.location.href="/login.html")});
