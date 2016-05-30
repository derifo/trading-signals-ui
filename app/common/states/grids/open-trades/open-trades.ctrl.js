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
				$scope.rates[asset] = current;
			});

			return $scope.rates[asset];
		};
	});
