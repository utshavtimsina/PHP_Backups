"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Checkout,
    hasProp = {}.hasOwnProperty;Checkout = function () {
  var Checkout = function () {
    function Checkout(params) {
      var _this = this;

      _classCallCheck(this, Checkout);

      this.block = this.block.bind(this), this.selectShipping = this.selectShipping.bind(this), this.updateEUVatNumber = this.updateEUVatNumber.bind(this), this.updateCountry = this.updateCountry.bind(this), this.updateState = this.updateState.bind(this), this.updatePostcode = this.updatePostcode.bind(this), this.updateDiscounts = this.updateDiscounts.bind(this), this._updateShippingField = this._updateShippingField.bind(this), this.params = params, this._prepareStateField("#jigoshop_order_billing_address_state"), this._prepareStateField("#jigoshop_order_shipping_address_state"), jQuery("#checkout-mobile").on("click", ".show-product", function (event) {
        var $item;return $item = jQuery(event.target), jQuery(".list-group-item-text", $item.closest("li")).slideToggle(function () {
          return jQuery("span", $item).toggleClass("glyphicon-collapse-down").toggleClass("glyphicon-collapse-up");
        });
      }), jQuery("#jigoshop-login").on("click", function (event) {
        return event.preventDefault(), jQuery("#jigoshop-login-form").slideToggle();
      }), jQuery("#create-account").on("change", function () {
        return jQuery("#registration-form").slideToggle();
      }), jQuery("#different_shipping_address").on("change", function () {
        return jQuery("#shipping-address").slideToggle(), jQuery(this).is(":checked") ? jQuery("#jigoshop_order_shipping_address_country").change() : jQuery("#jigoshop_order_billing_address_country").change();
      }), jQuery("#payment-methods").on("change", "li input[type=radio]", this.selectPayment), jQuery("#shipping-calculator").on("click", "input[type=radio]", this.selectShipping), jQuery("#jigoshop_order_billing_address_euvatno").on("change", function (event) {
        return _this.updateEUVatNumber(event);
      }), jQuery("#jigoshop_order_billing_address_country").on("change", function (event) {
        return _this.updateCountry("billing_address", event);
      }), jQuery("#jigoshop_order_shipping_address_country").on("change", function (event) {
        return _this.updateCountry("shipping_address", event);
      }), jQuery("#jigoshop_order_billing_address_state").on("change", this.updateState.bind(this, "billing_address")), jQuery("#jigoshop_order_shipping_address_state").on("change", this.updateState.bind(this, "shipping_address")), jQuery("#jigoshop_order_billing_address_postcode").on("change", this.updatePostcode.bind(this, "billing_address")), jQuery("#jigoshop_order_shipping_address_postcode").on("change", this.updatePostcode.bind(this, "shipping_address")), jQuery("#jigoshop_coupons, #jigoshop_coupons_mobile").on("change", this.updateDiscounts).select2({ tags: [], tokenSeparators: [","], multiple: !0, formatNoMatches: "" }), 1 === jQuery("#shipping-calculator input[type=radio]").length && jQuery("#shipping-calculator input[type=radio]").trigger("click");
    }

    _createClass(Checkout, [{
      key: "block",
      value: function block() {
        return jQuery("#checkout > button").block({ message: '<img src="' + this.params.assets + '/images/loading.gif" alt="' + this.params.i18n.loading + '" />', css: { padding: "20px", width: "auto", height: "auto", border: "1px solid #83AC31" }, overlayCss: { opacity: .01 } });
      }
    }, {
      key: "unblock",
      value: function unblock() {
        return jQuery("#checkout > button").unblock();
      }
    }, {
      key: "_prepareStateField",
      value: function _prepareStateField(id) {
        var $field, $replacement, data;if (($field = jQuery(id)).is("select")) return $replacement = jQuery(document.createElement("input")).attr("type", "text").attr("id", $field.attr("id")).attr("name", $field.attr("name")).attr("class", $field.attr("class")).val($field.val()), data = [], jQuery("option", $field).each(function () {
          return data.push({ id: jQuery(this).val(), text: jQuery(this).html() });
        }), $field.replaceWith($replacement), $replacement.select2({ data: data });
      }
    }, {
      key: "selectShipping",
      value: function selectShipping() {
        var _this2 = this;

        var $method, $rate;return $method = jQuery("#shipping-calculator input[type=radio]:checked"), $rate = jQuery(".shipping-method-rate", $method.closest("li")), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop_cart_select_shipping", method: $method.val(), rate: $rate.val() } }).done(function (result) {
          return result.success ? (_this2._updateTotals(result.html.total, result.html.subtotal), _this2._updateDiscount(result), _this2._updateTaxes(result.tax, result.html.tax)) : jigoshop.addMessage("danger", result.error, 6e3);
        });
      }
    }, {
      key: "selectPayment",
      value: function selectPayment() {
        return jQuery("#payment-methods li > div").slideUp(), jQuery("div", jQuery(this).closest("li")).slideDown(), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop_checkout_select_payment", method: jQuery(this).val() } }).done(function (result) {
          return result.feePresent ? (jQuery("#cart-payment-processing-fee").find("th").html(result.title), jQuery("#cart-payment-processing-fee").find("td").html(result.fee), jQuery("#cart-payment-processing-fee").removeClass("not-active")) : jQuery("#cart-payment-processing-fee").addClass("not-active"), jQuery("#cart-total").find("td").find("strong").html(result.total);
        });
      }
    }, {
      key: "updateEUVatNumber",
      value: function updateEUVatNumber(event) {
        var _this3 = this;

        return this.block(), jQuery(".noscript_state_field").remove(), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop_checkout_change_euVatNumber", value: jQuery(event.target).val() } }).done(function (result) {
          return null != result.success && result.success ? (null != result.euVatError && result.euVatError && jigoshop.addMessage("danger", result.euVatError, 6e3), _this3._updateTotals(result.html.total, result.html.subtotal), _this3._updateDiscount(result), _this3._updateTaxes(result.tax, result.html.tax), _this3._updateShipping(result.shipping, result.html.shipping), _this3._toggleEUVatField(result.isEU)) : jigoshop.addMessage("danger", result.error, 6e3), _this3.unblock();
        });
      }
    }, {
      key: "updateCountry",
      value: function updateCountry(field, event) {
        var _this4 = this;

        return this.block(), jQuery(".noscript_state_field").remove(), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop_checkout_change_country", field: field, differentShipping: jQuery("#different_shipping_address").is(":checked"), value: jQuery(event.target).val() } }).done(function (result) {
          var data, label, ref, state, stateClass;if (null != result.success && result.success) {
            if (null != result.euVatError && result.euVatError && jigoshop.addMessage("danger", result.euVatError, 6e3), _this4._updateTotals(result.html.total, result.html.subtotal), _this4._updateDiscount(result), _this4._updateTaxes(result.tax, result.html.tax), _this4._updateShipping(result.shipping, result.html.shipping), _this4._toggleEUVatField(result.isEU), stateClass = "#" + jQuery(event.target).attr("id").replace(/country/, "state"), result.has_states) {
              for (state in data = [], ref = result.states) {
                hasProp.call(ref, state) && (label = ref[state], data.push({ id: state, text: label }));
              }jQuery(stateClass).select2({ data: data });
            } else jQuery(stateClass).attr("type", "text").select2("destroy").val("");
          } else jigoshop.addMessage("danger", result.error, 6e3);return _this4.unblock();
        });
      }
    }, {
      key: "updateState",
      value: function updateState(field) {
        var fieldClass;return fieldClass = "#jigoshop_order_" + field + "_state", this._updateShippingField("jigoshop_checkout_change_state", field, jQuery(fieldClass).val());
      }
    }, {
      key: "updatePostcode",
      value: function updatePostcode(field) {
        var fieldClass;return fieldClass = "#jigoshop_order_" + field + "_postcode", this._updateShippingField("jigoshop_checkout_change_postcode", field, jQuery(fieldClass).val());
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
      key: "_updateShippingField",
      value: function _updateShippingField(action, field, value) {
        var _this6 = this;

        return this.block(), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: action, field: field, differentShipping: jQuery("#different_shipping_address").is(":checked"), value: value } }).done(function (result) {
          return null != result.success && result.success ? (_this6._updateTotals(result.html.total, result.html.subtotal), _this6._updateDiscount(result), _this6._updateTaxes(result.tax, result.html.tax), _this6._updateShipping(result.shipping, result.html.shipping)) : jigoshop.addMessage("danger", result.error, 6e3), _this6.unblock();
        });
      }
    }, {
      key: "_updateTotals",
      value: function _updateTotals(total, subtotal) {
        return jQuery("#cart-total > td > strong").html(total), jQuery("#cart-subtotal > td").html(subtotal);
      }
    }, {
      key: "_updateDiscount",
      value: function _updateDiscount(data) {
        var $parent;if (null != data.coupons && (jQuery("input#jigoshop_coupons").select2("val", data.coupons.split(",")), $parent = jQuery("tr#cart-discount"), data.discount > 0 ? (jQuery("td", $parent).html(data.html.discount), $parent.show()) : $parent.hide(), null != data.html.coupons)) return jigoshop.addMessage("warning", data.html.coupons);
      }
    }, {
      key: "_updateShipping",
      value: function _updateShipping(shipping, html) {
        var $item, $method, shippingClass, value;for (shippingClass in shipping) {
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
    }, {
      key: "_toggleEUVatField",
      value: function _toggleEUVatField(isEU) {
        return isEU ? jQuery("#jigoshop_order_billing_address_euvatno").prop("disabled", !1) : jQuery("#jigoshop_order_billing_address_euvatno").prop("disabled", !0);
      }
    }]);

    return Checkout;
  }();

  return Checkout.prototype.params = { assets: "", i18n: { loading: "Loading..." } }, Checkout;
}.call(undefined), jQuery(function () {
  return new Checkout(jigoshop_checkout);
});