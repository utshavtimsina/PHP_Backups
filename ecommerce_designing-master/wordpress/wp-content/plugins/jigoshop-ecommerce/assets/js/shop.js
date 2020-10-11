"use strict";

jQuery(function ($) {
  return jigoshop.delay(8e3, function () {
    return $(".alert-danger").not(".no-remove").slideUp(function () {
      return $(this).remove();
    });
  }), jigoshop.delay(4e3, function () {
    return $(".alert-success").not(".no-remove").slideUp(function () {
      return $(this).remove();
    });
  });
});