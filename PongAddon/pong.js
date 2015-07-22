window.pong.controller('PongController', ['$scope', function($scope) {
	$scope.playPong = true;
	
	$scope.startPong = function(){
		$scope.playPong = true;
	};
}]);