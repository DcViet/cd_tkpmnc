class UserService {
    constructor() {
        // Khởi tạo bộ nhớ lưu trữ dữ liệu về người lái xe và hành khách
        this.users = new Map();
    }
// Phương thức để lưu trữ thông tin về người dùng (tài xế hoặc hành khách)
    saveUser(user) {
        try {
            // Lưu trữ thông tin người dùng vào bộ nhớ
            this.users.set(user.id, user);
            console.log(`Thông tin người dùng đã được lưu trữ: ${user.id}`);
        } catch (error) {
            console.error('Lỗi khi lưu trữ thông tin người dùng:', error);
            throw new Error('Không thể lưu trữ thông tin người dùng');
        }
    }
// Phương thức để đánh giá người dùng (tài xế hoặc hành khách)
    rateUser(userId, rating) {
        try {
            // Lấy thông tin người dùng từ bộ nhớ
            const user = this.users.get(userId);
            if (user) {
                // Cập nhật xếp hạng của người dùng
                user.rating = rating;
                console.log(`Người dùng ${userId} đã được đánh giá với xếp hạng: ${rating}`);
            } else {
                throw new Error(`Không tìm thấy người dùng với ID: ${userId}`);
            }
        } catch (error) {
            console.error('Lỗi khi đánh giá người dùng:', error);
            throw new Error('Không thể đánh giá người dùng');
        }
    }
// Phương thức để thích một người dùng (tài xế)
    likeDriver(driverId) {
        try {
            // Lấy thông tin tài xế từ bộ nhớ
            const driver = this.users.get(driverId);
            if (driver) {
                // Tăng xếp hạng của tài xế nếu người dùng thích
                driver.rating++;
                console.log(`Tài xế ${driverId} đã được thích và xếp hạng tăng lên: ${driver.rating}`);
            } else {
                throw new Error(`Không tìm thấy tài xế với ID: ${driverId}`);
            }
        } catch (error) {
            console.error('Lỗi khi thích tài xế:', error);
            throw new Error('Không thể thích tài xế');
        }
    }
}

module.exports = new UserService();
