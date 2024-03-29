'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const accountInfoData = [];

    // Tạo dữ liệu mẫu cho bảng AccountInfo
    for (let i = 0; i < 10; i++) {
      accountInfoData.push({
        customerId: i + 1, // Thay đổi giá trị customerId theo cần thiết
        identityCardNumber: faker.random.number({ min: 1000000000, max: 9999999999 }), // Số căn cước
        paymentInfo: faker.finance.creditCardNumber(), // Thông tin thanh toán
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Thêm dữ liệu vào bảng AccountInfo
    await queryInterface.bulkInsert('AccountInfos', accountInfoData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa toàn bộ dữ liệu từ bảng AccountInfo
    await queryInterface.bulkDelete('AccountInfos', null, {});
  }
};
