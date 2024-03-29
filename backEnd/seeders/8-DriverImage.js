'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Dữ liệu mẫu cho hình ảnh tài xế
    const driveImagesData = [];

    // Tạo dữ liệu mẫu cho 10 hình ảnh tài xế
    for (let i = 0; i < 10; i++) {
      driveImagesData.push({
        driverId: faker.random.number({ min: 1, max: 10 }), // Assuming you have 10 drivers in the database
        imageUrl: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Thêm dữ liệu vào bảng DriveImages
    await queryInterface.bulkInsert('DriveImages', driveImagesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa toàn bộ dữ liệu từ bảng DriveImages
    await queryInterface.bulkDelete('DriveImages', null, {});
  }
};
