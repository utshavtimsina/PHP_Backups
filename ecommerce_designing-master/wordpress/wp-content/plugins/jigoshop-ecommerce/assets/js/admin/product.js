"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminProduct,
    hasProp = {}.hasOwnProperty,
    indexOf = [].indexOf;AdminProduct = function () {
  var AdminProduct = function () {
    function AdminProduct(params) {
      _classCallCheck(this, AdminProduct);

      this.changeProductType = this.changeProductType.bind(this), this.addAttribute = this.addAttribute.bind(this), this.updateAttribute = this.updateAttribute.bind(this), this.removeAttribute = this.removeAttribute.bind(this), this.updateAttachments = this.updateAttachments.bind(this), this.initAttachments = this.initAttachments.bind(this), this.addAttachment = this.addAttachment.bind(this), this.getInherittedAttributes = this.getInherittedAttributes.bind(this), this.processInheritedAttributes = this.processInheritedAttributes.bind(this), this.params = params, jQuery("#add-attribute").on("click", this.addAttribute), jQuery("#new-attribute").on("change", function (event) {
        var $label;return $label = jQuery("#new-attribute-label"), "-1" === jQuery(event.target).val() ? ($label.closest(".form-group").css("display", "inline-block"), $label.fadeIn()) : $label.fadeOut();
      }), jQuery("#product-attributes").on("click", ".show-variation", function (event) {
        var $item;return $item = jQuery(event.target), jQuery(".list-group-item-text", $item.closest("li")).slideToggle(function () {
          return jQuery("span", $item).toggleClass("glyphicon-collapse-down").toggleClass("glyphicon-collapse-up");
        });
      }), jQuery("#product-attributes").on("change", "input, select", this.updateAttribute).on("click", ".remove-attribute", this.removeAttribute).sortable({ axis: "y" }), jQuery("#product-type").on("change", this.changeProductType), jQuery(".jigoshop_product_data a").on("click", function (e) {
        return e.preventDefault(), jQuery(this).tab("show");
      }), jQuery("#stock-manage").on("change", function () {
        return jQuery(this).is(":checked") ? (jQuery(".stock-status_field").slideUp(), jQuery(".stock-status").slideDown()) : (jQuery(".stock-status_field").slideDown(), jQuery(".stock-status").slideUp());
      }), jQuery(".stock-status_field .not-active").show(), jQuery("#sales-enabled").on("change", function () {
        return jQuery(this).is(":checked") ? jQuery(".schedule").slideDown() : jQuery(".schedule").slideUp();
      }), jQuery("#is_taxable").on("change", function () {
        return jQuery(this).is(":checked") ? jQuery(".tax_classes_field").slideDown() : jQuery(".tax_classes_field").slideUp();
      }), jQuery(".tax_classes_field .not-active").show(), jQuery("#sales-from").datepicker({ todayBtn: "linked", autoclose: !0 }), jQuery("#sales-to").datepicker({ todayBtn: "linked", autoclose: !0 }), jQuery(".add-product-attachments").on("click", this.updateAttachments), jQuery(document).ready(this.initAttachments), jigoshop.ajaxSearch(jQuery("#product_cross_sells"), { action: "jigoshop.admin.product.find", only_parent: !0 }), jigoshop.ajaxSearch(jQuery("#product_up_sells"), { action: "jigoshop.admin.product.find", only_parent: !0 }), jQuery("#add-inherited-attributes").click(this.getInherittedAttributes);
    }

    _createClass(AdminProduct, [{
      key: "changeProductType",
      value: function changeProductType(event) {
        var _this = this;

        var $item, additionalTabs, ref, tab, type, visibility;for (tab in type = ($item = jQuery(event.target)).val(), jQuery(".jigoshop_product_data li").hide(), additionalTabs = [], ref = this.params.menu) {
          hasProp.call(ref, tab) && (!0 === (visibility = ref[tab]) || indexOf.call(visibility, type) >= 0) && (jQuery(".jigoshop_product_data li." + tab).show(), jQuery(".tab-pane#" + tab).length || additionalTabs.push(tab));
        }return jQuery(".jigoshop_product_data li:first a").tab("show"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product.update_type", product_id: $item.closest(".jigoshop").data("id"), type: type, additionalTabs: additionalTabs } }).done(function (data) {
          var ref1, results1, tabName;if (null != data.success && data.success) {
            for (tabName in jigoshop.addMessage("success", _this.params.i18n.saved, 2e3), results1 = [], ref1 = data.additionalTabs) {
              tab = ref1[tabName], results1.push(jQuery(".jigoshop_product_data").siblings(".tab-content").append('<div class="tab-pane" id="' + tabName + '">' + tab + "</div>"));
            }return results1;
          }return jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }, {
      key: "addAttribute",
      value: function addAttribute(event) {
        var $attribute, $label, $parent, label, value;if (event.preventDefault(), $parent = jQuery("#product-attributes"), $attribute = jQuery("#new-attribute"), $label = jQuery("#new-attribute-label"), value = parseInt($attribute.val()), label = $label.val(), value < 0 && -1 !== value) jigoshop.addMessage("warning", this.params.i18n.invalid_attribute);else {
          if (-1 !== value || 0 !== label.length) return $attribute.select2("val", ""), $label.val("").slideUp(), value > 0 && jQuery("option[value=" + value + "]", $attribute).attr("disabled", "disabled"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product.save_attribute", product_id: $parent.closest(".jigoshop").data("id"), attribute_id: value, attribute_label: label } }).done(function (data) {
            return null != data.success && data.success ? (jQuery(data.html).hide().appendTo($parent).slideDown(), $parent.trigger("add-attribute")) : jigoshop.addMessage("danger", data.error, 6e3);
          });jigoshop.addMessage("danger", this.params.i18n.attribute_without_label, 6e3);
        }
      }
    }, {
      key: "updateAttribute",
      value: function updateAttribute(event) {
        var _this2 = this;

        var $container, $parent, getOptionValue, i, item, items, len, option, options, optionsData;for ($container = jQuery("#product-attributes"), $parent = jQuery(event.target).closest("li.list-group-item"), (items = jQuery(".values input[type=checkbox]:checked", $parent).toArray()).length ? item = items.reduce(function (value, current) {
          return current.value + "|" + value;
        }, "") : void 0 === (item = jQuery(".values select", $parent).val()) && (item = jQuery(".values input", $parent).val()), getOptionValue = function getOptionValue(current) {
          return "checkbox" === current.type || "radio" === current.type ? current.checked : current.value;
        }, options = {}, i = 0, len = (optionsData = jQuery(".options input.attribute-options", $parent).toArray()).length; i < len; i++) {
          option = optionsData[i], options[/(?:^|\s)product\[attributes]\[\d+]\[(.*?)](?:\s|$)/g.exec(option.name)[1]] = getOptionValue(option);
        }return jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product.save_attribute", product_id: $container.closest(".jigoshop").data("id"), attribute_id: $parent.data("id"), value: item, options: options } }).done(function (data) {
          return null != data.success && data.success ? jigoshop.addMessage("success", _this2.params.i18n.saved, 2e3) : jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }, {
      key: "removeAttribute",
      value: function removeAttribute(event) {
        var _this3 = this;

        var $parent;if (event.preventDefault(), confirm(this.params.i18n.confirm_remove)) return $parent = jQuery(event.target).closest("li"), this.removedAttributes.push($parent.data("id")), jQuery("option[value=" + $parent.data("id") + "]", jQuery("#new-attribute")).removeAttr("disabled"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product.remove_attribute", product_id: $parent.closest(".jigoshop").data("id"), attribute_id: $parent.data("id") } }).done(function (data) {
          return null != data.success && data.success ? ($parent.slideUp(function () {
            return $parent.remove();
          }), jigoshop.addMessage("success", _this3.params.i18n.attribute_removed, 2e3)) : jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }, {
      key: "updateAttachments",
      value: function updateAttachments(event) {
        var _this4 = this;

        var element, wpMedia;if (event.preventDefault(), element = jQuery(event.target).data("type"), !wpMedia) return this.wpMedia = wp.media({ states: [new wp.media.controller.Library({ filterable: "all", multiple: !0 })] }), wpMedia = this.wpMedia, this.wpMedia.on("select", function () {
          var attachmentIds, selection;return selection = wpMedia.state().get("selection"), attachmentIds = jQuery.map(jQuery('input[name="product[attachments][' + element + '][]"]'), function (attachment) {
            return parseInt(jQuery(attachment).val());
          }), selection.map(function (attachment) {
            var options;if (null != (attachment = attachment.toJSON()).id) return "image" === element ? options = { template_name: "product-gallery", insert_before: ".empty-gallery", attachment_class: ".gallery-image" } : "datafile" === element && (options = { template_name: "product-downloads", insert_before: ".empty-downloads", attachment_class: ".downloads-file" }), _this4.addAttachment(attachment, attachmentIds, options);
          });
        }), wpMedia.open();this.wpMedia.open();
      }
    }, {
      key: "initAttachments",
      value: function initAttachments() {
        var attachment, i, len, ref, results1, template;for (results1 = [], i = 0, len = (ref = this.params.attachments).length; i < len; i++) {
          "image" === (attachment = ref[i]).type ? (template = wp.template("product-gallery"), jQuery(".empty-gallery").before(template(attachment)), results1.push(this.addHooks("", jQuery(".gallery-image").last()))) : "datafile" === attachment.type ? (template = wp.template("product-downloads"), jQuery(".empty-downloads").before(template(attachment)), results1.push(this.addHooks("", jQuery(".downloads-file").last()))) : results1.push(void 0);
        }return results1;
      }
    }, {
      key: "addHooks",
      value: function addHooks(index, element) {
        var $delete;return $delete = jQuery(element).find(".delete"), jQuery(element).hover(function () {
          return $delete.show();
        }, function () {
          return $delete.hide();
        }), $delete.click(function () {
          return jQuery(element).remove();
        });
      }
    }, {
      key: "addAttachment",
      value: function addAttachment(attachment, attachmentIds, options) {
        var html;if (attachment.id && -1 === jQuery.inArray(attachment.id, attachmentIds)) return html = wp.template(options.template_name)({ id: attachment.id, url: attachment.sizes && attachment.sizes.thumbnail ? attachment.sizes.thumbnail.url : attachment.url, title: attachment.title }), jQuery(options.insert_before).before(html), this.addHooks("", jQuery(options.attachment_class).last());
      }
    }, {
      key: "getInherittedAttributes",
      value: function getInherittedAttributes(event) {
        var categories;return categories = [], jQuery("#product_categorychecklist").find('input[type="checkbox"]').each(function (index, element) {
          jQuery(element).is(":checked") && categories.push(jQuery(element).val());
        }), jQuery.post(ajaxurl, { action: "jigoshop.admin.product.get_inherited_attributes", categories: categories, productId: jQuery("#product-attributes").closest(".jigoshop").data("id") }, this.processInheritedAttributes, "json");
      }
    }, {
      key: "processInheritedAttributes",
      value: function processInheritedAttributes(data) {
        var attributeExists, attributeRemoved, ca, cra, i, j, ref, ref1, results1;if (data.success) {
          for (results1 = [], ca = i = 0, ref = data.attributes.length; 0 <= ref ? i < ref : i > ref; ca = 0 <= ref ? ++i : --i) {
            for (attributeRemoved = 0, attributeExists = 0, cra = j = 0, ref1 = this.removedAttributes.length; 0 <= ref1 ? j < ref1 : j > ref1; cra = 0 <= ref1 ? ++j : --j) {
              if (this.removedAttributes[cra] === data.attributes[ca].id) {
                attributeRemoved = 1;break;
              }
            }attributeRemoved || (jQuery("#product-attributes").find("li").each(function (index, element) {
              jQuery(element).data("id") === data.attributes[ca].id && (attributeExists = 1);
            }), attributeExists || results1.push(jQuery("#product-attributes").append(data.attributes[ca].render)));
          }return results1;
        }
      }
    }]);

    return AdminProduct;
  }();

  return AdminProduct.prototype.params = { i18n: { saved: "", confirm_remove: "", attribute_removed: "", invalid_attribute: "", attribute_without_label: "" }, menu: {}, attachments: {} }, AdminProduct.prototype.wpMedia = !1, AdminProduct.prototype.removedAttributes = [], AdminProduct;
}.call(undefined), jQuery(function () {
  return new AdminProduct(jigoshop_admin_product);
});