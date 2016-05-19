/**
 * Created by roee on 2/1/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.states.layout', [
    'ui.router'
])
.config(function ($stateProvider) {
    $stateProvider.state('app', {
        url: '/',
        abstract: true,
        views: {
            'header@': {
                templateUrl: 'app/common/states/layout/header/header.tpl.html',
                controller: 'app.states.layout.headerCtrl'
            },
            'navbar@': {
                templateUrl: 'app/common/states/layout/navbar/navbar.tpl.html',
                controller: 'app.states.layout.navbarCtrl'
            }
        }
    });
})
.run(function($rootScope) {
    $rootScope.image = function(img) {
        return '/images/' + img
    }
});