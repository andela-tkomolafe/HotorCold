var prevNumber = 'Nil';
var diff1 = 0;
var diff2 = 0;

/**************************
	GENERATE RANDOM NUMBER
***************************/
var compChoice = Math.floor(Math.random() * 100);
console.log(compChoice);

var userChoice;


/**********************************
	CHECK VALIDITY OF USER CHOICE
***********************************/
isNumberValid = function(){
	// var userChoice = parseInt($('#userChoice').val());
	if( isNaN(userChoice) || userChoice === null || userChoice === undefined || userChoice > 100){
		console.log('not a no.');
		$('.feedback1').text("You must enter a valid number between 0 and 100");
	}
	else{
		compareChoices();
	}
};

/********************************
	COMPARE THE CHOICES
*********************************/
compareChoices = function(){
		console.log('Inside compareChoices');
		if(prevNumber === 'Nil'){

			if(userChoice === compChoice){
				$('.feedback1').text("You guessed right!!!");			
			}	
			else if(userChoice < compChoice){
				$('.feedback1').text("You are Cold!");
				 prevNumber = userChoice;			
			}
			else if(userChoice > compChoice){
			$('.feedback1').text("You are Hot!");
				 prevNumber = userChoice;			
			}
		}
		else {
			
			diff1 = Math.abs(prevNumber - compChoice);	
			diff2 = Math.abs(userChoice - compChoice);
			if(userChoice === compChoice){
				$('.feedback1').text("You guessed right!!!");
			}
			else if(diff1 > diff2){
				$('.feedback1').text("You are Hotter!");
				prevNumber = userChoice;
			}
			else if(diff1 < diff2){
				$('.feedback1').text("You are Colder!");
				prevNumber = userChoice;
			}
		}	
		
};

/****************************
		ACTION ON CLICK
****************************/

$('#check').click(function(event){
	event.preventDefault();
	userChoice = parseInt($('#userChoice').val());
	console.log(typeof userChoice);
	isNumberValid();
});


