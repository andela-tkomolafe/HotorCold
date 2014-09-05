$(document).ready();
var prevNumber = 0;
var userChoice;
var diff1 = 0;
var diff2 = 0;
/****************************
	GENERATE RANDOM NUMBER
******************************/
var compChoice = Math.floor(Math.random() * 100);
console.log(compChoice);
var pickRandom = function(){
	return compChoice;
};
getUserChoice = function(){
	userChoice = parseInt($('#userChoice').val());
};
/********************************
	CHECK IF USERCHOICE IS VALID
**********************************/
function isNumberValid(){

		while(isNaN(userChoice) || (userChoice === null) || (userChoice === undefined) || (userChoice > 100) || (userChoice < 0)){
			alert("You have to enter a valid number between 0 and 100");
			getUserChoice();
		}
	}; 

function compareChoice(){
	
		if (userChoice < compChoice){
		alert("Cold");
			while(userChoice !== compChoice){
				prevNumber = userChoice;
				checkAgain();
				break;
				console.log('while loop');
			}
		}
		else if(userChoice > compChoice){
		alert("Hot");
			while(userChoice !== compChoice){
				prevNumber = userChoice;
				checkAgain();
				break;

			}
		}
		else if(userChoice === compChoice){
		alert("You guessed right!")
			
		}
};
function check(){
	getUserChoice();	
	isNumberValid();
	compareChoice();
};

function checkAgain(){
getUserChoice();
isNumberValid();
diff1 = Math.abs(prevNumber - compChoice);
diff2 = Math.abs(userChoice - compChoice);
if(diff1 > diff2){
	alert ("Hotter!")
}
else if(diff1 < diff2){
	alert("colder")
}

};

$('#check').click(function(event){
	console.log('youre');
	event.preventDefault();
	getUserChoice();	
	isNumberValid();
	compareChoice();
});


