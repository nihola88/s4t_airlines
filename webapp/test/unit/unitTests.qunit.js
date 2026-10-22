/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"s4t_airlines/s4t_airlines/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
