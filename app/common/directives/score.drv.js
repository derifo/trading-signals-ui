/**
 * Created by roee on 18/04/2016.
 */
angular.module('app.common.directives')
    .directive('score', function () {
        return {
            restrict: 'A',
            scope: { score: '@' },
            link: function (scope, element) {
                var score = scope.score / 20;

                for(var i = 1; i <= 5; i += 1) {
                    if (score >= i){
                        element.append($('<span></span>', { 'class': 'fa fa-star' }))
                    }
                    else if (score + 0.5 >= i)
                    {
                        element.append($('<span></span>', { 'class': 'fa fa-star-half-o' }))
                    }
                    else {
                        element.append($('<span></span>', { 'class': 'fa fa-star-o' }))
                    }

                    console.log(i);
                    console.log(score);
                }
            }
        };
    }
);
