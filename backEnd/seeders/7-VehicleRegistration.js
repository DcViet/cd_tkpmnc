'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Dữ liệu mẫu cho đăng ký xe
    const vehicleRegistrationsData = [];

    // Tạo dữ liệu mẫu cho 10 đăng ký xe
    for (let i = 0; i < 10; i++) {
      vehicleRegistrationsData.push({
        licensePlate: faker.vehicle.vrm(),
        ownerName: faker.name.findName(),
        ownerId: faker.random.number({ min: 1000, max: 9999 }),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Thêm dữ liệu vào bảng VehicleRegistrations
    await queryInterface.bulkInsert('VehicleRegistrations', vehicleRegistrationsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa toàn bộ dữ liệu từ bảng VehicleRegistrations
    await queryInterface.bulkDelete('VehicleRegistrations', null, {});
  }
};
