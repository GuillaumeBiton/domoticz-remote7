/*jslint */
/*global Framework7, Dom7 */
(function (Framework7, $$) {
    'use strict';

    var app = new Framework7({
            modalTitle: 'domoticz-remote7',
            animateNavBackIcon: true
        }),
        mainView = app.addView('.view-main', {
            // Enable Dynamic Navbar
            dynamicNavbar: true
        });

    window.app = app;

}(Framework7, Dom7));