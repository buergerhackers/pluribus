var userController = require('../controllers/userController');
var topicController = require('../controllers/topicController');
var plurbController = require('../controllers/plurbController');
var Purest = require('purest');

var google = new Purest({ provider: 'google' });

module.exports = function (app) {
  /* User Routes */
  app.route('/api/user')
    .get(userController.getAllUsers)
    .post(userController.createUser);

    //find or delete a user based off their unique Google ID
  app.route('/api/user/:_id')
    .get(userController.getUser)
    .post(userController.deleteUser);

  /* Topic Routes */
  app.route('/api/topic')
    .get(topicController.getAllTopics)
    .post(topicController.createTopic);

  app.route('/api/topic/:topicName')
    .get(topicController.getTopicByName)
    .post(topicController.deleteTopic);
  
  /* Plurb Routes */
  app.route('/api/plurb')
    .get(plurbController.getAllPlurbs)
    .post(plurbController.createPlurb);

  app.route('/api/plurb/:plurbId')
    .get(plurbController.getPlurb)
    .post(plurbController.deletePlurb);

  //callback route for OAuth
  app.route('/callback')
    .get(function (req, res) {
      google.get('https://www.googleapis.com/oauth2/v2/userinfo?alt=json', {
        auth: { bearer: req.session.grant.response.access_token },
      }, function (err, nope, body) {
        console.log(body);
        userController.findOrCreateUser(body);
        //set req.session.user
        }
      );
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
