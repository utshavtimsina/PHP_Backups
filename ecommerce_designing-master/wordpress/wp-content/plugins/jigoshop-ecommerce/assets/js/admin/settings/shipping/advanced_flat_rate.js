"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShippingAdvancedFlatRate;ShippingAdvancedFlatRate = function () {
  var ShippingAdvancedFlatRate = function () {
    function ShippingAdvancedFlatRate() {
      var _this = this;

      _classCallCheck(this, ShippingAdvancedFlatRate);

      this.ruleCount = jQuery("#advanced-flat-rate li.list-group-item").length, jQuery("#advanced_flat_rate_available_for").on("change", this.toggleSpecificCountires).trigger("change"), jQuery("#advanced-flat-rate").on("click", ".add-rate", function (event) {
        return _this.addRate(event);
      }).on("click", ".toggle-rate", this.toggleRate).on("click", ".remove-rate", this.removeRate).on("change", ".input-label, .input-cost", this.updateTitle).on("switchChange.bootstrapSwitch", "input.rest-of-the-world", this.toggleLocationFields), jQuery("input.rest-of-the-world").trigger("switchChange"), jQuery("#advanced-flat-rate ul").sortable({ handle: ".handle", axis: "y" });
    }

    _createClass(ShippingAdvancedFlatRate, [{
      key: "toggleLocationFields",
      value: function toggleLocationFields(event) {
        var $container, $fields;return $container = jQuery(event.target).closest(".list-group-item-text"), $fields = jQuery("div.continents, div.countries, div.states, div.postcode", $container), jQuery(event.target).is(":checked") ? $fields.slideUp() : $fields.slideDown();
      }
    }, {
      key: "updateTitle",
      value: function updateTitle(event) {
        var $rule, cost, label;return label = ($rule = jQuery(event.target).parents("li")).find("input.input-label").val(), cost = $rule.find("input.input-cost").val(), $rule.find("span.title").text(label + " - " + cost);
      }
    }, {
      key: "addRate",
      value: function addRate(event) {
        var template;return event.preventDefault(), template = wp.template("advanced-flat-rate"), this.ruleCount++, jQuery(".mfp-content #advanced-flat-rate ul.list-group").append(template({ id: this.ruleCount })), jQuery(".mfp-content #advanced-flat-rate ul.list-group li:last select").select2(), jQuery(".mfp-content").find('input[type="checkbox"]').each(function (index, element) {
          return jQuery(element).bootstrapSwitch({ size: "small", onText: jigoshop_settings.i18n.yes, offText: jigoshop_settings.i18n.no });
        });
      }
    }, {
      key: "toggleSpecificCountires",
      value: function toggleSpecificCountires(event) {
        return "specific" === jQuery(event.target).val() ? jQuery(".mfp-content .advanced_flat_rate_countries_field").slideDown() : jQuery(".mfp-content .advanced_flat_rate_countries_field").slideUp();
      }
    }, {
      key: "toggleRate",
      value: function toggleRate(event) {
        var $item;return $item = jQuery(event.target), jQuery(".list-group-item-text", $item.closest("li")).slideToggle(function () {
          return jQuery("span", $item).toggleClass("glyphicon-collapse-down").toggleClass("glyphicon-collapse-up");
        });
      }
    }, {
      key: "removeRate",
      value: function removeRate(event) {
        var $item;return ($item = jQuery(event.target).closest("li")).slideUp(300, function () {
          return $item.remove();
        });
      }
    }]);

    return ShippingAdvancedFlatRate;
  }();

  return ShippingAdvancedFlatRate.prototype.ruleCount = 0, ShippingAdvancedFlatRate;
}.call(undefined), jQuery(function () {
  return new ShippingAdvancedFlatRate();
});