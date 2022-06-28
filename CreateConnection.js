const { Sequelize } = require('sequelize');

// Passing parameters separately
const sequelize = new Sequelize('sequelize-practice', 'postgres', '123456', {
  dialect: 'postgres',
  //   host: 'localhost', // default - no need to set
  //   port: 5432, // default for postgres - no need to set
  //   define: {
  //     freezeTableName: true, // disable default behaviour of plural table name in all models
  //   },
});

// This code is used to test if connection is OK.
sequelize
  .authenticate()
  .then((res) => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error.message);
  });

module.exports = { sequelize };
