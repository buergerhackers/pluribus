var Topic = require('../db/dbconfig').Topic;

module.exports = {
  getAllTopics: function (req, res) {
    Topic.findAll({})
    .then(function (topics) {
      res.status(200).json(topics);
    })
    .catch(function (err) {
      console.error(err);
    });
  },
};
