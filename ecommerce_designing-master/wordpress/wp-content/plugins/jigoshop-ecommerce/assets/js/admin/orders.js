"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminOrders;AdminOrders = function () {
  function AdminOrders() {
    _classCallCheck(this, AdminOrders);

    jQuery(".column-status").on("click", ".btn-status", this.changeStatus);
  }

  _createClass(AdminOrders, [{
    key: "changeStatus",
    value: function changeStatus(event) {
      var $parent, orderId, status;if ($parent = jQuery(event.target).parent(), orderId = jQuery(event.target).data("order_id"), status = jQuery(event.target).data("status_to"), orderId && status) return jigoshop.block($parent, { overlayCSS: { backgroundColor: "#fff" } }), jQuery.ajax({ url: jigoshop.getAjaxUrl(), type: "post", dataType: "json", data: { action: "jigoshop.admin.orders.change_status", orderId: orderId, status: status } }).done(function (result) {
        return result.success ? $parent.html(result.html) : alert(result.error), jigoshop.unblock($parent);
      });
    }
  }]);

  return AdminOrders;
}(), jQuery(function () {
  return new AdminOrders();
});