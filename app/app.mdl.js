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
		'chart.js',
		'daterangepicker',
		'countUpModule',
		'angular-loading-bar',
		'app.common.services',
		'app.common.directives',
		'app.states.layout',
		'app.states.charts',
		'app.core.customers',
		'app.core.security'
	])
	.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
		$stateProvider.state('app', {
			url: '/',
			abstract: true
		});

		$httpProvider.defaults.useXDomain = true;
		$httpProvider.defaults.withCredentials = true;

		delete $httpProvider.defaults.headers.common['X-Requested-With'];


		$httpProvider.defaults.headers.common = {};
		$httpProvider.defaults.headers.post = {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		};

		$httpProvider.defaults.headers.put = {};
		$httpProvider.defaults.headers.patch = {};

		$httpProvider.defaults.transformRequest = function(data){
			if (data === undefined) {
				return data;
			}

			return $.param(data);
		};

		// Redirect to default page
		$urlRouterProvider.otherwise('/');
	})
	.run(function ($rootScope, $http, $state) {
		$http.defaults.transformResponse.unshift(function (data, headers, code) {
			if (code == 401 && $state.current.name != 'app.security.login') {
				$state.go('app.security.login');
			}

			return data;
		});

		$rootScope.$on('$stateChangeSuccess', function () {
			// Making a login check
			if ($state.current.name != 'app.security.login') {
				$http.get(sConfig.api + 'api/traders/is_logged');
			}
		});

		$http.appendTransform = function (defaults) {

			// We can't guarantee that the default transformation is an array
			defaults = angular.isArray(defaults) ? defaults : [defaults];

			// Append the new transformation to the defaults
			return defaults.concat($http.defaults.transformResponse);
		};
	});
