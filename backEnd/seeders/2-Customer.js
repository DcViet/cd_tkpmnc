'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const customersData = [];

    // Tạo dữ liệu mẫu cho bảng Customers
    for (let i = 0; i < 10; i++) {
      customersData.push({
        name: faker.name.findName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        homeAddress: faker.address.streetAddress(),
        currentLocation: Sequelize.fn('ST_GeomFromText', 'POINT(' + faker.address.longitude() + ' ' + faker.address.latitude() + ')'),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Thêm dữ liệu vào bảng Customers
    await queryInterface.bulkInsert('Customers', customersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa toàn bộ dữ liệu từ bảng Customers
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
