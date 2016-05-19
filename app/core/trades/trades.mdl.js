'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.trades', [ 'ui.router' ])
	.config(function ($stateProvider) {

		$stateProvider.state('app.trades', {
			url: 'trades',
			abstract: true
		});

		$stateProvider.state('app.trades.open', {
			url: '',
			views: {
				'content@': {
					templateUrl: '/app/core/trades/open/open.tpl.html',
					controller: 'app.core.trades.openCtrl'
				}
			}
		});

		$stateProvider.state('app.trades.history', {
			url: '/history',
			views: {
				'content@': {
					templateUrl: '/app/core/trades/history/history.tpl.html',
					controller: 'app.core.trades.historyCtrl'
				}
			}
		});
	});
