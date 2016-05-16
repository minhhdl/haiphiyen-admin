'use strict';

angular.module('com.module.slide')
    .controller('SlideFormCtrl', function (ApiService, $scope, $window, $state, CoreService, $stateParams) {

        $scope.slide = {};
        $scope.onSubmit = function () {
            ApiService.addSlide(localStorage.accessToken, $scope.slide, function (response) {
                CoreService.toastSuccess('Success!');
                $state.go('app.slide.list');
            })
        }


    })