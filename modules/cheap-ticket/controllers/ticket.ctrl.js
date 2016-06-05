'use strict';

angular.module('com.module.cheapTicket')
    .controller('TicketCtrl', function (ApiService, $scope, $window, CoreService) {
        $scope.loading = true;
        $scope.searchText = '';
        ApiService.find('cheapest', localStorage.accessToken, function (response) {
            console.log(response.data)
            $scope.cheapTickets = response.data;
            $scope.myOrder = '';
            $scope.myReverse = true;
            $scope.loading = false;
            $scope.orderMe = function (orderBy) {
                $scope.myOrder = orderBy;
                $scope.myReverse = ($scope.myOrder == orderBy) ? $scope.myReverse = !$scope.myReverse : $scope.myReverse = fasle;
            }

            $scope.viewby = 10;
            $scope.currentPage = 1;
            $scope.itemsPerPage = $scope.viewby;
            $scope.maxSize = 5;
            $scope.totalItems = $scope.cheapTickets.length;
            $scope.totalPage = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.setItemsPerPage = function (num) {
                $scope.itemsPerPage = num;
                $scope.currentPage = 1; //reset to first paghe
                $scope.totalPage = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            };
            $scope.deleteUser = function (id) {
                CoreService.confirm('Xác nhận', 'Bạn có thực sự muốn xóa', function () {
                    ApiService.deleteById('cheapest', localStorage.accessToken, id, function () {
                        ApiService.find('cheapest', localStorage.accessToken, function (response) {
                            CoreService.toastSuccess('Success!');
                            $scope.cheapTickets = response.data;
                        })
                    })
                }, function () {

                })
            }
            $scope.onEdit = function (item) {
                $scope.editItem = item;
            }
            $scope.editCheapTicket = function(item){
                ApiService.update('cheapest', localStorage.accessToken, item.id, item, function(){
                    ApiService.find('cheapest', localStorage.accessToken, function (response) {
                        $('#editModal').modal('hide')
                        CoreService.toastSuccess('Success!');
                        $scope.cheapTickets = response.data;
                    })
                })
            }
        })
    })