<<<<<<< bb0ec5f5888dec0886dfd6887f24d0abc97bc310
var Plurb = require('./db/schemas').Plurb;
=======
var Plurb = require('../db/dbconfig').Plurb;
>>>>>>> (fix) Rework database config to get SQL tables to work

module.exports = {
  findAll: function (req, res) {
    User.findAll()
    .success(function (plurbs) {
      res.json(plurbs);
    });
  }
};
