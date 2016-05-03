var Topic = require('../db/dbconfig').Topic;

module.exports = {
  findAll: function (req, res) {
    Topic.findAll()
    .success(function (topics) {
      res.json(topics);
    });
  }
};
