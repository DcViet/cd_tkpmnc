//tripRouter.js
const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

// Định tuyến cho yêu cầu lấy danh sách yêu cầu chuyến đi cho tài xế
router.get('/trip-requests', tripController.getTripRequests);

// Định tuyến cho yêu cầu chấp nhận một chuyến đi
router.post('/trips/:tripId/accept', tripController.acceptTrip);

// Định tuyến cho yêu cầu hoàn thành một chuyến đi
router.post('/trips/:tripId/complete', tripController.completeTrip);

module.exports = router;
