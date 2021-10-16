const { DataTypes } = require("sequelize");
const { sequelize, constant: { DatabaseTable } } = require("../config");

const User = sequelize.define(DatabaseTable.User, {

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  mobile: { 
    type: DataTypes.STRING,
    allowNull: true,
  },

  password: { 
    type: DataTypes.STRING,
    allowNull: true,
  },
  
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  profile_picture: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  user_login_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  is_verified: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  },

  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  },

  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true
  },

});

module.exports = User;
