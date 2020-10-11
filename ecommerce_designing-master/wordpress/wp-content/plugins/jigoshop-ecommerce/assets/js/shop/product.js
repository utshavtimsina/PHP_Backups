"use strict";

jQuery(function ($) {
  return $("ul.tabs a").on("click", function (e) {
    return e.preventDefault(), $(this).tab("show");
  }), $(".comment-form-rating").on("click", "a", function (event) {
    var $item;return event.preventDefault(), $item = $(event.target).parent(), $("#rating").val($item.data("rating")).trigger("change"), $item.prevAll("a").find("span").removeClass("glyphicon-star-empty").addClass("glyphicon-star"), $item.find("span").removeClass("glyphicon-star-empty").addClass("glyphicon-star"), $item.nextAll("a").find("span").removeClass("glyphicon-star").addClass("glyphicon-star-empty");
  });
});