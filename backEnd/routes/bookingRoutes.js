// routes/bookingRoutes.js

const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/BookingController');

// Định nghĩa endpoint API để lấy dữ liệu mẫu của đặt xe
router.get('/bookinginfo', BookingController.getSampleBooking);

router.get('/', BookingController.get )


module.exports = router;
