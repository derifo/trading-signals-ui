'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.charts').controller('app.charts.statistics',
	function ($scope, tradersAPI) {
		tradersAPI.getStatistics().$promise.then(function (res) {

		});

		$scope.percent = 65;
		$scope.options = {
			easing: 'easeOutElastic',
			delay: 3000,
			barColor: '#69c',
			trackColor: '#ace',
			scaleColor: false,
			lineWidth: 16,
			trackWidth: 16,
			lineCap: 'butt'
		};

		$('.epie').easyPieChart({
			//your options goes here
		});
	});
