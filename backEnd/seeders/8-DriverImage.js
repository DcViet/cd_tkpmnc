const { Model } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tạo dữ liệu cho DriverImage
    const driverImages = [
      {
        imageId: 1,
        imageUrl: "https://example.com/driver_avatar_1.jpg", // URL ảnh đại diện giả định
        driverId: 1, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        isAvatar: true, // Ảnh đại diện
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageId: 2,
        imageUrl: "https://example.com/driver_image_2.jpg", // URL ảnh khác của tài xế (giả định)
        driverId: 2, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        isAvatar: false, // Không phải ảnh đại diện
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageId: 3,
        imageUrl: "https://example.com/driver_avatar_3.jpg", // URL ảnh đại diện giả định
        driverId: 3, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        isAvatar: true, // Ảnh đại diện
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageId: 4,
        imageUrl: "https://example.com/driver_image_4.jpg", // URL ảnh khác của tài xế (giả định)
        driverId: 4, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        isAvatar: false, // Không phải ảnh đại diện
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ];

    await queryInterface.bulkInsert('DriverImages', driverImages, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa dữ liệu
    await queryInterface.bulkDelete('DriverImages', null, {});
  }
};
