class DriverLocationService {
    constructor() {
        this.gridBuffer = new Map(); // Sử dụng Map để lưu trữ vị trí tạm thời của các tài xế
    }
    // Hàm để cập nhật vị trí của một tài xế
    updateDriverLocation(driverId, currentLocation) {
        // Ánh xạ vị trí tới id lưới
        const gridId = this.calculateGridId(currentLocation);
        // Lưu trữ vị trí tạm thời trong cache
        if (!this.gridBuffer.has(gridId)) {
            this.gridBuffer.set(gridId, []);
        }
        const driversInGrid = this.gridBuffer.get(gridId);
        driversInGrid.push({ driverId, location: currentLocation });
        this.gridBuffer.set(gridId, driversInGrid);
    }
    // Hàm để tìm các tài xế gần một vị trí cụ thể
    findNearbyDrivers(currentLocation) {
        const gridId = this.calculateGridId(currentLocation);
        // Tìm tất cả các tài xế trong lưới gần đó
        let driversInGrid = this.gridBuffer.get(gridId);
        // Nếu không có tài xế nào trong lưới gần đó, tìm trong lưới kế tiếp
        if (!driversInGrid) {
            const nextGridId = this.calculateNextGridId(gridId);
            driversInGrid = this.gridBuffer.get(nextGridId);
        }
        return driversInGrid ? driversInGrid : [];
    }
    // Hàm để tính id lưới dựa trên vị trí
    calculateGridId(location) {
        // Ánh xạ vị trí tới id lưới (có thể sử dụng hàm băm hoặc toán học để tính toán)
        return `${location.latitude}_${location.longitude}`;
    }
    // Hàm để tính id lưới tiếp theo
    calculateNextGridId(currentGridId) {
        // Phân vùng thứ nhất dựa trên thành phố, phân vùng tiếp theo dựa trên id lưới
        const parts = currentGridId.split('_');
        const nextGridId = `${parts[0]}_${parseInt(parts[1]) + 1}`; // Giả sử chúng ta tăng id lưới lên 1
        return nextGridId;
    }
    // Hàm để xóa vị trí của một tài xế khỏi cache
    removeDriverLocation(driverId) {
        // Lấy tất cả các lưới trong cache
        const gridIds = Array.from(this.gridBuffer.keys());
        for (const gridId of gridIds) {
            const driversInGrid = this.gridBuffer.get(gridId);
            // Lọc ra các tài xế khác với driverId và lưu lại
            const updatedDriversInGrid = driversInGrid.filter(driver => driver.driverId !== driverId);
            this.gridBuffer.set(gridId, updatedDriversInGrid);
        }
    }
}
module.exports = DriverLocationService;
