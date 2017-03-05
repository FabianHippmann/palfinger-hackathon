"use strict"

const Alexa = require('alexa-sdk');
const request = require('request');

const config = require('../config/config');
const APP_STATES = config.APP_STATES
const BASE_URL = config.BASE_URL

const handler = Alexa.CreateStateHandler(APP_STATES.ERROR, {
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

            console.log(output);
            // We have a Request to ask Palfinger, we ask if we should create a support Ticket.
            if(output.indexOf("benachrichtigen") != -1)
            {
                // save the status for service handler
                Object.assign(this.attributes, {
                    "errorcode": errorcode,
                    "cause": body.cause,
                    "short": body.short_description,
                    "solution": body.solution,
                });

                output = output.replace('Palfinger benachrichtigen. ', '');
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
    'AMAZON.YesIntent': function() {
        this.handler.state = APP_STATES.SERVICE;
        this.emitWithState("ServiceRequest", true);
    },
    'AMAZON.NoIntent': function() {
        this.handler.state = APP_STATES.START;
        this.emitWithState("NewSession", true);
    },
    'Unhandled': function () {
        const speechOutput = "Das hab ich nicht verstanden, bitte nochmal!";
        this.emit(":ask", speechOutput, speechOutput);
    }
});

module.exports = handler;
