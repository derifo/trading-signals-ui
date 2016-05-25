'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular.module('app', [
		'ngAnimate',
		'ngMessages',
		'ngResource',
		'ngTouch',
		'ngRoute',
		'smart-table',
		'ui.router',
		'toastr',
		'daterangepicker',
		'countUpModule',
		'easypiechart',
		'ngNotify',
		'angular-loading-bar',
		'ui.bootstrap-slider',
		'app.common.services',
		'app.common.directives',
		'app.states.layout',
		'app.states.charts',
		'app.states.signals',
		'app.core.dashboard',
		'app.core.signals',
		'app.core.trades',
		'app.core.security'
	])
	.config(["$httpProvider", "$stateProvider", "$urlRouterProvider", function ($httpProvider, $stateProvider, $urlRouterProvider) {
		$httpProvider.defaults.useXDomain = true;
		$httpProvider.defaults.withCredentials = true;

		delete $httpProvider.defaults.headers.common['X-Requested-With'];


		$httpProvider.defaults.headers.common = {};
		$httpProvider.defaults.headers.post = {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		};

		$httpProvider.defaults.headers.put = {};
		$httpProvider.defaults.headers.patch = {};

		$httpProvider.defaults.transformRequest = function(data){
			if (data === undefined) {
				return data;
			}

			return $.param(data);
		};

		// Redirect to default page
		$urlRouterProvider.otherwise('/');
	}])
	.run(["$rootScope", "$http", "$state", "ngNotify", function ($rootScope, $http, $state, ngNotify) {
		ngNotify.config({
			position: 'top',
			duration: 4000,
			html: true
		});

		$http.defaults.transformResponse.unshift(function (data, headers, code) {
			if (code == 401 && $state.current.name != 'app.security.login') {
				$state.go('app.security.login');
			}

			return data;
		});

		$rootScope.$on('$stateChangeSuccess', function () {
			// Making a login check
			if ($state.current.name != 'app.security.login') {
				$http.get(sConfig.api + 'api/traders/is_logged');
			}
		});

		$http.appendTransform = function (defaults) {

			// We can't guarantee that the default transformation is an array
			defaults = angular.isArray(defaults) ? defaults : [defaults];

			// Append the new transformation to the defaults
			return defaults.concat($http.defaults.transformResponse);
		};
	}]);

'use strict';

// Directives module
angular.module('app.common.directives', []);

'use strict';

// Resources module
angular.module('app.common.services', [ 'ngResource' ]);

'use strict';

// Resources module
angular.module('app.common.filters', [ ]);

