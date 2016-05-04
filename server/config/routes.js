var userController = require('../controllers/userController');
var topicController = require('../controllers/topicController');
var plurbController = require('../controllers/plurbController');

/* Utilities */
// handle errors and send response
var sendResponse = function (res, err, data, status) {
  if (err) {
    res.status(400).send('Error: Record doesn\'t exist');
  } else {
    res.status(status).send(data);
  }
};

module.exports = function (app) {

  /* User Routes */
  //Get all users
  app.route('/api/user')
    .get(userController.getAllUsers);

  /* Topic Routes */
  //Get all topics
  
  /* Plurb Routes */

};
