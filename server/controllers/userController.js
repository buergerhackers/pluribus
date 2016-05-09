var User = require('../db/dbconfig').User;

module.exports = {
  getAllUsers: function (req, res) {
    User.findAll({})
    .then(function (users) {
      //res.send(users);
      res.status(200).json(users);
    })
    .catch(function (err) {
      console.error (err);
    });
  },

  // createUser: function (req, res) {
  //   var userData = {
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     email: req.body.email,
  //   };
  //   User.create(userData)
  //   .then(function (user) {
  //     res.status(201).json(user);
  //   })
  //   .catch(function (err) {
  //     console.error (err);
  //   });
  // },

  getUser: function (req, res) {
    var userId = req.params.googid;
    User.findById(userId)
    .then(function (user) {
      res.status(200).json(user);
    })
    .catch(function (err) {
      console.error (err);
    });
  },

  deleteUser: function (req, res) {
    var userId = req.params.googid;
    User.destroy({where: {googid: userId}})
    .then(function () {
      res.status(201);
    })
    .catch(function (err) {
      console.error (err);
    });
  },

  findOrCreateUser: function (body, next) {
    var userData = {
      googid: body.id,
      firstName: body.given_name,
      lastName: body.family_name,
      email: body.email,
      picture: body.picture
    };
    User.findOrCreate({where: userData})
    .then(function (user) {
      //send data back to /callback route
      next(user);
    })
    .catch(function (err) {
      console.error (err);
    });
  }
};
