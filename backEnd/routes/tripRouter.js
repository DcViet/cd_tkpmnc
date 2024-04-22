const express = require('express');
const triprouter = express.Router();
const tripController = require('../controllers/tripController');

// POST /api/trips - Tạo yêu cầu chuyến đi mới
triprouter.post('/', tripController.createTrip);

// DELETE /api/trips/:tripId - Hủy chuyến đi
triprouter.delete('/:tripId', tripController.cancelTrip);

// GET /api/trips - Lấy danh sách các chuyến đi của người dùng
triprouter.get('/', tripController.getAllTrips);

// GET /api/trips/:tripId/status - Lấy trạng thái của một chuyến đi
triprouter.get('/:tripId/status', tripController.getTripStatus);

// PUT /api/trips/:tripId/location - Cập nhật vị trí hiện tại của hành khách
triprouter.put('/:tripId/location', tripController.updateLocation);

module.exports = triprouter;
