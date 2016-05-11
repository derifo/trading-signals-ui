'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.customers', [ 'ui.router' ])
	.config(function ($stateProvider, ChartJsProvider) {

		$stateProvider.state('app.customers.breakdown', {
			url: '',
			views: {
				'content@': {
					templateUrl: '/app/core/customers/breakdown/breakdown.tpl.html',
					controller: 'app.core.customers.breakdownCtrl'
				},
				'customerTile@app.customers.breakdown': {
					templateUrl: '/app/common/states/charts/customers-tile/customers-tile.tpl.html',
					controller: 'app.charts.customersTile'
				}
			}
		});

		ChartJsProvider.setOptions({
			responsive: true,
			maintainAspectRatio: false
		});
	});
