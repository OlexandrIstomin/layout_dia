parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".burger__menu"),o=document.querySelector(".page__body"),c=document.querySelector(".slider");document.addEventListener("click",function(t){var s=t.target;s.closest(".burger__icon")&&(e.classList.toggle("active"),o.classList.toggle("lock"),setTimeout(function(){c.classList.toggle("none")},200)),e.classList.contains("active")&&s.closest(".nav__link")&&(e.classList.toggle("active"),o.classList.toggle("lock"))});var t=1,s=document.querySelector(".slider__text");function r(){var e=document.querySelector(".slider__paragraph");document.querySelector(".page").classList.contains("colors")?(c.classList.remove("colors__slider--".concat(t)),e.remove()):(c.classList.remove("slider--mod-".concat(t)),e.remove()),--t<1&&(t=4),document.querySelector(".page").classList.contains("colors")?setTimeout(function(){c.classList.add("colors__slider--".concat(t))},300):setTimeout(function(){c.classList.add("slider--mod-".concat(t))},300);var o=document.createElement("p");o.className="slider__paragraph",o.innerHTML="".concat(t," SLIDE"),s.append(o)}function a(){var e=document.querySelector(".slider__paragraph");document.querySelector(".page").classList.contains("colors")?(c.classList.remove("colors__slider--".concat(t)),e.remove()):(c.classList.remove("slider--mod-".concat(t)),e.remove()),++t>4&&(t=1),document.querySelector(".page").classList.contains("colors")?setTimeout(function(){c.classList.add("colors__slider--".concat(t))},300):setTimeout(function(){c.classList.add("slider--mod-".concat(t))},300);var o=document.createElement("p");o.className="slider__paragraph",o.innerHTML="".concat(t," SLIDE"),s.append(o)}if(c.addEventListener("click",function(e){var o=e.target;o.closest(".arrow__prev")?r():o.closest(".arrow__next")&&a()}),document.querySelector(".page").classList.contains("colors")){document.querySelector(".header").classList.add("colors__header"),document.querySelectorAll(".nav__link").forEach(function(e){e.classList.add("nav__link--color-mod")});var l=document.querySelector(".nav__link--decoration");l.classList.add("nav__link--background-mod"),document.querySelectorAll(".button").forEach(function(e){e.classList.add("colors__button")}),document.querySelector(".slider").classList.remove("slider--mod-1"),document.querySelector(".slider").classList.add("colors__slider--1"),document.querySelector(".slider").classList.add("slider--mod-radius");for(var n=["blue","yellow","green","pink"],d=document.querySelectorAll(".service-card"),i=0;i<n.length;i++)d[i].classList.add(n[i]);for(var u=["blue2","yellow2","pink2"],m=document.querySelectorAll(".card__img--mod"),_=document.querySelectorAll(".card__quote"),L=0;L<u.length;L++)m[L].classList.add(u[L]),_[L].classList.add(u[L]);document.querySelector(".vision").classList.add("vision--mod-background");var v=document.querySelector(".footer");v.classList.add("footer--mod"),document.querySelectorAll(".form__input").forEach(function(e){e.classList.add("form__input--border-mod")});var g=document.querySelector(".form__textarea");g.classList.add("form__textarea--border-mod"),document.querySelectorAll(".contact__icons").forEach(function(e){e.classList.add("contact__icons--background-mod")})}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.aad25433.js.map