'use strict';

const Promise = require('bluebird');

const Auth = require('./auth');
const sendMessage = require('./send-message');
const parseMessages = require('./parse-messages');
const YoBotController = require('./yobot/yobot-controller');

exports.handler = (event, context, callback) => {
  console.log('Received event', JSON.stringify(event, null, 2));

  // process GET request
  if (event.params && event.params.querystring) {
    const queryParams = event.params.querystring;
    return Auth.verify(queryParams, callback);
  }

  // process POST request
  else {
    const msgData = parseMessages(event);
    Promise.map(msgData, msg => {
      return YoBotController.reply(msg.sender, msg.text)
        .then((/*string*/ reply) => sendMessage(msg.sender, reply));
    }).then(() => callback(null, event));
  }
};