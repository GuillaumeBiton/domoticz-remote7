/*jslint devel:true */
/*global Framework7, Dom7, Template7, i18n*/
(function (Framework7, $$, T7, i18n) {
    'use strict';

    // Template7 Helpers
    T7.registerHelper('i18n', function (str) {
        return i18n.translate(str);
    });

	T7.registerHelper('unmatch', function (a, b, options) {
		if (a !== b) {
			return options.fn(this, options.data);
		} else {
			return options.inverse(this, options.data);
		}
	});
	
	T7.global = {
		i18n: i18n
	};
	
    var app = new Framework7({
            modalTitle: 'domoticz-remote7',
            animateNavBackIcon: true,
            // Enable Template rendering
            template7Pages: true,
            template7Data: {
                'page:wizard-language': {
                    i18n: i18n
                }
            }
        }),
        mainView = app.addView('.view-main', {
            // Enable Dynamic Navbar
            dynamicNavbar: true
        }),
        settings = JSON.parse(localStorage.getItem('settings')) || {};

    if (!settings.url) {
        mainView.router.loadPage('wizard.html');
    }

	$$(document).on('click', '.wizard-setLocale', function (e) {
		var locale = $$(this)[0].dataset.locale;
		if (i18n.locale !== locale) {
			i18n.locale = locale;
			mainView.router.refreshPage();
		}
	});
	
    window.app = app;
}(Framework7, Dom7, Template7, i18n));