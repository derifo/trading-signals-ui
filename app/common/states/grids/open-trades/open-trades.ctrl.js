'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.grids').controller('app.grids.openTrades',
	function ($scope, tradesAPI, assetFeedService) {
		$scope.rowCollection = tradesAPI.query({ tradeStatus: 1 });

		$scope.getters = {
			firstName: function (value) {
				//this will sort by the length of the first name string
				return value.firstName.length;
			}
		};
		
		var subscribe = assetFeedService.subscribe(function (asset, data, current) {
		
		});

		subscribe.setAsset(2);
	});
