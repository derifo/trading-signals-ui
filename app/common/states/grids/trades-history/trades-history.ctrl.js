'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.grids').controller('app.grids.tradesHistory',
	function ($scope, tradesAPI, assetFeed) {
		$scope.rowCollection = tradesAPI.query({ tradeStatus: [ 2 ,3 ] });

		$scope.rates = {};
		$scope.getRate = function (asset) {
			$scope.rates[asset] = $scope.rates[asset] || 0;
			assetFeed.subscribe(asset, function (data, current) {
				$scope.rates[asset] = current;
			});

			return $scope.rates[asset];
		};
	});
