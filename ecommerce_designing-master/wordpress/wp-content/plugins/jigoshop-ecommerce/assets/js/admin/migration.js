"use strict";

jQuery(document).ready(function ($) {
  var doSummary, dotCount, maxError, _migrateItems, showUI;return $("#msgLog").val("1"), dotCount = 0, maxError = 3, doSummary = function doSummary(msg, status) {
    return "success" === status ? $(".glyphicon").removeClass("glyphicon-time").addClass("glyphicon-ok") : "danger" === status && $(".glyphicon").removeClass("glyphicon-time").addClass("glyphicon-remove"), $(".migration-id").html("&nbsp;&nbsp; - &nbsp;&nbsp;" + msg), $(".back-to-home").removeClass("invisible"), $("#migration_alert").removeClass("alert-info").addClass("alert-" + status), $("#migration_progress_bar").addClass("progress-bar-" + status);
  }, _migrateItems = function migrateItems(ajaxModule) {
    var msgLog, params;return params = jigoshop_admin_migration, msgLog = $("#msgLog").val(), $.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: ajaxModule, msgLog: msgLog } }).done(function (data) {
      return !0 === data.success ? ($(".migration_processed").html(data.processed), $(".migration_remain").html(data.remain), $(".migration_total").html(data.total), $(".migration-id").html(".".repeat(dotCount)), $("#msgLog").val("2"), ++dotCount > 3 && (dotCount = 0), $(".progress_bar").css("width", data.percent + "%").html(data.percent + "%"), data.remain <= 0 ? (doSummary(params.i18n.migration_complete, "success"), !1) : _migrateItems(ajaxModule)) : !1 === data.success ? maxError <= 0 ? (doSummary(params.i18n.migration_error, "danger"), console.log(data), alert(params.i18n.alert_msg), !1) : (setTimeout(function () {
        return _migrateItems(ajaxModule);
      }, 2e3), maxError--) : void 0;
    }).fail(function (data) {
      return console.log(data.responseText), doSummary(params.i18n.migration_error, "danger"), alert(params.i18n.alert_msg), !1;
    });
  }, showUI = function showUI(ajaxModule) {
    var params;return params = jigoshop_admin_migration, $(".migration").css("display", "none"), $(".migration_progress").css("display", "block"), $(".migration_processed").html("0"), $(".migration_remain").html(params.i18n.processing), $(".migration_total").html(params.i18n.processing), $("#title").html(params.i18n[ajaxModule]);
  }, $(".migration-products").click(function () {
    return showUI("jigoshop.admin.migration.products"), _migrateItems("jigoshop.admin.migration.products");
  }), $(".migration-coupons").click(function () {
    return showUI("jigoshop.admin.migration.coupons"), _migrateItems("jigoshop.admin.migration.coupons");
  }), $(".migration-emails").click(function () {
    return showUI("jigoshop.admin.migration.emails"), _migrateItems("jigoshop.admin.migration.emails");
  }), $(".migration-options").click(function () {
    return showUI("jigoshop.admin.migration.options"), _migrateItems("jigoshop.admin.migration.options");
  }), $(".migration-orders").click(function () {
    return showUI("jigoshop.admin.migration.orders"), _migrateItems("jigoshop.admin.migration.orders");
  });
});