"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JigoshopHelpers, jigoshop;jigoshop = {}, JigoshopHelpers = function () {
  var JigoshopHelpers = function () {
    function JigoshopHelpers(params) {
      _classCallCheck(this, JigoshopHelpers);

      this.params = params;
    }

    _createClass(JigoshopHelpers, [{
      key: "delay",
      value: function delay(time, callback) {
        return setTimeout(callback, time);
      }
    }, {
      key: "getAssetsUrl",
      value: function getAssetsUrl() {
        return this.params.assets;
      }
    }, {
      key: "getAjaxUrl",
      value: function getAjaxUrl() {
        return this.params.ajaxUrl;
      }
    }, {
      key: "getApi",
      value: function getApi() {
        return this.api;
      }
    }, {
      key: "addMessage",
      value: function addMessage(type, message, ms) {
        var $alert;return ($alert = jQuery(document.createElement("div")).attr("class", "alert alert-" + type).html(message).hide()).appendTo(jQuery("#messages")), $alert.slideDown(), jigoshop.delay(ms, function () {
          return $alert.slideUp(function () {
            return $alert.remove();
          });
        });
      }
    }, {
      key: "block",
      value: function block($element, options) {
        var sett;return sett = jQuery.extend({ redirect: "", message: "", css: { padding: "5px", width: "auto", height: "auto", border: "1px solid #83AC31" }, overlayCSS: { backgroundColor: "rgba(255, 255, 255, .8)" } }, options), $element.block({ message: '<img src="' + this.params.assets + '/images/loading.gif" width="15" height="15" alt="' + sett.redirect + '"/>' + sett.message, css: sett.css, overlayCSS: sett.overlayCSS });
      }
    }, {
      key: "unblock",
      value: function unblock($element) {
        return $element.unblock();
      }
    }]);

    return JigoshopHelpers;
  }();

  return JigoshopHelpers.prototype.params = { assets: "", ajaxUrl: "" }, JigoshopHelpers.prototype.api = "", JigoshopHelpers;
}.call(undefined), jQuery(function () {
  return jigoshop = new JigoshopHelpers(jigoshop_helpers);
});