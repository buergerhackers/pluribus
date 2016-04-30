var express = require('express');
//require route for server to lookup database
//var db = require('./server/db/config.js');

var app = express();

require('./server/utils/middleware.js')(app, express);
require('./server/routes')(app, express);
console.log('server file');
module.exports = app;
