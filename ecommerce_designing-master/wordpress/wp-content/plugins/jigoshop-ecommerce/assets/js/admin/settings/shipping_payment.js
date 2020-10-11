"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShippingPayment;ShippingPayment = function () {
  var ShippingPayment = function () {
    function ShippingPayment() {
      _classCallCheck(this, ShippingPayment);

      this.openPopup = this.openPopup.bind(this), jQuery(".shipping-payment-method-configure").click(this.openPopup);
    }

    _createClass(ShippingPayment, [{
      key: "openPopup",
      value: function openPopup(e) {
        var _this = this;

        var targetMethod;if (void 0 !== (targetMethod = jQuery(e.delegateTarget).val())) return jQuery.magnificPopup.open({ mainClass: "jigoshop", items: { src: "" }, type: "inline", callbacks: { elementParse: function elementParse(item) {
              return item.src = jQuery("#shipping-payment-method-options-" + targetMethod).detach(), jQuery(item.src).css("display", "block");
            }, open: function open() {
              return jQuery('.mfp-content input[type="checkbox"]').bootstrapSwitch({ size: "small", onText: jigoshop_settings.i18n.yes, offText: jigoshop_settings.i18n.no }), jQuery(".mfp-content select").each(function (index, element) {
                return jQuery(element).siblings().remove(), jQuery(element).select2("destroy"), jQuery(element).select2();
              }), jQuery(".mfp-content .shipping-payment-method-options-save").click(function (e) {
                return _this.saveSettings = !0, _this.finalizeChanges(e);
              }), jQuery(".mfp-content .shipping-payment-method-options-discard").click(function (e) {
                return _this.finalizeChanges(e);
              });
            }, close: function close() {
              return _this.finalizeChanges(null);
            } } });
      }
    }, {
      key: "finalizeChanges",
      value: function finalizeChanges(e) {
        var $contents;if (null !== e && e.preventDefault(), jQuery(".mfp-content").find(".shipping-payment-method-options-discard, .shipping-payment-method-options-save").attr("disabled", "disabled"), this.saveSettings) return ($contents = jQuery(".mfp-content").children("div").clone(!0, !0)).find("select").each(function (index, element) {
          var selectedValues, selectedValuesIds;return selectedValues = jQuery(element).select2("data"), selectedValuesIds = [], jQuery.isArray(selectedValues) ? jQuery(selectedValues).each(function (index2, element2) {
            return selectedValuesIds.push(element2.id);
          }) : selectedValuesIds.push(selectedValues.id), jQuery(element).val(selectedValuesIds);
        }), jQuery($contents).appendTo("#shipping-payment-methods-container"), jQuery(".shipping-payment-method-options-save").parents("form").submit();location.href = document.URL;
      }
    }]);

    return ShippingPayment;
  }();

  return ShippingPayment.prototype.saveSettings = !1, ShippingPayment;
}.call(undefined), jQuery(function () {
  return new ShippingPayment();
});