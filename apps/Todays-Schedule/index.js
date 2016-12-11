module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'Todays Schedule' );


app.launch( function( request, response ) {
	response.say( 'Welcome to your Schedule' ).reprompt( 'I can now read your schedule for today.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('readCalendar',
  {
    "slots":{"day":"DAY"}
	,"utterances":[ 
		"show my schedule for {monday|day}"]
  },
  function(request,response) {
    var number = request.slot('day');
    response.say("You asked for the day "+day);
  }
);

module.exports = app;