angular.module('com.module.thue')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.news', {
                url: '/tin-tuc',
                templateUrl: 'modules/news/views/main.html',
                abstract: true
            })
            .state('app.news.list', {
                url: '',
                templateUrl: 'modules/news/views/list.html',
                controller: 'NewsCtrl'
            })
    })