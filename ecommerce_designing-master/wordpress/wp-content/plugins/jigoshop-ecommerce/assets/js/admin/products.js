"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminProducts;AdminProducts = function () {
  function AdminProducts() {
    _classCallCheck(this, AdminProducts);

    this.quickEditInit = this.quickEditInit.bind(this), jQuery(".product-featured").on("click", this.featureProduct), jQuery("#the-list").on("click", ".editinline", this.quickEditInit), jQuery("#the-list").on("click", "input.stock-manage", this.toggleStockFields);
  }

  _createClass(AdminProducts, [{
    key: "featureProduct",
    value: function featureProduct(event) {
      var $button;return event.preventDefault(), $button = jQuery(event.target).closest("a.product-featured"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.products.feature_product", product_id: $button.data("id") } }).done(function (data) {
        return null != data.success && data.success ? jQuery("span", $button).toggleClass("glyphicon-star").toggleClass("glyphicon-star-empty") : jigoshop.addMessage("danger", data.error, 6e3);
      });
    }
  }, {
    key: "quickEditInit",
    value: function quickEditInit(event) {
      var $item, inlineData, key, results, value;for (key in jQuery("div.toggle").hide(), results = [], inlineData = this.getInlineData(jQuery(event.target).closest("tr").attr("id").replace("post-", ""))) {
        value = inlineData[key], ($item = jQuery("input." + key + ", select." + key, ".jigoshop-inline-edit-row")).closest(".toggle").show(), "INPUT" === $item.prop("tagName") && "checkbox" === $item.attr("type") ? $item.prop("checked", value) : "SELECT" === $item.prop("tagName") ? ($item.val(value), $item.find("option").each(function (index, element) {
          return jQuery(element).val() === value ? jQuery(element).attr("selected", "selected") : jQuery(element).removeAttr("selected");
        })) : $item.val(value), results.push($item.change());
      }return results;
    }
  }, {
    key: "getInlineData",
    value: function getInlineData(id) {
      var result;return result = {}, jQuery("#jigoshop-inline-" + id + " div").each(function (index, element) {
        var $element;return $element = jQuery(element), result[$element.attr("class")] = $element.text();
      }), result;
    }
  }, {
    key: "toggleStockFields",
    value: function toggleStockFields(event) {
      return jQuery(event.target).is(":checked") ? (jQuery("input.stock-stock").show(), jQuery("select.stock-status").hide()) : (jQuery("input.stock-stock").hide(), jQuery("select.stock-status").show());
    }
  }]);

  return AdminProducts;
}(), jQuery(function () {
  return new AdminProducts();
});