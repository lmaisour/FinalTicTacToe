var ticTacToeApp = angular.module('ticTacToeApp', []);

ticTacToeApp.controller('appControler', function ($scope) {

	// var TTTFirebase = new Firebase("https://levani-ttt.firebaseIO.com");

	 // $scope.firebaserepeatedCells =
		 // $firebase(new Firebase("https://levani-ttt.firebaseIO.com"));
		


		// create players and cell count to zero //
		$scope.count = 0;



		//create array to be used with ng-repeat for the 3x3 grid. 9 items total //
		$scope.repeatedCells = [
		{cells: 0},
		{cells: 1},
		{cells: 2},
		{cells: 3},
		{cells: 4},
		{cells: 5},
		{cells: 6},
		{cells: 7},
		{cells: 8},
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
		console.log('It worked!');
	});


	//determind the turns -- assign x to player one, o to player two. if the count doesnt equal
	// to 1, then it is player one because of the %2 .. this shows the remained of 0/2 //
	$scope.playerTurns = function(cell) {


		++ $scope.count;


		if ($scope.count%2 !== 0) {
			console.log($scope.playerOne);
			cell.cells = 'x';
		}
		else {
			console.log($scope.playerTwo);
			cell.cells = 'o';
		}

		gameStrategy();
	}

	// create function to display winner in a window.alert ?? // 

	var gameFinished = function (winUser){
		alert(winUser +' has won!');
	}


	var gameStrategy = function () {

		if ($scope.repeatedCells[0].cells == 'x' && $scope.repeatedCells[1].cells =='x' && $scope.repeatedCells[2].cells == 'x' ) {
			gameFinished('x');
		} 	else if ($scope.repeatedCells[3].cells == 'x' && $scope.repeatedCells[4].cells =='x' && $scope.repeatedCells[5].cells == 'x') {
			$scope.gameFinished();
		}	 else if ($scope.repeatedCells[6].cells == 'x' && $scope.repeatedCells[7].cells =='x' && $scope.repeatedCells[8].cells == 'x') {
			gameFinished('x');
		}	 else if ($scope.repeatedCells[0].cells == 'x' && $scope.repeatedCells[4].cells =='x' && $scope.repeatedCells[8].cells == 'x') {
			gameFinished('x');
		}	else if ($scope.repeatedCells[2].cells == 'x' && $scope.repeatedCells[4].cells =='x' && $scope.repeatedCells[6].cells == 'x') {
			gameFinished('x');
		}  else if ($scope.repeatedCells[0].cells == 'x' && $scope.repeatedCells[3].cells =='x' && $scope.repeatedCells[6].cells == 'x') {
			gameFinished('x');
		}  else if ($scope.repeatedCells[1].cells == 'x' && $scope.repeatedCells[4].cells =='x' && $scope.repeatedCells[7].cells == 'x') {
			$scope.gameFinished();
		}  else if ($scope.repeatedCells[2].cells == 'x' && $scope.repeatedCells[5].cells =='x' && $scope.repeatedCells[8].cells == 'x') {
			gameFinished('x');
		}
		
	


		if ($scope.repeatedCells[0].cells == 'o' && $scope.repeatedCells[1].cells =='o' && $scope.repeatedCells[2].cells == 'o' ) {
			gameFinished('o');
		} 	else if ($scope.repeatedCells[3].cells == 'o' && $scope.repeatedCells[4].cells =='o' && $scope.repeatedCells[5].cells == 'o') {
			gameFinished('o');
		}	 else if ($scope.repeatedCells[6].cells == 'o' && $scope.repeatedCells[7].cells =='o' && $scope.repeatedCells[8].cells == 'o') {
			gameFinished('o');
		} 	else if ($scope.repeatedCells[0].cells == 'o' && $scope.repeatedCells[4].cells =='o' && $scope.repeatedCells[8].cells == 'o') {
			gameFinished('o');
		}	else if ($scope.repeatedCells[2].cells == 'o' && $scope.repeatedCells[4].cells =='o' && $scope.repeatedCells[6].cells == 'o') {
			gameFinished('o');
		} 	else if ($scope.repeatedCells[0].cells == 'o' && $scope.repeatedCells[3].cells =='o' && $scope.repeatedCells[6].cells == 'o') {
			gameFinished('o');
		} 	 else if ($scope.repeatedCells[1].cells == 'o' && $scope.repeatedCells[4].cells =='o' && $scope.repeatedCells[7].cells == 'o') {
			gameFinished('o');
		} 	 else if ($scope.repeatedCells[2].cells == 'o' && $scope.repeatedCells[5].cells =='o' && $scope.repeatedCells[8].cells == 'o') {
			gameFinished('o');
		}
		
	}


});