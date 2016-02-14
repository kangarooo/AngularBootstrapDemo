'use strict';

angular.module('common')
    .controller('bookListCtrl', [
        '$scope', '$http', function ($scope, $http) {

            $scope.books = [];

            $scope.refreshData = function() {
                $http.get('http://angulardemorest20160209095427.azurewebsites.net/api/books').success(function (data) {
                    $scope.books = data;
                });
            }
        }
    ]);