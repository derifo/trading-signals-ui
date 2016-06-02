/**
 * Created by roee on 18/04/2016.
 */
angular.module('app.common.directives')
    .directive('slider', function () {
        return {
            restrict: 'E',
            scope: {
                options: '=',
                ngModel: '='
            },
            link: function (scope, element) {
                var options = scope.options || {};

                options.from = scope.ngModel || 25;

                options = $.extend(options, {
                    step: 25,
                    onChange: function (data) {
                        scope.ngModel = data.from;
                        scope.$apply();
                    }
                });

                element.ionRangeSlider(options);
            }
        };
    }
);
