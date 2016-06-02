'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 *
 * AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.signals').controller('app.signals.signal',
	function ($scope, merchantsSignalsAPI, signalsAPI, $state, assetFeedService, $filter, $rootScope) {
		var self = this;

		self.subscribeFeed = assetFeedService.subscribe(function (asset, data, current) {
			var signal = $scope.signal;
			$scope.$apply(function() {
				signal.chartData = [];
				signal.rateStatus = $scope.currentRate > current ? 'up' : 'down';
				signal.currentRate = current;
				angular.forEach(data, function (value, idx) {
					idx = idx.replace(' ', 'T');
					signal.chartData.push([
						$filter('date')(Date.parse(idx), 'yyyy-MM-dd HH:mm:ss'),
						parseFloat(value.close)
					]);
				});

				$scope.signal = signal;
			});
		});

		var subscribe = function (signal) {
			self.subscribeFeed.setAsset(signal.signal.asset.socket_id);
		};

		$rootScope.$on('showSignal', function(state, signal) {
			$scope.signal = signal;
			$scope.signal.chartData = [];
			subscribe($scope.signal);
			$scope.buySignal = function (signal) {
				$scope.buyOptions.buying = true;

				var data = {
					signal_id: signal.signal.id,
					amount: $scope.buyOptions.amount
				};

				signalsAPI.buy(data).$promise.then(function (res) {
					if(res.status == true) {
						$rootScope.$emit('traderSignalBought');
					}
					else {
					}

					$scope.buyOptions.buying = false;
				});
			}
		});
	});
