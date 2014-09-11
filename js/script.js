var prevNumber = 'Nil';
var diff1 = 0;
var diff2 = 0;

/**************************
	GENERATE RANDOM NUMBER
***************************/
var compChoice = Math.floor(Math.random() * 100);
console.log(compChoice);

var userChoice;

var Guess ={
/**********************************
	CHECK VALIDITY OF USER CHOICE
***********************************/
isNumberValid: function(){
	if( isNaN(userChoice) || userChoice === null || userChoice === undefined || userChoice > 100){
		$('.feedback1').text("You must enter a valid number between 0 and 100");
	}
	else{
		Guess.compareChoices();
	}
},

/********************************
	COMPARE THE CHOICES
*********************************/
	compareChoices: function(){
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
		},
	gaugeProgress: function(){
		var progress = ((100 -Math.abs(compChoice-userChoice)) * 2.4);
		$('#progressBar').animate({width:progress}, 1000);
}
};
/****************************
		ACTION ON CLICK
****************************/

$('#check').click(function(event){
	event.preventDefault();
	userChoice = parseInt($('#userChoice').val());
	Guess.isNumberValid();
	$('#userChoice').val("");
	Guess.gaugeProgress();
});


