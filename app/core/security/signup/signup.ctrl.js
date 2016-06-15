'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.security')
	.controller('app.core.security.signupCtrl',
	function ($scope, $timeout, tradersAPI, $state) {
		$scope.formSubmitted = function() {
			$scope.serverError = false;
			if ($scope.signupForm.$valid) {
				tradersAPI.register($scope.user).$promise.then(function (res) {
					swal({
						title: "Success",
						text: "Your registration to trading signals was successful, Now you are forwarded to buy your first signal",
						timer: 2000,
						type: "success",
						showConfirmButton: false
					});

					$timeout(function () {
						$state.transitionTo('app.dashboard');
					}, 500);

				}, function () {
					$scope.serverError = true;
				})
			}
		}
	});
