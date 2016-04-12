'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.customers')
	.controller('app.core.customers.listCtrl',
	function ($scope, customersAPI) {
		$scope.rowCollection = customersAPI.query();
	});
