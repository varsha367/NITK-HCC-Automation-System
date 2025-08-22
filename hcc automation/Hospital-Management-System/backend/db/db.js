const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './hospital.sqlite' // this file will be auto-created
});

module.exports = sequelize;

