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
	function ($scope, merchantsSignalsAPI, signalsAPI, $state, assetFeedService, $filter, $rootScope) {

		$scope.selected = null;
		$scope.buyOptions = {
			amount: 50
		};

		$scope.openIndex = 0;
		$scope.signals = merchantsSignalsAPI.query($state.current.data.signalsList).$promise.then(function (res) {
			$scope.signals = res;
			$scope.selected = res[0];
			$scope.$emit('showSignal', res[0]);
		});

		$scope.signalClicked = function (signal) {
			$scope.selected = signal;
			$scope.$emit('showSignal', signal);
		}
	});
