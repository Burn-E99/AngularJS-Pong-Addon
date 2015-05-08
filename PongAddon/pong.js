window.pong.controller('PongController', ['$scope', function($scope) {
	$scope.playPong = false;
	
	$scope.startPong = function(){
		$scope.playPong = true;
	};
}]);