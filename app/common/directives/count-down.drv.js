/**
 * Created by roee on 18/04/2016.
 */
angular.module('app.common.directives')
    .directive('countdown', function ($interval) {
        return {
            restrict: 'A',
            scope: { endTime: '@' },
            link: function (scope, element) {
                function getTimeRemaining(endtime) {
                    endtime = endtime.replace('+0200', '');
                    var t = Date.parse(moment.utc(endtime).local().format('YYYY-MM-DD HH:mm:ss')) - Date.parse(new Date());
                    var seconds = Math.floor((t / 1000) % 60);
                    var minutes = Math.floor((t / 1000 / 60) % 60);
                    var hours = Math.floor(t / (1000 * 60 * 60));

                    return {
                        'total': t,
                        'hours': hours > 9 ? hours : '0' + hours,
                        'minutes': minutes > 9 ? minutes : '0' + minutes,
                        'seconds': seconds > 9 ? seconds : '0' + seconds
                    };
                }
            

                function initializeClock(endtime) {
                    function updateClock() {
                        var t = getTimeRemaining(endtime);

                        element.text(t.hours + ':' + t.minutes + ':' + t.seconds);
                        if (t.total <= 0) {
                            clearInterval(timeinterval);
                        }
                    }

                    updateClock();
                    var timeinterval = $interval(updateClock, 1000);
                }

                initializeClock(scope.endTime);
            }
        };
    }
);
