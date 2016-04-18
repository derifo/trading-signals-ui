'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.customers')
	.controller('app.core.customers.breakdownCtrl',
	function ($scope, customersAPI, affiliatesAPI, $timeout) {

		$scope.datePicker = {
			options: {
				ranges: {
					'Today': [moment(), moment()],
					'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
					'Last 7 Days': [moment().subtract(6, 'days'), moment()],
					'Last 30 Days': [moment().subtract(29, 'days'), moment()],
					'This Month': [moment().startOf('month'), moment().endOf('month')],
					'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
				}
			}
		};

		$scope.filters = {
			source: '0',
			dateRange: {
				startDate: moment().subtract(30, 'days'),
				endDate: moment()
			}
		};

		$scope.sources = affiliatesAPI.getSources();

		$scope.filterSubmitClicked = function () {
			var filters = {
				source: $scope.filters.source  + '',
				from: $scope.filters.dateRange.startDate.format('YYYY-MM-DD HH:mm:ss'),
				to: $scope.filters.dateRange.endDate.format('YYYY-MM-DD HH:mm:ss')
			};

			$scope.$broadcast('filterClicked', filters);
		};
		
		$scope.$on('filterClicked', function (e, filters) {
			$scope.data = {
				conversion: 0,
				customers: 0,
				players: 0
			};

			customersAPI.getStatusStats(filters).$promise.then(function (results) {
				results.forEach(function (val) {
					$scope.data.customers += parseInt(val.customers);
					$scope.data.players += parseInt(val.players);
				});

				$scope.data.conversion = ((100 / $scope.data.customers) * $scope.data.players)
			});
		});

		$timeout(function () {
			$scope.filterSubmitClicked();
		});

	});
