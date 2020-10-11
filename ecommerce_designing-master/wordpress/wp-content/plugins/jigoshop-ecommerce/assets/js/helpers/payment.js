"use strict";

JigoshopHelpers.prototype.payment = function ($element, options) {
  var settings;return settings = jQuery.extend({ redirect: "Redirecting...", message: "Thank you for your order. We are now redirecting you to make payment.", overlayCss: { opacity: .01 } }, options), this.block(jQuery(document.body), settings), $element.submit();
};