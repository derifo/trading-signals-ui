"use strict";angular.module("app",["ngAnimate","ngMessages","ngResource","ngTouch","ngRoute","smart-table","ui.router","toastr","daterangepicker","countUpModule","easypiechart","ngNotify","angular-loading-bar","ui.bootstrap-slider","app.common.services","app.common.directives","app.states.layout","app.states.charts","app.states.signals","app.core.dashboard","app.core.signals","app.core.trades","app.core.security"]).config(["$httpProvider","$stateProvider","$urlRouterProvider",function(a,s,n){a.defaults.useXDomain=!0,a.defaults.withCredentials=!0,delete a.defaults.headers.common["X-Requested-With"],a.defaults.headers.common={},a.defaults.headers.post={"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},a.defaults.headers.put={},a.defaults.headers.patch={},a.defaults.transformRequest=function(a){return void 0===a?a:$.param(a)},n.otherwise("/")}]).run(["$rootScope","$http","$state","ngNotify",function(a,s,n,t){t.config({position:"top",duration:4e3,html:!0}),s.defaults.transformResponse.unshift(function(a,s,t){return 401==t&&"app.security.login"!=n.current.name&&n.go("app.security.login"),a}),a.$on("$stateChangeSuccess",function(){"app.security.login"!=n.current.name&&s.get(sConfig.api+"api/traders/is_logged")}),s.appendTransform=function(a){return a=angular.isArray(a)?a:[a],a.concat(s.defaults.transformResponse)}}]),angular.module("app.common.directives",[]),angular.module("app.common.services",["ngResource"]),angular.module("app.common.filters",[]),angular.module("app.states.charts",[]),angular.module("app.states.layout",["ui.router"]).config(["$stateProvider",function(a){a.state("app",{url:"/","abstract":!0,views:{"header@":{templateUrl:"app/common/states/layout/header/header.tpl.html",controller:"app.states.layout.headerCtrl"},"navbar@":{templateUrl:"app/common/states/layout/navbar/navbar.tpl.html",controller:"app.states.layout.navbarCtrl"}}})}]).run(["$rootScope",function(a){a.image=function(a){return"/images/"+a}}]),angular.module("app.states.signals",[]),angular.module("app.core.dashboard",["ui.router"]).config(["$stateProvider",function(a){a.state("app.dashboard",{url:"",data:{signalsList:{limit:5}},views:{"content@":{templateUrl:"/app/core/dashboard/dashboard.tpl.html",controller:"app.core.dashboardCtrl"},"tiles@app.dashboard":{templateUrl:"/app/common/states/charts/tiles/tiles.tpl.html",controller:"app.charts.tiles"},"statistics@app.dashboard":{templateUrl:"/app/common/states/charts/statistics/statistics.tpl.html",controller:"app.charts.statistics"},"signalsList@app.dashboard":{templateUrl:"/app/common/states/signals/list/list.tpl.html",controller:"app.signals.list"},"membersTrades@app.dashboard":{templateUrl:"/app/common/states/charts/members-trades/members-trades.tpl.html",controller:"app.charts.membersTrades"}}})}]),angular.module("app.core.security",["ui.router"]).config(["$stateProvider",function(a){a.state("app.security",{url:"auth/","abstract":!0}),a.state("app.security.login",{url:"login",views:{"content@":{templateUrl:"/app/core/security/login/login.tpl.html",controller:"app.core.security.loginCtrl"},"navbar@":{templateUrl:"app/common/states/layout/navbar/navbar.tpl.html",controller:"app.states.layout.navbarCtrl"}}})}]),angular.module("app.core.signals",["ui.router"]).config(["$stateProvider",function(a){a.state("app.signals",{url:"signals","abstract":!0}),a.state("app.signals.live",{url:"",views:{"content@":{templateUrl:"/app/core/signals/live/live.tpl.html",controller:"app.core.signals.liveCtrl"}}}),a.state("app.signals.history",{url:"/history",views:{"content@":{templateUrl:"/app/core/signals/history/history.tpl.html",controller:"app.core.signals.historyCtrl"}}})}]),angular.module("app.core.trades",["ui.router"]).config(["$stateProvider",function(a){a.state("app.trades",{url:"trades","abstract":!0}),a.state("app.trades.open",{url:"",views:{"content@":{templateUrl:"/app/core/trades/open/open.tpl.html",controller:"app.core.trades.openCtrl"}}}),a.state("app.trades.history",{url:"/history",views:{"content@":{templateUrl:"/app/core/trades/history/history.tpl.html",controller:"app.core.trades.historyCtrl"}}})}]),angular.module("app.common.services").factory("merchantsSignalsAPI",["$resource",function(a){return a(sConfig.api+"api/traders/merchants/signals/:id",{},{query:{method:"GET",isArray:!0},save:{method:"POST",params:{id:"@id"}}})}]),angular.module("app.common.services").factory("signalsAPI",["$resource","$http",function(a,s){return a(sConfig.api+"api/traders/signals/:id",{},{query:{method:"GET",isArray:!0},buy:{method:"POST",url:sConfig.api+"api/traders/buy"},save:{method:"POST",params:{id:"@id"}}})}]),angular.module("app.common.services").factory("tradersAPI",["$resource","$http",function(a,s){return a(sConfig.api+"api/traders/traders",{},{query:{method:"GET",isArray:!0},getStatistics:{method:"GET",url:sConfig.api+"api/traders/traders/stats"},save:{method:"POST",params:{id:"@id"}},login:{method:"POST",url:sConfig.api+"api/traders/login"},logout:{method:"POST",url:sConfig.api+"api/traders/logout"}})}]),angular.module("app.common.directives").directive("candleStick",["$timeout",function(a){return{restrict:"E",scope:{csData:"=",options:"="},link:function(a,s){function n(n,t){function e(){i.zoomToIndexes(i.dataProvider.length-10,i.dataProvider.length-1)}var i=AmCharts.makeChart(s[0],{type:"serial",theme:"light",dataDateFormat:"YYYY-MM-DD HH:NN:SS",valueAxes:[{position:"left",guides:[{toValue:a.options.max_rate,value:a.options.min_rate,lineColor:"blue",lineAlpha:1,fillAlpha:.07,fillColor:"blue",dashLength:2,inside:!0},{toValue:a.options.open_rate,value:a.options.open_rate,lineColor:"navy",lineAlpha:1,dashLength:2,inside:!0,labelRotation:90,fontSize:"15",label:"Signal Rate"}]}],graphs:[{id:"g1",balloonText:"Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",closeField:"close",fillColors:"#db4c3c",highField:"high",lineColor:"#000000",lineAlpha:1,lowField:"low",fillAlphas:.9,negativeFillColors:"green",negativeLineColor:"green",openField:"open",title:"Price:",type:"candlestick",valueField:"close"}],chartScrollbar:{graph:"g1",graphType:"line",scrollbarHeight:30},chartCursor:{valueLineEnabled:!0,valueLineBalloonEnabled:!0},categoryField:"date",categoryAxis:{parseDates:!0,minPeriod:"10mm"},dataProvider:n,"export":{enabled:!0,position:"bottom-right"}});i.addListener("rendered",e),e()}s.addClass("candle-stick-custom");a.$watch("csData",function(){var s=a.options||{};n(a.csData,s)})}}}]),angular.module("app.common.directives").directive("countdown",["$interval",function(a){return{restrict:"A",scope:{endTime:"@"},link:function(s,n){function t(a){var s=Date.parse(a)-Date.parse(new Date),n=Math.floor(s/1e3%60),t=Math.floor(s/1e3/60%60),e=Math.floor(s/36e5);return{total:s,hours:e>9?e:"0"+e,minutes:t>9?t:"0"+t,seconds:n>9?n:"0"+n}}function e(s){function e(){var a=t(s);n.text(a.hours+":"+a.minutes+":"+a.seconds),a.total<=0&&clearInterval(i)}e();var i=a(e,1e3)}e(new Date(Date.parse(s.endTime)))}}}]),angular.module("app.common.directives").directive("score",function(){return{restrict:"A",scope:{score:"@"},link:function(a,s){for(var n=a.score/20,t=1;5>=t;t+=1)n>=t?s.append($("<span></span>",{"class":"fa fa-star"})):n+.5>=t?s.append($("<span></span>",{"class":"fa fa-star-half-o"})):s.append($("<span></span>",{"class":"fa fa-star-o"}))}}}),angular.module("app.common.services").service("assetFeed",["$timeout",function(a){var s=io("http://52.48.242.152:8080");return{subscribe:function(a,n){s.on("feed_"+a,function(a,s){console.log(a),console.log(s),console.log(arguments),n(a,s)}),s.emit("feed-all")}}}]),angular.module("app.common.directives").directive("compareTo",function(){return{require:"ngModel",scope:{otherModelValue:"=compareTo"},link:function(a,s,n,t){t.$validators.compareTo=function(s){return s==a.otherModelValue},a.$watch("otherModelValue",function(){document.activeElement==s[0]&&t.$validate()})}}}),angular.module("app.common.services").constant("userToken",{}),angular.module("app.states.charts").controller("app.charts.membersTrades",["$scope","tradersAPI",function(a,s){}]),angular.module("app.states.charts").controller("app.charts.statistics",["$scope","tradersAPI",function(a,s){s.getStatistics().$promise.then(function(a){}),a.percent=65,a.options={easing:"easeOutElastic",delay:3e3,barColor:"#69c",trackColor:"#ace",scaleColor:!1,lineWidth:16,trackWidth:16,lineCap:"butt"},$(".epie").easyPieChart({})}]),angular.module("app.states.charts").controller("app.charts.tiles",["$scope","tradersAPI",function(a,s){s.getStatistics().$promise.then(function(s){s.win_rate=parseFloat(100/s.total_trades*s.wins).toFixed(2),a.stats=s})}]),angular.module("app.states.layout").controller("app.states.layout.navbarCtrl",["$scope","tradersAPI","$state",function(a,s,n){a.logout=function(){s.logout().$promise.then(function(){n.transitionTo("app.security.login")})}}]),angular.module("app.states.layout").controller("app.states.layout.headerCtrl",["$scope","$interval","$state",function(a,s,n){a.$state=n}]),angular.module("app.states.signals").controller("app.signals.list",["$scope","merchantsSignalsAPI","signalsAPI","$state","assetFeed","$filter","ngNotify",function(a,s,n,t,e,i,l){a.buyOptions={amount:50},a.openIndex=0,s.query(t.current.data.signalsList,function(s){s.forEach(function(s){s.chartData=[],s.options={max_rate:s.signal.max_entry_rate,min_rate:s.signal.min_entry_rate,open_rate:s.signal.creation_rate},e.subscribe(s.signal.asset.socket_id,function(n,t){console.log("Updated "+s.signal.asset.socket_id),console.log(n),a.$apply(function(){s.chartData=[],s.rateStatus=s.currentRate>t?"up":"down",s.currentRate=t,angular.forEach(n,function(a,n){s.chartData.push({date:i("date")(Date.parse(n),"yyyy-MM-dd HH:mm:ss"),high:a.high,low:a.low,open:a.open,close:a.close})})})})}),a.signals=s}),a.infoClicked=function(s){a.openIndex!=s&&($(".signal-info").slideUp(400,function(){$(this).not($(".signal-info").eq(s)).addClass("hidden")}),$(".signal-info").eq(s).removeClass("hidden").slideDown(),a.openIndex=s)},a.buySignal=function(s){a.buyOptions.buying=!0;var t={signal_id:s.signal.id,amount:a.buyOptions.amount};n.buy(t).$promise.then(function(){l.set("Your trade has successfully placed","success"),a.buyOptions.buying=!1})}}]),angular.module("app.core.dashboard").controller("app.core.dashboardCtrl",["$scope","tradersAPI","$timeout",function(a,s,n){}]),angular.module("app.core.security").controller("app.core.security.loginCtrl",["$scope","$timeout","tradersAPI","$state",function(a,s,n,t){a.formSubmitted=function(){var s={email:a.credentials.email,password:a.credentials.password};a.submitted=!0,n.login(s).$promise.then(function(s){s.error?a.error="Invalid email or password combination":t.transitionTo("app.dashboard")})}}]),angular.module("app.core.dashboard").controller("app.core.signals.liveCtrl",["$scope","tradersAPI","$timeout",function(a,s,n){}]),angular.module("app.core.signals").controller("app.core.signals.historyCtrl",["$scope","tradersAPI","$timeout",function(a,s,n){}]),angular.module("app.core.trades").controller("app.core.trades.historyCtrl",["$scope","tradersAPI","$timeout",function(a,s,n){}]),angular.module("app.core.dashboard").controller("app.core.trades.openCtrl",["$scope","tradersAPI","$timeout",function(a,s,n){}]);