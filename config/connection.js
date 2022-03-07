// import the Sequelize constructor from the library 
const Sequelize = require('sequelize'); 

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username
// and password
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new sequelize(process.env.DB_NAME, process.env.DB_USER, 
              process.env.DB_PW, {
              host: 'localhost',
              dialect: mysql,
              port: 3306
              });
}


// This is the old connection logic prior to hosting on Heroku.
//const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, 
//                                process.env.DB_PW, {
//  host: 'localhost',
//  dialect: 'mysql',
//  port: 3306,
//});


module.exports = sequelize;