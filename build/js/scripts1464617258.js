"use strict";angular.module("app",["ngAnimate","ngMessages","ngResource","ngTouch","ngRoute","smart-table","ui.router","smart-table","toastr","daterangepicker","countUpModule","easypiechart","ngNotify","angular-loading-bar","ui.bootstrap-slider","app.common.services","app.common.directives","app.states.layout","app.states.charts","app.states.signals","app.states.grids","app.core.dashboard","app.core.signals","app.core.trades","app.core.security"]).config(["$httpProvider","$stateProvider","$urlRouterProvider",function(a,r,s){a.defaults.useXDomain=!0,a.defaults.withCredentials=!0,delete a.defaults.headers.common["X-Requested-With"],a.defaults.headers.common={},a.defaults.headers.post={"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},a.defaults.headers.put={},a.defaults.headers.patch={},a.defaults.transformRequest=function(a){return void 0===a?a:$.param(a)},s.otherwise("/")}]).run(["$rootScope","$http","$state","ngNotify",function(a,r,s,n){n.config({position:"top",duration:4e3,html:!0}),r.defaults.transformResponse.unshift(function(a,r,n){return 401==n&&"app.security.login"!=s.current.name&&s.go("app.security.login"),a}),a.$on("$stateChangeSuccess",function(){"app.security.login"!=s.current.name&&r.get(sConfig.api+"api/traders/is_logged")}),r.appendTransform=function(a){return a=angular.isArray(a)?a:[a],a.concat(r.defaults.transformResponse)}}]),angular.module("app.common.directives",[]),angular.module("app.common.services",["ngResource"]),angular.module("app.common.filters",[]),angular.module("app.states.charts",[]),angular.module("app.states.layout",["ui.router"]).config(["$stateProvider",function(a){a.state("app",{url:"/","abstract":!0,views:{"header@":{templateUrl:"app/common/states/layout/header/header.tpl.html",controller:"app.states.layout.headerCtrl"},"navbar@":{templateUrl:"app/common/states/layout/navbar/navbar.tpl.html",controller:"app.states.layout.navbarCtrl"}}})}]).run(["$rootScope",function(a){a.image=function(a){return"/images/"+a}}]),angular.module("app.states.grids",[]),angular.module("app.states.signals",[]),angular.module("app.core.dashboard",["ui.router"]).config(["$stateProvider",function(a){a.state("app.dashboard",{url:"",data:{signalsList:{limit:4}},views:{"content@":{templateUrl:"/app/core/dashboard/dashboard.tpl.html",controller:"app.core.dashboardCtrl"},"tiles@app.dashboard":{templateUrl:"/app/common/states/charts/tiles/tiles.tpl.html",controller:"app.charts.tiles"},"statistics@app.dashboard":{templateUrl:"/app/common/states/charts/statistics/statistics.tpl.html",controller:"app.charts.statistics"},"signalsList@app.dashboard":{templateUrl:"/app/common/states/signals/list/list.tpl.html",controller:"app.signals.list"},"membersTrades@app.dashboard":{templateUrl:"/app/common/states/charts/members-trades/members-trades.tpl.html",controller:"app.charts.membersTrades"},"openTrades@app.dashboard":{templateUrl:"/app/common/states/grids/open-trades/open-trades.tpl.html",controller:"app.grids.openTrades"}}})}]),angular.module("app.core.security",["ui.router"]).config(["$stateProvider",function(a){a.state("app.security",{url:"auth/","abstract":!0}),a.state("app.security.login",{url:"login",views:{"content@":{templateUrl:"/app/core/security/login/login.tpl.html",controller:"app.core.security.loginCtrl"},"navbar@":{templateUrl:"app/common/states/layout/navbar/navbar.tpl.html",controller:"app.states.layout.navbarCtrl"}}})}]),angular.module("app.core.signals",["ui.router"]).config(["$stateProvider",function(a){a.state("app.signals",{url:"signals","abstract":!0}),a.state("app.signals.live",{url:"/live",data:{signalsList:{limit:10}},views:{"content@":{templateUrl:"/app/core/signals/live/live.tpl.html",controller:"app.core.signals.liveCtrl"},"signalsList@app.signals.live":{templateUrl:"/app/common/states/signals/list/list.tpl.html",controller:"app.signals.list"}}}),a.state("app.signals.history",{url:"/history",views:{"content@":{templateUrl:"/app/core/signals/history/history.tpl.html",controller:"app.core.signals.historyCtrl"}}})}]),angular.module("app.core.trades",["ui.router"]).config(["$stateProvider",function(a){a.state("app.trades",{url:"trades","abstract":!0}),a.state("app.trades.open",{url:"/open",views:{"content@":{templateUrl:"/app/core/trades/open/open.tpl.html",controller:"app.core.trades.openCtrl"},"grid@app.trades.open":{templateUrl:"/app/common/states/grids/open-trades/open-trades.tpl.html",controller:"app.grids.openTrades"}}}),a.state("app.trades.history",{url:"/history",views:{"content@":{templateUrl:"/app/core/trades/history/history.tpl.html",controller:"app.core.trades.historyCtrl"},"grid@app.trades.history":{templateUrl:"/app/common/states/grids/trades-history/trades-history.tpl.html",controller:"app.grids.tradesHistory"}}})}]),angular.module("app.common.services").factory("merchantsSignalsAPI",["$resource",function(a){return a(sConfig.api+"api/traders/merchants/signals/:id",{},{query:{method:"GET",isArray:!0},save:{method:"POST",params:{id:"@id"}}})}]),angular.module("app.common.services").factory("signalsAPI",["$resource","$http",function(a,r){return a(sConfig.api+"api/traders/signals/:id",{},{query:{method:"GET",isArray:!0},buy:{method:"POST",url:sConfig.api+"api/traders/buy"},save:{method:"POST",params:{id:"@id"}}})}]),angular.module("app.common.services").factory("tradersAPI",["$resource","$http",function(a,r){return a(sConfig.api+"api/traders/traders",{},{query:{method:"GET",isArray:!0},getStatistics:{method:"GET",url:sConfig.api+"api/traders/traders/stats"},save:{method:"POST",params:{id:"@id"}},login:{method:"POST",url:sConfig.api+"api/traders/login"},logout:{method:"POST",url:sConfig.api+"api/traders/logout"}})}]),angular.module("app.common.services").factory("tradesAPI",["$resource","$http",function(a,r){return a(sConfig.api+"api/traders/trades/:id",{},{query:{method:"GET",isArray:!0},save:{method:"POST",params:{id:"@id"}}})}]),angular.module("app.common.directives").directive("candleStick",["$timeout",function(a){return{restrict:"E",scope:{csData:"=",options:"="},link:function(a,r){function s(s,n){function t(){e.zoomToIndexes(e.dataProvider.length-10,e.dataProvider.length-1)}var e=AmCharts.makeChart(r[0],{type:"serial",theme:"light",dataDateFormat:"YYYY-MM-DD HH:NN:SS",valueAxes:[{position:"left",guides:[{toValue:a.options.max_rate,value:a.options.min_rate,lineColor:"blue",lineAlpha:1,fillAlpha:.07,fillColor:"blue",dashLength:2,inside:!0},{toValue:a.options.open_rate,value:a.options.open_rate,lineColor:"navy",lineAlpha:1,dashLength:2,inside:!0,labelRotation:90,fontSize:"15",label:"Signal Rate"}]}],graphs:[{id:"g1",balloonText:"Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",closeField:"close",fillColors:"green",highField:"high",lineColor:"#000000",lineAlpha:1,lowField:"low",fillAlphas:.9,negativeFillColors:"#db4c3c",negativeLineColor:"#000000",openField:"open",title:"Price:",type:"candlestick",valueField:"close"}],chartScrollbar:{graph:"g1",graphType:"line",scrollbarHeight:30},chartCursor:{valueLineEnabled:!0,valueLineBalloonEnabled:!0},categoryField:"date",categoryAxis:{parseDates:!0,minPeriod:"10mm"},dataProvider:s,"export":{enabled:!0,position:"bottom-right"}});e.addListener("rendered",t),t()}r.addClass("candle-stick-custom");a.$watch("csData",function(){var r=a.options||{};s(a.csData,r)})}}}]),angular.module("app.common.directives").directive("countdown",["$interval",function(a){return{restrict:"A",scope:{endTime:"@"},link:function(r,s){function n(a){var r=Date.parse(a)-Date.parse(new Date),s=Math.floor(r/1e3%60),n=Math.floor(r/1e3/60%60),t=Math.floor(r/36e5);return{total:r,hours:t>9?t:"0"+t,minutes:n>9?n:"0"+n,seconds:s>9?s:"0"+s}}function t(r){function t(){var a=n(r);s.text(a.hours+":"+a.minutes+":"+a.seconds),a.total<=0&&clearInterval(e)}t();var e=a(t,1e3)}t(new Date(Date.parse(r.endTime)))}}}]),angular.module("app.common.directives").directive("score",function(){return{restrict:"A",scope:{score:"@"},link:function(a,r){for(var s=a.score/20,n=1;5>=n;n+=1)s>=n?r.append($("<span></span>",{"class":"fa fa-star"})):s+.5>=n?r.append($("<span></span>",{"class":"fa fa-star-half-o"})):r.append($("<span></span>",{"class":"fa fa-star-o"}))}}}),angular.module("app.common.services").service("assetFeed",["$timeout",function(a){var r=io("http://52.48.242.152:8080");r.emit("feed-all");var s={},n={},t=function(a){s[a]||(r.emit("add-feed",[a]),r.on("feed_"+a,function(r,s){console.log("Feeded !"),r=JSON.parse(r),i(a,r,s)}),s[a]=!0)},e=function(a,r){n[a]=n[a]||[],n[a].push(r)},i=function(a,r,s){n[a].length&&n[a].forEach(function(a){a(r,s)})};return{subscribe:function(a,r){t(a),e(a,r)}}}]),angular.module("app.common.directives").directive("compareTo",function(){return{require:"ngModel",scope:{otherModelValue:"=compareTo"},link:function(a,r,s,n){n.$validators.compareTo=function(r){return r==a.otherModelValue},a.$watch("otherModelValue",function(){document.activeElement==r[0]&&n.$validate()})}}}),angular.module("app.common.services").constant("userToken",{}),angular.module("app.states.charts").controller("app.charts.membersTrades",["$scope","tradersAPI",function(a,r){}]),angular.module("app.states.charts").controller("app.charts.tiles",["$scope","tradersAPI","$rootScope",function(a,r,s){var n=function(){r.getStatistics().$promise.then(function(r){r.win_rate=parseFloat(100/r.total_trades*r.wins).toFixed(2),a.stats=r})};n(),s.$on("traderSignalBought",n)}]),angular.module("app.states.layout").controller("app.states.layout.navbarCtrl",["$scope","tradersAPI","$state",function(a,r,s){a.logout=function(){r.logout().$promise.then(function(){s.transitionTo("app.security.login")})}}]),angular.module("app.states.layout").controller("app.states.layout.headerCtrl",["$scope","$interval","$state",function(a,r,s){a.$state=s}]),angular.module("app.states.charts").controller("app.charts.statistics",["$scope","tradersAPI",function(a,r){r.getStatistics().$promise.then(function(a){}),a.percent=65,a.options={easing:"easeOutElastic",delay:3e3,barColor:"#69c",trackColor:"#ace",scaleColor:!1,lineWidth:16,trackWidth:16,lineCap:"butt"},$(".epie").easyPieChart({})}]),angular.module("app.states.signals").controller("app.signals.list",["$scope","merchantsSignalsAPI","signalsAPI","$state","assetFeed","$filter","ngNotify","$rootScope",function(a,r,s,n,t,e,i,l){a.buyOptions={amount:50},a.openIndex=0,r.query(n.current.data.signalsList,function(r){r.forEach(function(r){r.chartData=[],r.options={max_rate:r.signal.max_entry_rate,min_rate:r.signal.min_entry_rate,open_rate:r.signal.creation_rate},t.subscribe(r.signal.asset.socket_id,function(s,n){a.$apply(function(){r.chartData=[],r.rateStatus=r.currentRate>n?"up":"down",r.currentRate=n,angular.forEach(s,function(a,s){s=s.replace(" ","T"),r.chartData.push({date:e("date")(Date.parse(s),"yyyy-MM-dd HH:mm:ss"),high:a.high,low:a.low,open:a.open,close:a.close})})})})}),a.signals=r}),a.infoClicked=function(r){a.openIndex!=r&&($(".signal-info").slideUp(400,function(){$(this).not($(".signal-info").eq(r)).addClass("hidden")}),$(".signal-info").eq(r).removeClass("hidden").slideDown(),a.openIndex=r)},a.buySignal=function(r){a.buyOptions.buying=!0;var n={signal_id:r.signal.id,amount:a.buyOptions.amount};s.buy(n).$promise.then(function(r){1==r.status?(i.set("Your trade has successfully placed","success"),l.$emit("traderSignalBought")):i.set("There was an issue placing your trade, please try again later or buy anther signal","error"),a.buyOptions.buying=!1})}}]),angular.module("app.states.grids").controller("app.grids.tradesHistory",["$scope","tradesAPI","assetFeed",function(a,r,s){a.rowCollection=r.query({tradeStatus:[2,3]}),a.rates={},a.getRate=function(r){return a.rates[r]=a.rates[r]||0,s.subscribe(r,function(s,n){a.rates[r]=n}),a.rates[r]}}]),angular.module("app.states.grids").controller("app.grids.openTrades",["$scope","tradesAPI","assetFeed",function(a,r,s){a.rowCollection=r.query({tradeStatus:1}),a.getters={firstName:function(a){return a.firstName.length}},a.rates={},a.getRate=function(r){return a.rates[r]=a.rates[r]||0,s.subscribe(r,function(s,n){a.rates[r]=n}),a.rates[r]}}]),angular.module("app.core.dashboard").controller("app.core.dashboardCtrl",["$scope","tradersAPI","$timeout",function(a,r,s){}]),angular.module("app.core.security").controller("app.core.security.loginCtrl",["$scope","$timeout","tradersAPI","$state",function(a,r,s,n){a.formSubmitted=function(){var r={email:a.credentials.email,password:a.credentials.password};a.submitted=!0,s.login(r).$promise.then(function(r){r.error?a.error="Invalid email or password combination":n.transitionTo("app.dashboard")})}}]),angular.module("app.core.signals").controller("app.core.signals.historyCtrl",["$scope","tradersAPI","$timeout",function(a,r,s){}]),angular.module("app.core.dashboard").controller("app.core.signals.liveCtrl",["$scope","tradersAPI","$timeout",function(a,r,s){}]),angular.module("app.core.dashboard").controller("app.core.trades.openCtrl",["$scope","tradersAPI","$timeout",function(a,r,s){}]),angular.module("app.core.trades").controller("app.core.trades.historyCtrl",["$scope","tradersAPI","$timeout",function(a,r,s){}]);