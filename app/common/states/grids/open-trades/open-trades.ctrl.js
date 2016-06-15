'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.grids').controller('app.grids.openTrades',
	function ($rootScope, $scope, tradesAPI, assetFeedService) {
		$scope.rowCollection = tradesAPI.query({ tradeStatus: 1 });

		$scope.getters = {
			firstName: function (value) {
				//this will sort by the length of the first name string
				return value.firstName.length;
			}
		};

		$rootScope.$on('traderSignalBought', function() {
			$scope.rowCollection = tradesAPI.query({ tradeStatus: 1 });
		});

	});
