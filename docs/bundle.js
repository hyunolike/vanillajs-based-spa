(()=>{var e={169:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,".font-sort-css,#header .header-title{display:flex;justify-content:center;align-items:center}body{background:#bbd3d3;display:flex;justify-content:center}#section{background:#fff;width:640px;height:100vh}#header{height:15%;background:red;display:grid;grid-template-columns:1fr 1fr}#header .header-side{background:blueviolet;height:100%}#header .header-title{background:#ff7f50;height:100%;font-size:2rem}section{height:85%;background:green}\n",""]);const a=s},324:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,"*,*:before,*:after{box-sizing:border-box}html,body,div,span,object,iframe,figure,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,code,em,img,small,strike,strong,sub,sup,tt,b,u,i,ol,ul,li,fieldset,form,label,table,caption,tbody,tfoot,thead,tr,th,td,main,canvas,embed,footer,header,nav,section,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}footer,header,nav,section,main{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}input{-webkit-appearance:none;border-radius:0}\n",""]);const a=s},674:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,"",""]);const a=s},475:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,".font-css,button{color:#fff}.home-section{height:100%}.home-section .button-section{height:15%;background:red;display:flex;justify-content:center;align-items:center}.home-section #post-list-section{height:85%;background:white;overflow:auto}button{display:flex;justify-content:center;align-items:center;background-color:#AC354B;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:90vw;height:90%;margin-top:5px;font-size:2rem}button img{width:20%}\n",""]);const a=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&s[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},230:e=>{e.exports="object"==typeof self?self.FormData:window.FormData},91:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,r);r.byIndex=a,t.splice(a,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},694:(e,t,n)=>{"use strict";e.exports=n.p+"30656a0cc16359814f1a.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),s=n.n(i),a=n(565),c=n.n(a),l=n(216),u=n.n(l),d=n(589),f=n.n(d),p=n(169),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var m=n(324),g={};g.styleTagTransform=f(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=u(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var b=n(475),y={};y.styleTagTransform=f(),y.setAttributes=c(),y.insert=s().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=u(),t()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;var w=n(674),v={};v.styleTagTransform=f(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),t()(w.Z,v),w.Z&&w.Z.locals&&w.Z.locals;var E=n(91),O=n.n(E),S=new URL(n(694),n.b);const R='<div class="button-section"> <button class="create-post" onClick="location.href=\'#/post\'"> <img class="icon-post" src="'+O()(S)+'"> 새 글 작성하기 </button> </div> <div id="post-list-section"> </div> ';function T(e,t){return function(){return e.apply(t,arguments)}}const{toString:A}=Object.prototype,{getPrototypeOf:x}=Object,j=(C=Object.create(null),e=>{const t=A.call(e);return C[t]||(C[t]=t.slice(8,-1).toLowerCase())});var C;const N=e=>(e=e.toLowerCase(),t=>j(t)===e),P=e=>t=>typeof t===e,{isArray:L}=Array,U=P("undefined"),k=N("ArrayBuffer"),_=P("string"),F=P("function"),B=P("number"),D=e=>null!==e&&"object"==typeof e,q=e=>{if("object"!==j(e))return!1;const t=x(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},M=N("Date"),I=N("File"),H=N("Blob"),z=N("FileList"),J=N("URLSearchParams");function Z(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),L(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function $(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const W="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,K=e=>!U(e)&&e!==W,V=(G="undefined"!=typeof Uint8Array&&x(Uint8Array),e=>G&&e instanceof G);var G;const X=N("HTMLFormElement"),Q=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Y=N("RegExp"),ee=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Z(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},te={isArray:L,isArrayBuffer:k,isBuffer:function(e){return null!==e&&!U(e)&&null!==e.constructor&&!U(e.constructor)&&F(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||A.call(e)===t||F(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&k(e.buffer),t},isString:_,isNumber:B,isBoolean:e=>!0===e||!1===e,isObject:D,isPlainObject:q,isUndefined:U,isDate:M,isFile:I,isBlob:H,isRegExp:Y,isFunction:F,isStream:e=>D(e)&&F(e.pipe),isURLSearchParams:J,isTypedArray:V,isFileList:z,forEach:Z,merge:function e(){const{caseless:t}=K(this)&&this||{},n={},r=(r,o)=>{const i=t&&$(n,o)||o;q(n[i])&&q(r)?n[i]=e(n[i],r):q(r)?n[i]=e({},r):L(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&Z(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(Z(t,((t,r)=>{n&&F(t)?e[r]=T(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],r&&!r(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&x(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:j,kindOfTest:N,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!B(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:X,hasOwnProperty:Q,hasOwnProp:Q,reduceDescriptors:ee,freezeMethods:e=>{ee(e,((t,n)=>{if(F(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];F(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return L(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:$,global:W,isContextDefined:K,toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(D(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=L(e)?[]:{};return Z(e,((e,t)=>{const i=n(e,r+1);!U(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)}};function ne(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}te.inherits(ne,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:te.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const re=ne.prototype,oe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{oe[e]={value:e}})),Object.defineProperties(ne,oe),Object.defineProperty(re,"isAxiosError",{value:!0}),ne.from=(e,t,n,r,o,i)=>{const s=Object.create(re);return te.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),ne.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const ie=ne,se=n(230);function ae(e){return te.isPlainObject(e)||te.isArray(e)}function ce(e){return te.endsWith(e,"[]")?e.slice(0,-2):e}function le(e,t,n){return e?e.concat(t).map((function(e,t){return e=ce(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const ue=te.toFlatObject(te,{},null,(function(e){return/^is[A-Z]/.test(e)})),de=function(e,t,n){if(!te.isObject(e))throw new TypeError("target must be an object");t=t||new(se||FormData);const r=(n=te.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!te.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&(c=t)&&te.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator];var c;if(!te.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(te.isDate(e))return e.toISOString();if(!a&&te.isBlob(e))throw new ie("Blob is not supported. Use a Buffer instead.");return te.isArrayBuffer(e)||te.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(te.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(te.isArray(e)&&function(e){return te.isArray(e)&&!e.some(ae)}(e)||te.isFileList(e)||te.endsWith(n,"[]")&&(a=te.toArray(e)))return n=ce(n),a.forEach((function(e,r){!te.isUndefined(e)&&null!==e&&t.append(!0===s?le([n],r,i):null===s?n:n+"[]",l(e))})),!1;return!!ae(e)||(t.append(le(o,n,i),l(e)),!1)}const d=[],f=Object.assign(ue,{defaultVisitor:u,convertValue:l,isVisitable:ae});if(!te.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!te.isUndefined(n)){if(-1!==d.indexOf(n))throw Error("Circular reference detected in "+r.join("."));d.push(n),te.forEach(n,(function(n,i){!0===(!(te.isUndefined(n)||null===n)&&o.call(t,n,te.isString(i)?i.trim():i,r,f))&&e(n,r?r.concat(i):[i])})),d.pop()}}(e),t};function fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function pe(e,t){this._pairs=[],e&&de(e,this,t)}const he=pe.prototype;he.append=function(e,t){this._pairs.push([e,t])},he.toString=function(e){const t=e?function(t){return e.call(this,t,fe)}:fe;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const me=pe;function ge(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function be(e,t,n){if(!t)return e;const r=n&&n.encode||ge,o=n&&n.serialize;let i;if(i=o?o(t,n):te.isURLSearchParams(t)?t.toString():new me(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const ye=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){te.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},we={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ve="undefined"!=typeof URLSearchParams?URLSearchParams:me,Ee=FormData,Oe=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),Se="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,Re={isBrowser:!0,classes:{URLSearchParams:ve,FormData:Ee,Blob},isStandardBrowserEnv:Oe,isStandardBrowserWebWorkerEnv:Se,protocols:["http","https","file","blob","url","data"]},Te=function(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;return i=!i&&te.isArray(r)?r.length:i,a?(te.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s):(r[i]&&te.isObject(r[i])||(r[i]=[]),t(e,n,r[i],o)&&te.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!s)}if(te.isFormData(e)&&te.isFunction(e.entries)){const n={};return te.forEachEntry(e,((e,r)=>{t(function(e){return te.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},Ae={"Content-Type":void 0},xe={transitional:we,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=te.isObject(e);if(o&&te.isHTMLForm(e)&&(e=new FormData(e)),te.isFormData(e))return r&&r?JSON.stringify(Te(e)):e;if(te.isArrayBuffer(e)||te.isBuffer(e)||te.isStream(e)||te.isFile(e)||te.isBlob(e))return e;if(te.isArrayBufferView(e))return e.buffer;if(te.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return de(e,new Re.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Re.isNode&&te.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=te.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return de(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(te.isString(e))try{return(0,JSON.parse)(e),te.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||xe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&te.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw ie.from(e,ie.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Re.classes.FormData,Blob:Re.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};te.forEach(["delete","get","head"],(function(e){xe.headers[e]={}})),te.forEach(["post","put","patch"],(function(e){xe.headers[e]=te.merge(Ae)}));const je=xe,Ce=te.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ne=Symbol("internals");function Pe(e){return e&&String(e).trim().toLowerCase()}function Le(e){return!1===e||null==e?e:te.isArray(e)?e.map(Le):String(e)}function Ue(e,t,n,r){return te.isFunction(r)?r.call(this,t,n):te.isString(t)?te.isString(r)?-1!==t.indexOf(r):te.isRegExp(r)?r.test(t):void 0:void 0}class ke{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=Pe(t);if(!o)throw new Error("header name must be a non-empty string");const i=te.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Le(e))}const i=(e,t)=>te.forEach(e,((e,n)=>o(e,n,t)));return te.isPlainObject(e)||e instanceof this.constructor?i(e,t):te.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Ce[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=Pe(e)){const n=te.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(te.isFunction(t))return t.call(this,e,n);if(te.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Pe(e)){const n=te.findKey(this,e);return!(!n||t&&!Ue(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=Pe(e)){const o=te.findKey(n,e);!o||t&&!Ue(0,n[o],o,t)||(delete n[o],r=!0)}}return te.isArray(e)?e.forEach(o):o(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return te.forEach(this,((r,o)=>{const i=te.findKey(n,o);if(i)return t[i]=Le(r),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=Le(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return te.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&te.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Ne]=this[Ne]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Pe(e);t[r]||(function(e,t){const n=te.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return te.isArray(e)?e.forEach(r):r(e),this}}ke.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),te.freezeMethods(ke.prototype),te.freezeMethods(ke);const _e=ke;function Fe(e,t){const n=this||je,r=t||n,o=_e.from(r.headers);let i=r.data;return te.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Be(e){return!(!e||!e.__CANCEL__)}function De(e,t,n){ie.call(this,null==e?"canceled":e,ie.ERR_CANCELED,t,n),this.name="CanceledError"}te.inherits(De,ie,{__CANCEL__:!0});const qe=De,Me=Re.isStandardBrowserEnv?{write:function(e,t,n,r,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),te.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),te.isString(r)&&s.push("path="+r),te.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ie(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const He=Re.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=te.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ze(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[s];o||(o=c),n[i]=a,r[i]=c;let u=s,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const Je={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=_e.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}te.isFormData(r)&&(Re.isStandardBrowserEnv||Re.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const l=Ie(e.baseURL,e.url);function u(){if(!c)return;const r=_e.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ie("Request failed with status code "+n.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),be(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new ie("Request aborted",ie.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new ie("Network Error",ie.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||we;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ie(t,r.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,e,c)),c=null},Re.isStandardBrowserEnv){const t=(e.withCredentials||He(l))&&e.xsrfCookieName&&Me.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&te.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),te.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",ze(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ze(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new qe(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const d=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(l);d&&-1===Re.protocols.indexOf(d)?n(new ie("Unsupported protocol "+d+":",ie.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};te.forEach(Je,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function Ze(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new qe(null,e)}function $e(e){return Ze(e),e.headers=_e.from(e.headers),e.data=Fe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=te.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=te.isString(n)?Je[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new ie(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(te.hasOwnProp(Je,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!te.isFunction(r))throw new TypeError("adapter is not a function");return r})(e.adapter||je.adapter)(e).then((function(t){return Ze(e),t.data=Fe.call(e,e.transformResponse,t),t.headers=_e.from(t.headers),t}),(function(t){return Be(t)||(Ze(e),t&&t.response&&(t.response.data=Fe.call(e,e.transformResponse,t.response),t.response.headers=_e.from(t.response.headers))),Promise.reject(t)}))}const We=e=>e instanceof _e?e.toJSON():e;function Ke(e,t){t=t||{};const n={};function r(e,t,n){return te.isPlainObject(e)&&te.isPlainObject(t)?te.merge.call({caseless:n},e,t):te.isPlainObject(t)?te.merge({},t):te.isArray(t)?t.slice():t}function o(e,t,n){return te.isUndefined(t)?te.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!te.isUndefined(t))return r(void 0,t)}function s(e,t){return te.isUndefined(t)?te.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(We(e),We(t),!0)};return te.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);te.isUndefined(s)&&i!==a||(n[r]=s)})),n}const Ve={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ve[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ge={};Ve.transitional=function(e,t,n){function r(e,t){return"[Axios v1.2.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new ie(r(o," has been removed"+(t?" in "+t:"")),ie.ERR_DEPRECATED);return t&&!Ge[o]&&(Ge[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};const Xe={assertOptions:function(e,t,n){if("object"!=typeof e)throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new ie("option "+i+" must be "+n,ie.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ie("Unknown option "+i,ie.ERR_BAD_OPTION)}},validators:Ve},Qe=Xe.validators;class Ye{constructor(e){this.defaults=e,this.interceptors={request:new ye,response:new ye}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ke(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let i;void 0!==n&&Xe.assertOptions(n,{silentJSONParsing:Qe.transitional(Qe.boolean),forcedJSONParsing:Qe.transitional(Qe.boolean),clarifyTimeoutError:Qe.transitional(Qe.boolean)},!1),void 0!==r&&Xe.assertOptions(r,{encode:Qe.function,serialize:Qe.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=o&&te.merge(o.common,o[t.method]),i&&te.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=_e.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[$e.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);d<u;)l=l.then(e[d++],e[d++]);return l}u=s.length;let f=t;for(d=0;d<u;){const e=s[d++],t=s[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=$e.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,u=c.length;d<u;)l=l.then(c[d++],c[d++]);return l}getUri(e){return be(Ie((e=Ke(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}te.forEach(["delete","get","head","options"],(function(e){Ye.prototype[e]=function(t,n){return this.request(Ke(n||{},{method:e,url:t,data:(n||{}).data}))}})),te.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ke(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ye.prototype[e]=t(),Ye.prototype[e+"Form"]=t(!0)}));const et=Ye;class tt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new qe(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new tt((function(t){e=t})),cancel:e}}}const nt=tt,rt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(rt).forEach((([e,t])=>{rt[t]=e}));const ot=rt,it=function e(t){const n=new et(t),r=T(et.prototype.request,n);return te.extend(r,et.prototype,n,{allOwnKeys:!0}),te.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ke(t,n))},r}(je);it.Axios=et,it.CanceledError=qe,it.CancelToken=nt,it.isCancel=Be,it.VERSION="1.2.2",it.toFormData=de,it.AxiosError=ie,it.Cancel=it.CanceledError,it.all=function(e){return Promise.all(e)},it.spread=function(e){return function(t){return e.apply(null,t)}},it.isAxiosError=function(e){return te.isObject(e)&&!0===e.isAxiosError},it.mergeConfig=Ke,it.AxiosHeaders=_e,it.formToJSON=e=>Te(te.isHTMLForm(e)?new FormData(e):e),it.HttpStatusCode=ot,it.default=it;const st=it;let at=document.getElementById("root");const ct=e=>{switch(at.innerHTML="",e){case"#/":return at.appendChild((()=>{const e=document.createElement("div");return e.classList="home-section",e.innerHTML=R,st.get("https://27.96.131.49/posts").then((t=>{t.data.data.posts.forEach((t=>{e.querySelector("#post-list-section").innerHTML+=`\n             <div class="post" onClick="goDetail(${t.postId})">\n                <div class="post-main">\n                    <div class="post-img">\n                        <img src=${t.image}/ style="width:200px">\n                    </div>\n                    <div class="post-section">\n                        <div class="post-title">\n                            ${t.title}\n                        </div>\n                        <div class="post-detail">\n                            ${t.content}\n                        </div>  \n                    </div>  \n                </div>\n            </div>\n\n            `}))})),e})());case"#/detail":return at.appendChild((()=>{const e=document.createElement("div");e.classList="detail-section",e.innerHTML='<div id="detail-img"> </div> <div id="detail-post"> <div id="detail-title"></div> <div id="detail-date"></div> <div id="detail-desc"></div> </div> <div id="detail-comment"> </div> <hr> <div id="detail-control"> <div id="detail-fix">수정하기</div> <div id="detail-delete" onClick="delDetail()">삭제하기</div> </div>';const t="https://27.96.131.49/post/"+localStorage.getItem("postId");return st.get(t,{headers:{"Content-Security-Policy":"upgrade-insecure-requests"}}).then((t=>{console.log(t.data.data);let n=t.data.data;e.querySelector("#detail-img").innerHTML=`\n            <img src=${n.post.image} style="width: 200px" />\n        `,e.querySelector("#detail-title").innerHTML=`\n            ${n.post.title}\n        `,e.querySelector("#detail-date").innerHTML=`\n            ${n.post.updatedAt.substr(0,9)}\n        `,e.querySelector("#detail-desc").innerHTML=`\n            ${n.post.content}\n        `,n.comments.forEach((t=>{e.querySelector("#detail-comment").innerHTML+=`\n              댓글 :::  ${t.content} <br>\n            `}))})),e})());case"#/post":return at.appendChild((()=>{const e=document.createElement("div");return e.classList="post-section",e.innerHTML="post page",e})());default:return at.appendChild((()=>{const e=document.createElement("div");return e.innerHTML="<h1>404</h1>",e})())}};window.addEventListener("load",(()=>{ct(window.location.hash),window.addEventListener("hashchange",(()=>{ct(window.location.hash)})),"/"===document.location.href.substr(21)&&(location.href="#/")}))})()})();