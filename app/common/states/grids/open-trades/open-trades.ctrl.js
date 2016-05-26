'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.grids').controller('app.grids.openTrades',
	function ($scope, tradesAPI, assetFeed) {
		// $scope.rowCollection = [
		// 	{firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
		// 	{firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
		// 	{firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
		// ];

		$scope.rowCollection = tradesAPI.query();

		$scope.getters={
			firstName: function (value) {
				//this will sort by the length of the first name string
				return value.firstName.length;
			}
		};

		$scope.rates = {};
		$scope.getRate = function (asset) {
			$scope.rates[asset] = $scope.rates[asset] || 0;
			assetFeed.subscribe(asset, function (data, current) {
				$scope.$apply(function() {
					$scope.rates[asset] = current;
				});
			});

			return $scope.rates[asset];
		};
	});
