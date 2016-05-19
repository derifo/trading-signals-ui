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
	function ($scope, merchantsSignalsAPI, $state) {
		console.log($state);
		$scope.signals = merchantsSignalsAPI.query($state.current.data.signalsList);
	});
