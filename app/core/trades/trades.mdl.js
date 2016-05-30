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
			url: '/open',
			views: {
				'content@': {
					templateUrl: '/app/core/trades/open/open.tpl.html',
					controller: 'app.core.trades.openCtrl'
				},
				'grid@app.trades.open': {
					templateUrl: '/app/common/states/grids/open-trades/open-trades.tpl.html',
					controller: 'app.grids.openTrades'
				}
			}
		});

		$stateProvider.state('app.trades.history', {
			url: '/history',
			views: {
				'content@': {
					templateUrl: '/app/core/trades/history/history.tpl.html',
					controller: 'app.core.trades.historyCtrl'
				},
				'grid@app.trades.history': {
					templateUrl: '/app/common/states/grids/trades-history/trades-history.tpl.html',
					controller: 'app.grids.tradesHistory'
				}
			}
		});
	});
