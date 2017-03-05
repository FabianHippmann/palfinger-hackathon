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
    'NewServiceRequest': function () {
        this.handler.state = APP_STATES.SERVICE;
        this.emitWithState("NewServiceRequest", true);
    },
    'FaqFirstIntent': function() {
        // todo:
        // connect Gateway on http://phplaravel-34738-81763-225945.cloudwaysapps.com/api/faqs
        // 
        this.emit(':tell', "Geben Sie im Onlineshop einfach ihre Gerätenummer ein. Es werden Ihnen dann alle Teile angezeigt, die in Ihrem Gerät verbaut sind.");
    },
    'FaqSecondIntent': function() {
        // todo:
        // connect Gateway on http://phplaravel-34738-81763-225945.cloudwaysapps.com/api/faqs
        // 
        this.emit(':tell', "Technische Beratung bekommen Sie von unseren kompetenten Technikern unter unserer Service-Hotline +49 4221 853-355. Erreichbar sind unsere Techniker montags bis donnerstags von 7:30 bis 17:00 Uhr und Freitags von 7:30 bis 16:00 Uhr. Zu den übrigen Zeiten erfolgt eine automatische Anrufweiterleitung zur Hotline unseres Kooperationspartners ADAC. Im Fall eines technischen Defektes kann Ihnen dort eine entsprechende Servicewerkstatt vermittelt werden.");
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
};

module.exports = handler;
