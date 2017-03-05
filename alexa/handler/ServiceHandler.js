"use strict"

const Alexa = require('alexa-sdk');
const request = require('request');

const config = require('../config/config');
const APP_STATES = config.APP_STATES;
const BASE_URL = config.BASE_URL;

const handler = Alexa.CreateStateHandler(APP_STATES.SERVICE, {
    'NewServiceRequest': function (message) {
        // save the status for service handler
        const output = `Für welchen Fehlercode möchtest du ein Ticket anlegen, sage Fehlercode und die Nummer des Codes!`;
        this.emit(':ask', output, output);
    },
    'ServiceRequest': function (message) {
        const output = `Ein Ticket wird für "${this.attributes.short}" angelegt. Bitte mit "Ja" bestätigen oder weitere Informationen angeben.`;
        this.emit(':ask', output, output);
    },
    'PalErrorcodeIntent': function () {
        this.handler.state = APP_STATES.ERROR;
        this.emitWithState("PalErrorcodeIntent", true);
    },
    'AMAZON.YesIntent': function() {
        request.post({url:BASE_URL + "addconversation", form: {question:'Anfrage für Serviceticket.', answer: 'Ticket #123 erstellt'}}, (err,httpResponse,body) => {
          request.post({url:BASE_URL + "supportticket", form: {message:'Ticket #123 erstellt.'}}, (err,httpResponse,body) => {
            this.emit(':tell', "Das Ticket wurde weitergegeben, wir haben Ihnen die Ticketnummer 123 für weitere Referenz an ihr Mobiltelefon gesendet.");
            this.emit('SessionEndedRequest');
          });
        });
    },
    'AMAZON.NoIntent': function() {
        this.emit(':tell', "Serviceticket wurde abgebrochen");
        this.emit('SessionEndedRequest');
    },
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = 'Du kannst dein Serviceticket an Palfinger anpassen und absenden.';
        this.attributes.repromptSpeech = 'Du kannst beispielsweise sagen „Lege neues Serviceticket für Fehlercode 529 3 an". Probiere es!';
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
