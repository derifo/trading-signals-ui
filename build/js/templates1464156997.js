angular.module("app").run(["$templateCache",function(n){n.put("/app/core/dashboard/dashboard.tpl.html",'<div class="container-fluid ng-enter-fadeInUp">\n    <div class="row">\n        <div class="col-xs-12">\n            <div ui-view="tiles"></div>\n        </div>\n        <div class="col-md-8 col-sm-12">\n            <h3 class="page-header">Signals <small>Live Signals</small></h3>\n            <div ui-view="signalsList"></div>\n        </div>\n        <div class="col-md-4 col-sm-12">\n            <div class="row">\n                <div class="col-xs-12">\n                    <h3 class="page-header">Statistics <small>System General Statistics</small></h3>\n                    <div ui-view="statistics"></div>\n                </div>\n                <div class="col-xs-12">\n                    <h3 class="page-header">Members Trades</h3>\n                    <div ui-view="membersTrades"></div>\n                </div>\n            </div>\n        </div>\n        <div class="clearfix"></div>\n    </div>\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/core/security/login/login.tpl.html",'<div class="security-login-page animated">\n    <div class="panel panel-custom1">\n        <div class="panel-heading panel-heading-dark">Trading Signals</div>\n        <div class="panel-body">\n            <div class="alert alert-danger login-error" ng-show="!! error">{{ error }}</div>\n            <form method="post" class="form" ng-submit="formSubmitted()">\n                <div class="form-group">\n                    <label for="username" class="sr-only">Email Address</label>\n                    <input type="text" id="username" placeholder="Email" name="_username" ng-model="credentials.email" class="form-control"/>\n                </div>\n                <div class="form-group">\n                    <label for="password" class="sr-only">Password</label>\n                    <input type="password" placeholder="Password" id="password" name="_password" ng-model="credentials.password" class="form-control"/>\n                </div>\n                <div class="form-group text-center">\n                    <button type="submit" class="btn btn-primary btn-login">LOGIN</button>\n                </div>\n                <div class="row">\n                    <div class="col-xs-6">\n                        <div class="checkbox">\n                            <label>\n                                <input ui-checkbox type="checkbox" ui-checked="1"> Remember Me\n                            </label>\n                        </div>\n                    </div>\n                    <div class="col-xs-6 text-right">\n                        <a href="" class="forgot-pwd-btn">Forgot Password ?</a>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/core/signals/history/history.tpl.html",'<div class="container-fluid">\n    <h1>Signals History</h1>\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/core/signals/live/live.tpl.html",'<div class="container-fluid">\n   <h1>Signals LIVE</h1>\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/core/trades/history/history.tpl.html",'<div class="container-fluid">\n    <h1>Trading History</h1>\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/core/trades/open/open.tpl.html",'<div class="container-fluid">\n   <h1>Open Trades</h1>\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/common/states/charts/statistics/statistics.tpl.html",'<div class="system-statistics">\n    <div class="row">\n        <div class="col-sm-6">\n            <div class="statistics-box">\n                <div class="statistics-title">\n                    Signals Win Rate\n                </div>\n                <div class="statistics-pie">\n                    <div class="chart" easypiechart options="options" percent="\'84\'">\n                        <span class="percent">84</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-sm-6">\n            <div class="statistics-box">\n                <div class="statistics-title">\n                    Traders Win Rate\n                </div>\n                <div class="statistics-pie">\n                    <div class="chart" easypiechart options="options" percent="\'67\'">\n                        <span class="percent">67</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-sm-6">\n            <div class="statistics-box">\n                <div class="statistics-title">\n                    Total Trades Amount\n                </div>\n                <div class="statistics-amount">\n                    $120,230\n                </div>\n            </div>\n        </div>\n        <div class="col-sm-6">\n            <div class="statistics-box">\n                <div class="statistics-title">\n                    Total Profit Amount\n                </div>\n                <div class="statistics-amount">\n                    $30,230\n                </div>\n            </div>\n        </div>\n    </div>\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/common/states/charts/members-trades/members-trades.tpl.html",'<div class="members-trades">\n    <div class="member-trade">\n        <div class="row">\n            <div class="col-md-10 col-md-offset-1 member-trade-center">\n                <div class="col-md-6">\n                    <img class="avatar" src="/img/noavatar.png" alt="">\n                    just now\n                </div>\n                <div class="col-md-3 asset-text text-center">\n                    AUD/USD\n                </div>\n                <div class="col-md-3 text-center">\n                    <img class="direction" src="/img/call.png" alt="">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="member-trade">\n        <div class="row">\n            <div class="col-md-10 col-md-offset-1 member-trade-center">\n                <div class="col-md-6">\n                    <img class="avatar" src="/img/noavatar.png" alt="">\n                    3 minutes ago\n                </div>\n                <div class="col-md-3 asset-text text-center">\n                    Gold\n                </div>\n                <div class="col-md-3 text-center">\n                    <img class="direction" src="/img/put.png" alt="">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="member-trade">\n        <div class="row">\n            <div class="col-md-10 col-md-offset-1 member-trade-center">\n                <div class="col-md-6">\n                    <img class="avatar" src="/img/noavatar.png" alt="">\n                    10 minutes ago\n                </div>\n                <div class="col-md-3 asset-text text-center">\n                    EUR/USD\n                </div>\n                <div class="col-md-3 text-center">\n                    <img class="direction" src="/img/put.png" alt="">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="member-trade">\n        <div class="row">\n            <div class="col-md-10 col-md-offset-1 member-trade-center">\n                <div class="col-md-6">\n                    <img class="avatar" src="/img/noavatar.png" alt="">\n                    25 minutes ago\n                </div>\n                <div class="col-md-3 asset-text text-center">\n                    Silver\n                </div>\n                <div class="col-md-3 text-center">\n                    <img class="direction" src="/img/call.png" alt="">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="member-trade">\n        <div class="row">\n            <div class="col-md-10 col-md-offset-1 member-trade-center">\n                <div class="col-md-6">\n                    <img class="avatar" src="/img/noavatar.png" alt="">\n                    1 hour ago\n                </div>\n                <div class="col-md-3 asset-text text-center">\n                    GOOGLE\n                </div>\n                <div class="col-md-3 text-center">\n                    <img class="direction" src="/img/put.png" alt="">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="member-trade">\n        <div class="row">\n            <div class="col-md-10 col-md-offset-1 member-trade-center">\n                <div class="col-md-6">\n                    <img class="avatar" src="/img/noavatar.png" alt="">\n                    3 minutes ago\n                </div>\n                <div class="col-md-3 asset-text text-center">\n                    Gold\n                </div>\n                <div class="col-md-3 text-center">\n                    <img class="direction" src="/img/call.png" alt="">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/common/states/charts/tiles/tiles.tpl.html",'<div class="customers-tiles">\n    <div class="row">\n        <div class="col-md-4 col-sm-12">\n            <div class="tile tile-default">\n                <div class="tile-box tile-thumb">\n                    <div class="fa fa-dollar"></div>\n                </div>\n                <div class="tile-box tile-main">\n                    <h3 class="tile-header">CURRENT BALANCE\n                    </h3>\n                    <div count-up options="{ prefix: \'$\' }" end-val="stats.balance" class="tile-value"></div>\n                </div>\n                <div class="tile-box tile-secondary">\n                    <h3 class="tile-header">OPEN INVESTMENT\n                    </h3>\n                    <div count-up options="{ prefix: \'$\' }" end-val="stats.investment" class="tile-value"></div>\n                </div>\n                <div class="clearfix"></div>\n            </div>\n        </div>\n        <div class="col-md-4 col-sm-12">\n            <div class="tile tile-default">\n                <div class="tile-box tile-thumb">\n                    <div class="fa fa-line-chart"></div>\n                </div>\n                <div class="tile-box tile-main">\n                    <h3 class="tile-header">OPEN POSITIONS\n                    </h3>\n                    <div count-up end-val="stats.open" class="tile-value"></div>\n                </div>\n                <div class="tile-box tile-secondary">\n                    <h3 class="tile-header">POTENTIAL PROFIT\n                    </h3>\n                    <div count-up options="{ prefix: \'$\' }" end-val="stats.potential_profit" class="tile-value"></div>\n                </div>\n                <div class="clearfix"></div>\n            </div>\n        </div>\n        <div class="col-md-4 col-sm-12">\n            <div class="tile tile-default">\n                <div class="tile-box tile-thumb">\n                    <div class="fa fa-area-chart"></div>\n                </div>\n                <div class="tile-box tile-main">\n                    <h3 class="tile-header">PERSONAL TRADES\n                    </h3>\n                    <div count-up options="{ prefix: \'$\' }" end-val="stats.win_rate" class="tile-value"></div>\n                </div>\n                <div class="tile-box tile-secondary">\n                    <h3 class="tile-header">PERSONAL PROFIT\n                    </h3>\n                    <div count-up options="{ prefix: \'$\' }" end-val="stats.win_rate" class="tile-value"></div>\n                </div>\n                <div class="clearfix"></div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--TOTAL WIN RATE-->\n<!--PERSONAL WIN RATE-->\n\n<!--TOTAL TRADES AMOUNT-->\n<!--TOTAL PROFIT AMOUNT-->')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/common/states/layout/header/header.tpl.html",'<div class="header-container">\n    <div class="upper-header-container">\n        <img class="logo" src="/img/logo.png" alt="Trading Signals - Your chance of winning">\n    </div>\n    <nav class="navbar navbar-inverse navbar-static-top">\n        <div class="container-fluid">\n            <div class="navbar-header">\n                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2" aria-expanded="false" aria-controls="navbar">\n                    <span class="sr-only">Toggle navigation</span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </button>\n            </div>\n            <div id="navbar2" class="navbar-collapse collapse">\n                <ul class="nav navbar-nav">\n                    <li ng-class="{ active: $state.includes(\'app.dashboard\') }">\n                        <a ui-sref="app.dashboard" class="active">Dashboard</a>\n                    </li>\n                    <li class="dropdown" ng-class="{ active: $state.includes(\'app.signals\') }">\n                        <a class="dropdown-toggle" data-toggle="dropdown" >Signals</a>\n                        <ul class="dropdown-menu">\n                            <li><a ui-sref="app.signals.live">Live Signals</a></li>\n                            <li><a ui-sref="app.signals.history">Signals History</a></li>\n                        </ul>\n                    </li>\n                    <li class="dropdown" ng-class="{ active: $state.includes(\'app.trades\') }">\n                        <a class="dropdown-toggle" data-toggle="dropdown">My Trades</a>\n                        <ul class="dropdown-menu">\n                            <li><a ui-sref="app.trades.open">Open Trades</a></li>\n                            <li><a ui-sref="app.trades.history">Trading History</a></li>\n                        </ul>\n                    </li>\n                    <li class="dropdown" ng-class="{ active: $state.includes(\'app.support\') }">\n                        <a class="dropdown-toggle" data-toggle="dropdown">Support</a>\n                        <ul class="dropdown-menu">\n                            <li><a href="#">F.A.Q</a></li>\n                            <li><a href="#">Contact Us</a></li>\n                            <li><a href="#">Tutorials</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </div><!--/.nav-collapse -->\n        </div>\n    </nav>\n</div>\n')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/common/states/layout/navbar/navbar.tpl.html",'<nav class="navbar navbar-default navbar-fixed-top dashboard-navbar animated">\n    <div class="container-fluid">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n                <span class="sr-only">Trading Signals</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#"></a>\n        </div>\n        <div id="navbar" class="collapse navbar-collapse">\n            <ul class="nav navbar-nav">\n            </ul>\n            <ul class="nav navbar-nav navbar-right">\n                <li>\n                    <a href="#" ng-click="logout()" class="dropdown-toggle" data-toggle="dropdown">Logout <span class="fa fa-power-off"></span></a>\n                </li>\n            </ul>\n        </div><!--/.nav-collapse -->\n    </div>\n</nav>\n')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/common/states/signals/list/list.tpl.html",'<div class="signals-list">\n    <div class="signals-row signals-row-{{ $index }}" ng-repeat="signal in signals track by $index">\n        <div class="signals-box-container">\n            <div class="signals-box asset-box">\n                <div class="row">\n                    <div class="col-xs-4 asset-logo">\n                        <img src="/img/assets/{{ signal.signal.asset.socket_id }}.png" alt="">\n                    </div>\n                    <div class="col-xs-8 asset-title">\n                        <span>{{ signal.signal.asset.title }}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="signals-box-container">\n            <div class="signals-box expires-box">\n                <div class="expires-text">Time Remaining</div>\n                <div class="expires-value" countdown end-time="{{ signal.expires | date : \'medium\'}}"></div>\n            </div>\n        </div>\n        <div class="signals-box-container">\n            <div class="signals-box score-box">\n                <div class="score-text">Dynamic Scoring</div>\n                <div class="score-value" score="{{ signal.signal.score }}"></div>\n            </div>\n        </div>\n        <div class="signals-box-container last-box">\n            <div class="signals-box">\n                <button class="btn btn-primary">Buying Order\n                <span class="fa fa-angle-double-right"></span>\n                </button>\n            </div>\n        </div>\n        <div class="clearfix"></div>\n        <div class="signal-info" ng-class="{ hidden: $index != 0 }">\n            <candle-stick cs-data="signal.chartData" options="signal.options" />\n            <div class="clearfix"></div>\n            <div class="asset-table">\n                <div class="info-row col-sm-3">\n                    <div class="info-header">Asset</div>\n                    <div class="info-value info-value-asset">\n                        <div class="asset-thumb">\n                            <img src="/img/assets/{{ signal.signal.asset.socket_id }}.png" alt="">\n                        </div>\n                        <div class="asset-title">\n                            <span>{{ signal.signal.asset.title }}</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="info-row col-sm-3">\n                    <div class="info-header">Current Rate</div>\n                    <div class="info-value info-value-rate {{ signal.rateStatus }}">{{ signal.currentRate }}</div>\n                </div>\n                <div class="info-row col-sm-3">\n                    <div class="info-header">Direction</div>\n                    <div class="info-value info-value-direction">\n                        <div class="direction-container" ng-show="signal.signal.direction == 1">\n                            <span class="direction-text">CALL</span>\n                            <img src="/img/call.png" class="direction-caret" alt="">\n                        </div>\n                        <div class="direction-container" ng-show="signal.signal.direction == 0">\n                            <span class="direction-text">PUT</span>\n                            <img src="/img/put.png" class="direction-caret" alt="">\n                        </div>\n                    </div>\n                </div>\n                <div class="info-row col-sm-3">\n                    <div class="info-header">Expiry Time</div>\n                    <div class="info-value info-value-expires">{{ signal.expires | date : \'medium\'}}</div>\n                </div>\n            </div>\n            <div class="asset-buy text-center">\n                <div class="col-xs-12">\n                    <div class="col-md-10">\n                        <div class="input-group pull-right">\n                            <div class="input-group-addon">$</div>\n                            <input type="text" class="form-control" ng-model="buyOptions.amount" />\n                        </div>\n                        <h3 class="pull-right">Trade Amount:</h3>\n                        <slider ng-model="buyOptions.amount" min="0" step="25" max="500" value="50"></slider>\n                    </div>\n                    <div class="col-md-2 text-center">\n                        <button type="button" class="btn btn-success btn-lg" disabled="disabled" ng-show="buyOptions.amount == 0 || buyOptions.buying ">Apply</button>\n                        <button type="button" class="btn btn-success btn-lg" ng-click="buySignal(signal)" ng-show="buyOptions.amount != 0 && ! buyOptions.buying">Apply</button>\n                    </div>\n                </div>\n            </div>\n            <div class="clearfix"></div>\n        </div>\n        <div class="clearfix"></div>\n        <div class="signals-dropdown" ng-click="infoClicked($index)">\n            <span class="fa fa-angle-double-down" ng-show="openIndex != $index"></span>\n            <span class="fa fa-angle-double-up" ng-show="openIndex == $index"></span>\n        </div>\n    </div>\n</div>')}]);