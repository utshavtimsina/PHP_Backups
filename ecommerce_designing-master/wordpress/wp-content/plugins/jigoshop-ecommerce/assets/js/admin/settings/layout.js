"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayoutSettings;LayoutSettings = function LayoutSettings() {
  _classCallCheck(this, LayoutSettings);

  jQuery(".enable_section").on("switchChange.bootstrapSwitch", function (event) {
    var $table;return $table = jQuery(event.target).closest("h2").next("table"), jQuery(event.target).is(":checked") ? $table.show() : $table.hide();
  }).trigger("switchChange.bootstrapSwitch"), jQuery("select.proportions").on("change", function (event) {
    return "custom" === jQuery(event.target).val() ? jQuery(event.target).closest("tr").next().show() : jQuery(event.target).closest("tr").next().hide();
  }).trigger("change"), jQuery("input.structure").on("change", function (event) {
    return "only_content" === jQuery(event.target).val() ? jQuery(event.target).closest("tr").next().hide().next().hide().next().hide() : (jQuery(event.target).closest("tr").next().show().next().show(), jQuery(".proportions").change());
  }), jQuery("input.structure:checked").change();
}, jQuery(function () {
  return new LayoutSettings();
});