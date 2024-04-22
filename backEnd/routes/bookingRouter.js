// routes/bookingRoutes.js

const express = require('express');
const bookingrouter = express.Router();
const bookingController= require('../controllers/bookingController');

// Định nghĩa endpoint API để lấy dữ liệu mẫu của đặt xe
bookingrouter.get('/bookinginfo', bookingController.getSampleBooking);

bookingrouter.get('/', bookingController.get )


module.exports = bookingrouter;
