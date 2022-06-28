const { sequelize } = require('./CreateConnection');
const { DataTypes } = require('sequelize');

// Data Types:
// STRING - VARCHAR(255)
// STRING(50) - VARCHAR(50)
// TEXT - TEXT
// BOOLEAN - TINYINT(1)
// INTEGER - INTEGER
// FLOAT - FLOAT
// DATE - DATE

const User = sequelize.define(
  'user',
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, // if we don't add this attribute, id attribute is added as primary key by default
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      //   unique: true,
      validate: {
        len: [2, 8],
      },
    },
    password: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 21,
    },
    wittCodeRocks: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    // gender: {
    //   type: DataTypes.ENUM,
    //   values: ['male', 'female'],
    // },
    registrationDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },

  {
    timestamps: false, // don't add default createdAt and updatedAt attributes
    freezeTableName: true, // disable default behaviour of plural table name

    //// For this timestamps entry should be true i.e; timestamps: true
    // createdAt: false, // I don't want createdAt
    // updatedAt: 'updateTimestamp',// I want updatedAt to actually be called updateTimestamp
  }
);

// // User.sync(); // --> create table if not exist and do nothing if it exists
// // User.sync({ force:true }) --> create table and drops it first if it already exists
// // User.sync({ alter:true }) --> check current state(columns, dataTypes) in database. Perform necessary changes in the table to make it match the model

// User.sync().then((res) => {
//   console.log('table created successfully');
// });

// // Create tables from all models
// // sequelize.sync(); // we can also pass params of { force: true } or { alter: true }

// // delete user table
// // User.drop();

module.exports = { User };
