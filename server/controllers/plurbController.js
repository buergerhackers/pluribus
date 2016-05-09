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
    var googId = req.session.user;
    var topic = req.body.topic;
    var plurbData = {
      text: req.body.text,
      lat: req.body.lat,
      long: req.body.long
    };
    Plurb.create(plurbData)
    .then(function (plurb) {
      plurb.setUser(googId);
      plurb.setTopic(topic);
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
  }, 

  getPlurbsByLocation: function (req, res) {
    var minLat = req.body.mapBounds.minLat;
    var maxLat = req.body.mapBounds.maxLat;
    var minLng = req.body.mapBounds.minLng;
    var maxLng = req.body.mapBounds.maxLng;
    //find all plurbs that fit within the min-max range
    Plurb.findAll({
      where: {
        lat: {$between: [minLat, maxLat]},
        long: {$between: [minLng, maxLng]}
      }
    })
    .then(function (plurbs) {
      res.status(200).json(plurbs);
    })
    .catch(function (err) {
      console.error (err);
    });
  }
};
