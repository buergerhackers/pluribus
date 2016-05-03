<<<<<<< bb0ec5f5888dec0886dfd6887f24d0abc97bc310
var Topic = require('./db/schmeas').Topic;
=======
var Topic = require('../db/dbconfig').Topic;
>>>>>>> (fix) Rework database config to get SQL tables to work

module.exports = {
  findAll: function (req, res) {
    Topic.findAll()
    .success(function (topics) {
      res.json(topics);
    });
  }
};
