/**
 * Created by roee on 18/04/2016.
 */
angular.module('app.common.directives')
    .directive('assetRate', function (assetFeedService) {
            return {
                restrict: 'E',
                scope: { asset: '@' },
                tag: 'div',
                link: function (scope, element) {
                    var rate;
                    var subscribe = assetFeedService.subscribe(function (asset, data, current, direction) {
                        if (direction) {
                            element.html(current + '<span class="caret caret-up color-green"></span>');
                        }
                        else {
                            element.html(current + '<span class="caret color-red"></span>');
                        }

                        rate = current;
                    });

                    subscribe.setAsset(scope.asset);
                }
            };
        }
    );
