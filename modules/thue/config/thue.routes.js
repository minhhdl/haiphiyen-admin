angular.module('com.module.thue')
.config(function($stateProvider){
	$stateProvider
	.state('app.phi', {
		url: '/phi',
		templateUrl: 'modules/thue/views/main.html',
		abstract: true
	})
	.state('app.phi.list', {
		url: '',
		templateUrl: 'modules/thue/views/list.html'
	})
})