var Grant = require('grant-express');
var bodyParser = require('body-parser');
var session = require('express-session');
var dotenv = require('dotenv');

/* This will check if the app is in production and finds a NODE_ENV or local.
If local, it will load the .env file variables as if it were production */
if (!process.env.NODE_ENV) {
  dotenv.config();
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
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  }));
  app.use(grant);
};
