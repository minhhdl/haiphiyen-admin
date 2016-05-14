'use strict';
var app = angular.module('com.module.core');

app.service('ApiService', function ($http, $window, $location, CoreService, $state) {
    var apiURL = 'http://api.vemaybayhaiphiyen.com/administrator';


    function error(response) {
        if (response.status == 401) {
            var config = {
                title: 'Thông báo',
                text: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại và tiếp tục sử dụng dịch vụ',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#DD6B55'
            }
            CoreService._swal(config, function () {
                delete localStorage.accessToken;
                $state.go('login');
            })
        }
    }

    this.checkApi = function (token, successCb, errorCb) {
        $http({
            method: 'GET',
            url: apiURL + '/me',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(function successCallback(response) {
                successCb(response);
            }, function errorCallback(response) {
                error(response);
            });
    }

    this.login = function (credentials, successCb, errorCb) {
        $http({
            method: 'POST',
            url: apiURL + '/users/login',
            headers: {
                'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent(credentials.username + ':' + credentials.password)))
            }
        })
            .then(function successCallback(response) {
                successCb(response);
            }, function errorCallback(response) {
                errorCb(response);
            });
    }

    this.logout = function (token, successCb, errorCb) {
        $http({
            method: 'POST',
            url: apiURL + '/users/logout',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(function successCallback(response) {
                successCb(response);
            }, function errorCallback(response) {
                errorCb(response);
            });
    }

    this.getUsers = function (token, successCb, errorCb) {
        $http({
            method: 'GET',
            url: apiURL + '/users',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(function successCallback(response) {
                successCb(response);
            }, function errorCallback(response) {
                error(response);
            });
    }

    this.getNews = function (token, successCb, errorCb) {
        $http({
            method: 'GET',
            url: apiURL + '/newses',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(function successCallback(response) {
                successCb(response);
            }, function errorCallback(response) {
                error(response);
            });
    }

    this.getPromoNews = function (token, successCb, errorCb) {
        $http({
            method: 'GET',
            url: apiURL + '/promotions-news',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(function successCallback(response) {
                successCb(response);
            }, function errorCallback(response) {
                error(response);
            });
    }

    this.getPanels = function (token, successCb, errorCb) {
        $http({
            method: 'GET',
            url: apiURL + '/panels',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(function successCallback(response) {
                successCb(response);
            }, function errorCallback(response) {
                error(response);
            });
    }

    this.getSlides = function (token, successCb, errorCb) {
        $http({
            method: 'GET',
            url: apiURL + '/slides',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(function successCallback(response) {
                successCb(response);
            }, function errorCallback(response) {
                error(response);
            });
    }

});
