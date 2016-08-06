# README

A small Facebook Messenger chat bot, that uses [ALICE](http://alice.pandorabots.com) to chat with users.

The source of the bot is built to run in a server-less environment, thus it's just an [AWS Lambda](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html) Function.


## Demo
http://m.me/yoyobot (coming soon)

## How to use it?
To deploy it to AWS Lambda, all you need is `deploy.env` file and a few environment variables.

A sample file has been given for `deploy.env`, go through that and fill in the details.

AWS Lambda needs a zip file of the source,
```bash
$ npm run package
```
this will install all the production dependencies and package the entire thing in a zip file ready for deployment.
