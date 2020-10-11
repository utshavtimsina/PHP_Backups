"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminProductDownloadable;AdminProductDownloadable = function () {
  function AdminProductDownloadable() {
    _classCallCheck(this, AdminProductDownloadable);

    jQuery("#product-type").on("change", this.removeParameters), jQuery("#product-variations").on("change", "select.variation-type", this.removeVariationParameters);
  }

  _createClass(AdminProductDownloadable, [{
    key: "removeParameters",
    value: function removeParameters(event) {
      return "downloadable" === jQuery(event.target).val() ? (jQuery("li.download").show(), jQuery("li.download").removeClass("not-active")) : (jQuery("li.download").hide(), jQuery("li.download").not("not-active").addClass("not-active"));
    }
  }, {
    key: "removeVariationParameters",
    value: function removeVariationParameters(event) {
      var $item, $parent;return $parent = ($item = jQuery(event.target)).closest("li.variation"), "downloadable" === $item.val() ? jQuery(".product-downloadable", $parent).slideDown() : jQuery(".product-downloadable", $parent).slideUp();
    }
  }]);

  return AdminProductDownloadable;
}(), jQuery(function () {
  return new AdminProductDownloadable();
});