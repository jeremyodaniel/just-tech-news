const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create our User model
class User extends Model {}

// Define table columns and configuration
User.init(
	{
		// Define an id column
		id: {
			// use the special Sequelize DataTypes object provide what type of data it is
			type: DataTypes.INTEGER,
			// thie is the equivaleny of SQL's 'NOT NULL' option
			allowNull: false,
			// instruct that this is the Primary Key
			primaryKey: true,
			// turn on auto increment
			autoIncrement: true
		},
		// define username column
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		// define an email column
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			// there cannot be any duplicate email values in this table
			unique: true,
			// if allow Null is set to false, we can run our data through validatiors before creating the table data
			validate: {
				isEmail: true
			}
		},
		// define a password column
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// this means the password must be at least 4 characters long
				len: [4]
			}
		}
	},
  {
    // TABLE CONFIGURATION OPTIONS GO HERE ((https://sequelize.org/v5/manual/models-definition.html#configuration)) 

		// Pass in our imported sequelize connection (the direct connection to our database)
		sequelize,
		// don't automatically create createdAt/updatedAt timestamp fields
		timestamps: false,
		// Don't pluralize name of database table
		freezeTableName: true,
		// Use underscores instead of camelcase
		underscored: true,
		// Make it so our modelname stays lowercase in the database
		modelName: 'user'
  }
);

module.exports = User;