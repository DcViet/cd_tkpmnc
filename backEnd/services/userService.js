// driverService.js
const Driver = require('../models/Driver');

class DriverService {
    constructor() {
        // Khởi tạo các biến cần thiết cho dịch vụ tài xế
    }

    getNearbyDrivers(passengerLocation) {
        // Triển khai để tìm các tài xế gần đây dựa trên vị trí của hành khách
    }
}


class CustomerService {
    constructor() {
        // Khởi tạo các biến cần thiết cho dịch vụ khach hang
    }

    getNearbyDrivers(passengerLocation) {
        // Triển khai để tìm các tài xế gần đây dựa trên vị trí của hành khách
    }
}


module.exports = { DriverService, CustomerService };
