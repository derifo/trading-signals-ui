'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.charts').controller('app.charts.tiles',
	function ($scope, tradersAPI, $rootScope) {

		var updateStatistics = function () {
			tradersAPI.getStatistics().$promise.then(function (res) {
				res.win_rate = parseFloat(100 / res.total_trades * res.wins).toFixed(2);
				$scope.stats = res;
			});
		};

		updateStatistics();
		$rootScope.$on('traderSignalBought', updateStatistics);
	});
