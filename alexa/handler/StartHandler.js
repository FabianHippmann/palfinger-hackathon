"use strict"

const Alexa = require('alexa-sdk');

const config = require('../config/config');
const APP_STATES = config.APP_STATES

const handler = Alexa.CreateStateHandler(APP_STATES.START, {
    'NewSession': function () {
        const output = 'Willkommen beim Palfinger Assistenten Pal. Du kannst Servicerequests schicken, Fehlercodes nachsehen und vieles mehr.';
        const reprompt = 'Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.';
        this.emit(':ask', output, reprompt);
    },
    'PalErrorcodeIntent': function () {
        this.handler.state = APP_STATES.ERROR;
        this.emitWithState("PalErrorcodeIntent", true);
    },
    'AMAZON.YesIntent': function () {
        const output = 'Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.';
        this.emit(':ask', output, output);
    },
    'AMAZON.NoIntent': function () {
        const output = 'Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.';
        this.emit(':ask', output, output);
    },
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = 'Du kannst beispielsweise Fehlercodes nachfragen, Supporttickets erstellen, Service und Vertriebspartner suchen und Lieferscheine abfragen. Probiere es aus!';
        this.attributes.repromptSpeech = 'Du kannst beispielsweise Sachen sagen wie „Was bedeutet Fehlercode 500“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?';
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
