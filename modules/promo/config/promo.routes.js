angular.module('com.module.promo')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.promo', {
                url: '/khuyen-mai',
                templateUrl: 'modules/promo/views/main.html',
                abstract: true
            })
            .state('app.promo.list', {
                url: '',
                templateUrl: 'modules/promo/views/list.html',
                controller: 'PromoCtrl'
            })
    })