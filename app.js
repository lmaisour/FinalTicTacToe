var ticTacToeApp = angular.module('ticTacToeApp', []);

ticTacToeApp.controller('appControler', function ($scope) {

	// var TTTFirebase = new Firebase("https://levani-ttt.firebaseIO.com");

	// $scope.firebaserepeatedCells =
		// $firebase(new Firebase("https://levani-ttt.firebaseIO.com" + '/firebaserepeatedCells/'));
		
		$scope.playerOne = [];
		$scope.playerTwo = [];
		$scope.count = 0;


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
		$scope.winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6], [1,4,7],[2,5,8],[0,4,8],[2,4,6]],

		$scope.testJS = function() {
			console.log('Correctly accessing JS function.') ;
		};

	// $scope.firebaserepeatedCells.$bind($scope, "repeatedCells");

	$scope.$watch('repeatedCells', function() {
		console.log('It changed!');
	});

	$scope.playerOne = function(thisCell) {
		console.log("Cell was: " + thisCell.status) ;
		thisCell.status = "X" ;
		console.log("Cell is now: " + thisCell.status) ;
	};

	$scope.playerTwo = function(thisCell) {
		console.log("Cell was: " + thisCell.status);
		thisCell.status = "Y";
		console.log("Cell is now: " + thisCell.status);
	};	

	var GameStrategy = function () {

		if (cells[0] == 'x' && cells[1] =='x' & cells[2] == 'x' ) {
			$scope.xwins();
		} else if (cells[3] == 'x' && cells[4] =='x' & cells[5] == 'x') {
			$scope.xwins();
		} else if (cells[6] == 'x' && cells[7] =='x' & cells[8] == 'x') {
			$scope.xwins();
		} else if (cells[0] == 'x' && cells[4] =='x' & cells[8] == 'x') {
			$scope.xwins();
		}else if (cells[2] == 'x' && cells[4] =='x' & cells[6] == 'x') {
			$scope.xwins();
		}  else if (cells[0] == 'x' && cells[3] =='x' & cells[6] == 'x') {
			$scope.xwins();
		}  else if (cells[1] == 'x' && cells[4] =='x' & cells[7] == 'x') {
			$scope.xwins();
		}  else if (cells[2] == 'x' && cells[5] =='x' & cells[8] == 'x') {
			$scope.xwins();
		}



		if (cells[0] == 'o' && cells[1] =='o' & cells[2] == 'o' ) {
			$scope.owins();
		} else if (cells[3] == 'o' && cells[4] =='o' & cells[5] == 'o') {
			$scope.owins();
		} else if (cells[6] == 'o' && cells[7] =='o' & cells[8] == 'o') {
			$scope.owins();
		} else if (cells[0] == 'o' && cells[4] =='o' & cells[8] == 'o') {
			$scope.owins();
		}else if (cells[2] == 'o' && cells[4] =='o' & cells[6] == 'o') {
			$scope.owins();
		} else if (cells[0] == 'o' && cells[3] =='o' & cells[6] == 'o') {
			$scope.owins();
		}  else if (cells[1] == 'o' && cells[4] =='o' & cells[7] == 'o') {
			$scope.owins();
		}  else if (cells[2] == 'o' && cells[5] =='o' & cells[8] == 'o') {
			$scope.owins();
		}
	}


});