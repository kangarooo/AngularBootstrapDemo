'use strict';

angular.module('common', []);

var myApp = angular.module('myApp', ['common', 'ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('home');

    $stateProvider
        .state('homeState', {
            url: '/home',
            templateUrl: 'app/components/home/home.html'
        })
        .state('firstState', {
            url: '/first',
            templateUrl: 'app/components/first/first.html'
        })
        .state('secondState', {
            url: '/second',
            templateUrl: 'app/components/second/second.html'
        })
        .state('thirdState', {
            url: '/third',
            templateUrl: 'app/components/third/third.html'
        });

});

myApp.run(['$rootScope', function ($rootScope) {
    $rootScope.sampleContent = 'Hello world!';
}]);