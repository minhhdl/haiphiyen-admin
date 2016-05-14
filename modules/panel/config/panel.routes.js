angular.module('com.module.panel')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.panel', {
                url: '/panels',
                templateUrl: 'modules/panel/views/mainPanel.html',
                abstract: true
            })
            .state('app.panel.list', {
                url: '',
                templateUrl: 'modules/panel/views/listPanel.html',
                controller: 'PanelCtrl'
            })


            .state('app.slide', {
                url: '/slides',
                templateUrl: 'modules/panel/views/mainSlide.html',
                abstract: true
            })
            .state('app.slide.list', {
                url: '',
                templateUrl: 'modules/panel/views/listSlide.html',
                controller: 'SlideCtrl'
            });
    })