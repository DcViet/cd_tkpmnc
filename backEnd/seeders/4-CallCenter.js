'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const callCentersData = [];

    // Tạo dữ liệu mẫu cho bảng CallCenters
    for (let i = 0; i < 10; i++) {
      callCentersData.push({
        callTime: faker.date.past(),
        pickupLocation: Sequelize.fn('ST_GeomFromText', 'POINT(' + faker.address.longitude() + ' ' + faker.address.latitude() + ')'),
        dropoffLocation: Sequelize.fn('ST_GeomFromText', 'POINT(' + faker.address.longitude() + ' ' + faker.address.latitude() + ')'),
        status: faker.random.arrayElement(['processing', 'completed']),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Thêm dữ liệu vào bảng CallCenters
    await queryInterface.bulkInsert('CallCenters', callCentersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa toàn bộ dữ liệu từ bảng CallCenters
    await queryInterface.bulkDelete('CallCenters', null, {});
  }
};
