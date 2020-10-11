"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminEmail;AdminEmail = function () {
  var AdminEmail = function () {
    function AdminEmail() {
      _classCallCheck(this, AdminEmail);

      this.addAttachments = this.addAttachments.bind(this), jQuery("#jigoshop_email_actions").on("change", this.updateVariables), jQuery("#email-attachments").on("click", ".delete", function (event) {
        return jQuery(event.target).parent().remove();
      }), jQuery(".add-email-attachments").on("click", this.addAttachments);
    }

    _createClass(AdminEmail, [{
      key: "updateVariables",
      value: function updateVariables(event) {
        var $parent;return event.preventDefault(), $parent = jQuery(event.target).closest("div.jigoshop"), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.email.update_variable_list", email: $parent.data("id"), actions: jQuery(event.target).val() } }).done(function (data) {
          return null != data.success && data.success ? jQuery("#available_arguments").replaceWith(data.html) : jigoshop.addMessage("danger", data.error, 6e3);
        });
      }
    }, {
      key: "addAttachments",
      value: function addAttachments(event) {
        var wpMedia;if (event.preventDefault(), !wpMedia) return this.wpMedia = wp.media({ states: [new wp.media.controller.Library({ filterable: "all", multiple: !0 })] }), wpMedia = this.wpMedia, this.wpMedia.on("select", function () {
          var attachmentIds, selection;return selection = wpMedia.state().get("selection"), attachmentIds = jQuery.map(jQuery('input[name="jigoshop_email[attachments][]"]'), function (attachment) {
            return parseInt(jQuery(attachment).val());
          }), selection.map(function (attachment) {
            var template;if ((attachment = attachment.toJSON()).id && -1 === jQuery.inArray(attachment.id, attachmentIds)) return template = wp.template("product-downloads"), jQuery("#email-attachments").append(template({ id: attachment.id, title: attachment.filename }));
          });
        }), wpMedia.open();this.wpMedia.open();
      }
    }]);

    return AdminEmail;
  }();

  return AdminEmail.prototype.wpMedia = !1, AdminEmail;
}.call(undefined), jQuery(function () {
  return new AdminEmail();
});