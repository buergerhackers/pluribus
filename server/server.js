var express = require('express');
//require route for server to lookup database
//var db = require('./server/db/config.js');

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = process.env.port || 3000;
app.listen(port);

console.log('Server listening on port: ', port);

module.exports = app;
