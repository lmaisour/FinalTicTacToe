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

		if (cells[0] == 'cell.statusX' && cells[1] =='cell.statusX' & cells[2] == 'cell.statusX' ) {
			$scope.playerOne();
		} else if (cells[3] == 'cell.statusX' && cells[4] =='cell.statusX' & cells[5] == 'cell.statusX') {
			$scope.playerOne();
		} else if (cells[6] == 'cell.statusX' && cells[7] =='cell.statusX' & cells[8] == 'cell.statusX') {
			$scope.playerOne();
		} else if (cells[0] == 'cell.statusX' && cells[4] =='cell.statusX' & cells[8] == 'cell.statusX') {
			$scope.playerOne();
		}else if (cells[2] == 'cell.statusX' && cells[4] =='cell.statusX' & cells[6] == 'cell.statusX') {
			$scope.playerOne();
		}  else if (cells[0] == 'cell.statusX' && cells[3] =='cell.statusX' & cells[6] == 'cell.statusX') {
			$scope.playerOne();
		}  else if (cells[1] == 'cell.statusX' && cells[4] =='cell.statusX' & cells[7] == 'cell.statusX') {
			$scope.playerOne();
		}  else if (cells[2] == 'cell.statusX' && cells[5] =='cell.statusX' & cells[8] == 'cell.statusX') {
			$scope.playerOne();
		}



		if (cells[0] == 'cell.statusO' && cells[1] =='cell.statusO' & cells[2] == 'cell.statusO' ) {
			$sccell.statusOpe.playerTwcell.statusO();
			alert('cell.statusO wins!');
		} else if (cells[3] == 'cell.statusO' && cells[4] =='cell.statusO' & cells[5] == 'cell.statusO') {
			$sccell.statusOpe.playerTwcell.statusO();
		} else if (cells[6] == 'cell.statusO' && cells[7] =='cell.statusO' & cells[8] == 'cell.statusO') {
			$sccell.statusOpe.playerTwcell.statusO();
		} else if (cells[0] == 'cell.statusO' && cells[4] =='cell.statusO' & cells[8] == 'cell.statusO') {
			$sccell.statusOpe.playerTwcell.statusO();
		}else if (cells[2] == 'cell.statusO' && cells[4] =='cell.statusO' & cells[6] == 'cell.statusO') {
			$sccell.statusOpe.playerTwcell.statusO();
		} else if (cells[0] == 'cell.statusO' && cells[3] =='cell.statusO' & cells[6] == 'cell.statusO') {
			$sccell.statusOpe.playerTwcell.statusO();
		}  else if (cells[1] == 'cell.statusO' && cells[4] =='cell.statusO' & cells[7] == 'cell.statusO') {
			$sccell.statusOpe.playerTwcell.statusO();
		}  else if (cells[2] == 'cell.statusO' && cells[5] =='cell.statusO' & cells[8] == 'cell.statusO') {
			$scope.playerTwo();
		}
	}


});