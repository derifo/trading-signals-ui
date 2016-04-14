'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular.module('app', [
		'ngAnimate',
		'ngMessages',
		'ngResource',
		'ngTouch',
		'ngRoute',
		'smart-table',
		'ui.router',
		'toastr',
		'angular-loading-bar',
		'app.common.services',
		'app.common.directives',
		'app.states.layout',
		'app.core.customers',
		'app.core.security'
	])
	.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
		$stateProvider.state('app', {
			url: '/',
			abstract: true
		});

		$httpProvider.defaults.useXDomain = true;

		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		// Redirect to default page
		$urlRouterProvider.otherwise('/');
	})
	.run(function ($http) {
		$http.post('http://localhost:8000/api/aff-ui/login', {
			email: 'odeliaodi@gmail.com',
			password: '123456',
			headers: {
				"Content-Type": "multipart/form-data"
			}
		});
	});
