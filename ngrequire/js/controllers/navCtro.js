define(['./module'], function (controllers) {
    'use strict';
    controllers.controller("navCtro", ["$scope","$state",function ($scope,$state) {
        $scope.goHome = function () {
            $state.go("home");
        };
        $scope.goAbout = function () {
            $state.go("news");
        };
        $scope.goContact = function () {
            $state.go("contact");
        };
    }]);
});