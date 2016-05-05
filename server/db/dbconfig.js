/* Database Configuration */
var mysql = require('mysql');
var Sequelize = require('sequelize');
var sequelize = null;

//if environment is heroku
if (process.env.CLEARDB_DATABASE_URL){
  //initialize db on Heroku
  sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);
  } else {
  //initialize db on localhost
  sequelize = new Sequelize('pluribus', 'root', '', {logging: false});
}

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
  //user:
  //likes: default zero, no null
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

//add many:many relationships between User and Topic
User.belongsToMany(Topic, {through: 'UserTopic'});
Topic.belongsToMany(User, {through: 'UserTopic'});

//add one to many relationship between one user and many plurbs and one topic with many plurbs.
Plurb.belongsTo(User);
Plurb.belongsTo(Topic);

// creates these tables in MySQL if they don't already exist. Pass in {force: true}
// to drop any existing user and message tables and make new ones.
User.sync();
Topic.sync();
Plurb.sync();

exports.User = User;
exports.Topic = Topic;
exports.Plurb = Plurb;
