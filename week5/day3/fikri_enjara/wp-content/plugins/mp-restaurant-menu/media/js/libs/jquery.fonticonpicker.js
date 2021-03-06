/**
 *  jQuery fontIconPicker - v2.0.0
 *
 *  An icon picker built on top of font icons and jQuery
 *
 *  http://codeb.it/fontIconPicker
 *
 *  Made by Alessandro Benoit & Swashata
 *  Under MIT License
 *
 * {@link https://github.com/micc83/fontIconPicker}
 */
!function(t) {
	"use strict";
	function e(e, s) {
		this.element = t(e), this.settings = t.extend({}, i, s), this.settings.emptyIcon && this.settings.iconsPerPage--, this.iconPicker = t("<div/>", {"class": "icons-selector", style: "position: relative", html: '<div class="selector"><span class="selected-icon"><i class="fip-icon-block"></i></span><span class="selector-button"><i class="fip-icon-down-dir"></i></span></div><div class="selector-popup" style="display: none;">' + (this.settings.hasSearch ? '<div class="selector-search"><input type="text" name="" value="" placeholder="Search icon" class="icons-search-input"/><i class="fip-icon-search"></i></div>' : "") + '<div class="selector-category"><select name="" class="icon-category-select" style="display: none"></select></div><div class="fip-icons-container"></div><div class="selector-footer" style="display:none;"><span class="selector-pages">1/2</span><span class="selector-arrows"><span class="selector-arrow-left" style="display:none;"><i class="fip-icon-left-dir"></i></span><span class="selector-arrow-right"><i class="fip-icon-right-dir"></i></span></span></div></div>'}), this.iconContainer = this.iconPicker.find(".fip-icons-container"), this.searchIcon = this.iconPicker.find(".selector-search i"), this.iconsSearched = [], this.isSearch = !1, this.totalPage = 1, this.currentPage = 1, this.currentIcon = !1, this.iconsCount = 0, this.open = !1, this.searchValues = [], this.availableCategoriesSearch = [], this.triggerEvent = null, this.backupSource = [], this.backupSearch = [], this.isCategorized = !1, this.selectCategory = this.iconPicker.find(".icon-category-select"), this.selectedCategory = !1, this.availableCategories = [], this.unCategorizedKey = null, this.init()
	}

	var i = {theme: "fip-grey", source: !1, emptyIcon: !0, emptyIconValue: "", iconsPerPage: 20, hasSearch: !0, searchSource: !1, useAttribute: !1, attributeName: "data-icon", convertToHex: !0, allCategoryText: "From all categories", unCategorizedText: "Uncategorized"};
	e.prototype = {
		init: function() {
			this.iconPicker.addClass(this.settings.theme), this.iconPicker.css({left: -9999}).appendTo("body");
			var e = this.iconPicker.outerHeight(), i = this.iconPicker.outerWidth();
			if (this.iconPicker.css({left: ""}), this.element.before(this.iconPicker), this.element.css({visibility: "hidden", top: 0, position: "relative", zIndex: "-1", left: "-" + i + "px", display: "inline-block", height: e + "px", width: i + "px", padding: "0", margin: "0 -" + i + "px 0 0", border: "0 none", verticalAlign: "top"}), !this.element.is("select")) {
				var s = function() {
					for (var t = 3, e = document.createElement("div"), i = e.all || []; e.innerHTML = "<!--[if gt IE " + ++t + "]><br><![endif]-->", i[0];);
					return t > 4 ? t : !t
				}(), n = document.createElement("div");
				this.triggerEvent = 9 !== s && "oninput" in n ? ["input", "keyup"] : ["keyup"]
			}
			!this.settings.source && this.element.is("select") ? (this.settings.source = [], this.settings.searchSource = [], this.element.find("optgroup").length ? (this.isCategorized = !0, this.element.find("optgroup").each(t.proxy(function(e, i) {
				var s = this.availableCategories.length, n = t("<option />");
				n.attr("value", s), n.html(t(i).attr("label")), this.selectCategory.append(n), this.availableCategories[s] = [], this.availableCategoriesSearch[s] = [], t(i).find("option").each(t.proxy(function(e, i) {
					var n = t(i).val(), o = t(i).html();
					n && n !== this.settings.emptyIconValue && (this.settings.source.push(n), this.availableCategories[s].push(n), this.searchValues.push(o), this.availableCategoriesSearch[s].push(o))
				}, this))
			}, this)), this.element.find("> option").length && this.element.find("> option").each(t.proxy(function(e, i) {
				var s = t(i).val(), n = t(i).html();
				return s && "" !== s && s != this.settings.emptyIconValue ? (null === this.unCategorizedKey && (this.unCategorizedKey = this.availableCategories.length, this.availableCategories[this.unCategorizedKey] = [], this.availableCategoriesSearch[this.unCategorizedKey] = [], t("<option />").attr("value", this.unCategorizedKey).html(this.settings.unCategorizedText).appendTo(this.selectCategory)), this.settings.source.push(s), this.availableCategories[this.unCategorizedKey].push(s), this.searchValues.push(n), void this.availableCategoriesSearch[this.unCategorizedKey].push(n)) : !0
			}, this))) : this.element.find("option").each(t.proxy(function(e, i) {
				var s = t(i).val(), n = t(i).html();
				s && (this.settings.source.push(s), this.searchValues.push(n))
			}, this)), this.backupSource = this.settings.source.slice(0), this.backupSearch = this.searchValues.slice(0), this.loadCategories()) : this.initSourceIndex(), this.loadIcons(), this.selectCategory.on("change keyup", t.proxy(function(e) {
				if (this.isCategorized === !1)return !1;
				var i = t(e.currentTarget), s = i.val();
				if ("all" === i.val())this.settings.source = this.backupSource, this.searchValues = this.backupSearch; else {
					var n = parseInt(s, 10);
					this.availableCategories[n] && (this.settings.source = this.availableCategories[n], this.searchValues = this.availableCategoriesSearch[n])
				}
				this.resetSearch(), this.loadIcons()
			}, this)), this.iconPicker.find(".selector-button").click(t.proxy(function() {
				this.toggleIconSelector()
			}, this)), this.iconPicker.find(".selector-arrow-right").click(t.proxy(function(e) {
				this.currentPage < this.totalPage && (this.iconPicker.find(".selector-arrow-left").show(), this.currentPage = this.currentPage + 1, this.renderIconContainer()), this.currentPage === this.totalPage && t(e.currentTarget).hide()
			}, this)), this.iconPicker.find(".selector-arrow-left").click(t.proxy(function(e) {
				this.currentPage > 1 && (this.iconPicker.find(".selector-arrow-right").show(), this.currentPage = this.currentPage - 1, this.renderIconContainer()), 1 === this.currentPage && t(e.currentTarget).hide()
			}, this)), this.iconPicker.find(".icons-search-input").keyup(t.proxy(function(e) {
				var i = t(e.currentTarget).val();
				return "" === i ? void this.resetSearch() : (this.searchIcon.removeClass("fip-icon-search"), this.searchIcon.addClass("fip-icon-cancel"), this.isSearch = !0, this.currentPage = 1, this.iconsSearched = [], t.grep(this.searchValues, t.proxy(function(t, e) {
					return t.toLowerCase().search(i.toLowerCase()) >= 0 ? (this.iconsSearched[this.iconsSearched.length] = this.settings.source[e], !0) : void 0
				}, this)), void this.renderIconContainer())
			}, this)), this.iconPicker.find(".selector-search").on("click", ".fip-icon-cancel", t.proxy(function() {
				this.iconPicker.find(".icons-search-input").focus(), this.resetSearch()
			}, this)), this.iconContainer.on("click", ".fip-box", t.proxy(function(e) {
				this.setSelectedIcon(t(e.currentTarget).find("i").attr("data-fip-value")), this.toggleIconSelector()
			}, this)), this.iconPicker.click(function(t) {
				return t.stopPropagation(), !1
			}), t("html").click(t.proxy(function() {
				this.open && this.toggleIconSelector()
			}, this))
		}, initSourceIndex: function() {
			if ("object" == typeof this.settings.source) {
				if (t.isArray(this.settings.source))this.isCategorized = !1, this.selectCategory.html("").hide(), this.settings.source = t.map(this.settings.source, function(t) {
					return "function" == typeof t.toString ? t.toString() : t
				}), this.searchValues = t.isArray(this.settings.searchSource) ? t.map(this.settings.searchSource, function(t) {
					return "function" == typeof t.toString ? t.toString() : t
				}) : this.settings.source.slice(0); else {
					var e = t.extend(!0, {}, this.settings.source);
					this.settings.source = [], this.searchValues = [], this.availableCategoriesSearch = [], this.selectedCategory = !1, this.availableCategories = [], this.unCategorizedKey = null, this.isCategorized = !0, this.selectCategory.html("");
					for (var i in e) {
						var s = this.availableCategories.length, n = t("<option />");
						n.attr("value", s), n.html(i), this.selectCategory.append(n), this.availableCategories[s] = [], this.availableCategoriesSearch[s] = [];
						for (var o in e[i]) {
							var c = e[i][o], r = this.settings.searchSource && this.settings.searchSource[i] && this.settings.searchSource[i][o] ? this.settings.searchSource[i][o] : c;
							"function" == typeof c.toString && (c = c.toString()), c && c !== this.settings.emptyIconValue && (this.settings.source.push(c), this.availableCategories[s].push(c), this.searchValues.push(r), this.availableCategoriesSearch[s].push(r))
						}
					}
				}
				this.backupSource = this.settings.source.slice(0), this.backupSearch = this.searchValues.slice(0), this.loadCategories()
			}
		}, loadCategories: function() {
			this.isCategorized !== !1 && (t('<option value="all">' + this.settings.allCategoryText + "</option>").prependTo(this.selectCategory), this.selectCategory.show().val("all").trigger("change"))
		}, loadIcons: function() {
			this.iconContainer.html('<i class="fip-icon-spin3 animate-spin loading"></i>'), this.settings.source instanceof Array && this.renderIconContainer()
		}, renderIconContainer: function() {
			var e, i = [];
			if (i = this.isSearch ? this.iconsSearched : this.settings.source, this.iconsCount = i.length, this.totalPage = Math.ceil(this.iconsCount / this.settings.iconsPerPage), this.totalPage > 1 ? this.iconPicker.find(".selector-footer").show() : this.iconPicker.find(".selector-footer").hide(), this.iconPicker.find(".selector-pages").html(this.currentPage + "/" + this.totalPage + " <em>(" + this.iconsCount + ")</em>"), e = (this.currentPage - 1) * this.settings.iconsPerPage, this.settings.emptyIcon)this.iconContainer.html('<span class="fip-box"><i class="fip-icon-block" data-fip-value="fip-icon-block"></i></span>'); else {
				if (i.length < 1)return void this.iconContainer.html('<span class="icons-picker-error"><i class="fip-icon-block" data-fip-value="fip-icon-block"></i></span>');
				this.iconContainer.html("")
			}
			i = i.slice(e, e + this.settings.iconsPerPage);
			for (var s, n = 0; s = i[n++];) {
				var o = s;
				t.grep(this.settings.source, t.proxy(function(t, e) {
					return t === s ? (o = this.searchValues[e], !0) : !1
				}, this)), t("<span/>", {html: '<i data-fip-value="' + s + '" ' + (this.settings.useAttribute ? this.settings.attributeName + '="' + (this.settings.convertToHex ? "&#x" + parseInt(s, 10).toString(16) + ";" : s) + '"' : 'class="' + s + '"') + "></i>", "class": "fip-box", title: o}).appendTo(this.iconContainer)
			}
			this.settings.emptyIcon || this.element.val() && -1 !== t.inArray(this.element.val(), this.settings.source) ? -1 === t.inArray(this.element.val(), this.settings.source) ? this.setSelectedIcon() : this.setSelectedIcon(this.element.val()) : this.setSelectedIcon(i[0])
		}, setHighlightedIcon: function() {
			this.iconContainer.find(".current-icon").removeClass("current-icon"), this.currentIcon && this.iconContainer.find('[data-fip-value="' + this.currentIcon + '"]').parent("span").addClass("current-icon")
		}, setSelectedIcon: function(t) {
			if ("fip-icon-block" === t && (t = ""), this.settings.useAttribute ? t ? this.iconPicker.find(".selected-icon").html("<i " + this.settings.attributeName + '="' + (this.settings.convertToHex ? "&#x" + parseInt(t, 10).toString(16) + ";" : t) + '"></i>') : this.iconPicker.find(".selected-icon").html('<i class="fip-icon-block"></i>') : this.iconPicker.find(".selected-icon").html('<i class="' + (t || "fip-icon-block") + '"></i>'), this.element.val("" === t ? this.settings.emptyIconValue : t).trigger("change"), null !== this.triggerEvent)for (var e in this.triggerEvent)this.element.trigger(this.triggerEvent[e]);
			this.currentIcon = t, this.setHighlightedIcon()
		}, toggleIconSelector: function() {
			this.open = this.open ? 0 : 1, this.iconPicker.find(".selector-popup").slideToggle(300), this.iconPicker.find(".selector-button i").toggleClass("fip-icon-down-dir"), this.iconPicker.find(".selector-button i").toggleClass("fip-icon-up-dir"), this.open && this.iconPicker.find(".icons-search-input").focus().select()
		}, resetSearch: function() {
			this.iconPicker.find(".icons-search-input").val(""), this.searchIcon.removeClass("fip-icon-cancel"), this.searchIcon.addClass("fip-icon-search"), this.iconPicker.find(".selector-arrow-left").hide(), this.currentPage = 1, this.isSearch = !1, this.renderIconContainer(), this.totalPage > 1 && this.iconPicker.find(".selector-arrow-right").show()
		}
	}, t.fn.fontIconPicker = function(i) {
		return this.each(function() {
			t.data(this, "fontIconPicker") || t.data(this, "fontIconPicker", new e(this, i))
		}), this.setIcons = t.proxy(function(e, i) {
			void 0 === e && (e = !1), void 0 === i && (i = !1), this.each(function() {
				t.data(this, "fontIconPicker").settings.source = e, t.data(this, "fontIconPicker").settings.searchSource = i, t.data(this, "fontIconPicker").initSourceIndex(), t.data(this, "fontIconPicker").resetSearch(), t.data(this, "fontIconPicker").loadIcons()
			})
		}, this), this.destroyPicker = t.proxy(function() {
			this.each(function() {
				t.data(this, "fontIconPicker") && (t.data(this, "fontIconPicker").iconPicker.remove(), t.data(this, "fontIconPicker").element.css({visibility: "", top: "", position: "", zIndex: "", left: "", display: "", height: "", width: "", padding: "", margin: "", border: "", verticalAlign: ""}), t.removeData(this, "fontIconPicker"))
			})
		}, this), this.refreshPicker = t.proxy(function(s) {
			s || (s = i), this.destroyPicker(), this.each(function() {
				t.data(this, "fontIconPicker") || t.data(this, "fontIconPicker", new e(this, s))
			})
		}, this), this
	}
}(jQuery);