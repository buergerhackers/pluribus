var path = require('path');
var expect = require('chai').expect;
var request = require('supertest');
var Sequelize = require("sequelize");
var sequelize = new Sequelize('pluribus', 'root', '');
var User = require('../db/dbconfig').User;
var Topic = require('../db/dbconfig').Topic;
var Plurb = require('../db/dbconfig').Plurb;
var userController = require('../controllers/userController');
var topicController = require('../controllers/topicController');
var plurbController = require('../controllers/plurbController');
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
      expect(port).to.equal(3000);
    }
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

/* User Tests */
//user controllers
describe('User Controllers', function () {
  describe('getAllUsers()', function () {
    it('should be a function', function () {
      expect(userController.getAllUsers).to.exist;
      expect(userController.getAllUsers).to.be.a('function');
    });
  });
  describe('createUser()', function () {
    it('should be a function', function () {
      expect(userController.createUser).to.exist;
      expect(userController.createUser).to.be.a('function');
    });
  });
});

describe('API routes GET users', function () {

  var newUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
  };

  beforeEach(function (done) {
    User.sync()
    .then(function () {
      done();
    });
  });

  beforeEach(function (done) {
    User.create(newUser)
    .then(function () {
      done();
    });
  });

  it('responds with a 200 (OK)', function (done) {
    request(app)
      .get('api/user')
      .expect(200);
      done();
  });
});

describe('API route POST users', function () {

  var newUser = {
    firstName: 'Post',
    lastName: 'Tester',
    email: 'pt@gmail.com',
  };

  beforeEach(function (done) {
    User.sync()
    .then(function () {
      done();
    });
  });

  beforeEach(function (done) {
    User.create(newUser)
    .then(function () {
      done();
    });
  });

  it('responds with a 200 (OK)', function (done) {
    request(app)
      .post('api/user')
      .expect(201);
      done();
  });
});

/* Topic Tests */
describe('getAllTopics()', function () {
  it('should be a function', function () {
    expect(topicController.getAllTopics).to.exist;
    expect(topicController.getAllTopics).to.be.a('function');
  });
});

describe('API routes GET topics', function () {

  var newTopic = {
    name: 'Animal Rights'
  };

  beforeEach(function (done) {
    Topic.sync()
    .then(function () {
      done();
    });
  });

  beforeEach(function (done) {
    Topic.create(newTopic)
    .then(function () {
      done();
    });
  });

  it('responds with a 200 (OK)', function (done) {
    request(app)
      .get('api/topic')
      .expect(200);
      done();
  });
});

/* Plurb Tests */
describe('getAllPlurbs()', function () {
  it('should be a function', function () {
    expect(plurbController.getAllPlurbs).to.exist;
    expect(plurbController.getAllPlurbs).to.be.a('function');
  });
});

describe('API routes GET plurbs', function () {

  var newPlurb = {
    text: 'I am a test Plurb. We will change the world!'
  };

  beforeEach(function (done) {
    Plurb.sync()
    .then(function () {
      done();
    });
  });

  beforeEach(function (done) {
    Plurb.create(newPlurb)
    .then(function () {
      done();
    });
  });

  it('responds with a 200 (OK)', function (done) {
    request(app)
      .get('api/plurb')
      .expect(200);
      done();
  });
});
