"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductVariable,
    hasProp = {}.hasOwnProperty;ProductVariable = function () {
  var ProductVariable = function () {
    function ProductVariable(params) {
      _classCallCheck(this, ProductVariable);

      this.updateAttributes = this.updateAttributes.bind(this), this.params = params, this.defaultFeaturedImage = jQuery(".featured-image"), jQuery("select.product-attribute").on("change", this.updateAttributes), jQuery("select.product-attribute").trigger("change");
    }

    _createClass(ProductVariable, [{
      key: "updateAttributes",
      value: function updateAttributes(event) {
        var $buttons, $messages, attributeId, attributeValue, definition, id, proper, ref, ref1, results, size;for (id in $buttons = jQuery("#add-to-cart-buttons"), $messages = jQuery("#add-to-cart-messages"), results = /(?:^|\s)attributes\[(\d+)](?:\s|$)/g.exec(event.target.name), this.attributes[results[1]] = event.target.value, "" === event.target.value && (jQuery(".variable-product-gallery a").not("#variation-featured-image-parent").addClass("active"), this.refreshVariationGallery("parent")), proper = this.VARIATION_NOT_FULL, size = Object.keys(this.attributes).length, ref = this.params.variations) {
          if (hasProp.call(ref, id)) if (definition = ref[id], proper = this.VARIATION_EXISTS, Object.keys(definition.attributes).length === size) {
            for (attributeId in ref1 = this.attributes) {
              if (hasProp.call(ref1, attributeId) && (attributeValue = ref1[attributeId], "" !== definition.attributes[attributeId] && definition.attributes[attributeId] !== attributeValue)) {
                proper = this.VARIATION_NOT_EXISTS;break;
              }
            }if (proper === this.VARIATION_EXISTS) {
              if ("" === definition.price) {
                proper = this.VARIATION_NOT_EXISTS;continue;
              }jQuery("div.price > span", $buttons).html(definition.html.price), "" !== definition.html.image ? (jQuery(".featured-image").replaceWith(definition.html.image), this.refreshVariationGallery(id)) : (jQuery(".featured-image").replaceWith(this.defaultFeaturedImage), this.refreshVariationGallery("parent")), jQuery("#variation-id").val(id), $buttons.slideDown(), $messages.slideUp();break;
            }
          } else proper = this.VARIATION_NOT_FULL;
        }if (proper !== this.VARIATION_EXISTS && (jQuery("#variation-id").val(""), jQuery(".featured-image").replaceWith(this.defaultFeaturedImage), this.refreshVariationGallery("parent"), $buttons.slideUp()), proper === this.VARIATION_NOT_EXISTS && event.target.value) return $messages.slideDown();
      }
    }, {
      key: "refreshVariationGallery",
      value: function refreshVariationGallery(id) {
        return jQuery(".variable-product-gallery a.active").removeClass("active"), jQuery(".variable-product-gallery a").not(jQuery("#variation-featured-image-" + id)).addClass("active");
      }
    }]);

    return ProductVariable;
  }();

  return ProductVariable.prototype.VARIATION_EXISTS = 1, ProductVariable.prototype.VARIATION_NOT_EXISTS = 2, ProductVariable.prototype.VARIATION_NOT_FULL = 3, ProductVariable.prototype.params = { variations: {} }, ProductVariable.prototype.attributes = {}, ProductVariable.prototype.defaultFeaturedImage = "", ProductVariable;
}.call(undefined), jQuery(function () {
  return new ProductVariable(jigoshop_product_variable);
});