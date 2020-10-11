"use strict";

var AdminProductCategories;AdminProductCategories = void 0, (AdminProductCategories = function AdminProductCategories(params) {
  var self;self = this, this.bindCategoriesControls(), jQuery(".jigoshop-product-categories-edit-form").submit(function (e) {
    var fields, visibleCategories;fields = void 0, visibleCategories = [], e.preventDefault(), jQuery(".jigoshop-product-categories-edit-form").find("button").attr("disabled", "disabled"), (fields = {}).attachments = [], jQuery(".jigoshop-product-categories-edit-form").find("input,select,textarea").each(function (index, element) {
      if (jQuery(element).attr("name")) {
        if ("checkbox" !== jQuery(element).attr("type")) return "attachments[]" === jQuery(element).attr("name") ? fields.attachments.push(jQuery(element).val()) : fields[jQuery(element).attr("name")] = jQuery(element).val();fields[jQuery(element).attr("name")] = jQuery(element).is(":checked");
      }
    }), fields.action = "jigoshop_product_categories_updateCategory", jQuery("#wp-description-wrap").hasClass("tmce-active") ? fields.description = tinymce.activeEditor.getContent() : fields.description = jQuery("#description").val(), jQuery("#jigoshop-product-categories").find("tbody").find("tr").each(function (index, element) {
      if ("none" !== jQuery(element).css("display")) return visibleCategories.push(jQuery(element).data("category-id"));
    }), fields.visibleCategories = visibleCategories, jQuery.post(ajaxurl, fields, function (data) {
      return jQuery("html,body").animate({ scrollTop: jQuery(".jigoshop-product-categories-edit-form").offset().top - 30 }), 1 === data.status ? (jigoshop.addMessage("success", data.info, 3e3), jQuery("#id").val(data.id), jQuery("#jigoshop-product-categories tbody").html(data.categoriesTable), self.bindCategoriesControls()) : jigoshop.addMessage("danger", data.error, 3e3), jQuery(".jigoshop-product-categories-edit-form").find("button").removeAttr("disabled");
    }, "json");
  }), jigoshop_admin_product_categories_data.forceEdit && self.editCategory(jigoshop_admin_product_categories_data.forceEdit);
}).prototype.params = { category_name: "product_category", placeholder: "" }, AdminProductCategories.prototype.bindCategoriesControls = function () {
  var self;return self = this, jQuery(".jigoshop-product-categories-expand-subcategories").click(this.expandCategory), jQuery("#jigoshop-product-categories-add-button").click(function (e) {
    e.preventDefault(), self.resetForm(), self.showForm();
  }), jQuery(".jigoshop-product-categories-edit-button").click(function (e) {
    var categoryId;if (e.preventDefault(), categoryId = jQuery(e.delegateTarget).parents("tr").data("category-id")) return self.editCategory(categoryId);
  }), jQuery(".jigoshop-product-categories-remove-button").click(function (e) {
    var categoryId;if (categoryId = void 0, e.preventDefault(), confirm(jigoshop_admin_product_categories_data.lang.categoryRemovalConfirmation)) return categoryId = jQuery(e.delegateTarget).parents("tr").data("category-id"), jQuery.post(ajaxurl, { action: "jigoshop_product_categories_removeCategory", categoryId: categoryId }, function (data) {
      1 === data.status && (location.href = document.URL);
    }, "json");
  });
}, AdminProductCategories.prototype.expandCategory = function (e, triggered) {
  var $row, categoryId;return e.preventDefault(), $row = jQuery(e.delegateTarget).parents("tr"), categoryId = $row.data("category-id"), $row.data("expanded") || triggered ? ($row.data("expanded", 0), $row.nextAll("tr").each(function (index, element) {
    if (jQuery(element).data("parent-category-id") === categoryId && (jQuery(element).hide(), jQuery(element).data("expanded"))) return jQuery(element).find(".jigoshop-product-categories-expand-subcategories").trigger("click", [1]);
  })) : ($row.data("expanded", 1), $row.nextAll("tr").each(function (index, element) {
    if (jQuery(element).data("parent-category-id") === categoryId) return jQuery(element).show();
  }));
}, AdminProductCategories.prototype.editCategory = function (categoryId) {
  var self;return (self = this).select2 = jQuery.fn.select2, self.jigoshop_media = jQuery.fn.jigoshop_media, self.bootstrapSwitch = jQuery.fn.bootstrapSwitch, self.magnificPopup = jQuery.magnificPopup, jQuery.post(ajaxurl, { action: "jigoshop_product_categories_getEditForm", categoryId: categoryId }, function (data) {
    1 === data.status && (jQuery("#jigoshop-product-categories-edit-form-link").attr("href", data.categoryLink).show(), jQuery("#jigoshop-product-categories-edit-form-content").replaceWith(data.form), self.showForm());
  }, "json");
}, AdminProductCategories.prototype.resetForm = function () {
  return jQuery(".jigoshop-product-categories-edit-form").find("input,select,textarea").each(function (index, element) {
    if (0 === jQuery(element).closest(".description_field").length) return jQuery(element).val("");
  }), jQuery("#jigoshop-product-categories-edit-form-link").hide(), null !== tinymce.activeEditor && tinymce.activeEditor.setContent(""), jQuery("#description").val("");
}, AdminProductCategories.prototype.showForm = function () {
  this.bindGeneralControls(), this.attributesInheritEnabledChange(), this.attributesGetAttributes(), tinymce.init(tinyMCEPreInit.mceInit.description), tinyMCE.execCommand("mceAddEditor", !1, "description"), quicktags({ id: "description" }), "block" !== jQuery(".jigoshop-product-categories-edit-form").css("display") && jQuery(".jigoshop-product-categories-edit-form").slideToggle(), jQuery("html,body").animate({ scrollTop: jQuery(".jigoshop-product-categories-edit-form").offset().top - 30 }), jQuery(".jigoshop-product-categories-edit-form").find("button").removeAttr("disabled");
}, AdminProductCategories.prototype.bindGeneralControls = function () {
  var self;self = this, void 0 === jQuery.fn.bootstrapSwitch && (jQuery.fn.bootstrapSwitch = self.bootstrapSwitch), void 0 === jQuery.fn.jigoshop_media && (jQuery.fn.jigoshop_media = self.jigoshop_media), void 0 === jQuery.fn.select2 && (jQuery.fn.select2 = self.select2), void 0 === jQuery.magnificPopup && (jQuery.magnificPopup = self.magnificPopup), jQuery(".jigoshop-product-categories-edit-form").find('input[type="checkbox"]').each(function (index, element) {
    jQuery(element).bootstrapSwitch({ size: "small", onText: jigoshop_categories.i18n.yes, offText: jigoshop_categories.i18n.no });
  }), jQuery("#parentId, #attributesInheritMode, #attributesNewSelector").select2, jQuery("#parentId").on("change", self.attributesGetAttributes), jQuery("#jigoshop-product-categories-thumbnail-add-button").jigoshop_media({ field: jQuery("#thumbnailId"), thumbnail: jQuery("#jigoshop-product-categories-thumbnail").find("img"), callback: function callback() {
      if ("" !== jQuery("#thumbnailId").val()) return jQuery("#jigoshop-product-categories-thumbnail-remove-button").css("display", "inline-block");
    }, library: { type: "image" } }), jQuery("#jigoshop-product-categories-thumbnail-remove-button").click(function (e) {
    e.preventDefault(), jQuery("#thumbnailId").val(""), jQuery("#jigoshop-product-categories-thumbnail img").attr("src", jigoshop_admin_product_categories_data.thumbnailPlaceholder), jQuery("#jigoshop-product-categories-thumbnail-remove-button").hide();
  }), "" !== jQuery("#thumbnailId").val() && jQuery("#jigoshop-product-categories-thumbnail-remove-button").css("display", "inline-block"), jQuery("#jigoshop-product-categories-edit-form-close").click(function (e) {
    return e.preventDefault(), jQuery(".jigoshop-product-categories-edit-form").slideToggle();
  }), jQuery("#attributesInheritEnabled").on("switchChange.bootstrapSwitch", function (event, state) {
    self.attributesInheritEnabledChange(1), self.attributesGetAttributes();
  }), jQuery("#attributesInheritMode").on("change", function (e) {
    self.attributesGetAttributes();
  }), jQuery("#parentId, #attributesInheritMode, #attributesNewSelector").select2(), jQuery("#jigoshop-product-categories-attributes-add-button").click(function (e) {
    var addedAttributes;e.preventDefault(), null !== (addedAttributes = jQuery("#attributesNewSelector").val()) && 0 !== addedAttributes.length && (self.attributesGetAttributes(addedAttributes), jQuery("#attributesNewSelector").select2("val", ""));
  }), jQuery("#jigoshop-product-categories-attributes-add-new-button").click(self.attributesAddNewForm.bind(this)), jQuery("#parentId, #attributesInheritMode, #attributesNewSelector").select2();
}, AdminProductCategories.prototype.attributesInheritEnabledChange = function (animate) {
  jQuery("#attributesInheritEnabled").is(":checked") ? animate ? jQuery("#jigoshop-product-categories-attributes-inherit-mode").slideToggle() : jQuery("#jigoshop-product-categories-attributes-inherit-mode").show() : jQuery("#jigoshop-product-categories-attributes-inherit-mode").hide();
}, AdminProductCategories.prototype.attributesGetAttributes = function (addedAttributes, removedAttributeId) {
  var attributesStates, existingAttributes, self;self = this, existingAttributes = [], jQuery("#jigoshop-product-categories-attributes").find("tbody").find("tr").each(function (index, element) {
    jQuery(element).data("attribute-inherited") || existingAttributes.push(jQuery(element).data("attribute-id"));
  }), Array.isArray(addedAttributes) || (addedAttributes = []), attributesStates = {}, jQuery("#jigoshop-product-categories-attributes").find('input[type="checkbox"]').each(function (index, element) {
    return attributesStates[jQuery(element).parents("tr").data("attribute-id")] = { state: jQuery(element).is(":checked") };
  }), jQuery.post(ajaxurl, { action: "jigoshop_product_categories_getAttributes", id: jQuery("#id").val(), parentId: jQuery("#parentId").val(), inheritEnabled: jQuery("#attributesInheritEnabled").is(":checked"), inheritMode: jQuery("#attributesInheritMode").val(), existingAttributes: existingAttributes, addedAttributes: addedAttributes, removedAttributeId: removedAttributeId, attributesStates: attributesStates }, function (data) {
    1 === data.status && (jQuery("#jigoshop-product-categories-attributes").find("tbody").html(data.attributes), jQuery("#jigoshop-product-categories-attributes").find('input[type="checkbox"]').each(function (index, element) {
      jQuery(element).bootstrapSwitch({ size: "small", onText: jigoshop_categories.i18n.yes, offText: jigoshop_categories.i18n.no });
    }), jQuery(".attributeRemoveButton").click(function (e) {
      e.preventDefault(), removedAttributeId = jQuery(e.delegateTarget).parents("tr").data("attribute-id"), jQuery(e.delegateTarget).parents("tr").remove(), self.attributesGetAttributes([], removedAttributeId);
    }), jQuery("#attributesNewSelector").html(""), jQuery.each(data.attributesPossibleToAdd, function (key, value) {
      jQuery("#attributesNewSelector").append(new Option(value, key));
    }), jQuery("#jigoshop-product-categories-attributes tbody").sortable({ axis: "y" }));
  }, "json");
}, AdminProductCategories.prototype.attributesAddNewForm = function (e) {
  var self;self = this, e.preventDefault(), jQuery.magnificPopup.open({ mainClass: "jigoshop", closeOnContentClick: !1, closeOnBgClick: !1, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !0, items: { src: jQuery("#jigoshop-product-categories-attributes-add-new-container") }, type: "inline", callbacks: { open: function open() {
        jQuery("#jigoshop-product-categories-attributes-add-new-form").find("input,textarea,select").each(function (index, element) {
          return jQuery(element).val("");
        }), jQuery("#jigoshop-product-categories-attributes-add-new-button").removeAttr("disabled"), jQuery("#jigoshop-product-categories-attributes-add-new-close-button").off("click").click(function (e) {
          return e.preventDefault(), jQuery.magnificPopup.close();
        }), jQuery("#jigoshop-product-categories-attributes-add-new-type").off("change").on("change", self.attributesAddNewTypeChanged).trigger("change"), jQuery("#jigoshop-product-categories-attributes-add-new-configure-button").off("click").click(self.attributesAddNewConfigure), jQuery("#jigoshop-product-categories-attributes-add-new-configure-container").find(".attribute-option-add-button").off("click").click(self.attributesAddOption.bind(self)), jQuery("#jigoshop-product-categories-attributes-add-new-configure-container").find(".attribute-option-remove-button").hide(), jQuery("#jigoshop-product-categories-attributes-add-new-form").off("submit").submit(self.attributesAddNewSave.bind(self)), jQuery("#jigoshop-product-categories-attributes-add-new-container").css("display", "block");
      } } });
}, AdminProductCategories.prototype.attributesAddNewTypeChanged = function () {
  var display;display = void 0, display = 2 === parseInt(jQuery("#jigoshop-product-categories-attributes-add-new-type").val()) ? "none" : "block", jQuery("#jigoshop-product-categories-attributes-add-new-configure-button").css("display", display), "block" === jQuery("#jigoshop-product-categories-attributes-add-new-configure-container").css("display") && "none" === display && jQuery("#jigoshop-product-categories-attributes-add-new-configure-container").css("display", "block");
}, AdminProductCategories.prototype.attributesAddNewConfigure = function (e) {
  e.preventDefault(), jQuery("#jigoshop-product-categories-attributes-add-new-configure-container").show();
}, AdminProductCategories.prototype.attributesAddOption = function (e) {
  var option, prototype;prototype = void 0, e.preventDefault(), "" !== (prototype = jQuery("#jigoshop-product-categories-attributes-add-new-configure-container").find("#attribute-option-prototype")).find("#option-label").val() && "" !== prototype.find("#option-value").val() && ((option = prototype.clone()).removeAttr("id"), option.find(".attribute-option-add-button").remove(), option.find(".attribute-option-remove-button").show(), option.find(".attribute-option-remove-button").click(this.attributesRemoveOption.bind(this)), jQuery("#jigoshop-product-categories-attributes-add-new-configure-container").prepend(option), prototype.find("#option-label").val(""), prototype.find("#option-value").val(""));
}, AdminProductCategories.prototype.attributesRemoveOption = function (e) {
  e.preventDefault(), jQuery(e.delegateTarget).parents("tr").remove();
}, AdminProductCategories.prototype.attributesAddNewSave = function (e) {
  var label, options, self, slug, type;options = void 0, self = this, e.preventDefault(), jQuery("#jigoshop-product-categories-attributes-add-new-form"), label = jQuery("#jigoshop-product-categories-attributes-add-new-label").val(), slug = jQuery("#jigoshop-product-categories-attributes-add-new-slug").val(), type = jQuery("#jigoshop-product-categories-attributes-add-new-type").val(), options = [], jQuery("#jigoshop-product-categories-attributes-add-new-configure-container").find("tr").each(function (index, element) {
    var option;"attribute-option-prototype" !== jQuery(element).attr("id") && (option = { label: jQuery(element).find("#option-label").val(), value: jQuery(element).find("#option-value").val() }, options.push(option));
  }), label && 0 !== options.length && (jQuery("#jigoshop-product-categories-attributes-add-new-button").attr("disabled", "disabled"), jQuery.post(ajaxurl, { action: "jigoshop_product_categories_saveAttribute", categoryId: jQuery("#id").val(), label: label, slug: slug, type: type, options: options }, function (data) {
    1 === data.status && (self.attributesGetAttributes([data.attributeId]), jQuery.magnificPopup.close()), jQuery("#jigoshop-product-categories-attributes-add-new-button").removeAttr("disabled");
  }, "json"));
}, AdminProductCategories = AdminProductCategories, jQuery(function () {
  return new AdminProductCategories();
});