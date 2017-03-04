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
