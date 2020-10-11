"use strict";

jQuery(function ($) {
  return $("span[data-toggle=tooltip]").tooltip(), $(".not-active").closest("tr").hide(), jigoshop.delay(3e3, function () {
    return $(".settings-error.updated").slideUp(function () {
      return $(this).remove();
    });
  }), jigoshop.delay(3e3, function () {
    return $(".alert-success").not(".no-remove").slideUp(function () {
      return $(this).remove();
    });
  }), jigoshop.delay(4e3, function () {
    return $(".alert-warning").not(".no-remove").slideUp(function () {
      return $(this).remove();
    });
  }), jigoshop.delay(8e3, function () {
    return $(".alert-error").not(".no-remove").slideUp(function () {
      return $(this).remove();
    });
  }), jigoshop.delay(8e3, function () {
    return $(".alert-danger").not(".no-remove").slideUp(function () {
      return $(this).remove();
    });
  }), $(".notice .disable-notice").on("click", function (event) {
    return $.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", cache: !0, data: { action: "jigoshop.ajax.logged", service: "jigoshop.ajax.disable_notice", notice: $(event.target).data("notice") } }).done(function (data) {
      if (null != data.success && data.success) return $(event.target).closest(".notice").fadeOut(1e3);
    });
  });
});