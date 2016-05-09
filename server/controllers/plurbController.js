var Plurb = require('../db/dbconfig').Plurb;

module.exports = {
  getAllPlurbs: function (req, res) {
    Plurb.findAll({})
    .then(function (plurbs) {
      res.status(200).json(plurbs);
    })
    .catch(function (err) {
      console.error(err);
    });
  },

  createPlurb: function (req, res) {
    var plurbData = {
      text: req.body.text,
      location: JSON.stringify(req.body.location),
      topic: req.body.topic
    };
    Plurb.create(plurbData)
    .then(function (plurb) {
      plurb.setUser(req.session.user);
      //plurb.setTopic(TODO:);
      res.status(201).json(plurb);
    })
    .catch(function (err) {
      console.error (err);
    });
  },

  getPlurb: function (req, res) {
    var plurbId = req.params.plurbId;
    Plurb.findById(plurbId)
    .then(function (plurb) {
      res.status(200).json(plurb);
    })
    .catch(function (err) {
      console.error (err);
    });
  },

  deletePlurb: function (req, res) {
    var plurbId = req.params.plurbId;
    Plurb.destroy({where: {id: plurbId}})
    .then(function () {
      res.status(201);
    })
    .catch(function (err) {
      console.error (err);
    });
  },

  getPlurbsByGoogId: function (req, res) {
    var googId = req.params.googId;
    Plurb.findAll({where: {UserGoogid: googId}})
    .then(function (plurbs) {
      res.status(200).json(plurbs);
    })
    .catch(function (err) {
      console.error (err);
    });
  }
};
