"use strict"

const Alexa = require('alexa-sdk');

const config = require('../config/config');
const APP_STATES = config.APP_STATES

const handler = Alexa.CreateStateHandler(APP_STATES.SERVICE, {
    'ServiceRequest': function (message) {

        const output = `Ein Ticket wird für "${this.attributes.cause}" angelegt. Bitte mit "Ja" bestätigen oder weitere Informationen angeben.`;
        this.emit(':ask', output, output);
        
        // Set the current state to trivia mode. The skill will now use handler defined in triviaStateHandler
        //this.handler.state = APP_STATES.START;
    },
    'Unhandled': function () {
        var output = "Das hab ich nicht verstanden, bitte nochmal!";
        this.emit(":ask", output, output);
    },
    'AMAZON.YesIntent': function() {
        this.emit(':tell', "Das Ticket wurde weitergegeben, wir haben Ihnen die Ticketnummer 123 für weitere Referenz an ihr Mobiltelefon gesendet.");
    },
    'AMAZON.NoIntent': function() {
        this.emit(':tell', "Serviceticket wurde abgebrochen");
    
    },
});

module.exports = handler;
