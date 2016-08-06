'use strict';

console.log('loading function');

exports.handler = (event, context, callback) => {
  console.log('env', process.env.AWS_ENVIRONMENT);
  console.log('Received event', JSON.stringify(event, null, 2));
  callback(null, 'hello');
};