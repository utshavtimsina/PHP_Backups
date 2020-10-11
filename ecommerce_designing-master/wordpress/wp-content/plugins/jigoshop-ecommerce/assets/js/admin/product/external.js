"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminProductExternal;AdminProductExternal = function () {
  function AdminProductExternal() {
    _classCallCheck(this, AdminProductExternal);

    jQuery("#product-type").on("change", this.removeParameters), jQuery("#product-variations").on("change", "select.variation-type", this.removeVariationParameters);
  }

  _createClass(AdminProductExternal, [{
    key: "removeParameters",
    value: function removeParameters(event) {
      return "external" === jQuery(event.target).val() ? (jQuery(".product_regular_price_field").slideDown(), jQuery(".product-external").slideDown()) : jQuery(".product-external").slideUp();
    }
  }, {
    key: "removeVariationParameters",
    value: function removeVariationParameters(event) {
      var $item, $parent;return $parent = ($item = jQuery(event.target)).closest("li.variation"), "external" === $item.val() ? jQuery(".product-external", $parent).slideDown() : jQuery(".product-external", $parent).slideUp();
    }
  }]);

  return AdminProductExternal;
}(), jQuery(function () {
  return new AdminProductExternal();
});