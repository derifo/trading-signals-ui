'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.profile', [ 'ui.router' ])
	.config(function ($stateProvider) {

		$stateProvider.state('app.profile', {
			url: 'profile',
			data: {
				signalsList: { limit: 6 }
			},
			views: {
				'content@': {
					templateUrl: '/app/core/dashboard/dashboard.tpl.html',
					controller: 'app.core.dashboardCtrl'
				}
			}
		});
	});
