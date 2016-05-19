'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.signals', [ 'ui.router' ])
	.config(function ($stateProvider) {

		$stateProvider.state('app.signals', {
			url: 'signals',
			abstract: true
		});

		$stateProvider.state('app.signals.live', {
			url: '',
			views: {
				'content@': {
					templateUrl: '/app/core/signals/live/live.tpl.html',
					controller: 'app.core.signals.liveCtrl'
				}
			}
		});

		$stateProvider.state('app.signals.history', {
			url: '/history',
			views: {
				'content@': {
					templateUrl: '/app/core/signals/history/history.tpl.html',
					controller: 'app.core.signals.historyCtrl'
				}
			}
		});
	});
