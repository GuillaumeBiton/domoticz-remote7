/*jshint devel: true*/
(function () {
    'use strict';

    var I18N = function () {
        this.locale = navigator.language.split('-')[0] || 'en';
    };

    I18N.prototype.translate = function (string) {
        return (this.locale && this.languages[this.locale] && this.languages[this.locale][string]) ? this.languages[this.locale][string] : string;
    };

//	I18N.prototype.setLocale = function (lng) {
//		var locale = (lng && this.languages[lng]) ? lng : 'en';
//		this.languages.currentLocale = locale;
//		return locale;
//	};
//	
    I18N.prototype.languages = {
        "en": {
            "languageName": "English"
        },
        "fr": {
            "languageName": "Français",
            "Welcome": "Bienvenue",
			"Set Up": "Paramétrer",
            "Choose your language": "Choississez votre langue",
			"More languages": "Plus de langues",
			"Select an home automation server": "Sélectionner un serveur de domotique"
        },
        "es": {
            "languageName": "Español",
            "Welcome": "Bienvenida",
			"Set Up": "configuración",
            "Choose your language": "Seleccione su idioma",
			"More languages": "Mas idiomas",
			"Select an home automation server": "Seleccione un servidor de domótica"
        }
    };

    window.i18n = new I18N();
}());