/**
 * Created by roee on 2/1/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.states.charts', []);
/**
 * Created by roee on 2/1/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.states.layout', [
    'ui.router'
])
.config(["$stateProvider", function ($stateProvider) {
    $stateProvider.state('app', {
        url: '/',
        abstract: true,
        views: {
            'header@': {
                templateUrl: 'app/common/states/layout/header/header.tpl.html',
                controller: 'app.states.layout.headerCtrl'
            },
            'navbar@': {
                templateUrl: 'app/common/states/layout/navbar/navbar.tpl.html',
                controller: 'app.states.layout.navbarCtrl'
            }
        }
    });
}])
.run(["$rootScope", function($rootScope) {
    $rootScope.image = function(img) {
        return '/images/' + img
    }
}]);
/**
 * Created by roee on 2/1/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.states.signals', []);
'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.dashboard', [ 'ui.router' ])
	.config(["$stateProvider", function ($stateProvider) {

		$stateProvider.state('app.dashboard', {
			url: '',
			data: {
				signalsList: { limit: 5 }
			},
			views: {
				'content@': {
					templateUrl: '/app/core/dashboard/dashboard.tpl.html',
					controller: 'app.core.dashboardCtrl'
				},
				'tiles@app.dashboard': {
					templateUrl: '/app/common/states/charts/tiles/tiles.tpl.html',
					controller: 'app.charts.tiles'
				},
				'statistics@app.dashboard': {
					templateUrl: '/app/common/states/charts/statistics/statistics.tpl.html',
					controller: 'app.charts.statistics'
				},
				'signalsList@app.dashboard': {
					templateUrl: '/app/common/states/signals/list/list.tpl.html',
					controller: 'app.signals.list'
				},
				'membersTrades@app.dashboard': {
					templateUrl: '/app/common/states/charts/members-trades/members-trades.tpl.html',
					controller: 'app.charts.membersTrades'
				}
			}
		});
	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.security', [
		'ui.router'
	])
	.config(["$stateProvider", function ($stateProvider) {

		$stateProvider.state('app.security', {
			url: 'auth/',
			abstract: true
		});

		$stateProvider.state('app.security.login', {
			url: 'login',
			views: {
				'content@': {
					templateUrl: '/app/core/security/login/login.tpl.html',
					controller: 'app.core.security.loginCtrl'
				},
				'navbar@': {
					templateUrl: 'app/common/states/layout/navbar/navbar.tpl.html',
					controller: 'app.states.layout.navbarCtrl'
				}
			}
		});
	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.signals', [ 'ui.router' ])
	.config(["$stateProvider", function ($stateProvider) {

		$stateProvider.state('app.signals', {
			url: 'signals',
			abstract: true
		});

		$stateProvider.state('app.signals.live', {
			url: '',
			views: {
				'content@': {
					templateUrl: '/app/core/signals/live/live.tpl.html',
					controller: 'app.core.signals.liveCtrl'
				}
			}
		});

		$stateProvider.state('app.signals.history', {
			url: '/history',
			views: {
				'content@': {
					templateUrl: '/app/core/signals/history/history.tpl.html',
					controller: 'app.core.signals.historyCtrl'
				}
			}
		});
	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.trades', [ 'ui.router' ])
	.config(["$stateProvider", function ($stateProvider) {

		$stateProvider.state('app.trades', {
			url: 'trades',
			abstract: true
		});

		$stateProvider.state('app.trades.open', {
			url: '',
			views: {
				'content@': {
					templateUrl: '/app/core/trades/open/open.tpl.html',
					controller: 'app.core.trades.openCtrl'
				}
			}
		});

		$stateProvider.state('app.trades.history', {
			url: '/history',
			views: {
				'content@': {
					templateUrl: '/app/core/trades/history/history.tpl.html',
					controller: 'app.core.trades.historyCtrl'
				}
			}
		});
	}]);

/**
 * Created by roee on 23/05/2016.
 */
angular.module('app.common.directives')
    .directive('candleStick', ["$timeout", function ($timeout) {
        return {
            restrict: 'E',
            scope: { csData: '=', options: '=' },
            link: function (scope, element) {
                element.addClass('candle-stick-custom');
                function updateChart(csData, options) {
                    var chart = AmCharts.makeChart(element[0], {
                        "type": "serial",
                        "theme": "light",
                        "dataDateFormat": "YYYY-MM-DD HH:NN:SS",
                        "valueAxes": [{
                            "position": "left",
                            "guides": [
                                {
                                    "toValue": scope.options.max_rate,
                                    "value": scope.options.min_rate,
                                    lineColor: "blue",
                                    lineAlpha: 1,
                                    fillAlpha: 0.07,
                                    fillColor: "blue",
                                    dashLength: 2,
                                    inside: true,
                                },
                                {
                                    "toValue": scope.options.open_rate,
                                    "value": scope.options.open_rate,
                                    lineColor: "navy",
                                    lineAlpha: 1,
                                    dashLength: 2,
                                    inside: true,
                                    labelRotation: 90,
                                    fontSize: "15",
                                    label: "Signal Rate"
                                }]
                        }],
                        "graphs": [{
                            "id": "g1",
                            "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
                            "closeField": "close",
                            "fillColors": "#db4c3c",
                            "highField": "high",
                            "lineColor": "#000000",
                            "lineAlpha": 1,
                            "lowField": "low",
                            "fillAlphas": 0.9,
                            "negativeFillColors": "green",
                            "negativeLineColor": "green",
                            "openField": "open",
                            "title": "Price:",
                            "type": "candlestick",
                            "valueField": "close"
                        }],
                        "chartScrollbar": {
                            "graph": "g1",
                            "graphType": "line",
                            "scrollbarHeight": 30
                        },
                        "chartCursor": {
                            "valueLineEnabled": true,
                            "valueLineBalloonEnabled": true
                        },
                        "categoryField": "date",
                        "categoryAxis": {
                            "parseDates": true,
                            "minPeriod": "10mm"
                        },
                        "dataProvider": csData,
                        "export": {
                            "enabled": true,
                            "position": "bottom-right"
                        }
                    });

                    chart.addListener( "rendered", zoomChart );
                    zoomChart();


                    function zoomChart() {
                        // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
                        chart.zoomToIndexes( chart.dataProvider.length - 10, chart.dataProvider.length - 1 );
                    }
                }

                var dataReady = false;
                scope.$watch('csData', function() {
                    var options = scope.options || {};
                    console.log('DATA:' + JSON.stringify(scope.csData));
                    updateChart(scope.csData, options);

                });
            }
        }
    }]);
