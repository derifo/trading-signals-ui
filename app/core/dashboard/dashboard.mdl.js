'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.dashboard', [ 'ui.router' ])
	.config(function ($stateProvider) {

		$stateProvider.state('app.dashboard', {
			url: '',
			data: {
				signalsList: { limit: 6 }
			},
			views: {
				'content@app': {
					templateUrl: '/app/core/dashboard/dashboard.tpl.html',
					controller: 'app.core.dashboardCtrl'
				},
				'tiles@app.dashboard': {
					templateUrl: '/app/common/states/charts/tiles/tiles.tpl.html',
					controller: 'app.charts.tiles'
				},
				'membersTrade@app.dashboard': {
					templateUrl: '/app/common/states/charts/members-trades/members-trades.tpl.html',
					controller: 'app.charts.membersTrades'
				},
				'signalsList@app.dashboard': {
					templateUrl: '/app/common/states/signals/list/list.tpl.html',
					controller: 'app.signals.list'
				},
				'signalInfo@app.dashboard': {
					templateUrl: '/app/common/states/signals/signal/signal.tpl.html',
					controller: 'app.signals.signal'
				},
				'openTrades@app.dashboard': {
					templateUrl: '/app/common/states/grids/open-trades/open-trades.tpl.html',
					controller: 'app.grids.openTrades'
				}
			}
		});
	});
