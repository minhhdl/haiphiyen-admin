'use strict';

angular.module('com.module.news')
    .controller('NewsFormCtrl', function (ApiService, $scope, $window, $state, CoreService, $stateParams) {
        $scope.loading = true;
        $(document).ready(function () {
            $('#editor').wysiwyg();
            $('.dropdown-menu input').click(function () {
                return false;
            })
                .change(function () {
                    $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
                }).keydown('esc', function () {
                    this.value = '';
                    $(this).change();
                });
        })

        if ($stateParams.id) {
            ApiService.getOneNews(localStorage.accessToken, $stateParams.id, function (response) {
                console.log(response)
                $scope.loading = false;
                $scope.news = response.data;
                $('#editor').html(response.data.content)
            })
            $scope.onSubmit = function () {
                $scope.news.content = $('#editor').cleanHtml();
                ApiService.editNews(localStorage.accessToken, $scope.news, function (response) {
                    CoreService.toastSuccess('Success!');
                    $state.go('app.news.list');
                })
            }
        } else {
            $scope.loading = false;
            $scope.news = {};
            $scope.onSubmit = function () {
                $scope.news.content = $('#editor').cleanHtml();
                ApiService.addNews(localStorage.accessToken, $scope.news, function (response) {
                    CoreService.toastSuccess('Success!');
                    $state.go('app.news.list');
                })
            }
        }

        $scope.onView = function (item) {
            $scope.news.content = $('#editor').cleanHtml();
        }


    })