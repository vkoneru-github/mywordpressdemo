!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=293)}({293:function(e,t,n){n(42),e.exports=n(294)},294:function(e,t,n){"use strict";n.r(t);var r=n(75),o=n.n(r);n(295);function i(e){if("https://subscribe.wordpress.com"===e.origin&&e.data){var t=JSON.parse(e.data);t&&"close"===t.action&&(window.removeEventListener("message",i),tb_remove())}}"undefined"!=typeof window&&o()((function(){Array.prototype.slice.call(document.querySelectorAll(".wp-block-jetpack-recurring-payments")).forEach((function(e){var t=e.getAttribute("data-blog-id"),n=e.getAttribute("data-plan-id"),r=e.getAttribute("data-lang");try{!function(e,t,n,r){e.addEventListener("click",(function(){window.scrollTo(0,0),tb_show(null,"https://subscribe.wordpress.com/memberships/?blog="+t+"&plan="+n+"&lang="+r+"&display=alternateTB_iframe=true",null),window.addEventListener("message",i,!1),document.querySelector("#TB_window").classList.add("jetpack-memberships-modal")}))}(e,t,n,r)}catch(o){console.error("Problem activating Recurring Payments "+n,o)}}))}))},295:function(e,t,n){},36:function(e,t,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(n.p=window.Jetpack_Block_Assets_Base_Url)},42:function(e,t,n){"use strict";n.r(t);n(36)},75:function(e,t){!function(){e.exports=this.wp.domReady}()}}));