/**
 * Created by roee on 23/05/2016.
 */
angular.module('app.common.directives')
    .directive('candleStick', function ($timeout) {
        return {
            restrict: 'E',
            scope: { csData: '=', options: '=' },
            link: function (scope, element) {
                element.addClass('candle-stick-custom');
                function updateChart(csData, options) {
                    var chart = AmCharts.makeChart(element[0], {
                        "type": "serial",
                        "theme": "light",
                        "dataDateFormat": "YYYY-MM-DD HH:NN:SS",
                        "valueAxes": [{
                            "position": "left",
                            "guides": [
                                {
                                    "toValue": scope.options.max_rate,
                                    "value": scope.options.min_rate,
                                    lineColor: "blue",
                                    lineAlpha: 1,
                                    fillAlpha: 0.07,
                                    fillColor: "blue",
                                    dashLength: 2,
                                    inside: true,
                                },
                                {
                                    "toValue": scope.options.open_rate,
                                    "value": scope.options.open_rate,
                                    lineColor: "navy",
                                    lineAlpha: 1,
                                    dashLength: 2,
                                    inside: true,
                                    labelRotation: 90,
                                    fontSize: "15",
                                    label: "Signal Rate"
                                }]
                        }],
                        "graphs": [{
                            "id": "g1",
                            "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
                            "closeField": "close",
                            "fillColors": "#db4c3c",
                            "highField": "high",
                            "lineColor": "#000000",
                            "lineAlpha": 1,
                            "lowField": "low",
                            "fillAlphas": 0.9,
                            "negativeFillColors": "green",
                            "negativeLineColor": "green",
                            "openField": "open",
                            "title": "Price:",
                            "type": "candlestick",
                            "valueField": "close"
                        }],
                        "chartScrollbar": {
                            "graph": "g1",
                            "graphType": "line",
                            "scrollbarHeight": 30
                        },
                        "chartCursor": {
                            "valueLineEnabled": true,
                            "valueLineBalloonEnabled": true
                        },
                        "categoryField": "date",
                        "categoryAxis": {
                            "parseDates": true,
                            "minPeriod": "10mm"
                        },
                        "dataProvider": csData,
                        "export": {
                            "enabled": true,
                            "position": "bottom-right"
                        }
                    });

                    chart.addListener( "rendered", zoomChart );
                    zoomChart();


                    function zoomChart() {
                        // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
                        chart.zoomToIndexes( chart.dataProvider.length - 10, chart.dataProvider.length - 1 );
                    }
                }

                var dataReady = false;
                scope.$watch('csData', function() {
                    var options = scope.options || {};
                    console.log('DATA:' + JSON.stringify(scope.csData));
                    updateChart(scope.csData, options);

                });
            }
        }
    });