/*jshint devel: true*/
(function () {
    'use strict';

    var I18N = function () {
        this.locale = navigator.language.split('-')[0] || 'en';
        this.languages[this.locale].languageDefault = true;
    };

    I18N.prototype.translate = function (string) {
        return (this.locale && this.languages[this.locale] && this.languages[this.locale][string]) ? this.languages[this.locale][string] : string;
    };

    I18N.prototype.languages = {
        "en": {
            "languageName": "English"
        },
        "fr": {
            "languageName": "Français",
            "Welcome": "Bienvenue",
            "Choose your language": "Choississez votre langue"
        },
        "es": {
            "languageName": "Español",
            "Welcome": "Bienvenida",
            "Choose your language": "Seleccione su idioma"
        }
    };

    window.i18n = new I18N();
}());