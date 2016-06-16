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
			data: {
				tiles: {
					colDefinition: 'col-xs-12'
				}	
			},
			views: {
				'content@app': {
					templateUrl: '/app/core/trades/open/open.tpl.html',
					controller: 'app.core.trades.openCtrl'
				},
				'grid@app.trades.open': {
					templateUrl: '/app/common/states/grids/open-trades/open-trades.tpl.html',
					controller: 'app.grids.openTrades'
				},
				'tiles@app.trades.open': {
					templateUrl: '/app/common/states/charts/tiles/tiles.tpl.html',
					controller: 'app.charts.tiles'
				}
			}
		});

		$stateProvider.state('app.trades.history', {
			url: '/history',
			data: {
				tiles: {
					colDefinition: 'col-xs-12'
				}
			},
			views: {
				'content@app': {
					templateUrl: '/app/core/trades/history/history.tpl.html',
					controller: 'app.core.trades.historyCtrl'
				},
				'grid@app.trades.history': {
					templateUrl: '/app/common/states/grids/trades-history/trades-history.tpl.html',
					controller: 'app.grids.tradesHistory'
				},
				'tiles@app.trades.history': {
					templateUrl: '/app/common/states/charts/tiles/tiles.tpl.html',
					controller: 'app.charts.tiles'
				}
			}
		});
	});
