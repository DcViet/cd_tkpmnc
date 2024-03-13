'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    static associate(models) {
      // define association here
      Driver.hasMany(models.RideRequest, { foreignKey: 'driverId' });
    }
  }
  Driver.init(
    {
      name: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      currentLocation: DataTypes.GEOGRAPHY,
      workStatus: DataTypes.ENUM('available', 'working', 'off')
    },
    {
      sequelize,
      modelName: 'Driver',
    }
  );
  return Driver;
};
