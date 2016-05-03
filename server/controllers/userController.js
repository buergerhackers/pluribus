var User = require('./db/schemas').User;

module.exports = {
  findAll: function (req, res) {
    User.findAll()
    .success(function (users) {
      res.json(users);
    });
  }
};
