/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const greetings = require('./src/greetings');
exports.greetings = greetings.greetings;

const helloWorld = require('./src/helloWorld');
exports.helloWorld = helloWorld.helloWorld;
