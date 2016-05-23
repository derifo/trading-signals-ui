angular.module("app").run(["$templateCache",function(n){n.put("/app/coredashboarddashboard.tpl.html",'<div class="container-fluid ng-enter-fadeInUp">\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <div ui-view="tiles"></div>\r\n        </div>\r\n        <div class="col-md-8 col-sm-12">\r\n            <h3 class="page-header">Signals <small>Live Signals</small></h3>\r\n            <div ui-view="signalsList"></div>\r\n        </div>\r\n        <div class="col-md-4 col-sm-12">\r\n            <div class="row">\r\n                <div class="col-xs-12">\r\n                    <h3 class="page-header">Statistics <small>System General Statistics</small></h3>\r\n                    <div ui-view="statistics"></div>\r\n                </div>\r\n                <div class="col-xs-12">\r\n                    <h3 class="page-header">Members Trades</h3>\r\n                    <div ui-view="membersTrades"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="clearfix"></div>\r\n    </div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/coresignalshistoryhistory.tpl.html",'<div class="container-fluid">\r\n    <h1>Signals History</h1>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/coresecurityloginlogin.tpl.html",'<div class="security-login-page animated">\r\n    <div class="panel panel-custom1">\r\n        <div class="panel-heading panel-heading-dark">Trading Signals</div>\r\n        <div class="panel-body">\r\n            <div class="alert alert-danger login-error" ng-show="!! error">{{ error }}</div>\r\n            <form method="post" class="form" ng-submit="formSubmitted()">\r\n                <div class="form-group">\r\n                    <label for="username" class="sr-only">Email Address</label>\r\n                    <input type="text" id="username" placeholder="Email" name="_username" ng-model="credentials.email" class="form-control"/>\r\n                </div>\r\n                <div class="form-group">\r\n                    <label for="password" class="sr-only">Password</label>\r\n                    <input type="password" placeholder="Password" id="password" name="_password" ng-model="credentials.password" class="form-control"/>\r\n                </div>\r\n                <div class="form-group text-center">\r\n                    <button type="submit" class="btn btn-primary btn-login">LOGIN</button>\r\n                </div>\r\n                <div class="row">\r\n                    <div class="col-xs-6">\r\n                        <div class="checkbox">\r\n                            <label>\r\n                                <input ui-checkbox type="checkbox" ui-checked="1"> Remember Me\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class="col-xs-6 text-right">\r\n                        <a href="" class="forgot-pwd-btn">Forgot Password ?</a>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/core	radeshistoryhistory.tpl.html",'<div class="container-fluid">\r\n    <h1>Trading History</h1>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/coresignalslivelive.tpl.html",'<div class="container-fluid">\r\n   <h1>Signals LIVE</h1>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/core	radesopenopen.tpl.html",'<div class="container-fluid">\r\n   <h1>Open Trades</h1>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstateschartsmembers-tradesmembers-trades.tpl.html",'<div class="members-trades">\r\n    <div class="member-trade">\r\n        <div class="row">\r\n            <div class="col-md-10 col-md-offset-1 member-trade-center">\r\n                <div class="col-md-6">\r\n                    <img class="avatar" src="/img/noavatar.png" alt="">\r\n                    just now\r\n                </div>\r\n                <div class="col-md-3 asset-text text-center">\r\n                    AUD/USD\r\n                </div>\r\n                <div class="col-md-3 text-center">\r\n                    <img class="direction" src="/img/call.png" alt="">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="member-trade">\r\n        <div class="row">\r\n            <div class="col-md-10 col-md-offset-1 member-trade-center">\r\n                <div class="col-md-6">\r\n                    <img class="avatar" src="/img/noavatar.png" alt="">\r\n                    3 minutes ago\r\n                </div>\r\n                <div class="col-md-3 asset-text text-center">\r\n                    Gold\r\n                </div>\r\n                <div class="col-md-3 text-center">\r\n                    <img class="direction" src="/img/put.png" alt="">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="member-trade">\r\n        <div class="row">\r\n            <div class="col-md-10 col-md-offset-1 member-trade-center">\r\n                <div class="col-md-6">\r\n                    <img class="avatar" src="/img/noavatar.png" alt="">\r\n                    10 minutes ago\r\n                </div>\r\n                <div class="col-md-3 asset-text text-center">\r\n                    EUR/USD\r\n                </div>\r\n                <div class="col-md-3 text-center">\r\n                    <img class="direction" src="/img/put.png" alt="">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="member-trade">\r\n        <div class="row">\r\n            <div class="col-md-10 col-md-offset-1 member-trade-center">\r\n                <div class="col-md-6">\r\n                    <img class="avatar" src="/img/noavatar.png" alt="">\r\n                    25 minutes ago\r\n                </div>\r\n                <div class="col-md-3 asset-text text-center">\r\n                    Silver\r\n                </div>\r\n                <div class="col-md-3 text-center">\r\n                    <img class="direction" src="/img/call.png" alt="">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="member-trade">\r\n        <div class="row">\r\n            <div class="col-md-10 col-md-offset-1 member-trade-center">\r\n                <div class="col-md-6">\r\n                    <img class="avatar" src="/img/noavatar.png" alt="">\r\n                    1 hour ago\r\n                </div>\r\n                <div class="col-md-3 asset-text text-center">\r\n                    GOOGLE\r\n                </div>\r\n                <div class="col-md-3 text-center">\r\n                    <img class="direction" src="/img/put.png" alt="">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="member-trade">\r\n        <div class="row">\r\n            <div class="col-md-10 col-md-offset-1 member-trade-center">\r\n                <div class="col-md-6">\r\n                    <img class="avatar" src="/img/noavatar.png" alt="">\r\n                    3 minutes ago\r\n                </div>\r\n                <div class="col-md-3 asset-text text-center">\r\n                    Gold\r\n                </div>\r\n                <div class="col-md-3 text-center">\r\n                    <img class="direction" src="/img/call.png" alt="">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstateschartsstatisticsstatistics.tpl.html",'<div class="system-statistics">\r\n    <div class="row">\r\n        <div class="col-sm-6">\r\n            <div class="statistics-box">\r\n                <div class="statistics-title">\r\n                    Signals Win Rate\r\n                </div>\r\n                <div class="statistics-pie">\r\n                    <div class="chart" easypiechart options="options" percent="\'84\'">\r\n                        <span class="percent">84</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-sm-6">\r\n            <div class="statistics-box">\r\n                <div class="statistics-title">\r\n                    Traders Win Rate\r\n                </div>\r\n                <div class="statistics-pie">\r\n                    <div class="chart" easypiechart options="options" percent="\'67\'">\r\n                        <span class="percent">67</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-sm-6">\r\n            <div class="statistics-box">\r\n                <div class="statistics-title">\r\n                    Total Trades Amount\r\n                </div>\r\n                <div class="statistics-amount">\r\n                    $120,230\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-sm-6">\r\n            <div class="statistics-box">\r\n                <div class="statistics-title">\r\n                    Total Profit Amount\r\n                </div>\r\n                <div class="statistics-amount">\r\n                    $30,230\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstatescharts	iles	iles.tpl.html",'<div class="customers-tiles">\r\n    <div class="row">\r\n        <div class="col-md-4 col-sm-12">\r\n            <div class="tile tile-default">\r\n                <div class="tile-box tile-thumb">\r\n                    <div class="fa fa-dollar"></div>\r\n                </div>\r\n                <div class="tile-box tile-main">\r\n                    <h3 class="tile-header">CURRENT BALANCE\r\n                    </h3>\r\n                    <div count-up options="{ prefix: \'$\' }" end-val="stats.balance" class="tile-value"></div>\r\n                </div>\r\n                <div class="tile-box tile-secondary">\r\n                    <h3 class="tile-header">OPEN INVESTMENT\r\n                    </h3>\r\n                    <div count-up options="{ prefix: \'$\' }" end-val="stats.investment" class="tile-value"></div>\r\n                </div>\r\n                <div class="clearfix"></div>\r\n            </div>\r\n        </div>\r\n        <div class="col-md-4 col-sm-12">\r\n            <div class="tile tile-default">\r\n                <div class="tile-box tile-thumb">\r\n                    <div class="fa fa-line-chart"></div>\r\n                </div>\r\n                <div class="tile-box tile-main">\r\n                    <h3 class="tile-header">OPEN POSITIONS\r\n                    </h3>\r\n                    <div count-up end-val="stats.open" class="tile-value"></div>\r\n                </div>\r\n                <div class="tile-box tile-secondary">\r\n                    <h3 class="tile-header">POTENTIAL PROFIT\r\n                    </h3>\r\n                    <div count-up options="{ prefix: \'$\' }" end-val="stats.potential_profit" class="tile-value"></div>\r\n                </div>\r\n                <div class="clearfix"></div>\r\n            </div>\r\n        </div>\r\n        <div class="col-md-4 col-sm-12">\r\n            <div class="tile tile-default">\r\n                <div class="tile-box tile-thumb">\r\n                    <div class="fa fa-area-chart"></div>\r\n                </div>\r\n                <div class="tile-box tile-main">\r\n                    <h3 class="tile-header">PERSONAL TRADES\r\n                    </h3>\r\n                    <div count-up options="{ prefix: \'$\' }" end-val="stats.win_rate" class="tile-value"></div>\r\n                </div>\r\n                <div class="tile-box tile-secondary">\r\n                    <h3 class="tile-header">PERSONAL PROFIT\r\n                    </h3>\r\n                    <div count-up options="{ prefix: \'$\' }" end-val="stats.win_rate" class="tile-value"></div>\r\n                </div>\r\n                <div class="clearfix"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--TOTAL WIN RATE-->\r\n<!--PERSONAL WIN RATE-->\r\n\r\n<!--TOTAL TRADES AMOUNT-->\r\n<!--TOTAL PROFIT AMOUNT-->')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstatessignalslistlist.tpl.html",'<div class="signals-list">\r\n    <div class="signals-row signals-row-{{ $index }}" ng-repeat="signal in signals track by $index">\r\n        <div class="signals-box-container">\r\n            <div class="signals-box asset-box">\r\n                <div class="row">\r\n                    <div class="col-xs-4 asset-logo">\r\n                        <img src="/img/assets/{{ signal.signal.asset.socket_id }}.png" alt="">\r\n                    </div>\r\n                    <div class="col-xs-8 asset-title">\r\n                        <span>{{ signal.signal.asset.title }}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="signals-box-container">\r\n            <div class="signals-box expires-box">\r\n                <div class="expires-text">Time Remaining</div>\r\n                <div class="expires-value" countdown end-time="{{ signal.expires | date : \'medium\'}}"></div>\r\n            </div>\r\n        </div>\r\n        <div class="signals-box-container">\r\n            <div class="signals-box score-box">\r\n                <div class="score-text">Dynamic Scoring</div>\r\n                <div class="score-value" score="{{ signal.signal.score }}"></div>\r\n            </div>\r\n        </div>\r\n        <div class="signals-box-container last-box">\r\n            <div class="signals-box">\r\n                <button class="btn btn-primary">Buying Order\r\n                <span class="fa fa-angle-double-right"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class="clearfix"></div>\r\n        <div class="signal-info" ng-class="{ hidden: $index != 0 }">\r\n            <candle-stick cs-data="signal.chartData" options="signal.options" />\r\n            <div class="clearfix"></div>\r\n            <div class="asset-table">\r\n                <div class="info-row col-sm-3">\r\n                    <div class="info-header">Asset</div>\r\n                    <div class="info-value info-value-asset">\r\n                        <div class="asset-thumb">\r\n                            <img src="/img/assets/{{ signal.signal.asset.socket_id }}.png" alt="">\r\n                        </div>\r\n                        <div class="asset-title">\r\n                            <span>{{ signal.signal.asset.title }}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="info-row col-sm-3">\r\n                    <div class="info-header">Current Rate</div>\r\n                    <div class="info-value info-value-rate {{ signal.rateStatus }}">{{ signal.currentRate }}</div>\r\n                </div>\r\n                <div class="info-row col-sm-3">\r\n                    <div class="info-header">Direction</div>\r\n                    <div class="info-value info-value-direction">\r\n                        <div class="direction-container" ng-show="signal.signal.direction == 1">\r\n                            <span class="direction-text">CALL</span>\r\n                            <img src="/img/call.png" class="direction-caret" alt="">\r\n                        </div>\r\n                        <div class="direction-container" ng-show="signal.signal.direction == 0">\r\n                            <span class="direction-text">PUT</span>\r\n                            <img src="/img/put.png" class="direction-caret" alt="">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="info-row col-sm-3">\r\n                    <div class="info-header">Expiry Time</div>\r\n                    <div class="info-value info-value-expires">{{ signal.expires | date : \'medium\'}}</div>\r\n                </div>\r\n            </div>\r\n            <div class="asset-buy text-center">\r\n                <div class="col-xs-12">\r\n                    <div class="col-md-10">\r\n                        <div class="input-group pull-right">\r\n                            <div class="input-group-addon">$</div>\r\n                            <input type="text" class="form-control" ng-model="buyOptions.amount" />\r\n                        </div>\r\n                        <h3 class="pull-right">Trade Amount:</h3>\r\n                        <slider ng-model="buyOptions.amount" min="0" step="25" max="500" value="50"></slider>\r\n                    </div>\r\n                    <div class="col-md-2 text-center">\r\n                        <button type="button" class="btn btn-success btn-lg" disabled="disabled" ng-show="buyOptions.amount == 0 || buyOptions.buying ">Apply</button>\r\n                        <button type="button" class="btn btn-success btn-lg" ng-click="buySignal(signal)" ng-show="buyOptions.amount != 0 && ! buyOptions.buying">Apply</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="clearfix"></div>\r\n        </div>\r\n        <div class="clearfix"></div>\r\n        <div class="signals-dropdown" ng-click="infoClicked($index)">\r\n            <span class="fa fa-angle-double-down" ng-show="openIndex != $index"></span>\r\n            <span class="fa fa-angle-double-up" ng-show="openIndex == $index"></span>\r\n        </div>\r\n    </div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstateslayoutheaderheader.tpl.html",'<div class="header-container">\r\n    <div class="upper-header-container">\r\n        <img class="logo" src="/img/logo.png" alt="Trading Signals - Your chance of winning">\r\n    </div>\r\n    <nav class="navbar navbar-inverse navbar-static-top">\r\n        <div class="container-fluid">\r\n            <div class="navbar-header">\r\n                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2" aria-expanded="false" aria-controls="navbar">\r\n                    <span class="sr-only">Toggle navigation</span>\r\n                    <span class="icon-bar"></span>\r\n                    <span class="icon-bar"></span>\r\n                    <span class="icon-bar"></span>\r\n                </button>\r\n            </div>\r\n            <div id="navbar2" class="navbar-collapse collapse">\r\n                <ul class="nav navbar-nav">\r\n                    <li ng-class="{ active: $state.includes(\'app.dashboard\') }">\r\n                        <a ui-sref="app.dashboard" class="active">Dashboard</a>\r\n                    </li>\r\n                    <li class="dropdown" ng-class="{ active: $state.includes(\'app.signals\') }">\r\n                        <a class="dropdown-toggle" data-toggle="dropdown" >Signals</a>\r\n                        <ul class="dropdown-menu">\r\n                            <li><a ui-sref="app.signals.live">Live Signals</a></li>\r\n                            <li><a ui-sref="app.signals.history">Signals History</a></li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class="dropdown" ng-class="{ active: $state.includes(\'app.trades\') }">\r\n                        <a class="dropdown-toggle" data-toggle="dropdown">My Trades</a>\r\n                        <ul class="dropdown-menu">\r\n                            <li><a ui-sref="app.trades.open">Open Trades</a></li>\r\n                            <li><a ui-sref="app.trades.history">Trading History</a></li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class="dropdown" ng-class="{ active: $state.includes(\'app.support\') }">\r\n                        <a class="dropdown-toggle" data-toggle="dropdown">Support</a>\r\n                        <ul class="dropdown-menu">\r\n                            <li><a href="#">F.A.Q</a></li>\r\n                            <li><a href="#">Contact Us</a></li>\r\n                            <li><a href="#">Tutorials</a></li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </div><!--/.nav-collapse -->\r\n        </div>\r\n    </nav>\r\n</div>\r\n')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstateslayout\navbar\navbar.tpl.html",'<nav class="navbar navbar-default navbar-fixed-top dashboard-navbar animated">\r\n    <div class="container-fluid">\r\n        <div class="navbar-header">\r\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\r\n                <span class="sr-only">Trading Signals</span>\r\n                <span class="icon-bar"></span>\r\n                <span class="icon-bar"></span>\r\n                <span class="icon-bar"></span>\r\n            </button>\r\n            <a class="navbar-brand" href="#"></a>\r\n        </div>\r\n        <div id="navbar" class="collapse navbar-collapse">\r\n            <ul class="nav navbar-nav">\r\n            </ul>\r\n            <ul class="nav navbar-nav navbar-right">\r\n                <li>\r\n                    <a href="#" ng-click="logout()" class="dropdown-toggle" data-toggle="dropdown">Logout <span class="fa fa-power-off"></span></a>\r\n                </li>\r\n            </ul>\r\n        </div><!--/.nav-collapse -->\r\n    </div>\r\n</nav>\r\n')}]);