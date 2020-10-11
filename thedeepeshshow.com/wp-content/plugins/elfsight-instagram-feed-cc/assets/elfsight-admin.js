/*
    Instagram Feed
    Version: 3.8.5
    Release date: Tue May 26 2020

    https://elfsight.com

    Copyright (c) 2020 Elfsight, LLC. ALL RIGHTS RESERVED
*/

"use strict";!function(e,t){var i,a,n,s,o,r,d,p,g,c=t.pluginParams.slug,l=JSON.parse(t.pluginParams.user),f="true"===t.pluginParams.widgetsClogged,u=!1,h=t.wpApiSettings.root+c+"/admin",m=t.wpApiSettings.nonce;function v(){this.pages=[]}v.prototype={constructor:v,add:function(t,i){if(!t||!i||!e.isFunction(i))return!1;this.pages[t]=i()||{}},get:function(e){return this.pages[e]||!1},show:function(t,i){var r,g=this,c=this.get(t);return!!c&&("init"in c&&e.isFunction(c.init)&&(r=c.init(i)),e.when(r).then(function(){d.hasClass("elfsight-admin-other-products-hidden-permanently")||d.toggleClass("elfsight-admin-other-products-hidden","widgets"!==t),a.removeClass("elfsight-admin-loading"),s.removeClass("active"),s.filter("[data-elfsight-admin-page="+t+"]").addClass("active"),p.length&&p.removeClass("elfsight-admin-page-active"),p=n.filter("[data-elfsight-admin-page-id="+t+"]"),o.css("min-height",p.outerHeight()),p.addClass("elfsight-admin-page-animation elfsight-admin-page-active"),setTimeout(function(){p.removeClass("elfsight-admin-page-animation"),"function"==typeof g.onPageChanged&&g.onPageChanged(t)},200)}),c)}};var w=new v;function C(){this.popups=[]}t.elfsightAdminPagesController=w,C.prototype={constructor:C,add:function(t,i){if(!t||!i||!e.isFunction(i))return!1;this.popups[t]=i()||{}},get:function(e){return this.popups[e]||!1},hide:function(e){(g=r.filter("[data-elfsight-admin-popup-id="+e+"]")).removeClass("elfsight-admin-popup-active")},show:function(t,i){var a,n=this.get(t);return!!n&&("init"in n&&e.isFunction(n.init)&&(a=n.init(i)),e.when(a).then(function(){g.length&&g.removeClass("elfsight-admin-popup-active"),(g=r.filter("[data-elfsight-admin-popup-id="+t+"]")).addClass("elfsight-admin-popup-animation elfsight-admin-popup-active"),setTimeout(function(){g.removeClass("elfsight-admin-popup-animation")},200)}),n)}};var S=new C;e(function(){i=e(".elfsight-admin"),a=e(".elfsight-admin-main"),n=e("[data-elfsight-admin-page-id]"),s=e("[data-elfsight-admin-page]"),o=e(".elfsight-admin-pages-container"),r=e("[data-elfsight-admin-popup-id]"),d=e(".elfsight-admin-other-products"),p=e(),g=e(),w.add("welcome",e.noop),w.add("widgets",function(){var t=[],i=e(".elfsight-admin-page-widgets"),a=e(".elfsight-admin-page-widgets-list",i),n=e(".elfsight-admin-template-widgets-list-item",i),s=e(".elfsight-admin-template-widgets-list-empty",i);a.on("click",".elfsight-admin-page-widgets-list-item-actions-remove",function(t){var i=e(this),a=i.attr("data-widget-id");i.closest(".elfsight-admin-page-widgets-list-item").addClass("elfsight-admin-page-widgets-list-item-removed"),C("widgets/remove",{id:a},"post",!0),t.preventDefault()}),a.on("click",".elfsight-admin-page-widgets-list-item-actions-restore a",function(t){var i=e(this),a=i.attr("data-widget-id");i.closest(".elfsight-admin-page-widgets-list-item").removeClass("elfsight-admin-page-widgets-list-item-removed"),C("widgets/restore",{id:a},"post",!0),t.preventDefault()}),a.tablesorter({cssAsc:"elfsight-admin-page-widgets-list-sort-asc",cssDesc:"elfsight-admin-page-widgets-list-sort-desc",cssHeader:"elfsight-admin-page-widgets-list-sort",headers:{0:{},1:{},2:{},3:{sorter:!1}}});var o=function(){var i=e("tbody",a).empty();e.isArray(t)&&t.length?(e.each(t,function(t,a){var s=e(n.html()),o="["+c.split("-").join("_")+' id="'+a.id+'"]';s.find(".elfsight-admin-page-widgets-list-item-name a").attr("href","#/edit-widget/"+a.id+"/").text(a.name);var r=new Date(1e3*(a.time_updated||a.time_created));s.find(".elfsight-admin-page-widgets-list-item-date").text(function(e){e instanceof Date||(e=new Date(Date.parse(e)));return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()}(r)),s.find(".elfsight-admin-page-widgets-list-item-shortcode-hidden").text(o);var d=s.find(".elfsight-admin-page-widgets-list-item-shortcode-input").val(o),p=s.find(".elfsight-admin-page-widgets-list-item-shortcode-copy-trigger").attr("data-clipboard-text",o),g=new ClipboardJS(p.get(0));g.on("success",function(){p.addClass("elfsight-admin-page-widgets-list-item-shortcode-copy-trigger-copied").find("span").text("Copied"),setTimeout(function(){p.removeClass("elfsight-admin-page-widgets-list-item-shortcode-copy-trigger-copied").find("span").text("Copy")},5e3)}),g.on("error",function(){var e=s.find(".elfsight-admin-page-widgets-list-item-shortcode-copy-error").show();d.select(),setTimeout(function(){e.hide()},5e3)}),s.find(".elfsight-admin-page-widgets-list-item-shortcode-value").text(o),s.find(".elfsight-admin-page-widgets-list-item-actions-edit").attr("href","#/edit-widget/"+a.id+"/"),s.find(".elfsight-admin-page-widgets-list-item-actions-duplicate").attr("href","#/edit-widget/"+a.id+"/duplicate/"),s.find(".elfsight-admin-page-widgets-list-item-actions-remove, .elfsight-admin-page-widgets-list-item-actions-restore a").attr("data-widget-id",a.id),s.appendTo(i)}),a.trigger("update")):e(s.html()).appendTo(i)};return{init:function(i,a){return C("widgets/list").then(function(i){if(i.status){if(t=i.data,!(f||e.isArray(t)&&t.length))return w.show("welcome"),e.Deferred().reject(i).promise();o(),u=!0}})}}}),w.add("edit-widget",function(){var i,a,n,s=e(".elfsight-admin-page-edit-widget"),o=e(".elfsight-admin-page-edit-widget-form-submit",s),r=e(".elfsight-admin-page-edit-widget-form-apply",s),d=e(".elfsight-admin-page-edit-widget-unsaved",s),p=e(".elfsight-admin-page-edit-widget-form-cancel",s),g=e(".elfsight-admin-page-edit-widget-name-input",s),c="elfsight-admin-page-edit-widget-form-editor",f=c+"-clone",h=e("."+f,s).parent(),m=e("."+f,s),v=!1,y=JSON.parse(m.attr("data-elfsight-admin-editor-settings")),b=JSON.parse(m.attr("data-elfsight-admin-editor-preferences")),x=JSON.parse(m.attr("data-elfsight-admin-editor-preview-url")),k=m.attr("data-elfsight-admin-editor-observer-url")||null;k&&(k=JSON.parse(k));var D=function(e){e,d.toggleClass("elfsight-admin-page-edit-widget-unsaved-visible",e),e?t.addEventListener("beforeunload",_):t.removeEventListener("beforeunload",_)},_=function(e){e.preventDefault(),e.returnValue="Widget has unsaved changed"},P=function(t){var n=g.val(),s={};a.getData()?s=a.getData():i&&(s=i.options);var o=i?"widgets/update":"widgets/add",r={name:n||"Untitled",options:encodeURIComponent(JSON.stringify(s))};i&&(r.id=i.id),C(o,r,"post").done(function(a){a.status&&(a.id&&(i={id:a.id},u=!0,S.popups.rating.open(!0,3e4)),e.isFunction(t)&&t())})};return o.on("click",function(){e("html, body").animate({scrollTop:0}),P(function(){D(!1),hasher.setHash("widgets/")})}),r.on("click",function(){P(),D(!1)}),p.on("click",function(){hasher.setHash("widgets/"),D(!1)}),{init:function(t,o){var r=function(){g.val(i?i.name:""),n&&n.remove(),(n=m.clone().removeClass(f).addClass(c)).appendTo(h),angular.module("elfsightEditor",["elfsightAppsEditor"]).controller("AppController",["$elfsightAppsEditor","$scope","$rootScope","$timeout",function(t,s,o,r){a=t,o.user=l,v=!1;var d={parent:n,previewUrl:x,observerUrl:k||void 0,settings:e.extend(!0,{},y),preferences:b,enableCustomCSS:!1,enableCloudProperties:!1,onChange:function(e){v?D(!0):v=!0}};i&&(d.widget={data:i.options}),t.init(d)}]),n.attr("ng-controller","AppController as app"),angular.bootstrap(n,["elfsightEditor"])};if(t&&t.id)return C("widgets/list",{id:t.id}).then(function(a){if(a.status){if(!a.data.length)return w.show("error",{message:"There is no widget with id "+t.id+"."}),e.Deferred().reject(a).promise();i=a.data[0],u=!0,r(),D(!1),s.toggleClass("elfsight-admin-page-edit-widget-new",!!t.duplicate),t.duplicate&&(i=null)}},function(){i=null});i=null,r(),s.addClass("elfsight-admin-page-edit-widget-new")}}}),w.add("support",function(){var t=e(".elfsight-admin-page-support-ticket-form-container"),i=e(".elfsight-admin-page-support-ticket-form"),a=e(".elfsight-admin-page-support-ticket-form-purchase-code",i),n=e(".elfsight-admin-page-support-ticket-form-submit",i),s=e(".elfsight-admin-page-support-ticket-form-result"),o=e(".elfsight-admin-page-support-ticket-form-result-success"),r=e(".elfsight-admin-page-support-ticket-form-result-error"),d=e(".elfsight-admin-page-support-ticket-form-expired-date",t),p=function(){i.hide(),s.hide(),o.show()},g=function(){i.hide(),s.hide(),r.show()};return i.submit(function(t){var a;t.preventDefault(),t.stopPropagation(),n.prop("disabled",!0).val("Sending..."),a=new FormData(i[0]),e.ajax({type:"POST",url:i.attr("action"),data:a,processData:!1,contentType:!1}).done(function(e){200===e.code||201===e.code?p():g()})}),{init:function(n,s){var o=a.val();return!o||e.get(i.attr("data-cs"),{purchase_code:o},function(e){new Date(e.date)<new Date&&(t.addClass("elfsight-admin-page-support-ticket-expired"),d.text(new Date(e.date).toLocaleDateString()))})}}}),w.add("preferences",function(){var t=e(".elfsight-admin-page-preferences-form"),i=function(t,i){var a=i.find(".elfsight-admin-page-preferences-option-save");a.addClass("elfsight-admin-page-preferences-option-save-loading"),e.ajax({type:"POST",url:h+"/update-preferences/",data:t,dataType:"json",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",m)}}).done(function(e){var t=i.find(".elfsight-admin-page-preferences-option-save-success"),n=i.find(".elfsight-admin-page-preferences-option-save-error");a.removeClass("elfsight-admin-page-preferences-option-save-loading"),e.success?(n.text(""),t.addClass("elfsight-admin-page-preferences-option-save-success-visible"),setTimeout(function(){t.removeClass("elfsight-admin-page-preferences-option-save-success-visible")},2e3)):e.error&&n.text(e.error)})},a=function(e,t){var i=e.getSession().getScreenLength()*e.renderer.lineHeight+e.renderer.scrollBar.getWidth();t.height(i.toString()+"px"),e.resize()},n=ace.edit("elfsightPreferencesSnippetCSS");n.setOption("useWorker",!1),n.setTheme("ace/theme/monokai"),n.getSession().setMode("ace/mode/css"),n.commands.addCommand({name:"save",bindKey:{win:"Ctrl-S",mac:"Command-S"},exec:function(){var t=e(".elfsight-admin-page-preferences-option-css");i({preferences_custom_css:n.getSession().doc.getValue()},t)}}),a(n,e("#elfsightPreferencesSnippetCSS")),n.getSession().on("change",function(){a(n,e("#elfsightPreferencesSnippetCSS"))});var s=ace.edit("elfsightPreferencesSnippetJS");s.setOption("useWorker",!1),s.setTheme("ace/theme/monokai"),s.getSession().setMode("ace/mode/javascript"),s.commands.addCommand({name:"save",bindKey:{win:"Ctrl-S",mac:"Command-S"},exec:function(){var t=e(".elfsight-admin-page-preferences-option-js");i({preferences_custom_js:s.getSession().doc.getValue()},t)}}),a(s,e("#elfsightPreferencesSnippetJS")),s.getSession().on("change",function(){a(s,e("#elfsightPreferencesSnippetJS"))}),t.find(".elfsight-admin-page-preferences-option-save").click(function(t){t.preventDefault();var a=e(this),o=a.closest(".elfsight-admin-page-preferences-option"),r=a.closest(".elfsight-admin-page-preferences-option-input-container").find('input[type="text"]'),d={};r.each(function(t,i){d[e(i).attr("name")]=e(i).val()}),o.is(".elfsight-admin-page-preferences-option-css")&&(d.preferences_custom_css=n.getSession().doc.getValue()),o.is(".elfsight-admin-page-preferences-option-js")&&(d.preferences_custom_js=s.getSession().doc.getValue()),i(d,o)}),t.find('[name="preferences_force_script_add"]').change(function(){var t=e(this),a=t.closest(".elfsight-admin-page-preferences-option");i({option:{name:"force_script_add",value:t.is(":checked")?"on":"off"}},a)}),t.find('[name="preferences_access_role"]').change(function(){var t=e(this),a=t.closest(".elfsight-admin-page-preferences-option");i({option:{name:"access_role",value:t.val()}},a)}),t.find('[name="preferences_auto_upgrade"]').change(function(){var t=e(this),a=t.closest(".elfsight-admin-page-preferences-option");i({option:{name:"auto_upgrade",value:t.is(":checked")?"on":"off"}},a)})}),w.add("activation",function(){var t=e(".elfsight-admin-page-activation-form"),a=e(".elfsight-admin-page-activation-form-purchase-code-input",t),n=e(".elfsight-admin-page-activation-form-activated-input",t),s=e(".elfsight-admin-page-activation-form-supported-until-input",t),o=e(".elfsight-admin-page-activation-form-host-input",t),r=e(".elfsight-admin-page-activation-form-activation-button",t),d=e(".elfsight-admin-page-activation-form-activation",t),p=e(".elfsight-admin-page-activation-form-activation-confirm-no",t),g=e(".elfsight-admin-page-activation-form-activation-confirm-yes",t),l=(e(".elfsight-admin-page-activation-form-deactivation",t),e(".elfsight-admin-page-activation-form-deactivation-button",t)),f=e(".elfsight-admin-page-activation-form-deactivation-confirm-no",t),u=e(".elfsight-admin-page-activation-form-deactivation-confirm-yes",t),v=e(".elfsight-admin-page-activation-form-message-success",t),w=e(".elfsight-admin-page-activation-form-message-error",t),C=e(".elfsight-admin-page-activation-form-message-fail",t),S=e(".elfsight-admin-page-activation-faq"),y=e(".elfsight-admin-page-activation-faq-list-item",S),b=null,x=t.attr("data-activation-url"),k=t.attr("data-activation-version"),D=function(t,i,n){e.ajax({type:"POST",url:h+"/update-activation-data/",data:{purchase_code:t,supported_until:n||0,activated:i},beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",m)}}),a.prop("readonly",i)};r.click(function(e){e.preventDefault(),e.stopPropagation(),_({purchaseCode:a.val(),host:o.val()})});var _=function(a){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.ajax({url:x,dataType:"jsonp",data:{action:"purchase_code",slug:c+"-cc",host:a.host,purchase_code:a.purchaseCode,version:k,force_update:o}}).done(function(o){if(o.verification){b=o.verification;var r=!!o.verification.valid;n.val(r),s.val(o.verification.supported_until||0),b.valid?(i.removeClass("elfsight-admin-activation-invalid").addClass("elfsight-admin-activation-activated"),w.text("").hide(),C.hide(),v.show(),e(".elfsight-admin-page-support-ticket-form-purchase-code").val(a.purchaseCode),D(a.purchaseCode,r,b.supported_until)):(i.removeClass("elfsight-admin-activation-activated").toggleClass("elfsight-admin-activation-invalid",!!a.purchaseCode),v.hide(),C.hide(),w.text(b.error).show()),b.exception&&"PC_REGISTERED_TO_ANOTHER"===b.exception&&(w.text("").hide(),d.find(".elfsight-admin-page-activation-form-activation-confirm-caption-message").html(b.error),t.addClass("elfsight-admin-page-activation-form-activation-confirm-visible"))}}).fail(function(){i.removeClass("elfsight-admin-activation-activated").addClass("elfsight-admin-activation-invalid"),n.val(!1),v.hide(),w.hide(),C.show(),D(a.purchaseCode,!1)})};l.click(function(e){e.preventDefault(),e.stopPropagation(),t.addClass("elfsight-admin-page-activation-form-deactivation-confirm-visible")}),f.click(function(e){e.preventDefault(),e.stopPropagation(),t.removeClass("elfsight-admin-page-activation-form-deactivation-confirm-visible")}),u.click(function(r){r.preventDefault(),r.stopPropagation(),t.removeClass("elfsight-admin-page-activation-form-deactivation-confirm-visible");var d=a.val(),p=o.val();e.ajax({url:x,dataType:"jsonp",data:{action:"deactivate",slug:c+"-cc",host:p,purchase_code:d,version:k}}).done(function(e){a.val(""),n.val("false"),s.val(0),i.removeClass("elfsight-admin-activation-activated"),v.hide(),C.hide(),w.hide(),D("",!1)})}),p.click(function(e){e.preventDefault(),e.stopPropagation(),t.removeClass("elfsight-admin-page-activation-form-activation-confirm-visible")}),g.click(function(e){e.preventDefault(),e.stopPropagation(),_({purchaseCode:a.val(),host:o.val()},!0)}),S.find(".elfsight-admin-page-activation-faq-list-item-question").click(function(){var t=e(this).closest(".elfsight-admin-page-activation-faq-list-item");y.not(t).removeClass("elfsight-admin-page-activation-faq-list-item-active"),t.toggleClass("elfsight-admin-page-activation-faq-list-item-active")})}),w.add("error",function(){var t=e(".elfsight-admin-page-error");return{init:function(i){i&&i.message&&e(".elfsight-admin-page-error-message",t).text(i.message)}}}),S.add("rating",function(){var t=e(".elfsight-admin-header-rating"),i=t.find("input[name=rating-header]"),a=e(".elfsight-admin-popup-rating"),n=a.find("form"),s=a.find("input[name=rating-popup]"),o=a.find(".elfsight-admin-popup-textarea"),r=a.find(".elfsight-admin-popup-text"),d=a.find(".elfsight-admin-popup-footer-button-ok"),p=a.find(".elfsight-admin-popup-footer-button-close"),g=localStorage.getItem("popupRatingShowed")?localStorage.getItem("popupRatingShowed"):Math.floor(Date.now()/1e3),c=parseInt(g)+86400<Math.floor(Date.now()/1e3),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;setTimeout(function(){if(a.length&&!a.hasClass("elfsight-admin-popup-sent")){var t=!~hasher.getHash().indexOf("edit-widget")&&!~hasher.getHash().indexOf("add-widget");(!e||e&&c&&t&&u)&&S.show("rating"),localStorage.setItem("popupRatingShowed",Math.floor(Date.now()/1e3))}},t)};setTimeout(function(){u&&t&&(l(!0,3e4),t.slideDown())},5e3),i.on("change",function(){var t=parseInt(e(this).val());l(!1,0),setTimeout(function(){s.filter('[value="'+t+'"]').prop("checked",!0),f(t)},400),e(this).prop("checked",!1)});var f=function(e){d.removeClass("elfsight-admin-popup-footer-button-hide"),o.toggleClass("elfsight-admin-popup-textarea-hide",5===e),r.toggleClass("elfsight-admin-popup-text-hide",e<5)};return s.on("change",function(){f(parseInt(e(this).val()))}),d.on("click",function(i){i.preventDefault();var s=parseInt(n.find('input[name="rating-popup"]:checked').val()),r=n.find("textarea").val();5===s&&v(e(i.target).attr("href")),s<5&&""===r?o.toggleClass("elfsight-admin-popup-textarea-error",!0):(o.toggleClass("elfsight-admin-popup-textarea-error",!1),e.ajax({type:"POST",url:h+"/rating-send/",data:{value:s,comment:r},beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",m)}}).then(function(){a.addClass("elfsight-admin-popup-sent"),p.text("OK"),d.addClass("elfsight-admin-popup-footer-button-hide"),t.slideUp(),localStorage.removeItem("popupRatingShowed")}))}),p.on("click",function(){S.hide("rating"),d.addClass("elfsight-admin-popup-footer-button-hide"),o.addClass("elfsight-admin-popup-textarea-hide"),r.addClass("elfsight-admin-popup-text-hide"),s.prop("checked",!1)}),{init:function(e,t){return!0},open:l}});var v=function(e,i){var a=940,n=700,s=["width="+a,"height="+n,"menubar=no","toolbar=no","resizable=yes","scrollbars=yes","left="+(t.screen.availLeft+t.screen.availWidth/2-a/2),"top="+(t.screen.availTop+t.screen.availHeight/2-n/2)];t.open(e,i,s.join(","))},C=function(t,i,n,s){return i="post"===(n="post"===n?"post":"get")?JSON.stringify(i):i,e.ajax({url:h+"/"+t+"/",dataType:"json",data:i,contentType:"application/json",type:n,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",m),e.setRequestHeader("X-HTTP-Method-Override",n),s||a.addClass("elfsight-admin-loading")}}).always(function(){s||a.removeClass("elfsight-admin-loading")}).then(function(t){return t.status?t:(w.show("error",{message:"An error occurred during your request process. Please, try again."}),e.Deferred().reject(t).promise())},function(e){return w.show("error",{message:"An error occurred during your request process. Please, try again."}),e})};if(t.crossroads&&t.hasher){crossroads.addRoute("/add-widget/",function(){w.show("edit-widget")}),crossroads.addRoute("/edit-widget/{id}/",function(e){w.show("edit-widget",{id:e})}),crossroads.addRoute("/edit-widget/{id}/duplicate/",function(e){w.show("edit-widget",{id:e,duplicate:!0})}),crossroads.addRoute("/{page}/",function(e){e&&-1===e.indexOf("!")&&(w.show(e)||w.show("error",{message:"The requested page was not found."}))});var y=function(e,t){crossroads.parse(e)};hasher.initialized.add(y),hasher.changed.add(y),hasher.init(),hasher.getHash()||hasher.setHash("widgets/")}})}(jQuery,window);