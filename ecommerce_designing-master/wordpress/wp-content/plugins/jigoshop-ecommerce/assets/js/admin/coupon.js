"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminCoupon;AdminCoupon = function () {
  function AdminCoupon() {
    _classCallCheck(this, AdminCoupon);

    jigoshop.ajaxSearch(jQuery("#jigoshop_coupon_products"), { action: "jigoshop.admin.product.find" }), jigoshop.ajaxSearch(jQuery("#jigoshop_coupon_excluded_products"), { action: "jigoshop.admin.product.find" }), jigoshop.ajaxSearch(jQuery("#jigoshop_coupon_categories"), { action: "jigoshop.admin.coupon.find_category" }), jigoshop.ajaxSearch(jQuery("#jigoshop_coupon_excluded_categories"), { action: "jigoshop.admin.coupon.find_category" }), jQuery("#jigoshop_coupon_type").on("change", this.couponTypeChange).trigger("change");
  }

  _createClass(AdminCoupon, [{
    key: "couponTypeChange",
    value: function couponTypeChange() {
      return "fixed_product" === jQuery("#jigoshop_coupon_type").val() || "percent_product" === jQuery("#jigoshop_coupon_type").val() ? jQuery("#jigoshop_coupon_type_product").slideDown() : jQuery("#jigoshop_coupon_type_product").slideUp();
    }
  }]);

  return AdminCoupon;
}(), jQuery(function () {
  return new AdminCoupon();
});