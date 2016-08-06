'use strict';

const Promise = require('bluebird');
const request = require('request-promise');

class PandoraBots {

  constructor(/*string*/ botName) {
    this.botName = botName;
    this.userKey = process.env.PANDORABOTS_USER_KEY;
  }

  /**
   * Asks the Pandorabots for a reply
   * @param clientName Name of the user (usually a unique id of the user)
   * @param input Text that the user entered
   * @param sessionId Session id of the conversation (pass undefined if unknown)
   * @return {Promise<{status:string, responses: Array<string>, sessionid: number}>}
   */
  reply(/*string*/ clientName, /*string*/ input, /*number=*/ sessionId) {
    const options = this._options(clientName, input, sessionId);
    return Promise.resolve(request(options));
  }

  /**
   * Returns the options required to hit the Pandorabots server
   * @param clientName Name of the user (usually a unique id of the user)
   * @param input Text that the user entered
   * @param sessionId Session id of the conversation (pass undefined if unknown)
   * @return {{method: string, url: string, qs: {user_key: string}, form: {input: string, sessionid: number, client_name: string}, json: boolean}}
   * @private
   */
  _options(/*string*/ clientName, /*string*/ input, /*number=*/ sessionId) {
    return {
      method: 'POST',
      url: `https://playground.pandorabots.com/talk/jaydeep/${this.botName}`,
      qs: { user_key: this.userKey },
      form: {
        input,
        sessionid: sessionId,
        client_name: clientName
      },
      json: true
    };
  }

}

module.exports = PandoraBots;
