"use strict";

JigoshopHelpers.prototype.ajaxSearch = function ($field, params) {
  return void 0 === params.initAction && (params.initAction = params.action), void 0 === params.multiple && (params.multiple = !0), void 0 === params.only_parent && (params.only_parent = 0), $field.select2({ multiple: params.multiple, minimumInputLength: 3, ajax: { url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", cache: !0, data: function data(term) {
        return { action: params.action, only_parent: params.only_parent, query: term };
      }, results: function results(data) {
        return null != data.success && data.success ? { results: data.results } : jigoshop.addMessage("danger", data.error, 6e3);
      } }, initSelection: function initSelection(element, callback) {
      return jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: params.initAction, only_parent: params.only_parent, value: jQuery(element).val() } }).done(function (data) {
        return null != data.success && data.success ? callback(data.results) : jigoshop.addMessage("danger", data.error, 6e3);
      });
    } });
};