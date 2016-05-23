'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.common.services')
	.factory('signalsAPI', function ($resource, $http) {

		return $resource(sConfig.api + 'api/traders/signals/:id', {}, {
			query: { method: 'GET', isArray: true },
			buy: { method: 'POST', url: sConfig.api + 'api/traders/buy' },
			save: { method: 'POST', params: { id: "@id" } }
		});
	});
