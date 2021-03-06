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
			getStatistics: { method: 'GET', url: sConfig.api + 'api/traders/traders/stats' },
			save: { method: 'POST', params: { id: "@id" } },
			login: { method: 'POST', url: sConfig.api + 'api/traders/login' },
			register: { method: 'POST', url: sConfig.api + 'api/traders/register' },
			logout: { method: 'POST', url: sConfig.api + 'api/traders/logout' }
		});
	});
