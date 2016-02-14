'use strict';

angular.module('common')
    .controller('formCtrl', [
        '$scope', '$http', function ($scope, $http) {

            $scope.book = {};

            $scope.update = function () {
                $http.post('http://angulardemorest20160209095427.azurewebsites.net/api/books', $scope.book)
                    .success(function (data) {
                        $scope.book = {};
                        alert("Success!");
                    })
                    .error(function (data) {
                        alert("Error sending data: " + JSON.stringify({data: data}));
                    });
            }

            $scope.nameIsTooLong = function() {
                var field = $scope.bookForm['authorName'];
                return field.$error.maxlength;
            }
        }
    ]);