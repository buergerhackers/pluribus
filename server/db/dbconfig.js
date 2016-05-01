/* Database Configuration */
var mysql = require('mysql');
var Sequelize = require('sequelize');
//need something that chooses if it's local or on heroku
var sequelize = new Sequelize("pluribus", "root", "");

//not sure if I need to export it
module.exports = db;