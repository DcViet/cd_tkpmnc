const DriverLocationService = require('./DriverLocationService');
class TripDispatchService {
    constructor() { }
    async connectPassengerAndDrivers(passengerId, pickupLocation, destinationLocation) {
        try {
            // Tạo một instance của dịch vụ vị trí tài xế
            const driverLocationService = new DriverLocationService();
            // Cập nhật vị trí của tài xế mới
            driverLocationService.updateDriverLocation(driverId, pickupLocation);

            // Lấy danh sách các tài xế gần điểm bắt đầu
            const nearbyDrivers = driverLocationService.findNearbyDrivers(pickupLocation);

            // Gửi yêu cầu chuyến đi cho các tài xế gần đó
            await this.sendTripRequestToDrivers(passengerId, pickupLocation, destinationLocation, nearbyDrivers);
        } catch (error) {
            console.error('Error connecting passenger and drivers:', error);
            throw new Error('Failed to connect passenger and drivers');
        }
    }
    async sendTripRequestToDrivers(passengerId, pickupLocation, destinationLocation, nearbyDrivers) {
        try {
            // Chọn 5 tài xế đầu tiên từ danh sách tài xế gần đó
            const selectedDrivers = nearbyDrivers.slice(0, 5);
            // Gửi yêu cầu chuyến đi cho các tài xế được chọn
            for (const driver of selectedDrivers) {
                await this.sendTripRequest(passengerId, driver.driverId, pickupLocation, destinationLocation);
            }
        } catch (error) {
            console.error('Error sending trip requests to drivers:', error);
            throw new Error('Failed to send trip requests to drivers');
        }
    }
    async sendTripRequest(passengerId, driverId, pickupLocation, destinationLocation) {
        try {
            // Gửi yêu cầu chuyến đi cho tài xế được chọn
            // Bạn có thể gọi API hoặc phương thức từ dịch vụ chuyến đi ở đây
        } catch (error) {
            console.error(`Error sending trip request to driver ${driverId}:`, error);
            // Xử lý lỗi hoặc gửi lại yêu cầu cho tài xế khác nếu cần
        }
    }
}
}

module.exports = new TripDispatchService();
