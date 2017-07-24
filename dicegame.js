"use strict"

function dieFour(){
	var getDieFour = Math.floor(Math.random()*4 + 1);
	// var score;
	// score = getDieFour
	return getDieFour;
	console.log(getDieFour);
	}
	// var rolledDye = dieFour();

function dieSix(){
	var getDieSix = Math.floor(Math.random()*6+1);
	var score;
	score = getDieSix;
	return getDieSix;
}
// var rolledDye = dieSix();

function dieEight(){
	var getDieEight = Math.floor(Math.random()*8+1);
	var score;
	score = getDieEight;
	return getDieEight;
	console.log(getDieEight);
}
// var rolledDye = dieEight();

function dieTen(){
	var getDieTen = Math.floor(Math.random()*10+1);
	var score;
	score = getDieTen;
	return getDieTen;
	console.log(getDieTen);
}
// var rolledDye = dieTen();

function dieTwelve(){
	var getDieTwelve = Math.floor(Math.random()*12+1);
	var score;
	score = getDieTwelve;
	return getDieTwelve;
	console.log(getDieTwelve);
}
// var rolledDye = dieTwelve

function dieTwenty(){
		var getDieTwenty = Math.floor(Math.random()*20+1);
		var score;
		score = getDieTwenty;
		return getDieTwenty;
		console.log(getDieTwenty);
}
// var rolledDye = dieTwenty

function pOneTurn(){
	var dieFourRoll = dieFour();
	var dieSixRoll = dieSix();
	var dieEightRoll = dieEight();
	var dieTenRoll = dieTen();
	var dieTwelveRoll = dieTwelve();
	var dieTwentyRoll = dieTwenty();
	var rolledDyeArray = [dieFourRoll, dieSixRoll, dieEightRoll, dieTenRoll, dieTwelveRoll, dieTwentyRoll];
	var player1Score = 0;
	for(var i=0; i <= rolledDyeArray.length-1; i++){

		if(rolledDyeArray[i] === 1){
			player1Score += 0;
		}
		else{
			player1Score += rolledDyeArray[i];
		}

	}
	return player1Score;
}

function pTwoTurn() {
var dieFourRoll = dieFour();
	var dieSixRoll = dieSix();
	var dieEightRoll = dieEight();
	var dieTenRoll = dieTen();
	var dieTwelveRoll = dieTwelve();
	var dieTwentyRoll = dieTwenty();
	var rolledDyeArray = [dieFourRoll, dieSixRoll, dieEightRoll, dieTenRoll, dieTwelveRoll, dieTwentyRoll];
	var player2Score = 0;
	for(var i=0; i <= rolledDyeArray.length-1; i++){

		if(rolledDyeArray[i] === 1){
			player2Score += 0;
		}
		else{
			player2Score += rolledDyeArray[i];
		}

	}
	return player2Score;
}


function determineWinner(p1Score, p2Score) {
	var player1Score = p1Score;
	var player2Score = p2Score;
	
	if(p1Score > p2Score) { 
		player1Score > player2Score;
		


		
	}


	

}

function runGame() {
	console.log("Welcome to Roll Your Way To Super Bowl LII. Roll each dye one time and tally your score. Highest score wins the game. If you roll a one with any dye you will receive zero points. Good Luck");
	var player1FinalScore = pOneTurn();
	var player2FinalScore = pTwoTurn();
	console.log("Player 1 scored " + player1FinalScore);
	console.log("Player 2 scored " + player2FinalScore);
	determineWinner();
	if(player1FinalScore > player2FinalScore){
			//player2Score += 0;
				console.log("Awesome, Player one! You just won two tickets to Super Bowl LII.");
		}
		else if (player1FinalScore === player2FinalScore){
				console.log("Tie Game. you both lose");
		}else{
			console.log("Great game Player2!!! You are the official winner of two tickets to Super Bowl LII.");
		}

	}
	//return player2Score;
	
			
	//}
	

	


runGame();



	