/*jslint devel:true */
/*global Dom7*/

(function ($$) {
	'use strict';
	
	var Domoticz =  function (options) {
		this.options = options || null;
		this.online = false;
	};
	
	Domoticz.prototype.isOnline =  function () {
		var self = this;
		return $$.ajax({
			url:  this.options.url,
			success: function (data) {
				self.online = true;
			},
			error: function (err) {
				self.online = false;
			}
		});
	};
	
	window.domoticz = new Domoticz({
		url: "http://192.168.4.107:8080/json.htm"
	});
}(Dom7));