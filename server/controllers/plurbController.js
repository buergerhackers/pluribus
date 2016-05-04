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
};
