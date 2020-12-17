/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zxft/xftms/hello_world/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});