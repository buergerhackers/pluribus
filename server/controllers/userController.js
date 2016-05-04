var User = require('../db/dbconfig').User;

module.exports = {
  getAllUsers: function (req, next) {
    User.findAll({})
    .then(function (err, users) {
      next(err, users);
    })
    .catch(function (err) {
      console.error(err);
    });
  },  
};
