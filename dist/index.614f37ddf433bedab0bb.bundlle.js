(()=>{"use strict";var n={705:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},738:n=>{n.exports=function(n){return n[1]}},174:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),e.hash&&(n+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(n)?'"'.concat(n,'"'):n):n}},426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(738),o=t.n(r),i=t(705),a=t.n(i)()(o());a.push([n.id,"* {\n    user-select: none;\n}\n\nh1 {\n    text-align: center;\n    font-family: sans-serif;\n    color: #556;\n}\n\n.body-container {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    align-items: center;\n    justify-content: center;\n}\n\n.slides-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n\n.slide.one {\n    display: flex;\n}\n\n.slide {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: opacity ease-in-out .6s;\n    animation-name: blacken;\n    animation-duration: 1.5s;\n}\n\n@keyframes blacken {\n    from {\n        opacity: .6;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n.number {\n    position: absolute;\n    border: 2px solid #225;\n    height: 1.2rem;\n    width: 1.2rem;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #556;\n    font-size: .8rem;\n    font-weight: bold;\n    top: 0;\n    color: #09f;\n}\n\n.dot {\n    display: inline-block;\n    margin: .2rem;\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    background-color: #999;\n    transition: background-color .6s ease;\n    cursor: pointer;\n}\n\n.dot:active,\n.dot:hover {\n    background-color: #223;\n}\n\n\n.move {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    text-decoration: none;\n    color: #556;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n.move:active {\n    color: #eee;\n}\n\n.move.left {\n    left: 2rem;\n}\n\n.move.right {\n    right: 2rem;\n}",""]);const c=a},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var u=t(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},951:(n,e,t)=>{n.exports=t.p+"e8d62bd7a129439f5fa2.jpg"},336:(n,e,t)=>{n.exports=t.p+"85050aaa368058e21a12.jpg"},707:(n,e,t)=>{n.exports=t.p+"d46ce2332522ee21c67c.jpg"},95:(n,e,t)=>{n.exports=t.p+"a5cd6e66f4d9c3017228.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),u=t.n(l),d=t(589),p=t.n(d),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var v=t(174),h=t.n(v),y=new URL(t(951),t.b),g=new URL(t(336),t.b),b=new URL(t(707),t.b),x=new URL(t(95),t.b);h()(y),h()(g),h()(b),h()(x);const w=document.querySelectorAll(".slide"),S=function(n,e){e[n].style.display="flex"},k=function(n,e){e[n].style.display="none"},j=document.querySelector(".move.left"),E=document.querySelector(".move.right"),T=document.querySelectorAll(".dot");let C=!1,L=!1,M=0;function A(){3==M&&(C=!0),C?(k(3,w),U(3),S(0,w),R(0),M=0,C=!1):(I(),U(M),S(M+1,w),M+=1,R(M))}function I(){k(M,w)}function R(n,e=T){T[n].style.backgroundColor="#223"}function U(n,e=T){T[n].style.backgroundColor="#999"}w.forEach((n=>{n.style.display="none"})),w[0].style.display="flex",R(0),E.addEventListener("click",A),j.addEventListener("click",(function(){0==M&&(L=!0),L?(I(),U(M),S(3,w),R(3),L=!1,M=3):(I(),U(M),S(M-1,w),M-=1,R(M))})),T.forEach(((n,e)=>{n.addEventListener("click",(()=>{k(M,w),S(e,w),U(M),R(e),M=e}))})),setInterval(A,1e4)})()})();