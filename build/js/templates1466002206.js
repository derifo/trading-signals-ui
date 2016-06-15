angular.module("app").run(["$templateCache",function(n){n.put("/app/coredashboarddashboard.tpl.html",'<div class="row">\r\n    <tour></tour>\r\n    <div class="col-xs-12">\r\n        <div ui-view="tiles"></div>\r\n    </div>\r\n    <div class="col-xs-12">\r\n        <img class="how-it-works" src="/img/how-it-works.jpg" alt="">\r\n    </div>\r\n    <div class="col-xs-12">\r\n        <div ui-view="signalsList"></div>\r\n    </div>\r\n    <div class="clearfix visible-md"></div>\r\n    <div class="col-md-12 col-lg-8">\r\n        <div ui-view="openTrades"></div>\r\n    </div>\r\n    <div class="col-lg-4 hidden-md-down">\r\n        <div ui-view="membersTrade"></div>\r\n    </div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/coreprofileprofile.tpl.html",'<div class="row">\r\n    <div class="col-xs-12">\r\n        Auto Trading Checkbox\r\n        Auto Trading Amount For Trade\r\n        Total Auto Trading Budget\r\n\r\n        Profile Image Change\r\n        Password Change\r\n\r\n        Approval to show profile image social\r\n\r\n        SMS approval checkbox\r\n    </div>\r\n</div>\r\n\r\n')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/coresecurityloginlogin.tpl.html",'\r\n<page-center>\r\n    <div class="page-center-in">\r\n        <div class="container-fluid">\r\n            <form method="post" class="sign-box" ng-submit="formSubmitted()">\r\n                <div class="sign-avatar">\r\n                    <img src="img/avatar-sign.png" alt="">\r\n                </div>\r\n                <header class="sign-title">Trading Signals - Sign in</header>\r\n                <div class="form-group">\r\n                    <input type="text" ng-model="credentials.email" class="form-control" placeholder="E-Mail or Phone"/>\r\n                </div>\r\n                <div class="form-group">\r\n                    <input type="password" ng-model="credentials.password"  class="form-control" placeholder="Password"/>\r\n                </div>\r\n                <div class="form-group">\r\n                    <div class="checkbox float-left">\r\n                        <input type="checkbox" id="signed-in"/>\r\n                        <label for="signed-in">Keep me signed in</label>\r\n                    </div>\r\n                </div>\r\n                <button type="submit" class="btn btn-rounded">Sign in</button>\r\n                <p class="sign-note">New Trader? <a ui-sref="security.signup">Sign up</a></p>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</page-center>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/coresecuritysignupsignup.tpl.html",'\r\n<page-center>\r\n    <div class="page-center-in">\r\n        <div class="container-fluid">\r\n            <form class="sign-box" name="signupForm" ng-submit="formSubmitted()">\r\n                <div class="sign-avatar no-photo">&plus;</div>\r\n                <header class="sign-title">Trading Signals - Sign Up</header>\r\n                <div class="alert alert-danger" ng-show="serverError">Code is already used or invalid</div>\r\n                <div class="form-group">\r\n                    <input placeholder="Promotion Code" type="text" name="code" class="form-control" ng-model="user.code" required ng-minlength="32" ng-maxlength="32">\r\n                    <div class="text-danger" ng-show=" ! signupForm.code.$pristine" ng-messages="signupForm.code.$error" role="alert">\r\n                        <div ng-message="required">Promotion Code is required</div>\r\n                        <div ng-message="minlength">Invalid code</div>\r\n                        <div ng-message="maxlength">Invalid code</div>\r\n                    </div>\r\n                </div>\r\n                <div class="form-group">\r\n                    <input placeholder="E-Mail / Username" type="email" name="email" class="form-control" ng-model="user.email" required ng-minlength="3" ng-maxlength="40">\r\n\r\n                    <div class="text-danger" ng-show=" ! signupForm.email.$pristine && signupForm.email.$touched" ng-messages="signupForm.email.$error" role="alert">\r\n                        <div ng-message="required">You did not enter a field</div>\r\n                        <div ng-message="minlength">Your field is too short</div>\r\n                        <div ng-message="maxlength">Your field is too long</div>\r\n                        <div ng-message="email">Invalid email address</div>\r\n                    </div>\r\n                </div>\r\n                <div class="form-group">\r\n                    <input placeholder="Password" type="password" name="password" class="form-control" ng-model="user.password" required ng-minlength="5" ng-maxlength="12">\r\n                    <div class="text-danger" ng-show=" ! signupForm.password.$pristine" ng-messages="signupForm.password.$error" role="alert">\r\n                        <div ng-message="required">You did not enter a field</div>\r\n                        <div ng-message="minlength">Your field is too short</div>\r\n                        <div ng-message="maxlength">Your field is too long</div>\r\n                    </div>\r\n                </div>\r\n                <div class="form-group">\r\n                    <input placeholder="Password" type="password" name="password_confirm" class="form-control" ng-model="user.password_confirm" compare-to="user.password">\r\n                    <div class="text-danger" ng-show=" ! signupForm.password_confirm.$pristine" ng-messages="signupForm.password_confirm.$error" role="alert">\r\n                        <div ng-message="compareTo">Passwords does not match</div>\r\n                    </div>\r\n                </div>\r\n                <button type="submit" class="btn btn-rounded btn-success sign-up">Sign up</button>\r\n                <p class="sign-note">Already have an account? <a ui-sref="security.login">Sign in</a></p>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</page-center>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/coresignalshistoryhistory.tpl.html",'<div class="container-fluid">\r\n    <h1>Signals History</h1>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/coresignalslivelive.tpl.html",'<div class="container-fluid">\r\n   <h3 class="page-header">Live Signals</h3>\r\n   <div class="row">\r\n      <div class="col-xs-12">\r\n         <div ui-view="signalsList"></div>\r\n      </div>\r\n   </div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/coresupportcontactcontact.tpl.html",'<div class="row">\r\n    <div class="col-xs-12">\r\n        <div ui-view="tiles"></div>\r\n    </div>\r\n    <div class="col-xs-12">\r\n        <div ui-view="signalsList"></div>\r\n    </div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/coresupport\faq\faq.tpl.html",'<div class="row">\r\n    <div class="col-xs-12">\r\n        <section class="box-typical faq-page">\r\n            <form class="faq-page-header-search">\r\n                <div class="search">\r\n                    <input type="text" class="form-control form-control-rounded" placeholder="Find answers (design, help, password. billing)"/>\r\n                    <button type="submit" class="find">\r\n                        <i class="font-icon font-icon-search"></i>\r\n                    </button>\r\n                </div>\r\n            </form><!--.faq-page-header-search-->\r\n\r\n            <section class="faq-page-cats">\r\n                <div class="row">\r\n                    <div class="col-md-4">\r\n                        <div class="faq-page-cat">\r\n                            <div class="faq-page-cat-icon"><img src="img/faq-1.png" alt=""></div>\r\n                            <div class="faq-page-cat-title">\r\n                                <a href="#">Getting Started</a>\r\n                            </div>\r\n                            <div class="faq-page-cat-txt">New to Canva? Learn the basic to get the most out of Canva</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="col-md-4">\r\n                        <div class="faq-page-cat">\r\n                            <div class="faq-page-cat-icon"><img src="img/faq-2.png" alt=""></div>\r\n                            <div class="faq-page-cat-title">\r\n                                <a href="#">Have a problem</a>\r\n                            </div>\r\n                            <div class="faq-page-cat-txt">New to Canva? Learn the basic to get the most out of Canva</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="col-md-4">\r\n                        <div class="faq-page-cat">\r\n                            <div class="faq-page-cat-icon"><img src="img/faq-3.png" alt=""></div>\r\n                            <div class="faq-page-cat-title">\r\n                                <a href="#">Suggest a feature</a>\r\n                            </div>\r\n                            <div class="faq-page-cat-txt">New to Canva? Learn the basic to get the most out of Canva</div>\r\n                        </div>\r\n                    </div>\r\n                </div><!--.row-->\r\n            </section><!--.faq-page-cats-->\r\n\r\n            <section class="faq-page-questions">\r\n                <h2>Common questions</h2>\r\n                <div class="row">\r\n                    <div class="col-md-6">\r\n                        <article class="faq-page-quest">\r\n                            <header class="faq-page-quest-title">\r\n                                <a href="#">Lorem ipsum dolor sit amet, consectetur laboris</a>\r\n                            </header>\r\n                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\r\n                        </article>\r\n                    </div>\r\n                    <div class="col-md-6">\r\n                        <article class="faq-page-quest">\r\n                            <header class="faq-page-quest-title">\r\n                                <a href="#">Lorem ipsum dolor sit amet, consectetur</a>\r\n                            </header>\r\n                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\r\n                        </article>\r\n                    </div>\r\n                </div>\r\n                <div class="row">\r\n                    <div class="col-md-6">\r\n                        <article class="faq-page-quest">\r\n                            <header class="faq-page-quest-title">\r\n                                <a href="#">Duis aute irure  dolor in reprehenderit velit</a>\r\n                            </header>\r\n                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\r\n                        </article>\r\n                    </div>\r\n                    <div class="col-md-6">\r\n                        <article class="faq-page-quest">\r\n                            <header class="faq-page-quest-title">\r\n                                <a href="#">Duis aute irure  dolor in reprehenderit velit</a>\r\n                            </header>\r\n                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\r\n                        </article>\r\n                    </div>\r\n                </div>\r\n                <div class="row">\r\n                    <div class="col-md-6">\r\n                        <article class="faq-page-quest">\r\n                            <header class="faq-page-quest-title">\r\n                                <a href="#">Lorem ipsum dolor sit amet, consectetur laboris</a>\r\n                            </header>\r\n                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\r\n                        </article>\r\n                    </div>\r\n                    <div class="col-md-6">\r\n                        <article class="faq-page-quest">\r\n                            <header class="faq-page-quest-title">\r\n                                <a href="#">Lorem ipsum dolor sit amet, consectetur</a>\r\n                            </header>\r\n                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\r\n                        </article>\r\n                    </div>\r\n                </div>\r\n            </section><!--.faq-page-questions-->\r\n        </section><!--.faq-page-->\r\n    </div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/core	radeshistoryhistory.tpl.html",'<div class="container-fluid">\r\n    <h3 class="page-header">My Trading History</h3>\r\n    <div ui-view="grid"></div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/core	radesopenopen.tpl.html",'<div class="container-fluid">\r\n   <h3 class="page-header">My Open Trades</h3>\r\n   <div ui-view="grid"></div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstateschartsmembers-tradesmembers-trades.tpl.html",'<div class="members-trade">\r\n    <section class="widget widget-activity">\r\n        <header class="widget-header">\r\n            Members Activity\r\n            <span class="label label-pill label-primary">2</span>\r\n        </header>\r\n        <div>\r\n            <div class="widget-activity-item">\r\n                <div class="user-card-row">\r\n                    <div class="tbl-row">\r\n                        <div class="tbl-cell tbl-cell-photo">\r\n                            <a href="#">\r\n                                <img src="img/avatar-1-64.png" alt="">\r\n                            </a>\r\n                        </div>\r\n                        <div class="tbl-cell">\r\n                            <p>\r\n                                <a href="#" class="semibold">Nina Jones</a>\r\n                                bought EUR/USD signal\r\n                            </p>\r\n                            <p>Just Now</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="widget-activity-item">\r\n                <div class="user-card-row">\r\n                    <div class="tbl-row">\r\n                        <div class="tbl-cell tbl-cell-photo">\r\n                            <a href="#">\r\n                                <img src="img/avatar-1-64.png" alt="">\r\n                            </a>\r\n                        </div>\r\n                        <div class="tbl-cell">\r\n                            <p>\r\n                                <a href="#" class="semibold">Trader123</a>\r\n                                Won $23 in USD/JPY signal\r\n                            </p>\r\n                            <p>Few minutes ago</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="widget-activity-item">\r\n                <div class="user-card-row">\r\n                    <div class="tbl-row">\r\n                        <div class="tbl-cell tbl-cell-photo">\r\n                            <a href="#">\r\n                                <img src="img/photo-64-2.jpg" alt="">\r\n                            </a>\r\n                        </div>\r\n                        <div class="tbl-cell">\r\n                            <p>\r\n                                <a href="#" class="semibold">Nina Jones</a>\r\n                                bought GOLD signal\r\n                            </p>\r\n                            <p>1 hour ago</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="widget-activity-item">\r\n                <div class="user-card-row">\r\n                    <div class="tbl-row">\r\n                        <div class="tbl-cell tbl-cell-photo">\r\n                            <a href="#">\r\n                                <img src="img/avatar-1-64.png" alt="">\r\n                            </a>\r\n                        </div>\r\n                        <div class="tbl-cell">\r\n                            <p>\r\n                                <a href="#" class="semibold">Nina Jones</a>\r\n                                bought EUR/JPY signal\r\n                            </p>\r\n                            <p>1 hour ago</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="widget-activity-item">\r\n                <div class="user-card-row">\r\n                    <div class="tbl-row">\r\n                        <div class="tbl-cell tbl-cell-photo">\r\n                            <a href="#">\r\n                                <img src="img/avatar-1-64.png" alt="">\r\n                            </a>\r\n                        </div>\r\n                        <div class="tbl-cell">\r\n                            <p>\r\n                                <a href="#" class="semibold">Nina Jones</a>\r\n                                bought EUR/JPY signal\r\n                            </p>\r\n                            <p>2 hours ago</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="widget-activity-item">\r\n                <div class="user-card-row">\r\n                    <div class="tbl-row">\r\n                        <div class="tbl-cell tbl-cell-photo">\r\n                            <a href="#">\r\n                                <img src="img/avatar-1-64.png" alt="">\r\n                            </a>\r\n                        </div>\r\n                        <div class="tbl-cell">\r\n                            <p>\r\n                                <a href="#" class="semibold">Nina Jones</a>\r\n                                bought EUR/JPY signal\r\n                            </p>\r\n                            <p>Yesterday</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section><!--.widget-tasks-->\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstateschartsstatisticsstatistics.tpl.html",'<div class="system-statistics">\r\n    <div class="row">\r\n        <div class="col-sm-6">\r\n            <div class="statistics-box">\r\n                <div class="statistics-title">\r\n                    Signals Win Rate\r\n                </div>\r\n                <div class="statistics-pie">\r\n                    <div class="chart" easypiechart options="options" percent="\'84\'">\r\n                        <span class="percent">84</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-sm-6">\r\n            <div class="statistics-box">\r\n                <div class="statistics-title">\r\n                    Traders Win Rate\r\n                </div>\r\n                <div class="statistics-pie">\r\n                    <div class="chart" easypiechart options="options" percent="\'67\'">\r\n                        <span class="percent">67</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-sm-6">\r\n            <div class="statistics-box">\r\n                <div class="statistics-title">\r\n                    Total Trades Amount\r\n                </div>\r\n                <div class="statistics-amount">\r\n                    $120,230\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-sm-6">\r\n            <div class="statistics-box">\r\n                <div class="statistics-title">\r\n                    Total Profit Amount\r\n                </div>\r\n                <div class="statistics-amount">\r\n                    $30,230\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstatescharts	iles	iles.tpl.html",'<div class="row">\r\n    <div class="col-md-3 col-sm-6">\r\n        <article class="statistic-box green">\r\n            <div>\r\n                <div count-up options="{ prefix: \'$\' }" end-val="stats.balance" class="number"></div>\r\n                <div class="caption"><div>Current Balance</div></div>\r\n            </div>\r\n        </article>\r\n    </div><!--.col-->\r\n    <div class="col-md-3 col-sm-6">\r\n        <article class="statistic-box purple">\r\n            <div>\r\n                <div count-up end-val="stats.open" class="number"></div>\r\n                <div class="caption"><div>Open Positions</div></div>\r\n            </div>\r\n        </article>\r\n    </div><!--.col-->\r\n    <div class="col-md-3 col-sm-6">\r\n        <article class="statistic-box red">\r\n            <div>\r\n                <div count-up options="{ prefix: \'$\' }" end-val="stats.investment" class="number"></div>\r\n                <div class="caption"><div>Investment</div></div>\r\n            </div>\r\n        </article>\r\n    </div><!--.col-->\r\n    <div class="col-md-3 col-sm-6">\r\n        <article class="statistic-box yellow">\r\n            <div>\r\n                <div count-up options="{ prefix: \'$\' }" end-val="stats.potential_profit" class="number"></div>\r\n                <div class="caption"><div>Potential Profit</div></div>\r\n            </div>\r\n        </article>\r\n    </div><!--.col-->\r\n</div><!--.row-->\r\n')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstatesgridsopen-tradesopen-trades.tpl.html",'<section class="box-typical box-typical-dashboard open-trades-container">\r\n    <header class="box-typical-header">\r\n        <div class="tbl-row">\r\n            <div class="tbl-cell tbl-cell-title">\r\n                <h3>My Open Trades</h3>\r\n            </div>\r\n            <div class="tbl-cell tbl-cell-actions">\r\n                <button type="button" class="action-btn action-btn-expand">\r\n                    <i class="font-icon font-icon-expand"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div class="box-typical-body">\r\n        <table st-table="rowCollection" class="table">\r\n            <thead>\r\n            <tr>\r\n                <th>Asset</th>\r\n                <th>Direction</th>\r\n                <th>Invested</th>\r\n                <th>Potential Profit</th>\r\n                <th>Buying Time</th>\r\n                <th>Expiry Time</th>\r\n                <th>Buying Rate</th>\r\n                <th>Current Rate</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr ng-repeat="row in rowCollection">\r\n                <td class="asset">\r\n                    <img src="/img/assets/{{ row.merchant_signal.signal.asset.socket_id }}.png" alt="">\r\n                </td>\r\n                <td class="direction">\r\n            <span ng-show="row.merchant_signal.signal.direction">\r\n                <img src="/img/call2.png" alt="">\r\n            </span>\r\n            <span ng-show=" ! row.merchant_signal.signal.direction">\r\n                <img src="/img/put2.png" alt="">\r\n            </span>\r\n                </td>\r\n                <td>${{ row.amount }}</td>\r\n                <td>${{ 100 / row.profit * row.amount | number: 1 }}</td>\r\n                <td>{{ row.buy_date | date: \'medium\' }}</td>\r\n                <td>{{ row.expiry_date | date: \'medium\' }}</td>\r\n                <td>{{ row.entry_rate }}</td>\r\n                <td>\r\n                    <asset-rate asset="{{ row.merchant_signal.signal.asset.socket_id }}"></asset-rate>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</section><!--.box-typical-dashboard-->\r\n')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstatesgrids	rades-history	rades-history.tpl.html",'<div class="open-trades-container">\r\n    <table st-table="rowCollection" class="table">\r\n        <thead>\r\n        <tr>\r\n            <th>Asset</th>\r\n            <th>Direction</th>\r\n            <th>Invested</th>\r\n            <th>Profit</th>\r\n            <th>Buying Time</th>\r\n            <th>Expiry Time</th>\r\n            <th>Buying Rate</th>\r\n            <th>Current Rate</th>\r\n            <th>Status</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr ng-repeat="row in rowCollection">\r\n            <td>\r\n                <img src="/img/assets/{{ row.merchant_signal.signal.asset.socket_id }}.png" alt="">\r\n                {{ row.merchant_signal.signal.asset.title | uppercase }}\r\n            </td>\r\n            <td>\r\n                <span ng-show="row.merchant_signal.signal.direction">\r\n                    <img src="/img/call.png" alt="">\r\n                </span>\r\n                <span ng-show=" ! row.merchant_signal.signal.direction">\r\n                    <img src="/img/put.png" alt="">\r\n                </span>\r\n            </td>\r\n            <td>${{ row.amount }}</td>\r\n            <td>${{ 100 / row.profit * row.amount | number: 1 }}</td>\r\n            <td>{{ row.buy_date | date: \'medium\' }}</td>\r\n            <td>{{ row.expiry_date | date: \'medium\' }}</td>\r\n            <td>{{ row.entry_rate }}</td>\r\n            <td>{{ getRate(row.merchant_signal.signal.asset.socket_id) }}</td>\r\n            <td>{{ row.trade_status.title }}</td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstateslayoutlayoutlayout.tpl.html",'<div class="site-layout-container animated fadeIn hidden">\r\n    <header class="site-header">\r\n        <div ui-view="navbar" class="container-fluid"></div>\r\n    </header><!--.site-header-->\r\n    <div class="mobile-menu-left-overlay"></div>\r\n    <nav class="side-menu" ui-view="sidebar" scroll-pane></nav>\r\n    <div class="page-content">\r\n        <div class="container-fluid">\r\n            <div ui-view="content"></div>\r\n        </div><!--.container-fluid-->\r\n    </div>\r\n</div>\r\n<div class="site-auth-verify"></div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstateslayout\navbar\navbar.tpl.html",'<a href="#" class="site-logo">\r\n    <img class="hidden-md-down" src="img/logo-2.png" alt="">\r\n    <img class="hidden-lg-up" src="img/logo-2-mob.png" alt="">\r\n</a>\r\n<button class="hamburger hamburger--htla">\r\n    <span>toggle menu</span>\r\n</button>\r\n<div class="site-header-content">\r\n    <div class="site-header-content-in">\r\n        <div class="site-header-shown">\r\n            <div class="dropdown dropdown-lang">\r\n                <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n                    <span class="flag-icon flag-icon-us"></span>\r\n                </button>\r\n                <div class="dropdown-menu dropdown-menu-right">\r\n                    <div class="dropdown-menu-col">\r\n                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-ru"></span>Русский</a>\r\n                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-de"></span>Deutsch</a>\r\n                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-it"></span>Italiano</a>\r\n                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-es"></span>Español</a>\r\n                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-pl"></span>Polski</a>\r\n                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-li"></span>Lietuviu</a>\r\n                    </div>\r\n                    <div class="dropdown-menu-col">\r\n                        <a class="dropdown-item current" href="#"><span class="flag-icon flag-icon-us"></span>English</a>\r\n                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-fr"></span>Français</a>\r\n                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-by"></span>Беларускi</a>\r\n                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-ua"></span>Українська</a>\r\n                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-cz"></span>Česky</a>\r\n                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-ch"></span>中國</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="dropdown user-menu">\r\n                <button class="dropdown-toggle" id="dd-user-menu" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n                    <img src="img/avatar-2-64.png" alt="">\r\n                </button>\r\n                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dd-user-menu">\r\n                    <a class="dropdown-item" href="#"><span class="font-icon glyphicon glyphicon-user"></span>Profile</a>\r\n                    <a class="dropdown-item" href="#"><span class="font-icon glyphicon glyphicon-cog"></span>Settings</a>\r\n                    <a class="dropdown-item" href="#"><span class="font-icon glyphicon glyphicon-question-sign"></span>Help</a>\r\n                    <div class="dropdown-divider"></div>\r\n                    <a class="dropdown-item" href="#" ng-click="logout()"><span class="font-icon glyphicon glyphicon-log-out"></span>Logout</a>\r\n                </div>\r\n            </div>\r\n\r\n            <button type="button" class="burger-right">\r\n                <i class="font-icon-menu-addl"></i>\r\n            </button>\r\n        </div><!--.site-header-shown-->\r\n\r\n        <div class="mobile-menu-right-overlay"></div>\r\n        <div class="site-header-collapsed">\r\n        </div><!--.site-header-collapsed-->\r\n    </div><!--site-header-content-in-->\r\n</div><!--.site-header-content-->\r\n')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstateslayoutsidebarsidebar.tpl.html",'<div class="side-menu-avatar">\r\n    <div class="avatar-preview avatar-preview-100">\r\n        <img src="img/avatar-1-256.png" alt="">\r\n    </div>\r\n</div>\r\n<ul class="side-menu-list">\r\n    <li class="brown">\r\n        <a href="#">\r\n            <i class="font-icon font-icon-home"></i>\r\n            <span class="lbl">Dashboard</span>\r\n        </a>\r\n    </li>\r\n    <li class="pink-red with-sub">\r\n            <span>\r\n                <i class="font-icon font-icon-zigzag"></i>\r\n                <span class="lbl">Signals</span>\r\n            </span>\r\n        <ul>\r\n            <li><a href="#"><span class="lbl">Live Signals</span></a></li>\r\n            <li><a href="#"><span class="lbl">Signals Archive</span></a></li>\r\n        </ul>\r\n    </li>\r\n    <li class="orange-red with-sub">\r\n            <span>\r\n                <i class="font-icon font-icon-help"></i>\r\n                <span class="lbl">My Trades</span>\r\n            </span>\r\n        <ul>\r\n            <li><a href="#"><span class="lbl">Open Trades</span></a></li>\r\n            <li><a href="#"><span class="lbl">Trading History</span></a></li>\r\n        </ul>\r\n    </li>\r\n    <li class="purple with-sub">\r\n            <span>\r\n                <i class="font-icon font-icon-comments active"></i>\r\n                <span class="lbl">Messages</span>\r\n            </span>\r\n        <ul>\r\n            <li><a href="#"><span class="lbl">Inbox</span><span class="label label-custom label-pill label-danger">8</span></a></li>\r\n            <li><a href="#"><span class="lbl">Sent mail</span></a></li>\r\n        </ul>\r\n    </li>\r\n    <li class="orange-red with-sub">\r\n            <span>\r\n                <i class="font-icon font-icon-help"></i>\r\n                <span class="lbl">Support</span>\r\n            </span>\r\n        <ul>\r\n            <li><a href="#"><span class="lbl">Contact Us</span></a></li>\r\n            <li><a ui-sref="app.support.faq"><span class="lbl">FAQ</span></a></li>\r\n            <li><a href="#"><span class="lbl">Tutorial</span></a></li>\r\n        </ul>\r\n    </li>\r\n    <li class="blue">\r\n        <a href="#">\r\n            <i class="font-icon font-icon-users"></i>\r\n            <span class="lbl">Profile</span>\r\n        </a>\r\n    </li>\r\n</ul>\r\n');
}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstatessignalslistlist.tpl.html",'<div class="row">\r\n    <div class="col-lg-7 col-md-12">\r\n        <div ui-view="signalInfo"></div>\r\n    </div>\r\n    <div class="col-lg-5 col-md-12 signal-list-col">\r\n        <div class="row">\r\n            <div ng-repeat="signal in signals" class="col-md-2 col-sm-4 signal-list-item col-lg-4" ng-click="signalClicked(signal)">\r\n                <article class="signal-list-box statistic-box" ng-class="{ \'dark-blue\': selected != signal, \'blue\': selected == signal }">\r\n                    <div>\r\n                        <div class="number">\r\n                            <img src="/img/assets/{{ signal.signal.asset.socket_id }}.png" alt="">\r\n                        </div>\r\n                        <div countdown end-time="{{ signal.expires | date : \'medium\'}}" class="signal-countdown"></div>\r\n                        <div class="signal-score" score="{{ signal.signal.score }}"></div>\r\n                        <div class="info hidden-md-down">More Info <span class="fa fa-angle-double-right"></span></div>\r\n                    </div>\r\n                </article>\r\n            </div><!--.col-->\r\n        </div>\r\n    </div>\r\n</div>')}]),angular.module("app").run(["$templateCache",function(n){n.put("/app/commonstatessignalssignalsignal.tpl.html",'<div ng-if="signal">\r\n    <div class="chart-statistic-box signal-chart-box">\r\n        <div class="chart-txt">\r\n            <div class="chart-txt-top">\r\n                <span>\r\n                    <img src="/img/assets/{{ signal.signal.asset.socket_id }}.png" alt="">\r\n                </span>\r\n                <span class="caption">\r\n                    {{ signal.signal.asset.title }}\r\n                </span>\r\n            </div>\r\n            <div class="chart-info current-rate">\r\n                <div class="chart-info-header">\r\n                    Current Rate\r\n                </div>\r\n                <div class="chart-info-value">\r\n                    <span ng-show="signal.currentRate">\r\n                        {{ signal.currentRate }}\r\n                    </span>\r\n                    <span ng-show=" ! signal.currentRate">\r\n                        Loading ..\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class="chart-info direction">\r\n                <div class="chart-info-header">\r\n                    Direction\r\n                </div>\r\n                <div class="chart-info-value">\r\n                    <div class="direction-txt">Call</div>\r\n                    <div class="direction-avatar">\r\n                        <span ng-show="signal.signal.direction">\r\n                            <img src="/img/call2.png" alt="">\r\n                        </span>\r\n                        <span ng-show=" ! signal.signal.direction">\r\n                            <img src="/img/put2.png" alt="">\r\n                        </span>\r\n                    </div>\r\n                    <div class="clearfix"></div>\r\n                </div>\r\n            </div>\r\n            <div class="chart-info signal-rate-range">\r\n                <div class="chart-info-header">\r\n                    Signal Rate Range\r\n                </div>\r\n                <div class="chart-info-value">\r\n                    <div class="signal-range">\r\n                        <div class="signal-range-txt">HIGH</div>\r\n                        <div class="signal-range-value">4.121</div>\r\n                    </div>\r\n                    <div class="signal-range">\r\n                        <div class="signal-range-txt">LOW</div>\r\n                        <div class="signal-range-value">4.02</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="chart-info expires">\r\n                <div class="chart-info-header">\r\n                    Option Expiry Time\r\n                </div>\r\n                <div class="chart-info-value">\r\n                    May 30, 2016 03:00:00 PM\r\n                </div>\r\n            </div>\r\n            <button class="btn btn-green signal-order-btn" ng-click="openBuyOrder()">\r\n                Buying Order <span class="fa fa-angle-double-right"></span>\r\n            </button>\r\n        </div>\r\n        <div class="chart-container">\r\n            <div class="chart-container-in">\r\n                <candle-stick id="chart_div" cs-data="signal.chartData"></candle-stick>\r\n                <div class="buying-order-mask fadeInLeft animated" style="display: none">\r\n                    <div class="buying-order-box">\r\n                        <div class="slider">\r\n                            <span>Select Investment Amount</span>\r\n                            <slider ng-model="buyOptions.amount" options="sliderOptions"></slider>\r\n                        </div>\r\n                        <div class="investment text-center">\r\n                            <div class="pull-left">\r\n                                Investment: <br>\r\n                                <span class="investment-number">${{ buyOptions.amount }}</span>\r\n                            </div>\r\n                            <div class="pull-right">\r\n                                Potential Profit: <br>\r\n                                <span class="profit-number">${{ buyOptions.amount / 100 * 83 | number: 2 }}</span>\r\n                            </div>\r\n                            <div class="clearfix"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="buttons">\r\n                        <button class="btn btn-default" ng-click="closeBuyOrder()">Cancel</button>\r\n                        <button class="btn btn-green" ng-click="buySignal()">Confirm</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div><!--.chart-statistic-box-->\r\n</div>\r\n')}]);