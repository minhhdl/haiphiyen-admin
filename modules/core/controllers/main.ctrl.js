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
  .controller('MainCtrl', function($scope, $rootScope, $state, $location,
    CoreService, gettextCatalog, $cookieStore) {
  	if (angular.isDefined($cookieStore.get('currentUser'))) {
        $rootScope.currentUser = $cookieStore.get('currentUser');
    } else {
        $location.path('/login');
    }
    $scope.menuoptions = [{
    	"menuList": [{
    		"name": "Dashboard",
    		"sref": "app.home",
    		"icon": "fa-dashboard"
    	},{
    		"name": "Thuế + Phí",
    		"sref": "",
    		"icon": "fa-edit",
    		"subList": [{
    			"name": "Phí",
	    		"sref": "app.phi.list"
    		}]
    	},{
    		"name": "Cộng tác viên",
    		"sref": "",
    		"icon": "fa-users",
    		"subList": [{
    			"name": "Danh sách",
	    		"sref": ""
    		},{
    			"name": "Tạo tài khoản",
	    		"sref": ""
    		},{
    			"name": "Thống kê",
	    		"sref": ""
    		}]
    	},{
    		"name": "Khuyến mãi",
    		"sref": "",
    		"icon": "fa-desktop",
    		"subList": [{
    			"name": "Danh sách",
	    		"sref": ""
    		},{
    			"name": "Đăng tin mới",
	    		"sref": ""
    		}]
    	},{
    		"name": "Tin tức",
    		"sref": "",
    		"icon": "fa-newspaper-o",
    		"subList": [{
    			"name": "Danh sách",
	    		"sref": ""
    		},{
    			"name": "Đăng tin mới",
	    		"sref": ""
    		}]
    	},{
    		"name": "Panel",
    		"sref": "",
    		"icon": "fa-table",
    		"subList": [{
    			"name": "Slide trang chủ",
	    		"sref": ""
    		},{
    			"name": "Panel quảng cáo",
	    		"sref": ""
    		},{
    			"name": "Thêm slide trang chủ",
	    		"sref": ""
    		},{
    			"name": "Thêm panel quảng cáo",
	    		"sref": ""
    		}]
    	}]
    },{
    	"menuList": [{
    		"name": "Các hãng",
    		"sref": "",
    		"icon": "fa-plane",
    		"subList": [{
    			"name": "Vietjet",
	    		"sref": ""
    		},{
    			"name": "Jetstar",
	    		"sref": ""
    		},{
    			"name": "Vietnam Airline",
	    		"sref": ""
    		},{
    			"name": "Các hãng khác",
	    		"sref": ""
    		}]
    	},{
    		"name": "Cộng tác viên",
    		"sref": "",
    		"icon": "fa-users",
    		"subList": [{
    			"name": "Danh sách",
	    		"sref": ""
    		},{
    			"name": "Tạo tài khoản",
	    		"sref": ""
    		},{
    			"name": "Thống kê",
	    		"sref": ""
    		}]
    	},{
    		"name": "Ngân hàng",
    		"sref": "",
    		"icon": "fa-money",
    		"subList": []
    	}]
    }];

    $scope.logout = function() {
      $state.go('login');
      CoreService.toastSuccess(gettextCatalog.getString('Logged out'),
        gettextCatalog.getString('You are logged out!'));
    };

  });
