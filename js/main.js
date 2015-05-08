window.dp = angular.module('DP', ['ngResource', 'ui.bootstrap', 'ui.router', 'ngStorage']);

window.dp.controller('MainController', ['$scope', '$interval', '$state', function($scope, $interval, $state) {
	$scope.lastUpdated = 'PONGDEV';
	$scope.pageTitle = "DEFAULT";
	
	$interval(function(){
		$scope.pageTitle = $state.current.data.pageName;
	},1);
}]);

window.dp.controller('HomeController', ['$scope', function($scope) {
	$scope.aboutmeContent = "Welcome to my Digital Portfolio(DP)!  My name is Ean Milligan.  I am currently in eleventh grade at The Dayton Regional STEM(Science Technology Engineering & Mathematics).  I took Geometry and Algebra 1 in eighth grade at St. Christopher.  I have taken Pre-Calc, Calc, and Calc BC.  I am very interested in technology and wish to enter the engineering field for college.";
	$scope.watdpContent = "A DP is new way for STEM students to showcase their work.  This is required each year in order to move on to the next grade. Feel free to browse through my projects and experience, or contact me if you have questions or comments.";
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