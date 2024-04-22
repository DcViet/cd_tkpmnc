const express = require('express');
const driverrouter = express.Router();
const driverController = require('../controllers/driverController');

// GET /api/drivers/trip-requests - Lấy danh sách yêu cầu chuyến đi
driverrouter.get('/trip-requests', driverController.getTripRequests);

// POST /api/drivers/accept-trip/:tripId - Chấp nhận chuyến đi
driverrouter.post('/accept-trip/:tripId', driverController.acceptTrip);

// PUT /api/drivers/complete-trip/:tripId - Hoàn thành chuyến đi
driverrouter.put('/complete-trip/:tripId', driverController.completeTrip);

module.exports = driverrouter;
