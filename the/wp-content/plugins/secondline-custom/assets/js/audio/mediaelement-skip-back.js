/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
!function t(e,i,n){function r(o,a){if(!i[o]){if(!e[o]){var c="function"==typeof require&&require;if(!a&&c)return c(o,!0);if(s)return s(o,!0);var p=new Error("Cannot find module '"+o+"'");throw p.code="MODULE_NOT_FOUND",p}var u=i[o]={exports:{}};e[o][0].call(u.exports,function(t){var i=e[o][1][t];return r(i||t)},u,u.exports,t,e,i,n)}return i[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,i){"use strict";mejs.i18n.en["mejs.time-skip-back"]=["Skip back 1 second","Skip back %1 seconds"],Object.assign(mejs.MepDefaults,{skipBackInterval:30,skipBackText:null}),Object.assign(MediaElementPlayer.prototype,{buildskipback:function(t,e,i,n){var r=this,s=mejs.i18n.t("mejs.time-skip-back",r.options.skipBackInterval),o=mejs.Utils.isString(r.options.skipBackText)?r.options.skipBackText.replace("%1",r.options.skipBackInterval):s,a=document.createElement("div");a.className=r.options.classPrefix+"button "+r.options.classPrefix+"skip-back-button",a.innerHTML='<button type="button" aria-controls="'+r.id+'" title="'+o+'" aria-label="'+o+'" tabindex="0">'+r.options.skipBackInterval+"</button>",r.addControlElement(a,"skipback"),a.addEventListener("click",function(){if(isNaN(n.duration)?r.options.skipBackInterval:n.duration){var t=n.currentTime===1/0?0:n.currentTime;n.setCurrentTime(Math.max(t-r.options.skipBackInterval,0)),this.querySelector("button").blur()}})}})},{}]},{},[1]);