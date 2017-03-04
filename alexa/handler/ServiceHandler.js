"use strict"

const Alexa = require('alexa-sdk');

const config = require('../config/config');
const APP_STATES = config.APP_STATES

const handler = Alexa.CreateStateHandler(APP_STATES.SERVICE, {
    "ServiceRequest": function (message) {

        console.log("Service " + message);

        this.attributes.speechOutput = "Servicebereich "+this.attributes.errormessage;
        this.attributes.repromptSpeech = "Sage einfach „Wiederholen“.";
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
        
        // Set the current state to trivia mode. The skill will now use handler defined in triviaStateHandler
        //this.handler.state = APP_STATES.START;
    },
    "Unhandled": function () {
        var speechOutput = "Das hab ich nicht verstanden, bitte nochmal!";
        this.emit(":ask", speechOutput, speechOutput);
    }
});

module.exports = handler;
