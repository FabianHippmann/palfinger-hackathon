/**
 * This Prototype demonstrates the usage of a VUI for the Palfinger Hackathon
 * based on the Alexa skill development kit.
 * The Intent Schema, Custom Slot and Sample Utterances for this skill, as well
 * as the presentation for the Hackathon are located at https://github.com/FabianHippmann/palfinger-hackathon
 **/
'use strict';

const Alexa = require('alexa-sdk');
const request = require('request');

// import config
const config = require('./config/config');

//import statehandler
const DefaultHandler = require('./handler/DefaultHandler');
const StartHandler = require('./handler/StartHandler');
const ErrorHandler = require('./handler/ErrorHandler');
const ServiceHandler = require('./handler/ServiceHandler');

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = config.APP_ID;
    alexa.registerHandlers(DefaultHandler, StartHandler, ErrorHandler, ServiceHandler);
    alexa.execute();
};
