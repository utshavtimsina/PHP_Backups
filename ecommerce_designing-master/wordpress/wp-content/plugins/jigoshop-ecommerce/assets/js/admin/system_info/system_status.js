"use strict";

jQuery(function ($) {
  return $("#generate-report").on("click", function () {
    var report;return report = [], $.each(system_data, function (index, value) {
      return report.push(value);
    }), $("#report-for-support").html(report.join("\n")), $("#report-for-support").slideDown(1e3), $("#report-for-support").removeClass("hidden"), $(this).slideUp(1e3);
  });
});