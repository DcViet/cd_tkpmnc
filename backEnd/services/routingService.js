// Import các module hoặc dịch vụ cần thiết để thực hiện định tuyến
const cache = require('./cacheService');
const tripService = require('./tripService'); // hiện tại có tripDispatchServer và tripRecordServer
class RoutingService {
    constructor() {
        this.socketConnections = new Map(); // Lưu trữ kết nối của người dùng thông qua web socket 
    }
    // Phương thức để xử lý các yêu cầu chuyến đi từ người dùng
    async handleTripRequest(userId, requestDetails) {
        try {
            // Lưu trữ thông tin yêu cầu vào bộ nhớ đệm
            cache.storeRequestDetails(userId, requestDetails);

            // Gọi dịch vụ chuyến đi để tìm tài xế và cập nhật bộ nhớ đệm
            const driverDetails = await tripService.findDrivers(requestDetails);
            cache.updateRequestDetails(userId, driverDetails);

            // Thực hiện long HTTP polling hoặc web socket để thông báo cho người dùng về tài xế
            // Sử dụng dữ liệu từ bộ nhớ đệm để tìm server-id định tuyến và thông báo cho người dùng
        } catch (error) {
            console.error('Lỗi khi xử lý yêu cầu chuyến đi:', error);
            throw new Error('Không thể xử lý yêu cầu chuyến đi');
        }
    }
    // Phương thức để thực hiện long HTTP polling
    async informUserViaLongPolling(userId) {
        try {
            const requestDetails = cache.getRequestDetails(userId);
            // Kiểm tra nếu có thông tin yêu cầu cho người dùng
            if (requestDetails) {
                // Thực hiện long HTTP polling để thông báo cho người dùng về tài xế
                // Sử dụng thông tin từ bộ nhớ đệm
                const driverDetails = cache.getDriverDetails(userId);
                // Trả về thông tin tài xế cho người dùng
                return driverDetails;
            } else {
                // Nếu không có thông tin yêu cầu, người dùng sẽ tiếp tục chờ
                return null;
            }
        } catch (error) {
            console.error('Lỗi khi thông báo cho người dùng qua long HTTP polling:', error);
            throw new Error('Không thể thông báo cho người dùng');
        }
    }
    // Phương thức để thực hiện kết nối thông qua web socket
    establishWebSocketConnection(userId, socket) {
        // Lưu trữ kết nối của người dùng trong bộ nhớ đệm
        this.socketConnections.set(userId, socket);
        console.log(`Kết nối WebSocket được thiết lập cho người dùng ${userId}`);
    }
    // Phương thức để thông báo cho người dùng qua web socket
    informUserViaWebSocket(userId, driverDetails) {
        try {
            // Kiểm tra xem người dùng có kết nối web socket không
            if (this.socketConnections.has(userId)) {
                const socket = this.socketConnections.get(userId);
                // Gửi thông tin tài xế qua web socket cho người dùng
                socket.emit('driverDetails', driverDetails);
                console.log(`Thông báo tài xế thông qua WebSocket cho người dùng ${userId}`);
            } else {
                console.log(`Người dùng ${userId} không có kết nối WebSocket`);
            }
        } catch (error) {
            console.error('Lỗi khi thông báo cho người dùng qua WebSocket:', error);
        }
    }
}

module.exports = new RoutingService();
