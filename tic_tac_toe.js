// var container = document.getElementByClassName("container");
// console.log(container);
// container.innerHTML = "hello world"

// 1.Set Up Board 
// 2. User should be able to click a box and a mark shows up
// - put an onclick in the first square 
// when the use clicks, call function that puta an x in the box 
// MILESTONE
// 3. Put an X on the Square 
// 4 Keep tracks of who's turn it is
// 5. When a square is clicked, ut the symbol, AND change who's turn it is
// 6.Keep player from overwrting sqaure 
// 7. We need a win checker

// Setup winners array
var winningCombos =[
	["A1","B1","C1"],
	["A2","B2","C2"],
	["A3","B3","C3"],
	["A1","A2","A3"],
	["B1","B2","B3"],
	["C1","C2","C3"],
	["A1","B2","C3"],
	["A3","B2","C1"]
]
var player1Squares = [];
var player2Squares = [];
var whosTurn =1;
var someoneWon = false;

// console.dir(winningCombos);
function markSquare(currentSquare){
	console.dir(currentSquare);
	if((currentSquare.innerHTML === "X")||(currentSquare.innerHTML === "O")){
		console.log("Wait Your Turn");
	}
	else if(someoneWon){
		console.log("Someone Already Won");
	}	
	else{
		if(whosTurn === 1){
			currentSquare.innerHTML = "X";
			whosTurn = 2;
			player1Squares.push(currentSquare.id);
			checkWin(1, player1Squares); 
		}
		else{
			currentSquare.innerHTML = "O";
			whosTurn = 1;
			player2Squares.push(currentSquare.id);
			checkWin(2, player2Squares);
		}
		// checkWin();
		// console.log(player1Squares);
		// console.log(player2Squares);
	}	
}

function checkWin(whoJustWent, currentPlayerSquares){
	// if(whoJustWent ===1){
	// 	playerArray = player1Squares;
	// }
	// else{
	// 	playerArray = player2Squares;
	// }
	for(var i = 0; i < winningCombos.length; i++){
		// console.log(winningCombos[i])
		var rowCount1 =0;
		// var rowCount2 =0;
		for(var j=0; j < winningCombos[i].length; j++){
			// console.log(winningCombos[i][j]);
			var winningSquare = winningCombos[i][j];
			if(currentPlayerSquares.indexOf(winningSquare) > -1){
				// HIT PLAYER HAS THIS SQUARE SOMEWHERE
				rowCount1++;
			}
			// if(player2Squares.indexOf(winningSquare) > -1){
			// 	// HIT PLAYER HAS THIS SQUARE SOMEWHERE
			// 	rowCount2++;
			// }
		}
		if(rowCount1 === 3){
			// Player had all 3 of these j's.Win
			console.log("Player" + whoJustWent + "Wins");
			gameOver(whoJustWent, winningCombos[i]);
		}
		// if(rowCount2 === 3){
		// 	// Player had all 3 of these j's.Win
		// 	console.log("Player 2 Wins");
		// }
	}
}

function gameOver(whoJustWon, winningCombo){
	var message = "Player " +whoJustWon +" You just won with "+winningCombo;
	document.getElementById("message").innerHTML = message;
	for(var i=0; i<winningCombo.length;i++){
		document.getElementById(winningCombo[i]).className += " winning-square";
	}
	var nonWinningSquaresArray = nonWinningSquares(winningCombo);
	for(var h=0;h<nonWinningSquaresArray.length;h++){
		document.getElementById(nonWinningSquaresArray[h]).className += " non-winning-square";
	}
	someoneWon = true;
}	


function nonWinningSquares(winningCombo){
	var allSquares = ["A2","B2","C2","A3","B3","C3","A1","B1","C1"];
	var nonWinningSquares = [];
	for(var i=0; i<winningCombo.length;i++){
		for(var j=0; j<allSquares.length;j++){
			if(allSquares.indexOf(winningCombo[i]) > -1){
			  indexOfFound = allSquares.indexOf(winningCombo[i]);
	      		allSquares.splice(indexOfFound,1);
			}
		}
	}
	return(allSquares);
}





















