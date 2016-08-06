'use strict';

const Promise = require('bluebird');
const request = require('request-promise');

const PAGE_ACCESS_TOKEN = process.env.PAGE_TOKEN;

/**
 * Sends a message back to the Facebook user
 * @param senderFbId The Fb Id of the sender
 * @param text Text to send
 * @return {Promise}
 */
function sendMessage(/* string */ senderFbId, /* string */ text) {
  const messageData = {
    recipient: { id: senderFbId },
    message: { text }
  };

  const options = getOptions(messageData);

  return Promise.resolve(request(options))
    .catch(err => console.error(err));
}

function getOptions(messageData) {
  return {
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: messageData
  };
}

module.exports = sendMessage;