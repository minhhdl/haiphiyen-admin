'use strict';
var app = angular.module('com.module.core');

app.service('ApiService', function ($http, $window, $location, CoreService, $state) {
    var apiURL = 'http://api.vemaybayhaiphiyen.com/administrator';


    function error(response) {
        console.log(response)
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
                'Authorization': 'Bearer ' + token,
                'Content-Type': undefined
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
    this.getOneUser = function (token, id, successCb, errorCb) {
        $http({
            method: 'GET',
            url: apiURL + '/users/' + id,
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

    this.addUser = function (token, data, successCb, errorCb) {
        $http({
            method: 'POST',
            url: apiURL + '/users',
            data: data,
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

    this.deleteUser = function (token, id, successCb, errorCb) {
        $http({
            method: 'DELETE',
            url: apiURL + '/users/' + id,
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

    //Price Options API
    this.getPriceOptions = function (token, successCb, errorCb) {
        $http({
            method: 'GET',
            url: apiURL + '/price-options',
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

    this.editPriceOption = function (token, id, data, successCb, errorCb) {
        $http({
            method: 'PUT',
            url: apiURL + '/price-options/' + id,
            data: data,
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

    //News API
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

    this.getOneNews = function (token, id, successCb, errorCb) {
        $http({
            method: 'GET',
            url: apiURL + '/newses/' + id,
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

    this.addNews = function (token, data, successCb, errorCb) {
        $http({
            method: 'POST',
            url: apiURL + '/newses',
            data: data,
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

    this.editNews = function (token, data, successCb, errorCb) {
        $http({
            method: 'PUT',
            url: apiURL + '/newses/' + data.id,
            data: data,
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

    this.deleteNews = function (token, id, successCb, errorCb) {
        $http({
            method: 'DELETE',
            url: apiURL + '/newses/' + id,
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

    //Promo API
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
    this.getOnePromo = function (token, id, successCb, errorCb) {
        $http({
            method: 'GET',
            url: apiURL + '/promotions-news/' + id,
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

    this.addPromo = function (token, data, successCb, errorCb) {
        $http({
            method: 'POST',
            url: apiURL + '/promotions-news',
            data: data,
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

    this.editPromo = function (token, data, successCb, errorCb) {
        $http({
            method: 'PUT',
            url: apiURL + '/promotions-news/' + data.id,
            data: data,
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

    this.deletePromo = function (token, id, successCb, errorCb) {
        $http({
            method: 'DELETE',
            url: apiURL + '/promotions-news/' + id,
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

    //Panels API
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
    this.getOnePanel = function (token, id, successCb, errorCb) {
        $http({
            method: 'GET',
            url: apiURL + '/panels/' + id,
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

    this.addPanel = function (token, data, successCb, errorCb) {
        $http({
            method: 'POST',
            url: apiURL + '/panels',
            data: data,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': undefined
            }
        })
            .then(function successCallback(response) {
                successCb(response);
            }, function errorCallback(response) {
                error(response);
            });
    }

    this.editPanel = function (token, data, successCb, errorCb) {
        $http({
            method: 'PUT',
            url: apiURL + '/panels/' + data.id,
            data: data,
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

    this.deletePanel = function (token, id, successCb, errorCb) {
        $http({
            method: 'DELETE',
            url: apiURL + '/panels/' + id,
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
    //Slides API
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
    this.getOneSlide = function (token, id, successCb, errorCb) {
        $http({
            method: 'GET',
            url: apiURL + '/slidess/' + id,
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

    this.addSlide = function (token, data, successCb, errorCb) {
        $http({
            method: 'POST',
            url: apiURL + '/slides',
            data: data,
            transformRequest: angular.identity,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': undefined
            }
        })
            .then(function successCallback(response) {
                successCb(response);
            }, function errorCallback(response) {
                error(response);
            });
    }

    this.editSlide = function (token, data, successCb, errorCb) {
        $http({
            method: 'PUT',
            url: apiURL + '/slides/' + data.id,
            data: data,
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

    this.deleteSlide = function (token, id, successCb, errorCb) {
        $http({
            method: 'DELETE',
            url: apiURL + '/slides/' + id,
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
