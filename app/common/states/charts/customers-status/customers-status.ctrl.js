'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.charts').controller('app.charts.customersStatus',
	function ($scope, customersAPI) {

		$scope.labels = [];
		$scope.series = [ 'Customers', 'Players' ];

		$scope.$on('filterClicked', function (e, filters) {

			customersAPI.getStatusStats(filters).$promise.then(function (results) {
				var data = [[], []], labels = [];

				results.forEach(function (val) {
					labels.push(
						val.year + '-'
						+ (( val.month > 9 ? '': '0' ) + val.month) + '-'
						+ ( val.day > 9 ? '': '0' ) + val.day);

					data[0].push(parseInt(val.customers));
					data[1].push(parseInt(val.players));
				});

				$scope.data = data;
				$scope.labels = labels;
			});
		});
	});

// 039411101 85845733 8519363