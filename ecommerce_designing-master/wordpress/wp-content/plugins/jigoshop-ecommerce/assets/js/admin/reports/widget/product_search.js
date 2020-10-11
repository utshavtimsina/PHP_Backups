"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductSearch;ProductSearch = function ProductSearch() {
  _classCallCheck(this, ProductSearch);

  jigoshop.ajaxSearch(jQuery("#jigoshop_find_products"), { action: "jigoshop.admin.product.find" });
}, jQuery(function () {
  return new ProductSearch();
});