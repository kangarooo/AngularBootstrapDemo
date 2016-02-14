'use strict';

angular.module('common')
    .directive('bootstrapHeader', [function() {
        return {
            restrict: 'E',
            templateUrl: '../app/components/header/bootstrapHeader.html',
            controller: ['$scope', function($scope) {
                $scope.pages = ['First', 'Second', 'Third'];
            }]
        }
    }]);