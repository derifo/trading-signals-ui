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
		'smart-table',
		'toastr',
		'daterangepicker',
		'countUpModule',
		'easypiechart',
		'ngNotify',
		'angular-loading-bar',
		'ui.bootstrap-slider',
		'app.common.services',
		'app.common.directives',
		'app.states.layout',
		'app.states.charts',
		'app.states.signals',
		'app.states.grids',
		'app.core.dashboard',
		'app.core.signals',
		'app.core.trades',
		'app.core.security'
	])
	.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
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
	.run(function ($rootScope, $http, $state, ngNotify) {
		ngNotify.config({
			position: 'top',
			duration: 4000,
			html: true
		});

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
