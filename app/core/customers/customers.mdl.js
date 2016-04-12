'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.customers', [ 'ui.router' ])
	.config(function ($stateProvider) {

		$stateProvider.state('app.customers.list', {
			url: '',
			views: {
				'content@': {
					templateUrl: '/app/core/customers/list/list.tpl.html',
					controller: 'app.core.customers.listCtrl'
				}
			}
		});
	});
