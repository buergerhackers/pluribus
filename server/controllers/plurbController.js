var Plurb = require('./db/schemas').Plurb;

module.exports = {
  findAll: function (req, res) {
    User.findAll()
    .success(function (plurbs) {
      res.json(plurbs);
    });
  }
};
