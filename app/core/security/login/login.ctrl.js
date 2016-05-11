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
	function ($scope, $timeout, tradersAPI, $state) {
		$scope.formSubmitted = function() {
			var credentials = { email: $scope.credentials.email, password: $scope.credentials.password };
			$scope.submitted = true;

			tradersAPI.login(credentials).$promise.then(function (res) {
				if(res.error) {
					$scope.error = 'Invalid email or password combination'
				}
				else {
					$state.transitionTo('app.customers.breakdown');
				}
			});
		}
	});
