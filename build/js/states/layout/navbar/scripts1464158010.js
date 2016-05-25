'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.layout')
	.controller('app.states.layout.navbarCtrl', ["$scope", "tradersAPI", "$state", function ($scope, tradersAPI, $state) {

		$scope.logout = function () {
			tradersAPI.logout().$promise.then(function () {
				$state.transitionTo('app.security.login');
			});
		}
	}]);
