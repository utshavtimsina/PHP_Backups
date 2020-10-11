"use strict";

var hasProp = {}.hasOwnProperty;jQuery(function () {
  return jQuery("#address_country").on("change", function (e) {
    return jQuery.post(jigoshop.getAjaxUrl(), { action: "jigoshop.ajax.logged", service: "jigoshop.ajax.get_states", country: jQuery("#address_country").val() }, function (data) {
      var $parent, label, ref, state;if (data.success) {
        if ($parent = jQuery("#address_state").parents("div").first(), 0 === data.states.length) return jQuery($parent).html('<input type="text" id="address_state" name="address[state]" class="form-control" />');for (state in jQuery($parent).html('<select id="address_state" name="address[state]" class="form-control"></select>'), jQuery("#address_state").select2(), ref = data.states) {
          hasProp.call(ref, state) && (label = ref[state], jQuery("#address_state").append(new Option(label, state, !1, !1)));
        }return jQuery("#address_state").trigger("change");
      }
    }, "json");
  });
});