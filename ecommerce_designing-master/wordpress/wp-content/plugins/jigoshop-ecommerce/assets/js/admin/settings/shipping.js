var Shipping;Shipping=function(){function e(){jQuery(".shipping-method-configure").click(function(e){return function(t){var n;return n=jQuery(t.target).val(),void 0!==n?jQuery.magnificPopup.open({mainClass:"jigoshop",items:{src:""},type:"inline",callbacks:{elementParse:function(e){return e.src=jQuery("#shipping-method-options-"+n).detach(),jQuery(e.src).css("display","block")},open:function(){return jQuery('.mfp-content input[type="checkbox"]').bootstrapSwitch({size:"small",onText:"Yes",offText:"No"}),jQuery(".mfp-content select").each(function(e,t){return jQuery(t).siblings().remove(),jQuery(t).select2("destroy"),jQuery(t).select2()}),jQuery(".shipping-method-options-save").click(function(){return jQuery.magnificPopup.close()}),e.initAdvancedFlatRateElements()},close:function(){var e;return jQuery(".mfp-content").find('input[type="checkbox"]').each(function(e,t){return jQuery(t).bootstrapSwitch("destroy")}),jQuery(".mfp-content").find("select").each(function(e,t){return jQuery(t).select2("destroy")}),e=jQuery(".mfp-content").children("div").detach(),jQuery(e).appendTo("#shipping-methods-container"),jQuery(".shipping-method-options-save").click()}}}):void 0}}(this))}return e.prototype.ruleCount=0,e.prototype.initAdvancedFlatRateElements=function(){return this.ruleCount=jQuery(".mfp-content #advanced-flat-rate li.list-group-item").length,jQuery(".mfp-content div.advanced_flat_rate_countries_field").show(),jQuery(".mfp-content #advanced_flat_rate_available_for").on("change",this.toggleSpecificCountires).trigger("change"),jQuery(".mfp-content #advanced-flat-rate").on("click",".add-rate",function(e){return function(t){return e.addRate(t)}}(this)).on("click",".toggle-rate",this.toggleRate).on("click",".remove-rate",this.removeRate).on("keyup",".input-label, .input-cost",this.updateTitle).on("switchChange.bootstrapSwitch","input.rest-of-the-world",this.toggleLocationFields),jQuery(".mfp-content input.rest-of-the-world").trigger("switchChange"),jQuery(".mfp-content #advanced-flat-rate ul").sortable({handle:".handle",axis:"y"})},e.prototype.toggleLocationFields=function(e){var t,n;return t=jQuery(e.target).closest(".list-group-item-text"),n=jQuery("div.continents, div.countries, div.states, div.postcode",t),jQuery(e.target).is(":checked")?n.slideUp():n.slideDown()},e.prototype.updateTitle=function(e){var t,n,r;return t=jQuery(e.target).closest("li"),r=t.find(".input-label").val(),n=t.find(".input-cost").val(),t.find("span.title").html(r+" - "+n)},e.prototype.addRate=function(e){var t;return e.preventDefault(),t=wp.template("advanced-flat-rate"),this.ruleCount++,jQuery(".mfp-content #advanced-flat-rate ul.list-group").append(t({id:this.ruleCount})),jQuery(".mfp-content #advanced-flat-rate ul.list-group li:last select").select2(),jQuery(".mfp-content").find('input[type="checkbox"]').each(function(e,t){return jQuery(t).bootstrapSwitch({size:"small",onText:"Yes",offText:"No"})})},e.prototype.toggleSpecificCountires=function(e){return"specific"===jQuery(e.target).val()?jQuery(".mfp-content .advanced_flat_rate_countries_field").show():jQuery(".mfp-content .advanced_flat_rate_countries_field").hide()},e.prototype.toggleRate=function(e){var t;return t=jQuery(e.target),jQuery(".list-group-item-text",t.closest("li")).slideToggle(function(){return jQuery("span",t).toggleClass("glyphicon-collapse-down").toggleClass("glyphicon-collapse-up")})},e.prototype.removeRate=function(e){var t;return t=jQuery(e.target).closest("li"),t.slideUp(1e3,function(){return t.remove()})},e}(),jQuery(function(){return new Shipping});