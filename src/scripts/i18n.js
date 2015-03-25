/*jshint devel: true*/
(function () {
	'use strict';
	
	var I18N = function () {
		this.locale = navigator.language.split('-')[0] || 'en';
	};
	
	I18N.prototype.translate = function (string) {
		return (this.locale && this.languages[this.locale] && this.languages[this.locale][string]) ? this.languages[this.locale][string] : string;
	};
	
	I18N.prototype.languages = {
		"fr": {
			"Welcome": "Bienvenue"
		}
	};
	
	window.i18n = new I18N();
}());