'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.charts').controller('app.charts.customersTile',
	function ($scope, customersAPI) {

		$scope.$on('filterClicked', function (e, filters) {
			$scope.data = {
				conversion: 0,
				customers: 0,
				players: 0
			};

			// TODO. Add new ui view for the tiles
			customersAPI.getStatusStats(filters).$promise.then(function (results) {
				results.forEach(function (val) {
					$scope.data.customers += parseInt(val.customers);
					$scope.data.players += parseInt(val.players);
				});

				$scope.data.conversion = ((100 / $scope.data.customers) * $scope.data.players)
			});
		});
	});
