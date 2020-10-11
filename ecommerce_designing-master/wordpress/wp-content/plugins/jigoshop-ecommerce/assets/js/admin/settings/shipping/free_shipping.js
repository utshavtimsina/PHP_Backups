"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShippingFreeShipping;ShippingFreeShipping = function () {
  function ShippingFreeShipping() {
    _classCallCheck(this, ShippingFreeShipping);

    jQuery("#free_shipping_available_for").on("change", this.toggleSpecificCountries).trigger("change");
  }

  _createClass(ShippingFreeShipping, [{
    key: "toggleSpecificCountries",
    value: function toggleSpecificCountries() {
      return "specific" === jQuery("#free_shipping_available_for").val() ? jQuery("#free_shipping_countries").parents("div.free_shipping_countries_field").slideDown() : jQuery("#free_shipping_countries").parents("div.free_shipping_countries_field").slideUp();
    }
  }]);

  return ShippingFreeShipping;
}(), jQuery(function () {
  return new ShippingFreeShipping();
});