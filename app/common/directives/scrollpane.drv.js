/**
 * Created by roee on 18/04/2016.
 */
angular.module('app.common.directives')
    .directive('scrollPane', function () {
            return {
                restrict: 'A',
                scope: { options: '@' },
                link: function (scope, element) {
                    var jScrollOptions = {
                        autoReinitialise: true,
                        autoReinitialiseDelay: 100
                    };

                    jScrollOptions = $.extend(jScrollOptions, (scope.options || {}));
                    element.jScrollPane(jScrollOptions);
                }
            };
        }
    );
