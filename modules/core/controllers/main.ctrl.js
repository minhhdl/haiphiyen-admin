'use strict';
/**
 * @ngdoc function
 * @name com.module.core.controller:MainCtrl
 * @description Login Controller
 * @requires $scope
 * @requires $state
 * @requires $location
 * @requires CoreService
 * @requires AppAuth
 * @requires User
 * @requires gettextCatalog
 **/
angular.module('com.module.core')
    .controller('MainCtrl', function ($window, $scope, $rootScope, $state, $location,
                                      CoreService, gettextCatalog, ApiService) {
        if (!$rootScope.apiChecked && localStorage.accessToken) {
            ApiService.checkApi(localStorage.accessToken,
                function (response) {
                    $rootScope.currentUser = response.data;
                    $rootScope.apiChecked = true;
                });
        }
        if (!localStorage.accessToken) {
            var config = {
                title: 'Thông báo',
                text: 'Bạn chưa đăng nhập. Vui lòng đăng nhập để sử dụng dịch vụ',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#DD6B55'
            }
            CoreService._swal(config, function () {
                $state.go('login');
            })
        }
        $scope.menuoptions = [{
            "menuList": [
                {
                    "name": "Thuế + Phí",
                    "icon": "fa-edit",
                    "subList": [{
                        "name": "Phí",
                        "sref": "app.phi.list"
                    }]
                }, {
                    "name": "Cộng tác viên",
                    "icon": "fa-users",
                    "subList": [{
                        "name": "Danh sách",
                        "sref": "app.users.list"
                    }, {
                        "name": "Tạo tài khoản",
                        "sref": "app.users.add"
                    }, {
                        "name": "Thống kê",
                        "sref": ""
                    }]
                }, {
                    "name": "Khuyến mãi",
                    "icon": "fa-desktop",
                    "subList": [{
                        "name": "Danh sách",
                        "sref": "app.promo.list"
                    }, {
                        "name": "Đăng tin mới",
                        "sref": "app.promo.add"
                    }]
                }, {
                    "name": "Tin tức",
                    "icon": "fa-newspaper-o",
                    "subList": [{
                        "name": "Danh sách",
                        "sref": "app.news.list"
                    }, {
                        "name": "Đăng tin mới",
                        "sref": "app.news.add"
                    }]
                }, {
                    "name": "Panel",
                    "icon": "fa-table",
                    "subList": [{
                        "name": "Slide trang chủ",
                        "sref": "app.slide.list"
                    }, {
                        "name": "Panel quảng cáo",
                        "sref": "app.panel.list"
                    }, {
                        "name": "Thêm slide trang chủ",
                        "sref": "app.panel.addSlide"
                    }, {
                        "name": "Thêm panel quảng cáo",
                        "sref": "app.panel.addPanel"
                    }]
                }]
        }, {
            "menuList": [{
                "name": "Các hãng",
                "icon": "fa-plane",
                "subList": [{
                    "name": "Vietjet",
                    "sref": ""
                }, {
                    "name": "Jetstar",
                    "sref": ""
                }, {
                    "name": "Vietnam Airline",
                    "sref": ""
                }, {
                    "name": "Các hãng khác",
                    "sref": ""
                }]
            }, {
                "name": "Cộng tác viên",
                "icon": "fa-users",
                "subList": [{
                    "name": "Danh sách",
                    "sref": ""
                }, {
                    "name": "Tạo tài khoản",
                    "sref": ""
                }, {
                    "name": "Thống kê",
                    "sref": ""
                }]
            }, {
                "name": "Ngân hàng",
                "sref": "",
                "icon": "fa-money",
                "subList": []
            }]
        }];

        $scope.logout = function () {
            ApiService.logout(localStorage.accessToken, function (response) {
                delete localStorage.accessToken;
                delete localStorage.currentUserName;
                $location.path('/login');
            }, function (response) {
                console.log(response)
            })
        };

    });
