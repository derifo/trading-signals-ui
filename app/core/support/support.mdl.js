'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.support', [ 'ui.router' ])
	.config(function ($stateProvider) {

		$stateProvider.state('app.support', {
			url: 'support',
			abstract: true
		});

		$stateProvider.state('app.support.faq', {
			url: '/faq',
			views: {
				'content@app': {
					templateUrl: '/app/core/support/faq/faq.tpl.html',
					controller: 'app.core.support.faqCtrl'
				}
			}
		});
	});
