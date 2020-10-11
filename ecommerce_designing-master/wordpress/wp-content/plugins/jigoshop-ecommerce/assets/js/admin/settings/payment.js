"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Payment;Payment = function () {
  var Payment = function () {
    function Payment() {
      _classCallCheck(this, Payment);

      this.addProcessingFeeRule = this.addProcessingFeeRule.bind(this), jQuery(".payment-method-enable").on("switchChange.bootstrapSwitch", this.toggleEnable), jQuery(".payment-method-testMode").on("switchChange.bootstrapSwitch", this.toggleTestMode), this.processingFeeRulesLastId = jQuery("#processing-fee-rules").find("tbody").find("tr").length, jQuery("#processing-fee-rules").find("tbody").find("select").trigger("change"), jQuery("#processing-fee-add-rule").click(this.addProcessingFeeRule), this.bindProcessingFeeRulesControls(), jQuery("#processing-fee-rules").find("tbody").sortable();
    }

    _createClass(Payment, [{
      key: "toggleEnable",
      value: function toggleEnable(e, state) {
        var targetMethod;return targetMethod = jQuery(e.target).parents("tr").attr("id"), setTimeout(function () {
          return jQuery.post(ajaxurl, { action: "paymentMethodSaveEnable", method: targetMethod, state: state }, function () {
            return location.href = document.URL;
          });
        }, 300);
      }
    }, {
      key: "toggleTestMode",
      value: function toggleTestMode(e, state) {
        var targetMethod;return targetMethod = jQuery(e.target).parents("tr").attr("id"), setTimeout(function () {
          return jQuery.post(ajaxurl, { action: "paymentMethodSaveTestMode", method: targetMethod, state: state }, function () {
            return location.href = document.URL;
          });
        }, 300);
      }
    }, {
      key: "bindProcessingFeeRulesControls",
      value: function bindProcessingFeeRulesControls() {
        return jQuery(".processing-fee-remove-rule").click(this.removeProcessingFeeRule);
      }
    }, {
      key: "addProcessingFeeRule",
      value: function addProcessingFeeRule() {
        var rule;return rule = jigoshop_admin_payment.processingFeeRule.replace(/%RULE_ID%/g, this.processingFeeRulesLastId), this.processingFeeRulesLastId++, jQuery("#processing-fee-rules").find("tbody").append(rule), jQuery("#processing-fee-rules").find("tbody").find("tr").last().find("select").select2(), jQuery("#processing-fee-rules").find("tbody").find("tr").last().find('input[type="checkbox"].switch-medium').bootstrapSwitch({ size: "small", onText: jigoshop_settings.i18n.yes, offText: jigoshop_settings.i18n.no }), this.bindProcessingFeeRulesControls();
      }
    }, {
      key: "removeProcessingFeeRule",
      value: function removeProcessingFeeRule(e) {
        return jQuery(e.delegateTarget).parents("tr").remove();
      }
    }]);

    return Payment;
  }();

  return Payment.prototype.processingFeeRulesLastId = 0, Payment;
}.call(undefined), jQuery(function () {
  return new Payment();
});