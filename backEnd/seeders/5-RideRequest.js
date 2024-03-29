const { Model } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tạo dữ liệu cho RideRequest
    const rideRequests = [
      {
        requestId: 1,
        requestTime: new Date("2024-03-25 09:00:00"), // Thời gian yêu cầu cuốc đi mẫu
        pickupLocation: "123 đường ABC, Quận 1, TP.HCM", // Địa điểm đón khách mẫu
        dropoffLocation: "456 đường XYZ, Quận 2, TP.HCM", // Địa điểm trả khách mẫu
        status: "completed", // Trạng thái yêu cầu ("completed" vì là dữ liệu mẫu)
        completionTime: new Date("2024-03-25 09:45:00"), // Thời gian hoàn thành cuốc đi mẫu
        distance: 5.2, // Khoảng cách ước tính (thay thế bằng giá trị phù hợp)
        driverRating: 5, // Đánh giá tài xế (thay thế bằng giá trị 1-5)
        customerId: 1, // Giả sử ID khách hàng này tồn tại (liên kết với bảng Customer)
        driverId: 1, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
      },
      {
        requestId: 2,
        requestTime: new Date("2024-03-26 12:00:00"), // Thời gian yêu cầu cuốc đi mẫu
        pickupLocation: "789 đường DEF, Quận 3, TP.HCM", // Địa điểm đón khách mẫu
        dropoffLocation: "Sân bay Tân Sơn Nhất", // Địa điểm trả khách mẫu
        status: "assigned", // Trạng thái yêu cầu (đã được phân công tài xế)
        completionTime: null, // Chưa hoàn thành cuốc đi (xóa nếu cần)
        distance: 12.5, // Khoảng cách ước tính (thay thế bằng giá trị phù hợp)
        driverRating: null, // Chưa đánh giá tài xế (xóa nếu cần)
        customerId: 3, // Giả sử ID khách hàng này tồn tại (liên kết với bảng Customer)
        driverId: 2, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
      },
      {
        requestId: 3,
        requestTime: new Date("2024-03-27 17:00:00"), // Thời gian yêu cầu cuốc đi mẫu
        pickupLocation: "KTX Đại học Quốc gia TP.HCM", // Địa điểm đón khách mẫu
        dropoffLocation: "Ga Sài Gòn", // Địa điểm trả khách mẫu
        status: "pending", // Trạng thái yêu cầu (chờ xử lý)
        completionTime: null, // Chưa hoàn thành cuốc đi (xóa nếu cần)
        distance: null, // Chưa có thông tin khoảng cách (xóa nếu cần)
        driverRating: null, // Chưa có đánh giá tài xế (xóa nếu cần)
        customerId: 2, // Giả sử ID khách hàng này tồn tại (liên kết với bảng Customer)
        driverId: null, // Chưa phân công tài xế (xóa nếu cần)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 4,
        requestTime: new Date("2024-03-28 10:00:00"), // Thời gian yêu cầu cuốc đi mẫu
        pickupLocation: "Bến xe Miền Tây", // Địa điểm đón khách mẫu
        dropoffLocation: "Bến xe Miền Đông", // Địa điểm trả khách mẫu
        status: "completed", // Trạng thái yêu cầu (đã hoàn thành)
        completionTime: new Date("2024-03-28 11:00:00"), // Thời gian hoàn thành cuốc đi mẫu
        distance: 8.5, // Khoảng cách ước tính (thay thế bằng giá trị phù hợp)
        driverRating: 4, // Đánh giá tài xế (thay thế bằng giá trị 1-5)
        customerId: 4, // Giả sử ID khách hàng này tồn tại (liên kết với bảng Customer)
        driverId: 1, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 5,
        requestTime: new Date("2024-03-29 14:00:00"), // Thời gian yêu cầu cuốc đi mẫu
        pickupLocation: "Trung tâm thương mại Vincom Center", // Địa điểm đón khách mẫu
        dropoffLocation: "Nhà hát Thành phố", // Địa điểm trả khách mẫu
        status: "assigned", // Trạng thái yêu cầu (đã được phân công tài xế)
        completionTime: null, // Chưa hoàn thành cuốc đi (xóa nếu cần)
        distance: 3.5, // Khoảng cách ước tính (thay thế bằng giá trị phù hợp)
        driverRating: null, // Chưa đánh giá tài xế (xóa nếu cần)
        customerId: 5, // Giả sử ID khách hàng này tồn tại (liên kết với bảng Customer)
        driverId: 2, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 6,
        requestTime: new Date("2024-03-30 18:00:00"), // Thời gian yêu cầu cuốc đi mẫu
        pickupLocation: "Phú Mỹ Hưng", // Địa điểm đón khách mẫu
        dropoffLocation: "Khu du lịch Suối Tiên", // Địa điểm trả khách mẫu
        status: "pending", // Trạng thái yêu cầu (chờ xử lý)
        completionTime: null, // Chưa hoàn thành cuốc đi (xóa nếu cần)
        distance: 15.0, // Khoảng cách ước tính (thay thế bằng giá trị phù hợp)
        driverRating: null, // Chưa có đánh giá tài xế (xóa nếu cần)
        customerId: 6, // Giả sử ID khách hàng này tồn tại (liên kết với bảng Customer)
        driverId: null, // Chưa phân công tài xế (xóa nếu cần)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 7,
        requestTime: new Date("2024-03-31 11:00:00"), // Thời gian yêu cầu cuốc đi mẫu
        pickupLocation: "Sân bay Tân Sơn Nhất", // Địa điểm đón khách mẫu
        dropoffLocation: "Vũng Tàu", // Địa điểm trả khách mẫu
        status: "completed", // Trạng thái yêu cầu (đã hoàn thành)
        completionTime: new Date("2024-03-31 15:00:00"), // Thời gian hoàn thành cuốc đi mẫu
        distance: 120.0, // Khoảng cách ước tính (thay thế bằng giá trị phù hợp)
        driverRating: 5, // Đánh giá tài xế (thay thế bằng giá trị 1-5)
        customerId: 7, // Giả sử ID khách hàng này tồn tại (liên kết với bảng Customer)
        driverId: 3, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 8,
        requestTime: new Date("2024-04-02 19:00:00"), // Thời gian yêu cầu cuốc đi mẫu
        pickupLocation: "Quận 1", // Địa điểm đón khách mẫu
        dropoffLocation: "Quận 7", // Địa điểm trả khách mẫu
        status: "assigned", // Trạng thái yêu cầu (đã được phân công tài xế)
        completionTime: null, // Chưa hoàn thành cuốc đi (xóa nếu cần)
        distance: 7.0, // Khoảng cách ước tính (thay thế bằng giá trị phù hợp)
        driverRating: null, // Chưa đánh giá tài xế (xóa nếu cần)
        customerId: 9, // Giả sử ID khách hàng này tồn tại (liên kết với bảng Customer)
        driverId: 2, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 9,
        requestTime: new Date("2024-04-03 12:00:00"), // Thời gian yêu cầu cuốc đi mẫu
        pickupLocation: "Gò Vấp", // Địa điểm đón khách mẫu
        dropoffLocation: "Tân Bình", // Địa điểm trả khách mẫu
        status: "pending", // Trạng thái yêu cầu (chờ xử lý)
        completionTime: null, // Chưa hoàn thành cuốc đi (xóa nếu cần)
        distance: 4.5, // Khoảng cách ước tính (thay thế bằng giá trị phù hợp)
        driverRating: null, // Chưa có đánh giá tài xế (xóa nếu cần)
        customerId: 10, // Giả sử ID khách hàng này tồn tại (liên kết với bảng Customer)
        driverId: null, // Chưa phân công tài xế (xóa nếu cần)
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];
    
    await queryInterface.bulkInsert('RideRequests', rideRequests, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa dữ liệu
    await queryInterface.bulkDelete('RideRequests', null, {});
  }
};
