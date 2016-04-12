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
    $stateProvider.state('app.customers', {
        url: '',
        abstract: true,
        views: {
            'navbar@': {
                templateUrl: 'app/common/states/layout/navbar/navbar.tpl.html',
                controller: 'app.states.layout.navbarCtrl'
            }
        }
    });

    $stateProvider.state('app.security', {
        url: 'auth/',
        abstract: true
    });
})
.run(function($rootScope) {
    $rootScope.image = function(img) {
        return '/images/' + img
    }
});