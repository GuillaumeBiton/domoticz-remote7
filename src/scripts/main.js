/*jslint devel:true */
/*global Framework7, Dom7, Template7, i18n*/
(function (Framework7, $$, T7, i18n) {
    'use strict';

	// Template7 Helpers
	T7.registerHelper('i18n', function (str) {
		return i18n.translate(str);
	});
	
    var app = new Framework7({
            modalTitle: 'domoticz-remote7',
            animateNavBackIcon: true,
			// Enable Template rendering
			template7Pages: true
        }),
        mainView = app.addView('.view-main', {
            // Enable Dynamic Navbar
            dynamicNavbar: true
        }),
		settings = JSON.parse(localStorage.getItem('settings')) || {};
	
	if (!settings.url) {
		mainView.router.loadPage('wizard.html');
	}
	
    window.app = app;
}(Framework7, Dom7, Template7, i18n));