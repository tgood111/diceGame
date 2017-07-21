"use strict"

function dieFour(){
	var getDieFour = Math.floor(Math.random()*4 + 1);
	var score;
	score = getDieFour
	return getDieFour;
	console.log(getDieFour);
	}
	var rolledDye = dieFour();

function dieSix(){
	var getDieSix = Math.floor(Math.random()*6+1);
	var score;
	score = getDieSix;
	console.log(getDieSix);
	return getDieSix;
}
var rolledDye = dieSix();

function dieEight(){
	var getDieEight = Math.floor(Math.random()*8+1);
	var score;
	score = getDieEight;
	return getDieEight;
	console.log(getDieEight);
}
var rolledDye = dieEight();

function dieTen(){
	var getDieTen = Math.floor(Math.random()*10+1);
	var score;
	score = getDieTen;
	return getDieTen;
	console.log(getDieTen);
}
var rolledDye = dieTen();

function dieTwelve(){
	var getDieTwelve
	var score;
	score = getDieTwelve;
	return getDieTwelve;
	console.log(getDieTwelve);
}
var rolledDye = dieTwelve

function dieTwenty(){
		var getDieTwenty
		var score;
		score = getDieTwenty;
		return getDieTwenty;
		console.log(getDieTwenty);
}
var rolledDye = dieTwenty

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

}

function determineWinner(p1Score, p2Score) {
	if(p1Score > p2Score) {
		console.log()
	}
}

function runGame() {
	var player1FinalScore = pOneTurn();
	var player2FinalScore = pTwoTurn();
	determineWinner();
}

runGame();



	//if(playerOneRoll === 1){
		//player1Score += 0;
	//}
	//else{
		//player1Score += playerOneRoll;
	//}
// }
// runTurn();
// function runTurn(){
// 	var playerOneRoll = dieEight();
	
// 	}
// 	//console.log(result}
// }
// //}
//var numbers = getUserInput();
//var total = calculateTheSum(numbers);
//displayRuslt(total);




// pick a random number between 1 and 6 for our roll of the die
//var die = Math.floor(Math.random()*6 + 1);
//var score;

// set score here equal to die
//score = die

//console.log("You rolled a "+die+" for a 

//var die1 = Math.floor(Math.random()*6 + 1);
//var die2 = Math.floor(Math.random()*6 + 1);
//var score;

// This time if either die roll is 1 then score should be 0 
//if()


//else {
  // here we need to check if there are doubles.  If so, score should be
  // double the sum of the two dice
  //if()
  
  //else
//}

//console.log("You rolled a "+die1+" and a "+die2+" for a score of "+score);
//In this version, all of our old rules apply. //But if you roll doubles (if both die are the same) then your score counts for double die1 + die2.//}