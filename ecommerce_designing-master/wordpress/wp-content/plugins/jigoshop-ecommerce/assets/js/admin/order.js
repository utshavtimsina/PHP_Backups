"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminOrder,
    hasProp = {}.hasOwnProperty;AdminOrder = function () {
  var AdminOrder = function () {
    function AdminOrder(params) {
      _classCallCheck(this, AdminOrder);

      this.selectShipping = this.selectShipping.bind(this), this.newItemClick = this.newItemClick.bind(this), this.updateItem = this.updateItem.bind(this), this.removeItemClick = this.removeItemClick.bind(this), this.updateCountry = this.updateCountry.bind(this), this.updateState = this.updateState.bind(this), this.updatePostcode = this.updatePostcode.bind(this), this.params = params, this.newItemSelect(), this._prepareStateField("#order_billing_address_state"), this._prepareStateField("#order_shipping_address_state"), jQuery("#add-item").on("click", this.newItemClick), jQuery(".jigoshop-order table").on("click", "a.remove", this.removeItemClick), jQuery(".jigoshop-order table").on("change", ".price input, .quantity input", this.updateItem), jQuery(".jigoshop-data").on("change", "#order_billing_address_country", this.updateCountry).on("change", "#order_shipping_address_country", this.updateCountry).on("change", "#order_billing_address_state", this.updateState).on("change", "#order_shipping_address_state", this.updateState).on("change", "#order_billing_address_postcode", this.updatePostcode).on("change", "#order_shipping_address_postcode", this.updatePostcode), jQuery(".jigoshop-totals").on("click", "input[type=radio]", this.selectShipping), jQuery("input#title").remove();
    }

    _createClass(AdminOrder, [{
      key: "selectShipping",
      value: function selectShipping(e) {
        var _this = this;

        var $method, $parent, $rate;return $parent = jQuery(e.target).closest("div.jigoshop"), $method = jQuery(e.target), $rate = jQuery(".shipping-method-rate", $method.closest("li")), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.order.change_shipping_method", order: $parent.data("order"), method: $method.val(), rate: $rate.val() } }).done(function (result) {
          return null != result.success && result.success ? (_this._updateTotals(result.html.total, result.html.subtotal), _this._updateTaxes(result.tax, result.html.tax)) : alert(result.error);
        });
      }
    }, {
      key: "newItemSelect",
      value: function newItemSelect() {
        return jQuery("#new-item").select2({ minimumInputLength: 3, ajax: { url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: function data(term) {
              return { query: term, action: "jigoshop.admin.product.find" };
            }, results: function results(data) {
              return null != data.success ? { results: data.results } : { results: [] };
            } } });
      }
    }, {
      key: "newItemClick",
      value: function newItemClick(e) {
        var _this2 = this;

        var $existing, $parent, $quantity, value;return e.preventDefault(), "" !== (value = jQuery("#new-item").val()) && ($parent = jQuery(e.target).closest("table"), ($existing = jQuery("tr[data-product=" + value + "]", $parent)).length > 0 ? void ($quantity = jQuery(".quantity input", $existing)).val(parseInt($quantity.val()) + 1).trigger("change") : jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.order.add_product", product: value, order: $parent.data("order") } }).done(function (data) {
          if (null != data.success && data.success) return jQuery(data.html.row).appendTo($parent), jQuery("#product-subtotal", $parent).html(data.html.product_subtotal), _this2._updateTotals(data.html.total, data.html.subtotal), _this2._updateTaxes(data.tax, data.html.tax);
        }));
      }
    }, {
      key: "updateItem",
      value: function updateItem(e) {
        var _this3 = this;

        var $parent, $row;return e.preventDefault(), $row = jQuery(e.target).closest("tr"), $parent = $row.closest("table"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.order.update_product", product: $row.data("id"), order: $parent.data("order"), price: jQuery(".price input", $row).val(), quantity: jQuery(".quantity input", $row).val() } }).done(function (data) {
          if (null != data.success && data.success) return data.item_cost > 0 ? jQuery(".total p", $row).html(data.html.item_cost) : $row.remove(), jQuery("#product-subtotal", $parent).html(data.html.product_subtotal), _this3._updateTotals(data.html.total, data.html.subtotal), _this3._updateTaxes(data.tax, data.html.tax);
        });
      }
    }, {
      key: "removeItemClick",
      value: function removeItemClick(e) {
        var _this4 = this;

        var $parent, $row;return e.preventDefault(), $row = jQuery(e.target).closest("tr"), $parent = $row.closest("table"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.order.remove_product", product: $row.data("id"), order: $parent.data("order") } }).done(function (data) {
          if (null != data.success && data.success) return $row.remove(), jQuery("#product-subtotal", $parent).html(data.html.product_subtotal), _this4._updateTaxes(data.tax, data.html.tax), _this4._updateTotals(data.html.total, data.html.subtotal);
        });
      }
    }, {
      key: "updateCountry",
      value: function updateCountry(e) {
        var _this5 = this;

        var $parent, $target, id, type;return $parent = ($target = jQuery(e.target)).closest(".jigoshop"), id = $target.attr("id"), type = id.replace(/order_/, "").replace(/_country/, ""), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.order.change_country", value: $target.val(), order: $parent.data("order"), type: type } }).done(function (result) {
          var $field, data, label, ref, state;if (null != result.success && result.success) {
            if (_this5._updateTotals(result.html.total, result.html.subtotal), _this5._updateTaxes(result.tax, result.html.tax), _this5._updateShipping(result.shipping, result.html.shipping), $field = jQuery("#order_" + type + "_state"), result.has_states) {
              for (state in data = [], ref = result.states) {
                hasProp.call(ref, state) && (label = ref[state], data.push({ id: state, text: label }));
              }return $field.select2({ data: data });
            }return $field.attr("type", "text").select2("destroy").val("");
          }return jigoshop.addMessage("danger", result.error, 6e3);
        });
      }
    }, {
      key: "updateState",
      value: function updateState(e) {
        var _this6 = this;

        var $parent, $target, type;return $parent = ($target = jQuery(e.target)).closest(".jigoshop"), type = $target.attr("id").replace(/order_/, "").replace(/_state/, ""), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.order.change_state", value: $target.val(), order: $parent.data("order"), type: type } }).done(function (result) {
          return null != result.success && result.success ? (_this6._updateTotals(result.html.total, result.html.subtotal), _this6._updateTaxes(result.tax, result.html.tax), _this6._updateShipping(result.shipping, result.html.shipping)) : jigoshop.addMessage("danger", result.error, 6e3);
        });
      }
    }, {
      key: "updatePostcode",
      value: function updatePostcode(e) {
        var _this7 = this;

        var $parent, $target, type;return $parent = ($target = jQuery(e.target)).closest(".jigoshop"), type = $target.attr("id").replace(/order_/, "").replace(/_postcode/, ""), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.order.change_postcode", value: $target.val(), order: $parent.data("order"), type: type } }).done(function (result) {
          return null != result.success && result.success ? (_this7._updateTotals(result.html.total, result.html.subtotal), _this7._updateTaxes(result.tax, result.html.tax), _this7._updateShipping(result.shipping, result.html.shipping)) : jigoshop.addMessage("danger", result.error, 6e3);
        });
      }
    }, {
      key: "_updateTaxes",
      value: function _updateTaxes(taxes, html) {
        var $tax, results, tax, taxClass;for (taxClass in results = [], html) {
          hasProp.call(html, taxClass) && (tax = html[taxClass], $tax = jQuery(".order_tax_" + taxClass + "_field"), jQuery("label", $tax).html(tax.label), jQuery("p", $tax).html(tax.value).show(), taxes[taxClass] > 0 ? results.push($tax.show()) : results.push($tax.hide()));
        }return results;
      }
    }, {
      key: "_updateTotals",
      value: function _updateTotals(total, subtotal) {
        return jQuery("#subtotal").html(subtotal), jQuery("#total").html(total);
      }
    }, {
      key: "_updateShipping",
      value: function _updateShipping(shipping, html) {
        var $item, $method, shippingClass, value;for (shippingClass in shipping) {
          hasProp.call(shipping, shippingClass) && (value = shipping[shippingClass], ($method = jQuery(".shipping-" + shippingClass)).addClass("existing"), $method.length > 0 ? value > -1 ? ($item = jQuery(html[shippingClass].html).addClass("existing"), $method.replaceWith($item)) : $method.slideUp(function () {
            return jQuery(this).remove();
          }) : null != html[shippingClass] && ($item = jQuery(html[shippingClass].html)).hide().addClass("existing").appendTo(jQuery("#shipping-methods")).slideDown());
        }return jQuery("#shipping-methods > li:not(.existing)").slideUp(function () {
          return jQuery(this).remove();
        }), jQuery("#shipping-methods > li").removeClass("existing");
      }
    }, {
      key: "_prepareStateField",
      value: function _prepareStateField(id) {
        var $field, $replacement, data;if (($field = jQuery(id)).is("select")) return $replacement = jQuery(document.createElement("input")).attr("type", "text").attr("id", $field.attr("id")).attr("name", $field.attr("name")).attr("class", $field.attr("class")).val($field.val()), data = [], jQuery("option", $field).each(function () {
          return data.push({ id: jQuery(this).val(), text: jQuery(this).html() });
        }), $field.replaceWith($replacement), $replacement.select2({ data: data });
      }
    }]);

    return AdminOrder;
  }();

  return AdminOrder.prototype.params = { tax_shipping: !1, ship_to_billing: !1 }, AdminOrder;
}.call(undefined), jQuery(function () {
  return new AdminOrder(jigoshop_admin_order);
});