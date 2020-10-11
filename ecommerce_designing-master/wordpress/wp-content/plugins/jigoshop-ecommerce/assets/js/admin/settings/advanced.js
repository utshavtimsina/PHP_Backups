"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdvancedSettings;AdvancedSettings = function () {
  var AdvancedSettings = function () {
    function AdvancedSettings() {
      _classCallCheck(this, AdvancedSettings);

      this.addGroupItem = this.addGroupItem.bind(this), this.generateUserDetails = this.generateUserDetails.bind(this), this.generateSecret = this.generateSecret.bind(this), this.usersCount = jQuery("#api-users li").length, jQuery("#api-users").on("click", ".generate", this.generateUserDetails), jQuery("#api-users").on("click", ".toggle", this.toggleGroupItem), jQuery("#api-users").on("click", ".remove", this.removeGroupItem), jQuery("#api-users").on("keyup", ".login", this.updateListHeader), jQuery("#api-users").on("click", ".add-user", this.addGroupItem), jQuery("#api-secret").on("click", ".generate", this.generateSecret);
    }

    _createClass(AdvancedSettings, [{
      key: "toggleGroupItem",
      value: function toggleGroupItem(event) {
        var $item;return $item = jQuery(event.target), jQuery(".list-group-item-text", $item.closest("li")).slideToggle(function () {
          return jQuery("span", $item).toggleClass("glyphicon-collapse-down").toggleClass("glyphicon-collapse-up");
        });
      }
    }, {
      key: "removeGroupItem",
      value: function removeGroupItem(event) {
        return jQuery(event.target).closest(".list-group-item").remove();
      }
    }, {
      key: "addGroupItem",
      value: function addGroupItem(event) {
        var template;return event.preventDefault(), template = this.getTemplate(), jQuery("#api-users .list-group").append(template({ id: this.usersCount })), this.usersCount++, jQuery("#api-users select").last().select2(), jQuery("#api-users .generate").last().trigger("click");
      }
    }, {
      key: "generateUserDetails",
      value: function generateUserDetails(event) {
        var $item, login, password;return event.preventDefault(), login = this.generateString(16), password = this.generateString(52), ($item = jQuery(event.target)).closest("fieldset").find("input.login").val(login).trigger("change"), $item.closest("fieldset").find("input.password").val(password).trigger("change"), $item.closest("li").find(".title").html(login);
      }
    }, {
      key: "generateSecret",
      value: function generateSecret(event) {
        return event.preventDefault(), jQuery(event.target).closest("div").find("input").val(this.generateString(52)).trigger("change");
      }
    }, {
      key: "generateString",
      value: function generateString(length) {
        var ret;for (ret = ""; ret.length < length;) {
          ret += Math.random().toString(16).substring(2);
        }return ret.substring(0, length);
      }
    }, {
      key: "updateListHeader",
      value: function updateListHeader(event) {
        return jQuery(event.target).closest("li").find(".title").html(jQuery(event.target).val());
      }
    }, {
      key: "getTemplate",
      value: function getTemplate() {
        return "" === this.template && (this.template = wp.template("api-user")), this.template;
      }
    }]);

    return AdvancedSettings;
  }();

  return AdvancedSettings.prototype.usersCount = 0, AdvancedSettings.prototype.template = "", AdvancedSettings;
}.call(undefined), jQuery(function () {
  return new AdvancedSettings();
});