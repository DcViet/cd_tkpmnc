const { Model } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tạo dữ liệu cho VehicleRegistration
    const vehicleRegistrations = [
      {
        registrationId: 1,
        licensePlate: "29A - 123456", // Biển số xe giả định
        driverId: 1, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        registrationId: 2,
        licensePlate: "29B - 654321", // Biển số xe giả định
        driverId: 2, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 3,
        licensePlate: "29C - 987654", // Biển số xe giả định
        driverId: 3, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 4,
        licensePlate: "29L - 789012", // Biển số xe giả định
        driverId: 10, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 5,
        licensePlate: "29D - 123457", // Biển số xe giả định
        driverId: 4, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        licensePlate: "29E - 789012", // Biển số xe giả định
        driverId: 5, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 6,
        licensePlate: "29F - 345678", // Biển số xe giả định
        driverId: 6, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 7,
        licensePlate: "29G - 901234", // Biển số xe giả định
        driverId: 7, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 8,
        licensePlate: "29H - 567890", // Biển số xe giả định
        driverId: 8, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 9,
        licensePlate: "29K - 123456", // Biển số xe giả định
        driverId: 9, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 10,
        licensePlate: "29L - 789012", // Biển số xe giả định
        driverId: 10, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('VehicleRegistrations', vehicleRegistrations, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa dữ liệu
    await queryInterface.bulkDelete('VehicleRegistrations', null, {});
  }
};
