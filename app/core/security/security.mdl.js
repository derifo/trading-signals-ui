'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.security', [
		'ui.router'
	])
	.config(function ($stateProvider) {
		$stateProvider.state('app.security.login', {
			url: 'login',
			views: {
				'content@': {
					templateUrl: '/app/core/security/login/login.tpl.html',
					controller: 'app.core.security.loginCtrl'
				}
			}
		});
	});
