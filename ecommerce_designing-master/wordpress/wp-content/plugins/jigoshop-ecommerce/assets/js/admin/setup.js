"use strict";

jQuery(document).ready(function ($) {
  return $("#next-step").on("click", function (event) {
    var form, request;return event.preventDefault(), (form = new FormData(document.getElementById("form"))).append("action", "jigoshop.ajax.logged"), form.append("service", "jigoshop.ajax.save_setup_step"), (request = new XMLHttpRequest()).open("POST", jigoshop.getAjaxUrl()), request.onload = function (event) {
      var response;if (4 === request.readyState && 200 === request.status && (response = JSON.parse(request.responseText)) && "undefined" !== response.success && response.success) return window.location = $("#next-step").data("url");
    }, request.send(form);
  }), $("select#country").on("change", function (event) {
    var $country, $states, country;return $country = $(event.target), $states = $("input#state"), country = $country.val(), null != jigoshop_setup.states[country] ? $states.select2({ data: jigoshop_setup.states[country], multiple: !1 }) : $states.select2("destroy");
  }).change(), $("select#currency").on("change", function (event) {
    var currency;return currency = $(event.target).val(), $("input#currency_position").select2({ data: jigoshop_setup.currency[currency], multiple: !1 });
  }).change();
});