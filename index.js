module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'todays-schedule' );


app.launch( function( request, response ) {
	response.say( 'Welcome to your Schedule' ).reprompt( 'I can now read your calendar for today.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('AMAZON.ReadAction<Object@Calendar>')
{
	 "slots":{"Person":"AMAZON.PERSON"}, 
{"MyDate":"AMAZON.DATE"}
,"utterances": [ "read {my|Person} calendar for {today|MyDate}"]

  },
  function(request,response) {
    var number = request.slot('MyDate');
    response.say("You asked for the date "+date);
  }
);

module.exports = app;