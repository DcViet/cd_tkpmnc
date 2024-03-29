'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const rideRequestsData = [];

    // Tạo dữ liệu mẫu cho bảng RideRequests
    for (let i = 0; i < 10; i++) {
      rideRequestsData.push({
        requestTime: faker.date.past(),
        pickupLocation: Sequelize.fn('ST_GeomFromText', 'POINT(' + faker.address.longitude() + ' ' + faker.address.latitude() + ')'),
        dropoffLocation: Sequelize.fn('ST_GeomFromText', 'POINT(' + faker.address.longitude() + ' ' + faker.address.latitude() + ')'),
        status: faker.random.arrayElement(['pending', 'assigned', 'in_progress', 'completed']),
        completionTime: faker.date.future(),
        distance: faker.random.number(),
        driverRating: faker.random.number({ min: 1, max: 5 }),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Thêm dữ liệu vào bảng RideRequests
    await queryInterface.bulkInsert('RideRequests', rideRequestsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa toàn bộ dữ liệu từ bảng RideRequests
    await queryInterface.bulkDelete('RideRequests', null, {});
  }
};
