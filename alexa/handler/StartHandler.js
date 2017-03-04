"use strict"

const Alexa = require('alexa-sdk');

const config = require('../config/config');
const APP_STATES = config.APP_STATES

const handler = Alexa.CreateStateHandler(APP_STATES.START, {
    'NewSession': function () {
        this.attributes.speechOutput = 'Willkommen beim Palfinger Assistenten Pal. Du kannst Servicerequests schicken, Fehlercodes nachsehen und vieles mehr.';
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes.repromptSpeech = 'Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.';
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    }
});

module.exports = handler;
