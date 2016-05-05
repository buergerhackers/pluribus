var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var session = require('express-session');
var Grant = require('grant-express');

if (!process.env.NODE_ENV) {
  dotenv.load();
}

/* New Grant For Google Authentication */
var grant = new Grant({
  server: {
    protocol: 'http',
    //may need to move localhost:3000 into .env file
    host: process.env.HOST || 'localhost:3000',
    callback: '/callback',
    transport: 'session',
    state: true,
  },
  google: {
    key: process.env.GOOGLE_CID,
    secret: process.env.GOOGLE_CSECRET,
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.me',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
  },
});

module.exports = function (app, express) {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(session({
    secret: process.env.SESSION_SECRET
  }));
  app.use(grant);
};
