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
  createTopic: function (req, res) {
    var topicData = {
      name: req.body.name
    };
    Topic.create(topicData)
    .then(function (topic) {
      res.status(201).json(topic);
    })
    .catch(function (err) {
      console.error (err);
    });
  },
};
