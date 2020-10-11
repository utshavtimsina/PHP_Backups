"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShippingFlatRate;ShippingFlatRate = function () {
  function ShippingFlatRate() {
    _classCallCheck(this, ShippingFlatRate);

    jQuery("#flat_rate_available_for").on("change", this.toggleSpecificCountries).trigger("change");
  }

  _createClass(ShippingFlatRate, [{
    key: "toggleSpecificCountries",
    value: function toggleSpecificCountries() {
      return "specific" === jQuery("#flat_rate_available_for").val() ? jQuery("#flat_rate_countries").parents("div.flat_rate_countries_field").slideDown() : jQuery("#flat_rate_countries").parents("div.flat_rate_countries_field").slideUp();
    }
  }]);

  return ShippingFlatRate;
}(), jQuery(function () {
  return new ShippingFlatRate();
});