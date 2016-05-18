'use strict';

angular.module('com.module.panel')
    .controller('SlideCtrl', function (ApiService, $scope, $window, CoreService) {
        $scope.loading = true;
        $scope.searchText = '';
        ApiService.getSlides(localStorage.accessToken, function (response) {

            $scope.slides = response.data;
            $scope.myOrder = 'id';
            $scope.myReverse = false;
            $scope.loading = false;
            $scope.orderMe = function (orderBy) {
                $scope.myOrder = orderBy;
                $scope.myReverse = ($scope.myOrder == orderBy) ? $scope.myReverse = !$scope.myReverse : $scope.myReverse = fasle;
            }

            $scope.viewby = 10;
            $scope.currentPage = 1;
            $scope.itemsPerPage = $scope.viewby;
            $scope.maxSize = 5;
            $scope.totalItems = $scope.slides.length;
            $scope.totalPage = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.setItemsPerPage = function (num) {
                $scope.itemsPerPage = num;
                $scope.currentPage = 1; //reset to first paghe
                $scope.totalPage = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            };
            $scope.deleteSlide = function (id) {
                CoreService.confirm('Xác nhận', 'Bạn có thực sự muốn xóa', function () {
                    ApiService.deleteSlide(localStorage.accessToken, id, function () {
                        ApiService.getSlides(localStorage.accessToken, function (response) {
                            $scope.slides = response.data;
                        })
                    })
                }, function () {

                })
            }
            $scope.onView = function (item) {
                $scope.viewItem = item;
            }
            $scope.onEdit = function(item){
                $scope.editItem = item;
            }
            $scope.editSlide = function(item){
                ApiService.editSlide(localStorage.accessToken, item, function(){
                    ApiService.getSlides(localStorage.accessToken, function (response) {
                        $scope.slides = response.data;
                    })
                })
            }
        })
    })