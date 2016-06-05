angular.module('com.module.cheapTicket')
    .controller('AddTicketCtrl', function($http, $scope, $state, ApiService, CoreService){
        $http({
            method: 'GET',
            url: 'http://api.vemaybayhaiphiyen.com/app/places/agent',
            headers: {
                'Authorization': 'Bearer ' + localStorage.accessToken
            }
        })
            .then(function success (response){
                $http({
                    method: 'GET',
                    url: 'http://api.vemaybayhaiphiyen.com/app/places/international',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.accessToken
                    }
                })
                    .then(function success (result){
                        $scope.cheapTicket = {};
                        $scope.agentPlaces = response.data.items;
                        $scope.internationalPlaces = result.data.items;
                        $scope.onSubmit = function(){
                            console.log($scope.cheapTicket)
                            ApiService.create('cheapest', localStorage.accessToken, $scope.cheapTicket, function (response) {
                                CoreService.toastSuccess('Success!');
                                $state.go('^.list');
                            })
                        }
                    }, function error (response){

                    })
            }, function error (response){

            })
    })