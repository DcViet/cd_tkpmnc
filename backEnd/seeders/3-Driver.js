'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const driversData = [];

    // Tạo dữ liệu mẫu cho bảng Drivers
    for (let i = 0; i < 10; i++) {
      driversData.push({
        name: faker.name.findName(),
        phoneNumber: faker.phone.phoneNumber(),
        currentLocation: Sequelize.fn('ST_GeomFromText', 'POINT(' + faker.address.longitude() + ' ' + faker.address.latitude() + ')'),
        workStatus: faker.random.arrayElement(['available', 'working', 'off']),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Thêm dữ liệu vào bảng Drivers
    await queryInterface.bulkInsert('Drivers', driversData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa toàn bộ dữ liệu từ bảng Drivers
    await queryInterface.bulkDelete('Drivers', null, {});
  }
};
