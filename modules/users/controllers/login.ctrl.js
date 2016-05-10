(function () {
  'use strict';
  /**
   * @ngdoc function
   * @name com.module.users.controller:LoginCtrl
   * @description Login Controller
   * @requires $scope
   * @requires $routeParams
   * @requires $location
   * Contrller for Login Page
   **/
  angular
    .module('com.module.users')
    .controller('LoginCtrl', function ($http, $scope, $location, CoreService, gettextCatalog, $rootScope, $cookieStore) {

      var TWO_WEEKS = 1000 * 60 * 60 * 24 * 7 * 2;

      $scope.credentials = {
        ttl: TWO_WEEKS,
        rememberMe: true
      };

      if (CoreService.env.name === 'development') {
        $scope.credentials.email = 'admin';
        $scope.credentials.password = 'admin';
      }

      $scope.schema = [
        {
          label: '',
          property: 'username',
          placeholder: gettextCatalog.getString('User Name'),
          type: 'text',
          attr: {
            required: true,
            ngMinlength: 4
          }
        },
        {
          label: '',
          property: 'password',
          placeholder: gettextCatalog.getString('Password'),
          type: 'password',
          attr: {
            required: true
          }
        },
        {
          property: 'rememberMe',
          label: gettextCatalog.getString('Stay signed in'),
          type: 'checkbox'
        }
      ];

      $scope.options = {
        validation: {
          enabled: true,
          showMessages: false
        },
        layout: {
          type: 'basic',
          labelSize: 3,
          inputSize: 9
        }
      };


      $scope.login = function () {
        $http({
          method: 'POST',
          url: 'http://api.vemaybayhaiphiyen.com/administrator/users/login',
          data: $scope.credentials,
          headers: {
            'Authorization' : 'Basic ' + window.btoa(unescape(encodeURIComponent($scope.credentials.username + ':' + $scope.credentials.password)))
          }
        })
        .then(function successCallback(response) {
            $rootScope.currentUser = response.data;
            console.log($rootScope.currentUser)
            $cookieStore.put('currentUser', response.data);
            $location.path('/app');
          }, function errorCallback(response) {
            $scope.loginError = {message: "Error! Please check username or password and try again"}
          });
      };

    });

})();
