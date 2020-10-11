"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaxSettings;TaxSettings = function () {
  var TaxSettings = function () {
    function TaxSettings(params) {
      _classCallCheck(this, TaxSettings);

      this.addNewClass = this.addNewClass.bind(this), this.addNewRule = this.addNewRule.bind(this), this.updateStateField = this.updateStateField.bind(this), this.updateDefaultStateField = this.updateDefaultStateField.bind(this), this.params = params, jQuery("#add-tax-class").on("click", this.addNewClass), jQuery("#tax-classes").on("click", "button.remove-tax-class", this.removeItem), jQuery("#add-tax-rule").on("click", this.addNewRule), jQuery("#tax-rules").on("click", "button.remove-tax-rule", this.removeItem).on("change", "select.tax-rule-country", this.updateStateField), jQuery("select#default_country").on("change", this.updateDefaultStateField), this.updateFields();
    }

    _createClass(TaxSettings, [{
      key: "removeItem",
      value: function removeItem() {
        return jQuery(this).closest("tr").remove(), !1;
      }
    }, {
      key: "addNewClass",
      value: function addNewClass() {
        return jQuery("#tax-classes").append(this.params.new_class), !1;
      }
    }, {
      key: "addNewRule",
      value: function addNewRule() {
        var $item;return $item = jQuery(this.params.new_rule), jQuery("input.tax-rule-postcodes", $item).select2({ tags: [], tokenSeparators: [","], multiple: !0, formatNoMatches: "" }), jQuery("#tax-rules").append($item), !1;
      }
    }, {
      key: "updateStateField",
      value: function updateStateField(event) {
        var $parent, $states, country;return $parent = jQuery(event.target).closest("tr"), $states = jQuery("input.tax-rule-states", $parent), country = jQuery("select.tax-rule-country", $parent).val(), null != this.params.states[country] ? this._attachSelectField($states, this.params.states[country]) : this._attachTextField($states);
      }
    }, {
      key: "updateDefaultStateField",
      value: function updateDefaultStateField(event) {
        var $states, country;return $states = jQuery("select#default_state"), country = jQuery("slelect#default_country").val(), null != this.params.states[country] ? this._attachSelectField($states, this.params.states[country]) : this._attachTextField($states);
      }
    }, {
      key: "updateFields",
      value: function updateFields() {
        return jQuery("select.tax-rule-country").change(), jQuery("input.tax-rule-postcodes").select2({ tags: [], tokenSeparators: [","], multiple: !0, formatNoMatches: "" });
      }
    }, {
      key: "_attachSelectField",
      value: function _attachSelectField($field, states) {
        return $field.select2({ data: states, multiple: !0, initSelection: function initSelection(element, callback) {
            var data, i, len, ref, state, text, value;for (data = [], i = 0, len = (ref = element.val().split(",")).length; i < len; i++) {
              value = ref[i], text = function () {
                var j, len1, results;for (results = [], j = 0, len1 = states.length; j < len1; j++) {
                  (state = states[j]).id === value && results.push(state);
                }return results;
              }(), data.push(text[0]);
            }return callback(data);
          } });
      }
    }, {
      key: "_attachTextField",
      value: function _attachTextField($field) {
        return $field.select2("destroy");
      }
    }]);

    return TaxSettings;
  }();

  return TaxSettings.prototype.params = { new_class: "", new_rule: "" }, TaxSettings;
}.call(undefined), jQuery(function () {
  return new TaxSettings(jigoshop_admin_taxes);
});