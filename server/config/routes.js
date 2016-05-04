var userController = require('../controllers/userController');
var topicController = require('../controllers/topicController');
var plurbController = require('../controllers/plurbController');

module.exports = function (app) {

  /* User Routes */
  app.route('/api/user')
    .get(userController.getAllUsers)
    .post(userController.createUser);

  app.route('/api/user/:userId')
    .get(userController.getUser)
    .post(userController.deleteUser);

  /* Topic Routes */
  app.route('/api/topic')
    .get(topicController.getAllTopics)
    .post(topicController.createTopic);
  
  /* Plurb Routes */
  app.route('/api/plurb')
    .get(plurbController.getAllPlurbs)
    .post(plurbController.createPlurb);

  app.route('/api/plurb/:plurbId')
    .get(plurbController.getPlurb)
    .post(plurbController.deletePlurb);
};
