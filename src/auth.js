'use strict';

/**
 * Facebook WebHook verification
 */
class Auth {

  /**
   * Handles Facebook verification request
   * @param queryParams Query Params sent by Facebook for verification
   * @param callback Callback to call
   */
  static verify(queryParams, callback) {
    const rVerifyToken = queryParams['hub.verify_token'];

    if (rVerifyToken === process.env.VERIFY_TOKEN) {
      const challenge = queryParams['hub.challenge'];
      callback(null, parseInt(challenge))
    } else {
      callback(null, 'Error, wrong validation token');
    }
  }

}

module.exports = Auth;
