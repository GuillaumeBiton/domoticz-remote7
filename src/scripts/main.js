/*jslint devel:true */
/*global Framework7, Dom7, domoticz*/
(function (Framework7, $$) {
    'use strict';

    var app = new Framework7({
            modalTitle: 'domoticz-remote7',
            animateNavBackIcon: true
        }),
        mainView = app.addView('.view-main', {
            // Enable Dynamic Navbar
            dynamicNavbar: true
        }),
		settings = JSON.parse(localStorage.getItem('settings')) || {};
	
	if (!settings.url) {
		app.popup('.settings');
	}
	
	$$('.settings-done').on('click', function () {
		settings.url = 'http://' + $$('#ip').val() + ":" + $$('#port').val();
		$$.getJSON(settings.url + '/json.htm?jsoncallback=?', function (data) {
			localStorage.setItem('settings',  JSON.stringify(settings));
			app.closeModal();
		});
	});
	
    window.app = app;
}(Framework7, Dom7, domoticz));