'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const driversData = [
      {
        driverId: 1,
        name: "Trần Văn Nam",
        phoneNumber: "0945678321",
        currentLocation: "Tọa độ GPS: 10.8030, 106.6907",
        workStatus: "available",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 2,
        name: "Lê Thị Hằng",
        phoneNumber: "0978901234",
        currentLocation: "Vị trí gần đây: Ngã tư đường X - Y",
        workStatus: "working",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 3,
        name: "Phạm Minh Hiếu",
        phoneNumber: "0865432190",
        currentLocation: "Tọa độ GPS: 10.7643, 106.7312",
        workStatus: "available",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 4,
        name: "Đinh Ngọc Mai",
        phoneNumber: "0332145678",
        currentLocation: "Vị trí gần đây: Bến xe",
        workStatus: "off",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 5,
        name: "Nguyễn Thị Lan",
        phoneNumber: "0917890123",
        currentLocation: "Tọa độ GPS: 10.7854, 106.6789",
        workStatus: "available",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    

    
    await queryInterface.bulkInsert('Drivers', driversData, {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Drivers', null, {});
  }
};
