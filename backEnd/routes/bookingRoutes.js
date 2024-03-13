// routes/bookingRoutes.js

const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/BookingController');

// Định nghĩa endpoint API để lấy dữ liệu mẫu của đặt xe
router.get('/sample', BookingController.getSampleBooking);

module.exports = router;
