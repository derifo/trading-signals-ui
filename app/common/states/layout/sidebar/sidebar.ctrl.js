'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.layout')
	.controller('app.states.layout.sidebarCtrl', function ($scope, $interval, $state) {
		$scope.$state = $state;
	});
