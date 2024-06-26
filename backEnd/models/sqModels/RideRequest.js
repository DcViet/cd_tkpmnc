'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RideRequest extends Model {
    static associate(models) {
      // Define associations here
      RideRequest.belongsTo(models.Driver, { foreignKey: 'driverId' });
      RideRequest.belongsTo(models.Customer, { foreignKey: 'customerId' });
    }
  }
  RideRequest.init(
    {
      requestId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      requestTime: DataTypes.DATE,
      pickupLocation: DataTypes.GEOGRAPHY,
      dropoffLocation: DataTypes.GEOGRAPHY,
      status: DataTypes.ENUM('pending', 'assigned', 'in_progress', 'completed'),
      completionTime: DataTypes.DATE,
      distance: DataTypes.FLOAT,
      driverRating: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'RideRequest',
    }
  );
  return RideRequest;
};
