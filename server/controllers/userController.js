var User = require('../db/dbconfig').User;

module.exports = {
  getAllUsers: function (req, res) {
    User.findAll({})
    .then(function (users) {
      //res.send(users);
      res.status(200).json(users);
    })
    .catch(function (err) {
      console.error(err);
    });
  },  
};
