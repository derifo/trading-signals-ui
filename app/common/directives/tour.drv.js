/**
 * Created by roee on 18/04/2016.
 */
angular.module('app.common.directives')
    .directive('tour', function () {
            return {
                restrict: 'E',
                scope: {
                    options: '='
                },
                link: function (scope, element) {

                }
            };
        }
    );
