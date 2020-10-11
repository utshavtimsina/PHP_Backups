"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JigoshopApi;JigoshopApi = function () {
  var JigoshopApi = function () {
    function JigoshopApi() {
      _classCallCheck(this, JigoshopApi);

      this.host = window.location.protocol + "//" + window.location.hostname, window.location.pathname.search("index.php") && (this.host += "/index.php");
    }

    _createClass(JigoshopApi, [{
      key: "request",
      value: function request(method, path, params, callback) {
        return jQuery.ajax({ url: this.host + path, type: method, dataType: "json", data: params }).done(callback);
      }
    }, {
      key: "get",
      value: function get(path, params, callback) {
        return this.request("GET", path, params, callback);
      }
    }, {
      key: "post",
      value: function post(path, params, callback) {
        return this.request("POST", path, params, callback);
      }
    }, {
      key: "put",
      value: function put(path, params, callback) {
        return this.request("PUT", path, params, callback);
      }
    }, {
      key: "delete",
      value: function _delete(path, params, callback) {
        return this.request("DELETE", path, params, callback);
      }
    }]);

    return JigoshopApi;
  }();

  return JigoshopApi.prototype.host = "", JigoshopApi;
}.call(undefined), jQuery(function () {
  return jigoshop.api = new JigoshopApi();
});