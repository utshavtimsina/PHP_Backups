"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckoutPay;CheckoutPay = function CheckoutPay(params) {
  _classCallCheck(this, CheckoutPay);

  this.params = params, jQuery("#payment-methods").on("change", "li input[type=radio]", function () {
    return jQuery("#payment-methods li > div").slideUp(), jQuery("div", jQuery(this).closest("li")).slideDown();
  });
}, jQuery(function () {
  return new CheckoutPay();
});