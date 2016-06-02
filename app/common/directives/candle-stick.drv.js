/**
 * Created by roee on 23/05/2016.
 */
angular.module('app.common.directives')
    .directive('candleStick', function ($timeout) {
        return {
            restrict: 'E',
            scope: { csData: '=', options: '=' },
            link: function (scope, element) {
                var loaded = false;
                var initialized = false;
                var chart;

                function updateChart(csData) {

                    if ( ! csData.length) return;

                    if ( ! initialized) {
                        initialized = true;
                        chart = new google.visualization.AreaChart(element[0]);
                    }

                    csData = csData.slice(0, 24);

                    var options = {
                        height: 384,
                        width: $('.chart-container-in').width(),
                        legend: 'none',
                        areaOpacity: 0.18,
                        axisTitlesPosition: 'out',
                        hAxis: {
                            title: '',
                            textStyle: {
                                color: '#fff',
                                fontName: 'Proxima Nova',
                                fontSize: 11,
                                bold: true,
                                italic: false
                            },
                            textPosition: 'none'
                        },
                        vAxis: {
                            textPosition: 'in',
                            textStyle: {
                                color: '#fff',
                                fontName: 'Proxima Nova',
                                fontSize: 11,
                                bold: true,
                                italic: false
                            },
                            baselineColor: '#16b4fc',
                            gridlines: {
                                color: '#1ba0fc',
                                count: 5
                            }
                        },
                        lineWidth: 2,
                        colors: ['#fff'],
                        curveType: 'function',
                        pointSize: 5,
                        pointShapeType: 'circle',
                        pointFillColor: '#f00',
                        backgroundColor: {
                            fill: '#008ffb',
                            strokeWidth: 0
                        },
                        chartArea:{
                            left:0,
                            top:0,
                            width:'100%',
                            height:'100%'
                        },
                        fontSize: 11,
                        fontName: 'Proxima Nova',
                        tooltip: {
                            trigger: 'selection',
                            isHtml: true
                        }
                    };

                    var data = google.visualization.arrayToDataTable(csData, true);

                    chart.draw(data, options);
                }

                $(window).resize(function(){
                    updateChart(scope.csData);
                    setTimeout(function(){
                    }, 1000);
                });

                google.charts.load('current', {'packages':['corechart']});
                google.charts.setOnLoadCallback(function() {
                    loaded = true;
                    var checkInterval = setInterval(function () {
                        if(scope.csData) {
                            updateChart(scope.csData);
                            clearInterval(checkInterval);
                        }
                    }, 100);
                });

                scope.$watch('csData', function() {
                    if (loaded && scope.csData) {
                        updateChart(scope.csData);
                    }
                });
            }
        }
    });