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
				'customerStatusChart@app.customers.breakdown': {
					templateUrl: '/app/common/states/charts/customers-status/customers-status.tpl.html',
					controller: 'app.charts.customersStatus'
				},
				'customerVmap@app.customers.breakdown': {
					templateUrl: '/app/common/states/charts/customers-vmap/customers-vmap.tpl.html',
					controller: 'app.charts.customersVmap'
				}
			}
		});

		ChartJsProvider.setOptions({
			responsive: true,
			maintainAspectRatio: false
		});
	});
