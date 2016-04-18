'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.charts').controller('app.charts.customersVmap',
	function ($scope, $rootScope, customersAPI) {

		$scope.$on('filterClicked', function (e, filters) {
			customersAPI.getCountryStats(filters).$promise.then(function (results) {

				var data = {},
					statusesData = {};

				$.each(results, function (idx, val) {
					data[val.iso2.toLowerCase()] = val.leads;
					statusesData[val.iso2.toLowerCase()] = val;
				});

				var $el = $('#customer-vmap');
				var $parent = $el.parent();
				$el.remove();

				$parent.append(
					$('<div></div>', { id: 'customer-vmap' })
				);

				// TgODO. create directive
				$('#customer-vmap').vectorMap({
					map: 'world_en',
					backgroundColor: '#a5bfdd',
					borderColor: '#818181',
					borderOpacity: 0.25,
					borderWidth: 1,
					color: '#f4f3f0',
					enableZoom: true,
					hoverColor: '#c9dfaf',
					hoverOpacity: null,
					normalizeFunction: 'linear',
					scaleColors: ['#C8EEFF', '#006491'],
					values: data,
					showTooltip: true,
					onLabelShow: function (event, label, code) {
						var customers = statusesData[code] ? statusesData[code].customers : 0;
						var players = statusesData[code] ? statusesData[code].players : 0;
						var conversion = customers > 0 ? 100 / customers * players : 0;
						conversion = (conversion + '').substr(0, 5);

						label.append('<div>Customers: ' + customers + '</div>');
						label.append('<div>Players: ' + players + '</div>');
						label.append('<div class="text-warning">Conversion: ' + conversion + '%</div>');

					}
				});
			});
		});
	});
