'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Dữ liệu mẫu cho các loại xe
    const vehicleTypesData = [
      { name: 'Sedan', description: 'Standard sedan car' },
      { name: 'SUV', description: 'Sport Utility Vehicle' },
      { name: 'Van', description: 'Passenger van' },
      { name: 'Truck', description: 'Pickup truck' },
      { name: 'Motorcycle', description: 'Two-wheeled motor vehicle' },
    ];

    // Thêm dữ liệu vào bảng VehicleTypes
    await queryInterface.bulkInsert('VehicleTypes', vehicleTypesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa toàn bộ dữ liệu từ bảng VehicleTypes
    await queryInterface.bulkDelete('VehicleTypes', null, {});
  }
};
