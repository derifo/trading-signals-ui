/**
 * Created by roee on 18/04/2016.
 */
angular.module('app.common.directives')
    .directive('pageCenter', function () {
            return {
                restrict: 'E',
                scope: {},
                link: function (scope, element) {
                    element.addClass('hidden');
                    setTimeout(function () {
                        element
                            .removeClass('hidden')
                            .addClass('page-center');
                        
                        element.matchHeight({
                            target: $('html')
                        });
                    }, 100);

                    $(window).resize(function(){
                        setTimeout(function(){
                            element.matchHeight({ remove: true });
                            element.matchHeight({
                                target: $('html')
                            });
                        }, 100);
                    });
                }
            };
        }
    );
