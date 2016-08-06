'use strict';

/**
 * Parses the event and extracts the messages out of it
 * @param event The Event object given by AWS Lambda
 * @return {Array<{sender, text}>}
 */
function parseMessages(event) {

  const msgData = [];

  const messagingEvents = event.entry[0].messaging;

  for (let i = 0; i < messagingEvents.length; i++) {
    const messagingEvent = messagingEvents[i];
    const sender = messagingEvent.sender.id;

    if (messagingEvent.message && messagingEvent.message.text) {
      const text = messagingEvent.message.text;
      msgData.push({ sender, text });
    }
  }

  return msgData;
}

module.exports = parseMessages;