/**
 * Created by roee on 18/04/2016.
 */
angular.module('app.common.directives')
    .directive('countdown', ["$interval", function ($interval) {
        return {
            restrict: 'A',
            scope: { endTime: '@' },
            link: function (scope, element) {
                function getTimeRemaining(endtime) {
                    var t = Date.parse(endtime) - Date.parse(new Date());
                    var seconds = Math.floor((t / 1000) % 60);
                    var minutes = Math.floor((t / 1000 / 60) % 60);
                    var hours = Math.floor(t / (1000 * 60 * 60));

                    return {
                        'total': t,
                        'hours': hours > 9 ? hours : '0' + hours,
                        'minutes': minutes > 9 ? minutes : '0' + minutes,
                        'seconds': seconds > 9 ? seconds : '0' + seconds
                    };
                }

                function initializeClock(endtime) {
                    function updateClock() {
                        var t = getTimeRemaining(endtime);

                        element.text(t.hours + ':' + t.minutes + ':' + t.seconds);
                        if (t.total <= 0) {
                            clearInterval(timeinterval);
                        }
                    }

                    updateClock();
                    var timeinterval = $interval(updateClock, 1000);
                }

                initializeClock(new Date(Date.parse(scope.endTime)));
            }
        };
    }]
);

/**
 * Created by roee on 18/04/2016.
 */
// angular.module('app.common.directives')
//     .directive("countUp", function() {
//     return {
//         restrict: "A",
//         require: "ngModel",
//         scope: true,
//         link: function(scope, element, attrs) {
//             var animationLength, numDecimals;
//             numDecimals = 0;
//             animationLength = 4;
//             if ((attrs.numDecimals != null) && attrs.numDecimals >= 0) {
//                 numDecimals = attrs.numDecimals;
//             }
//             if ((attrs.animationLength != null) && attrs.animationLength > 0) {
//                 animationLength = attrs.animationLength;
//             }
//             return scope.$watch(attrs.ngModel, function(newVal, oldVal) {
//                 if (oldVal == null) {
//                     oldVal = 0;
//                 }
//                 if ((newVal != null) && newVal !== oldVal) {
//                     return new CountUp(attrs.id, oldVal, newVal, numDecimals, animationLength).start();
//                 }
//             });
//         }
//     };
// });
/**
 * Created by roee on 18/04/2016.
 */
