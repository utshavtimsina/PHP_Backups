"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminProductTags;AdminProductTags = function () {
  var AdminProductTags = function AdminProductTags(params) {
    var _this = this;

    _classCallCheck(this, AdminProductTags);

    var $field, $thumbnail;this.params = params, $field = jQuery("#" + this.params.tag_name + "_thumbnail_id"), $thumbnail = jQuery("#" + this.params.tag_name + "_thumbnail > img"), jQuery("#add-image").jigoshop_media({ field: $field, thumbnail: $thumbnail, callback: function callback() {
        if ("" !== $field.val()) return jQuery("#remove-image").show();
      }, library: { type: "image" } }), jQuery("#remove-image").on("click", function (e) {
      return e.preventDefault(), $field.val(""), $thumbnail.attr("src", _this.params.placeholder), jQuery(e.target).hide();
    });
  };

  return AdminProductTags.prototype.params = { tag_name: "product_tag", placeholder: "" }, AdminProductTags;
}.call(undefined), jQuery(function () {
  return new AdminProductTags(jigoshop_admin_product_tags);
});