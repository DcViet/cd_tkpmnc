'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AccountInfo extends Model {
    static associate(models) {
      // Define associations here
      AccountInfo.belongsTo(models.Customer, { foreignKey: 'customerId' }); 
      // Bạn cũng có thể sử dụng hasOne, tùy thuộc vào quan hệ mà bạn muốn định nghĩa
    }
  }
  AccountInfo.init(
    {
      // Define fields/columns of AccountInfo table here
      accountId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
      },
      customerId: DataTypes.INTEGER,
      idNumber: DataTypes.STRING, // Số căn cước
      paymentInfo: DataTypes.JSONB, // Thông tin thanh toán, có thể là JSONB hoặc dữ liệu khác tùy theo yêu cầu của bạn
    },
    {
      sequelize,
      modelName: 'AccountInfo',
      timestamps: true
    }
  );
  return AccountInfo;
};
