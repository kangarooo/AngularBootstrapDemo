'use strict';

angular.module('common')
    .controller('contentCtrl', [
        '$scope', function($scope) {
            $scope.controllerContent = 'This is text from controller';
        }
    ]);