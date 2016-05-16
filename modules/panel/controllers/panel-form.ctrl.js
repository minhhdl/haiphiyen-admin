'use strict';

angular.module('com.module.panel')
    .controller('PanelFormCtrl', function (ApiService, $scope, $window, $state, CoreService, $stateParams) {

        $scope.panel = {};
        $scope.onSubmit = function () {
            4
            $scope.panel.image = $('input[name=image]').get(0).files[0];
            var formData = new FormData();
            formData.append('image', $scope.panel.image);
            formData.append('link', $scope.panel.link);
            formData.append('index', $scope.panel.index);
            ApiService.addPanel(localStorage.accessToken, $scope.panel, function (response) {
                CoreService.toastSuccess('Success!');
                $state.go('app.panel.list');
            })
        }


    })