var sequelize = require('./db/dbconfig');

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
