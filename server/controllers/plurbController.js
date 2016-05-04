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
      location: req.body.location
    };
    Plurb.create(plurbData)
    .then(function (plurb) {
      res.status(201).json(plurb);
    })
    .catch(function (err) {
      console.error (err);
    });
  },
};
