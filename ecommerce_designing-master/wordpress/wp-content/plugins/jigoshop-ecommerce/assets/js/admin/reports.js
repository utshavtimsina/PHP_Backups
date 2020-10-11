"use strict";

jQuery(function ($) {
  var all_widgets;$("li[data-toggle=tooltip]").tooltip(), $(".input-daterange").datepicker({ autoclose: !0, todayHighlight: !0, container: "#datepicker", orientation: "top left", todayBtn: "linked" }), all_widgets = $(".chart-widget").click(function () {
    return $(this).find(".content").slideDown(500), all_widgets.not(this).find(".content").slideUp(500);
  });
});