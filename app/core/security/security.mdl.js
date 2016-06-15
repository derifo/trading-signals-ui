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

		$stateProvider.state('security', {
			url: '/auth/',
			abstract: true
		});

		$stateProvider.state('security.login', {
			url: 'login',
			views: {
				'layout@': {
					templateUrl: '/app/core/security/login/login.tpl.html',
					controller: 'app.core.security.loginCtrl'
				}
			}
		});

		$stateProvider.state('security.signup', {
			url: 'sign-up',
			views: {
				'layout@': {
					templateUrl: '/app/core/security/signup/signup.tpl.html',
					controller: 'app.core.security.signupCtrl'
				}
			}
		});
	});
