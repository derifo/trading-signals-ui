'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.common.services')
	.factory('tradersAPI', function ($resource, $http) {

		return $resource(sConfig.api + 'api/traders/traders', {}, {
			query: { method: 'GET', isArray: true },
			getSources: { method: 'GET', isArray: true, url: sConfig.api + 'api/traders/sources' },
			save: { method: 'POST', params: { id: "@id" } },
			login: { method: 'POST', url: sConfig.api + 'api/traders/login' },
			logout: { method: 'POST', url: sConfig.api + 'api/traders/logout' }
		});
	});
