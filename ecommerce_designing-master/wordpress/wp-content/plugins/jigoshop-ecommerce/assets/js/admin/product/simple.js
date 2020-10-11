"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminProductSimple;AdminProductSimple = function () {
  function AdminProductSimple() {
    _classCallCheck(this, AdminProductSimple);

    jQuery("#product-type").on("change", this.removeParameters), jQuery("#product-variations").on("change", "select.variation-type", this.removeVariationParameters);
  }

  _createClass(AdminProductSimple, [{
    key: "removeParameters",
    value: function removeParameters(event) {
      if ("simple" === jQuery(event.target).val()) return jQuery(".product_regular_price_field").slideDown(), jQuery(".product_regular_price_field").find(".not-active").removeClass("not-active");
    }
  }, {
    key: "removeVariationParameters",
    value: function removeVariationParameters(event) {
      var $item, $parent;return $parent = ($item = jQuery(event.target)).closest("li.variation"), "simple" === $item.val() ? jQuery(".product-simple", $parent).slideDown() : jQuery(".product-simple", $parent).slideUp();
    }
  }]);

  return AdminProductSimple;
}(), jQuery(function () {
  return new AdminProductSimple();
});