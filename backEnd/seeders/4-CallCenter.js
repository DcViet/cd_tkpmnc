const { Model } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tạo dữ liệu cho CallCenter
    const callCenters = [
      {
        callId: 1,
        callTime: new Date("2024-03-25 10:15:00"),
        pickupLocation: "123 đường ABC, Quận 1, TP.HCM",
        dropoffLocation: "456 đường XYZ, Quận 2, TP.HCM",
        status: "processing",
        customerId: 1,
        driverId: null,
        rideRequestId: 1, // Đổi rideRequestId từ 2 thành 1
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
          callId: 2,
          callTime: new Date("2024-03-26 15:30:00"),
          pickupLocation: "789 đường DEF, Quận 3, TP.HCM",
          dropoffLocation: "Sân bay Tân Sơn Nhất",
          status: "completed",
          customerId: 3,
          driverId: 2,
          rideRequestId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          callId: 3,
          callTime: new Date("2024-03-27 09:00:00"),
          pickupLocation: "KTX Đại học Quốc gia TP.HCM",
          dropoffLocation: "Ga Sài Gòn",
          status: "processing",
          customerId: 2,
          driverId: 3,
          rideRequestId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          callId: 4,
          callTime: new Date("2024-03-28 14:00:00"),
          pickupLocation: "Bến xe Miền Tây",
          dropoffLocation: "Bến xe Miền Đông",
          status: "completed",
          customerId: 4,
          driverId: 1,
          rideRequestId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          callId: 5,
          callTime: new Date("2024-03-29 18:00:00"),
          pickupLocation: "Trung tâm thương mại Vincom Center",
          dropoffLocation: "Nhà hát Thành phố",
          status: "processing",
          customerId: 5,
          driverId: 2,
          rideRequestId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          callId: 6,
          callTime: new Date("2024-03-30 10:30:00"),
          pickupLocation: "Phú Mỹ Hưng",
          dropoffLocation: "Khu du lịch Suối Tiên",
          status: "completed",
          customerId: 6,
          driverId: 3,
          rideRequestId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          callId: 7,
          callTime: new Date("2024-03-31 12:00:00"),
          pickupLocation: "Sân bay Tân Sơn Nhất",
          dropoffLocation: "Vũng Tàu",
          status: "processing",
          customerId: 7,
          driverId: 1,
          rideRequestId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          callId: 8,
          callTime: new Date("2024-04-01 15:00:00"),
          pickupLocation: "Bình Thạnh",
          dropoffLocation: "Thủ Đức",
          status: "completed",
          customerId: 8,
          driverId: 2,
          rideRequestId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          callId: 9,
          callTime: new Date("2024-04-02 18:00:00"),
          pickupLocation: "Quận 1",
          dropoffLocation: "Quận 7",
          status: "processing",
          customerId: 9,
          driverId: 3,
          rideRequestId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          callId: 10,
          callTime: new Date("2024-04-03 20:00:00"),
          pickupLocation: "Gò Vấp",
          dropoffLocation: "Tân Bình",
          status: "completed",
          customerId: 10,
          driverId: 1,
          rideRequestId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
      },
  ];
  
    

    await queryInterface.bulkInsert('CallCenters', callCenters, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa dữ liệu
    await queryInterface.bulkDelete('CallCenters', null, {});
  }
};
