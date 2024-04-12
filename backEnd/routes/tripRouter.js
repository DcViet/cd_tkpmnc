const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

// POST /api/trips - Tạo yêu cầu chuyến đi mới
router.post('/', tripController.createTrip);

// DELETE /api/trips/:tripId - Hủy chuyến đi
router.delete('/:tripId', tripController.cancelTrip);

// GET /api/trips - Lấy danh sách các chuyến đi của người dùng
router.get('/', tripController.getAllTrips);

// GET /api/trips/:tripId/status - Lấy trạng thái của một chuyến đi
router.get('/:tripId/status', tripController.getTripStatus);

// PUT /api/trips/:tripId/location - Cập nhật vị trí hiện tại của hành khách
router.put('/:tripId/location', tripController.updateLocation);

module.exports = router;
