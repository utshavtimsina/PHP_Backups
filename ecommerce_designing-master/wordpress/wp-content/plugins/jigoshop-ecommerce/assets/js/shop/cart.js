"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart,
    hasProp = {}.hasOwnProperty;Cart = function () {
  var Cart = function () {
    function Cart(params) {
      _classCallCheck(this, Cart);

      this.block = this.block.bind(this), this.selectShipping = this.selectShipping.bind(this), this.updateCountry = this.updateCountry.bind(this), this.updateState = this.updateState.bind(this), this.updatePostcode = this.updatePostcode.bind(this), this._updateShippingField = this._updateShippingField.bind(this), this.removeItem = this.removeItem.bind(this), this.updateQuantity = this.updateQuantity.bind(this), this.updateDiscounts = this.updateDiscounts.bind(this), this.params = params, jQuery("#cart").on("change", ".product-quantity input", this.updateQuantity).on("click", ".product-remove a", this.removeItem), jQuery("#mobile").on("click", ".show-product", function (event) {
        var $item;return $item = jQuery(event.target), jQuery(".list-group-item-text", $item.closest("li")).slideToggle(function () {
          return jQuery("span", $item).toggleClass("glyphicon-collapse-down").toggleClass("glyphicon-collapse-up");
        });
      }), jQuery("#shipping-calculator").on("click", "#change-destination", this.changeDestination).on("click", ".close", this.changeDestination).on("click", "input[type=radio]", this.selectShipping).on("change", "#country", this.updateCountry).on("change", "#state", this.updateState.bind(this, "#state")).on("change", "#noscript_state", this.updateState.bind(this, "#noscript_state")).on("change", "#postcode", this.updatePostcode), jQuery("input#jigoshop_coupons").on("change", this.updateDiscounts).select2({ tags: [], tokenSeparators: [","], multiple: !0, formatNoMatches: "" });
    }

    _createClass(Cart, [{
      key: "block",
      value: function block() {
        return jQuery("#cart").block({ message: '<img src="' + this.params.assets + '/images/loading.gif" alt="' + this.params.i18n.loading + '" width="15" height="15" />', css: { padding: "5px", width: "auto", height: "auto", border: "1px solid #83AC31" }, overlayCSS: { backgroundColor: "rgba(255, 255, 255, .8)" } });
      }
    }, {
      key: "unblock",
      value: function unblock() {
        return jQuery("#cart").unblock();
      }
    }, {
      key: "changeDestination",
      value: function changeDestination(e) {
        return e.preventDefault(), jQuery("#shipping-calculator td > div").slideToggle(), jQuery("#change-destination").slideToggle(), !1;
      }
    }, {
      key: "selectShipping",
      value: function selectShipping() {
        var _this = this;

        var $method, $rate;return $method = jQuery("#shipping-calculator input[type=radio]:checked"), $rate = jQuery(".shipping-method-rate", $method.closest("li")), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop_cart_select_shipping", method: $method.val(), rate: $rate.val() } }).done(function (result) {
          return result.success ? (_this._updateTotals(result.html.total, result.html.subtotal), _this._updateTaxes(result.tax, result.html.tax)) : jigoshop.addMessage("danger", result.error, 6e3);
        });
      }
    }, {
      key: "updateCountry",
      value: function updateCountry() {
        var _this2 = this;

        return this.block(), jQuery(".noscript_state_field").remove(), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop_cart_change_country", value: jQuery("#country").val() } }).done(function (result) {
          var data, label, ref, state;if (null != result.success && result.success) {
            if (jQuery("#shipping-calculator th p > span").html(result.html.estimation), _this2._updateTotals(result.html.total, result.html.subtotal), _this2._updateDiscount(result), _this2._updateTaxes(result.tax, result.html.tax), _this2._updateShipping(result.shipping, result.html.shipping), result.has_states) {
              for (state in data = [], ref = result.states) {
                hasProp.call(ref, state) && (label = ref[state], data.push({ id: state, text: label }));
              }jQuery("#state").select2({ data: data });
            } else jQuery("#state").attr("type", "text").select2("destroy").val("");
          } else jigoshop.addMessage("danger", result.error, 6e3);return _this2.unblock();
        });
      }
    }, {
      key: "updateState",
      value: function updateState(field) {
        return this._updateShippingField("jigoshop_cart_change_state", jQuery(field).val());
      }
    }, {
      key: "updatePostcode",
      value: function updatePostcode() {
        return this._updateShippingField("jigoshop_cart_change_postcode", jQuery("#postcode").val());
      }
    }, {
      key: "_updateShippingField",
      value: function _updateShippingField(action, value) {
        var _this3 = this;

        return this.block(), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: action, value: value } }).done(function (result) {
          return null != result.success && result.success ? (jQuery("#shipping-calculator th p > span").html(result.html.estimation), _this3._updateTotals(result.html.total, result.html.subtotal), _this3._updateDiscount(result), _this3._updateTaxes(result.tax, result.html.tax), _this3._updateShipping(result.shipping, result.html.shipping)) : jigoshop.addMessage("danger", result.error, 6e3), _this3.unblock();
        });
      }
    }, {
      key: "removeItem",
      value: function removeItem(e) {
        var $item;return e.preventDefault(), $item = jQuery(e.target).closest("tr, li"), jQuery(".product-quantity", $item).val(0), this.updateQuantity(e);
      }
    }, {
      key: "updateQuantity",
      value: function updateQuantity(e) {
        var _this4 = this;

        var $item, $items;return $item = jQuery(e.target).closest("tr, li"), $items = jQuery('input[name="cart[' + $item.data("id") + ']"]').closest("tr, li"), jQuery("span.product-quantity", $item).html(jQuery(e.target).val()), jQuery("input.product-quantity", $item).html(jQuery(e.target).val()), this.block(), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop_cart_update_item", item: $item.data("id"), quantity: jQuery(e.target).val() } }).done(function (result) {
          var $cart, $empty;if (!0 === result.success) {
            if (null != result.empty_cart == !0) return $empty = jQuery(result.html).hide(), ($cart = jQuery("#cart")).after($empty), $cart.slideUp(), $empty.slideDown(), void _this4.unblock();null != result.remove_item == !0 ? $items.remove() : (jQuery(".product-subtotal", $item).html(result.html.item_subtotal), jQuery(".product-price", $item).html(result.html.item_price)), jQuery("td#product-subtotal").html(result.html.product_subtotal), _this4._updateTotals(result.html.total, result.html.subtotal), _this4._updateDiscount(result), _this4._updateTaxes(result.tax, result.html.tax), _this4._updateShipping(result.shipping, result.html.shipping);
          } else jigoshop.addMessage("danger", result.error, 6e3);return _this4.unblock();
        });
      }
    }, {
      key: "updateDiscounts",
      value: function updateDiscounts(event) {
        var _this5 = this;

        var $item;return $item = jQuery(event.target), this.block(), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop_cart_update_discounts", coupons: $item.val() } }).done(function (result) {
          var $cart, $empty;if (null != result.success && result.success) {
            if (null != result.empty_cart == !0) return $empty = jQuery(result.html).hide(), ($cart = jQuery("#cart")).after($empty), $cart.slideUp(), $empty.slideDown(), void _this5.unblock();jQuery("td#product-subtotal").html(result.html.product_subtotal), _this5._updateTotals(result.html.total, result.html.subtotal), _this5._updateDiscount(result), _this5._updateTaxes(result.tax, result.html.tax), _this5._updateShipping(result.shipping, result.html.shipping);
          } else jigoshop.addMessage("danger", result.error, 6e3);return _this5.unblock();
        });
      }
    }, {
      key: "_updateTotals",
      value: function _updateTotals(total, subtotal) {
        return jQuery("#cart-total > td").html(total), jQuery("#cart-subtotal > td").html(subtotal);
      }
    }, {
      key: "_updateDiscount",
      value: function _updateDiscount(data) {
        var $parent;if (null != data.coupons && (jQuery("input#jigoshop_coupons").select2("val", data.coupons.split(",")), $parent = jQuery("tr#cart-discount"), data.discount > 0 ? (jQuery("td", $parent).html(data.html.discount), $parent.show()) : $parent.hide(), null != data.html.coupons)) return jigoshop.addMessage("warning", data.html.coupons);
      }
    }, {
      key: "_updateShipping",
      value: function _updateShipping(shipping, html) {
        var $item, $method, shippingClass, value;for (shippingClass in "object" != (typeof shipping === "undefined" ? "undefined" : _typeof(shipping)) || Array.isArray(shipping) || null === shipping ? jQuery("#shipping-calculator").slideUp() : jQuery("#shipping-calculator").slideDown(), shipping) {
          hasProp.call(shipping, shippingClass) && (value = shipping[shippingClass], ($method = jQuery(".shipping-" + shippingClass)).addClass("existing"), void 0 !== html[shippingClass] && ($method.length > 0 ? value > -1 ? ($item = jQuery(html[shippingClass].html).addClass("existing"), $method.replaceWith($item)) : $method.slideUp(function () {
            return jQuery(this).remove();
          }) : void 0 !== html[shippingClass] && ($item = jQuery(html[shippingClass].html)).hide().addClass("existing").appendTo(jQuery("#shipping-methods")).slideDown()));
        }return jQuery("#shipping-methods > li:not(.existing)").slideUp(function () {
          return jQuery(this).remove();
        }), jQuery("#shipping-methods > li").removeClass("existing");
      }
    }, {
      key: "_updateTaxes",
      value: function _updateTaxes(taxes, html) {
        var $tax, results, tax, taxClass;for (taxClass in results = [], html) {
          hasProp.call(html, taxClass) && (tax = html[taxClass], $tax = jQuery("#tax-" + taxClass), jQuery("th", $tax).html(tax.label), jQuery("td", $tax).html(tax.value), taxes[taxClass] > 0 ? results.push($tax.show()) : results.push($tax.hide()));
        }return results;
      }
    }]);

    return Cart;
  }();

  return Cart.prototype.params = { assets: "", i18n: { loading: "Loading..." } }, Cart;
}.call(undefined), jQuery(function () {
  return new Cart(jigoshop_cart);
});