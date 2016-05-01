var bodyParser = require('body-parser');
var dotenv = require('dotenv');

if (!process.env.NODE_ENV) {
  dotenv.load();
}

module.exports = function (app, express) {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
};
