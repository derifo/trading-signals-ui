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
            'navbar@': {
                templateUrl: 'app/common/states/layout/navbar/navbar.tpl.html',
                controller: 'app.states.layout.navbarCtrl'
            },
            'sidebar@': {
                templateUrl: 'app/common/states/layout/sidebar/sidebar.tpl.html',
                controller: 'app.states.layout.sidebarCtrl'
            }
        }
    });
})
.run(function($rootScope) {
    $rootScope.image = function(img) {
        return '/images/' + img
    }
});