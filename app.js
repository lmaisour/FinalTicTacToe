var ticTacToeApp = angular.module('ticTacToeApp', []);

ticTacToeApp.controller('appControler', function ($scope) {

	// var TTTFirebase = new Firebase("https://levani-ttt.firebaseIO.com");

	// $scope.firebaserepeatedCells =
		// $firebase(new Firebase("https://levani-ttt.firebaseIO.com" + '/firebaserepeatedCells/'));
		


		// create players and cell count to zero //
		$scope.playerOne = [];
		$scope.playerTwo = [];
		$scope.count = 0;



		//create array to be used with ng-repeat for the 3x3 grid. 9 items total //
		$scope.repeatedCells = [
		{idNum: 0},
		{idNum: 1},
		{idNum: 2},
		{idNum: 3},
		{idNum: 4},
		{idNum: 5},
		{idNum: 6},
		{idNum: 7},
		{idNum: 8},
		];


		// define winning combinations // 
		$scope.winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6], [1,4,7],[2,5,8],[0,4,8],[2,4,6]],


		// just a test to see if the index file is reaching the js file //
		$scope.testJS = function() {
			console.log('Correctly accessing JS function.') ;
		};

	// $scope.firebaserepeatedCells.$bind($scope, "repeatedCells");

	
	// if angular has no problems and the array identifies stuff is happening to it //
	$scope.$watch('repeatedCells', function() {
		console.log('It changed!');
	});


	//determind the turns -- assign x to player one, o to player two. if the count doesnt equal
	// to 1, then it is player one because of the %2 .. this shows the remained of 0/2 //
	$scope.playerTurns = function(cell) {
		var statusX = false;
		var statusO = false;

		++ $scope.count;


		if ($scope.count%2 !== 0) {
			cell.statusX = true;
			$scope.playerOne.push(cell);
			console.log($scope.playerOne);
		}
		else {
			cell.statusO = true;
			$scope.playerTwo.push(cell);
			console.log($scope.playerTwo);
		}
	}

	var GameStrategy = function () {

		if (cells[0] == 'x' && cells[1] =='x' & cells[2] == 'x' ) {
			$scope.Xplayer();
		} else if (cells[3] == 'x' && cells[4] =='x' & cells[5] == 'x') {
			$scope.Xplayer();
		} else if (cells[6] == 'x' && cells[7] =='x' & cells[8] == 'x') {
			$scope.Xplayer();
		} else if (cells[0] == 'x' && cells[4] =='x' & cells[8] == 'x') {
			$scope.Xplayer();
		}else if (cells[2] == 'x' && cells[4] =='x' & cells[6] == 'x') {
			$scope.Xplayer();
		}  else if (cells[0] == 'x' && cells[3] =='x' & cells[6] == 'x') {
			$scope.Xplayer();
		}  else if (cells[1] == 'x' && cells[4] =='x' & cells[7] == 'x') {
			$scope.Xplayer();
		}  else if (cells[2] == 'x' && cells[5] =='x' & cells[8] == 'x') {
			$scope.Xplayer();
		}



		if (cells[0] == 'o' && cells[1] =='o' & cells[2] == 'o' ) {
			$scope.Oplayer();
		} else if (cells[3] == 'o' && cells[4] =='o' & cells[5] == 'o') {
			$scope.Oplayer();
		} else if (cells[6] == 'o' && cells[7] =='o' & cells[8] == 'o') {
			$scope.Oplayer();
		} else if (cells[0] == 'o' && cells[4] =='o' & cells[8] == 'o') {
			$scope.Oplayer();
		}else if (cells[2] == 'o' && cells[4] =='o' & cells[6] == 'o') {
			$scope.Oplayer();
		} else if (cells[0] == 'o' && cells[3] =='o' & cells[6] == 'o') {
			$scope.Oplayer();
		}  else if (cells[1] == 'o' && cells[4] =='o' & cells[7] == 'o') {
			$scope.Oplayer();
		}  else if (cells[2] == 'o' && cells[5] =='o' & cells[8] == 'o') {
			$scope.Oplayer();
		}
	}


});