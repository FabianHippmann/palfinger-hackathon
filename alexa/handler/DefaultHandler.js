"use strict"

const config = require('../config/config');
const APP_STATES = config.APP_STATES

const handler = {
    'LaunchRequest': function () {
        this.handler.state = APP_STATES.START;
        this.emitWithState("NewSession", true);
    },
    'PalErrorcodeIntent': function () {
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

module.exports = handler;
