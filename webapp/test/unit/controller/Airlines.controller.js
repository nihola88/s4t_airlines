/*global QUnit*/

sap.ui.define([
	"s4t_airlines/s4t_airlines/controller/Airlines.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Airlines Controller");

	QUnit.test("I should test the Airlines controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
