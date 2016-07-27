define(['./module'], function (controllers) {
    'use strict';
    controllers.controller("mainController", ["$scope","$state",function ($scope,$state) {
        $scope.goToHome = function () {
            $state.go("home");
        };
        $scope.goToNews = function () {
            $state.go("news");
        }
        ;$scope.goToRun = function () {
            $state.go("run");
        };
    }]);
});