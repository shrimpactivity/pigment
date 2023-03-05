(()=>{"use strict";var t={424:(t,e,n)=>{n.d(e,{Z:()=>f});var r=n(537),o=n.n(r),i=n(645),a=n.n(i),s=n(195),u=n(630),c=n(658),l=a()(o());l.i(s.Z),l.i(u.Z),l.i(c.Z),l.push([t.id,":root {\r\n  --menu-background-color: #282942;\r\n  --menu-hover-color: #3e3f66;\r\n  --text-color: #eaeaea;\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n\r\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAIA;EACE,gCAAgC;EAChC,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB",sourcesContent:["@import url('./styles/menu.css');\r\n@import url('./styles/canvas.css');\r\n@import url('./styles/debug.css');\r\n\r\n:root {\r\n  --menu-background-color: #282942;\r\n  --menu-hover-color: #3e3f66;\r\n  --text-color: #eaeaea;\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n\r\n"],sourceRoot:""}]);const f=l},630:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(537),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,".canvas-container {\r\n  position: relative;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  cursor: crosshair;\r\n}\r\n\r\n.canvas-container canvas {\r\n  position: absolute;\r\n  cursor: crosshair;\r\n}\r\n\r\n.foreground-canvas {\r\n  z-index: 2;\r\n}\r\n\r\n.background-canvas {\r\n  z-index: 1;\r\n}","",{version:3,sources:["webpack://./src/styles/canvas.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ",sourcesContent:[".canvas-container {\r\n  position: relative;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  cursor: crosshair;\r\n}\r\n\r\n.canvas-container canvas {\r\n  position: absolute;\r\n  cursor: crosshair;\r\n}\r\n\r\n.foreground-canvas {\r\n  z-index: 2;\r\n}\r\n\r\n.background-canvas {\r\n  z-index: 1;\r\n}"],sourceRoot:""}]);const s=a},658:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(537),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,".debug-container {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  left: 10px;\r\n  background-color: black;\r\n  color: white;\r\n  border: 2px solid white;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  padding: 8px;\r\n  user-select: none;\r\n  -moz-user-select: none;\r\n  -khtml-user-select: none;\r\n  -webkit-user-select: none;\r\n  -o-user-select: none;\r\n}","",{version:3,sources:["webpack://./src/styles/debug.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,uBAAuB;EACvB,YAAY;EACZ,uBAAuB;EACvB,yCAAyC;EACzC,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,wBAAwB;EACxB,yBAAyB;EACzB,oBAAoB;AACtB",sourcesContent:[".debug-container {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  left: 10px;\r\n  background-color: black;\r\n  color: white;\r\n  border: 2px solid white;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  padding: 8px;\r\n  user-select: none;\r\n  -moz-user-select: none;\r\n  -khtml-user-select: none;\r\n  -webkit-user-select: none;\r\n  -o-user-select: none;\r\n}"],sourceRoot:""}]);const s=a},195:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(537),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,".menu-container {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 0px;\r\n  z-index: 3;\r\n  width: 100vw;\r\n  background-color: var(--menu-background-color);\r\n  color: var(--text-color);\r\n}\r\n\r\n.menu-button-container {\r\n  display: flex;\r\n}\r\n\r\n.menu-button {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu-button:hover {\r\n  box-shadow: 0px 1px 0px 0px white;\r\n  background-color: var(--menu-hover-color);\r\n}","",{version:3,sources:["webpack://./src/styles/menu.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,8CAA8C;EAC9C,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,yCAAyC;AAC3C",sourcesContent:[".menu-container {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 0px;\r\n  z-index: 3;\r\n  width: 100vw;\r\n  background-color: var(--menu-background-color);\r\n  color: var(--text-color);\r\n}\r\n\r\n.menu-button-container {\r\n  display: flex;\r\n}\r\n\r\n.menu-button {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu-button:hover {\r\n  box-shadow: 0px 1px 0px 0px white;\r\n  background-color: var(--menu-hover-color);\r\n}"],sourceRoot:""}]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(a[u]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var u=t[s],c=r.base?u[0]+r.base:u[0],l=i[c]||0,f="".concat(c," ").concat(l);i[c]=l+1;var p=n(f),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var y=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:f,updater:y,references:1})}a.push(f)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var u=r(t,o),c=0;c<i.length;c++){var l=n(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=u}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),u=n.n(s),c=n(216),l=n.n(c),f=n(589),p=n.n(f),h=n(424),y={};y.styleTagTransform=p(),y.setAttributes=u(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),e()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;const d={paused:!1,targetFPS:30,targetDelta:Math.floor(1e3/30),previousDeltas:[],addDelta:function(t){},frameTimingData:{frameStartTime:Date.now(),actualFrameDelta:0,updateTimeoutDelay:0,averageFrameDeltaSampleSize:30,averageFrameDelta:0,previousFrameDeltas:[]},applyGlobalParticleColor:!1,staticBackgroundColor:!0};function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}const b=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.isVisible=!1,this.debugElement=document.querySelector(".debug-container"),console.assert(null!==this.debugElement)}var e,n;return e=t,(n=[{key:"update",value:function(t){if(this.isVisible){for(var e="",n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];e+='<div class="dubug-info">'.concat(o,": ").concat(t[o],"</div>")}this.debugElement.innerHTML=e}}},{key:"show",value:function(){this.isVisible=!0,this.debugElement.style.display="block"}},{key:"hide",value:function(){this.isVisible=!1,this.debugElement.style.display="none"}},{key:"toggle",value:function(){return this.isVisible?this.hide():this.show()}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}const w=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n}var e,n;return e=t,(n=[{key:"distanceFromOrigin",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"distanceFrom",value:function(t){var e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)}},{key:"addTo",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"interpolatePointsBetween",value:function(e,n){for(var r=[],o=(e.x-this.x)/(n+1),i=(e.y-this.y)/(n+1),a=0;a<n;a+=1){var s=o*(a+1)+this.x,u=i*(a+1)+this.y;r.push(new t(s,u))}return r}},{key:"toString",value:function(){return"{x: ".concat(this.x,", y: ").concat(this.y,"}")}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}const S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.position=new w(0,0),this.prevPosition=new w(0,0),this.pressed=!1,this.addEventHandlers()}var e,n;return e=t,(n=[{key:"addEventHandlers",value:function(){var t=this;this.element.addEventListener("mousemove",(function(e){t.position.x=e.offsetX,t.position.y=e.offsetY})),this.element.addEventListener("mousedown",(function(e){t.pressed=!0})),this.element.addEventListener("mouseup",(function(e){t.pressed=!1}))}},{key:"updatePrevPosition",value:function(){this.prevPosition.x=this.position.x,this.prevPosition.y=this.position.y}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}const B=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.addEventListeners(e)}var e,n;return e=t,(n=[{key:"addEventListeners",value:function(t){document.documentElement.addEventListener("keyup",(function(e){var n=e.key;console.log("Key Pressed: <".concat(n,">")),-1!==Object.keys(t).indexOf(n)&&t[n]()}))}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();var P=function(t,e){return console.assert(t<=e),Math.floor(Math.random()*(e-t+1)+t)};function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,M(r.key),r)}}function O(t,e,n){return(e=M(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(t){var e=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===j(e)?e:String(e)}const z=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rainbow";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,"styles",["rainbow","path","random","static"]),O(this,"styleFormulas",{rainbow:function(){n.color.hue+=n.speed*n.colorDirections[0],n.color.hue>359&&(n.color.hue=0)},path:function(){},random:function(){var t=Math.floor(1/n.speed)+1;n.updates%t==0&&(n.color.hue=P(0,359),n.color.lightness=P(50,100),n.color.saturation=P(50,100))},static:function(){}}),console.assert(-1!==this.styles.indexOf(r)),this.updates=0,this.color=e,this.colorDirections=[1,1,1],this.speed=1,this.path=[],this.grayscale=!1,this.style=r}var e,n;return e=t,(n=[{key:"applyStyleFormula",value:function(){this.styleFormulas[this.style]()}},{key:"update",value:function(){this.applyStyleFormula(),this.updates+=1}},{key:"newColor",value:function(){var t="hsl(".concat(this.color.hue,", ").concat(this.grayscale?0:this.color.saturation,"%, ").concat(this.color.lightness,"%)");return this.update(),t}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}const I=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),console.assert(e>=0&&e<360),console.assert(n>=0&&n<=100),console.assert(r>=0&&r<=100),console.assert(o>=0&&o<=1),this.hue=e,this.saturation=n,this.lightness=r,this.alpha=o}var e,n;return e=t,(n=[{key:"toString",value:function(){return this.alpha<1?"hsla(".concat(this.hue,", ").concat(this.saturation,"%, ").concat(this.lightness,"%, ").concat(this.alpha,"%)"):"hsl(".concat(this.hue,", ").concat(this.saturation,"%, ").concat(this.lightness,"%)")}}])&&Z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();var R=2*Math.PI;function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}const L=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.position=new w(e,n),this.velocity=new w(0,0),this.lifeTime=0,this.timer=0,this.color=new I}var e,n;return e=t,n=[{key:"updatePosition",value:function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y}},{key:"draw",value:function(t,e,n,r){"circle"!==e?function(t,e,n,r){arguments.length>4&&void 0!==arguments[4]&&!arguments[4]?(t.lineWidth=1,t.strokeRect(e,n,r,r)):t.fillRect(e,n,r,r)}(t,this.position.x,this.position.y,n,r):function(t,e,n,r){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];1!==r?(t.lineWidth=1,t.strokeStyle=color,t.beginPath(),t.arc(e,n,r/2,0,R),t.stroke(),o&&t.fill()):t.fillRect(e,n,1,1)}(t,this.position.x,this.position.y,n,r)}}],n&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Y(t){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(t)}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Y(o)?o:String(o)),r)}var o}const q=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.particles=[],this.color=new I(194,100,50),this.colorGen=new z(this.particleColor),this.settings={size:4,shape:"circle",outline:!1,speed:1,movementOptions:["creep","noodle","crystal","drip","bounce","orbit","none"],movement:"creep",growthSpeed:0,colorBehaviorOptions:["global-dynamic","global-static","local-dynamic"],colorBehavior:"global-dynamic",grayscale:!1,reflectionStyleOptions:["polar","horizontal","vertical","none"],reflectionStyle:"none",numReflections:2,lifespan:-1,interpolateMouseMovements:!0,interpolateParticleMovements:!0},this.updates=0}var e,n;return e=t,(n=[{key:"updateAndDraw",value:function(t,e,n,r){e.pressed&&this.addParticle(e.position.x,e.position.y),t.fillStyle=this.color;var o,i=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}(this.particles);try{for(i.s();!(o=i.n()).done;)o.value.draw(t,this.shape,this.size,!this.outline)}catch(t){i.e(t)}finally{i.f()}this.updates+=1}},{key:"addParticle",value:function(t,e){var n=new L(t,e);this.particles.push(n)}},{key:"draw",value:function(t){}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==W(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==W(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===W(o)?o:String(o)),r)}var o}var G=new(function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.foregroundElement=e,this.backgroundElement=n,this.foregroundContext=e.getContext("2d"),this.backgroundContext=n.getContext("2d"),this.width=this.foregroundElement.clientWidth,this.height=this.foregroundElement.clientHeight,this.backgroundColor=new I(251,33,8),this.backgroundColorGen=new z(new I(251,66,33)),this.settings=d,this.paintbrush=new q,this.debugView=new b,this.mouse=new S(e),this.keys=new B({" ":function(){r.settings.paused=!r.settings.paused},"/":function(){r.debugView.toggle()}})}var e,n;return e=t,(n=[{key:"start",value:function(){this.resize(),this.update()}},{key:"update",value:function(){var t=this;setTimeout((function(){t.update()}),this.settings.targetDelta),this.updatePaintbrush(),this.updateBackgroundColor(),this.updateDebugDisplay()}},{key:"updatePaintbrush",value:function(){this.settings.paused||this.paintbrush.updateAndDraw(this.foregroundContext,this.mouse,this.width,this.height)}},{key:"updateBackgroundColor",value:function(){this.settings.staticBackgroundColor||(this.backgroundColor=this.backgroundColorGen.newColor(),this.fillBackground())}},{key:"updateDebugDisplay",value:function(){this.debugView.update({updates:this.paintbrush.updates,width:this.width,height:this.height,"mouse pos":this.mouse.position,"mouse down":this.mouse.pressed,particles:this.paintbrush.particles.length,"particle color":this.paintbrush.color,"background color":this.backgroundColor})}},{key:"resize",value:function(){var t=document.body.clientWidth,e=document.body.clientHeight;this.width=t,this.height=e;var n=document.createElement("canvas");n.width=t,n.height=e,n.getContext("2d").drawImage(this.foregroundElement,0,0),this.foregroundElement.width=t,this.foregroundElement.height=e,this.foregroundContext.drawImage(n,0,0),this.backgroundElement.width=t,this.backgroundElement.height=e,this.fillBackground()}},{key:"fillBackground",value:function(){this.foregroundContext.fillStyle=this.backgroundColor,this.foregroundContext.fillRect(0,0,this.width,this.height)}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())(document.getElementById("foreground-canvas"),document.getElementById("background-canvas"));window.onresize=function(){G.resize()},G.start()})()})();
//# sourceMappingURL=main.bundle.js.map