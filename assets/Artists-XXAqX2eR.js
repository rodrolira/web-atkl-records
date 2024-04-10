import{P as v,R as Ua,j as p,L as ma,u as yn,T as wn}from"./main-1yEd1KeW.js";function da(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,e)}return n}function u(t){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?da(Object(n),!0).forEach(function(e){S(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):da(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function St(t){"@babel/helpers - typeof";return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},St(t)}function kn(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function va(t,a){for(var n=0;n<a.length;n++){var e=a[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function xn(t,a,n){return a&&va(t.prototype,a),n&&va(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function S(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function Qt(t,a){return On(t)||Pn(t,a)||Ya(t,a)||Nn()}function ut(t){return An(t)||Sn(t)||Ya(t)||En()}function An(t){if(Array.isArray(t))return Dt(t)}function On(t){if(Array.isArray(t))return t}function Sn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Pn(t,a){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var e=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(e.push(o.value),!(a&&e.length===a));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return e}}function Ya(t,a){if(t){if(typeof t=="string")return Dt(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dt(t,a)}}function Dt(t,a){(a==null||a>t.length)&&(a=t.length);for(var n=0,e=new Array(a);n<a;n++)e[n]=t[n];return e}function En(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ba=function(){},ta={},$a={},Wa=null,Ha={mark:ba,measure:ba};try{typeof window<"u"&&(ta=window),typeof document<"u"&&($a=document),typeof MutationObserver<"u"&&(Wa=MutationObserver),typeof performance<"u"&&(Ha=performance)}catch{}var Cn=ta.navigator||{},ga=Cn.userAgent,pa=ga===void 0?"":ga,Y=ta,y=$a,ha=Wa,vt=Ha;Y.document;var R=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Va=~pa.indexOf("MSIE")||~pa.indexOf("Trident/"),bt,gt,pt,ht,yt,M="___FONT_AWESOME___",Ut=16,Xa="fa",Ga="svg-inline--fa",B="data-fa-i2svg",Yt="data-fa-pseudo-element",In="data-fa-pseudo-element-pending",aa="data-prefix",na="data-icon",ya="fontawesome-i2svg",Tn="async",_n=["HTML","HEAD","STYLE","SCRIPT"],Ba=function(){try{return!0}catch{return!1}}(),h="classic",w="sharp",ea=[h,w];function mt(t){return new Proxy(t,{get:function(n,e){return e in n?n[e]:n[h]}})}var ot=mt((bt={},S(bt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),S(bt,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),bt)),st=mt((gt={},S(gt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(gt,w,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),gt)),ft=mt((pt={},S(pt,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(pt,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),pt)),jn=mt((ht={},S(ht,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(ht,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ht)),Mn=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,qa="fa-layers-text",Ln=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,zn=mt((yt={},S(yt,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(yt,w,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),yt)),Ka=[1,2,3,4,5,6,7,8,9,10],Rn=Ka.concat([11,12,13,14,15,16,17,18,19,20]),Fn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],X={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lt=new Set;Object.keys(st[h]).map(lt.add.bind(lt));Object.keys(st[w]).map(lt.add.bind(lt));var Dn=[].concat(ea,ut(lt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",X.GROUP,X.SWAP_OPACITY,X.PRIMARY,X.SECONDARY]).concat(Ka.map(function(t){return"".concat(t,"x")})).concat(Rn.map(function(t){return"w-".concat(t)})),rt=Y.FontAwesomeConfig||{};function Un(t){var a=y.querySelector("script["+t+"]");if(a)return a.getAttribute(t)}function Yn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var $n=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];$n.forEach(function(t){var a=Qt(t,2),n=a[0],e=a[1],r=Yn(Un(n));r!=null&&(rt[e]=r)})}var Ja={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xa,replacementClass:Ga,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rt.familyPrefix&&(rt.cssPrefix=rt.familyPrefix);var tt=u(u({},Ja),rt);tt.autoReplaceSvg||(tt.observeMutations=!1);var d={};Object.keys(Ja).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){tt[t]=n,it.forEach(function(e){return e(d)})},get:function(){return tt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(a){tt.cssPrefix=a,it.forEach(function(n){return n(d)})},get:function(){return tt.cssPrefix}});Y.FontAwesomeConfig=d;var it=[];function Wn(t){return it.push(t),function(){it.splice(it.indexOf(t),1)}}var D=Ut,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hn(t){if(!(!t||!R)){var a=y.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=t;for(var n=y.head.childNodes,e=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return y.head.insertBefore(a,e),t}}var Vn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ct(){for(var t=12,a="";t-- >0;)a+=Vn[Math.random()*62|0];return a}function at(t){for(var a=[],n=(t||[]).length>>>0;n--;)a[n]=t[n];return a}function ra(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Za(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xn(t){return Object.keys(t||{}).reduce(function(a,n){return a+"".concat(n,'="').concat(Za(t[n]),'" ')},"").trim()}function Ct(t){return Object.keys(t||{}).reduce(function(a,n){return a+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ia(t){return t.size!==_.size||t.x!==_.x||t.y!==_.y||t.rotate!==_.rotate||t.flipX||t.flipY}function Gn(t){var a=t.transform,n=t.containerWidth,e=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Bn(t){var a=t.transform,n=t.width,e=n===void 0?Ut:n,r=t.height,i=r===void 0?Ut:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Va?f+="translate(".concat(a.x/D-e/2,"em, ").concat(a.y/D-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(a.x/D,"em), calc(-50% + ").concat(a.y/D,"em)) "):f+="translate(".concat(a.x/D,"em, ").concat(a.y/D,"em) "),f+="scale(".concat(a.size/D*(a.flipX?-1:1),", ").concat(a.size/D*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var qn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qa(){var t=Xa,a=Ga,n=d.cssPrefix,e=d.replacementClass,r=qn;if(n!==t||e!==a){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(e))}return r}var wa=!1;function Mt(){d.autoAddCss&&!wa&&(Hn(Qa()),wa=!0)}var Kn={mixout:function(){return{dom:{css:Qa,insertCss:Mt}}},hooks:function(){return{beforeDOMElementCreation:function(){Mt()},beforeI2svg:function(){Mt()}}}},L=Y||{};L[M]||(L[M]={});L[M].styles||(L[M].styles={});L[M].hooks||(L[M].hooks={});L[M].shims||(L[M].shims=[]);var T=L[M],tn=[],Jn=function t(){y.removeEventListener("DOMContentLoaded",t),Pt=1,tn.map(function(a){return a()})},Pt=!1;R&&(Pt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Pt||y.addEventListener("DOMContentLoaded",Jn));function Zn(t){R&&(Pt?setTimeout(t,0):tn.push(t))}function dt(t){var a=t.tag,n=t.attributes,e=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Za(t):"<".concat(a," ").concat(Xn(e),">").concat(i.map(dt).join(""),"</").concat(a,">")}function ka(t,a,n){if(t&&t[a]&&t[a][n])return{prefix:a,iconName:n,icon:t[a][n]}}var Qn=function(a,n){return function(e,r,i,o){return a.call(n,e,r,i,o)}},Lt=function(a,n,e,r){var i=Object.keys(a),o=i.length,s=r!==void 0?Qn(n,r):n,f,c,l;for(e===void 0?(f=1,l=a[i[0]]):(f=0,l=e);f<o;f++)c=i[f],l=s(l,a[c],c,a);return l};function te(t){for(var a=[],n=0,e=t.length;n<e;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<e){var i=t.charCodeAt(n++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),n--)}else a.push(r)}return a}function $t(t){var a=te(t);return a.length===1?a[0].toString(16):null}function ae(t,a){var n=t.length,e=t.charCodeAt(a),r;return e>=55296&&e<=56319&&n>a+1&&(r=t.charCodeAt(a+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function xa(t){return Object.keys(t).reduce(function(a,n){var e=t[n],r=!!e.icon;return r?a[e.iconName]=e.icon:a[n]=e,a},{})}function Wt(t,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=n.skipHooks,r=e===void 0?!1:e,i=xa(a);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,xa(a)):T.styles[t]=u(u({},T.styles[t]||{}),i),t==="fas"&&Wt("fa",a)}var wt,kt,xt,K=T.styles,ne=T.shims,ee=(wt={},S(wt,h,Object.values(ft[h])),S(wt,w,Object.values(ft[w])),wt),oa=null,an={},nn={},en={},rn={},on={},re=(kt={},S(kt,h,Object.keys(ot[h])),S(kt,w,Object.keys(ot[w])),kt);function ie(t){return~Dn.indexOf(t)}function oe(t,a){var n=a.split("-"),e=n[0],r=n.slice(1).join("-");return e===t&&r!==""&&!ie(r)?r:null}var sn=function(){var a=function(i){return Lt(K,function(o,s,f){return o[f]=Lt(s,i,{}),o},{})};an=a(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),nn=a(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),on=a(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in K||d.autoFetchSvg,e=Lt(ne,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});en=e.names,rn=e.unicodes,oa=It(d.styleDefault,{family:d.familyDefault})};Wn(function(t){oa=It(t.styleDefault,{family:d.familyDefault})});sn();function sa(t,a){return(an[t]||{})[a]}function se(t,a){return(nn[t]||{})[a]}function G(t,a){return(on[t]||{})[a]}function fn(t){return en[t]||{prefix:null,iconName:null}}function fe(t){var a=rn[t],n=sa("fas",t);return a||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $(){return oa}var fa=function(){return{prefix:null,iconName:null,rest:[]}};function It(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.family,e=n===void 0?h:n,r=ot[e][t],i=st[e][t]||st[e][r],o=t in T.styles?t:null;return i||o||null}var Aa=(xt={},S(xt,h,Object.keys(ft[h])),S(xt,w,Object.keys(ft[w])),xt);function Tt(t){var a,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,r=e===void 0?!1:e,i=(a={},S(a,h,"".concat(d.cssPrefix,"-").concat(h)),S(a,w,"".concat(d.cssPrefix,"-").concat(w)),a),o=null,s=h;(t.includes(i[h])||t.some(function(c){return Aa[h].includes(c)}))&&(s=h),(t.includes(i[w])||t.some(function(c){return Aa[w].includes(c)}))&&(s=w);var f=t.reduce(function(c,l){var m=oe(d.cssPrefix,l);if(K[l]?(l=ee[s].includes(l)?jn[s][l]:l,o=l,c.prefix=l):re[s].indexOf(l)>-1?(o=l,c.prefix=It(l,{family:s})):m?c.iconName=m:l!==d.replacementClass&&l!==i[h]&&l!==i[w]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var b=o==="fa"?fn(c.iconName):{},g=G(c.prefix,c.iconName);b.prefix&&(o=null),c.iconName=b.iconName||g||c.iconName,c.prefix=b.prefix||c.prefix,c.prefix==="far"&&!K.far&&K.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},fa());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===w&&(K.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=G(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=$()||"fas"),f}var le=function(){function t(){kn(this,t),this.definitions={}}return xn(t,[{key:"add",value:function(){for(var n=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Wt(s,o[s]);var f=ft[h][s];f&&Wt(f,o[s]),sn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][f]=c}),n}}]),t}(),Oa=[],J={},Q={},ce=Object.keys(Q);function ue(t,a){var n=a.mixoutsTo;return Oa=t,J={},Object.keys(Q).forEach(function(e){ce.indexOf(e)===-1&&delete Q[e]}),Oa.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),St(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){J[o]||(J[o]=[]),J[o].push(i[o])})}e.provides&&e.provides(Q)}),n}function Ht(t,a){for(var n=arguments.length,e=new Array(n>2?n-2:0),r=2;r<n;r++)e[r-2]=arguments[r];var i=J[t]||[];return i.forEach(function(o){a=o.apply(null,[a].concat(e))}),a}function q(t){for(var a=arguments.length,n=new Array(a>1?a-1:0),e=1;e<a;e++)n[e-1]=arguments[e];var r=J[t]||[];r.forEach(function(i){i.apply(null,n)})}function z(){var t=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q[t]?Q[t].apply(null,a):void 0}function Vt(t){t.prefix==="fa"&&(t.prefix="fas");var a=t.iconName,n=t.prefix||$();if(a)return a=G(n,a)||a,ka(ln.definitions,n,a)||ka(T.styles,n,a)}var ln=new le,me=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,q("noAuto")},de={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(q("beforeI2svg",a),z("pseudoElements2svg",a),z("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Zn(function(){be({autoReplaceSvgRoot:n}),q("watch",a)})}},ve={icon:function(a){if(a===null)return null;if(St(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:G(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var n=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=It(a[0]);return{prefix:e,iconName:G(e,n)||n}}if(typeof a=="string"&&(a.indexOf("".concat(d.cssPrefix,"-"))>-1||a.match(Mn))){var r=Tt(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||$(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=$();return{prefix:i,iconName:G(i,a)||a}}}},I={noAuto:me,config:d,dom:de,parse:ve,library:ln,findIconDefinition:Vt,toHtml:dt},be=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.autoReplaceSvgRoot,e=n===void 0?y:n;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&R&&d.autoReplaceSvg&&I.dom.i2svg({node:e})};function _t(t,a){return Object.defineProperty(t,"abstract",{get:a}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return dt(e)})}}),Object.defineProperty(t,"node",{get:function(){if(R){var e=y.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function ge(t){var a=t.children,n=t.main,e=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ia(o)&&n.found&&!e.found){var s=n.width,f=n.height,c={x:s/f/2,y:.5};r.style=Ct(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function pe(t){var a=t.prefix,n=t.iconName,e=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(a,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}function la(t){var a=t.icons,n=a.main,e=a.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,m=t.extra,b=t.watchable,g=b===void 0?!1:b,A=e.found?e:n,E=A.width,k=A.height,N=r==="fak",x=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(F){return m.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(m.classes).join(" "),O={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(k)})},C=N&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/k*16*.0625,"em")}:{};g&&(O.attributes[B]=""),f&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(l||ct())},children:[f]}),delete O.attributes.title);var P=u(u({},O),{},{prefix:r,iconName:i,main:n,mask:e,maskId:c,transform:o,symbol:s,styles:u(u({},C),m.styles)}),H=e.found&&n.found?z("generateAbstractMask",P)||{children:[],attributes:{}}:z("generateAbstractIcon",P)||{children:[],attributes:{}},V=H.children,jt=H.attributes;return P.children=V,P.attributes=jt,s?pe(P):ge(P)}function Sa(t){var a=t.content,n=t.width,e=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[B]="");var l=u({},o.styles);ia(r)&&(l.transform=Bn({transform:r,startCentered:!0,width:n,height:e}),l["-webkit-transform"]=l.transform);var m=Ct(l);m.length>0&&(c.style=m);var b=[];return b.push({tag:"span",attributes:c,children:[a]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function he(t){var a=t.content,n=t.title,e=t.extra,r=u(u(u({},e.attributes),n?{title:n}:{}),{},{class:e.classes.join(" ")}),i=Ct(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[a]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zt=T.styles;function Xt(t){var a=t[0],n=t[1],e=t.slice(4),r=Qt(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:n,icon:o}}var ye={found:!1,width:512,height:512};function we(t,a){!Ba&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(a,'" is missing.'))}function Gt(t,a){var n=a;return a==="fa"&&d.styleDefault!==null&&(a=$()),new Promise(function(e,r){if(z("missingIconAbstract"),n==="fa"){var i=fn(t)||{};t=i.iconName||t,a=i.prefix||a}if(t&&a&&zt[a]&&zt[a][t]){var o=zt[a][t];return e(Xt(o))}we(t,a),e(u(u({},ye),{},{icon:d.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}var Pa=function(){},Bt=d.measurePerformance&&vt&&vt.mark&&vt.measure?vt:{mark:Pa,measure:Pa},nt='FA "6.5.2"',ke=function(a){return Bt.mark("".concat(nt," ").concat(a," begins")),function(){return cn(a)}},cn=function(a){Bt.mark("".concat(nt," ").concat(a," ends")),Bt.measure("".concat(nt," ").concat(a),"".concat(nt," ").concat(a," begins"),"".concat(nt," ").concat(a," ends"))},ca={begin:ke,end:cn},At=function(){};function Ea(t){var a=t.getAttribute?t.getAttribute(B):null;return typeof a=="string"}function xe(t){var a=t.getAttribute?t.getAttribute(aa):null,n=t.getAttribute?t.getAttribute(na):null;return a&&n}function Ae(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Oe(){if(d.autoReplaceSvg===!0)return Ot.replace;var t=Ot[d.autoReplaceSvg];return t||Ot.replace}function Se(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Pe(t){return y.createElement(t)}function un(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.ceFn,e=n===void 0?t.tag==="svg"?Se:Pe:n;if(typeof t=="string")return y.createTextNode(t);var r=e(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(un(o,{ceFn:e}))}),r}function Ee(t){var a=" ".concat(t.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var Ot={replace:function(a){var n=a[0];if(n.parentNode)if(a[1].forEach(function(r){n.parentNode.insertBefore(un(r),n)}),n.getAttribute(B)===null&&d.keepOriginalSource){var e=y.createComment(Ee(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(a){var n=a[0],e=a[1];if(~ra(n).indexOf(d.replacementClass))return Ot.replace(a);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return dt(s)}).join(`
`);n.setAttribute(B,""),n.innerHTML=o}};function Na(t){t()}function mn(t,a){var n=typeof a=="function"?a:At;if(t.length===0)n();else{var e=Na;d.mutateApproach===Tn&&(e=Y.requestAnimationFrame||Na),e(function(){var r=Oe(),i=ca.begin("mutate");t.map(r),i(),n()})}}var ua=!1;function dn(){ua=!0}function qt(){ua=!1}var Et=null;function Ca(t){if(ha&&d.observeMutations){var a=t.treeCallback,n=a===void 0?At:a,e=t.nodeCallback,r=e===void 0?At:e,i=t.pseudoElementsCallback,o=i===void 0?At:i,s=t.observeMutationsRoot,f=s===void 0?y:s;Et=new ha(function(c){if(!ua){var l=$();at(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ea(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ea(m.target)&&~Fn.indexOf(m.attributeName))if(m.attributeName==="class"&&xe(m.target)){var b=Tt(ra(m.target)),g=b.prefix,A=b.iconName;m.target.setAttribute(aa,g||l),A&&m.target.setAttribute(na,A)}else Ae(m.target)&&r(m.target)})}}),R&&Et.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ne(){Et&&Et.disconnect()}function Ce(t){var a=t.getAttribute("style"),n=[];return a&&(n=a.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),n}function Ie(t){var a=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),e=t.innerText!==void 0?t.innerText.trim():"",r=Tt(ra(t));return r.prefix||(r.prefix=$()),a&&n&&(r.prefix=a,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=se(r.prefix,t.innerText)||sa(r.prefix,$t(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Te(t){var a=at(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),e=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?a["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(e||ct()):(a["aria-hidden"]="true",a.focusable="false")),a}function _e(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ia(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ie(t),e=n.iconName,r=n.prefix,i=n.rest,o=Te(t),s=Ht("parseNodeAttributes",{},t),f=a.styleParser?Ce(t):[];return u({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var je=T.styles;function vn(t){var a=d.autoReplaceSvg==="nest"?Ia(t,{styleParser:!1}):Ia(t);return~a.extra.classes.indexOf(qa)?z("generateLayersText",t,a):z("generateSvgReplacementMutation",t,a)}var W=new Set;ea.map(function(t){W.add("fa-".concat(t))});Object.keys(ot[h]).map(W.add.bind(W));Object.keys(ot[w]).map(W.add.bind(W));W=ut(W);function Ta(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var n=y.documentElement.classList,e=function(m){return n.add("".concat(ya,"-").concat(m))},r=function(m){return n.remove("".concat(ya,"-").concat(m))},i=d.autoFetchSvg?W:ea.map(function(l){return"fa-".concat(l)}).concat(Object.keys(je));i.includes("fa")||i.push("fa");var o=[".".concat(qa,":not([").concat(B,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(B,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=at(t.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=ca.begin("onTree"),c=s.reduce(function(l,m){try{var b=vn(m);b&&l.push(b)}catch(g){Ba||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(b){mn(b,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),f(),l()})}).catch(function(b){f(),m(b)})})}function Me(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vn(t).then(function(n){n&&mn([n],a)})}function Le(t){return function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:Vt(a||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Vt(r||{})),t(e,u(u({},n),{},{mask:r}))}}var ze=function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.transform,r=e===void 0?_:e,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,c=n.maskId,l=c===void 0?null:c,m=n.title,b=m===void 0?null:m,g=n.titleId,A=g===void 0?null:g,E=n.classes,k=E===void 0?[]:E,N=n.attributes,x=N===void 0?{}:N,O=n.styles,C=O===void 0?{}:O;if(a){var P=a.prefix,H=a.iconName,V=a.icon;return _t(u({type:"icon"},a),function(){return q("beforeDOMElementCreation",{iconDefinition:a,params:n}),d.autoA11y&&(b?x["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(A||ct()):(x["aria-hidden"]="true",x.focusable="false")),la({icons:{main:Xt(V),mask:f?Xt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:H,transform:u(u({},_),r),symbol:o,title:b,maskId:l,titleId:A,extra:{attributes:x,styles:C,classes:k}})})}},Re={mixout:function(){return{icon:Le(ze)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ta,n.nodeCallback=Me,n}}},provides:function(a){a.i2svg=function(n){var e=n.node,r=e===void 0?y:e,i=n.callback,o=i===void 0?function(){}:i;return Ta(r,o)},a.generateSvgReplacementMutation=function(n,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,f=e.transform,c=e.symbol,l=e.mask,m=e.maskId,b=e.extra;return new Promise(function(g,A){Promise.all([Gt(r,s),l.iconName?Gt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var k=Qt(E,2),N=k[0],x=k[1];g([n,la({icons:{main:N,mask:x},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(A)})},a.generateAbstractIcon=function(n){var e=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Ct(s);f.length>0&&(r.style=f);var c;return ia(o)&&(c=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(c||i.icon),{children:e,attributes:r}}}},Fe={mixout:function(){return{layer:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return _t({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:n,params:e});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ut(i)).join(" ")},children:o}]})}}}},De={mixout:function(){return{counter:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,c=f===void 0?{}:f,l=e.styles,m=l===void 0?{}:l;return _t({type:"counter",content:n},function(){return q("beforeDOMElementCreation",{content:n,params:e}),he({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ut(s))}})})}}}},Ue={mixout:function(){return{text:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?_:r,o=e.title,s=o===void 0?null:o,f=e.classes,c=f===void 0?[]:f,l=e.attributes,m=l===void 0?{}:l,b=e.styles,g=b===void 0?{}:b;return _t({type:"text",content:n},function(){return q("beforeDOMElementCreation",{content:n,params:e}),Sa({content:n,transform:u(u({},_),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ut(c))}})})}}},provides:function(a){a.generateLayersText=function(n,e){var r=e.title,i=e.transform,o=e.extra,s=null,f=null;if(Va){var c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/c,f=l.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Sa({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Ye=new RegExp('"',"ug"),_a=[1105920,1112319];function $e(t){var a=t.replace(Ye,""),n=ae(a,0),e=n>=_a[0]&&n<=_a[1],r=a.length===2?a[0]===a[1]:!1;return{value:$t(r?a[0]:a),isSecondary:e||r}}function ja(t,a){var n="".concat(In).concat(a.replace(":","-"));return new Promise(function(e,r){if(t.getAttribute(n)!==null)return e();var i=at(t.children),o=i.filter(function(V){return V.getAttribute(Yt)===a})[0],s=Y.getComputedStyle(t,a),f=s.getPropertyValue("font-family").match(Ln),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),e();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),b=~["Sharp"].indexOf(f[2])?w:h,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?st[b][f[2].toLowerCase()]:zn[b][c],A=$e(m),E=A.value,k=A.isSecondary,N=f[0].startsWith("FontAwesome"),x=sa(g,E),O=x;if(N){var C=fe(E);C.iconName&&C.prefix&&(x=C.iconName,g=C.prefix)}if(x&&!k&&(!o||o.getAttribute(aa)!==g||o.getAttribute(na)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var P=_e(),H=P.extra;H.attributes[Yt]=a,Gt(x,g).then(function(V){var jt=la(u(u({},P),{},{icons:{main:V,mask:fa()},prefix:g,iconName:O,extra:H,watchable:!0})),F=y.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=jt.map(function(hn){return dt(hn)}).join(`
`),t.removeAttribute(n),e()}).catch(r)}else e()}else e()})}function We(t){return Promise.all([ja(t,"::before"),ja(t,"::after")])}function He(t){return t.parentNode!==document.head&&!~_n.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ma(t){if(R)return new Promise(function(a,n){var e=at(t.querySelectorAll("*")).filter(He).map(We),r=ca.begin("searchPseudoElements");dn(),Promise.all(e).then(function(){r(),qt(),a()}).catch(function(){r(),qt(),n()})})}var Ve={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ma,n}}},provides:function(a){a.pseudoElements2svg=function(n){var e=n.node,r=e===void 0?y:e;d.searchPseudoElements&&Ma(r)}}},La=!1,Xe={mixout:function(){return{dom:{unwatch:function(){dn(),La=!0}}}},hooks:function(){return{bootstrap:function(){Ca(Ht("mutationObserverCallbacks",{}))},noAuto:function(){Ne()},watch:function(n){var e=n.observeMutationsRoot;La?qt():Ca(Ht("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},za=function(a){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},n)},Ge={mixout:function(){return{parse:{transform:function(n){return za(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-transform");return r&&(n.transform=za(r)),n}}},provides:function(a){a.generateAbstractTransformGrouping=function(n){var e=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},b={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:b};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),g.path)}]}]}}}},Rt={x:0,y:0,width:"100%",height:"100%"};function Ra(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||a)&&(t.attributes.fill="black"),t}function Be(t){return t.tag==="g"?t.children:[t]}var qe={hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-mask"),i=r?Tt(r.split(" ").map(function(o){return o.trim()})):fa();return i.prefix||(i.prefix=$()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides:function(a){a.generateAbstractMask=function(n){var e=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,c=i.width,l=i.icon,m=o.width,b=o.icon,g=Gn({transform:f,containerWidth:m,iconWidth:c}),A={tag:"rect",attributes:u(u({},Rt),{},{fill:"white"})},E=l.children?{children:l.children.map(Ra)}:{},k={tag:"g",attributes:u({},g.inner),children:[Ra(u({tag:l.tag,attributes:u(u({},l.attributes),g.path)},E))]},N={tag:"g",attributes:u({},g.outer),children:[k]},x="mask-".concat(s||ct()),O="clip-".concat(s||ct()),C={tag:"mask",attributes:u(u({},Rt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,N]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Be(b)},C]};return e.push(P,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(x,")")},Rt)}),{children:e,attributes:r}}}},Ke={provides:function(a){var n=!1;Y.matchMedia&&(n=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Je={hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Ze=[Kn,Re,Fe,De,Ue,Ve,Xe,Ge,qe,Ke,Je];ue(Ze,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Kt=I.parse;I.findIconDefinition;I.toHtml;var Qe=I.icon;I.layer;I.text;I.counter;function Fa(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,e)}return n}function U(t){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?Fa(Object(n),!0).forEach(function(e){Z(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fa(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function Nt(t){"@babel/helpers - typeof";return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Nt(t)}function Z(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function tr(t,a){if(t==null)return{};var n={},e=Object.keys(t),r,i;for(i=0;i<e.length;i++)r=e[i],!(a.indexOf(r)>=0)&&(n[r]=t[r]);return n}function ar(t,a){if(t==null)return{};var n=tr(t,a),e,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],!(a.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}function Jt(t){return nr(t)||er(t)||rr(t)||ir()}function nr(t){if(Array.isArray(t))return Zt(t)}function er(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function rr(t,a){if(t){if(typeof t=="string")return Zt(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zt(t,a)}}function Zt(t,a){(a==null||a>t.length)&&(a=t.length);for(var n=0,e=new Array(a);n<a;n++)e[n]=t[n];return e}function ir(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function or(t){var a,n=t.beat,e=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,l=t.spinReverse,m=t.pulse,b=t.fixedWidth,g=t.inverse,A=t.border,E=t.listItem,k=t.flip,N=t.size,x=t.rotation,O=t.pull,C=(a={"fa-beat":n,"fa-fade":e,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":b,"fa-inverse":g,"fa-border":A,"fa-li":E,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Z(a,"fa-".concat(N),typeof N<"u"&&N!==null),Z(a,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),Z(a,"fa-pull-".concat(O),typeof O<"u"&&O!==null),Z(a,"fa-swap-opacity",t.swapOpacity),a);return Object.keys(C).map(function(P){return C[P]?P:null}).filter(function(P){return P})}function sr(t){return t=t-0,t===t}function bn(t){return sr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(a,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var fr=["style"];function lr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function cr(t){return t.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,n){var e=n.indexOf(":"),r=bn(n.slice(0,e)),i=n.slice(e+1).trim();return r.startsWith("webkit")?a[lr(r)]=i:a[r]=i,a},{})}function gn(t,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var e=(a.children||[]).map(function(f){return gn(t,f)}),r=Object.keys(a.attributes||{}).reduce(function(f,c){var l=a.attributes[c];switch(c){case"class":f.attrs.className=l,delete a.attributes.class;break;case"style":f.attrs.style=cr(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[bn(c)]=l}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=ar(n,fr);return r.attrs.style=U(U({},r.attrs.style),o),t.apply(void 0,[a.tag,U(U({},r.attrs),s)].concat(Jt(e)))}var pn=!1;try{pn=!0}catch{}function ur(){if(!pn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Da(t){if(t&&Nt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Kt.icon)return Kt.icon(t);if(t===null)return null;if(t&&Nt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ft(t,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?Z({},t,a):{}}var j=Ua.forwardRef(function(t,a){var n=t.icon,e=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,c=Da(n),l=Ft("classes",[].concat(Jt(or(t)),Jt(i.split(" ")))),m=Ft("transform",typeof t.transform=="string"?Kt.transform(t.transform):t.transform),b=Ft("mask",Da(e)),g=Qe(c,U(U(U(U({},l),m),b),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!g)return ur("Could not find icon",c),null;var A=g.abstract,E={ref:a};return Object.keys(t).forEach(function(k){j.defaultProps.hasOwnProperty(k)||(E[k]=t[k])}),mr(A[0],E)});j.displayName="FontAwesomeIcon";j.propTypes={beat:v.bool,border:v.bool,beatFade:v.bool,bounce:v.bool,className:v.string,fade:v.bool,flash:v.bool,mask:v.oneOfType([v.object,v.array,v.string]),maskId:v.string,fixedWidth:v.bool,inverse:v.bool,flip:v.oneOf([!0,!1,"horizontal","vertical","both"]),icon:v.oneOfType([v.object,v.array,v.string]),listItem:v.bool,pull:v.oneOf(["right","left"]),pulse:v.bool,rotation:v.oneOf([0,90,180,270]),shake:v.bool,size:v.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:v.bool,spinPulse:v.bool,spinReverse:v.bool,symbol:v.oneOfType([v.bool,v.string]),title:v.string,titleId:v.string,transform:v.oneOfType([v.string,v.object]),swapOpacity:v.bool};j.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var mr=gn.bind(null,Ua.createElement),dr={prefix:"fab",iconName:"bandcamp",icon:[512,512,[],"f2d5","M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm48.2,326.1h-181L207.9,178h181Z"]},vr={prefix:"fab",iconName:"soundcloud",icon:[640,512,[],"f1be","M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2.8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1.6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7.6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3.1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z"]},br={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},gr={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},pr={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};function et({id:t,name:a,role:n,image:e,twitterUrl:r,instagramUrl:i,facebookUrl:o,soundcloudUrl:s,bandcampUrl:f}){return p.jsxs("div",{className:"max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:border-purple-500",children:[p.jsx(ma,{to:`/artists/${t}`,className:"block",children:p.jsx("img",{className:"rounded-t-lg",src:e,alt:a})}),p.jsxs("div",{className:"p-5",children:[p.jsx(ma,{to:`/artists/${t}`,className:"block",children:p.jsx("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-white text-center ",children:a})}),p.jsx("p",{className:"mb-3 font-normal uppercase text-center text-gray-400",children:n}),p.jsxs("div",{className:"flex space-x-4 text-2xl justify-center",children:[r&&p.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":"View Twitter Profile",className:"text-gray-400 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300",children:p.jsx(j,{icon:pr})}),i&&p.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer","aria-label":"View Twitter Profile",className:"text-gray-400 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300",children:p.jsx(j,{icon:br})}),o&&p.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":"View Twitter Profile",className:"text-gray-400 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-600",children:p.jsx(j,{icon:gr})}),s&&p.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer","aria-label":"View Twitter Profile",className:"text-gray-400 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400",children:p.jsx(j,{icon:vr})}),f&&p.jsx("a",{href:f,target:"_blank",rel:"noopener noreferrer","aria-label":"View Twitter Profile",className:"text-gray-400 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500",children:p.jsx(j,{icon:dr})})]})]})]})}et.propTypes={id:v.number.isRequired,name:v.string.isRequired,role:v.string.isRequired,image:v.string.isRequired,twitterUrl:v.string,instagramUrl:v.string,facebookUrl:v.string,soundcloudUrl:v.string,bandcampUrl:v.string};function yr(){const{language:t}=yn();return p.jsxs("div",{className:"m-32 inline-block",id:"artists",children:[p.jsx("a",{href:"/artists",children:p.jsx(wn,{children:t==="en"?"Artists":"Artistas"})}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[p.jsx(et,{id:1,name:"RODRO",role:"DJ",image:"/img/avatar.jpg",twitterUrl:"https://twitter.com/",instagramUrl:"https://www.instagram.com/",facebookUrl:"https://www.facebook.com/",soundcloudUrl:"https://soundcloud.com/",bandcampUrl:"https://bandcamp.com/"}),p.jsx(et,{id:2,name:"Sweet_Hate",role:"DJ",image:"/img/avatar.jpg",twitterUrl:"https://twitter.com/",instagramUrl:"https://www.instagram.com/",facebookUrl:"https://www.facebook.com/",soundcloudUrl:"https://soundcloud.com/",bandcampUrl:"https://bandcamp.com"}),p.jsx(et,{id:3,name:"Abstracto",role:t==="en"?"Producer":"Productor",image:"/img/avatar.jpg",twitterUrl:"https://twitter.com/",instagramUrl:"https://www.instagram.com/",facebookUrl:"https://www.facebook.com/",soundcloudUrl:"https://soundcloud.com/",bandcampUrl:"https://bandcamp.com"}),p.jsx(et,{id:4,name:"DARKNOISE",role:t==="en"?"Producer":"Productor",image:"/img/avatar.jpg",twitterUrl:"https://twitter.com/",instagramUrl:"https://www.instagram.com/",facebookUrl:"https://www.facebook.com/",soundcloudUrl:"https://soundcloud.com/",bandcampUrl:"https://bandcamp.com"})]})]})}export{yr as default};
