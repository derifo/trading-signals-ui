'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.security')
	.controller('app.core.security.loginCtrl',
	function ($scope, $timeout, $state) {
		$scope.formSubmitted = function() {
			$scope.submitted = true;

			$timeout(function() {
				$state.transitionTo('app.dashboard.welcome');
			}, 2000);
		}
	});
