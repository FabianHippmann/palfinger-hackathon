/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a sample skill built with Amazon Alexa Skills nodejs
 * skill development kit.
 * This sample supports multiple languages (en-US, en-GB, de-GB).
 * The Intent Schema, Custom Slot and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-howto
 **/
'use strict';

const Alexa = require('alexa-sdk');
const request = require('request');

const APP_ID = 'amzn1.ask.skill.80fa1dbd-0943-4ced-a542-afe1141d5f49'; // TODO replace with your app ID (OPTIONAL).
const BASE_URL = "http://phplaravel-34738-81763-225945.cloudwaysapps.com/api/"; // TODO replace with your app ID (OPTIONAL).

const APP_STATES = {
    START: "_STARTMODE", // Asking trivia questions.
    ERROR: "_ERRORMODE", // Entry point, start the App.
    SERVICE: "_SERVICEMODE", // Entry point, start the App.
};

var SessionHandlers = {
    "LaunchRequest": function () {
        this.handler.state = APP_STATES.START;
        this.emitWithState("NewSession", true);
    },
    "PalErrorcodeIntent": function () {
        this.handler.state = APP_STATES.ERROR;
        this.emitWithState("PalErrorcodeIntent", true);
    },
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = 'Du kannst beispielsweise Fehlercodes nachfragen, Supporttickets erstellen, Service und Vertriebspartner suchen und Lieferscheine abfragen. Probiere es aus!';
        this.attributes.repromptSpeech = 'Du kannst beispielsweise Sachen sagen wie „Was bedeutet Fehlercode 500“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?';
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', "Auf Wiedersehen!");
    },
};

var StartHandlers = Alexa.CreateStateHandler(APP_STATES.START, {
    'NewSession': function () {
        this.attributes.speechOutput = 'Willkommen beim Palfinger Assistenten Pal. Du kannst Servicerequests schicken, Fehlercodes nachsehen und vieles mehr.';
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes.repromptSpeech = 'Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.';
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    }
});

var ErrorcodeHandlers = Alexa.CreateStateHandler(APP_STATES.ERROR, {
    'PalErrorcodeIntent': function () {

        // Number Cleanupt
        const errorfirst = ("00" + this.event.request.intent.slots.ErrorcodeFirst.value).slice(-3);
        const errorsecond = ("00" + this.event.request.intent.slots.ErrorcodeSecond.value).slice(-3);
        const errorcode =  errorfirst + "." + errorsecond;

        console.log(errorcode);

        //send request to Main Gateway
        request(BASE_URL + "errorcode/" + errorcode, (error, response, body) => {

            console.log('error:', error); // Print the error if one occurred 
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
            console.log(body); // Print the HTML for the Google homepage. 

            body = JSON.parse(body);

            let output = body.cause + " " + body.solution;

            // We have a Request to ask Palfinger, we ask if we should create a support Ticket.
            if(output.indexOf("nachfragen"))
            
                // save the status for service handler
                Object.assign(this.attributes, {
                    "errorcode": errorcode,
                    "errormessage": output
                });

                output = output + " Sollen wir ein Serviceticket anlegen?";
                this.emit(':ask', output, output);
            } else {

                // change back to default State
                this.handler.state = APP_STATES.START;

                // Give back the Errorcode
                this.emit(':tell', output, output);
            }
        });
    },
    "AMAZON.YesIntent": function() {
        this.handler.state = APP_STATES.SERVICE;
        this.emitWithState("ServiceRequest", true);
    },
    "AMAZON.NoIntent": function() {
        this.handler.state = APP_STATES.START;
        this.emitWithState("NewSession", true);
    },
    "Unhandled": function () {
        var speechOutput = "Das hab ich nicht verstanden, bitte nochmal!";
        this.emit(":ask", speechOutput, speechOutput);
    }
});

var ServiceHandlers = Alexa.CreateStateHandler(APP_STATES.SERVICE, {
    "ServiceRequest": function (message) {

        console.log("Service " + message);

        this.attributes.speechOutput = "Servicebereich "+this.attributes.errormessage;
        this.attributes.repromptSpeech = "Sage einfach „Wiederholen“.";
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
        
        // Set the current state to trivia mode. The skill will now use handlers defined in triviaStateHandlers
        //this.handler.state = APP_STATES.START;
    },
    "Unhandled": function () {
        var speechOutput = "Das hab ich nicht verstanden, bitte nochmal!";
        this.emit(":ask", speechOutput, speechOutput);
    }
});


exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(SessionHandlers, StartHandlers, ErrorcodeHandlers, ServiceHandlers);
    alexa.execute();
};
