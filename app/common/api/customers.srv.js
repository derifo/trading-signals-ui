'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.common.services')
	.factory('customersAPI', function ($resource) {
		var transformResponse = function (data, headersGetter) {
			data = JSON.parse(data);
			$.each(data, function (idx, val) {
				data[idx].tracking = JSON.parse(data[idx].tracking);
			});

			return data;
		};

		return $resource(sConfig.api + 'api/aff-ui/customers/:id', {}, {
			query: { method: 'GET', isArray: true, transformResponse: transformResponse },
			save: { method: 'POST', params: { id: "@id" } }
		});
	});
