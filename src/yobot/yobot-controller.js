'use strict';

const PandoraBots = require('./pandorabots-controller');

const pb = new PandoraBots('yobot');

class YoBotController {

  static reply(/*string*/ senderFbId, /*string*/ input, /*string=*/ sessionId) {
    if (sessionId) return YoBotController._reply(senderFbId, input, sessionId);
    return YoBotController._reply(senderFbId, input);
  }

  /**
   * Asks the Pandorabots for a reply
   * @param senderFbId Name of the user (usually a unique id of the user)
   * @param input Text that the user entered
   * @param sessionId Session id of the conversation (pass undefined if unknown)
   * @return {Promise<{status:string, responses: Array<string>, sessionid: number}>}
   */
  static _reply(/*string*/ senderFbId, /*string*/ input, /*number=*/ sessionId) {
    console.log({ senderFbId, input, sessionId });
    return pb.reply(senderFbId, input, sessionId)
      .tap(console.log)
      .then(result => result.responses[0]);
  }

}

module.exports = YoBotController;
