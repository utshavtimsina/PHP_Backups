"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShoppingSettings;ShoppingSettings = function () {
  function ShoppingSettings() {
    _classCallCheck(this, ShoppingSettings);

    jQuery("#restrict_selling_locations").on("switchChange.bootstrapSwitch", this.toggleSellingLocations), jQuery("#selling_locations").show().closest("div.form-group").show(), jQuery("#enable_verification_message").on("switchChange.bootstrapSwitch", this.toggleVerificationMessage), jQuery("#verification_message").show().closest("div.form-group").show();
  }

  _createClass(ShoppingSettings, [{
    key: "toggleSellingLocations",
    value: function toggleSellingLocations() {
      return jQuery("#selling_locations").closest("tr").toggle();
    }
  }, {
    key: "toggleVerificationMessage",
    value: function toggleVerificationMessage() {
      return jQuery("#verification_message").closest("tr").toggle();
    }
  }]);

  return ShoppingSettings;
}(), jQuery(function () {
  return new ShoppingSettings();
});