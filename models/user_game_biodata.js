'use strict';
const {
  Model
} = require('sequelize');
const User_game = require('../models')
module.exports = (sequelize, DataTypes) => {
  class User_game_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      User_game_biodata.belongsTo(models.User_game, {
        // kolom userId itu adalah foreignKey
        foreignKey: "userId",
        onDelete: "CASCADE"
      })
    }
  }
  User_game_biodata.init({
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User_game_biodata',
  });
  return User_game_biodata;
};