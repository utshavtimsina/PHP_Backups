"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminProductVariable;AdminProductVariable = function () {
  var AdminProductVariable = function () {
    function AdminProductVariable(params) {
      var _this = this;

      _classCallCheck(this, AdminProductVariable);

      this.updateVariation = this.updateVariation.bind(this), this.removeVariation = this.removeVariation.bind(this), this.bulkAction = this.bulkAction.bind(this), this.params = params, jQuery("#product-type").on("change", this.removeParameters), jQuery("#do-bulk-action").on("click", this.bulkAction), jQuery("#product-variations").on("click", ".remove-variation", this.removeVariation).on("click", ".show-variation", function (event) {
        var $item;return $item = jQuery(event.target), jQuery(".list-group-item-text", $item.closest("li")).slideToggle(function () {
          return jQuery("span", $item).toggleClass("glyphicon-collapse-down").toggleClass("glyphicon-collapse-up");
        });
      }).on("change", "select.variation-attribute", this.updateVariation).on("change", ".list-group-item-text input.form-control", this.updateVariation).on("change", '.list-group-item-text input[type="checkbox"]', this.updateVariation).on("switchChange.bootstrapSwitch", '.list-group-item-text input[type="checkbox"]', this.updateVariation).on("change", ".list-group-item-text select.form-control", this.updateVariation).on("click", ".set_variation_image", this.setImage).on("click", ".remove_variation_image", this.removeImage).on("change", 'input[type="checkbox"].default_variation', function (event) {
        return jQuery('input[type="checkbox"].default_variation').not(jQuery(event.target)).prop("checked", !1);
      }).on("change", 'input[type="checkbox"].stock-manage', function (event) {
        var $parent;return $parent = jQuery(event.target).closest("li"), jQuery(event.target).is(":checked") ? (jQuery("div.manual-stock-status", $parent).slideUp(), jQuery(".stock-status", $parent).slideDown()) : (jQuery("div.manual-stock-status", $parent).slideDown(), jQuery(".stock-status", $parent).slideUp());
      }).on("jigoshop.variation.add", function () {
        return _this.connectImage(0, jQuery(".set_variation_image").last());
      }).on("click", ".schedule", function (event) {
        return event.preventDefault(), jQuery(event.target).closest("fieldset").find(".not-active").removeClass("not-active"), jQuery(event.target).addClass("not-active");
      }).on("click", ".cancel-schedule", function (event) {
        var $parent;return event.preventDefault(), ($parent = jQuery(event.target).closest("fieldset")).find(".not-active").removeClass("not-active"), jQuery(event.target).addClass("not-active"), $parent.find(".datepicker").addClass("not-active"), $parent.find("input.daterange-from").val(""), $parent.find("input.daterange-to").val("").trigger("change");
      }), jQuery(".set_variation_image").each(this.connectImage), "variable" !== jQuery("#product-type").val() && jQuery("div.is-for-variations").slideUp();
    }

    _createClass(AdminProductVariable, [{
      key: "removeParameters",
      value: function removeParameters(event) {
        return "variable" === jQuery(event.target).val() ? (jQuery(".product_regular_price_field").slideUp(), jQuery("div.is-for-variations").slideDown()) : jQuery("div.is-for-variations").slideUp();
      }
    }, {
      key: "addVariation",
      value: function addVariation(event) {
        var _this2 = this;

        var $parent;return event.preventDefault(), $parent = jQuery("#product-variations"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product.add_variation", product_id: $parent.closest(".jigoshop").data("id") } }).done(function (data) {
          return null != data.success && data.success ? (_this2.disableUpdate = !0, jQuery(data.html).hide().appendTo($parent).slideDown(function () {
            return _this2.disableUpdate = !1;
          }).trigger("jigoshop.variation.add")) : jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }, {
      key: "updateVariation",
      value: function updateVariation(event) {
        var _this3 = this;

        var $container, $parent, attributes, attributesData, getOptionValue, i, j, len, len1, option, product, productData, results;if (!this.disableUpdate) {
          for ($container = jQuery("#product-variations"), $parent = jQuery(event.target).closest("li.list-group-item"), getOptionValue = function getOptionValue(current) {
            return "checkbox" === current.type || "radio" === current.type ? current.checked ? 1 : 0 : "select-multiple" === current.type ? jQuery(current).val() : current.value;
          }, attributes = {}, i = 0, len = (attributesData = jQuery("select.variation-attribute", $parent).toArray()).length; i < len; i++) {
            option = attributesData[i], attributes[(results = /(?:^|\s)product\[variation]\[\d+]\[attribute]\[(.*?)](?:\s|$)/g.exec(option.name))[1]] = getOptionValue(option);
          }for (product = {}, j = 0, len1 = (productData = jQuery('.list-group-item-text input.form-control, .list-group-item-text input[type="checkbox"], .list-group-item-text select.form-control', $parent).toArray()).length; j < len1; j++) {
            option = productData[j], null != (results = /(?:^|\s)product\[variation]\[\d+]\[product]\[(.*?)](\[(.*?)])?(?:\s|$)/g.exec(option.name))[3] ? (product[results[1]] = {}, product[results[1]][results[3]] = getOptionValue(option)) : product[results[1]] = getOptionValue(option);
          }return jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product.save_variation", product_id: $container.closest(".jigoshop").data("id"), variation_id: $parent.data("id"), attributes: attributes, product: product } }).done(function (data) {
            return null != data.success && data.success ? ($parent.trigger("jigoshop.variation.update"), jigoshop.addMessage("success", _this3.params.i18n.saved, 2e3)) : jigoshop.addMessage("danger", data.error, 6e3);
          });
        }
      }
    }, {
      key: "removeVariation",
      value: function removeVariation(event) {
        var _this4 = this;

        var $parent;if (event.preventDefault(), confirm(this.params.i18n.confirm_remove)) return $parent = jQuery(event.target).closest("li"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product.remove_variation", product_id: $parent.closest(".jigoshop").data("id"), variation_id: $parent.data("id") } }).done(function (data) {
          return null != data.success && data.success ? ($parent.trigger("jigoshop.variation.remove"), $parent.slideUp(function () {
            return $parent.remove();
          }), jigoshop.addMessage("success", _this4.params.i18n.variation_removed, 2e3)) : jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }, {
      key: "connectImage",
      value: function connectImage(index, element) {
        var $element, $remove, $thumbnail;return $element = jQuery(element), $remove = $element.next(".remove_variation_image"), $thumbnail = jQuery("img", $element.parent()), $element.jigoshop_media({ field: !1, bind: !1, thumbnail: $thumbnail, callback: function callback(attachment) {
            return $remove.show(), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product.set_variation_image", product_id: $element.closest(".jigoshop").data("id"), variation_id: $element.closest(".variation").data("id"), image_id: attachment.id } }).done(function (data) {
              return null != data.success && data.success ? $thumbnail.prop("srcset", "") : jigoshop.addMessage("danger", data.error, 6e3);
            });
          }, library: { type: "image" } });
      }
    }, {
      key: "setImage",
      value: function setImage(event) {
        return event.preventDefault(), jQuery(event.target).trigger("jigoshop_media");
      }
    }, {
      key: "removeImage",
      value: function removeImage(event) {
        var $element, $thumbnail;return event.preventDefault(), $element = jQuery(event.target), $thumbnail = jQuery("img", $element.parent()), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product.set_variation_image", product_id: $element.closest(".jigoshop").data("id"), variation_id: $element.closest(".variation").data("id"), image_id: -1 } }).done(function (data) {
          return null != data.success && data.success ? ($thumbnail.prop("src", data.url).prop("width", 150).prop("height", 150).prop("srcset", ""), $element.hide()) : jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }, {
      key: "bulkAction",
      value: function bulkAction(event) {
        var type;switch (jQuery("#variation-bulk-actions").val()) {case this.ADD_VARIATION:
            return this.addVariation(event);case this.CREATE_VARIATIONS_FROM_ALL_ATTRIBUTES:
            return this.createVariationsFromAllAttributes();case this.REMOVE_ALL_VARIATIONS:
            return this.removeAllVariations();case this.SET_REGULAR_PRICES:
            return this.setFields("regular-price", this.params.i18n.set_field);case this.INCREASE_REGULAR_PRICES:
            return this.modifyFields("regular-price", this.params.i18n.modify_field, 1);case this.DECREASE_REGULAR_PRICES:
            return this.modifyFields("regular-price", this.params.i18n.modify_field, -1);case this.SET_SALE_PRICES:
            return this.setFields("sale-price", this.params.i18n.set_field);case this.INCREASE_SALE_PRICES:
            return this.modifyFields("sale-price", this.params.i18n.modify_field, 1);case this.DECREASE_SALE_PRICES:
            return this.modifyFields("sale-price", this.params.i18n.modify_field, -1);case this.SET_SCHEDULED_SALE_DATES:
            return this.setDates();case this.TOGGLE_MANAGE_STOCK:
            return this.toggleCheckboxes("stock-manage");case this.SET_STOCK:
            return this.setFields("stock-stock", this.params.i18n.set_field);case this.INCREASE_STOCK:
            return this.modifyFields("stock-stock", this.params.i18n.modify_field, 1);case this.DECREASE_STOCK:
            return this.modifyFields("stock-stock", this.params.i18n.modify_field, -1);case this.SET_LENGTH:
            return this.setFields("size-length", this.params.i18n.set_field);case this.SET_WIDTH:
            return this.setFields("size-width", this.params.i18n.set_field);case this.SET_HEIGHT:
            return this.setFields("size-height", this.params.i18n.set_field);case this.SET_WEIGHT:
            return this.setFields("size-weight", this.params.i18n.set_field);case this.SET_DOWNLOAD_LIMIT:
            return this.setFields("download-limit", this.params.i18n.set_field);}if (type = jQuery("#variation-bulk-actions").val().match(/4-([a-z]+)/)) return jQuery("select.variation-type", "#product-variations").val(type).trigger("change");
      }
    }, {
      key: "removeAllVariations",
      value: function removeAllVariations() {
        var buttons;return (buttons = {})[this.params.i18n.buttons.yes] = !0, buttons[this.params.i18n.buttons.no] = !1, jQuery.prompt(this.params.i18n.remove_all_variations, { title: jQuery("#variation-bulk-actions option:selected").html(), buttons: buttons, classes: { box: "", fade: "", prompt: "jigoshop", close: "", title: "lead", message: "", buttons: "", button: "btn", defaultButton: "btn-primary" }, submit: function submit(event, submitted, message, form) {
            if (submitted) return jigoshop.block(jQuery("#product-variations").closest(".jigoshop")), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product.remove_all_variations", product_id: jQuery("#product-variations").closest(".jigoshop").data("id") } }).done(function (data) {
              if (null != data.success && data.success) return jQuery("#product-variations").slideUp(function () {
                return jigoshop.unblock(jQuery("#product-variations").closest(".jigoshop")), jQuery("#product-variations li").remove(), jQuery("#product-variations").show();
              });
            });
          }, zIndex: 99999 });
      }
    }, {
      key: "setFields",
      value: function setFields(field, text) {
        var buttons;return (buttons = {})[this.params.i18n.buttons.done] = !0, buttons[this.params.i18n.buttons.cancel] = !1, jQuery.prompt(text + '<input type="text" class="form-control" name="value"></input>', { title: jQuery("#variation-bulk-actions option:selected").html(), buttons: buttons, focus: 'input[type="text"]', classes: { box: "", fade: "", prompt: "jigoshop", close: "", title: "lead", message: "", buttons: "", button: "btn", defaultButton: "btn-primary" }, submit: function submit(event, submitted, message, form) {
            if (submitted) return jQuery("input." + field, "#product-variations").val(form.value).trigger("change");
          }, zIndex: 99999 });
      }
    }, {
      key: "modifyFields",
      value: function modifyFields(field, text, operator) {
        var buttons;return (buttons = {})[this.params.i18n.buttons.done] = !0, buttons[this.params.i18n.buttons.cancel] = !1, jQuery.prompt(text + '<input type="text" class="form-control" name="value"></input>', { title: jQuery("#variation-bulk-actions option:selected").html(), buttons: buttons, focus: 'input[type="text"]', classes: { box: "", fade: "", prompt: "jigoshop", close: "", title: "lead", message: "", buttons: "", button: "btn", defaultButton: "btn-primary" }, submit: function submit(event, submitted, message, form) {
            if (submitted) return form.value.search("%") > 0 ? (form.value = Number(form.value.replace(/%|,| /, "")), isNaN(form.value) ? alert("Invalid number") : (form.value = 1 + operator * (form.value / 100), jQuery("input." + field, "#product-variations").each(function () {
              return jQuery(this).val(Math.round(jQuery(this).val() * form.value * 100) / 100).trigger("change");
            }))) : (form.value = form.value.replace(/,| /, ""), isNaN(form.value) ? alert("Invalid number") : jQuery("input." + field, "#product-variations").each(function () {
              return jQuery(this).val(Number(jQuery(this).val()) + operator * form.value).trigger("change");
            }));
          }, zIndex: 99999 });
      }
    }, {
      key: "toggleCheckboxes",
      value: function toggleCheckboxes(field) {
        return jQuery('input[type="checkbox"].' + field, "#product-variations").each(function () {
          return jQuery(this).prop("checked", !jQuery(this).is(":checked")).trigger("change");
        });
      }
    }, {
      key: "setDates",
      value: function setDates() {
        var setEndDateButtons, setStartDateButtons, temp;return setEndDateButtons = {}, (setStartDateButtons = {})[this.params.i18n.buttons.next] = !0, setStartDateButtons[this.params.i18n.buttons.cancel] = !1, setEndDateButtons[this.params.i18n.buttons.done] = 1, setEndDateButtons[this.params.i18n.buttons.back] = -1, setEndDateButtons[this.params.i18n.buttons.cancel] = 0, temp = { set_start_date: { title: jQuery("#variation-bulk-actions option:selected").html(), html: this.params.i18n.sale_start_date + '<input type="text" class="form-control" name="from"></input>', buttons: setStartDateButtons, submit: function submit(event, submitted, message, form) {
              return submitted ? jQuery.prompt.goToState("set_end_date") : jQuery.prompt.close(), !1;
            } }, set_end_date: { title: jQuery("#variation-bulk-actions option:selected").html(), html: this.params.i18n.sale_end_date + '<input type="text" class="form-control" name="to"></input>', buttons: setEndDateButtons, submit: function submit(event, submitted, message, form) {
              if (0 === submitted) jQuery.prompt.close();else {
                if (1 === submitted) return !0;-1 === submitted && jQuery.prompt.goToState("set_start_date");
              }return !1;
            } } }, jQuery.prompt(temp, { classes: { box: "", fade: "", prompt: "jigoshop", close: "", title: "lead", message: "", buttons: "", button: "btn", defaultButton: "btn-primary" }, close: function close(event, submitted, message, form) {
            if (submitted) return jQuery("input.daterange-from", "#product-variations").val(form.from), jQuery("input.daterange-to", "#product-variations").val(form.to).trigger("change"), jQuery("a.schedule", "#product-variations").trigger("click");
          }, loaded: function loaded(event) {
            return jQuery('input[type="text"]', event.target).datepicker({ autoclose: !0, todayHighlight: !0, clearBtn: !0, todayBtn: "linked" });
          }, zIndex: 99999 });
      }
    }, {
      key: "createVariationsFromAllAttributes",
      value: function createVariationsFromAllAttributes() {
        var buttons;return (buttons = {})[this.params.i18n.buttons.yes] = !0, buttons[this.params.i18n.buttons.no] = !1, jQuery.prompt(this.params.i18n.create_all_variations_confirmation, { title: jQuery("#variation-bulk-actions option:selected").html(), buttons: buttons, classes: { box: "", fade: "", prompt: "jigoshop", close: "", title: "lead", message: "", buttons: "", button: "btn", defaultButton: "btn-primary" }, submit: function submit(event, submitted, message, form) {
            var _this5 = this;

            var $parent;if (submitted) return jigoshop.block(jQuery("#product-variations").closest(".jigoshop")), $parent = jQuery("#product-variations"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.product.create_variations_from_all_attributes", product_id: $parent.closest(".jigoshop").data("id") } }).done(function (data) {
              if (null != data.success && data.success) return _this5.disableUpdate = !0, jigoshop.unblock(jQuery("#product-variations").closest(".jigoshop")), jQuery(data.html).hide().appendTo($parent).slideDown(function () {
                return _this5.disableUpdate = !1;
              }), jQuery(".set_variation_image", data.html).each(_this5.connectImage);
            });
          }, zIndex: 99999 });
      }
    }]);

    return AdminProductVariable;
  }();

  return AdminProductVariable.prototype.ADD_VARIATION = "1", AdminProductVariable.prototype.CREATE_VARIATIONS_FROM_ALL_ATTRIBUTES = "2", AdminProductVariable.prototype.REMOVE_ALL_VARIATIONS = "3", AdminProductVariable.prototype.SET_PRODUCT_TYPE = "4-(.*)", AdminProductVariable.prototype.SET_REGULAR_PRICES = "5", AdminProductVariable.prototype.INCREASE_REGULAR_PRICES = "6", AdminProductVariable.prototype.DECREASE_REGULAR_PRICES = "7", AdminProductVariable.prototype.SET_SALE_PRICES = "8", AdminProductVariable.prototype.INCREASE_SALE_PRICES = "9", AdminProductVariable.prototype.DECREASE_SALE_PRICES = "10", AdminProductVariable.prototype.SET_SCHEDULED_SALE_DATES = "11", AdminProductVariable.prototype.TOGGLE_MANAGE_STOCK = "12", AdminProductVariable.prototype.SET_STOCK = "13", AdminProductVariable.prototype.INCREASE_STOCK = "14", AdminProductVariable.prototype.DECREASE_STOCK = "15", AdminProductVariable.prototype.SET_LENGTH = "16", AdminProductVariable.prototype.SET_WIDTH = "17", AdminProductVariable.prototype.SET_HEIGHT = "18", AdminProductVariable.prototype.SET_WEIGHT = "19", AdminProductVariable.prototype.SET_DOWNLOAD_LIMIT = "20", AdminProductVariable.prototype.params = { i18n: { confirm_remove: "", variation_removed: "", saved: "", create_all_variations_confirmation: "", remove_all_variations: "", set_field: "", modify_field: "", sale_start_date: "", sale_end_date: "", buttons: { done: "", cancel: "", next: "", back: "", yes: "", no: "" } } }, AdminProductVariable.prototype.disableUpdate = !1, AdminProductVariable;
}.call(undefined), jQuery(function () {
  return new AdminProductVariable(jigoshop_admin_product_variable);
});