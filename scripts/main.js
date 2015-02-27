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
<<<<<<< HEAD
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
	
=======
        settings = JSON.parse(localStorage.getItem('settings')) || {};

    if (!settings.url) {
        app.popup('.settings');
    }

    $$('.settings-done').on('click', function () {
        settings.url = 'http://' + $$('#ip').val() + ":" + $$('#port').val();
        $$.ajax({
            url: settings.url + '/json.htm?jsoncallback=?',
            success: function (data) {
                localStorage.setItem('settings', JSON.stringify(settings));
                app.closeModal();
            },
            error: function () {
                app.addNotification({
                    title: "Server unavailable",
                    message: "the server doesn't respond to the request"
                });
            }
        });
    });

>>>>>>> origin/master
    window.app = app;
}(Framework7, Dom7, domoticz));