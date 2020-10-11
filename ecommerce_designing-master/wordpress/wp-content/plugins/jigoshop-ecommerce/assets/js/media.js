"use strict";

jQuery(function () {
  return jQuery.fn.jigoshop_media = function (options) {
    var frame, settings;if (frame = !1, settings = jQuery.extend({ field: jQuery("#media-library-file"), thumbnail: !1, callback: !1, library: {}, bind: !0 }, options), jQuery(this).on("jigoshop_media", function (e) {
      var $el;if (e.preventDefault(), $el = jQuery(e.target), !frame) return (frame = wp.media({ title: $el.data("title"), library: settings.library, button: { text: $el.data("button") } })).on("select", function () {
        var attachment;if (attachment = frame.state().get("selection").first(), settings.field && settings.field.val(attachment.id), settings.thumbnail && settings.thumbnail.attr("src", attachment.changed.url).attr("width", attachment.changed.width).attr("height", attachment.changed.height), "function" == typeof settings.callback) return settings.callback(attachment);
      }), frame.open();frame.open();
    }), settings.bind) return jQuery(this).on("click", function (event) {
      return event.preventDefault(), jQuery(event.target).trigger("jigoshop_media");
    });
  };
});