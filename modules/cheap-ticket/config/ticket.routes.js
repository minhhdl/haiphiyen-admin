angular.module('com.module.cheapTicket')
    .config(function($stateProvider){
        $stateProvider
            .state('app.cheapTicket', {
                url: '/ve-re',
                templateUrl: 'modules/cheap-ticket/views/main.html',
                abstract: true
            })
            .state('app.cheapTicket.list', {
                url: '',
                templateUrl: 'modules/cheap-ticket/views/list.html',
                controller: 'TicketCtrl'
            })
            .state('app.cheapTicket.add', {
                url: '/add',
                templateUrl: 'modules/cheap-ticket/views/form.html',
                controller: 'AddTicketCtrl'
            });
    })