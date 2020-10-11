"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminProductVirtual;AdminProductVirtual = function () {
  function AdminProductVirtual() {
    _classCallCheck(this, AdminProductVirtual);

    jQuery("#product-type").on("change", this.removeParameters);
  }

  _createClass(AdminProductVirtual, [{
    key: "removeParameters",
    value: function removeParameters(event) {
      if ("virtual" === jQuery(event.target).val()) return jQuery(".product_regular_price_field").slideDown(), jQuery(".product_regular_price_field").find(".not-active").removeClass("not-active");
    }
  }]);

  return AdminProductVirtual;
}(), jQuery(function () {
  return new AdminProductVirtual();
});