var userController = require('../controllers/userController');
var topicController = require('../controllers/topicController');
var plurbController = require('../controllers/plurbController');
var Purest = require('purest');
var checkAuth = require('./utils').checkAuthentication;

var google = new Purest({ provider: 'google' });

module.exports = function (app) {
  /* User Routes */
  app.route('/api/users')
    .get(checkAuth, userController.getAllUsers);

  //find or delete a user based off their unique Google ID
  app.route('/api/user/:googid')
    .get(checkAuth, userController.getUser)
    .post(checkAuth, userController.findOrCreateUser);

  //add and find friends
  app.route('/api/friend')
    .get(checkAuth, userController.getFriends)
    .post(checkAuth, userController.addFriend);

  app.route('/api/removefriend/:googid')
    .post(checkAuth, userController.removeFriend);

  /* Topic Routes */
  app.route('/api/topic')
    .get(checkAuth, topicController.getAllTopics)
    .post(checkAuth, topicController.findOrCreateTopic);

  app.route('/api/topic/:topicName')
    .get(checkAuth, topicController.getTopicByName)
    .post(checkAuth, topicController.deleteTopic);
  
  /* Plurb Routes */
  app.route('/api/plurb')
    .get(checkAuth, plurbController.getAllPlurbs)
    .post(checkAuth, plurbController.createPlurb);

  //this is actually a route that just gets plurbs despite the fact that it is a POST request
  app.route('/api/plurbs')
    .post(checkAuth, plurbController.getPlurbsByLocation);

  app.route('/api/plurb/:plurbId')
    .get(checkAuth, plurbController.getPlurb)
    .post(checkAuth, plurbController.deletePlurb);

  app.route('/api/plurbs/:googId')
    .get(checkAuth, plurbController.getPlurbsByGoogId);

  app.route('/api/friendsplurbs')
    .get(checkAuth, plurbController.getAllFriendsPlurbs);

  //callback route for OAuth
  app.route('/callback')
    .get(function (req, res) {
      google.get('https://www.googleapis.com/oauth2/v2/userinfo?alt=json', {
        auth: { bearer: req.session.grant.response.access_token },
      }, function (err, nope, body) {
        userController.findOrCreateUser(body, function (user) {
          //sets session to Google ID
          req.session.user = user[0].dataValues.googid;
          // notify client of successful authentication
          var authenticated = encodeURIComponent(true);
          res.redirect('/?authenticated=' + authenticated);
        });
      });
    });

  app.route('/logout')
    .get(function (req, res) {
      req.session.destroy(function (err) {
        if (err) {
          console.error(err);
        } else {
          res.redirect('/');
        }
      });
    });
};
