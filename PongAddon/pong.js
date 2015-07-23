window.pong.controller('PongController', ['$scope', function($scope) {
	var canvas = document.getElementById('pongField');
	var ctx = canvas.getContext('2d');
	
	$scope.playPong = true;
	$scope.leftCPU = false;
	$scope.rightCPU = true;
	
	$scope.startPong = function(){
		$scope.playPong = true;
	};
	
	$scope.exitPong = function(){
		$scope.playPong = false
	}
	
	$scope.resizeCanvas = function(canvas){
		canvas.style.width = '100%';
		canvas.style.height = '100%';
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
	};
	
	$scope.resizeCanvas(canvas);
}]);