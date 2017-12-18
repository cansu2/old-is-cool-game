
$(document).ready(function() {

var randomNumber = 0;
var userNumber = 0;
var pinkNumber =0;
var blueNumber=0;
var orangeNumber=0;
var greenNumber=0;
var wins=0;
var losses=0;

function playGame() {
	// var isOperatorChosen = false;
	randomNumber = Math.floor(Math.random() * ((120-19) +1 ) + 19);
	$("#random").text(randomNumber);
	console.log(randomNumber);
	
		var arr =[];
		var yourAnswer =0;
		$("#yourAnswer").text(yourAnswer);

		while(arr.length < 4) {
			randomNum = Math.floor(Math.random() * ((12-1) +1 ) + 1);
			if (arr.indexOf(randomNum) === -1 ){
				arr.push(randomNum) ;	
			}
			
		}
		console.log(arr)
		pinkNumber = arr[0];
		blueNumber = arr[1];
		orangeNumber = arr[2];
		greenNumber = arr[3];
    };  
playGame();
$("#pink").on("click",function()  {
			console.log(pinkNumber);
			userNumber = userNumber + pinkNumber;
			$("#yourAnswer").text(userNumber);
			console.log(userNumber);
			if (userNumber == randomNumber){
				wins++
				$("#wins").text("Wins: "+ wins);
				playGame();
				if(wins == 5) {
					alert("Good Job!!!")
				}
			} else if( userNumber > randomNumber){
				losses++
				$("#losses").text("Losses: "+ losses);
				playGame();
				if(losses == 5){
					alert("Game Over!!");
				}
			}
		});
		$("#blue").on("click",function() {
			console.log(blueNumber);
			userNumber = userNumber + blueNumber;
			$("#yourAnswer").text(userNumber);
			console.log(userNumber);
			if (userNumber == randomNumber){
				wins++
				$("#wins").text("Wins: "+ wins);
				playGame();
				if(wins == 5) {
					alert("Good Job!!!")
				}
			} else if( userNumber > randomNumber){
				losses++
				$("#losses").text("Losses: "+ losses);
				playGame();
				if(losses == 5){
					alert("Game Over!!");
				}
			}
		});
		$("#orange").on("click",function() {
			console.log(orangeNumber);
			userNumber = userNumber + orangeNumber;
			$("#yourAnswer").text(userNumber);
			if (userNumber == randomNumber){
				wins++
				$("#wins").text("Wins: "+ wins);
				playGame();
			} else if( userNumber > randomNumber){
				losses++
				$("#losses").text("Losses: "+ losses);
				playGame();
				if(wins == 5) {
					alert("Good Job!!!")
				}
				if(losses == 5){
					alert("Game Over!!");
				}
			}
		});
		$("#green").on("click",function() {
			console.log(greenNumber);
			userNumber = userNumber + greenNumber;
			$("#yourAnswer").text(userNumber);
			if (userNumber == randomNumber){
				wins++
				$("#wins").text("Wins: "+ wins);
				playGame();
				if(wins == 5) {
					alert("Good Job!!!")
				}
			} else if( userNumber > randomNumber){
				losses++
				$("#losses").text("Losses: "+ losses);
				playGame();
				if(losses == 5){
					alert("Game Over!!");
				}
			}
		});



});