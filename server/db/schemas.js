var sequelize = require('./db/dbconfig/sequelize');

// we define the models we need using js--we don't need a schema file!
var User = sequelize.define('User', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

var Topic = sequelize.define('Topic', {
  name: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

var Plurb = sequelize.define('Plurb', {
  text: Sequelize.STRING,
  location: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  topicID: 'foreignID',
  userID: 'foreignID',
});

//add relationships here
//Message.belongsTo(User);
// puts a UserId column on each Message instance
// also gives us the `.setUser` method, available inside the .success callback
// after creating a new instance of Message


User.sync();
Topic.sync();
Plurb.sync();
// creates these tables in MySQL if they don't already exist. Pass in {force: true}
// to drop any existing user and message tables and make new ones.

exports.User = User;
exports.Topic = Topic;
exports.Plurb = Plurb;
