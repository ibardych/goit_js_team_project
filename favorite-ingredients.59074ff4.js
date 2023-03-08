function e(e){return e&&e.__esModule?e.default:e}var t,n,r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s=t={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],h=!1,d=-1;function f(){h&&c&&(h=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!h){var e=l(f);h=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,h=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new g(e,t)),1!==u.length||h||l(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0};
/**
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
 */
const v=!1,y=!1,_="${JSCORE_VERSION}",b=function(e,t){if(!e)throw w(t)},w=function(e){return new Error("Firebase Database ("+_+") INTERNAL ASSERT FAILED: "+e)},E=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},C={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(E(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new T;const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class T extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I=function(e){const t=E(e);return C.encodeByteArray(t,!0)},S=function(e){return I(e).replace(/\./g,"")},k=function(e){try{return C.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
function x(e){return N(void 0,e)}function N(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=N(e[n],t[n]));return e}
/**
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
 */
const A=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,R=()=>{try{return A()||(()=>{if(void 0===t||void 0===t.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&k(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},P=e=>{var t,n;return null===(n=null===(t=R())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},L=e=>{const t=P(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},O=e=>{var t;return null===(t=R())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class D{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */function M(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[S(JSON.stringify({alg:"none",type:"JWT"})),S(JSON.stringify(s)),""].join(".")}
/**
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
 */function F(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function j(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(F())}function U(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function q(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function B(){const e=F();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function H(){return!0===v||!0===y}function W(){try{return"object"==typeof indexedDB}catch(e){return!1}}class $ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,$.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,z.prototype.create)}}class z{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(V,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new $(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const V=/\{\$([^}]+)}/g;
/**
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
 */function Y(e){return JSON.parse(e)}function X(e){return JSON.stringify(e)}
/**
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
 */const K=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=Y(k(s[0])||""),n=Y(k(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},G=function(e){const t=K(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},J=function(e){const t=K(e).claims;return"object"==typeof t&&!0===t.admin};
/**
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
 */
function Q(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Z(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ee(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function te(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ne(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(re(n)&&re(s)){if(!ne(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function re(e){return null!==e&&"object"==typeof e}
/**
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
 */
/**
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
 */
function ie(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function se(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function oe(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */class ae{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^o&(a^l),i=1518500249):(r=o^a^l,i=1859775393):e<60?(r=o&a|l&(o|a),i=2400959708):(r=o^a^l,i=3395469782);const t=(s<<5|s>>>27)+r+c+i+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function le(e,t){const n=new ce(e,t);return n.subscribe.bind(n)}class ce{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ue),void 0===r.error&&(r.error=ue),void 0===r.complete&&(r.complete=ue);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ue(){}
/**
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
 */function he(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const de=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,b(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},fe=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function pe(e){return e&&e._delegate?e._delegate:e}class ge{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
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
 */
/**
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
 */
class me{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new D;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ve{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new me(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
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
 */const ye=[];var _e,be;(be=_e||(_e={}))[be.DEBUG=0]="DEBUG",be[be.VERBOSE=1]="VERBOSE",be[be.INFO=2]="INFO",be[be.WARN=3]="WARN",be[be.ERROR=4]="ERROR",be[be.SILENT=5]="SILENT";const we={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},Ee=_e.INFO,Ce={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},Te=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Ce[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Ie{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?we[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Ee,this._logHandler=Te,this._userLogHandler=null,ye.push(this)}}let Se,ke;const xe=new WeakMap,Ne=new WeakMap,Ae=new WeakMap,Re=new WeakMap,Pe=new WeakMap;let Le={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ne.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ae.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Oe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ke||(ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Fe(this),t),Me(xe.get(this))}:function(...t){return Me(e.apply(Fe(this),t))}:function(t,...n){const r=e.call(Fe(this),t,...n);return Ae.set(r,t.sort?t.sort():[t]),Me(r)}}function De(e){return"function"==typeof e?Oe(e):(e instanceof IDBTransaction&&function(e){if(Ne.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Ne.set(e,t)}(e),t=e,(Se||(Se=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Le):e);var t}function Me(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Me(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&xe.set(t,e)})).catch((()=>{})),Pe.set(t,e),t}(e);if(Re.has(e))return Re.get(e);const t=De(e);return t!==e&&(Re.set(e,t),Pe.set(t,e)),t}const Fe=e=>Pe.get(e);function je(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Me(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Me(o.result),e.oldVersion,e.newVersion,Me(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Ue=["get","getKey","getAll","getAllKeys","count"],qe=["put","add","delete","clear"],Be=new Map;function He(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Be.get(t))return Be.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=qe.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ue.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Be.set(t,s),s}Le=(e=>({...e,get:(t,n,r)=>He(t,n)||e.get(t,n,r),has:(t,n)=>!!He(t,n)||e.has(t,n)}))(Le);
/**
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
 */
class We{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const $e=new Ie("@firebase/app"),ze={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ve=new Map,Ye=new Map;function Xe(e,t){try{e.container.addComponent(t)}catch(n){$e.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ke(e){const t=e.name;if(Ye.has(t))return $e.debug(`There were multiple attempts to register component ${t}.`),!1;Ye.set(t,e);for(const t of Ve.values())Xe(t,e);return!0}function Ge(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const Je=new z("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
 */
class Qe{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ge("app",(()=>this),"PUBLIC"))}}
/**
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
 */function Ze(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Je.create("bad-app-name",{appName:String(i)});var s;if(n||(n=null===(s=R())||void 0===s?void 0:s.config),!n)throw Je.create("no-options");const o=Ve.get(i);if(o){if(ne(n,o.options)&&ne(r,o.config))return o;throw Je.create("duplicate-app",{appName:i})}const a=new ve(i);for(const e of Ye.values())a.addComponent(e);const l=new Qe(n,r,a);return Ve.set(i,l),l}function et(e="[DEFAULT]"){const t=Ve.get(e);if(!t&&"[DEFAULT]"===e)return Ze();if(!t)throw Je.create("no-app",{appName:e});return t}function tt(e,t,n){var r;let i=null!==(r=ze[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void $e.warn(e.join(" "))}Ke(new ge(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let nt=null;function rt(){return nt||(nt=je("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Je.create("idb-open",{originalErrorMessage:e.message})}))),nt}async function it(e,t){try{const n=(await rt()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,st(e)),n.done}catch(e){if(e instanceof $)$e.warn(e.message);else{const t=Je.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});$e.warn(t.message)}}}function st(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class ot{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=at();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=at(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ct(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ct(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=S(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function at(){return(new Date).toISOString().substring(0,10)}class lt{async runIndexedDBEnvironmentCheck(){return!!W()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await rt()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(st(e))}catch(e){if(e instanceof $)$e.warn(e.message);else{const t=Je.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});$e.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return it(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return it(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function ct(e){return S(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var ut;ut="",Ke(new ge("platform-logger",(e=>new We(e)),"PRIVATE")),Ke(new ge("heartbeat",(e=>new ot(e)),"PRIVATE")),tt("@firebase/app","0.9.4",ut),tt("@firebase/app","0.9.4","esm2017"),tt("fire-js","");
/**
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
 */
tt("firebase","9.17.2","app");function ht(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function dt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ft=dt,pt=new z("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),gt=new Ie("@firebase/auth");function mt(e,...t){gt.logLevel<=_e.ERROR&&gt.error(`Auth (9.17.2): ${e}`,...t)}
/**
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
 */function vt(e,...t){throw bt(e,...t)}function yt(e,...t){return bt(e,...t)}function _t(e,t,n){const r=Object.assign(Object.assign({},ft()),{[t]:n});return new z("auth","Firebase",r).create(t,{appName:e.name})}function bt(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return pt.create(e,...t)}function wt(e,t,...n){if(!e)throw bt(t,...n)}function Et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw mt(t),new Error(t)}function Ct(e,t){e||Et(t)}
/**
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
 */const Tt=new Map;function It(e){Ct(e instanceof Function,"Expected a class definition");let t=Tt.get(e);return t?(Ct(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Tt.set(e,t),t)}
/**
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
 */
/**
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
 */
function St(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function kt(){return"http:"===xt()||"https:"===xt()}function xt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function Nt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(kt()||U()||"connection"in navigator))||navigator.onLine}
/**
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
 */
class At{get(){return Nt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Ct(t>e,"Short delay should be less than long delay!"),this.isMobile=j()||q()}}
/**
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
 */function Rt(e,t){Ct(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class Pt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const Lt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ot=new At(3e4,6e4);
/**
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
 */function Dt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Mt(e,t,n,r,i={}){return Ft(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=ie(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Pt.fetch()(Ut(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ft(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lt),t);try{const t=new qt(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Bt(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Bt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Bt(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Bt(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw _t(e,a,o);vt(e,a)}}catch(t){if(t instanceof $)throw t;vt(e,"internal-error",{message:String(t)})}}async function jt(e,t,n,r,i={}){const s=await Mt(e,t,n,r,i);return"mfaPendingCredential"in s&&vt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ut(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Rt(e.config,i):`${e.config.apiScheme}://${i}`}class qt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(yt(this.auth,"network-request-failed"))),Ot.get())}))}}function Bt(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */
/**
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
 */
function Ht(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function Wt(e){return 1e3*Number(e)}function $t(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return mt("JWT malformed, contained fewer than 3 sections"),null;try{const e=k(n);return e?JSON.parse(e):(mt("Failed to decode base64 JWT payload"),null)}catch(e){return mt("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
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
 */
async function zt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof $&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Vt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
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
 */class Yt{_initializeTime(){this.lastSignInTime=Ht(this.lastLoginAt),this.creationTime=Ht(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
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
 */async function Xt(e){var t;const n=e.auth,r=await e.getIdToken(),i=await zt(e,async function(e,t){return Mt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));wt(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=ht(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
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
 */
class Kt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){wt(e.idToken,"internal-error"),wt(void 0!==e.idToken,"internal-error"),wt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=$t(e);return wt(t,"internal-error"),wt(void 0!==t.exp,"internal-error"),wt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return wt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
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
 */
async function(e,t){const n=await Ft(e,{},(async()=>{const n=ie({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Ut(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Pt.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Kt;return n&&(wt("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(wt("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(wt("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kt,this.toJSON())}_performRefresh(){return Et("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
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
 */function Gt(e,t){wt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Jt{async getIdToken(e){const t=await zt(this,this.stsTokenManager.getToken(this.auth,e));return wt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=pe(e),r=await n.getIdToken(t),i=$t(r);wt(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ht(Wt(i.auth_time)),issuedAtTime:Ht(Wt(i.iat)),expirationTime:Ht(Wt(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=pe(e);await Xt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(wt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){wt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Xt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zt(this,async function(e,t){return Mt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:E}=t;wt(y&&E,e,"internal-error");const C=Kt.fromJSON(this.name,E);wt("string"==typeof y,e,"internal-error"),Gt(u,e.name),Gt(h,e.name),wt("boolean"==typeof _,e,"internal-error"),wt("boolean"==typeof b,e,"internal-error"),Gt(d,e.name),Gt(f,e.name),Gt(p,e.name),Gt(g,e.name),Gt(m,e.name),Gt(v,e.name);const T=new Jt({uid:y,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(T.providerData=w.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new Kt;r.updateFromServerResponse(t);const i=new Jt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Xt(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=ht(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yt(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
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
 */class Qt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Qt.type="NONE";const Zt=Qt;
/**
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
 */function en(e,t,n){return`firebase:${e}:${t}:${n}`}class tn{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new tn(It(Zt),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||It(Zt);const s=en(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Jt._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new tn(i,e,n)):new tn(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=en(this.userKey,r.apiKey,i),this.fullPersistenceKey=en("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
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
 */function nn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(an(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(rn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(cn(t))return"Blackberry";if(un(t))return"Webos";if(sn(t))return"Safari";if((t.includes("chrome/")||on(t))&&!t.includes("edge/"))return"Chrome";if(ln(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function rn(e=F()){return/firefox\//i.test(e)}function sn(e=F()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function on(e=F()){return/crios\//i.test(e)}function an(e=F()){return/iemobile/i.test(e)}function ln(e=F()){return/android/i.test(e)}function cn(e=F()){return/blackberry/i.test(e)}function un(e=F()){return/webos/i.test(e)}function hn(e=F()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dn(){return B()&&10===document.documentMode}function fn(e=F()){return hn(e)||ln(e)||un(e)||cn(e)||/windows phone/i.test(e)||an(e)}
/**
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
 */
function pn(e,t=[]){let n;switch(e){case"Browser":n=nn(F());break;case"Worker":n=`${nn(F())}-${e}`;break;default:n=e}return`${n}/JsCore/9.17.2/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
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
 */class gn{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
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
 */class mn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=It(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return wt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xt(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?pe(e):null;return t&&wt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&wt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(It(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new z("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&It(e)||this._popupRedirectResolver;wt(t,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[It(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return wt(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return wt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yn(this),this.idTokenSubscription=new yn(this),this.beforeStateQueue=new gn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function vn(e){return pe(e)}class yn{get next(){return wt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=le((e=>this.observer=e))}}function _n(e,t,n){const r=vn(e);wt(r._canInitEmulator,r,"emulator-config-failed"),wt(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=bn(t),{host:o,port:a}=function(e){const t=bn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:wn(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:wn(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function bn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function wn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class En{toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,t){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
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
 */async function Cn(e,t){return Mt(e,"POST","/v1/accounts:update",t)}
/**
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
 */
class Tn extends En{static _fromEmailAndPassword(e,t){return new Tn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Tn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
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
 */
return async function(e,t){return jt(e,"POST","/v1/accounts:signInWithPassword",Dt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
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
 */
return async function(e,t){return jt(e,"POST","/v1/accounts:signInWithEmailLink",Dt(e,t))}(e,{email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Cn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return jt(e,"POST","/v1/accounts:signInWithEmailLink",Dt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
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
 */async function In(e,t){return jt(e,"POST","/v1/accounts:signInWithIdp",Dt(e,t))}
/**
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
 */class Sn extends En{static _fromParams(e){const t=new Sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=ht(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Sn(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return In(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,In(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,In(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ie(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
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
 */const kn={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class xn extends En{static _fromVerification(e,t){return new xn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new xn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return jt(e,"POST","/v1/accounts:signInWithPhoneNumber",Dt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await jt(e,"POST","/v1/accounts:signInWithPhoneNumber",Dt(e,t));if(n.temporaryProof)throw Bt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return jt(e,"POST","/v1/accounts:signInWithPhoneNumber",Dt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),kn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new xn({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
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
 */class Nn{static parseLink(e){const t=function(e){const t=se(oe(e)).link,n=t?se(oe(t)).deep_link_id:null,r=se(oe(e)).deep_link_id;return(r?se(oe(r)).link:null)||r||n||t||e}(e);try{return new Nn(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=se(oe(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);wt(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
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
 */
class An{static credential(e,t){return Tn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Nn.parseLink(t);return wt(n,"argument-error"),Tn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=An.PROVIDER_ID}}An.PROVIDER_ID="password",An.EMAIL_PASSWORD_SIGN_IN_METHOD="password",An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Rn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
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
 */class Pn extends Rn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
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
 */
class Ln extends Pn{static credential(e){return Sn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ln.PROVIDER_ID="facebook.com";
/**
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
 */
class On extends Pn{static credential(e,t){return Sn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return On.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}On.GOOGLE_SIGN_IN_METHOD="google.com",On.PROVIDER_ID="google.com";
/**
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
 */
class Dn extends Pn{static credential(e){return Sn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Dn.GITHUB_SIGN_IN_METHOD="github.com",Dn.PROVIDER_ID="github.com";
/**
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
 */
class Mn extends Pn{static credential(e,t){return Sn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Mn.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
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
 */
async function Fn(e,t){return jt(e,"POST","/v1/accounts:signUp",Dt(e,t))}
/**
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
 */Mn.TWITTER_SIGN_IN_METHOD="twitter.com",Mn.PROVIDER_ID="twitter.com";class jn{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Jt._fromIdTokenResponse(e,n,r),s=Un(n);return new jn({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Un(n);return new jn({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Un(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class qn extends ${static _fromErrorAndOperation(e,t,n,r){return new qn(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,qn.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Bn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw qn._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */async function Hn(e,t,n=!1){const r=await zt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return jn._forOperation(e,"link",r)}
/**
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
 */
async function Wn(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await zt(e,Bn(r,i,t,e),n);wt(s.idToken,r,"internal-error");const o=$t(s.idToken);wt(o,r,"internal-error");const{sub:a}=o;return wt(e.uid===a,r,"user-mismatch"),jn._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&vt(r,"user-mismatch"),e}}
/**
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
 */async function $n(e,t,n=!1){const r="signIn",i=await Bn(e,r,t),s=await jn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function zn(e,t){return $n(vn(e),t)}async function Vn(e,t,n){const r=vn(e),i=await Fn(r,{returnSecureToken:!0,email:t,password:n}),s=await jn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Yn(e,t,n){return zn(pe(e),An.credential(t,n))}
/**
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
 */new WeakMap;
/**
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
 */
class Xn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
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
 */class Kn extends Xn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);dn()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=F();return sn(e)||hn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=fn(),this._shouldAllowMigration=!0}}Kn.type="LOCAL";const Gn=Kn;
/**
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
 */class Jn extends Xn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Jn.type="SESSION";const Qn=Jn;
/**
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
 */
/**
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
 */
class Zn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Zn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
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
 */
function er(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Zn.receivers=[];class tr{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=er("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
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
 */function nr(){return window}
/**
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
 */
function rr(){return void 0!==nr().WorkerGlobalScope&&"function"==typeof nr().importScripts}class ir{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function sr(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function or(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new ir(e).toPromise()}(),t(await or()))}))}))}async function ar(e,t,n){const r=sr(e,!0).put({fbase_key:t,value:n});return new ir(r).toPromise()}function lr(e,t){const n=sr(e,!0).delete(t);return new ir(n).toPromise()}class cr{async _openDb(){return this.db||(this.db=await or()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zn._getInstance(rr()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new tr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await or();return await ar(e,"__sak","1"),await lr(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ar(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=sr(e,!1).get(t),r=await new ir(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>lr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=sr(e,!1).getAll();return new ir(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}cr.type="LOCAL";const ur=cr;
/**
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
 */function hr(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
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
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=yt("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function dr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
dr("rcb"),new At(3e4,6e4);async function fr(e,t,n){var r;const i=await n.verify();try{let s;if(wt("string"==typeof i,e,"argument-error"),wt("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){wt("enroll"===t.type,e,"internal-error");const n=await
/**
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
 */
function(e,t){return Mt(e,"POST","/v2/accounts/mfaEnrollment:start",Dt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{wt("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;wt(n,e,"missing-multi-factor-info");const o=await function(e,t){return Mt(e,"POST","/v2/accounts/mfaSignIn:start",Dt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Mt(e,"POST","/v1/accounts:sendVerificationCode",Dt(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
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
 */
class pr{verifyPhoneNumber(e,t){return fr(this.auth,e,pe(t))}static credential(e,t){return xn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return pr.credentialFromTaggedObject(t)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?xn._fromTokenResponse(t,n):null}constructor(e){this.providerId=pr.PROVIDER_ID,this.auth=vn(e)}}
/**
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
 */
function gr(e,t){return t?It(t):(wt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */pr.PROVIDER_ID="phone",pr.PHONE_SIGN_IN_METHOD="phone";class mr extends En{_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,t){return In(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function vr(e){return $n(e.auth,new mr(e),e.bypassAuthState)}function yr(e){const{auth:t,user:n}=e;return wt(n,t,"internal-error"),Wn(n,new mr(e),e.bypassAuthState)}async function _r(e){const{auth:t,user:n}=e;return wt(n,t,"internal-error"),Hn(n,new mr(e),e.bypassAuthState)}
/**
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
 */class br{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vr;case"linkViaPopup":case"linkViaRedirect":return _r;case"reauthViaPopup":case"reauthViaRedirect":return yr;default:vt(this.auth,"internal-error")}}resolve(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
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
 */const wr=new At(2e3,1e4);class Er extends br{async executeNotNull(){const e=await this.execute();return wt(e,this.auth,"internal-error"),e}async onExecution(){Ct(1===this.filter.length,"Popup operations only handle one event");const e=er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(yt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,wr.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}}Er.currentPopupAction=null;
/**
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
 */
const Cr=new Map;class Tr extends br{async execute(){let e=Cr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=kr(t),r=Sr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Cr.set(this.auth._key(),e)}return this.bypassAuthState||Cr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Ir(e,t){Cr.set(e._key(),t)}function Sr(e){return It(e._redirectPersistence)}function kr(e){return en("pendingRedirect",e.config.apiKey,e.name)}
/**
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
 */async function xr(e,t,n=!1){const r=vn(e),i=gr(r,t),s=new Tr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Nr{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rr(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Rr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(yt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ar(e))}saveEventToCache(e){this.cachedEventUids.add(Ar(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Ar(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Rr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const Pr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lr=/^https?/;async function Or(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Mt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Dr(e))return}catch(e){}vt(e,"unauthorized-domain")}function Dr(e){const t=St(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Lr.test(n))return!1;if(Pr.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const Mr=new At(3e4,6e4);function Fr(){const e=nr().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let jr=null;function Ur(e){return jr=jr||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Fr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Fr(),n(yt(e,"network-request-failed"))},timeout:Mr.get()})}if(null===(i=null===(r=nr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=nr().gapi)||void 0===s?void 0:s.load)){const t=dr("iframefcb");return nr()[t]=()=>{gapi.load?o():n(yt(e,"network-request-failed"))},hr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw jr=null,e}))}(e),jr}
/**
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
 */const qr=new At(5e3,15e3),Br={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wr(e){const t=e.config;wt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Rt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.17.2"},i=Hr.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ie(r).slice(1)}`}
/**
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
 */
const $r={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class zr{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Vr(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$r),{width:r.toString(),height:i.toString(),top:s,left:o}),c=F().toLowerCase();n&&(a=on(c)?"_blank":n),rn(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=F()){var t;return hn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",a),new zr(null);const h=window.open(t||"",a,u);wt(h,e,"popup-blocked");try{h.focus()}catch(e){}return new zr(h)}function Yr(e,t,n,r,i,s){wt(e.config.authDomain,e,"auth-domain-config-required"),wt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.17.2",eventId:i};if(t instanceof Rn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ee(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Pn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Rt(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
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
 */(e)}?${ie(a).slice(1)}`}const Xr=class{async _openPopup(e,t,n,r){var i;Ct(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Vr(e,Yr(e,t,n,St(),r),er())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Yr(e,t,n,St(),r),nr().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ct(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ur(e),n=nr().gapi;return wt(n,e,"internal-error"),t.open({where:document.body,url:Wr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Br,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=yt(e,"network-request-failed"),s=nr().setTimeout((()=>{r(i)}),qr.get());function o(){nr().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Nr(e);return t.register("authEvent",(t=>{wt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),vt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Or(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fn()||sn()||hn()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qn,this._completeRedirectFn=xr,this._overrideRedirectResult=Ir}};
/**
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
 */
class Kr{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){wt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
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
 */
/**
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
 */
const Gr=O("authIdTokenMaxAge")||300;let Jr=null;function Qr(e=et()){const t=Ge(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Ge(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ne(n.getOptions(),null!=t?t:{}))return e;vt(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Xr,persistence:[ur,Gn,Qn]}),r=O("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Gr)return;const r=null==t?void 0:t.token;Jr!==r&&(Jr=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){pe(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){pe(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=P("auth");return s&&_n(n,`http://${s}`),n}var Zr;Zr="Browser",Ke(new ge("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{wt(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),wt(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:Zr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pn(Zr)},o=new mn(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(It);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ke(new ge("auth-internal",(e=>{const t=vn(e.getProvider("auth").getImmediate());return new Kr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),tt("@firebase/auth","0.21.4",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Zr)),tt("@firebase/auth","0.21.4","esm2017");
/**
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
 */let ei="";
/**
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
 */
class ti{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),X(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Y(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
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
 */class ni{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Q(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
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
 */const ri=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new ti(t)}}catch(e){}return new ni},ii=ri("localStorage"),si=ri("sessionStorage"),oi=new Ie("@firebase/database"),ai=function(){let e=1;return function(){return e++}}(),li=function(e){const t=de(e),n=new ae;n.update(t);const r=n.digest();return C.encodeByteArray(r)},ci=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=ci.apply(null,r):t+="object"==typeof r?X(r):r,t+=" "}return t};let ui=null,hi=!0;const di=function(e,t){b(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(oi.logLevel=_e.VERBOSE,ui=oi.log.bind(oi),t&&si.set("logging_enabled",!0)):"function"==typeof e?ui=e:(ui=null,si.remove("logging_enabled"))},fi=function(...e){if(!0===hi&&(hi=!1,null===ui&&!0===si.get("logging_enabled")&&di(!0)),ui){const t=ci.apply(null,e);ui(t)}},pi=function(e){return function(...t){fi(e,...t)}},gi=function(...e){const t="FIREBASE INTERNAL ERROR: "+ci(...e);oi.error(t)},mi=function(...e){const t=`FIREBASE FATAL ERROR: ${ci(...e)}`;throw oi.error(t),new Error(t)},vi=function(...e){const t="FIREBASE WARNING: "+ci(...e);oi.warn(t)},yi=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},_i=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=ki(e),r=ki(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},bi=function(e,t){return e===t?0:e<t?-1:1},wi=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+X(t))},Ei=function(e){if("object"!=typeof e||null===e)return X(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=X(t[r]),n+=":",n+=Ei(e[t[r]]);return n+="}",n},Ci=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Ti(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ii=function(e){b(!yi(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Si=new RegExp("^-?(0*)\\d{1,10}$"),ki=function(e){if(Si.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},xi=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw vi("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ni=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
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
 */
class Ai{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){vi(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
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
 */class Ri{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(fi("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vi(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class Pi{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}Pi.OWNER="owner";
/**
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
 */
const Li=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
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
 */
class Oi{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ii.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,r,i=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ii.get("host:"+e)||this._host}}function Di(e,t,n){let r;if(b("string"==typeof t,"typeof type must == string"),b("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return Ti(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
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
 */class Mi{incrementCounter(e,t=1){Q(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return x(this.counters_)}constructor(){this.counters_={}}}
/**
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
 */const Fi={},ji={};function Ui(e){const t=e.toString();return Fi[t]||(Fi[t]=new Mi),Fi[t]}
/**
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
 */
class qi{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&xi((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
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
 */class Bi{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new qi(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(H()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hi(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Li.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bi.forceAllow_=!0}static forceDisallow(){Bi.forceDisallow_=!0}static isAvailable(){return!H()&&(!!Bi.forceAllow_||!(Bi.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=X(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=I(t),r=Ci(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(H())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=X(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pi(e),this.stats_=Ui(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Di(t,"long_polling",e))}}class Hi{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||fi("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){H()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{fi("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,H())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=ai(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Hi.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){fi("frame writing exception"),e.stack&&fi(e.stack),fi(e)}}}}
/**
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
 */let Wi=null;"undefined"!=typeof MozWebSocket?Wi=MozWebSocket:"undefined"!=typeof WebSocket&&(Wi=WebSocket);class $i{static connectionURL_(e,t,n,r,i){const s={v:"5"};return!H()&&"undefined"!=typeof location&&location.hostname&&Li.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s.ac=r),i&&(s.p=i),Di(e,"websocket",s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ii.set("previous_websocket_failure",!0);try{let e;if(H()){const n=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${ei}/${t.platform}/${n}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r={},i=0===this.connURL.indexOf("wss://")?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new Wi(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){$i.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Wi&&!$i.forceDisallow_}static previouslyFailed(){return ii.isInMemoryStorage||!0===ii.get("previous_websocket_failure")}markConnectionHealthy(){ii.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Y(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=X(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ci(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pi(this.connId),this.stats_=Ui(t),this.connURL=$i.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}}$i.responsesRequiredToBeHealthy=2,$i.healthyTimeout=3e4;
/**
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
 */
class zi{static get ALL_TRANSPORTS(){return[Bi,$i]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=$i&&$i.isAvailable();let n=t&&!$i.previouslyFailed();if(e.webSocketOnly&&(t||vi("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[$i];else{const e=this.transports_=[];for(const t of zi.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);zi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}zi.globalTransportInitialized_=!1;class Vi{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ni((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=wi("t",e),n=wi("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=wi("t",e),n=wi("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=wi("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?gi("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&vi("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ni((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ni((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ii.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pi("c:"+this.id+":"),this.transportManager_=new zi(t),this.log_("Connection created"),this.start_()}}
/**
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
 */class Yi{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class Xi{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){b(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
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
 */class Ki extends Xi{static getInstance(){return new Ki}getInitialEvent(e){return b("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||j()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
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
 */class Gi{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Ji(){return new Gi("")}function Qi(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Zi(e){return e.pieces_.length-e.pieceNum_}function es(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Gi(e.pieces_,t)}function ts(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ns(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function rs(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Gi(t,0)}function is(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Gi)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Gi(n,0)}function ss(e){return e.pieceNum_>=e.pieces_.length}function os(e,t){const n=Qi(e),r=Qi(t);if(null===n)return t;if(n===r)return os(es(e),es(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function as(e,t){if(Zi(e)!==Zi(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function ls(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Zi(e)>Zi(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class cs{constructor(e,t){this.errorPrefix_=t,this.parts_=ns(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=fe(this.parts_[e]);us(this)}}function us(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+hs(e))}function hs(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class ds extends Xi{static getInstance(){return new ds}getInitialEvent(e){return b("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
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
 */class fs extends Yi{sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(X(i)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new D,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;fs.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Q(e,"w")){const n=Z(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();vi(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||J(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=G(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+X(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):gi("Unrecognized action received from server: "+X(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+fs.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){b(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?fi("getToken() completed but was canceled"):(fi("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new Vi(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{vi(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&vi(e),a())}}}interrupt(e){fi("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){fi("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ee(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ei(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Gi(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){fi("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){fi("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";H()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ei.replace(/\./g,"-")]=1,j()?e["framework.cordova"]=1:q()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ki.getInstance().currentlyOnline();return ee(this.interruptReasons_)&&e}constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=fs.nextPersistentConnectionId_++,this.log_=pi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!H())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ds.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Ki.getInstance().on("online",this.onOnline_,this)}}fs.nextPersistentConnectionId_=0,fs.nextConnectionId_=0;
/**
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
 */
class ps{static Wrap(e,t){return new ps(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
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
 */class gs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new ps("[MIN_NAME]",e),r=new ps("[MIN_NAME]",t);return 0!==this.compare(n,r)}minPost(){return ps.MIN}}
/**
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
 */let ms;class vs extends gs{static get __EMPTY_NODE(){return ms}static set __EMPTY_NODE(e){ms=e}compare(e,t){return _i(e.name,t.name)}isDefinedOn(e){throw w("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ps.MIN}maxPost(){return new ps("[MAX_NAME]",ms)}makePost(e,t){return b("string"==typeof e,"KeyIndex indexValue must always be a string."),new ps(e,ms)}toString(){return".key"}}const ys=new vs;
/**
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
 */class _s{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class bs{copy(e,t,n,r,i){return new bs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ws.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ws.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,bs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,bs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:bs.RED,this.left=null!=r?r:ws.EMPTY_NODE,this.right=null!=i?i:ws.EMPTY_NODE}}bs.RED=!0,bs.BLACK=!1;class ws{insert(e,t){return new ws(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,bs.BLACK,null,null))}remove(e){return new ws(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,bs.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _s(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new _s(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new _s(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new _s(this.root_,null,this.comparator_,!0,e)}constructor(e,t=ws.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
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
 */
function Es(e,t){return _i(e.name,t.name)}function Cs(e,t){return _i(e,t)}
/**
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
 */let Ts;ws.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new bs(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Is=function(e){return"number"==typeof e?"number:"+Ii(e):"string:"+e},Ss=function(e){if(e.isLeafNode()){const t=e.val();b("string"==typeof t||"number"==typeof t||"object"==typeof t&&Q(t,".sv"),"Priority must be a string or number.")}else b(e===Ts||e.isEmpty(),"priority of unexpected type.");b(e===Ts||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let ks,xs,Ns;class As{static set __childrenNodeConstructor(e){ks=e}static get __childrenNodeConstructor(){return ks}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new As(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:As.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ss(e)?this:".priority"===Qi(e)?this.priorityNode_:As.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:As.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Qi(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(b(".priority"!==n||1===Zi(e),".priority must be the last token in a path"),this.updateImmediateChild(n,As.__childrenNodeConstructor.EMPTY_NODE.updateChild(es(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Is(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ii(this.value_):this.value_,this.lazyHash_=li(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===As.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof As.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=As.VALUE_TYPE_ORDER.indexOf(t),i=As.VALUE_TYPE_ORDER.indexOf(n);return b(r>=0,"Unknown leaf type: "+t),b(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=As.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,b(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ss(this.priorityNode_)}}As.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Rs=new class extends gs{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?_i(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ps.MIN}maxPost(){return new ps("[MAX_NAME]",new As("[PRIORITY-POST]",Ns))}makePost(e,t){const n=xs(e);return new ps(t,new As("[PRIORITY-POST]",n))}toString(){return".priority"}},Ps=Math.log(2);
/**
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
 */class Ls{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ps,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}}const Os=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new bs(a,o.node,bs.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new bs(a,o.node,bs.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],h=n?n(u):u;l(new bs(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,bs.BLACK):(a(r,bs.BLACK),a(r,bs.RED))}return s}(new Ls(e.length));return new ws(r||t,s)};
/**
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
 */let Ds;const Ms={};class Fs{static get Default(){return b(Ms&&Rs,"ChildrenNode.ts has not been loaded"),Ds=Ds||new Fs({".priority":Ms},{".priority":Rs}),Ds}get(e){const t=Z(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ws?t:null}hasIndex(e){return Q(this.indexSet_,e.toString())}addIndex(e,t){b(e!==ys,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(ps.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?Os(n,e.getCompare()):Ms;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new Fs(c,l)}addToIndexes(e,t){const n=te(this.indexes_,((n,r)=>{const i=Z(this.indexSet_,r);if(b(i,"Missing index implementation for "+r),n===Ms){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(ps.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),Os(n,i.getCompare())}return Ms}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new ps(e.name,r))),i.insert(e,e.node)}}));return new Fs(n,this.indexSet_)}removeFromIndexes(e,t){const n=te(this.indexes_,(n=>{if(n===Ms)return n;{const r=t.get(e.name);return r?n.remove(new ps(e.name,r)):n}}));return new Fs(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
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
 */let js;class Us{static get EMPTY_NODE(){return js||(js=new Us(new ws(Cs),null,Fs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||js}updatePriority(e){return this.children_.isEmpty()?this:new Us(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?js:t}}getChild(e){const t=Qi(e);return null===t?this:this.getImmediateChild(t).getChild(es(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(b(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new ps(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?js:this.priorityNode_;return new Us(r,s,i)}}updateChild(e,t){const n=Qi(e);if(null===n)return t;{b(".priority"!==Qi(e)||1===Zi(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(es(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Rs,((s,o)=>{t[s]=o.val(e),n++,i&&Us.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Is(this.getPriority().val())+":"),this.forEachChild(Rs,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":li(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new ps(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ps(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ps(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,ps.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,ps.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qs?-1:0}withIndex(e){if(e===ys||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Us(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ys||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Rs),n=t.getIterator(Rs);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===ys?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ss(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Us.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const qs=new class extends Us{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Us.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new ws(Cs),Us.EMPTY_NODE,Fs.Default)}};Object.defineProperties(ps,{MIN:{value:new ps("[MIN_NAME]",Us.EMPTY_NODE)},MAX:{value:new ps("[MAX_NAME]",qs)}}),vs.__EMPTY_NODE=Us.EMPTY_NODE,As.__childrenNodeConstructor=Us,Ts=qs,function(e){Ns=e}(qs);function Bs(e,t=null){if(null===e)return Us.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),b(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new As(e,Bs(t))}if(e instanceof Array){let n=Us.EMPTY_NODE;return Ti(e,((t,r)=>{if(Q(e,t)&&"."!==t.substring(0,1)){const e=Bs(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Bs(t))}{const n=[];let r=!1;if(Ti(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Bs(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new ps(e,i)))}})),0===n.length)return Us.EMPTY_NODE;const i=Os(n,Es,(e=>e.name),Cs);if(r){const e=Os(n,Rs.getCompare());return new Us(i,Bs(t),new Fs({".priority":e},{".priority":Rs}))}return new Us(i,Bs(t),Fs.Default)}}!function(e){xs=e}(Bs);
/**
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
 */
class Hs extends gs{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?_i(e.name,t.name):i}makePost(e,t){const n=Bs(e),r=Us.EMPTY_NODE.updateChild(this.indexPath_,n);return new ps(t,r)}maxPost(){const e=Us.EMPTY_NODE.updateChild(this.indexPath_,qs);return new ps("[MAX_NAME]",e)}toString(){return ns(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,b(!ss(e)&&".priority"!==Qi(e),"Can't create PathIndex with empty path or .priority key")}}
/**
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
 */const Ws=new class extends gs{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?_i(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ps.MIN}maxPost(){return ps.MAX}makePost(e,t){const n=Bs(e);return new ps(t,n)}toString(){return".value"}};
/**
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
 */function $s(e){return{type:"value",snapshotNode:e}}function zs(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Vs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ys(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
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
 */
class Xs{updateChild(e,t,n,r,i,s){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Vs(t,o)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(zs(t,n)):s.trackChildChange(Ys(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Rs,((e,r)=>{t.hasChild(e)||n.trackChildChange(Vs(e,r))})),t.isLeafNode()||t.forEachChild(Rs,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Ys(t,r,i))}else n.trackChildChange(zs(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Us.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
/**
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
 */class Ks{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,s){return this.matches(new ps(t,n))||(n=Us.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Us.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Us.EMPTY_NODE);const i=this;return t.forEachChild(Rs,((e,t)=>{i.matches(new ps(e,t))||(r=r.updateImmediateChild(e,Us.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new Xs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ks.getStartPost_(e),this.endPost_=Ks.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
/**
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
 */class Gs{updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new ps(t,n))||(n=Us.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Us.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=Us.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(Us.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,Us.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;b(o.numChildren()===this.limit_,"");const a=new ps(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(Ys(t,n,e)),o.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Vs(t,e));const n=o.updateImmediateChild(t,Us.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(zs(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=i&&(i.trackChildChange(Vs(l.name,l.node)),i.trackChildChange(zs(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,Us.EMPTY_NODE)):e}constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Ks(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
/**
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
 */class Js{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Rs}copy(){const e=new Js;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Rs}}function Qs(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Rs?n="$priority":e.index_===Ws?n="$value":e.index_===ys?n="$key":(b(e.index_ instanceof Hs,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=X(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=X(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+X(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=X(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+X(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Zs(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Rs&&(t.i=e.index_.toString()),t}
/**
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
 */class eo extends Yi{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=eo.getListenId_(e,n),o={};this.listens_[s]=o;const a=Qs(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),Z(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=eo.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Qs(e._queryParams),n=e._path.toString(),r=new D;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ie(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Y(o.responseText)}catch(e){vi("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&vi("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=pi("p:rest:"),this.listens_={}}}
/**
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
 */class to{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Us.EMPTY_NODE}}
/**
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
 */function no(){return{value:null,children:new Map}}function ro(e,t,n){if(ss(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=Qi(t);e.children.has(r)||e.children.set(r,no());ro(e.children.get(r),t=es(t),n)}}function io(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
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
 */(e,((e,r)=>{io(r,new Gi(t.toString()+"/"+e),n)}))}class so{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ti(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
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
 */class oo{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ti(e,((e,r)=>{r>0&&Q(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Ni(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new so(e);const n=1e4+2e4*Math.random();Ni(this.reportStats_.bind(this),Math.floor(n))}}
/**
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
 */var ao,lo;function co(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(lo=ao||(ao={}))[lo.OVERWRITE=0]="OVERWRITE",lo[lo.MERGE=1]="MERGE",lo[lo.ACK_USER_WRITE=2]="ACK_USER_WRITE",lo[lo.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class uo{operationForChild(e){if(ss(this.path)){if(null!=this.affectedTree.value)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Gi(e));return new uo(Ji(),t,this.revert)}}return b(Qi(this.path)===e,"operationForChild called for unrelated child."),new uo(es(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=ao.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
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
 */class ho{operationForChild(e){return ss(this.path)?new ho(this.source,Ji()):new ho(this.source,es(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=ao.LISTEN_COMPLETE}}
/**
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
 */class fo{operationForChild(e){return ss(this.path)?new fo(this.source,Ji(),this.snap.getImmediateChild(e)):new fo(this.source,es(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=ao.OVERWRITE}}
/**
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
 */class po{operationForChild(e){if(ss(this.path)){const t=this.children.subtree(new Gi(e));return t.isEmpty()?null:t.value?new fo(this.source,Ji(),t.value):new po(this.source,Ji(),t)}return b(Qi(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new po(this.source,es(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=ao.MERGE}}
/**
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
 */class go{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ss(e))return this.isFullyInitialized()&&!this.filtered_;const t=Qi(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
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
 */class mo{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vo(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw w("Should only compare child_ events.");const r=new ps(t.childName,t.snapshotNode),i=new ps(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
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
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function yo(e,t){return{eventCache:e,serverCache:t}}function _o(e,t,n,r){return yo(new go(t,n,r),e.serverCache)}function bo(e,t,n,r){return yo(e.eventCache,new go(t,n,r))}function wo(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Eo(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let Co;class To{static fromObject(e){let t=new To(null);return Ti(e,((e,n)=>{t=t.set(new Gi(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Ji(),value:this.value};if(ss(e))return null;{const n=Qi(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(es(e),t);if(null!=i){return{path:is(new Gi(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ss(e))return this;{const t=Qi(e),n=this.children.get(t);return null!==n?n.subtree(es(e)):new To(null)}}set(e,t){if(ss(e))return new To(t,this.children);{const n=Qi(e),r=(this.children.get(n)||new To(null)).set(es(e),t),i=this.children.insert(n,r);return new To(this.value,i)}}remove(e){if(ss(e))return this.children.isEmpty()?new To(null):new To(null,this.children);{const t=Qi(e),n=this.children.get(t);if(n){const r=n.remove(es(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new To(null):new To(this.value,i)}return this}}get(e){if(ss(e))return this.value;{const t=Qi(e),n=this.children.get(t);return n?n.get(es(e)):null}}setTree(e,t){if(ss(e))return t;{const n=Qi(e),r=(this.children.get(n)||new To(null)).setTree(es(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new To(this.value,i)}}fold(e){return this.fold_(Ji(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(is(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Ji(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(ss(e))return null;{const r=Qi(e),i=this.children.get(r);return i?i.findOnPath_(es(e),is(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ji(),t)}foreachOnPath_(e,t,n){if(ss(e))return this;{this.value&&n(t,this.value);const r=Qi(e),i=this.children.get(r);return i?i.foreachOnPath_(es(e),is(t,r),n):new To(null)}}foreach(e){this.foreach_(Ji(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(is(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Co||(Co=new ws(bi)),Co))()){this.value=e,this.children=t}}
/**
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
 */class Io{static empty(){return new Io(new To(null))}constructor(e){this.writeTree_=e}}function So(e,t,n){if(ss(t))return new Io(new To(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=os(i,t);return s=s.updateChild(o,n),new Io(e.writeTree_.set(i,s))}{const r=new To(n),i=e.writeTree_.setTree(t,r);return new Io(i)}}}function ko(e,t,n){let r=e;return Ti(n,((e,n)=>{r=So(r,is(t,e),n)})),r}function xo(e,t){if(ss(t))return Io.empty();{const n=e.writeTree_.setTree(t,new To(null));return new Io(n)}}function No(e,t){return null!=Ao(e,t)}function Ao(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(os(n.path,t)):null}function Ro(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Rs,((e,n)=>{t.push(new ps(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new ps(e,n.value))})),t}function Po(e,t){if(ss(t))return e;{const n=Ao(e,t);return new Io(null!=n?new To(n):e.writeTree_.subtree(t))}}function Lo(e){return e.writeTree_.isEmpty()}function Oo(e,t){return Do(Ji(),e.writeTree_,t)}function Do(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(b(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Do(is(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(is(e,".priority"),r)),n}}
/**
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
 */function Mo(e,t){return Ko(t,e)}function Fo(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));b(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&jo(t,r.path)?i=!1:ls(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=qo(e.allWrites,Uo,Ji()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=xo(e.visibleWrites,r.path);else{Ti(r.children,(t=>{e.visibleWrites=xo(e.visibleWrites,is(r.path,t))}))}return!0}return!1}function jo(e,t){if(e.snap)return ls(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&ls(is(e.path,n),t))return!0;return!1}function Uo(e){return e.visible}function qo(e,t,n){let r=Io.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)ls(n,e)?(t=os(n,e),r=So(r,t,s.snap)):ls(e,n)&&(t=os(e,n),r=So(r,Ji(),s.snap.getChild(t)));else{if(!s.children)throw w("WriteRecord should have .snap or .children");if(ls(n,e))t=os(n,e),r=ko(r,t,s.children);else if(ls(e,n))if(t=os(e,n),ss(t))r=ko(r,Ji(),s.children);else{const e=Z(s.children,Qi(t));if(e){const n=e.getChild(es(t));r=So(r,Ji(),n)}}}}}return r}function Bo(e,t,n,r,i){if(r||i){const s=Po(e.visibleWrites,t);if(!i&&Lo(s))return n;if(i||null!=n||No(s,Ji())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(ls(e.path,t)||ls(t,e.path))};return Oo(qo(e.allWrites,s,t),n||Us.EMPTY_NODE)}return null}{const r=Ao(e.visibleWrites,t);if(null!=r)return r;{const r=Po(e.visibleWrites,t);if(Lo(r))return n;if(null!=n||No(r,Ji())){return Oo(r,n||Us.EMPTY_NODE)}return null}}}function Ho(e,t,n,r){return Bo(e.writeTree,e.treePath,t,n,r)}function Wo(e,t){return function(e,t,n){let r=Us.EMPTY_NODE;const i=Ao(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Rs,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Po(e.visibleWrites,t);return n.forEachChild(Rs,((e,t)=>{const n=Oo(Po(i,new Gi(e)),t);r=r.updateImmediateChild(e,n)})),Ro(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Ro(Po(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function $o(e,t,n,r){return function(e,t,n,r,i){b(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=is(t,n);if(No(e.visibleWrites,s))return null;{const t=Po(e.visibleWrites,s);return Lo(t)?i.getChild(n):Oo(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function zo(e,t){return function(e,t){return Ao(e.visibleWrites,t)}(e.writeTree,is(e.treePath,t))}function Vo(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=Po(e.visibleWrites,t),c=Ao(l,Ji());if(null!=c)a=c;else{if(null==n)return[];a=Oo(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Yo(e,t,n){return function(e,t,n,r){const i=is(t,n),s=Ao(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return Oo(Po(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Xo(e,t){return Ko(is(e.treePath,t),e.writeTree)}function Ko(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class Go{trackChildChange(e){const t=e.type,n=e.childName;b("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),b(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Ys(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Vs(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,zs(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw w("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Ys(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
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
 */const Jo=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Qo{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new go(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yo(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Eo(this.viewCache_),i=Vo(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
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
 */function Zo(e,t,n,r,i){const s=new Go;let o,a;if(n.type===ao.OVERWRITE){const l=n;l.source.fromUser?o=na(e,t,l.path,l.snap,r,i,s):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!ss(l.path),o=ta(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===ao.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=is(n,r);ra(t,Qi(c))&&(a=na(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=is(n,r);ra(t,Qi(c))||(a=na(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=sa(e,t,l.path,l.children,r,i,a,s))}else if(n.type===ao.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=zo(r,n))return t;{const a=new Qo(r,t,i),l=t.eventCache.getNode();let c;if(ss(n)||".priority"===Qi(n)){let n;if(t.serverCache.isFullyInitialized())n=Ho(r,Eo(t));else{const e=t.serverCache.getNode();b(e instanceof Us,"serverChildren would be complete if leaf node"),n=Wo(r,e)}c=e.filter.updateFullNode(l,n,s)}else{const i=Qi(n);let u=Yo(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,es(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,Us.EMPTY_NODE,es(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Ho(r,Eo(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=zo(r,Ji()),_o(t,c,o,e.filter.filtersNodes())}}
/**
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
 */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=zo(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(ss(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ta(e,t,n,l.getNode().getChild(n),i,s,a,o);if(ss(n)){let r=new To(null);return l.getNode().forEachChild(ys,((e,t)=>{r=r.set(new Gi(e),t)})),sa(e,t,n,r,i,s,a,o)}return t}{let c=new To(null);return r.foreach(((e,t)=>{const r=is(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),sa(e,t,n,c,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==ao.LISTEN_COMPLETE)throw w("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=bo(t,s.getNode(),s.isFullyInitialized()||ss(n),s.isFiltered());return ea(e,o,n,r,Jo,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=wo(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push($s(wo(t)))}}(t,o,l),{viewCache:o,changes:l}}function ea(e,t,n,r,i,s){const o=t.eventCache;if(null!=zo(r,n))return t;{let a,l;if(ss(n))if(b(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Eo(t),i=Wo(r,n instanceof Us?n:Us.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=Ho(r,Eo(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Qi(n);if(".priority"===c){b(1===Zi(n),"Can't have a priority with additional path components");const i=o.getNode();l=t.serverCache.getNode();const s=$o(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=es(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=$o(r,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=Yo(r,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,i,s):o.getNode()}}return _o(t,a,o.isFullyInitialized()||ss(n),e.filter.filtersNodes())}}function ta(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(ss(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Qi(n);if(!l.isCompleteForPath(n)&&Zi(n)>1)return t;const i=es(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,Jo,null)}const h=bo(t,c,l.isFullyInitialized()||ss(n),u.filtersNodes());return ea(e,h,n,i,new Qo(i,h,s),a)}function na(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new Qo(i,t,s);if(ss(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=_o(t,c,!0,e.filter.filtersNodes());else{const i=Qi(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=_o(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=es(n),c=a.getNode().getImmediateChild(i);let h;if(ss(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===ts(s)&&e.getChild(rs(s)).isEmpty()?e:e.updateChild(s,r):Us.EMPTY_NODE}if(c.equals(h))l=t;else{l=_o(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function ra(e,t){return e.eventCache.isCompleteForChild(t)}function ia(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function sa(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=ss(n)?r:new To(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=ia(0,t.serverCache.getNode().getImmediateChild(n),r);c=ta(e,c,new Gi(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!l){const l=ia(0,t.serverCache.getNode().getImmediateChild(n),r);c=ta(e,c,new Gi(n),l,i,s,o,a)}})),c}class oa{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Xs(n.getIndex()),i=(s=n).loadsAllData()?new Xs(s.getIndex()):s.hasLimit()?new Gs(s):new Ks(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(Us.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(Us.EMPTY_NODE,a.getNode(),null),u=new go(l,o.isFullyInitialized(),r.filtersNodes()),h=new go(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=yo(h,u),this.eventGenerator_=new mo(this.query_)}}function aa(e,t){const n=Eo(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ss(t)&&!n.getImmediateChild(Qi(t)).isEmpty())?n.getChild(t):null}function la(e){return 0===e.eventRegistrations_.length}function ca(e,t,n){const r=[];if(n){b(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function ua(e,t,n,r){t.type===ao.MERGE&&null!==t.source.queryId&&(b(Eo(e.viewCache_),"We should always have a full cache before handling merges"),b(wo(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=Zo(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,b(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),b(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),b(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,ha(e,s.changes,s.viewCache.eventCache.getNode(),null)}function ha(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),vo(e,i,"child_removed",t,r,n),vo(e,i,"child_added",t,r,n),vo(e,i,"child_moved",s,r,n),vo(e,i,"child_changed",t,r,n),vo(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
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
 */let da,fa;class pa{constructor(){this.views=new Map}}function ga(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return b(null!=s,"SyncTree gave us an op for an invalid query."),ua(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(ua(s,t,n,r));return i}}function ma(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Ho(n,i?r:null),s=!1;e?s=!0:r instanceof Us?(e=Wo(n,r),s=!1):(e=Us.EMPTY_NODE,s=!1);const o=yo(new go(e,s,!1),new go(r,i,!1));return new oa(t,o)}return o}function va(e,t,n,r,i,s){const o=ma(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Rs,((e,t)=>{r.push(zs(e,t))}));return n.isFullyInitialized()&&r.push($s(n.getNode())),ha(e,r,n.getNode(),t)}(o,n)}function ya(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=Ca(e);if("default"===i)for(const[t,i]of e.views.entries())o=o.concat(ca(i,n,r)),la(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{const t=e.views.get(i);t&&(o=o.concat(ca(t,n,r)),la(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Ca(e)&&s.push(new(b(da,"Reference.ts has not been loaded"),da)(t._repo,t._path)),{removed:s,events:o}}function _a(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ba(e,t){let n=null;for(const r of e.views.values())n=n||aa(r,t);return n}function wa(e,t){if(t._queryParams.loadsAllData())return Ta(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ea(e,t){return null!=wa(e,t)}function Ca(e){return null!=Ta(e)}function Ta(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
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
 */let Ia=1;class Sa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new To(null),this.pendingWriteTree_={visibleWrites:Io.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ka(e,t,n,r,i){return function(e,t,n,r,i){b(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=So(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Oa(e,new fo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function xa(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(Fo(e.pendingWriteTree_,t)){let t=new To(null);return null!=r.snap?t=t.set(Ji(),!0):Ti(r.children,(e=>{t=t.set(new Gi(e),!0)})),Oa(e,new uo(r.path,t,n))}return[]}function Na(e,t,n){return Oa(e,new fo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Aa(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Ea(o,t))){const l=ya(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(s,((e,t)=>Ca(t)));if(n&&!i){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Ca(t)){return[Ta(t)]}{let e=[];return t&&(e=_a(t)),Ti(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=Fa(e,r);e.listenProvider_.startListening(Wa(i),ja(e,i),s.hashFn,s.onComplete)}}}if(!i&&c.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(Wa(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(Ua(t));e.listenProvider_.stopListening(Wa(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=Ua(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Ra(e,t,n,r){const i=qa(e,r);if(null!=i){const r=Ba(i),s=r.path,o=r.queryId,a=os(s,t);return Ha(e,s,new fo(co(o),a,n))}return[]}function Pa(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=os(e,i);s=s||ba(t,n),o=o||Ca(t)}));let a,l=e.syncPointTree_.get(i);if(l?(o=o||Ca(l),s=s||ba(l,Ji())):(l=new pa,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=s)a=!0;else{a=!1,s=Us.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=ba(t,Ji());n&&(s=s.updateImmediateChild(e,n))}))}const c=Ea(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=Ua(t);b(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Ia++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let u=va(l,t,n,Mo(e.pendingWriteTree_,i),s,a);if(!c&&!o&&!r){const n=wa(l,t);u=u.concat(function(e,t,n){const r=t._path,i=ja(e,t),s=Fa(e,n),o=e.listenProvider_.startListening(Wa(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)b(!Ca(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!ss(e)&&t&&Ca(t))return[Ta(t).query];{let e=[];return t&&(e=e.concat(_a(t).map((e=>e.query)))),Ti(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Wa(r),ja(e,r))}}return o}
/**
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
 */(e,t,n))}return u}function La(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=ba(n,os(e,t));if(r)return r}));return Bo(r,t,i,n,!0)}function Oa(e,t){return Da(t,e.syncPointTree_,null,Mo(e.pendingWriteTree_,Ji()))}function Da(e,t,n,r){if(ss(e.path))return Ma(e,t,n,r);{const i=t.get(Ji());null==n&&null!=i&&(n=ba(i,Ji()));let s=[];const o=Qi(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Xo(r,o);s=s.concat(Da(a,l,e,t))}return i&&(s=s.concat(ga(i,e,r,n))),s}}function Ma(e,t,n,r){const i=t.get(Ji());null==n&&null!=i&&(n=ba(i,Ji()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Xo(r,t),l=e.operationForChild(t);l&&(s=s.concat(Ma(l,i,o,a)))})),i&&(s=s.concat(ga(i,e,r,n))),s}function Fa(e,t){const n=t.query,r=ja(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Us.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=qa(e,n);if(r){const n=Ba(r),i=n.path,s=n.queryId,o=os(i,t);return Ha(e,i,new ho(co(s),o))}return[]}(e,n._path,r):function(e,t){return Oa(e,new ho({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Aa(e,n,null,r)}}}}function ja(e,t){const n=Ua(t);return e.queryToTagMap.get(n)}function Ua(e){return e._path.toString()+"$"+e._queryIdentifier}function qa(e,t){return e.tagToQueryMap.get(t)}function Ba(e){const t=e.indexOf("$");return b(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Gi(e.substr(0,t))}}function Ha(e,t,n){const r=e.syncPointTree_.get(t);b(r,"Missing sync point for query tag that we're tracking");return ga(r,n,Mo(e.pendingWriteTree_,t),null)}function Wa(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(b(fa,"Reference.ts has not been loaded"),fa)(e._repo,e._path):e}class $a{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new $a(t)}node(){return this.node_}constructor(e){this.node_=e}}class za{getImmediateChild(e){const t=is(this.path_,e);return new za(this.syncTree_,t)}node(){return La(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Va=function(e,t,n){return e&&"object"==typeof e?(b(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ya(e[".sv"],t,n):"object"==typeof e[".sv"]?Xa(e[".sv"],t):void b(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ya=function(e,t,n){if("timestamp"===e)return n.timestamp;b(!1,"Unexpected server value: "+e)},Xa=function(e,t,n){e.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&b(!1,"Unexpected increment value: "+r);const i=t.node();if(b(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},Ka=function(e,t,n,r){return Ja(t,new za(n,e),r)},Ga=function(e,t,n){return Ja(e,new $a(t),n)};function Ja(e,t,n){const r=e.getPriority().val(),i=Va(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Va(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new As(s,Bs(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new As(i))),r.forEachChild(Rs,((e,r)=>{const i=Ja(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
/**
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
 */class Qa{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Za(e,t){let n=t instanceof Gi?t:new Gi(t),r=e,i=Qi(n);for(;null!==i;){const e=Z(r.node.children,i)||{children:{},childCount:0};r=new Qa(i,r,e),n=es(n),i=Qi(n)}return r}function el(e){return e.node.value}function tl(e,t){e.node.value=t,ol(e)}function nl(e){return e.node.childCount>0}function rl(e,t){Ti(e.node.children,((n,r)=>{t(new Qa(n,e,r))}))}function il(e,t,n,r){n&&!r&&t(e),rl(e,(e=>{il(e,t,!0,r)})),n&&r&&t(e)}function sl(e){return new Gi(null===e.parent?e.name:sl(e.parent)+"/"+e.name)}function ol(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===el(e)&&!nl(e)}(n),i=Q(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,ol(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,ol(e))}
/**
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
 */(e.parent,e.name,e)}const al=/[\[\].#$\/\u0000-\u001F\u007F]/,ll=/[\[\].#$\u0000-\u001F\u007F]/,cl=function(e){return"string"==typeof e&&0!==e.length&&!al.test(e)},ul=function(e){return"string"==typeof e&&0!==e.length&&!ll.test(e)},hl=function(e,t,n,r){r&&void 0===t||dl(he(e,"value"),t,n)},dl=function(e,t,n){const r=n instanceof Gi?new cs(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+hs(r));if("function"==typeof t)throw new Error(e+"contains a function "+hs(r)+" with contents = "+t.toString());if(yi(t))throw new Error(e+"contains "+t.toString()+" "+hs(r));if("string"==typeof t&&t.length>10485760/3&&fe(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+hs(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(Ti(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!cl(t)))throw new Error(e+" contains an invalid key ("+t+") "+hs(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=fe(a),us(o),dl(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=fe(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+hs(r)+" in addition to actual children.")}},fl=function(e,t,n,r){if(!(r&&void 0===n||ul(n)))throw new Error(he(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},pl=function(e,t){if(".info"===Qi(t))throw new Error(e+" failed = Can't modify data under /.info/")},gl=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!cl(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ul(e)}(n))throw new Error(he(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class ml{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vl(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||as(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function yl(e,t,n){vl(e,n),bl(e,(e=>as(e,t)))}function _l(e,t,n){vl(e,n),bl(e,(e=>ls(e,t)||ls(t,e)))}function bl(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(wl(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function wl(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();ui&&fi("event: "+n.toString()),xi(r)}}}
/**
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
 */class El{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ml,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=no(),this.transactionQueueTree_=new Qa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Cl(e,t,n){if(e.stats_=Ui(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new eo(e.repoInfo_,((t,n,r,i)=>{Sl(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>kl(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{X(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new fs(e.repoInfo_,t,((t,n,r,i)=>{Sl(e,t,n,r,i)}),(t=>{kl(e,t)}),(t=>{!function(e,t){Ti(t,((t,n)=>{xl(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return ji[n]||(ji[n]=t()),ji[n]}(e.repoInfo_,(()=>new oo(e.stats_,e.server_))),e.infoData_=new to,e.infoSyncTree_=new Sa({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Na(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),xl(e,"connected",!1),e.serverSyncTree_=new Sa({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);_l(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Tl(e){const t=e.infoData_.getNode(new Gi(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Il(e){return(t=(t={timestamp:Tl(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Sl(e,t,n,r,i){e.dataUpdateCount++;const s=new Gi(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=te(n,(e=>Bs(e)));o=function(e,t,n,r){const i=qa(e,r);if(i){const r=Ba(i),s=r.path,o=r.queryId,a=os(s,t),l=To.fromObject(n);return Ha(e,s,new po(co(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=Bs(n);o=Ra(e.serverSyncTree_,s,t,i)}else if(r){const t=te(n,(e=>Bs(e)));o=function(e,t,n){const r=To.fromObject(n);return Oa(e,new po({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=Bs(n);o=Na(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Fl(e,s)),_l(e.eventQueue_,a,o)}function kl(e,t){xl(e,"connected",t),!1===t&&function(e){Ll(e,"onDisconnectEvents");const t=Il(e),n=no();io(e.onDisconnect_,Ji(),((r,i)=>{const s=Ka(r,i,e.serverSyncTree_,t);ro(n,r,s)}));let r=[];io(n,Ji(),((t,n)=>{r=r.concat(Na(e.serverSyncTree_,t,n));const i=Hl(e,t);Fl(e,i)})),e.onDisconnect_=no(),_l(e.eventQueue_,Ji(),r)}(e)}function xl(e,t,n){const r=new Gi("/.info/"+t),i=Bs(n);e.infoData_.updateSnapshot(r,i);const s=Na(e.infoSyncTree_,r,i);_l(e.eventQueue_,r,s)}function Nl(e){return e.nextWriteId_++}function Al(e,t,n,r,i){Ll(e,"set",{path:t.toString(),value:n,priority:r});const s=Il(e),o=Bs(n,r),a=La(e.serverSyncTree_,t),l=Ga(o,a,s),c=Nl(e),u=ka(e.serverSyncTree_,t,l,c,!0);vl(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||vi("set at "+t+" failed: "+n);const o=xa(e.serverSyncTree_,c,!s);_l(e.eventQueue_,t,o),Ol(e,i,n,r)}));const h=Hl(e,t);Fl(e,h),_l(e.eventQueue_,h,[])}function Rl(e,t,n){let r;r=".info"===Qi(t._path)?Aa(e.infoSyncTree_,t,n):Aa(e.serverSyncTree_,t,n),yl(e.eventQueue_,t._path,r)}function Pl(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Ll(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),fi(n,...t)}function Ol(e,t,n,r){t&&xi((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function Dl(e,t,n){return La(e.serverSyncTree_,t,n)||Us.EMPTY_NODE}function Ml(e,t=e.transactionQueueTree_){if(t||Bl(e,t),el(t)){const n=Ul(e,t);b(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Dl(e,t,r);let s=i;const o=i.hash();for(let e=0;e<n.length;e++){const r=n[e];b(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=os(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{Ll(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(xa(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Bl(e,Za(e.transactionQueueTree_,t)),Ml(e,e.transactionQueueTree_),_l(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)xi(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{vi("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Fl(e,t)}}),o)}(e,sl(t),n)}else nl(t)&&rl(t,(t=>{Ml(e,t)}))}function Fl(e,t){const n=jl(e,t),r=sl(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=os(n,l.path);let u,h=!1;if(b(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,i=i.concat(xa(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",i=i.concat(xa(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Dl(e,l.path,s);l.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){dl("transaction failed: Data returned ",r,l.path);let t=Bs(r);"object"==typeof r&&null!=r&&Q(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=Il(e),c=Ga(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Nl(e),s.splice(s.indexOf(o),1),i=i.concat(ka(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(xa(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",i=i.concat(xa(e.serverSyncTree_,l.currentWriteId,!0))}_l(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;Bl(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)xi(r[e]);Ml(e,e.transactionQueueTree_)}(e,Ul(e,n),r),r}function jl(e,t){let n,r=e.transactionQueueTree_;for(n=Qi(t);null!==n&&void 0===el(r);)r=Za(r,n),n=Qi(t=es(t));return r}function Ul(e,t){const n=[];return ql(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function ql(e,t,n){const r=el(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);rl(t,(t=>{ql(e,t,n)}))}function Bl(e,t){const n=el(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,tl(t,n.length>0?n:void 0)}rl(t,(t=>{Bl(e,t)}))}function Hl(e,t){const n=sl(jl(e,t)),r=Za(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Wl(e,t)})),Wl(e,r),il(r,(t=>{Wl(e,t)})),n}function Wl(e,t){const n=el(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(b(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(b(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(xa(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?tl(t,void 0):n.length=s+1,_l(e.eventQueue_,sl(t),i);for(let e=0;e<r.length;e++)xi(r[e])}}
/**
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
 */const $l=function(e,t){const n=zl(e),r=n.namespace;"firebase.com"===n.domain&&mi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||mi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&vi("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Oi(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Gi(n.pathString)}},zl=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):vi(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};!function(){let e=0;const t=[]}();
/**
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
 */
class Vl{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+X(this.snapshot.exportVal())}constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}}class Yl{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
/**
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
 */class Xl{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
/**
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
 */
/**
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
 */
class Kl{get key(){return ss(this._path)?null:ts(this._path)}get ref(){return new Gl(this._repo,this._path)}get _queryIdentifier(){const e=Zs(this._queryParams),t=Ei(e);return"{}"===t?"default":t}get _queryObject(){return Zs(this._queryParams)}isEqual(e){if(!((e=pe(e))instanceof Kl))return!1;const t=this._repo===e._repo,n=as(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}}class Gl extends Kl{get parent(){const e=rs(this._path);return null===e?null:new Gl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Js,!1)}}class Jl{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Gi(e),n=Zl(this.ref,e);return new Jl(this._node.getChild(t),n,Rs)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Jl(n,Zl(this.ref,t),Rs))))}hasChild(e){const t=new Gi(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function Ql(e,t){return(e=pe(e))._checkNotDeleted("ref"),void 0!==t?Zl(e._root,t):e._root}function Zl(e,t){var n,r,i,s;return null===Qi((e=pe(e))._path)?(n="child",r="path",s=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),fl(n,r,i,s)):fl("child","path",t,!1),new Gl(e._repo,is(e._path,t))}function ec(e,t){e=pe(e),pl("set",e._path),hl("set",t,e._path,!1);const n=new D;return Al(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class tc{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Vl("value",this,new Jl(e.snapshotNode,new Gl(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Yl(this,e,t):null}matches(e){return e instanceof tc&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}class nc{respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Yl(this,e,t):null}createEvent(e,t){b(null!=e.childName,"Child events should have a childName.");const n=Zl(new Gl(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Vl(e.type,this,new Jl(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof nc&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}constructor(e,t){this.eventType=e,this.callbackContext=t}}function rc(e,t,n,r,i){let s;if("object"==typeof r&&(s=void 0,i=r),"function"==typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Rl(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new Xl(n,s||void 0),a="value"===t?new tc(o):new nc(t,o);return function(e,t,n){let r;r=".info"===Qi(t._path)?Pa(e.infoSyncTree_,t,n):Pa(e.serverSyncTree_,t,n),yl(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>Rl(e._repo,e,a)}function ic(e,t,n,r){return rc(e,"value",t,n,r)}!function(e){b(!da,"__referenceConstructor has already been defined"),da=e}(Gl),function(e){b(!fa,"__referenceConstructor has already been defined"),fa=e}(Gl);
/**
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
 */
const sc={};let oc=!1;function ac(e,n,r,i,s){let o=i||e.options.databaseURL;void 0===o&&(e.options.projectId||mi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),fi("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let a,l,c=$l(o,s),u=c.repoInfo;void 0!==t&&t.env&&(l=t.env.FIREBASE_DATABASE_EMULATOR_HOST),l?(a=!0,o=`http://${l}?ns=${u.namespace}`,c=$l(o,s),u=c.repoInfo):a=!c.repoInfo.secure;const h=s&&a?new Pi(Pi.OWNER):new Ri(e.name,e.options,n);gl("Invalid Firebase Database URL",c),ss(c.path)||mi("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,r){let i=sc[t.name];i||(i={},sc[t.name]=i);let s=i[e.toURLString()];s&&mi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new El(e,oc,n,r),i[e.toURLString()]=s,s}(u,e,h,new Ai(e.name,r));return new lc(d,e)}class lc{get _repo(){return this._instanceStarted||(Cl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gl(this._repo,Ji())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=sc[t];n&&n[e.key]===e||mi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Pl(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&mi("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}function cc(e=et(),t){const n=Ge(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=L("database");e&&function(e,t,n,r={}){(e=pe(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&mi("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&mi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Pi(Pi.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:M(r.mockUserToken,e.app.options.projectId);s=new Pi(t)}!function(e,t,n,r){e.repoInfo_=new Oi(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}(i,t,n,s)}(n,...e)}return n}fs.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},fs.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
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
 */
function(e){ei="9.17.2",Ke(new ge("database",((e,{instanceIdentifier:t})=>ac(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),tt("@firebase/database","0.14.4",e),tt("@firebase/database","0.14.4","esm2017")}
/**
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
 */();var uc,hc={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,uc=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,r,i,s,o=Object.prototype.hasOwnProperty;for(i=1,s=arguments.length;i<s;i+=1)for(r in n=arguments[i])o.call(n,r)&&(e[r]=n[r]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var r=n(2),i=n(17),s=n(6);e.exports=function(e,t,n){r(e)?i(e,t,n):s(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var r;for(r in n=n||null,e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))break}},function(e,t,n){var r=n(18),i=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&r(n,e),t.hasOwnProperty("static")&&(i(n,t.static),delete t.static),i(n.prototype,t),n}},function(e,t,n){var r=n(2);e.exports=function(e,t,n){var i,s;if(n=n||0,!r(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(s=t.length,i=n;n>=0&&i<s;i+=1)if(t[i]===e)return i;return-1}},function(e,t,n){var r=n(29),i=n(30),s=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),i=s(e)?e(t):r(e,t);return n.innerHTML=i,n.firstChild},bind:function(e,t){var n,r=Array.prototype.slice;return e.bind?e.bind.apply(e,r.call(arguments,1)):(n=r.call(arguments,2),function(){return e.apply(t,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var r=n(13),i=n(7),s=n(0),o=n(1),a=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=i({init:function(e,t){this._options=s({},c,t),this._currentPage=0,this._view=new a(e,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===e;return this._options.centerAlign?r?t-1:t+n:r?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),r=this._getPageIndex(e),i=this._getPageIndex(n),s=this._getEdge(e);return t.leftPageNumber=s.left,t.rightPageNumber=s.right,t.prevMore=r>1,t.nextMore=r<i,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,r,i=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(r=Math.floor(s/2),(n=(t=Math.max(e-r,1))+s-1)>i&&(t=Math.max(i-s+1,1),n=i)):(t=(o-1)*s+1,n=o*s,n=Math.min(n,i)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(u),e.exports=u},function(e,t,n){var r=n(0),i=n(14),s=n(4),o=n(16),a=n(2),l=n(5),c=n(3),u=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(e){r(e.prototype,h.prototype)},h.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},h.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},h.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},h.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},h.prototype._memorizeContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},h.prototype._forgetContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},h.prototype._bindEvent=function(e,t,n){var r=this._safeEvent(e);this._memorizeContext(n),r.push(this._getHandlerItem(t,n))},h.prototype.on=function(e,t,n){var r=this;s(e)?(e=e.split(u),c(e,(function(e){r._bindEvent(e,t,n)}))):o(e)&&(n=t,c(e,(function(e,t){r.on(t,e,n)})))},h.prototype.once=function(e,t,n){var r=this;if(o(e))return n=t,void c(e,(function(e,t){r.once(t,e,n)}));this.on(e,(function i(){t.apply(n,arguments),r.off(e,i,n)}),n)},h.prototype._spliceMatches=function(e,t){var n,r=0;if(a(e))for(n=e.length;r<n;r+=1)!0===t(e[r])&&(e.splice(r,1),n-=1,r-=1)},h.prototype._matchHandler=function(e){var t=this;return function(n){var r=e===n.handler;return r&&t._forgetContext(n.context),r}},h.prototype._matchContext=function(e){var t=this;return function(n){var r=e===n.context;return r&&t._forgetContext(n.context),r}},h.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(r){var i=e===r.handler,s=t===r.context,o=i&&s;return o&&n._forgetContext(r.context),o}},h.prototype._offByEventName=function(e,t){var n=this,r=l(t),i=n._matchHandler(t);e=e.split(u),c(e,(function(e){var t=n._safeEvent(e);r?n._spliceMatches(t,i):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},h.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},h.prototype._offByObject=function(e,t){var n,r=this;this._indexOfContext(e)<0?c(e,(function(e,t){r.off(t,e)})):s(t)?(n=this._matchContext(e),r._spliceMatches(this._safeEvent(t),n)):l(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)})))},h.prototype.off=function(e,t){s(e)?this._offByEventName(e,t):arguments.length?l(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},h.prototype.fire=function(e){this.invoke.apply(this,arguments)},h.prototype.invoke=function(e){var t,n,r,i;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),r=0;t[r];){if(!1===(i=t[r]).handler.apply(i.context,n))return!1;r+=1}return!0},h.prototype.hasListener=function(e){return this.getListenerLength(e)>0},h.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=h},function(e,t,n){var r=n(1),i=n(15);e.exports=function(e){return!r(e)&&!i(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var r=0,i=e.length;for(n=n||null;r<i&&!1!==t.call(n,e[r],r,e);r+=1);}},function(e,t,n){var r=n(19);e.exports=function(e,t){var n=r(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var r=n(3),i=n(7),s=n(21),o=n(22),a=n(24),l=n(25),c=n(0),u=n(4),h=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],g=["prev","next"],m=i({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},f,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(u(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!h(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){r(p,(function(e){this._buttons[e]=d.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){r(p,(function(e){var t="disabled"+d.capitalizeFirstLetter(e);this._buttons[t]=d.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){r(g,(function(e){var t=e+"More";this._buttons[t]=d.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,l(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,l(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,r=e.leftPageNumber,i=e.rightPageNumber;for(n=r;n<=i;n+=1)n===e.page?t=d.createElementByTemplate(this._template.currentPage,{page:n}):(t=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==r||e.prevMore||l(t,this._firstItemClassName),n!==i||e.nextMore||l(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,r,i=s(t);a(t),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),e(r,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return r(n,(function(n,r){return!d.isContained(e,n)||(t=r,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(t=this._enabledPageElements[n],d.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=m},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var r=n(4),i=n(3),s=n(23);function o(e,t,n,r){function o(t){n.call(r||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,r){var o=s(e,t),a=!1;i(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:r})}(e,t,n,o)}e.exports=function(e,t,n,s){r(t)?i(t.split(/\s+/g),(function(t){o(e,t,n,s)})):i(t,(function(t,r){o(e,r,t,n)}))}},function(e,t,n){var r="_feEventKey";e.exports=function(e,t){var n,i=e[r];return i||(i=e[r]={}),(n=i[t])||(n=i[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var r=n(3),i=n(8),s=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,l=[];a?r(n,(function(t){e.classList.add(t)})):((t=s(e))&&(n=[].concat(t.split(/\s+/),n)),r(n,(function(e){i(e,l)<0&&l.push(e)})),o(e,l))}},function(e,t,n){var r=n(1);e.exports=function(e){return e&&e.className?r(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var r=n(2),i=n(1);e.exports=function(e,t){t=(t=r(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var r=n(8),i=n(3),s=n(2),o=n(4),a=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,p=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(e,t,n){var r=function(e,t){var n=[e],r=[],s=0,o=0;return i(t,(function(e,i){0===e.indexOf("if")?s+=1:"/if"===e?s-=1:s||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),r.push(t.slice(o,i)),o=i+1)})),r.push(t.slice(o)),{exps:n,sourcesInsideIf:r}}(e,t),s=!1,o="";return i(r.exps,(function(e,t){return(s=b(e,n))&&(o=w(r.sourcesInsideIf[t],n)),!s})),o},each:function(e,t,n){var r=b(e,n),o=s(r)?"@index":"@key",l={},c="";return i(r,(function(e,r){l[o]=r,l["@this"]=e,a(n,l),c+=w(t.slice(),n)})),c},with:function(e,t,n){var i=r("as",e),s=e[i+1],o=b(e.slice(0,i),n),l={};return l[s]=o,w(t,a(n,l))||""}},v=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,r,i=[],s=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)r=n.index,i.push(e.slice(s,r)),s=r+n[0].length,n=t.exec(e);return i.push(e.slice(s)),i};function y(e,t){var n,r=t[e];return"true"===e?r=!0:"false"===e?r=!1:f.test(e)?r=e.replace(p,""):c.test(e)?r=y((n=e.split(u))[0],t)[y(n[1],t)]:h.test(e)?r=y((n=e.split(d))[0],t)[n[1]]:g.test(e)&&(r=parseFloat(e)),r}function _(e,t,n){for(var r,i,s,a,l=m[e],c=1,u=2,h=t[u];c&&o(h);)0===h.indexOf(e)?c+=1:0===h.indexOf("/"+e)&&(c-=1,r=u),h=t[u+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=l(t[0].split(" ").slice(1),(i=0,s=r,(a=t.splice(i+1,s-i)).pop(),a),n),t}function b(e,t){var n=y(e[0],t);return n instanceof Function?function(e,t,n){var r=[];return i(t,(function(e){r.push(y(e,n))})),e.apply(null,r)}(n,e.slice(1),t):n}function w(e,t){for(var n,r,i,s=1,a=e[s];o(a);)r=(n=a.split(" "))[0],m[r]?(i=_(r,e.splice(s,e.length-s),t),e=e.concat(i)):e[s]=b(n,t),a=e[s+=2];return e.join("")}e.exports=function(e,t){return w(v(e,l),t)}},function(e,t,n){var r=n(1),i=n(31);e.exports=function(e,t){var n=location.hostname,s="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(s);(r(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var r=n(6);e.exports=function(e,t){var n=document.createElement("img"),i="";return r(t,(function(e,t){i+="&"+t+"="+e})),i=i.substring(1),n.src=e+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},hc=uc();const dc={galleryList:document.querySelector(".gallery-list"),paginationEl:document.querySelector("#tui-pagination-container"),errorSection:document.querySelector("[data-error-section]")},fc=Ze({apiKey:"AIzaSyCTBJG-qoCxnqY0kLartne6JuIMgO3rCtI",authDomain:"exo-code.firebaseapp.com",projectId:"exo-code",storageBucket:"exo-code.appspot.com",messagingSenderId:"1058079447675",appId:"1:1058079447675:web:a8a6c524a829fb1f4160de",databaseURL:"https://exo-code-default-rtdb.europe-west1.firebasedatabase.app"}),pc=Qr(fc),gc=cc(fc),mc=async()=>{let e=[];const t=Ql(gc,"favorites");return new Promise(((n,r)=>{ic(t,(t=>{const r=pc.currentUser,i=t.val();for(uid in i)if(r.uid==uid){const t=i[uid].cocktails;t&&(e.cocktails=t);const n=i[uid].ingredients;n&&(e.ingredients=n)}n(e)}))}))};function vc(t,n){!function(t){const n=t.length,r=Ec();wc(Math.ceil(n/r)),bc.totalItems=n,bc.itemsPerPage=r;const i=new(e(hc))(_c,bc);dc.galleryList.innerHTML=t.slice(0,r).join(""),i.on("afterMove",(e=>{const n=(e.page-1)*r,i=n+r,s=t.slice(n,i);dc.galleryList.innerHTML=s.join("")}))}(n.map((({strDrinkThumb:e,strDrink:n,idDrink:r})=>{let i="",s="Add to";return 0!==Object.keys(t).length&&t.cocktails[r]&&(i='data-action="delete"',s="Remove"),`\n        <li class="gallery-item" id="cocktail-${r}">\n          <img class="gallery-item__img_margin gallery-item__img" src="${e}" alt="${n} photo" />\n          <h2 class="gallery-item__title gallery-item__title_margin">${n}</h2>\n          <div class="button-container">\n            <button class="button-more" type="button" data-cocktailid="${r}">Learn More</button>\n            <button class="button-favorite" data-cocktailid="${r}" data-add-remove-favorite="" data-element-type="cocktail" type="button" ${i}>\n              <span>${s}</span>\n              <svg class="button-favorite__icon" xmlns="http://www.w3.org/2000/svg" width="21" height="19" fill="none"><path fill="#FD5103" d="m10.5 19-1.523-1.367C3.57 12.798 0 9.61 0 5.695 0 2.505 2.541 0 5.775 0c1.827 0 3.58.839 4.725 2.164A6.324 6.324 0 0 1 15.225 0C18.459 0 21 2.506 21 5.695c0 3.914-3.57 7.103-8.977 11.949L10.5 19Z"/><path  d="m10.5 17-1.232-1.079C4.89 12.104 2 9.586 2 6.496 2 3.978 4.057 2 6.675 2c1.479 0 2.898.662 3.825 1.708A5.175 5.175 0 0 1 14.325 2C16.943 2 19 3.978 19 6.496c0 3.09-2.89 5.607-7.268 9.433L10.5 17Z"/></svg>\n            </button>\n          </div>\n        </li>\n      `})))}function yc(e){return function(e,t){const n=mc();console.log(n),n.then((n=>{e(n,t)})),e({},t)}(vc,e)}const _c=document.getElementById("tui-pagination-container"),bc={totalItems:0,itemsPerPage:6,visiblePages:3,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};function wc(e){e>1?dc.paginationEl.classList.remove("visually-hidden"):dc.paginationEl.classList.add("visually-hidden"),dc.errorSection.classList.add("visually-hidden")}function Ec(){const e=window.innerWidth;let t=3;return e>=768&&(t=6),e>=1280&&(t=9),t}({modals:document.querySelectorAll(".modal")}).modals.forEach((e=>{e.addEventListener("click",(t=>{(t.target.hasAttribute("data-modal-close")||t.target.hasAttribute("data-modal"))&&e.classList.toggle("is-hidden")}))}));var Cc={};Object.defineProperty(Cc,"__esModule",{value:!0});var Tc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ic=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};Cc.default=function(e,t){var n=[],r=[];return function(){if(e&&e instanceof HTMLElement&&"SELECT"===e.tagName.toUpperCase())n.push(e);else if(e&&"string"==typeof e)for(var i=document.querySelectorAll(e),s=0,o=i.length;s<o;++s)i[s]instanceof HTMLElement&&"SELECT"===i[s].tagName.toUpperCase()&&n.push(i[s]);else if(e&&e.length)for(var a=0,l=e.length;a<l;++a)e[a]instanceof HTMLElement&&"SELECT"===e[a].tagName.toUpperCase()&&n.push(e[a]);for(var c=0,u=n.length;c<u;++c)r.push(Nc(n[c],Tc({},xc,t)));return r}()};try{var Sc=new window.CustomEvent("test");if(Sc.preventDefault(),!0!==Sc.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var kc=function(e,t){var n,r;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r=n.preventDefault,n.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};kc.prototype=window.Event.prototype,window.CustomEvent=kc}var xc={containerClass:"custom-select-container",openerClass:"custom-select-opener",panelClass:"custom-select-panel",optionClass:"custom-select-option",optgroupClass:"custom-select-optgroup",isSelectedClass:"is-selected",hasFocusClass:"has-focus",isDisabledClass:"is-disabled",isOpenClass:"is-open"};function Nc(e,t){var n="customSelect",r=!1,i="",s=e,o=void 0,a=void 0,l=void 0,c=void 0,u=void 0,h=void 0,d=void 0,f="";function p(e){l&&l.classList.remove(t.hasFocusClass),void 0!==e?((l=e).classList.add(t.hasFocusClass),r&&(e.offsetTop<e.offsetParent.scrollTop||e.offsetTop>e.offsetParent.scrollTop+e.offsetParent.clientHeight-e.clientHeight)&&e.dispatchEvent(new CustomEvent("custom-select:focus-outside-panel",{bubbles:!0}))):l=void 0}function g(e){c&&(c.classList.remove(t.isSelectedClass),c.removeAttribute("id"),a.removeAttribute("aria-activedescendant")),void 0!==e?(e.classList.add(t.isSelectedClass),e.setAttribute("id","customSelect-"+i+"-selectedOption"),a.setAttribute("aria-activedescendant","customSelect-"+i+"-selectedOption"),c=e,a.children[0].textContent=c.customSelectOriginalOption.text):(c=void 0,a.children[0].textContent=""),p(e)}function m(e){var t=[].indexOf.call(s.options,l.customSelectOriginalOption);s.options[t+e]&&p(s.options[t+e].customSelectCstOption)}function v(e){if(e||void 0===e){var n=document.querySelector(".customSelect."+t.isOpenClass);n&&(n.customSelect.open=!1),o.classList.add(t.isOpenClass),o.classList.add(t.isOpenClass),a.setAttribute("aria-expanded","true"),c&&(u.scrollTop=c.offsetTop),o.dispatchEvent(new CustomEvent("custom-select:open")),r=!0}else o.classList.remove(t.isOpenClass),a.setAttribute("aria-expanded","false"),r=!1,p(c),o.dispatchEvent(new CustomEvent("custom-select:close"));return r}function y(e){e.target===a||a.contains(e.target)?r?v(!1):v():e.target.classList&&e.target.classList.contains(t.optionClass)&&u.contains(e.target)?(g(e.target),c.customSelectOriginalOption.selected=!0,v(!1),s.dispatchEvent(new CustomEvent("change"))):e.target===s?a!==document.activeElement&&s!==document.activeElement&&a.focus():r&&!o.contains(e.target)&&v(!1)}function _(e){e.target.classList&&e.target.classList.contains(t.optionClass)&&p(e.target)}function b(e){if(r)switch(e.keyCode){case 13:case 32:g(l),c.customSelectOriginalOption.selected=!0,s.dispatchEvent(new CustomEvent("change")),v(!1);break;case 27:v(!1);break;case 38:m(-1);break;case 40:m(1);break;default:if(e.keyCode>=48&&e.keyCode<=90){d&&clearTimeout(d),d=setTimeout((function(){f=""}),1500),f+=String.fromCharCode(e.keyCode);for(var t=0,n=s.options.length;t<n;t++)if(s.options[t].text.toUpperCase().substr(0,f.length)===f){p(s.options[t].customSelectCstOption);break}}}else 40!==e.keyCode&&38!==e.keyCode&&32!==e.keyCode||v()}function w(){var e=s.selectedIndex;g(-1===e?void 0:s.options[e].customSelectCstOption)}function E(e){var t=e.currentTarget,n=e.target;n.offsetTop<t.scrollTop?t.scrollTop=n.offsetTop:t.scrollTop=n.offsetTop+n.clientHeight-t.clientHeight}function C(){document.addEventListener("click",y),u.addEventListener("mouseover",_),u.addEventListener("custom-select:focus-outside-panel",E),s.addEventListener("change",w),o.addEventListener("keydown",b)}function T(){document.removeEventListener("click",y),u.removeEventListener("mouseover",_),u.removeEventListener("custom-select:focus-outside-panel",E),s.removeEventListener("change",w),o.removeEventListener("keydown",b)}function I(e){var n=e,r=[];if(void 0===n.length)throw new TypeError("Invalid Argument");for(var i=0,s=n.length;i<s;i++)if(n[i]instanceof HTMLElement&&"OPTGROUP"===n[i].tagName.toUpperCase()){var o=document.createElement("div");o.classList.add(t.optgroupClass),o.setAttribute("data-label",n[i].label),o.customSelectOriginalOptgroup=n[i],n[i].customSelectCstOptgroup=o;for(var a=I(n[i].children),l=0,c=a.length;l<c;l++)o.appendChild(a[l]);r.push(o)}else{if(!(n[i]instanceof HTMLElement&&"OPTION"===n[i].tagName.toUpperCase()))throw new TypeError("Invalid Argument");var u=document.createElement("div");u.classList.add(t.optionClass),u.textContent=n[i].text,u.setAttribute("data-value",n[i].value),u.setAttribute("role","option"),u.customSelectOriginalOption=n[i],n[i].customSelectCstOption=u,n[i].selected&&g(u),r.push(u)}return r}function S(e,t,n){var r=void 0;if(void 0===n||n===s)r=u;else{if(!(n instanceof HTMLElement&&"OPTGROUP"===n.tagName.toUpperCase()&&s.contains(n)))throw new TypeError("Invalid Argument");r=n.customSelectCstOptgroup}var i=e instanceof HTMLElement?[e]:e;if(t)for(var o=0,a=i.length;o<a;o++)r===u?s.appendChild(i[o]):r.customSelectOriginalOptgroup.appendChild(i[o]);for(var l=I(i),c=0,h=l.length;c<h;c++)r.appendChild(l[c]);return i}(o=document.createElement("div")).classList.add(t.containerClass,n),(a=document.createElement("span")).className=t.openerClass,a.setAttribute("role","combobox"),a.setAttribute("aria-autocomplete","list"),a.setAttribute("aria-expanded","false"),a.innerHTML="<span>\n   "+(-1!==s.selectedIndex?s.options[s.selectedIndex].text:"")+"\n   </span>",u=document.createElement("div");for(var k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",x=0;x<5;x++)i+=k.charAt(Math.floor(Math.random()*k.length));return u.id="customSelect-"+i+"-panel",u.className=t.panelClass,u.setAttribute("role","listbox"),a.setAttribute("aria-owns",u.id),S(s.children,!1),o.appendChild(a),s.parentNode.replaceChild(o,s),o.appendChild(s),o.appendChild(u),document.querySelector('label[for="'+s.id+'"]')?h=document.querySelector('label[for="'+s.id+'"]'):"LABEL"===o.parentNode.tagName.toUpperCase()&&(h=o.parentNode),void 0!==h&&(h.setAttribute("id","customSelect-"+i+"-label"),a.setAttribute("aria-labelledby","customSelect-"+i+"-label")),s.disabled?o.classList.add(t.isDisabledClass):(a.setAttribute("tabindex","0"),s.setAttribute("tabindex","-1"),C()),o.customSelect={get pluginOptions(){return t},get open(){return r},set open(e){v(e)},get disabled(){return s.disabled},set disabled(e){!function(e){e&&!s.disabled?(o.classList.add(t.isDisabledClass),s.disabled=!0,a.removeAttribute("tabindex"),o.dispatchEvent(new CustomEvent("custom-select:disabled")),T()):!e&&s.disabled&&(o.classList.remove(t.isDisabledClass),s.disabled=!1,a.setAttribute("tabindex","0"),o.dispatchEvent(new CustomEvent("custom-select:enabled")),C())}(e)},get value(){return s.value},set value(e){var t,n;t=e,(n=s.querySelector("option[value='"+t+"']"))||(n=Ic(s.options,1)[0]),n.selected=!0,g(s.options[s.selectedIndex].customSelectCstOption)},append:function(e,t){return S(e,!0,t)},insertBefore:function(e,t){return function(e,t){var n=void 0;if(t instanceof HTMLElement&&"OPTION"===t.tagName.toUpperCase()&&s.contains(t))n=t.customSelectCstOption;else{if(!(t instanceof HTMLElement&&"OPTGROUP"===t.tagName.toUpperCase()&&s.contains(t)))throw new TypeError("Invalid Argument");n=t.customSelectCstOptgroup}var r=I(e.length?e:[e]);return n.parentNode.insertBefore(r[0],n),t.parentNode.insertBefore(e.length?e[0]:e,t)}(e,t)},remove:function(e){var t=void 0;if(e instanceof HTMLElement&&"OPTION"===e.tagName.toUpperCase()&&s.contains(e))t=e.customSelectCstOption;else{if(!(e instanceof HTMLElement&&"OPTGROUP"===e.tagName.toUpperCase()&&s.contains(e)))throw new TypeError("Invalid Argument");t=e.customSelectCstOptgroup}t.parentNode.removeChild(t);var n=e.parentNode.removeChild(e);return w(),n},empty:function(){for(var e=[];s.children.length;)u.removeChild(u.children[0]),e.push(s.removeChild(s.children[0]));return g(),e},destroy:function(){for(var e=0,t=s.options.length;e<t;e++)delete s.options[e].customSelectCstOption;for(var n=s.getElementsByTagName("optgroup"),r=0,i=n.length;r<i;r++)delete n.customSelectCstOptgroup;return T(),o.parentNode.replaceChild(s,o)},opener:a,select:s,panel:u,container:o},s.customSelect=o.customSelect,o.customSelect}e(Cc)(".select-letter .custom-select",{containerClass:"custom-select-container"});const Ac=({id:e,title:t,image:n,instructions:r,ingredients:i})=>{const s=`\n          </ul>\n        </div>\n      </div>\n\n      \x3c!--------- Instructions shown in tablet and desktop ---------\x3e\n      <div class="modal-cocktail__tabinstructions">\n        <h3 class="modal-cocktail__subtitle hidden-in-mobile">Instructions:</h3>\n        <p class="hidden-in-mobile modal-cocktail__text">\n          ${r}\n        </p>\n      </div>\n      \x3c!--------- Instructions shown in tablet and desktop ---------\x3e\n\n      <div\n        class="modal-cocktail-button-wrapper"\n      >\n        \x3c!--------- Add to favorite button ---------\x3e\n        <button\n          type="button"\n          class="button-more button-modal-cocktail"\n          data-add-remove-favorite\n          data-cocktailid="${e}"\n          data-element-type="cocktail"\n        >\n          Add to favorite\n        </button>\n        \x3c!--------- Add to favorite button ---------\x3e\n      </div>\n    </div>\n  `;return`\n    <div class="modal-cocktail__content">\n      \x3c!--------- Name and Instructions for mobile version ---------\x3e\n      <div>\n        <h2 class="modal-cocktail__title hidden-in-tablet">${t}</h2>\n        <h3 class="modal-cocktail__subtitle hidden-in-tablet">Instructions:</h3>\n        <p class="modal-cocktail__text">\n          ${r}\n        </p>\n      </div>\n      \x3c!--------- Name and Instructions for mobile version---------\x3e\n\n      <div class="modal-cocktail__card">\n        <img\n          class="modal-cocktail__img"\n          src="${n}"\n          alt="${t}"\n          width="280px"\n          height="280px"\n        />\n\n        <div class="modal-cocktail__bigcard">\n          <h2 class="modal-cocktail__title hidden-in-mobile">${t}</h2>\n          <h3 class="sub-ingredients">Ingredients:</h3>\n          <p class="modal-cocktail__smalltitle">Per cocktail</p>\n          <ul class="modal-cocktail__list">\n  `+i.map((e=>`<li class="lish">\n        <a\n          href="#"\n          class="modal-cocktail__link"\n          data-ingredientname="${e}"\n          >✶ ${e}</a\n        >\n      </li>`)).join("")+s},Rc=({id:e,title:t,country:n,subtitle:r,description:i,type:s,ingredient:o,abv:a})=>{let l="";s&&(l=`\n      <li class="modal-ingr__list__item">\n        <span class="modal-ingr__list__item__star">✶ </span>Type: ${s}\n      </li>\n    `);let c="";n&&(c=`\n      <li class="modal-ingr__list__item">\n        <span class="modal-ingr__list__item__star">✶ </span>Country of\n        origin: ${n}\n      </li>\n    `);let u="";a&&(u=`\n      <li class="modal-ingr__list__item">\n        <span class="modal-ingr__list__item__star">✶ </span>Alcohol by\n        volume: ${a}\n      </li>\n    `);let h="";o&&(h=`\n      <li class="modal-ingr__list__item">\n        <span class="modal-ingr__list__item__star">✶ </span>Flavour: ${o},\n        spicy and sweet\n      </li>\n    `);return`\n    <div class="modal-ingr__content" id="ingredient-${e}">\n      <h2 class="modal-ingr__title ingr-title">${t}</h2>\n      <h3 class="modal-ingr__subtitle ingr-subtitle">${s||""}</h3>\n      <div class="modal-ingr__horiontal-line"></div>\n      <div>\n        <p class="modal-ingr__description">\n          ${i||""}\n        </p>\n        <ul class="modal-ingr__list">\n  `+(l+c+u+h)+`\n        </ul>\n      </div>\n      <div\n        class="modal-ingr__btns"\n      >\n        <button\n          type="button"\n          class="button-more modal-ingr__btn"\n          data-add-remove-favorite\n          data-ingredientid="${e}"\n          data-element-type="ingredient"\n        >\n          Add to favorite\n        </button>\n      </div>\n    </div>\n  `},Pc="\n  <div data-loader='' class=\"loader-type1\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\n",Lc=({email:e="",authorized:t=!1})=>t?`\n      <div>Logged in as <span class="user__email" data-user-email>${e}</span></div>\n      <button class="button-authorization user__button" type="button" data-logout-button>\n        Logout\n      </button>\n    `:'\n      <button class="button-authorization user__button" type="button" data-login-button>\n        Login\n      </button>\n    ',Oc=({type:e,name:t})=>`\n    ${"cocktail"==e?"Cocktail":"Ingredient"} <strong>${t}</strong> successfully added to your favorites.\n  `,Dc=({type:e,name:t})=>`\n    ${"cocktail"==e?"Cocktail":"Ingredient"} <strong>${t}</strong> removed from your favorites.\n  `,Mc={userAreaEl:document.querySelector("[data-user-area]"),modalAuthentication:document.querySelector("[data-modal-authentication]"),modalSuccessfull:document.querySelector("[data-modal-successfull]"),loginBtn:document.querySelector("[data-modal-login-button]"),joinBtn:document.querySelector("[data-modal-join-button]"),loginForm:document.querySelector("[data-login-form]"),joinForm:document.querySelector("[data-join-form]"),wellcomeEl:document.querySelector("[data-wellcome]"),modalLoader:document.querySelector("[data-modal-authentication-loader]"),modalSuccessfullContent:document.querySelector("[data-modal-successfull-content]"),errorSection:document.querySelector("[data-error-section]"),galleryList:document.querySelector(".gallery-list")};Mc.userAreaEl.addEventListener("click",(e=>{e.target.hasAttribute("data-logout-button")&&qc(),e.target.hasAttribute("data-login-button")&&(Mc.joinForm.classList.add("visually-hidden"),Mc.loginForm.classList.remove("visually-hidden"),Mc.modalAuthentication.classList.toggle("is-hidden"))}));const Fc=Ze({apiKey:"AIzaSyCTBJG-qoCxnqY0kLartne6JuIMgO3rCtI",authDomain:"exo-code.firebaseapp.com",projectId:"exo-code",storageBucket:"exo-code.appspot.com",messagingSenderId:"1058079447675",appId:"1:1058079447675:web:a8a6c524a829fb1f4160de",databaseURL:"https://exo-code-default-rtdb.europe-west1.firebasedatabase.app"}),jc=Qr(Fc),Uc=cc(Fc);jc.onAuthStateChanged((e=>{if(e){e.uid,e.email,e.displayName,e.photoURL;Mc.userAreaEl.innerHTML=Lc({email:e.email,authorized:!0}),document.querySelector("[data-logout-button]").addEventListener("click",(()=>{qc()}))}else Mc.userAreaEl.innerHTML=Lc({})}));function qc(){var e;(e=jc,pe(e).signOut()).then((()=>{Mc.userAreaEl.innterHTML=Lc({})})).catch((e=>{console.error("Error signing out:",e)}))}async function Bc({action:e,elementType:t,elementTitle:n,elementSubtitle:r,elementId:i,elementData:s,targetElement:o}){const a=jc.currentUser;if(a){const c=Ql(Uc,`favorites/${a.uid}/${t}s/${i}`);try{"add"==e&&(await ec(c,{title:n,subtitle:r||"",data:s||""}),Mc.modalSuccessfullContent.innerHTML=Oc({type:t,name:n}),o.firstElementChild?o.firstElementChild.innerHTML="Remove":o.innerHTML="Remove from favorite",o.setAttribute("data-action","delete"),console.log("Data successfully written to Firestore!")),"delete"==e&&(await(l=c,pl("remove",l._path),ec(l,null)),Mc.modalSuccessfullContent.innerHTML=Dc({type:t,name:n}),o.firstElementChild?o.firstElementChild.innerHTML="Add to":o.innerHTML="Add to favorite",o.setAttribute("data-action","ad"),console.log("Data successfully removed from Firestore1!"))}catch(e){console.error("Error writing document: ",e)}Mc.modalSuccessfull.classList.toggle("is-hidden")}else Mc.modalAuthentication.classList.toggle("is-hidden");var l}Mc.joinBtn.addEventListener("click",(function(){Mc.modalLoader.innerHTML=Pc,Mc.modalLoader.classList.toggle("visually-hidden");const e=Mc.joinForm.elements.email.value,t=Mc.joinForm.elements.password.value;Vn(jc,e,t).then((e=>{const t=e.user;console.log("User account created:",t.uid),Mc.wellcomeEl.classList.toggle("visually-hidden"),Mc.joinForm.classList.toggle("visually-hidden")})).catch((e=>{const t=e.code,n=e.message;console.error("Error creating user account:",n),console.error("errorCode:",t)})).finally(Mc.modalLoader.classList.toggle("visually-hidden"))})),Mc.loginBtn.addEventListener("click",(function(){Mc.modalLoader.innerHTML=Pc,Mc.modalLoader.classList.toggle("visually-hidden");const e=Mc.loginForm.elements.email.value,t=Mc.loginForm.elements.password.value;Yn(jc,e,t).then((e=>{const t=e.user;console.log("User signed in:",t.uid),Mc.wellcomeEl.classList.toggle("visually-hidden"),Mc.loginForm.classList.toggle("visually-hidden")})).catch((e=>{e.code;const t=e.message;console.error("Error signing in:",t)})).finally(Mc.modalLoader.classList.toggle("visually-hidden"))}));const Hc=document.querySelector("[data-mob-menu-open]"),Wc=document.querySelector("[data-modal-mob-menu]"),$c=document.querySelector("[data-modal-mob-menu-cls]");Hc.addEventListener("click",(()=>{Wc.classList.remove("visually-hidden")})),$c.addEventListener("click",(()=>{Wc.classList.add("visually-hidden")}));const zc=document.querySelector(".fav-desc-mob"),Vc=document.querySelector(".sub-menu-btn"),Yc=document.querySelector(".mob-menu-wrapper"),Xc=()=>{zc.classList.toggle("show-desc")};function Kc(e,t){return function(){return e.apply(t,arguments)}}Vc.addEventListener("click",(e=>{e.stopPropagation(),Xc()})),Yc.addEventListener("click",(e=>{zc.classList.contains("show-desc")&&Xc()}));const{toString:Gc}=Object.prototype,{getPrototypeOf:Jc}=Object,Qc=(Zc=Object.create(null),e=>{const t=Gc.call(e);return Zc[t]||(Zc[t]=t.slice(8,-1).toLowerCase())});var Zc;const eu=e=>(e=e.toLowerCase(),t=>Qc(t)===e),tu=e=>t=>typeof t===e,{isArray:nu}=Array,ru=tu("undefined");const iu=eu("ArrayBuffer");const su=tu("string"),ou=tu("function"),au=tu("number"),lu=e=>null!==e&&"object"==typeof e,cu=e=>{if("object"!==Qc(e))return!1;const t=Jc(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},uu=eu("Date"),hu=eu("File"),du=eu("Blob"),fu=eu("FileList"),pu=eu("URLSearchParams");function gu(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),nu(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function mu(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const vu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:i,yu=e=>!ru(e)&&e!==vu;const _u=(bu="undefined"!=typeof Uint8Array&&Jc(Uint8Array),e=>bu&&e instanceof bu);var bu;const wu=eu("HTMLFormElement"),Eu=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Cu=eu("RegExp"),Tu=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};gu(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)},Iu={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};var Su={isArray:nu,isArrayBuffer:iu,isBuffer:function(e){return null!==e&&!ru(e)&&null!==e.constructor&&!ru(e.constructor)&&ou(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||Gc.call(e)===t||ou(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&iu(e.buffer),t},isString:su,isNumber:au,isBoolean:e=>!0===e||!1===e,isObject:lu,isPlainObject:cu,isUndefined:ru,isDate:uu,isFile:hu,isBlob:du,isRegExp:Cu,isFunction:ou,isStream:e=>lu(e)&&ou(e.pipe),isURLSearchParams:pu,isTypedArray:_u,isFileList:fu,forEach:gu,merge:function e(){const{caseless:t}=yu(this)&&this||{},n={},r=(r,i)=>{const s=t&&mu(n,i)||i;cu(n[s])&&cu(r)?n[s]=e(n[s],r):cu(r)?n[s]=e({},r):nu(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&gu(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(gu(t,((t,r)=>{n&&ou(t)?e[r]=Kc(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&Jc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Qc,kindOfTest:eu,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(nu(e))return e;let t=e.length;if(!au(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:wu,hasOwnProperty:Eu,hasOwnProp:Eu,reduceDescriptors:Tu,freezeMethods:e=>{Tu(e,((t,n)=>{if(ou(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];ou(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return nu(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:mu,global:vu,isContextDefined:yu,ALPHABET:Iu,generateString:(e=16,t=Iu.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&ou(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(lu(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=nu(e)?[]:{};return gu(e,((e,t)=>{const s=n(e,r+1);!ru(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)}};function ku(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}Su.inherits(ku,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Su.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xu=ku.prototype,Nu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Nu[e]={value:e}})),Object.defineProperties(ku,Nu),Object.defineProperty(xu,"isAxiosError",{value:!0}),ku.from=(e,t,n,r,i,s)=>{const o=Object.create(xu);return Su.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),ku.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var Au,Ru,Pu,Lu=ku;Ru=function(e){var t,n,r=Hu(e),i=r[0],s=r[1],o=new ju(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),a=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)t=Fu[e.charCodeAt(n)]<<18|Fu[e.charCodeAt(n+1)]<<12|Fu[e.charCodeAt(n+2)]<<6|Fu[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=Fu[e.charCodeAt(n)]<<2|Fu[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=Fu[e.charCodeAt(n)]<<10|Fu[e.charCodeAt(n+1)]<<4|Fu[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},Pu=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(Wu(e,o,o+s>a?a:o+s));1===r?(t=e[n-1],i.push(Mu[t>>2]+Mu[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(Mu[t>>10]+Mu[t>>4&63]+Mu[t<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Ou,Du,Mu=[],Fu=[],ju="undefined"!=typeof Uint8Array?Uint8Array:Array,Uu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",qu=0,Bu=Uu.length;qu<Bu;++qu)Mu[qu]=Uu[qu],Fu[Uu.charCodeAt(qu)]=qu;function Hu(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function Wu(e,t,n){for(var r,i,s=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(Mu[(i=r)>>18&63]+Mu[i>>12&63]+Mu[i>>6&63]+Mu[63&i]);return s.join("")}Fu["-".charCodeAt(0)]=62,Fu["_".charCodeAt(0)]=63,Ou=function(e,t,n,r,i){var s,o,a=8*i-r-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=r;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=c}return(f?-1:1)*o*Math.pow(2,s-r)},Du=function(e,t,n,r,i,s){var o,a,l,c=8*s-i-1,u=(1<<c)-1,h=u>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+h>=1?d/l:d*Math.pow(2,1-h))*l>=2&&(o++,l/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*l-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,c+=i;c>0;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*g};const $u="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;Au=Vu;function zu(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,Vu.prototype),t}function Vu(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return Ku(e)}return Yu(e,t,n)}function Yu(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!Vu.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|Zu(e,t);let r=zu(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Ph(e,Uint8Array)){const t=new Uint8Array(e);return Ju(t.buffer,t.byteOffset,t.byteLength)}return Gu(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Ph(e,ArrayBuffer)||e&&Ph(e.buffer,ArrayBuffer))return Ju(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Ph(e,SharedArrayBuffer)||e&&Ph(e.buffer,SharedArrayBuffer)))return Ju(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return Vu.from(r,t,n);const i=function(e){if(Vu.isBuffer(e)){const t=0|Qu(e.length),n=zu(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Lh(e.length)?zu(0):Gu(e);if("Buffer"===e.type&&Array.isArray(e.data))return Gu(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Vu.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function Xu(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Ku(e){return Xu(e),zu(e<0?0:0|Qu(e))}function Gu(e){const t=e.length<0?0:0|Qu(e.length),n=zu(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function Ju(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,Vu.prototype),r}function Qu(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function Zu(e,t){if(Vu.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Ph(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Nh(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Ah(e).length;default:if(i)return r?-1:Nh(e).length;t=(""+t).toLowerCase(),i=!0}}function eh(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return fh(this,t,n);case"utf8":case"utf-8":return uh(this,t,n);case"ascii":return hh(this,t,n);case"latin1":case"binary":return dh(this,t,n);case"base64":return ch(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ph(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function th(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function nh(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Lh(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=Vu.from(t,r)),Vu.isBuffer(t))return 0===t.length?-1:rh(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):rh(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function rh(e,t,n,r,i){let s,o=1,a=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(c(e,s)===c(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===l)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let r=0;r<l;r++)if(c(e,s+r)!==c(t,r)){n=!1;break}if(n)return s}return-1}function ih(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=t.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(t.substr(2*o,2),16);if(Lh(r))return o;e[n+o]=r}return o}function sh(e,t,n,r){return Rh(Nh(t,e.length-n),e,n,r)}function oh(e,t,n,r){return Rh(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function ah(e,t,n,r){return Rh(Ah(t),e,n,r)}function lh(e,t,n,r){return Rh(function(e,t){let n,r,i;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(t,e.length-n),e,n,r)}function ch(e,t,n){return 0===t&&n===e.length?Pu(e):Pu(e.slice(t,n))}function uh(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[i+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(s=l));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(l=(15&t)<<12|(63&n)<<6|63&r,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}Vu.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Vu.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Vu.prototype,"parent",{enumerable:!0,get:function(){if(Vu.isBuffer(this))return this.buffer}}),Object.defineProperty(Vu.prototype,"offset",{enumerable:!0,get:function(){if(Vu.isBuffer(this))return this.byteOffset}}),Vu.poolSize=8192,Vu.from=function(e,t,n){return Yu(e,t,n)},Object.setPrototypeOf(Vu.prototype,Uint8Array.prototype),Object.setPrototypeOf(Vu,Uint8Array),Vu.alloc=function(e,t,n){return function(e,t,n){return Xu(e),e<=0?zu(e):void 0!==t?"string"==typeof n?zu(e).fill(t,n):zu(e).fill(t):zu(e)}(e,t,n)},Vu.allocUnsafe=function(e){return Ku(e)},Vu.allocUnsafeSlow=function(e){return Ku(e)},Vu.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Vu.prototype},Vu.compare=function(e,t){if(Ph(e,Uint8Array)&&(e=Vu.from(e,e.offset,e.byteLength)),Ph(t,Uint8Array)&&(t=Vu.from(t,t.offset,t.byteLength)),!Vu.isBuffer(e)||!Vu.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},Vu.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Vu.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Vu.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=Vu.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(Ph(t,Uint8Array))i+t.length>r.length?(Vu.isBuffer(t)||(t=Vu.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!Vu.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},Vu.byteLength=Zu,Vu.prototype._isBuffer=!0,Vu.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)th(this,t,t+1);return this},Vu.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)th(this,t,t+3),th(this,t+1,t+2);return this},Vu.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)th(this,t,t+7),th(this,t+1,t+6),th(this,t+2,t+5),th(this,t+3,t+4);return this},Vu.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?uh(this,0,e):eh.apply(this,arguments)},Vu.prototype.toLocaleString=Vu.prototype.toString,Vu.prototype.equals=function(e){if(!Vu.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Vu.compare(this,e)},Vu.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},$u&&(Vu.prototype[$u]=Vu.prototype.inspect),Vu.prototype.compare=function(e,t,n,r,i){if(Ph(e,Uint8Array)&&(e=Vu.from(e,e.offset,e.byteLength)),!Vu.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),l=this.slice(r,i),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){s=l[e],o=c[e];break}return s<o?-1:o<s?1:0},Vu.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},Vu.prototype.indexOf=function(e,t,n){return nh(this,e,t,n,!0)},Vu.prototype.lastIndexOf=function(e,t,n){return nh(this,e,t,n,!1)},Vu.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return ih(this,e,t,n);case"utf8":case"utf-8":return sh(this,e,t,n);case"ascii":case"latin1":case"binary":return oh(this,e,t,n);case"base64":return ah(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return lh(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},Vu.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function hh(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function dh(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function fh(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=Oh[e[r]];return i}function ph(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function gh(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function mh(e,t,n,r,i,s){if(!Vu.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function vh(e,t,n,r,i){Ih(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function yh(e,t,n,r,i){Ih(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function _h(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function bh(e,t,n,r,i){return t=+t,n>>>=0,i||_h(e,0,n,4),Du(e,t,n,r,23,4),n+4}function wh(e,t,n,r,i){return t=+t,n>>>=0,i||_h(e,0,n,8),Du(e,t,n,r,52,8),n+8}Vu.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,Vu.prototype),r},Vu.prototype.readUintLE=Vu.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||gh(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},Vu.prototype.readUintBE=Vu.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||gh(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},Vu.prototype.readUint8=Vu.prototype.readUInt8=function(e,t){return e>>>=0,t||gh(e,1,this.length),this[e]},Vu.prototype.readUint16LE=Vu.prototype.readUInt16LE=function(e,t){return e>>>=0,t||gh(e,2,this.length),this[e]|this[e+1]<<8},Vu.prototype.readUint16BE=Vu.prototype.readUInt16BE=function(e,t){return e>>>=0,t||gh(e,2,this.length),this[e]<<8|this[e+1]},Vu.prototype.readUint32LE=Vu.prototype.readUInt32LE=function(e,t){return e>>>=0,t||gh(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Vu.prototype.readUint32BE=Vu.prototype.readUInt32BE=function(e,t){return e>>>=0,t||gh(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Vu.prototype.readBigUInt64LE=Dh((function(e){Sh(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||kh(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),Vu.prototype.readBigUInt64BE=Dh((function(e){Sh(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||kh(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),Vu.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||gh(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},Vu.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||gh(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},Vu.prototype.readInt8=function(e,t){return e>>>=0,t||gh(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Vu.prototype.readInt16LE=function(e,t){e>>>=0,t||gh(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},Vu.prototype.readInt16BE=function(e,t){e>>>=0,t||gh(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},Vu.prototype.readInt32LE=function(e,t){return e>>>=0,t||gh(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Vu.prototype.readInt32BE=function(e,t){return e>>>=0,t||gh(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Vu.prototype.readBigInt64LE=Dh((function(e){Sh(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||kh(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),Vu.prototype.readBigInt64BE=Dh((function(e){Sh(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||kh(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),Vu.prototype.readFloatLE=function(e,t){return e>>>=0,t||gh(e,4,this.length),Ou(this,e,!0,23,4)},Vu.prototype.readFloatBE=function(e,t){return e>>>=0,t||gh(e,4,this.length),Ou(this,e,!1,23,4)},Vu.prototype.readDoubleLE=function(e,t){return e>>>=0,t||gh(e,8,this.length),Ou(this,e,!0,52,8)},Vu.prototype.readDoubleBE=function(e,t){return e>>>=0,t||gh(e,8,this.length),Ou(this,e,!1,52,8)},Vu.prototype.writeUintLE=Vu.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){mh(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},Vu.prototype.writeUintBE=Vu.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){mh(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},Vu.prototype.writeUint8=Vu.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||mh(this,e,t,1,255,0),this[t]=255&e,t+1},Vu.prototype.writeUint16LE=Vu.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||mh(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Vu.prototype.writeUint16BE=Vu.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||mh(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Vu.prototype.writeUint32LE=Vu.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||mh(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Vu.prototype.writeUint32BE=Vu.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||mh(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Vu.prototype.writeBigUInt64LE=Dh((function(e,t=0){return vh(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Vu.prototype.writeBigUInt64BE=Dh((function(e,t=0){return yh(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Vu.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);mh(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},Vu.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);mh(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},Vu.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||mh(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Vu.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||mh(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Vu.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||mh(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Vu.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||mh(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Vu.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||mh(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Vu.prototype.writeBigInt64LE=Dh((function(e,t=0){return vh(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Vu.prototype.writeBigInt64BE=Dh((function(e,t=0){return yh(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Vu.prototype.writeFloatLE=function(e,t,n){return bh(this,e,t,!0,n)},Vu.prototype.writeFloatBE=function(e,t,n){return bh(this,e,t,!1,n)},Vu.prototype.writeDoubleLE=function(e,t,n){return wh(this,e,t,!0,n)},Vu.prototype.writeDoubleBE=function(e,t,n){return wh(this,e,t,!1,n)},Vu.prototype.copy=function(e,t,n,r){if(!Vu.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},Vu.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!Vu.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const s=Vu.isBuffer(e)?e:Vu.from(e,r),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};const Eh={};function Ch(e,t,n){Eh[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function Th(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function Ih(e,t,n,r,i,s){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new Eh.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){Sh(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||kh(t,e.length-(n+1))}(r,i,s)}function Sh(e,t){if("number"!=typeof e)throw new Eh.ERR_INVALID_ARG_TYPE(t,"number",e)}function kh(e,t,n){if(Math.floor(e)!==e)throw Sh(e,n),new Eh.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new Eh.ERR_BUFFER_OUT_OF_BOUNDS;throw new Eh.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}Ch("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Ch("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),Ch("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=Th(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=Th(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const xh=/[^+/0-9A-Za-z-_]/g;function Nh(e,t){let n;t=t||1/0;const r=e.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Ah(e){return Ru(function(e){if((e=(e=e.split("=")[0]).trim().replace(xh,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Rh(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function Ph(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Lh(e){return e!=e}const Oh=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function Dh(e){return"undefined"==typeof BigInt?Mh:e}function Mh(){throw new Error("BigInt not supported")}var Fh=Au;function jh(e){return Su.isPlainObject(e)||Su.isArray(e)}function Uh(e){return Su.endsWith(e,"[]")?e.slice(0,-2):e}function qh(e,t,n){return e?e.concat(t).map((function(e,t){return e=Uh(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Bh=Su.toFlatObject(Su,{},null,(function(e){return/^is[A-Z]/.test(e)}));var Hh=function(e,t,n){if(!Su.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Su.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Su.isUndefined(t[e])}))).metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&Su.isSpecCompliantForm(t);if(!Su.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Su.isDate(e))return e.toISOString();if(!a&&Su.isBlob(e))throw new Lu("Blob is not supported. Use a Buffer instead.");return Su.isArrayBuffer(e)||Su.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Fh.from(e):e}function c(e,n,i){let a=e;if(e&&!i&&"object"==typeof e)if(Su.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Su.isArray(e)&&function(e){return Su.isArray(e)&&!e.some(jh)}(e)||(Su.isFileList(e)||Su.endsWith(n,"[]"))&&(a=Su.toArray(e)))return n=Uh(n),a.forEach((function(e,r){!Su.isUndefined(e)&&null!==e&&t.append(!0===o?qh([n],r,s):null===o?n:n+"[]",l(e))})),!1;return!!jh(e)||(t.append(qh(i,n,s),l(e)),!1)}const u=[],h=Object.assign(Bh,{defaultVisitor:c,convertValue:l,isVisitable:jh});if(!Su.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Su.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),Su.forEach(n,(function(n,s){!0===(!(Su.isUndefined(n)||null===n)&&i.call(t,n,Su.isString(s)?s.trim():s,r,h))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function Wh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function $h(e,t){this._pairs=[],e&&Hh(e,this,t)}const zh=$h.prototype;zh.append=function(e,t){this._pairs.push([e,t])},zh.toString=function(e){const t=e?function(t){return e.call(this,t,Wh)}:Wh;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Vh=$h;function Yh(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xh(e,t,n){if(!t)return e;const r=n&&n.encode||Yh,i=n&&n.serialize;let s;if(s=i?i(t,n):Su.isURLSearchParams(t)?t.toString():new Vh(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var Kh=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Su.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},Gh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var Jh={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Vh,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function Qh(e,t){return Hh(e,new Jh.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Jh.isNode&&Su.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}var Zh=function(e){function t(e,n,r,i){let s=e[i++];const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&Su.isArray(r)?r.length:s,a)return Su.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&Su.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],i)&&Su.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}(r[s])),!o}if(Su.isFormData(e)&&Su.isFunction(e.entries)){const n={};return Su.forEachEntry(e,((e,r)=>{t(function(e){return Su.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const ed={"Content-Type":void 0};const td={transitional:Gh,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=Su.isObject(e);i&&Su.isHTMLForm(e)&&(e=new FormData(e));if(Su.isFormData(e))return r&&r?JSON.stringify(Zh(e)):e;if(Su.isArrayBuffer(e)||Su.isBuffer(e)||Su.isStream(e)||Su.isFile(e)||Su.isBlob(e))return e;if(Su.isArrayBufferView(e))return e.buffer;if(Su.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Qh(e,this.formSerializer).toString();if((s=Su.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Hh(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(Su.isString(e))try{return(t||JSON.parse)(e),Su.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||td.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&Su.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw Lu.from(e,Lu.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jh.classes.FormData,Blob:Jh.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Su.forEach(["delete","get","head"],(function(e){td.headers[e]={}})),Su.forEach(["post","put","patch"],(function(e){td.headers[e]=Su.merge(ed)}));var nd=td;const rd=Su.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var id=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&rd[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const sd=Symbol("internals");function od(e){return e&&String(e).trim().toLowerCase()}function ad(e){return!1===e||null==e?e:Su.isArray(e)?e.map(ad):String(e)}function ld(e,t,n,r,i){return Su.isFunction(r)?r.call(this,t,n):(i&&(t=n),Su.isString(t)?Su.isString(r)?-1!==t.indexOf(r):Su.isRegExp(r)?r.test(t):void 0:void 0)}let cd=Symbol.iterator,ud=Symbol.toStringTag;class hd{set(e,t,n){const r=this;function i(e,t,n){const i=od(t);if(!i)throw new Error("header name must be a non-empty string");const s=Su.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ad(e))}const s=(e,t)=>Su.forEach(e,((e,n)=>i(e,n,t)));return Su.isPlainObject(e)||e instanceof this.constructor?s(e,t):Su.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s(id(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=od(e)){const n=Su.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Su.isFunction(t))return t.call(this,e,n);if(Su.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=od(e)){const n=Su.findKey(this,e);return!(!n||void 0===this[n]||t&&!ld(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=od(e)){const i=Su.findKey(n,e);!i||t&&!ld(0,n[i],i,t)||(delete n[i],r=!0)}}return Su.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!ld(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return Su.forEach(this,((r,i)=>{const s=Su.findKey(n,i);if(s)return t[s]=ad(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=ad(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Su.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Su.isArray(n)?n.join(", "):n)})),t}[cd](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[ud](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[sd]=this[sd]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=od(e);t[r]||(!function(e,t){const n=Su.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return Su.isArray(e)?e.forEach(r):r(e),this}constructor(e){e&&this.set(e)}}hd.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Su.freezeMethods(hd.prototype),Su.freezeMethods(hd);var dd=hd;function fd(e,t){const n=this||nd,r=t||n,i=dd.from(r.headers);let s=r.data;return Su.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function pd(e){return!(!e||!e.__CANCEL__)}function gd(e,t,n){Lu.call(this,null==e?"canceled":e,Lu.ERR_CANCELED,t,n),this.name="CanceledError"}Su.inherits(gd,Lu,{__CANCEL__:!0});var md=gd;function vd(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Lu("Request failed with status code "+n.status,[Lu.ERR_BAD_REQUEST,Lu.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var yd=Jh.isStandardBrowserEnv?{write:function(e,t,n,r,i,s){const o=[];o.push(e+"="+encodeURIComponent(t)),Su.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),Su.isString(r)&&o.push("path="+r),Su.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function _d(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function bd(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?_d(e,t):t}var wd=Jh.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=Su.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Ed(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var Cd=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=r[o];i||(i=l),n[s]=a,r[s]=l;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}};function Td(e,t){let n=0;const r=Cd(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}var Id="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const i=dd.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}Su.isFormData(r)&&(Jh.isStandardBrowserEnv||Jh.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const c=bd(e.baseURL,e.url);function u(){if(!l)return;const r=dd.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());vd((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),Xh(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new Lu("Request aborted",Lu.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new Lu("Network Error",Lu.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Gh;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Lu(t,r.clarifyTimeoutError?Lu.ETIMEDOUT:Lu.ECONNABORTED,e,l)),l=null},Jh.isStandardBrowserEnv){const t=(e.withCredentials||wd(c))&&e.xsrfCookieName&&yd.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in l&&Su.forEach(i.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),Su.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&"json"!==s&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",Td(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Td(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{l&&(n(!t||t.type?new md(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=Ed(c);h&&-1===Jh.protocols.indexOf(h)?n(new Lu("Unsupported protocol "+h+":",Lu.ERR_BAD_REQUEST,e)):l.send(r||null)}))};const Sd={http:null,xhr:Id};Su.forEach(Sd,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var kd={getAdapter:e=>{e=Su.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=Su.isString(n)?Sd[n.toLowerCase()]:n));i++);if(!r){if(!1===r)throw new Lu(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(Su.hasOwnProp(Sd,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!Su.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Sd};function xd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new md(null,e)}function Nd(e){xd(e),e.headers=dd.from(e.headers),e.data=fd.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return kd.getAdapter(e.adapter||nd.adapter)(e).then((function(t){return xd(e),t.data=fd.call(e,e.transformResponse,t),t.headers=dd.from(t.headers),t}),(function(t){return pd(t)||(xd(e),t&&t.response&&(t.response.data=fd.call(e,e.transformResponse,t.response),t.response.headers=dd.from(t.response.headers))),Promise.reject(t)}))}const Ad=e=>e instanceof dd?e.toJSON():e;function Rd(e,t){t=t||{};const n={};function r(e,t,n){return Su.isPlainObject(e)&&Su.isPlainObject(t)?Su.merge.call({caseless:n},e,t):Su.isPlainObject(t)?Su.merge({},t):Su.isArray(t)?t.slice():t}function i(e,t,n){return Su.isUndefined(t)?Su.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!Su.isUndefined(t))return r(void 0,t)}function o(e,t){return Su.isUndefined(t)?Su.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(Ad(e),Ad(t),!0)};return Su.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=l[r]||i,o=s(e[r],t[r],r);Su.isUndefined(o)&&s!==a||(n[r]=o)})),n}const Pd={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Pd[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ld={};Pd.transitional=function(e,t,n){function r(e,t){return"[Axios v1.3.4] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new Lu(r(i," has been removed"+(t?" in "+t:"")),Lu.ERR_DEPRECATED);return t&&!Ld[i]&&(Ld[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var Od={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Lu("options must be an object",Lu.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new Lu("option "+s+" must be "+n,Lu.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Lu("Unknown option "+s,Lu.ERR_BAD_OPTION)}},validators:Pd};const Dd=Od.validators;class Md{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Rd(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;let s;void 0!==n&&Od.assertOptions(n,{silentJSONParsing:Dd.transitional(Dd.boolean),forcedJSONParsing:Dd.transitional(Dd.boolean),clarifyTimeoutError:Dd.transitional(Dd.boolean)},!1),void 0!==r&&Od.assertOptions(r,{encode:Dd.function,serialize:Dd.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=i&&Su.merge(i.common,i[t.method]),s&&Su.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=dd.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[Nd.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);h<u;)c=c.then(e[h++],e[h++]);return c}u=o.length;let d=t;for(h=0;h<u;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{c=Nd.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=l.length;h<u;)c=c.then(l[h++],l[h++]);return c}getUri(e){return Xh(bd((e=Rd(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new Kh,response:new Kh}}}Su.forEach(["delete","get","head","options"],(function(e){Md.prototype[e]=function(t,n){return this.request(Rd(n||{},{method:e,url:t,data:(n||{}).data}))}})),Su.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Rd(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Md.prototype[e]=t(),Md.prototype[e+"Form"]=t(!0)}));var Fd=Md;class jd{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new jd((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new md(e,r,i),t(n.reason))}))}}var Ud=jd;const qd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qd).forEach((([e,t])=>{qd[t]=e}));var Bd=qd;const Hd=function e(t){const n=new Fd(t),r=Kc(Fd.prototype.request,n);return Su.extend(r,Fd.prototype,n,{allOwnKeys:!0}),Su.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Rd(t,n))},r}(nd);Hd.Axios=Fd,Hd.CanceledError=md,Hd.CancelToken=Ud,Hd.isCancel=pd,Hd.VERSION="1.3.4",Hd.toFormData=Hh,Hd.AxiosError=Lu,Hd.Cancel=Hd.CanceledError,Hd.all=function(e){return Promise.all(e)},Hd.spread=function(e){return function(t){return e.apply(null,t)}},Hd.isAxiosError=function(e){return Su.isObject(e)&&!0===e.isAxiosError},Hd.mergeConfig=Rd,Hd.AxiosHeaders=dd,Hd.formToJSON=e=>Zh(Su.isHTMLForm(e)?new FormData(e):e),Hd.HttpStatusCode=Bd,Hd.default=Hd;var Wd=Hd;const{Axios:$d,AxiosError:zd,CanceledError:Vd,isCancel:Yd,CancelToken:Xd,VERSION:Kd,all:Gd,Cancel:Jd,isAxiosError:Qd,spread:Zd,toFormData:ef,AxiosHeaders:tf,HttpStatusCode:nf,formToJSON:rf,mergeConfig:sf}=Wd,of=({cocktailId:e})=>Wd.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${e}`),af=({ingredientName:e})=>Wd.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${e}`);const lf=e=>{const t=Wd.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`),n=Wd.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e}`);return Promise.all([t,n])};
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function cf(e){return getComputedStyle(e)}function uf(e,t){for(var n in t){var r=t[n];"number"==typeof r&&(r+="px"),e.style[n]=r}return e}function hf(e){var t=document.createElement("div");return t.className=e,t}var df="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function ff(e,t){if(!df)throw new Error("No element matching method supported");return df.call(e,t)}function pf(e){e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e)}function gf(e,t){return Array.prototype.filter.call(e.children,(function(e){return ff(e,t)}))}var mf="ps",vf="ps__rtl",yf={thumb:function(e){return"ps__thumb-"+e},rail:function(e){return"ps__rail-"+e},consuming:"ps__child--consume"},_f={focus:"ps--focus",clicking:"ps--clicking",active:function(e){return"ps--active-"+e},scrolling:function(e){return"ps--scrolling-"+e}},bf={x:null,y:null};function wf(e,t){var n=e.element.classList,r=_f.scrolling(t);n.contains(r)?clearTimeout(bf[t]):n.add(r)}function Ef(e,t){bf[t]=setTimeout((function(){return e.isAlive&&e.element.classList.remove(_f.scrolling(t))}),e.settings.scrollingThreshold)}var Cf=function(e){this.element=e,this.handlers={}},Tf={isEmpty:{configurable:!0}};Cf.prototype.bind=function(e,t){void 0===this.handlers[e]&&(this.handlers[e]=[]),this.handlers[e].push(t),this.element.addEventListener(e,t,!1)},Cf.prototype.unbind=function(e,t){var n=this;this.handlers[e]=this.handlers[e].filter((function(r){return!(!t||r===t)||(n.element.removeEventListener(e,r,!1),!1)}))},Cf.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)},Tf.isEmpty.get=function(){var e=this;return Object.keys(this.handlers).every((function(t){return 0===e.handlers[t].length}))},Object.defineProperties(Cf.prototype,Tf);var If=function(){this.eventElements=[]};function Sf(e){if("function"==typeof window.CustomEvent)return new CustomEvent(e);var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,void 0),t}function kf(e,t,n,r,i){var s;if(void 0===r&&(r=!0),void 0===i&&(i=!1),"top"===t)s=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==t)throw new Error("A proper axis should be provided");s=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(e,t,n,r,i){var s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],u=n[5];void 0===r&&(r=!0);void 0===i&&(i=!1);var h=e.element;e.reach[l]=null,h[a]<1&&(e.reach[l]="start");h[a]>e[s]-e[o]-1&&(e.reach[l]="end");t&&(h.dispatchEvent(Sf("ps-scroll-"+l)),t<0?h.dispatchEvent(Sf("ps-scroll-"+c)):t>0&&h.dispatchEvent(Sf("ps-scroll-"+u)),r&&function(e,t){wf(e,t),Ef(e,t)}(e,l));e.reach[l]&&(t||i)&&h.dispatchEvent(Sf("ps-"+l+"-reach-"+e.reach[l]))}(e,n,s,r,i)}function xf(e){return parseInt(e,10)||0}If.prototype.eventElement=function(e){var t=this.eventElements.filter((function(t){return t.element===e}))[0];return t||(t=new Cf(e),this.eventElements.push(t)),t},If.prototype.bind=function(e,t,n){this.eventElement(e).bind(t,n)},If.prototype.unbind=function(e,t,n){var r=this.eventElement(e);r.unbind(t,n),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)},If.prototype.unbindAll=function(){this.eventElements.forEach((function(e){return e.unbindAll()})),this.eventElements=[]},If.prototype.once=function(e,t,n){var r=this.eventElement(e),i=function(e){r.unbind(t,i),n(e)};r.bind(t,i)};var Nf={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function Af(e){var t=e.element,n=Math.floor(t.scrollTop),r=t.getBoundingClientRect();e.containerWidth=Math.round(r.width),e.containerHeight=Math.round(r.height),e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight,t.contains(e.scrollbarXRail)||(gf(t,yf.rail("x")).forEach((function(e){return pf(e)})),t.appendChild(e.scrollbarXRail)),t.contains(e.scrollbarYRail)||(gf(t,yf.rail("y")).forEach((function(e){return pf(e)})),t.appendChild(e.scrollbarYRail)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=Rf(e,xf(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=xf((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=Rf(e,xf(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=xf(n*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),function(e,t){var n={width:t.railXWidth},r=Math.floor(e.scrollTop);t.isRtl?n.left=t.negativeScrollAdjustment+e.scrollLeft+t.containerWidth-t.contentWidth:n.left=e.scrollLeft;t.isScrollbarXUsingBottom?n.bottom=t.scrollbarXBottom-r:n.top=t.scrollbarXTop+r;uf(t.scrollbarXRail,n);var i={top:r,height:t.railYHeight};t.isScrollbarYUsingRight?t.isRtl?i.right=t.contentWidth-(t.negativeScrollAdjustment+e.scrollLeft)-t.scrollbarYRight-t.scrollbarYOuterWidth-9:i.right=t.scrollbarYRight-e.scrollLeft:t.isRtl?i.left=t.negativeScrollAdjustment+e.scrollLeft+2*t.containerWidth-t.contentWidth-t.scrollbarYLeft-t.scrollbarYOuterWidth:i.left=t.scrollbarYLeft+e.scrollLeft;uf(t.scrollbarYRail,i),uf(t.scrollbarX,{left:t.scrollbarXLeft,width:t.scrollbarXWidth-t.railBorderXWidth}),uf(t.scrollbarY,{top:t.scrollbarYTop,height:t.scrollbarYHeight-t.railBorderYWidth})}(t,e),e.scrollbarXActive?t.classList.add(_f.active("x")):(t.classList.remove(_f.active("x")),e.scrollbarXWidth=0,e.scrollbarXLeft=0,t.scrollLeft=!0===e.isRtl?e.contentWidth:0),e.scrollbarYActive?t.classList.add(_f.active("y")):(t.classList.remove(_f.active("y")),e.scrollbarYHeight=0,e.scrollbarYTop=0,t.scrollTop=0)}function Rf(e,t){return e.settings.minScrollbarLength&&(t=Math.max(t,e.settings.minScrollbarLength)),e.settings.maxScrollbarLength&&(t=Math.min(t,e.settings.maxScrollbarLength)),t}function Pf(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=e.element,d=null,f=null,p=null;function g(t){t.touches&&t.touches[0]&&(t[i]=t.touches[0].pageY),h[l]=d+p*(t[i]-f),wf(e,c),Af(e),t.stopPropagation(),t.type.startsWith("touch")&&t.changedTouches.length>1&&t.preventDefault()}function m(){Ef(e,c),e[u].classList.remove(_f.clicking),e.event.unbind(e.ownerDocument,"mousemove",g)}function v(t,o){d=h[l],o&&t.touches&&(t[i]=t.touches[0].pageY),f=t[i],p=(e[r]-e[n])/(e[s]-e[a]),o?e.event.bind(e.ownerDocument,"touchmove",g):(e.event.bind(e.ownerDocument,"mousemove",g),e.event.once(e.ownerDocument,"mouseup",m),t.preventDefault()),e[u].classList.add(_f.clicking),t.stopPropagation()}e.event.bind(e[o],"mousedown",(function(e){v(e)})),e.event.bind(e[o],"touchstart",(function(e){v(e,!0)}))}var Lf={"click-rail":function(e){e.element,e.event.bind(e.scrollbarY,"mousedown",(function(e){return e.stopPropagation()})),e.event.bind(e.scrollbarYRail,"mousedown",(function(t){var n=t.pageY-window.pageYOffset-e.scrollbarYRail.getBoundingClientRect().top>e.scrollbarYTop?1:-1;e.element.scrollTop+=n*e.containerHeight,Af(e),t.stopPropagation()})),e.event.bind(e.scrollbarX,"mousedown",(function(e){return e.stopPropagation()})),e.event.bind(e.scrollbarXRail,"mousedown",(function(t){var n=t.pageX-window.pageXOffset-e.scrollbarXRail.getBoundingClientRect().left>e.scrollbarXLeft?1:-1;e.element.scrollLeft+=n*e.containerWidth,Af(e),t.stopPropagation()}))},"drag-thumb":function(e){Pf(e,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),Pf(e,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(e){var t=e.element;e.event.bind(e.ownerDocument,"keydown",(function(n){if(!(n.isDefaultPrevented&&n.isDefaultPrevented()||n.defaultPrevented)&&(ff(t,":hover")||ff(e.scrollbarX,":focus")||ff(e.scrollbarY,":focus"))){var r,i=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(i){if("IFRAME"===i.tagName)i=i.contentDocument.activeElement;else for(;i.shadowRoot;)i=i.shadowRoot.activeElement;if(ff(r=i,"input,[contenteditable]")||ff(r,"select,[contenteditable]")||ff(r,"textarea,[contenteditable]")||ff(r,"button,[contenteditable]"))return}var s=0,o=0;switch(n.which){case 37:s=n.metaKey?-e.contentWidth:n.altKey?-e.containerWidth:-30;break;case 38:o=n.metaKey?e.contentHeight:n.altKey?e.containerHeight:30;break;case 39:s=n.metaKey?e.contentWidth:n.altKey?e.containerWidth:30;break;case 40:o=n.metaKey?-e.contentHeight:n.altKey?-e.containerHeight:-30;break;case 32:o=n.shiftKey?e.containerHeight:-e.containerHeight;break;case 33:o=e.containerHeight;break;case 34:o=-e.containerHeight;break;case 36:o=e.contentHeight;break;case 35:o=-e.contentHeight;break;default:return}e.settings.suppressScrollX&&0!==s||e.settings.suppressScrollY&&0!==o||(t.scrollTop-=o,t.scrollLeft+=s,Af(e),function(n,r){var i=Math.floor(t.scrollTop);if(0===n){if(!e.scrollbarYActive)return!1;if(0===i&&r>0||i>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var s=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===s&&n<0||s>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}(s,o)&&n.preventDefault())}}))},wheel:function(e){var t=e.element;function n(n){var r=function(e){var t=e.deltaX,n=-1*e.deltaY;return void 0!==t&&void 0!==n||(t=-1*e.wheelDeltaX/6,n=e.wheelDeltaY/6),e.deltaMode&&1===e.deltaMode&&(t*=10,n*=10),t!=t&&n!=n&&(t=0,n=e.wheelDelta),e.shiftKey?[-n,-t]:[t,n]}(n),i=r[0],s=r[1];if(!function(e,n,r){if(!Nf.isWebKit&&t.querySelector("select:focus"))return!0;if(!t.contains(e))return!1;for(var i=e;i&&i!==t;){if(i.classList.contains(yf.consuming))return!0;var s=cf(i);if(r&&s.overflowY.match(/(scroll|auto)/)){var o=i.scrollHeight-i.clientHeight;if(o>0&&(i.scrollTop>0&&r<0||i.scrollTop<o&&r>0))return!0}if(n&&s.overflowX.match(/(scroll|auto)/)){var a=i.scrollWidth-i.clientWidth;if(a>0&&(i.scrollLeft>0&&n<0||i.scrollLeft<a&&n>0))return!0}i=i.parentNode}return!1}(n.target,i,s)){var o=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(s?t.scrollTop-=s*e.settings.wheelSpeed:t.scrollTop+=i*e.settings.wheelSpeed,o=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(i?t.scrollLeft+=i*e.settings.wheelSpeed:t.scrollLeft-=s*e.settings.wheelSpeed,o=!0):(t.scrollTop-=s*e.settings.wheelSpeed,t.scrollLeft+=i*e.settings.wheelSpeed),Af(e),o=o||function(n,r){var i=Math.floor(t.scrollTop),s=0===t.scrollTop,o=i+t.offsetHeight===t.scrollHeight,a=0===t.scrollLeft,l=t.scrollLeft+t.offsetWidth===t.scrollWidth;return!(Math.abs(r)>Math.abs(n)?s||o:a||l)||!e.settings.wheelPropagation}(i,s),o&&!n.ctrlKey&&(n.stopPropagation(),n.preventDefault())}}void 0!==window.onwheel?e.event.bind(t,"wheel",n):void 0!==window.onmousewheel&&e.event.bind(t,"mousewheel",n)},touch:function(e){if(Nf.supportsTouch||Nf.supportsIePointer){var t=e.element,n={},r=0,i={},s=null;Nf.supportsTouch?(e.event.bind(t,"touchstart",c),e.event.bind(t,"touchmove",u),e.event.bind(t,"touchend",h)):Nf.supportsIePointer&&(window.PointerEvent?(e.event.bind(t,"pointerdown",c),e.event.bind(t,"pointermove",u),e.event.bind(t,"pointerup",h)):window.MSPointerEvent&&(e.event.bind(t,"MSPointerDown",c),e.event.bind(t,"MSPointerMove",u),e.event.bind(t,"MSPointerUp",h)))}function o(n,r){t.scrollTop-=r,t.scrollLeft-=n,Af(e)}function a(e){return e.targetTouches?e.targetTouches[0]:e}function l(e){return(!e.pointerType||"pen"!==e.pointerType||0!==e.buttons)&&(!(!e.targetTouches||1!==e.targetTouches.length)||!(!e.pointerType||"mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))}function c(e){if(l(e)){var t=a(e);n.pageX=t.pageX,n.pageY=t.pageY,r=(new Date).getTime(),null!==s&&clearInterval(s)}}function u(s){if(l(s)){var c=a(s),u={pageX:c.pageX,pageY:c.pageY},h=u.pageX-n.pageX,d=u.pageY-n.pageY;if(function(e,n,r){if(!t.contains(e))return!1;for(var i=e;i&&i!==t;){if(i.classList.contains(yf.consuming))return!0;var s=cf(i);if(r&&s.overflowY.match(/(scroll|auto)/)){var o=i.scrollHeight-i.clientHeight;if(o>0&&(i.scrollTop>0&&r<0||i.scrollTop<o&&r>0))return!0}if(n&&s.overflowX.match(/(scroll|auto)/)){var a=i.scrollWidth-i.clientWidth;if(a>0&&(i.scrollLeft>0&&n<0||i.scrollLeft<a&&n>0))return!0}i=i.parentNode}return!1}(s.target,h,d))return;o(h,d),n=u;var f=(new Date).getTime(),p=f-r;p>0&&(i.x=h/p,i.y=d/p,r=f),function(n,r){var i=Math.floor(t.scrollTop),s=t.scrollLeft,o=Math.abs(n),a=Math.abs(r);if(a>o){if(r<0&&i===e.contentHeight-e.containerHeight||r>0&&0===i)return 0===window.scrollY&&r>0&&Nf.isChrome}else if(o>a&&(n<0&&s===e.contentWidth-e.containerWidth||n>0&&0===s))return!0;return!0}(h,d)&&s.preventDefault()}}function h(){e.settings.swipeEasing&&(clearInterval(s),s=setInterval((function(){e.isInitialized?clearInterval(s):i.x||i.y?Math.abs(i.x)<.01&&Math.abs(i.y)<.01?clearInterval(s):e.element?(o(30*i.x,30*i.y),i.x*=.8,i.y*=.8):clearInterval(s):clearInterval(s)}),10))}}},Of=function(e,t){var n=this;if(void 0===t&&(t={}),"string"==typeof e&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var r in this.element=e,e.classList.add(mf),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},t)this.settings[r]=t[r];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var i,s,o=function(){return e.classList.add(_f.focus)},a=function(){return e.classList.remove(_f.focus)};this.isRtl="rtl"===cf(e).direction,!0===this.isRtl&&e.classList.add(vf),this.isNegativeScroll=(s=e.scrollLeft,e.scrollLeft=-1,i=e.scrollLeft<0,e.scrollLeft=s,i),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new If,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=hf(yf.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=hf(yf.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",o),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var l=cf(this.scrollbarXRail);this.scrollbarXBottom=parseInt(l.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=xf(l.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=xf(l.borderLeftWidth)+xf(l.borderRightWidth),uf(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=xf(l.marginLeft)+xf(l.marginRight),uf(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=hf(yf.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=hf(yf.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",o),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var c=cf(this.scrollbarYRail);this.scrollbarYRight=parseInt(c.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=xf(c.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(e){var t=cf(e);return xf(t.width)+xf(t.paddingLeft)+xf(t.paddingRight)+xf(t.borderLeftWidth)+xf(t.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=xf(c.borderTopWidth)+xf(c.borderBottomWidth),uf(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=xf(c.marginTop)+xf(c.marginBottom),uf(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(e){return Lf[e](n)})),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",(function(e){return n.onScroll(e)})),Af(this)};Of.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,uf(this.scrollbarXRail,{display:"block"}),uf(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=xf(cf(this.scrollbarXRail).marginLeft)+xf(cf(this.scrollbarXRail).marginRight),this.railYMarginHeight=xf(cf(this.scrollbarYRail).marginTop)+xf(cf(this.scrollbarYRail).marginBottom),uf(this.scrollbarXRail,{display:"none"}),uf(this.scrollbarYRail,{display:"none"}),Af(this),kf(this,"top",0,!1,!0),kf(this,"left",0,!1,!0),uf(this.scrollbarXRail,{display:""}),uf(this.scrollbarYRail,{display:""}))},Of.prototype.onScroll=function(e){this.isAlive&&(Af(this),kf(this,"top",this.element.scrollTop-this.lastScrollTop),kf(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},Of.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),pf(this.scrollbarX),pf(this.scrollbarY),pf(this.scrollbarXRail),pf(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},Of.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(e){return!e.match(/^ps([-_].+|)$/)})).join(" ")};var Df=Of;const Mf={modalWindow:document.querySelector("[data-modal-ingredient-window]"),modalContentEl:document.querySelector("[data-modal-ingredient-content]"),modal:document.querySelector("[data-modal-ingredient]"),modalCocktail:document.querySelector(".modal-cocktail"),galleryListEl:document.querySelector(".gallery-list")},Ff=new Df(Mf.modalWindow,{wheelSpeed:.1,swipeEasing:"linear"});Mf.modalCocktail.addEventListener("click",(e=>{if(!e.target.hasAttribute("data-ingredientname"))return;const t=e.target.getAttribute("data-ingredientname");Mf.modalContentEl.innerHTML=Pc,Mf.modal.classList.toggle("is-hidden"),af({ingredientName:t}).then((e=>{jf(e.data.ingredients[0])})).catch((e=>{console.log(e)}))})),Mf.galleryListEl.addEventListener("click",(e=>{if(e.target.classList.contains("button-more")&&e.target.hasAttribute("data-ingredientname")){Mf.modalContentEl.innerHTML=Pc,Mf.modal.classList.toggle("is-hidden");const t=e.target.getAttribute("data-ingredientname");af({ingredientName:t}).then((e=>{jf(e.data.ingredients[0])})).catch((e=>{console.log(e)}))}}));const jf=e=>{Mf.modalWindow.scrollTop=0;const t={id:e.idIngredient,country:"",alcohol:e.strAlcohol,title:e.strIngredient,subtitle:"",description:e.strDescription,abv:e.strABV,type:e.strType,ingredient:e.strIngredient},n=Rc(t);Mf.modalContentEl.innerHTML=n,Uf()},Uf=()=>{Ff.update()},qf={galleryListEl:document.querySelector(".gallery-list"),modal:document.querySelector("[data-modal-cocktail]"),modalWindow:document.querySelector("[data-modal-cocktail-window]"),modalContentEl:document.querySelector("[data-modal-cocktail-content]")},Bf=new Df(qf.modalWindow);qf.galleryListEl.addEventListener("click",(e=>{if(e.target.classList.contains("button-more")&&e.target.hasAttribute("data-cocktailid")){qf.modalContentEl.innerHTML=Pc,qf.modal.classList.toggle("is-hidden");const t=e.target.dataset.cocktailid;of({cocktailId:t}).then((e=>{Hf(e.data.drinks[0])})).catch((e=>{console.log(e)}))}}));const Hf=e=>{qf.modalWindow.scrollTop=0;const t=[];for(let n=1;n<=15;n++)e[`strIngredient${n}`]&&t.push(e[`strIngredient${n}`]);const n={id:e.idDrink,title:e.strDrink,image:e.strDrinkThumb,alcohol:e.strAlcoholic,category:e.strCategory,instructions:e.strInstructions,ingredients:t},r=Ac(n);qf.modalContentEl.innerHTML=r,Wf()},Wf=()=>{Bf.update()},$f={modal:document.querySelector("[data-modal-authentication]"),joinModalBtn:document.querySelector("[data-modal-authentication-join]"),loginModalBtn:document.querySelector("[data-modal-authentication-login]"),loginForm:document.querySelector("[data-login-form]"),joinForm:document.querySelector("[data-join-form]")};function zf(e){return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`).then((e=>e.json())).then((e=>e)).catch((e=>{console.log(e)}))}$f.joinModalBtn.addEventListener("click",(()=>{$f.loginForm.classList.toggle("visually-hidden"),$f.joinForm.classList.toggle("visually-hidden")})),$f.loginModalBtn.addEventListener("click",(()=>{$f.loginForm.classList.toggle("visually-hidden"),$f.joinForm.classList.toggle("visually-hidden")})),function(){const e=document.querySelector(".back-to-top");window.addEventListener("scroll",(()=>{window.scrollY>=50?e.style.opacity=1:e.style.opacity=0})),e.addEventListener("click",(e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))}();document.querySelector(".gallery-list");const Vf=window.location.pathname.replace("/goit_js_team_project","");"/"!==Vf&&"/index.html"!==Vf||function(){const e=[];for(let t=0;t<9;t+=1)e.push(Wd.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((e=>e.data.drinks[0])).catch());Promise.all(e).then((e=>{yc(e)})).catch()}();var Yf={};
/*!
 * jQuery JavaScript Library v3.6.3
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-20T21:28Z
 */!function(e,t){"object"==typeof Yf?Yf=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:Yf,(function(e,t){var n=[],r=Object.getPrototypeOf,i=n.slice,s=n.flat?function(e){return n.flat.call(e)}:function(e){return n.concat.apply([],e)},o=n.push,a=n.indexOf,l={},c=l.toString,u=l.hasOwnProperty,h=u.toString,d=h.call(Object),f={},p=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},g=function(e){return null!=e&&e===e.window},m=e.document,v={type:!0,src:!0,nonce:!0,noModule:!0};function y(e,t,n){var r,i,s=(n=n||m).createElement("script");if(s.text=e,t)for(r in v)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&s.setAttribute(r,i);n.head.appendChild(s).parentNode.removeChild(s)}function _(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.6.3",w=function(e,t){return new w.fn.init(e,t)};function E(e){var t=!!e&&"length"in e&&e.length,n=_(e);return!p(e)&&!g(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}w.fn=w.prototype={jquery:b,constructor:w,length:0,toArray:function(){return i.call(this)},get:function(e){return null==e?i.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(w.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(w.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:o,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,s,o=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[a]||{},a++),"object"==typeof o||p(o)||(o={}),a===l&&(o=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)r=e[t],"__proto__"!==t&&o!==r&&(c&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(n=o[t],s=i&&!Array.isArray(n)?[]:i||w.isPlainObject(n)?n:{},i=!1,o[t]=w.extend(c,s,r)):void 0!==r&&(o[t]=r));return o},w.extend({expando:"jQuery"+(b+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=r(e))||"function"==typeof(n=u.call(t,"constructor")&&t.constructor)&&h.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){y(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(E(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(E(Object(e))?w.merge(n,"string"==typeof e?[e]:e):o.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:a.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,s=e.length,o=!n;i<s;i++)!t(e[i],i)!==o&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(E(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return s(a)},guid:1,support:f}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){l["[object "+t+"]"]=t.toLowerCase()}));var C=
/*!
 * Sizzle CSS Selector Engine v2.3.9
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2022-12-19
 */
function(e){var t,n,r,i,s,o,a,l,c,u,h,d,f,p,g,m,v,y,_,b="sizzle"+1*new Date,w=e.document,E=0,C=0,T=le(),I=le(),S=le(),k=le(),x=function(e,t){return e===t&&(h=!0),0},N={}.hasOwnProperty,A=[],R=A.pop,P=A.push,L=A.push,O=A.slice,D=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\\x20\\t\\r\\n\\f]",j="(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",U="\\[[\\x20\\t\\r\\n\\f]*("+j+")(?:"+F+"*([*^$|!~]?=)"+F+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+j+"))|)"+F+"*\\]",q=":("+j+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+U+")*)|.*)\\)|)",B=new RegExp(F+"+","g"),H=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),W=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),$=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),z=new RegExp(F+"|>"),V=new RegExp(q),Y=new RegExp("^"+j+"$"),X={ID:new RegExp("^#("+j+")"),CLASS:new RegExp("^\\.("+j+")"),TAG:new RegExp("^("+j+"|[*])"),ATTR:new RegExp("^"+U),PSEUDO:new RegExp("^"+q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},K=/HTML$/i,G=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},se=function(){d()},oe=be((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{L.apply(A=O.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){P.apply(e,O.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ae(e,t,r,i){var s,a,c,u,h,p,v,y=t&&t.ownerDocument,w=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return r;if(!i&&(d(t),t=t||f,g)){if(11!==w&&(h=Z.exec(e)))if(s=h[1]){if(9===w){if(!(c=t.getElementById(s)))return r;if(c.id===s)return r.push(c),r}else if(y&&(c=y.getElementById(s))&&_(t,c)&&c.id===s)return r.push(c),r}else{if(h[2])return L.apply(r,t.getElementsByTagName(e)),r;if((s=h[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(s)),r}if(n.qsa&&!k[e+" "]&&(!m||!m.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(v=e,y=t,1===w&&(z.test(e)||$.test(e))){for((y=ee.test(e)&&ve(t.parentNode)||t)===t&&n.scope||((u=t.getAttribute("id"))?u=u.replace(re,ie):t.setAttribute("id",u=b)),a=(p=o(e)).length;a--;)p[a]=(u?"#"+u:":scope")+" "+_e(p[a]);v=p.join(",")}try{if(n.cssSupportsSelector&&!CSS.supports("selector(:is("+v+"))"))throw new Error;return L.apply(r,y.querySelectorAll(v)),r}catch(t){k(e,!0)}finally{u===b&&t.removeAttribute("id")}}}return l(e.replace(H,"$1"),t,r,i)}function le(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function ce(e){return e[b]=!0,e}function ue(e){var t=f.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function he(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function de(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&oe(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return ce((function(t){return t=+t,ce((function(n,r){for(var i,s=e([],n.length,t),o=s.length;o--;)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))}))}))}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ae.support={},s=ae.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!K.test(t||n&&n.nodeName||"HTML")},d=ae.setDocument=function(e){var t,i,o=e?e.ownerDocument||e:w;return o!=f&&9===o.nodeType&&o.documentElement?(p=(f=o).documentElement,g=!s(f),w!=f&&(i=f.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",se,!1):i.attachEvent&&i.attachEvent("onunload",se)),n.scope=ue((function(e){return p.appendChild(e).appendChild(f.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.cssSupportsSelector=ue((function(){return CSS.supports("selector(*)")&&f.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")})),n.attributes=ue((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ue((function(e){return e.appendChild(f.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=Q.test(f.getElementsByClassName),n.getById=ue((function(e){return p.appendChild(e).id=b,!f.getElementsByName||!f.getElementsByName(b).length})),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,r,i,s=t.getElementById(e);if(s){if((n=s.getAttributeNode("id"))&&n.value===e)return[s];for(i=t.getElementsByName(e),r=0;s=i[r++];)if((n=s.getAttributeNode("id"))&&n.value===e)return[s]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,s=t.getElementsByTagName(e);if("*"===e){for(;n=s[i++];)1===n.nodeType&&r.push(n);return r}return s},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=Q.test(f.querySelectorAll))&&(ue((function(e){var t;p.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|"+M+")"),e.querySelectorAll("[id~="+b+"-]").length||m.push("~="),(t=f.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),ue((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=f.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=Q.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&ue((function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",q)})),n.cssSupportsSelector||m.push(":has"),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(p.compareDocumentPosition),_=t||Q.test(p.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},x=t?function(e,t){if(e===t)return h=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==f||e.ownerDocument==w&&_(w,e)?-1:t==f||t.ownerDocument==w&&_(w,t)?1:u?D(u,e)-D(u,t):0:4&r?-1:1)}:function(e,t){if(e===t)return h=!0,0;var n,r=0,i=e.parentNode,s=t.parentNode,o=[e],a=[t];if(!i||!s)return e==f?-1:t==f?1:i?-1:s?1:u?D(u,e)-D(u,t):0;if(i===s)return de(e,t);for(n=e;n=n.parentNode;)o.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;o[r]===a[r];)r++;return r?de(o[r],a[r]):o[r]==w?-1:a[r]==w?1:0},f):f},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if(d(e),n.matchesSelector&&g&&!k[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){k(t,!0)}return ae(t,f,null,[e]).length>0},ae.contains=function(e,t){return(e.ownerDocument||e)!=f&&d(e),_(e,t)},ae.attr=function(e,t){(e.ownerDocument||e)!=f&&d(e);var i=r.attrHandle[t.toLowerCase()],s=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==s?s:n.attributes||!g?e.getAttribute(t):(s=e.getAttributeNode(t))&&s.specified?s.value:null},ae.escape=function(e){return(e+"").replace(re,ie)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ae.uniqueSort=function(e){var t,r=[],i=0,s=0;if(h=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort(x),h){for(;t=e[s++];)t===e[s]&&(i=r.push(s));for(;i--;)e.splice(r[i],1)}return u=null,e},i=ae.getText=function(e){var t,n="",r=0,s=e.nodeType;if(s){if(1===s||9===s||11===s){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===s||4===s)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},r=ae.selectors={cacheLength:50,createPseudo:ce,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return X.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=o(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=T[e+" "];return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"("+F+"|$)"),T(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})))},ATTR:function(e,t,n){return function(r){var i=ae.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(B," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var s="nth"!==e.slice(0,3),o="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var c,u,h,d,f,p,g=s!==o?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,_=!1;if(m){if(s){for(;g;){for(d=t;d=d[g];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[o?m.firstChild:m.lastChild],o&&y){for(_=(f=(c=(u=(h=(d=m)[b]||(d[b]={}))[d.uniqueID]||(h[d.uniqueID]={}))[e]||[])[0]===E&&c[1])&&c[2],d=f&&m.childNodes[f];d=++f&&d&&d[g]||(_=f=0)||p.pop();)if(1===d.nodeType&&++_&&d===t){u[e]=[E,f,_];break}}else if(y&&(_=f=(c=(u=(h=(d=t)[b]||(d[b]={}))[d.uniqueID]||(h[d.uniqueID]={}))[e]||[])[0]===E&&c[1]),!1===_)for(;(d=++f&&d&&d[g]||(_=f=0)||p.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++_||(y&&((u=(h=d[b]||(d[b]={}))[d.uniqueID]||(h[d.uniqueID]={}))[e]=[E,_]),d!==t)););return(_-=i)===r||_%r==0&&_/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ce((function(e,n){for(var r,s=i(e,t),o=s.length;o--;)e[r=D(e,s[o])]=!(n[r]=s[o])})):function(e){return i(e,0,n)}):i}},pseudos:{not:ce((function(e){var t=[],n=[],r=a(e.replace(H,"$1"));return r[b]?ce((function(e,t,n,i){for(var s,o=r(e,null,i,[]),a=e.length;a--;)(s=o[a])&&(e[a]=!(t[a]=s))})):function(e,i,s){return t[0]=e,r(t,null,s,n),t[0]=null,!n.pop()}})),has:ce((function(e){return function(t){return ae(e,t).length>0}})),contains:ce((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||i(t)).indexOf(e)>-1}})),lang:ce((function(e){return Y.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me((function(){return[0]})),last:me((function(e,t){return[t-1]})),eq:me((function(e,t,n){return[n<0?n+t:n]})),even:me((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:me((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:me((function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e})),gt:me((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e}))}},r.pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}function _e(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(e,t,n){var r=t.dir,i=t.next,s=i||r,o=n&&"parentNode"===s,a=C++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i);return!1}:function(t,n,l){var c,u,h,d=[E,a];if(l){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,l))return!0}else for(;t=t[r];)if(1===t.nodeType||o)if(u=(h=t[b]||(t[b]={}))[t.uniqueID]||(h[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((c=u[s])&&c[0]===E&&c[1]===a)return d[2]=c[2];if(u[s]=d,d[2]=e(t,n,l))return!0}return!1}}function we(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ee(e,t,n,r,i){for(var s,o=[],a=0,l=e.length,c=null!=t;a<l;a++)(s=e[a])&&(n&&!n(s,r,i)||(o.push(s),c&&t.push(a)));return o}function Ce(e,t,n,r,i,s){return r&&!r[b]&&(r=Ce(r)),i&&!i[b]&&(i=Ce(i,s)),ce((function(s,o,a,l){var c,u,h,d=[],f=[],p=o.length,g=s||function(e,t,n){for(var r=0,i=t.length;r<i;r++)ae(e,t[r],n);return n}(t||"*",a.nodeType?[a]:a,[]),m=!e||!s&&t?g:Ee(g,d,e,a,l),v=n?i||(s?e:p||r)?[]:o:m;if(n&&n(m,v,a,l),r)for(c=Ee(v,f),r(c,[],a,l),u=c.length;u--;)(h=c[u])&&(v[f[u]]=!(m[f[u]]=h));if(s){if(i||e){if(i){for(c=[],u=v.length;u--;)(h=v[u])&&c.push(m[u]=h);i(null,v=[],c,l)}for(u=v.length;u--;)(h=v[u])&&(c=i?D(s,h):d[u])>-1&&(s[c]=!(o[c]=h))}}else v=Ee(v===o?v.splice(p,v.length):v),i?i(null,o,v,l):L.apply(o,v)}))}function Te(e){for(var t,n,i,s=e.length,o=r.relative[e[0].type],a=o||r.relative[" "],l=o?1:0,u=be((function(e){return e===t}),a,!0),h=be((function(e){return D(t,e)>-1}),a,!0),d=[function(e,n,r){var i=!o&&(r||n!==c)||((t=n).nodeType?u(e,n,r):h(e,n,r));return t=null,i}];l<s;l++)if(n=r.relative[e[l].type])d=[be(we(d),n)];else{if((n=r.filter[e[l].type].apply(null,e[l].matches))[b]){for(i=++l;i<s&&!r.relative[e[i].type];i++);return Ce(l>1&&we(d),l>1&&_e(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(H,"$1"),n,l<i&&Te(e.slice(l,i)),i<s&&Te(e=e.slice(i)),i<s&&_e(e))}d.push(n)}return we(d)}return ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,o=ae.tokenize=function(e,t){var n,i,s,o,a,l,c,u=I[e+" "];if(u)return t?0:u.slice(0);for(a=e,l=[],c=r.preFilter;a;){for(o in n&&!(i=W.exec(a))||(i&&(a=a.slice(i[0].length)||a),l.push(s=[])),n=!1,(i=$.exec(a))&&(n=i.shift(),s.push({value:n,type:i[0].replace(H," ")}),a=a.slice(n.length)),r.filter)!(i=X[o].exec(a))||c[o]&&!(i=c[o](i))||(n=i.shift(),s.push({value:n,type:o,matches:i}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ae.error(e):I(e,l).slice(0)},a=ae.compile=function(e,t){var n,i=[],s=[],a=S[e+" "];if(!a){for(t||(t=o(e)),n=t.length;n--;)(a=Te(t[n]))[b]?i.push(a):s.push(a);a=S(e,function(e,t){var n=t.length>0,i=e.length>0,s=function(s,o,a,l,u){var h,p,m,v=0,y="0",_=s&&[],b=[],w=c,C=s||i&&r.find.TAG("*",u),T=E+=null==w?1:Math.random()||.1,I=C.length;for(u&&(c=o==f||o||u);y!==I&&null!=(h=C[y]);y++){if(i&&h){for(p=0,o||h.ownerDocument==f||(d(h),a=!g);m=e[p++];)if(m(h,o||f,a)){l.push(h);break}u&&(E=T)}n&&((h=!m&&h)&&v--,s&&_.push(h))}if(v+=y,n&&y!==v){for(p=0;m=t[p++];)m(_,b,o,a);if(s){if(v>0)for(;y--;)_[y]||b[y]||(b[y]=R.call(l));b=Ee(b)}L.apply(l,b),u&&!s&&b.length>0&&v+t.length>1&&ae.uniqueSort(l)}return u&&(E=T,c=w),_};return n?ce(s):s}(s,i)),a.selector=e}return a},l=ae.select=function(e,t,n,i){var s,l,c,u,h,d="function"==typeof e&&e,f=!i&&o(e=d.selector||e);if(n=n||[],1===f.length){if((l=f[0]=f[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&9===t.nodeType&&g&&r.relative[l[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(s=X.needsContext.test(e)?0:l.length;s--&&(c=l[s],!r.relative[u=c.type]);)if((h=r.find[u])&&(i=h(c.matches[0].replace(te,ne),ee.test(l[0].type)&&ve(t.parentNode)||t))){if(l.splice(s,1),!(e=i.length&&_e(l)))return L.apply(n,i),n;break}}return(d||a(e,f))(i,t,!g,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},n.sortStable=b.split("").sort(x).join("")===b,n.detectDuplicates=!!h,d(),n.sortDetached=ue((function(e){return 1&e.compareDocumentPosition(f.createElement("fieldset"))})),ue((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||he("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ue((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||he("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ue((function(e){return null==e.getAttribute("disabled")}))||he(M,(function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null})),ae}(e);w.find=C,w.expr=C.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=C.uniqueSort,w.text=C.getText,w.isXMLDoc=C.isXML,w.contains=C.contains,w.escapeSelector=C.escape;var T=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},I=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},S=w.expr.match.needsContext;function k(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var x=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function N(e,t,n){return p(t)?w.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?w.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?w.grep(e,(function(e){return a.call(t,e)>-1!==n})):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,(function(e){return 1===e.nodeType})))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter((function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0})));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(N(this,e||[],!1))},not:function(e){return this.pushStack(N(this,e||[],!0))},is:function(e){return!!N(this,"string"==typeof e&&S.test(e)?w(e):e||[],!1).length}});var A,R=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||A,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:R.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:m,!0)),x.test(r[1])&&w.isPlainObject(t))for(r in t)p(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=m.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):p(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,A=w(m);var P=/^(?:parents|prev(?:Until|All))/,L={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,s=[],o="string"!=typeof e&&w(e);if(!S.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){s.push(n);break}return this.pushStack(s.length>1?w.uniqueSort(s):s)},index:function(e){return e?"string"==typeof e?a.call(w(e),this[0]):a.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return I((e.parentNode||{}).firstChild,e)},children:function(e){return I(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(k(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},(function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(L[e]||w.uniqueSort(i),P.test(e)&&i.reverse()),this.pushStack(i)}}));var D=/[^\x20\t\r\n\f]+/g;function M(e){return e}function F(e){throw e}function j(e,t,n,r){var i;try{e&&p(i=e.promise)?i.call(e).done(t).fail(n):e&&p(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return w.each(e.match(D)||[],(function(e,n){t[n]=!0})),t}(e):w.extend({},e);var t,n,r,i,s=[],o=[],a=-1,l=function(){for(i=i||e.once,r=t=!0;o.length;a=-1)for(n=o.shift();++a<s.length;)!1===s[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=s.length,n=!1);e.memory||(n=!1),t=!1,i&&(s=n?[]:"")},c={add:function(){return s&&(n&&!t&&(a=s.length-1,o.push(n)),function t(n){w.each(n,(function(n,r){p(r)?e.unique&&c.has(r)||s.push(r):r&&r.length&&"string"!==_(r)&&t(r)}))}(arguments),n&&!t&&l()),this},remove:function(){return w.each(arguments,(function(e,t){for(var n;(n=w.inArray(t,s,n))>-1;)s.splice(n,1),n<=a&&a--})),this},has:function(e){return e?w.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return i=o=[],s=n="",this},disabled:function(){return!s},lock:function(){return i=o=[],n||t||(s=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],o.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred((function(t){w.each(n,(function(n,r){var i=p(e[r[4]])&&e[r[4]];s[r[1]]((function(){var e=i&&i.apply(this,arguments);e&&p(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(t,r,i){var s=0;function o(t,n,r,i){return function(){var a=this,l=arguments,c=function(){var e,c;if(!(t<s)){if((e=r.apply(a,l))===n.promise())throw new TypeError("Thenable self-resolution");c=e&&("object"==typeof e||"function"==typeof e)&&e.then,p(c)?i?c.call(e,o(s,n,M,i),o(s,n,F,i)):(s++,c.call(e,o(s,n,M,i),o(s,n,F,i),o(s,n,M,n.notifyWith))):(r!==M&&(a=void 0,l=[e]),(i||n.resolveWith)(a,l))}},u=i?c:function(){try{c()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,u.stackTrace),t+1>=s&&(r!==F&&(a=void 0,l=[e]),n.rejectWith(a,l))}};t?u():(w.Deferred.getStackHook&&(u.stackTrace=w.Deferred.getStackHook()),e.setTimeout(u))}}return w.Deferred((function(e){n[0][3].add(o(0,e,p(i)?i:M,e.notifyWith)),n[1][3].add(o(0,e,p(t)?t:M)),n[2][3].add(o(0,e,p(r)?r:F))})).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},s={};return w.each(n,(function(e,t){var o=t[2],a=t[5];i[t[1]]=o.add,a&&o.add((function(){r=a}),n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),o.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=o.fireWith})),i.promise(s),t&&t.call(s,s),s},when:function(e){var t=arguments.length,n=t,r=Array(n),s=i.call(arguments),o=w.Deferred(),a=function(e){return function(n){r[e]=this,s[e]=arguments.length>1?i.call(arguments):n,--t||o.resolveWith(r,s)}};if(t<=1&&(j(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||p(s[n]&&s[n].then)))return o.then();for(;n--;)j(s[n],a(n),o.reject);return o.promise()}});var U=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&U.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout((function(){throw t}))};var q=w.Deferred();function B(){m.removeEventListener("DOMContentLoaded",B),e.removeEventListener("load",B),w.ready()}w.fn.ready=function(e){return q.then(e).catch((function(e){w.readyException(e)})),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||q.resolveWith(m,[w]))}}),w.ready.then=q.then,"complete"===m.readyState||"loading"!==m.readyState&&!m.documentElement.doScroll?e.setTimeout(w.ready):(m.addEventListener("DOMContentLoaded",B),e.addEventListener("load",B));var H=function(e,t,n,r,i,s,o){var a=0,l=e.length,c=null==n;if("object"===_(n))for(a in i=!0,n)H(e,t,a,n[a],!0,s,o);else if(void 0!==r&&(i=!0,p(r)||(o=!0),c&&(o?(t.call(e,r),t=null):(c=t,t=function(e,t,n){return c.call(w(e),n)})),t))for(;a<l;a++)t(e[a],n,o?r:r.call(e[a],a,t(e[a],n)));return i?e:c?t.call(e):l?t(e[0],n):s},W=/^-ms-/,$=/-([a-z])/g;function z(e,t){return t.toUpperCase()}function V(e){return e.replace(W,"ms-").replace($,z)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function X(){this.expando=w.expando+X.uid++}X.uid=1,X.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(D)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var K=new X,G=new X,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function Z(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Q,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:J.test(e)?JSON.parse(e):e)}(n)}catch(e){}G.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return G.hasData(e)||K.hasData(e)},data:function(e,t,n){return G.access(e,t,n)},removeData:function(e,t){G.remove(e,t)},_data:function(e,t,n){return K.access(e,t,n)},_removeData:function(e,t){K.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,s=this[0],o=s&&s.attributes;if(void 0===e){if(this.length&&(i=G.get(s),1===s.nodeType&&!K.get(s,"hasDataAttrs"))){for(n=o.length;n--;)o[n]&&0===(r=o[n].name).indexOf("data-")&&(r=V(r.slice(5)),Z(s,r,i[r]));K.set(s,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){G.set(this,e)})):H(this,(function(t){var n;if(s&&void 0===t)return void 0!==(n=G.get(s,e))||void 0!==(n=Z(s,e))?n:void 0;this.each((function(){G.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){G.remove(this,e)}))}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=K.get(e,t),n&&(!r||Array.isArray(n)?r=K.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),s=w._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete s.stop,i.call(e,(function(){w.dequeue(e,t)}),s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return K.get(e,n)||K.access(e,n,{empty:w.Callbacks("once memory").add((function(){K.remove(e,[t+"queue",n])}))})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each((function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){w.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),s=this,o=this.length,a=function(){--r||i.resolveWith(s,[s])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)(n=K.get(s[o],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=m.documentElement,ie=function(e){return w.contains(e.ownerDocument,e)},se={composed:!0};re.getRootNode&&(ie=function(e){return w.contains(e.ownerDocument,e)||e.getRootNode(se)===e.ownerDocument});var oe=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===w.css(e,"display")};function ae(e,t,n,r){var i,s,o=20,a=r?function(){return r.cur()}:function(){return w.css(e,t,"")},l=a(),c=n&&n[3]||(w.cssNumber[t]?"":"px"),u=e.nodeType&&(w.cssNumber[t]||"px"!==c&&+l)&&te.exec(w.css(e,t));if(u&&u[3]!==c){for(l/=2,c=c||u[3],u=+l||1;o--;)w.style(e,t,u+c),(1-s)*(1-(s=a()/l||.5))<=0&&(o=0),u/=s;u*=2,w.style(e,t,u+c),n=n||[]}return n&&(u=+u||+l||0,i=n[1]?u+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=u,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function ue(e,t){for(var n,r,i=[],s=0,o=e.length;s<o;s++)(r=e[s]).style&&(n=r.style.display,t?("none"===n&&(i[s]=K.get(r,"display")||null,i[s]||(r.style.display="")),""===r.style.display&&oe(r)&&(i[s]=ce(r))):"none"!==n&&(i[s]="none",K.set(r,"display",n)));for(s=0;s<o;s++)null!=i[s]&&(e[s].style.display=i[s]);return e}w.fn.extend({show:function(){return ue(this,!0)},hide:function(){return ue(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){oe(this)?w(this).show():w(this).hide()}))}});var he,de,fe=/^(?:checkbox|radio)$/i,pe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ge=/^$|^module$|\/(?:java|ecma)script/i;he=m.createDocumentFragment().appendChild(m.createElement("div")),(de=m.createElement("input")).setAttribute("type","radio"),de.setAttribute("checked","checked"),de.setAttribute("name","t"),he.appendChild(de),f.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue,he.innerHTML="<option></option>",f.option=!!he.lastChild;var me={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&k(e,t)?w.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)K.set(e[n],"globalEval",!t||K.get(t[n],"globalEval"))}me.tbody=me.tfoot=me.colgroup=me.caption=me.thead,me.th=me.td,f.option||(me.optgroup=me.option=[1,"<select multiple='multiple'>","</select>"]);var _e=/<|&#?\w+;/;function be(e,t,n,r,i){for(var s,o,a,l,c,u,h=t.createDocumentFragment(),d=[],f=0,p=e.length;f<p;f++)if((s=e[f])||0===s)if("object"===_(s))w.merge(d,s.nodeType?[s]:s);else if(_e.test(s)){for(o=o||h.appendChild(t.createElement("div")),a=(pe.exec(s)||["",""])[1].toLowerCase(),l=me[a]||me._default,o.innerHTML=l[1]+w.htmlPrefilter(s)+l[2],u=l[0];u--;)o=o.lastChild;w.merge(d,o.childNodes),(o=h.firstChild).textContent=""}else d.push(t.createTextNode(s));for(h.textContent="",f=0;s=d[f++];)if(r&&w.inArray(s,r)>-1)i&&i.push(s);else if(c=ie(s),o=ve(h.appendChild(s),"script"),c&&ye(o),n)for(u=0;s=o[u++];)ge.test(s.type||"")&&n.push(s);return h}var we=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function Ce(){return!1}function Te(e,t){return e===function(){try{return m.activeElement}catch(e){}}()==("focus"===t)}function Ie(e,t,n,r,i,s){var o,a;if("object"==typeof t){for(a in"string"!=typeof n&&(r=r||n,n=void 0),t)Ie(e,a,n,r,t[a],s);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ce;else if(!i)return e;return 1===s&&(o=i,i=function(e){return w().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=w.guid++)),e.each((function(){w.event.add(this,t,i,r,n)}))}function Se(e,t,n){n?(K.set(e,t,!1),w.event.add(e,t,{namespace:!1,handler:function(e){var r,s,o=K.get(this,t);if(1&e.isTrigger&&this[t]){if(o.length)(w.event.special[t]||{}).delegateType&&e.stopPropagation();else if(o=i.call(arguments),K.set(this,t,o),r=n(this,t),this[t](),o!==(s=K.get(this,t))||r?K.set(this,t,!1):s={},o!==s)return e.stopImmediatePropagation(),e.preventDefault(),s&&s.value}else o.length&&(K.set(this,t,{value:w.event.trigger(w.extend(o[0],w.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===K.get(e,t)&&w.event.add(e,t,Ee)}w.event={global:{},add:function(e,t,n,r,i){var s,o,a,l,c,u,h,d,f,p,g,m=K.get(e);if(Y(e))for(n.handler&&(n=(s=n).handler,i=s.selector),i&&w.find.matchesSelector(re,i),n.guid||(n.guid=w.guid++),(l=m.events)||(l=m.events=Object.create(null)),(o=m.handle)||(o=m.handle=function(t){return void 0!==w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(D)||[""]).length;c--;)f=g=(a=we.exec(t[c])||[])[1],p=(a[2]||"").split(".").sort(),f&&(h=w.event.special[f]||{},f=(i?h.delegateType:h.bindType)||f,h=w.event.special[f]||{},u=w.extend({type:f,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:p.join(".")},s),(d=l[f])||((d=l[f]=[]).delegateCount=0,h.setup&&!1!==h.setup.call(e,r,p,o)||e.addEventListener&&e.addEventListener(f,o)),h.add&&(h.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,u):d.push(u),w.event.global[f]=!0)},remove:function(e,t,n,r,i){var s,o,a,l,c,u,h,d,f,p,g,m=K.hasData(e)&&K.get(e);if(m&&(l=m.events)){for(c=(t=(t||"").match(D)||[""]).length;c--;)if(f=g=(a=we.exec(t[c])||[])[1],p=(a[2]||"").split(".").sort(),f){for(h=w.event.special[f]||{},d=l[f=(r?h.delegateType:h.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=d.length;s--;)u=d[s],!i&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||r&&r!==u.selector&&("**"!==r||!u.selector)||(d.splice(s,1),u.selector&&d.delegateCount--,h.remove&&h.remove.call(e,u));o&&!d.length&&(h.teardown&&!1!==h.teardown.call(e,p,m.handle)||w.removeEvent(e,f,m.handle),delete l[f])}else for(f in l)w.event.remove(e,f+t[c],n,r,!0);w.isEmptyObject(l)&&K.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,s,o,a=new Array(arguments.length),l=w.event.fix(e),c=(K.get(this,"events")||Object.create(null))[l.type]||[],u=w.event.special[l.type]||{};for(a[0]=l,t=1;t<arguments.length;t++)a[t]=arguments[t];if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(o=w.event.handlers.call(this,l,c),t=0;(i=o[t++])&&!l.isPropagationStopped();)for(l.currentTarget=i.elem,n=0;(s=i.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==s.namespace&&!l.rnamespace.test(s.namespace)||(l.handleObj=s,l.data=s.data,void 0!==(r=((w.event.special[s.origType]||{}).handle||s.handler).apply(i.elem,a))&&!1===(l.result=r)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,r,i,s,o,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(s=[],o={},n=0;n<l;n++)void 0===o[i=(r=t[n]).selector+" "]&&(o[i]=r.needsContext?w(i,this).index(c)>-1:w.find(i,this,null,[c]).length),o[i]&&s.push(r);s.length&&a.push({elem:c,handlers:s})}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:p(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return fe.test(t.type)&&t.click&&k(t,"input")&&Se(t,"click",Ee),!1},trigger:function(e){var t=this||e;return fe.test(t.type)&&t.click&&k(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return fe.test(t.type)&&t.click&&k(t,"input")&&K.get(t,"click")||k(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:Ce,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:Ce,isPropagationStopped:Ce,isImmediatePropagationStopped:Ce,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},w.event.addProp),w.each({focus:"focusin",blur:"focusout"},(function(e,t){w.event.special[e]={setup:function(){return Se(this,e,Te),!1},trigger:function(){return Se(this,e),!0},_default:function(t){return K.get(t.target,e)},delegateType:t}})),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t),n}}})),w.fn.extend({on:function(e,t,n,r){return Ie(this,e,t,n,r)},one:function(e,t,n,r){return Ie(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ce),this.each((function(){w.event.remove(this,e,n,t)}))}});var ke=/<script|<style|<link/i,xe=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Ae(e,t){return k(e,"table")&&k(11!==t.nodeType?t:t.firstChild,"tr")&&w(e).children("tbody")[0]||e}function Re(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Pe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,s,o,a;if(1===t.nodeType){if(K.hasData(e)&&(a=K.get(e).events))for(i in K.remove(t,"handle events"),a)for(n=0,r=a[i].length;n<r;n++)w.event.add(t,i,a[i][n]);G.hasData(e)&&(s=G.access(e),o=w.extend({},s),G.set(t,o))}}function Oe(e,t,n,r){t=s(t);var i,o,a,l,c,u,h=0,d=e.length,g=d-1,m=t[0],v=p(m);if(v||d>1&&"string"==typeof m&&!f.checkClone&&xe.test(m))return e.each((function(i){var s=e.eq(i);v&&(t[0]=m.call(this,i,s.html())),Oe(s,t,n,r)}));if(d&&(o=(i=be(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(l=(a=w.map(ve(i,"script"),Re)).length;h<d;h++)c=i,h!==g&&(c=w.clone(c,!0,!0),l&&w.merge(a,ve(c,"script"))),n.call(e[h],c,h);if(l)for(u=a[a.length-1].ownerDocument,w.map(a,Pe),h=0;h<l;h++)c=a[h],ge.test(c.type||"")&&!K.access(c,"globalEval")&&w.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?w._evalUrl&&!c.noModule&&w._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):y(c.textContent.replace(Ne,""),c,u))}return e}function De(e,t,n){for(var r,i=t?w.filter(t,e):e,s=0;null!=(r=i[s]);s++)n||1!==r.nodeType||w.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,s,o,a,l,c,u=e.cloneNode(!0),h=ie(e);if(!(f.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(o=ve(u),r=0,i=(s=ve(e)).length;r<i;r++)a=s[r],l=o[r],c=void 0,"input"===(c=l.nodeName.toLowerCase())&&fe.test(a.type)?l.checked=a.checked:"input"!==c&&"textarea"!==c||(l.defaultValue=a.defaultValue);if(t)if(n)for(s=s||ve(e),o=o||ve(u),r=0,i=s.length;r<i;r++)Le(s[r],o[r]);else Le(e,u);return(o=ve(u,"script")).length>0&&ye(o,!h&&ve(e,"script")),u},cleanData:function(e){for(var t,n,r,i=w.event.special,s=0;void 0!==(n=e[s]);s++)if(Y(n)){if(t=n[K.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[K.expando]=void 0}n[G.expando]&&(n[G.expando]=void 0)}}}),w.fn.extend({detach:function(e){return De(this,e,!0)},remove:function(e){return De(this,e)},text:function(e){return H(this,(function(e){return void 0===e?w.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Oe(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ae(this,e).appendChild(e)}))},prepend:function(){return Oe(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ae(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return Oe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Oe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return w.clone(this,e,t)}))},html:function(e){return H(this,(function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!me[(pe.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return Oe(this,arguments,(function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ve(this)),n&&n.replaceChild(t,this))}),e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),s=i.length-1,a=0;a<=s;a++)n=a===s?this:this.clone(!0),w(i[a])[t](n),o.apply(r,n.get());return this.pushStack(r)}}));var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Fe=/^--/,je=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Ue=function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=s[i];return r},qe=new RegExp(ne.join("|"),"i"),Be=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g");function He(e,t,n){var r,i,s,o,a=Fe.test(t),l=e.style;return(n=n||je(e))&&(o=n.getPropertyValue(t)||n[t],a&&o&&(o=o.replace(Be,"$1")||void 0),""!==o||ie(e)||(o=w.style(e,t)),!f.pixelBoxStyles()&&Me.test(o)&&qe.test(t)&&(r=l.width,i=l.minWidth,s=l.maxWidth,l.minWidth=l.maxWidth=l.width=o,o=n.width,l.width=r,l.minWidth=i,l.maxWidth=s)),void 0!==o?o+"":o}function We(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function t(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(c).appendChild(u);var t=e.getComputedStyle(u);r="1%"!==t.top,l=12===n(t.marginLeft),u.style.right="60%",o=36===n(t.right),i=36===n(t.width),u.style.position="absolute",s=12===n(u.offsetWidth/3),re.removeChild(c),u=null}}function n(e){return Math.round(parseFloat(e))}var r,i,s,o,a,l,c=m.createElement("div"),u=m.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle="content-box"===u.style.backgroundClip,w.extend(f,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),o},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),s},reliableTrDimensions:function(){var t,n,r,i;return null==a&&(t=m.createElement("table"),n=m.createElement("tr"),r=m.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="border:1px solid",n.style.height="1px",r.style.height="9px",r.style.display="block",re.appendChild(t).appendChild(n).appendChild(r),i=e.getComputedStyle(n),a=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===n.offsetHeight,re.removeChild(t)),a}}))}();var $e=["Webkit","Moz","ms"],ze=m.createElement("div").style,Ve={};function Ye(e){var t=w.cssProps[e]||Ve[e];return t||(e in ze?e:Ve[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=$e.length;n--;)if((e=$e[n]+t)in ze)return e}(e)||e)}var Xe=/^(none|table(?!-c[ea]).+)/,Ke={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,s){var o="width"===t?1:0,a=0,l=0;if(n===(r?"border":"content"))return 0;for(;o<4;o+=2)"margin"===n&&(l+=w.css(e,n+ne[o],!0,i)),r?("content"===n&&(l-=w.css(e,"padding"+ne[o],!0,i)),"margin"!==n&&(l-=w.css(e,"border"+ne[o]+"Width",!0,i))):(l+=w.css(e,"padding"+ne[o],!0,i),"padding"!==n?l+=w.css(e,"border"+ne[o]+"Width",!0,i):a+=w.css(e,"border"+ne[o]+"Width",!0,i));return!r&&s>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-l-a-.5))||0),l}function Ze(e,t,n){var r=je(e),i=(!f.boxSizingReliable()||n)&&"border-box"===w.css(e,"boxSizing",!1,r),s=i,o=He(e,t,r),a="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(o)){if(!n)return o;o="auto"}return(!f.boxSizingReliable()&&i||!f.reliableTrDimensions()&&k(e,"tr")||"auto"===o||!parseFloat(o)&&"inline"===w.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===w.css(e,"boxSizing",!1,r),(s=a in e)&&(o=e[a])),(o=parseFloat(o)||0)+Qe(e,t,n||(i?"border":"content"),s,r,o)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=He(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,s,o,a=V(t),l=Fe.test(t),c=e.style;if(l||(t=Ye(a)),o=w.cssHooks[t]||w.cssHooks[a],void 0===n)return o&&"get"in o&&void 0!==(i=o.get(e,!1,r))?i:c[t];"string"===(s=typeof n)&&(i=te.exec(n))&&i[1]&&(n=ae(e,t,i),s="number"),null!=n&&n==n&&("number"!==s||l||(n+=i&&i[3]||(w.cssNumber[a]?"":"px")),f.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),o&&"set"in o&&void 0===(n=o.set(e,n,r))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,r){var i,s,o,a=V(t);return Fe.test(t)||(t=Ye(a)),(o=w.cssHooks[t]||w.cssHooks[a])&&"get"in o&&(i=o.get(e,!0,n)),void 0===i&&(i=He(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(s=parseFloat(i),!0===n||isFinite(s)?s||0:i):i}}),w.each(["height","width"],(function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!Xe.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,t,r):Ue(e,Ke,(function(){return Ze(e,t,r)}))},set:function(e,n,r){var i,s=je(e),o=!f.scrollboxSize()&&"absolute"===s.position,a=(o||r)&&"border-box"===w.css(e,"boxSizing",!1,s),l=r?Qe(e,t,r,a,s):0;return a&&o&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(s[t])-Qe(e,t,"border",!1,s)-.5)),l&&(i=te.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Je(0,n,l)}}})),w.cssHooks.marginLeft=We(f.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(He(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),w.each({margin:"",padding:"",border:"Width"},(function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},s="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+ne[r]+t]=s[r]||s[r-2]||s[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Je)})),w.fn.extend({css:function(e,t){return H(this,(function(e,t,n){var r,i,s={},o=0;if(Array.isArray(t)){for(r=je(e),i=t.length;o<i;o++)s[t[o]]=w.css(e,t[o],!1,r);return s}return void 0!==n?w.style(e,t,n):w.css(e,t)}),e,t,arguments.length>1)}}),w.Tween=et,et.prototype={constructor:et,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(w.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}},et.prototype.init.prototype=et.prototype,et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||!w.cssHooks[e.prop]&&null==e.elem.style[Ye(e.prop)]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},et.propHooks.scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=et.prototype.init,w.fx.step={};var tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function st(){nt&&(!1===m.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(st):e.setTimeout(st,w.fx.interval),w.fx.tick())}function ot(){return e.setTimeout((function(){tt=void 0})),tt=Date.now()}function at(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(ct.tweeners[t]||[]).concat(ct.tweeners["*"]),s=0,o=i.length;s<o;s++)if(r=i[s].call(n,t,e))return r}function ct(e,t,n){var r,i,s=0,o=ct.prefilters.length,a=w.Deferred().always((function(){delete l.elem})),l=function(){if(i)return!1;for(var t=tt||ot(),n=Math.max(0,c.startTime+c.duration-t),r=1-(n/c.duration||0),s=0,o=c.tweens.length;s<o;s++)c.tweens[s].run(r);return a.notifyWith(e,[c,r,n]),r<1&&o?n:(o||a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:tt||ot(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(r),r},stop:function(t){var n=0,r=t?c.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),u=c.props;for(!function(e,t){var n,r,i,s,o;for(n in e)if(i=t[r=V(n)],s=e[n],Array.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),(o=w.cssHooks[r])&&"expand"in o)for(n in s=o.expand(s),delete e[r],s)n in e||(e[n]=s[n],t[n]=i);else t[r]=i}(u,c.opts.specialEasing);s<o;s++)if(r=ct.prefilters[s].call(c,e,u,c.opts))return p(r.stop)&&(w._queueHooks(c.elem,c.opts.queue).stop=r.stop.bind(r)),r;return w.map(u,lt,c),p(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),w.fx.timer(w.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}w.Animation=w.extend(ct,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ae(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){p(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ct.tweeners[n]=ct.tweeners[n]||[],ct.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,s,o,a,l,c,u,h="width"in t||"height"in t,d=this,f={},p=e.style,g=e.nodeType&&oe(e),m=K.get(e,"fxshow");for(r in n.queue||(null==(o=w._queueHooks(e,"fx")).unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,d.always((function(){d.always((function(){o.unqueued--,w.queue(e,"fx").length||o.empty.fire()}))}))),t)if(i=t[r],rt.test(i)){if(delete t[r],s=s||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}f[r]=m&&m[r]||w.style(e,r)}if((l=!w.isEmptyObject(t))||!w.isEmptyObject(f))for(r in h&&1===e.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(c=m&&m.display)&&(c=K.get(e,"display")),"none"===(u=w.css(e,"display"))&&(c?u=c:(ue([e],!0),c=e.style.display||c,u=w.css(e,"display"),ue([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===w.css(e,"float")&&(l||(d.done((function(){p.display=c})),null==c&&(u=p.display,c="none"===u?"":u)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always((function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}))),l=!1,f)l||(m?"hidden"in m&&(g=m.hidden):m=K.access(e,"fxshow",{display:c}),s&&(m.hidden=!g),g&&ue([e],!0),d.done((function(){for(r in g||ue([e]),K.remove(e,"fxshow"),f)w.style(e,r,f[r])}))),l=lt(g?m[r]:0,r,d),r in m||(m[r]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?ct.prefilters.unshift(e):ct.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||p(e)&&e,duration:e,easing:n&&t||t&&!p(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){p(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(oe).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),s=w.speed(t,n,r),o=function(){var t=ct(this,w.extend({},e),s);(i||K.get(this,"finish"))&&t.stop(!0)};return o.finish=o,i||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",s=w.timers,o=K.get(this);if(i)o[i]&&o[i].stop&&r(o[i]);else for(i in o)o[i]&&o[i].stop&&it.test(i)&&r(o[i]);for(i=s.length;i--;)s[i].elem!==this||null!=e&&s[i].queue!==e||(s[i].anim.stop(n),t=!1,s.splice(i,1));!t&&n||w.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=K.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=w.timers,o=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<o;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),w.each(["toggle","show","hide"],(function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(at(t,!0),e,r,i)}})),w.each({slideDown:at("show"),slideUp:at("hide"),slideToggle:at("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),tt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){nt||(nt=!0,st())},w.fx.stop=function(){nt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx&&w.fx.speeds[t]||t,n=n||"fx",this.queue(n,(function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}}))},function(){var e=m.createElement("input"),t=m.createElement("select").appendChild(m.createElement("option"));e.type="checkbox",f.checkOn=""!==e.value,f.optSelected=t.selected,(e=m.createElement("input")).value="t",e.type="radio",f.radioValue="t"===e.value}();var ut,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return H(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){w.removeAttr(this,e)}))}}),w.extend({attr:function(e,t,n){var r,i,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return void 0===e.getAttribute?w.prop(e,t,n):(1===s&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?ut:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!f.radioValue&&"radio"===t&&k(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),ut={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,s,o=t.toLowerCase();return r||(s=ht[o],ht[o]=i,i=null!=n(e,t,r)?o:null,ht[o]=s),i}}));var dt=/^(?:input|select|textarea|button)$/i,ft=/^(?:a|area)$/i;function pt(e){return(e.match(D)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}w.fn.extend({prop:function(e,t){return H(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[w.propFix[e]||e]}))}}),w.extend({prop:function(e,t,n){var r,i,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):dt.test(e.nodeName)||ft.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){w.propFix[this.toLowerCase()]=this})),w.fn.extend({addClass:function(e){var t,n,r,i,s,o;return p(e)?this.each((function(t){w(this).addClass(e.call(this,t,gt(this)))})):(t=mt(e)).length?this.each((function(){if(r=gt(this),n=1===this.nodeType&&" "+pt(r)+" "){for(s=0;s<t.length;s++)i=t[s],n.indexOf(" "+i+" ")<0&&(n+=i+" ");o=pt(n),r!==o&&this.setAttribute("class",o)}})):this},removeClass:function(e){var t,n,r,i,s,o;return p(e)?this.each((function(t){w(this).removeClass(e.call(this,t,gt(this)))})):arguments.length?(t=mt(e)).length?this.each((function(){if(r=gt(this),n=1===this.nodeType&&" "+pt(r)+" "){for(s=0;s<t.length;s++)for(i=t[s];n.indexOf(" "+i+" ")>-1;)n=n.replace(" "+i+" "," ");o=pt(n),r!==o&&this.setAttribute("class",o)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,r,i,s,o=typeof e,a="string"===o||Array.isArray(e);return p(e)?this.each((function(n){w(this).toggleClass(e.call(this,n,gt(this),t),t)})):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=mt(e),this.each((function(){if(a)for(s=w(this),i=0;i<n.length;i++)r=n[i],s.hasClass(r)?s.removeClass(r):s.addClass(r);else void 0!==e&&"boolean"!==o||((r=gt(this))&&K.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":K.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+pt(gt(n))+" ").indexOf(t)>-1)return!0;return!1}});var vt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=p(e),this.each((function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,(function(e){return null==e?"":e+""}))),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(vt,""):null==n?"":n:void 0}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:pt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,s=e.selectedIndex,o="select-one"===e.type,a=o?null:[],l=o?s+1:i.length;for(r=s<0?l:o?s:0;r<l;r++)if(((n=i[r]).selected||r===s)&&!n.disabled&&(!n.parentNode.disabled||!k(n.parentNode,"optgroup"))){if(t=w(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,s=w.makeArray(t),o=i.length;o--;)((r=i[o]).selected=w.inArray(w.valHooks.option.get(r),s)>-1)&&(n=!0);return n||(e.selectedIndex=-1),s}}}}),w.each(["radio","checkbox"],(function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},f.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),f.focusin="onfocusin"in e;var yt=/^(?:focusinfocus|focusoutblur)$/,_t=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,r,i){var s,o,a,l,c,h,d,f,v=[r||m],y=u.call(t,"type")?t.type:t,_=u.call(t,"namespace")?t.namespace.split("."):[];if(o=f=a=r=r||m,3!==r.nodeType&&8!==r.nodeType&&!yt.test(y+w.event.triggered)&&(y.indexOf(".")>-1&&(_=y.split("."),y=_.shift(),_.sort()),c=y.indexOf(":")<0&&"on"+y,(t=t[w.expando]?t:new w.Event(y,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=_.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+_.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[y]||{},i||!d.trigger||!1!==d.trigger.apply(r,n))){if(!i&&!d.noBubble&&!g(r)){for(l=d.delegateType||y,yt.test(l+y)||(o=o.parentNode);o;o=o.parentNode)v.push(o),a=o;a===(r.ownerDocument||m)&&v.push(a.defaultView||a.parentWindow||e)}for(s=0;(o=v[s++])&&!t.isPropagationStopped();)f=o,t.type=s>1?l:d.bindType||y,(h=(K.get(o,"events")||Object.create(null))[t.type]&&K.get(o,"handle"))&&h.apply(o,n),(h=c&&o[c])&&h.apply&&Y(o)&&(t.result=h.apply(o,n),!1===t.result&&t.preventDefault());return t.type=y,i||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(r)||c&&p(r[y])&&!g(r)&&((a=r[c])&&(r[c]=null),w.event.triggered=y,t.isPropagationStopped()&&f.addEventListener(y,_t),r[y](),t.isPropagationStopped()&&f.removeEventListener(y,_t),w.event.triggered=void 0,a&&(r[c]=a)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each((function(){w.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),f.focusin||w.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=K.access(r,t);i||r.addEventListener(e,n,!0),K.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=K.access(r,t)-1;i?K.access(r,t,i):(r.removeEventListener(e,n,!0),K.remove(r,t))}}}));var bt=e.location,wt={guid:Date.now()},Et=/\?/;w.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){}return r=n&&n.getElementsByTagName("parsererror")[0],n&&!r||w.error("Invalid XML: "+(r?w.map(r.childNodes,(function(e){return e.textContent})).join("\n"):t)),n};var Ct=/\[\]$/,Tt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,St=/^(?:input|select|textarea|keygen)/i;function kt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,(function(t,i){n||Ct.test(e)?r(e,i):kt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}));else if(n||"object"!==_(t))r(e,t);else for(i in t)kt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=p(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,(function(){i(this.name,this.value)}));else for(n in e)kt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&St.test(this.nodeName)&&!It.test(e)&&(this.checked||!fe.test(e))})).map((function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,(function(e){return{name:t.name,value:e.replace(Tt,"\r\n")}})):{name:t.name,value:n.replace(Tt,"\r\n")}})).get()}});var xt=/%20/g,Nt=/#.*$/,At=/([?&])_=[^&]*/,Rt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:GET|HEAD)$/,Lt=/^\/\//,Ot={},Dt={},Mt="*/".concat("*"),Ft=m.createElement("a");function jt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,s=t.toLowerCase().match(D)||[];if(p(n))for(;r=s[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Ut(e,t,n,r){var i={},s=e===Dt;function o(a){var l;return i[a]=!0,w.each(e[a]||[],(function(e,a){var c=a(t,n,r);return"string"!=typeof c||s||i[c]?s?!(l=c):void 0:(t.dataTypes.unshift(c),o(c),!1)})),l}return o(t.dataTypes[0])||!i["*"]&&o("*")}function qt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}Ft.href=bt.href,w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Mt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?qt(qt(e,w.ajaxSettings),t):qt(w.ajaxSettings,e)},ajaxPrefilter:jt(Ot),ajaxTransport:jt(Dt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,i,s,o,a,l,c,u,h,d,f=w.ajaxSetup({},n),p=f.context||f,g=f.context&&(p.nodeType||p.jquery)?w(p):w.event,v=w.Deferred(),y=w.Callbacks("once memory"),_=f.statusCode||{},b={},E={},C="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(c){if(!o)for(o={};t=Rt.exec(s);)o[t[1].toLowerCase()+" "]=(o[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=o[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?s:null},setRequestHeader:function(e,t){return null==c&&(e=E[e.toLowerCase()]=E[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)T.always(e[T.status]);else for(t in e)_[t]=[_[t],e[t]];return this},abort:function(e){var t=e||C;return r&&r.abort(t),I(0,t),this}};if(v.promise(T),f.url=((t||f.url||bt.href)+"").replace(Lt,bt.protocol+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(D)||[""],null==f.crossDomain){l=m.createElement("a");try{l.href=f.url,l.href=l.href,f.crossDomain=Ft.protocol+"//"+Ft.host!=l.protocol+"//"+l.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=w.param(f.data,f.traditional)),Ut(Ot,f,n,T),c)return T;for(h in(u=w.event&&f.global)&&0==w.active++&&w.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Pt.test(f.type),i=f.url.replace(Nt,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(xt,"+")):(d=f.url.slice(i.length),f.data&&(f.processData||"string"==typeof f.data)&&(i+=(Et.test(i)?"&":"?")+f.data,delete f.data),!1===f.cache&&(i=i.replace(At,"$1"),d=(Et.test(i)?"&":"?")+"_="+wt.guid+++d),f.url=i+d),f.ifModified&&(w.lastModified[i]&&T.setRequestHeader("If-Modified-Since",w.lastModified[i]),w.etag[i]&&T.setRequestHeader("If-None-Match",w.etag[i])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&T.setRequestHeader("Content-Type",f.contentType),T.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Mt+"; q=0.01":""):f.accepts["*"]),f.headers)T.setRequestHeader(h,f.headers[h]);if(f.beforeSend&&(!1===f.beforeSend.call(p,T,f)||c))return T.abort();if(C="abort",y.add(f.complete),T.done(f.success),T.fail(f.error),r=Ut(Dt,f,n,T)){if(T.readyState=1,u&&g.trigger("ajaxSend",[T,f]),c)return T;f.async&&f.timeout>0&&(a=e.setTimeout((function(){T.abort("timeout")}),f.timeout));try{c=!1,r.send(b,I)}catch(e){if(c)throw e;I(-1,e)}}else I(-1,"No Transport");function I(t,n,o,l){var h,d,m,b,E,C=n;c||(c=!0,a&&e.clearTimeout(a),r=void 0,s=l||"",T.readyState=t>0?4:0,h=t>=200&&t<300||304===t,o&&(b=function(e,t,n){for(var r,i,s,o,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){l.unshift(i);break}if(l[0]in n)s=l[0];else{for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){s=i;break}o||(o=i)}s=s||o}if(s)return s!==l[0]&&l.unshift(s),n[s]}(f,T,o)),!h&&w.inArray("script",f.dataTypes)>-1&&w.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),b=function(e,t,n,r){var i,s,o,a,l,c={},u=e.dataTypes.slice();if(u[1])for(o in e.converters)c[o.toLowerCase()]=e.converters[o];for(s=u.shift();s;)if(e.responseFields[s]&&(n[e.responseFields[s]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=s,s=u.shift())if("*"===s)s=l;else if("*"!==l&&l!==s){if(!(o=c[l+" "+s]||c["* "+s]))for(i in c)if((a=i.split(" "))[1]===s&&(o=c[l+" "+a[0]]||c["* "+a[0]])){!0===o?o=c[i]:!0!==c[i]&&(s=a[0],u.unshift(a[1]));break}if(!0!==o)if(o&&e.throws)t=o(t);else try{t=o(t)}catch(e){return{state:"parsererror",error:o?e:"No conversion from "+l+" to "+s}}}return{state:"success",data:t}}(f,b,T,h),h?(f.ifModified&&((E=T.getResponseHeader("Last-Modified"))&&(w.lastModified[i]=E),(E=T.getResponseHeader("etag"))&&(w.etag[i]=E)),204===t||"HEAD"===f.type?C="nocontent":304===t?C="notmodified":(C=b.state,d=b.data,h=!(m=b.error))):(m=C,!t&&C||(C="error",t<0&&(t=0))),T.status=t,T.statusText=(n||C)+"",h?v.resolveWith(p,[d,C,T]):v.rejectWith(p,[T,C,m]),T.statusCode(_),_=void 0,u&&g.trigger(h?"ajaxSuccess":"ajaxError",[T,f,h?d:m]),y.fireWith(p,[T,C]),u&&(g.trigger("ajaxComplete",[T,f]),--w.active||w.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],(function(e,t){w[t]=function(e,n,r,i){return p(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}})),w.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),w._evalUrl=function(e,t,n){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){w.globalEval(e,t,n)}})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(p(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return p(e)?this.each((function(t){w(this).wrapInner(e.call(this,t))})):this.each((function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=p(e);return this.each((function(n){w(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){w(this).replaceWith(this.childNodes)})),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},Ht=w.ajaxSettings.xhr();f.cors=!!Ht&&"withCredentials"in Ht,f.ajax=Ht=!!Ht,w.ajaxTransport((function(t){var n,r;if(f.cors||Ht&&!t.crossDomain)return{send:function(i,s){var o,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(o,i[o]);n=function(e){return function(){n&&(n=r=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?s(0,"error"):s(a.status,a.statusText):s(Bt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),r=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout((function(){n&&r()}))},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}})),w.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),w.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=w("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),m.head.appendChild(t[0])},abort:function(){n&&n()}}}));var Wt,$t=[],zt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=$t.pop()||w.expando+"_"+wt.guid++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",(function(t,n,r){var i,s,o,a=!1!==t.jsonp&&(zt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&zt.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=p(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(zt,"$1"+i):!1!==t.jsonp&&(t.url+=(Et.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return o||w.error(i+" was not called"),o[0]},t.dataTypes[0]="json",s=e[i],e[i]=function(){o=arguments},r.always((function(){void 0===s?w(e).removeProp(i):e[i]=s,t[i]&&(t.jsonpCallback=n.jsonpCallback,$t.push(i)),o&&p(s)&&s(o[0]),o=s=void 0})),"script"})),f.createHTMLDocument=((Wt=m.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Wt.childNodes.length),w.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(f.createHTMLDocument?((r=(t=m.implementation.createHTMLDocument("")).createElement("base")).href=m.location.href,t.head.appendChild(r)):t=m),s=!n&&[],(i=x.exec(e))?[t.createElement(i[1])]:(i=be([e],t,s),s&&s.length&&w(s).remove(),w.merge([],i.childNodes)));var r,i,s},w.fn.load=function(e,t,n){var r,i,s,o=this,a=e.indexOf(" ");return a>-1&&(r=pt(e.slice(a)),e=e.slice(0,a)),p(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),o.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){s=arguments,o.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)})).always(n&&function(e,t){o.each((function(){n.apply(this,s||[e.responseText,t,e])}))}),this},w.expr.pseudos.animated=function(e){return w.grep(w.timers,(function(t){return e===t.elem})).length},w.offset={setOffset:function(e,t,n){var r,i,s,o,a,l,c=w.css(e,"position"),u=w(e),h={};"static"===c&&(e.style.position="relative"),a=u.offset(),s=w.css(e,"top"),l=w.css(e,"left"),("absolute"===c||"fixed"===c)&&(s+l).indexOf("auto")>-1?(o=(r=u.position()).top,i=r.left):(o=parseFloat(s)||0,i=parseFloat(l)||0),p(t)&&(t=t.call(e,n,w.extend({},a))),null!=t.top&&(h.top=t.top-a.top+o),null!=t.left&&(h.left=t.left-a.left+i),"using"in t?t.using.call(e,h):u.css(h)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){w.offset.setOffset(this,e,t)}));var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===w.css(e,"position");)e=e.offsetParent;return e||re}))}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return H(this,(function(e,r,i){var s;if(g(e)?s=e:9===e.nodeType&&(s=e.defaultView),void 0===i)return s?s[t]:e[r];s?s.scrollTo(n?s.pageXOffset:i,n?i:s.pageYOffset):e[r]=i}),e,r,arguments.length)}})),w.each(["top","left"],(function(e,t){w.cssHooks[t]=We(f.pixelPosition,(function(e,n){if(n)return n=He(e,t),Me.test(n)?w(e).position()[t]+"px":n}))})),w.each({Height:"height",Width:"width"},(function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){w.fn[r]=function(i,s){var o=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===s?"margin":"border");return H(this,(function(t,n,i){var s;return g(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(s=t.documentElement,Math.max(t.body["scroll"+e],s["scroll"+e],t.body["offset"+e],s["offset"+e],s["client"+e])):void 0===i?w.css(t,n,a):w.style(t,n,i,a)}),t,o?i:void 0,o)}}))})),w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){w.fn[t]=function(e){return this.on(t,e)}})),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));var Vt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;w.proxy=function(e,t){var n,r,s;if("string"==typeof t&&(n=e[t],t=e,e=n),p(e))return r=i.call(arguments,2),s=function(){return e.apply(t||this,r.concat(i.call(arguments)))},s.guid=e.guid=e.guid||w.guid++,s},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=k,w.isFunction=p,w.isWindow=g,w.camelCase=V,w.type=_,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},w.trim=function(e){return null==e?"":(e+"").replace(Vt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],(function(){return w}));var Yt=e.jQuery,Xt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Xt),t&&e.jQuery===w&&(e.jQuery=Yt),w},void 0===t&&(e.jQuery=e.$=w),w}));document.querySelector(".selector");const Xf=document.querySelector(".container-alphabet"),Kf=document.querySelector(".custom-select"),Gf=document.querySelector(".gallery-list"),Jf=document.querySelector(".gallery-error");document.querySelector(".gallery-list");function Qf(e){if(!e)return Gf.innerHTML="",void(Jf.innerHTML="Немає відповідності");Jf.innerHTML="",yc(e)}Xf&&(Xf.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;zf(e.target.textContent).then((e=>Qf(e.drinks)))})),Kf.addEventListener("change",(function(e){const t=e.target.options[e.target.selectedIndex];zf(t.textContent).then((e=>{Qf(e.drinks)}))})));document.querySelectorAll("[data-add-remove-favorite]");document.body.addEventListener("click",(e=>{let t;e.target.hasAttribute("data-add-remove-favorite")&&(t=e.target),e.target.parentElement&&e.target.parentElement.hasAttribute("data-add-remove-favorite")&&(t=e.target.parentElement),e.target.parentElement&&e.target.parentElement.parentElement&&e.target.parentElement.parentElement.hasAttribute("data-add-remove-favorite")&&(t=e.target.parentElement.parentElement),t&&Zf(t)}));const Zf=e=>{const t=e.getAttribute("data-element-type"),n=e.getAttribute("data-cocktailid"),r=e.getAttribute("data-ingredientid"),i=e.getAttribute("data-action")||"add";e.getAttribute("data-card-type");let s,o,a,l;if("cocktail"==t){const e=document.querySelector(`#cocktail-${n}`),t=document.querySelector(`#cocktail-${n} .gallery-item__title`);a=e.outerHTML,s=t.textContent,l=n}if("ingredient"==t){const e=document.querySelector(`#ingredient-${r} .ingr-title`),t=document.querySelector(`#ingredient-${r} .ingr-subtitle`);s=e.textContent,o=t.textContent,l=r}"successfully"==Bc({action:i,elementType:t,elementTitle:s,elementSubtitle:o,elementId:l,elementData:a,targetElement:e})&&alert("test")},ep={searchForm:document.querySelector("form[name=search-form]"),searchFormMobile:document.querySelector("form[name=search-form-mob]"),galleryList:document.querySelector(".gallery-list"),galleryTitle:document.querySelector("h1.gallery-title"),modalMobile:document.querySelector("[data-modal-mob-menu]")};ep.searchForm.addEventListener("submit",(e=>{e.preventDefault();const t=e.target.elements.search.value;ep.galleryList.innerHTML=`<div class="gallery-loading">${Pc}</div>`,ep.galleryTitle.classList.remove("visually-hidden"),ep.galleryList.classList.remove("visually-hidden"),ep.galleryList.classList.add("show-all-items"),lf(t).then((e=>{const t=e[0].data.drinks||[],n=e[1].data.drinks||[],r=t.concat(n);if(!r.length)return ep.galleryList.innerHTML="",ep.galleryTitle.classList.add("visually-hidden"),void ep.galleryList.classList.add("visually-hidden");yc(Array.from(new Set(r.map((e=>e.idDrink)))).map((e=>r.find((t=>t.idDrink===e)))))})).catch((e=>console.log(e))).finally()})),ep.searchFormMobile.addEventListener("submit",(e=>{e.preventDefault(),ep.modalMobile.classList.add("visually-hidden");const t=e.target.elements["search-mob"].value;ep.galleryList.innerHTML=`<div class="gallery-loading">${Pc}</div>`,ep.galleryTitle.classList.remove("visually-hidden"),ep.galleryList.classList.remove("visually-hidden"),ep.galleryList.classList.add("show-all-items"),lf(t).then((e=>{const t=e[0].data.drinks||[],n=e[1].data.drinks||[],r=t.concat(n);if(!r.length)return ep.galleryList.innerHTML="",ep.galleryTitle.classList.add("visually-hidden"),void ep.galleryList.classList.add("visually-hidden");yc(Array.from(new Set(r.map((e=>e.idDrink)))).map((e=>r.find((t=>t.idDrink===e)))))})).catch((e=>console.log(e))).finally()}));const tp=document.querySelectorAll(".toggler");tp.forEach((e=>{e.addEventListener("click",(()=>{!function(e){let t;document.body.classList.contains("dark-mode")?(t="DARK",tp.forEach((e=>{e.classList.add("active")}))):(t="LIGHT",tp.forEach((e=>{e.classList.remove("active")})));localStorage.setItem("PageTheme",JSON.stringify(t))}()}))})),"DARK"===JSON.parse(localStorage.getItem("PageTheme"))&&(document.body.classList="dark-mode");
//# sourceMappingURL=favorite-ingredients.59074ff4.js.map