angular.module('app.common.directives')
    .directive('score', function () {
        return {
            restrict: 'A',
            scope: { score: '@' },
            link: function (scope, element) {
                var score = scope.score / 20;

                for(var i = 1; i <= 5; i += 1) {
                    if (score >= i){
                        element.append($('<span></span>', { 'class': 'fa fa-star' }))
                    }
                    else if (score + 0.5 >= i)
                    {
                        element.append($('<span></span>', { 'class': 'fa fa-star-half-o' }))
                    }
                    else {
                        element.append($('<span></span>', { 'class': 'fa fa-star-o' }))
                    }
                }
            }
        };
    }
);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.common.services')
	.factory('merchantsSignalsAPI', ["$resource", function ($resource) {

		return $resource(sConfig.api + 'api/traders/merchants/signals/:id', {}, {
			query: { method: 'GET', isArray: true },
			save: { method: 'POST', params: { id: "@id" } }
		});
	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.common.services')
	.factory('signalsAPI', ["$resource", "$http", function ($resource, $http) {

		return $resource(sConfig.api + 'api/traders/signals/:id', {}, {
			query: { method: 'GET', isArray: true },
			buy: { method: 'POST', url: sConfig.api + 'api/traders/buy' },
			save: { method: 'POST', params: { id: "@id" } }
		});
	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.common.services')
	.factory('tradersAPI', ["$resource", "$http", function ($resource, $http) {

		return $resource(sConfig.api + 'api/traders/traders', {}, {
			query: { method: 'GET', isArray: true },
			getStatistics: { method: 'GET', url: sConfig.api + 'api/traders/traders/stats' },
			save: { method: 'POST', params: { id: "@id" } },
			login: { method: 'POST', url: sConfig.api + 'api/traders/login' },
			logout: { method: 'POST', url: sConfig.api + 'api/traders/logout' }
		});
	}]);

/**
 * Created by roee on 22/05/2016.
 */
angular.module('app.common.services')
    .service('assetFeed', ["$timeout", function ($timeout) {
        var socket = io('http://52.48.242.152:8080');

        return {
            subscribe: function (asset, callback) {

                socket.on('feed_' + asset, function (data, current) {
                    data = JSON.parse(data);
                    callback(data, current);
                });

                socket.emit('feed-all')
            }
        }
    }]);
'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.common.directives')
	.directive('compareTo', function() {
		return {
			require: "ngModel",
			scope: {
				otherModelValue: "=compareTo"
			},
			link: function(scope, element, attributes, ngModel) {

				ngModel.$validators.compareTo = function(modelValue) {
					return modelValue == scope.otherModelValue;
				};

				scope.$watch("otherModelValue", function() {
					if (document.activeElement == element[0])
					{
						ngModel.$validate();
					}
				});
			}
		};
	});

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.common.services')
    .constant('userToken', {});


'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.charts').controller('app.charts.membersTrades',
	["$scope", "tradersAPI", function ($scope, tradersAPI) {

	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.charts').controller('app.charts.statistics',
	["$scope", "tradersAPI", function ($scope, tradersAPI) {
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
	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.charts').controller('app.charts.tiles',
	["$scope", "tradersAPI", function ($scope, tradersAPI) {
		tradersAPI.getStatistics().$promise.then(function (res) {
			res.win_rate = parseFloat(100 / res.total_trades * res.wins).toFixed(2);
			$scope.stats = res;
		})
	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.layout')
	.controller('app.states.layout.headerCtrl', ["$scope", "$interval", "$state", function ($scope, $interval, $state) {
		$scope.$state = $state;
	}]);

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
	["$scope", "merchantsSignalsAPI", "signalsAPI", "$state", "assetFeed", "$filter", "ngNotify", function ($scope, merchantsSignalsAPI, signalsAPI, $state, assetFeed, $filter, ngNotify) {

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

			signalsAPI.buy(data).$promise.then(function () {
				ngNotify.set('Your trade has successfully placed', 'success');
				$scope.buyOptions.buying = false;
			});
		}
	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.states.layout')
	.controller('app.states.layout.navbarCtrl', ["$scope", "tradersAPI", "$state", function ($scope, tradersAPI, $state) {

		$scope.logout = function () {
			tradersAPI.logout().$promise.then(function () {
				$state.transitionTo('app.security.login');
			});
		}
	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.dashboard')
	.controller('app.core.dashboardCtrl',
	["$scope", "tradersAPI", "$timeout", function ($scope, tradersAPI, $timeout) {
	
	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.security')
	.controller('app.core.security.loginCtrl',
	["$scope", "$timeout", "tradersAPI", "$state", function ($scope, $timeout, tradersAPI, $state) {
		$scope.formSubmitted = function() {
			var credentials = { email: $scope.credentials.email, password: $scope.credentials.password };
			$scope.submitted = true;

			tradersAPI.login(credentials).$promise.then(function (res) {
				if(res.error) {
					$scope.error = 'Invalid email or password combination'
				}
				else {
					$state.transitionTo('app.dashboard');
				}
			});
		}
	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.signals')
	.controller('app.core.signals.historyCtrl',
	["$scope", "tradersAPI", "$timeout", function ($scope, tradersAPI, $timeout) {

	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.dashboard')
	.controller('app.core.signals.liveCtrl',
	["$scope", "tradersAPI", "$timeout", function ($scope, tradersAPI, $timeout) {

	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.trades')
	.controller('app.core.trades.historyCtrl',
	["$scope", "tradersAPI", "$timeout", function ($scope, tradersAPI, $timeout) {

	}]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.dashboard')
	.controller('app.core.trades.openCtrl',
	["$scope", "tradersAPI", "$timeout", function ($scope, tradersAPI, $timeout) {

	}]);
