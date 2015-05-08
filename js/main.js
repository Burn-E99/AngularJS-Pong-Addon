window.dp = angular.module('DP', ['ngResource', 'ui.bootstrap', 'ui.router', 'ngStorage']);

window.dp.controller('MainController', ['$scope', '$interval', '$state', function($scope, $interval, $state) {
	$scope.lastUpdated = 'PONGDEV';
	$scope.pageTitle = "DEFAULT";
	
	$interval(function(){
		$scope.pageTitle = $state.current.data.pageName;
	},1);
}]);

window.dp.controller('HomeController', ['$scope', function($scope) {
	$scope.aboutmeContent = "Welcome to the Pong Dev Page";
	$scope.watdpContent = "Welcome to the Pong Dev Page";
}]);

window.dp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', '/');
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: "views/home.html",
			data: {
				pageName: "Home",
				subPage: 'none'
			}
		});
	//
}]);