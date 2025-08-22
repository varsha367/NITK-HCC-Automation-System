const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const MedicalHistory = sequelize.define('MedicalHistory', {
  studentId: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  doctorName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  entry: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = MedicalHistory;
