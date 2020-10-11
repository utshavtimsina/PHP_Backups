"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminProductAttributes;AdminProductAttributes = function () {
  var AdminProductAttributes = function () {
    function AdminProductAttributes(params) {
      _classCallCheck(this, AdminProductAttributes);

      this.addAttribute = this.addAttribute.bind(this), this.updateAttribute = this.updateAttribute.bind(this), this.removeAttribute = this.removeAttribute.bind(this), this.updateAttributeOption = this.updateAttributeOption.bind(this), this.removeAttributeOption = this.removeAttributeOption.bind(this), this.params = params, jQuery("#add-attribute").on("click", this.addAttribute), jQuery("table#product-attributes > tbody").on("click", ".remove-attribute", this.removeAttribute).on("change", ".attribute input, .attribute select", this.updateAttribute).on("sortupdate", ".ui-sortable", this.updateAttribute).on("click", ".configure-attribute, .options button", this.configureAttribute).on("click", ".remove-attribute-option", this.removeAttributeOption).on("click", ".add-option", this.addAttributeOption).on("change", ".options tbody input", this.updateAttributeOption), this.$newLabel = jQuery("#attribute-label"), this.$newSlug = jQuery("#attribute-slug"), this.$newType = jQuery("#attribute-type");
    }

    _createClass(AdminProductAttributes, [{
      key: "addAttribute",
      value: function addAttribute(event) {
        var _this = this;

        var $container;return $container = jQuery("tbody", jQuery(event.target).closest("table")), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product_attributes.save", label: this.$newLabel.val(), slug: this.$newSlug.val(), type: this.$newType.val() } }).done(function (data) {
          return null != data.success && data.success ? (_this.$newLabel.val(""), _this.$newSlug.val(""), _this.$newType.val("0").trigger("change"), jQuery(data.html).appendTo($container)) : jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }, {
      key: "updateAttribute",
      value: function updateAttribute(event, ui) {
        var _this2 = this;

        var $parent, optionsOrder;return $parent = "sortupdate" === event.type ? jQuery(ui.item).parents("table").parents("tr").prevAll("tr.attribute:first") : jQuery(event.target).closest("tr"), optionsOrder = [], $parent.next("tr").find("tbody").find("tr").each(function (index, element) {
          return optionsOrder.push(jQuery(element).data("id"));
        }), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product_attributes.save", id: $parent.data("id"), label: jQuery("input.attribute-label", $parent).val(), slug: jQuery("input.attribute-slug", $parent).val(), type: jQuery("select.attribute-type", $parent).val(), optionsOrder: optionsOrder } }).done(function (data) {
          return null != data.success && data.success ? jigoshop.addMessage("success", _this2.params.i18n.saved, 2e3) : jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }, {
      key: "removeAttribute",
      value: function removeAttribute(event) {
        var _this3 = this;

        var $parent;if (confirm(this.params.i18n.confirm_remove)) return $parent = jQuery(event.target).closest("tr"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product_attributes.remove", id: $parent.data("id") } }).done(function (data) {
          return null != data.success && data.success ? ($parent.remove(), jigoshop.addMessage("success", _this3.params.i18n.removed, 2e3)) : jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }, {
      key: "configureAttribute",
      value: function configureAttribute(event) {
        var $parent;return $parent = jQuery(event.target).closest("tr"), jQuery("tr.options[data-id=" + $parent.data("id") + "]").toggle().find("tbody").sortable();
      }
    }, {
      key: "addAttributeOption",
      value: function addAttributeOption(event) {
        var $container, $label, $parent, $value;return $parent = jQuery(event.target).closest("tr.options"), $container = jQuery("tbody", $parent), $label = jQuery("input.new-option-label", $parent), $value = jQuery("input.new-option-value", $parent), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product_attributes.save_option", attribute_id: $parent.data("id"), label: $label.val(), value: $value.val() } }).done(function (data) {
          return null != data.success && data.success ? ($label.val(""), $value.val(""), jQuery(data.html).appendTo($container)) : jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }, {
      key: "updateAttributeOption",
      value: function updateAttributeOption(event) {
        var _this4 = this;

        var $parent;return $parent = jQuery(event.target).closest("tr"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product_attributes.save_option", id: $parent.data("id"), attribute_id: $parent.closest("tr.options").data("id"), label: jQuery("input.option-label", $parent).val(), value: jQuery("input.option-value", $parent).val() } }).done(function (data) {
          return null != data.success && data.success ? ($parent.replaceWith(data.html), jigoshop.addMessage("success", _this4.params.i18n.saved, 2e3)) : jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }, {
      key: "removeAttributeOption",
      value: function removeAttributeOption(event) {
        var _this5 = this;

        var $parent;if (confirm(this.params.i18n.confirm_remove)) return $parent = jQuery(event.target).closest("tr"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product_attributes.remove_option", id: $parent.data("id"), attribute_id: $parent.closest("tr.options").data("id") } }).done(function (data) {
          return null != data.success && data.success ? ($parent.remove(), jigoshop.addMessage("success", _this5.params.i18n.option_removed, 2e3)) : jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }]);

    return AdminProductAttributes;
  }();

  return AdminProductAttributes.prototype.params = { i18n: { saved: "", removed: "", option_removed: "", confirm_remove: "" } }, AdminProductAttributes;
}.call(undefined), jQuery(function () {
  return new AdminProductAttributes(jigoshop_admin_product_attributes);
});