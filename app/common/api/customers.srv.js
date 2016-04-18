'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.common.services')
	.factory('customersAPI', function ($resource, $http) {

		var transformResponse = $http.appendTransform(function (data, headersGetter, code) {
			if (code == 200) {
				data = JSON.parse(data);
				$.each(data, function (idx) {
					data[idx].tracking = JSON.parse(data[idx].tracking);
				});
			}

			return data;
		});

		return $resource(sConfig.api + 'api/aff-ui/customers/:id', {}, {
			query: { method: 'GET', isArray: true, transformResponse: transformResponse },
			getStatusStats: { method: 'GET', isArray: true, url: sConfig.api + 'api/aff-ui/customers/status-stats' },
			getCountryStats: { method: 'GET', isArray: true, url: sConfig.api + 'api/aff-ui/customers/by-country' },
			save: { method: 'POST', params: { id: "@id" } }
		});
	});
