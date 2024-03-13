'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CallCenter extends Model {
    static associate(models) {
      // define association here
      CallCenter.belongsTo(models.Customer, { foreignKey: 'customerId' });
    }
  }
  CallCenter.init(
    {
      callTime: DataTypes.DATE,
      pickupLocation: DataTypes.GEOGRAPHY,
      dropoffLocation: DataTypes.GEOGRAPHY,
      status: DataTypes.ENUM('processing', 'completed')
    },
    {
      sequelize,
      modelName: 'CallCenter',
    }
  );
  return CallCenter;
};
