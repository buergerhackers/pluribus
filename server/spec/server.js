var path = require('path');
var expect = require('chai').expect;
var request = require('supertest');
var Sequelize = require("sequelize");
var User = require('../db/dbconfig').User;
var userController = require('../controllers/userController');
var server = require(path.join(__dirname, '..', './server.js'));
var app = require('../server');

describe('server', function () {
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

describe('Invalid Routes', function () {
  // test that proper error code is recieved for invalid url
  it('Should return error', function (done) {
    request(app)
    .get('/abc')
    .expect(404)
    .end(done);
  });
});

describe('getAllUsers()', function () {
  it('should be a function', function () {
    expect(userController.getAllUsers).to.exist;
    expect(userController.getAllUsers).to.be.a('function');
  });
});

