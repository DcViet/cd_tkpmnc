'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      // Define associations here
      Customer.hasMany(models.RideRequest, { foreignKey: 'customerId' });
      Customer.hasMany(models.CallCenter, { foreignKey: 'customerId' });
      Customer.hasOne(models.AccountInfo, { foreignKey: 'customerId' }); 
    }
  }
  Customer.init(
    {
      customerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      homeAddress: DataTypes.STRING,
      currentLocation: DataTypes.GEOGRAPHY
    },
    {
      sequelize,
      modelName: 'Customer',
    }
  );
  return Customer;
};
