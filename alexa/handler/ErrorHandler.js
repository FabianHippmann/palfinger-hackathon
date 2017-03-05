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

        //send request to Main Gateway
        request(BASE_URL + "errorcode/" + errorcode, (error, response, body) => {

            body = JSON.parse(body);
            let output = body.cause + " " + body.solution;

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

                request.post({url:BASE_URL + "addconversation", form: {question:'Anfrage Fehlercode 529.003', answer: output}}, (err,httpResponse,body) => {
                  output = output.replace('Palfinger benachrichtigen. ', '');
                  output = output + " Sollen wir ein Serviceticket anlegen?";
                  this.emit(':ask', output, output);
                });
            } else {

                // change back to default State
                this.handler.state = APP_STATES.START;

                // Give back the Errorcode
                request.post({url:BASE_URL + "addconversation", form: {question:'Anfrage Fehlercode 529.003', answer: output}}, (err,httpResponse,body) => {
                  this.emit(':ask', output, output);
                });
                this.emit(':tell', output, output);
            }
        });
    },
    'AMAZON.YesIntent': function() {
        this.handler.state = APP_STATES.SERVICE;
        this.emitWithState("ServiceRequest", true);
    },
    'AMAZON.NoIntent': function() {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = 'Du kannst Errorcodes abfragen und dir Hilfe holen.';
        this.attributes.repromptSpeech = 'Du kannst beispielsweise sagen „Was bedeutet Fehlercode 529 3". Probiere es aus!';
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
    'Unhandled': function () {
        var output = "Das hab ich nicht verstanden, bitte nochmal!";
        this.emit(":ask", output, output);
    }
});

module.exports = handler;
