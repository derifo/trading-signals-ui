'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.layout')
	.controller('app.states.layout.navbarCtrl', function ($scope, affiliatesAPI, $state) {

		$scope.logout = function () {
			affiliatesAPI.logout().$promise.then(function () {
				$state.transitionTo('app.security.login');
			});
		}
	});
