'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.common.services')
	.factory('affiliatesAPI', function ($resource, $http) {

		return $resource(sConfig.api + 'api/aff-ui/affiliates', {}, {
			query: { method: 'GET', isArray: true },
			getSources: { method: 'GET', isArray: true, url: sConfig.api + 'api/aff-ui/sources' },
			save: { method: 'POST', params: { id: "@id" } },
			login: { method: 'POST', url: sConfig.api + 'api/aff-ui/login' },
			logout: { method: 'POST', url: sConfig.api + 'api/aff-ui/logout' }
		});
	});
