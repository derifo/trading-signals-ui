'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * 
 * AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.signals').controller('app.signals.list',
	function ($scope, merchantsSignalsAPI, signalsAPI, $state, assetFeed, $filter, ngNotify, $rootScope) {

		$scope.buyOptions = {
			amount: 50
		};

		$scope.openIndex = 0;
		merchantsSignalsAPI.query($state.current.data.signalsList, function (rows) {
			rows.forEach(function (row) {
				row.chartData = [];
				row.options = {
					max_rate: row.signal.max_entry_rate,
					min_rate: row.signal.min_entry_rate,
					open_rate: row.signal.creation_rate
				};

				assetFeed.subscribe(row.signal.asset.socket_id, function (data, current) {
			        $scope.$apply(function() {
                        row.chartData = [];
                        row.rateStatus = row.currentRate > current ? 'up' : 'down';
                        row.currentRate = current;
                        angular.forEach(data, function (value, idx) {
                            idx = idx.replace(' ', 'T');
                            row.chartData.push({
                                date: $filter('date')(Date.parse(idx), 'yyyy-MM-dd HH:mm:ss'),
                                high: value.high,
                                low: value.low,
                                open: value.open,
                                close: value.close
                            });

                        });
                    });
				});
			});

			$scope.signals = rows;
		});

		$scope.infoClicked = function (index) {
			if ($scope.openIndex == index) return;
			
			$('.signal-info').slideUp(400, function () {
				$(this).not($('.signal-info').eq(index)).addClass('hidden');
			});

			$('.signal-info').eq(index).removeClass('hidden').slideDown();

			$scope.openIndex = index;
		};

		$scope.buySignal = function (signal) {
			$scope.buyOptions.buying = true;

			var data = {
				signal_id: signal.signal.id,
				amount: $scope.buyOptions.amount
			};

			signalsAPI.buy(data).$promise.then(function (res) {
				if(res.status == true) {
					ngNotify.set('Your trade has successfully placed', 'success');
					$rootScope.$emit('traderSignalBought');
				}
				else {
					ngNotify.set('There was an issue placing your trade, please try again later or buy anther signal', 'error');
				}
				$scope.buyOptions.buying = false;
			});
		}
	});
