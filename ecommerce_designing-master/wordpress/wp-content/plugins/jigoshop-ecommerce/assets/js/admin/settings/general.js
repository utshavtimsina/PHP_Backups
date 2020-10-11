"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeneralSettings;GeneralSettings = function () {
  var GeneralSettings = function () {
    function GeneralSettings(params) {
      _classCallCheck(this, GeneralSettings);

      this.updateStateField = this.updateStateField.bind(this), this.updateCurrencyPositionField = this.updateCurrencyPositionField.bind(this), this.params = params, jQuery("#show_message").on("switchChange.bootstrapSwitch", this.toggleCustomMessage), jQuery("#custom_message").show().closest("div.form-group").show(), jQuery("select#country").on("change", this.updateStateField), jQuery("select#currency").on("change", this.updateCurrencyPositionField).change(), this.updateFields();
    }

    _createClass(GeneralSettings, [{
      key: "updateStateField",
      value: function updateStateField(event) {
        var $country, $states, country;return $country = jQuery(event.target), $states = jQuery("input#state"), country = $country.val(), null != this.params.states[country] ? this._attachSelectField($states, this.params.states[country]) : this._attachTextField($states);
      }
    }, {
      key: "updateCurrencyPositionField",
      value: function updateCurrencyPositionField(event) {
        var $position, currency;return currency = jQuery(event.target).val(), $position = jQuery("input#currency_position"), this._attachSelectField($position, this.params.currency[currency]);
      }
    }, {
      key: "toggleCustomMessage",
      value: function toggleCustomMessage() {
        return jQuery("#custom_message").closest("tr").toggle();
      }
    }, {
      key: "updateFields",
      value: function updateFields() {
        return jQuery("select#country").change();
      }
    }, {
      key: "_attachSelectField",
      value: function _attachSelectField($field, states) {
        return $field.select2({ data: states, multiple: !1 });
      }
    }, {
      key: "_attachTextField",
      value: function _attachTextField($field) {
        return $field.select2("destroy");
      }
    }]);

    return GeneralSettings;
  }();

  return GeneralSettings.prototype.params = { states: {}, currency: {} }, GeneralSettings;
}.call(undefined), jQuery(function () {
  return new GeneralSettings(jigoshop_admin_general);
});