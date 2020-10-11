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
!function t(e,l,s){function i(a,o){if(!l[a]){if(!e[a]){var r="function"==typeof require&&require;if(!o&&r)return r(a,!0);if(n)return n(a,!0);var p=new Error("Cannot find module '"+a+"'");throw p.code="MODULE_NOT_FOUND",p}var c=l[a]={exports:{}};e[a][0].call(c.exports,function(t){var l=e[a][1][t];return i(l||t)},c,c.exports,t,e,l,s)}return l[a].exports}for(var n="function"==typeof require&&require,a=0;a<s.length;a++)i(s[a]);return i}({1:[function(t,e,l){"use strict";mejs.i18n.en["mejs.playlist"]="Toggle Playlist",mejs.i18n.en["mejs.playlist-prev"]="Previous",mejs.i18n.en["mejs.playlist-next"]="Next",mejs.i18n.en["mejs.playlist-loop"]="Loop",mejs.i18n.en["mejs.playlist-shuffle"]="Shuffle",Object.assign(mejs.MepDefaults,{playlist:[],showPlaylist:!0,autoClosePlaylist:!1,prevText:null,nextText:null,loopText:null,shuffleText:null,playlistTitle:null,currentMessage:null}),Object.assign(MediaElementPlayer.prototype,{buildplaylist:function(t,e,l,s){var i=mejs.i18n.t("mejs.playlist"),n=mejs.Utils.isString(t.options.playlistTitle)?t.options.playlistTitle:i;if(!t.createPlayList_()){if(t.currentPlaylistItem=0,t.originalControlsIndex=e.style.zIndex,e.style.zIndex=5,t.endedCallback=function(){t.currentPlaylistItem<t.listItems.length&&(t.setSrc(t.playlist[++t.currentPlaylistItem]),t.load(),setTimeout(function(){t.play()},200))},s.addEventListener("ended",t.endedCallback),!t.isVideo){var a=document.createElement("div"),o=function(){a.innerHTML="",void 0!==t.playlist[t.currentPlaylistItem]["data-playlist-thumbnail"]&&(a.innerHTML+='<img tabindex="-1" src="'+t.playlist[t.currentPlaylistItem]["data-playlist-thumbnail"]+'">'),a.innerHTML+="<p>"+t.options.currentMessage+' <span class="'+t.options.classPrefix+'playlist-current-title">'+t.playlist[t.currentPlaylistItem].title+"</span>",void 0!==t.playlist[t.currentPlaylistItem].description&&(a.innerHTML+=' - <span class="'+t.options.classPrefix+'playlist-current-description">'+t.playlist[t.currentPlaylistItem].description+"</span>"),a.innerHTML+="</p>",t.resetSize()};a.className=t.options.classPrefix+"playlist-current "+t.options.classPrefix+"layer",o(),l.insertBefore(a,l.firstChild),s.addEventListener("play",o)}if(t.options.showPlaylist){t.playlistLayer=document.createElement("div"),t.playlistLayer.className=t.options.classPrefix+"playlist-layer  "+t.options.classPrefix+"layer "+(t.isVideo?t.options.classPrefix+"playlist-hidden":"")+" "+t.options.classPrefix+"playlist-selector",t.playlistLayer.innerHTML='<ul class="'+t.options.classPrefix+'playlist-selector-list"></ul>',l.insertBefore(t.playlistLayer,l.firstChild);for(var r=0,p=t.listItems.length;r<p;r++)t.playlistLayer.querySelector("ul").innerHTML+=t.listItems[r];if(t.isVideo)t.playlistButton=document.createElement("div"),t.playlistButton.className=t.options.classPrefix+"button "+t.options.classPrefix+"playlist-button",t.playlistButton.innerHTML='<button type="button" aria-controls="'+t.id+'" title="'+n+'" aria-label="'+n+'" tabindex="0"></button>',t.playlistButton.addEventListener("click",function(){mejs.Utils.toggleClass(t.playlistLayer,t.options.classPrefix+"playlist-hidden")}),t.addControlElement(t.playlistButton,"playlist");else{var c=t.playlistLayer.querySelectorAll("li");if(c.length<=10){for(var u=0,f=0,y=c.length;f<y;f++)u+=c[f].offsetHeight;t.container.style.height=u+"px"}}for(var d=t.playlistLayer.querySelectorAll("."+t.options.classPrefix+"playlist-selector-list-item"),m=t.playlistLayer.querySelectorAll("input[type=radio]"),v=0,x=m.length;v<x;v++)m[v].disabled=!1,m[v].addEventListener("click",function(){for(var e=t.playlistLayer.querySelectorAll('input[type="radio"]'),l=t.playlistLayer.querySelectorAll("."+t.options.classPrefix+"playlist-selected"),s=0,i=e.length;s<i;s++)e[s].checked=!1;for(var n=0,a=l.length;n<a;n++)mejs.Utils.removeClass(l[n],t.options.classPrefix+"playlist-selected"),l[n].querySelector("label").querySelector("span").remove();this.checked=!0,this.closest("."+t.options.classPrefix+"playlist-selector-list-item").querySelector("label").innerHTML="<span>▶</span> "+this.closest("."+t.options.classPrefix+"playlist-selector-list-item").querySelector("label").innerHTML,mejs.Utils.addClass(this.closest("."+t.options.classPrefix+"playlist-selector-list-item"),t.options.classPrefix+"playlist-selected"),t.currentPlaylistItem=this.getAttribute("data-playlist-index"),t.setSrc(this.value),t.load(),t.play(),t.isVideo&&!0===t.options.autoClosePlaylist&&mejs.Utils.toggleClass(t.playlistLayer,t.options.classPrefix+"playlist-hidden")});for(var h=0,P=d.length;h<P;h++)d[h].addEventListener("click",function(){var e=mejs.Utils.siblings(this.querySelector("."+t.options.classPrefix+"playlist-selector-label"),function(t){return"INPUT"===t.tagName})[0],l=mejs.Utils.createEvent("click",e);e.dispatchEvent(l)});t.keydownCallback=function(t){var e=mejs.Utils.createEvent("click",t.target);return t.target.dispatchEvent(e),!1},t.playlistLayer.addEventListener("keydown",function(e){var l=e.which||e.keyCode||0;~[13,32,38,40].indexOf(l)&&t.keydownCallback(e)})}else mejs.Utils.addClass(t.container,t.options.classPrefix+"no-playlist")}},cleanplaylist:function(t,e,l,s){s.removeEventListener("ended",t.endedCallback)},buildprevtrack:function(t){var e=mejs.i18n.t("mejs.playlist-prev"),l=mejs.Utils.isString(t.options.prevText)?t.options.prevText:e;t.prevButton=document.createElement("div"),t.prevButton.className=t.options.classPrefix+"button "+t.options.classPrefix+"prev-button",t.prevButton.innerHTML='<button type="button" aria-controls="'+t.id+'" title="'+l+'" aria-label="'+l+'" tabindex="0"></button>',t.prevPlaylistCallback=function(){t.playlist[--t.currentPlaylistItem]?(t.setSrc(t.playlist[t.currentPlaylistItem].src),t.load(),t.play()):++t.currentPlaylistItem},t.prevButton.addEventListener("click",t.prevPlaylistCallback),t.addControlElement(t.prevButton,"prevtrack")},cleanprevtrack:function(t){t.prevButton.removeEventListener("click",t.prevPlaylistCallback)},buildnexttrack:function(t){var e=mejs.i18n.t("mejs.playlist-next"),l=mejs.Utils.isString(t.options.nextText)?t.options.nextText:e;t.nextButton=document.createElement("div"),t.nextButton.className=t.options.classPrefix+"button "+t.options.classPrefix+"next-button",t.nextButton.innerHTML='<button type="button" aria-controls="'+t.id+'" title="'+l+'" aria-label="'+l+'" tabindex="0"></button>',t.nextPlaylistCallback=function(){t.playlist[++t.currentPlaylistItem]?(t.setSrc(t.playlist[t.currentPlaylistItem].src),t.load(),t.play()):--t.currentPlaylistItem},t.nextButton.addEventListener("click",t.nextPlaylistCallback),t.addControlElement(t.nextButton,"nexttrack")},cleannexttrack:function(t){t.nextButton.removeEventListener("click",t.nextPlaylistCallback)},buildloop:function(t){var e=mejs.i18n.t("mejs.playlist-loop"),l=mejs.Utils.isString(t.options.loopText)?t.options.loopText:e;t.loopButton=document.createElement("div"),t.loopButton.className=t.options.classPrefix+"button "+t.options.classPrefix+"loop-button "+(t.options.loop?t.options.classPrefix+"loop-on":t.options.classPrefix+"loop-off"),t.loopButton.innerHTML='<button type="button" aria-controls="'+t.id+'" title="'+l+'" aria-label="'+l+'" tabindex="0"></button>',t.loopCallback=function(){t.options.loop=!t.options.loop,t.options.loop?(mejs.Utils.removeClass(t.loopButton,t.options.classPrefix+"loop-off"),mejs.Utils.addClass(t.loopButton,t.options.classPrefix+"loop-on")):(mejs.Utils.removeClass(t.loopButton,t.options.classPrefix+"loop-on"),mejs.Utils.addClass(t.loopButton,t.options.classPrefix+"loop-off"))},t.loopButton.addEventListener("click",t.loopCallback),t.addControlElement(t.loopButton,"loop")},cleanloop:function(t){t.loopButton.removeEventListener("click",t.loopCallback)},buildshuffle:function(t){var e=mejs.i18n.t("mejs.playlist-shuffle"),l=mejs.Utils.isString(t.options.shuffleText)?t.options.shuffleText:e;t.shuffleButton=document.createElement("div"),t.shuffleButton.className=t.options.classPrefix+"button "+t.options.classPrefix+"shuffle-button "+t.options.classPrefix+"shuffle-off",t.shuffleButton.innerHTML='<button type="button" aria-controls="'+t.id+'" title="'+l+'" aria-label="'+l+'" tabindex="0"></button>',t.shuffleButton.style.display="none",t.media.addEventListener("play",function(){t.shuffleButton.style.display="",t.resetSize()});var s=!1,i=[],n=function(){if(!t.options.loop){var e=Math.floor(Math.random()*t.playlist.length);-1===i.indexOf(e)?(t.setSrc(t.playlist[e].src),t.load(),t.play(),t.currentPlaylistItem=e,i.push(e)):i.length<t.playlist.length?t.shuffleCallback():i.length<t.playlist.length&&(i=[],t.currentPlaylistItem=e,i.push(e))}};t.shuffleCallback=function(){s?(mejs.Utils.removeClass(t.shuffleButton,t.options.classPrefix+"shuffle-on"),mejs.Utils.addClass(t.shuffleButton,t.options.classPrefix+"shuffle-off"),s=!1,t.media.removeEventListener("ended",n)):(mejs.Utils.removeClass(t.shuffleButton,t.options.classPrefix+"shuffle-off"),mejs.Utils.addClass(t.shuffleButton,t.options.classPrefix+"shuffle-on"),s=!0,t.media.addEventListener("ended",n))},t.shuffleButton.addEventListener("click",t.shuffleCallback),t.addControlElement(t.shuffleButton,"shuffle")},cleanshuffle:function(t){t.shuffleButton.removeEventListener("click",t.shuffleCallback)},createPlayList_:function(){var t=this;if(t.playlist=t.options.playlist.length?t.options.playlist:[],!t.playlist.length)for(var e=t.mediaFiles||t.media.originalNode.children,l=0,s=e.length;l<s;l++){var i=e[l];"source"===i.tagName.toLowerCase()&&function(){var e={};Array.prototype.slice.call(i.attributes).forEach(function(t){e[t.name]=t.value}),e.src&&e.type&&e.title&&(e.type=mejs.Utils.formatType(e.src,e.type),t.playlist.push(e))}()}if(!(t.playlist.length<2)){t.listItems=[];for(var n=0,a=t.playlist.length;n<a;n++){var o=t.playlist[n],r=document.createElement("li"),p=t.id+"_playlist_item_"+n,c=o["data-playlist-thumbnail"]?'<div class="'+t.options.classPrefix+'playlist-item-thumbnail"><img tabindex="-1" src="'+o["data-playlist-thumbnail"]+'"></div>':"",u=o["data-playlist-description"]?'<div class="'+t.options.classPrefix+'playlist-item-description">'+o["data-playlist-description"]+"</div>":"";r.tabIndex=0,r.className=t.options.classPrefix+"playlist-selector-list-item"+(0===n?" "+t.options.classPrefix+"playlist-selected":""),r.innerHTML='<div class="'+t.options.classPrefix+'playlist-item-inner">'+c+'<div class="'+t.options.classPrefix+'playlist-item-content"><div><input type="radio" class="'+t.options.classPrefix+'playlist-selector-input" name="'+t.id+'_playlist" id="'+p+'" data-playlist-index="'+n+'" value="'+o.src+'" disabled><label class="'+t.options.classPrefix+'playlist-selector-label" for="'+p+'">'+(0===n?"<span>▶</span> ":"")+(o.title||n)+"</label></div>"+u+"</div></div>",t.listItems.push(r.outerHTML)}}}})},{}]},{},[1]);