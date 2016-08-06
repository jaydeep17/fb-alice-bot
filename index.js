'use strict';

const Promise = require('bluebird');

const Auth = require('./auth');
const sendMessage = require('./send-message');
const parseMessages = require('./parse-messages');

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
    Promise.map(msgData, msg => sendMessage(msg.sender, msg.text))
      .then(() => callback(null, event));
  }
};