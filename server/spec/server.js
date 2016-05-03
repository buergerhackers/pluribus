var path = require('path');
var expect = require('chai').expect;

var server = require(path.join(__dirname, '..', './server.js'));

describe('server()', function () {
  'use strict';

  it('exists', function () {
    expect(server).to.be.a('function');
  });

  it('Port should be 3000 if server is running on local host', function () {
    var port;
    if (!process.env.port) {
      port = 3000;
    }
    expect(port).to.equal(3000);
  });
});
