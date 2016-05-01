/* Database Configuration */
var mysql = require('mysql');
var Sequelize = require('sequelize');
var sequelize = null;

//need something that chooses if it's local or on heroku

if (process.env.CLEARDB_DATABASE_URL){
  //initialize db on Heroku
  sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);
  //initialize db on localhost
} else {
  sequelize = new Sequelize("pluribus", "root", null);
}

module.exports = sequelize;
