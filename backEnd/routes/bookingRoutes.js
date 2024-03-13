// const express = require('express');
// const router = express.Router();
// const BookingController = require('../controllers/BookingController');

// // Define routes for bookings
// router.post('/bookings', BookingController.createBooking);
// router.get('/bookings/:id', BookingController.getBooking);
// router.put('/bookings/:id', BookingController.updateBooking);
// router.delete('/bookings/:id', BookingController.cancelBooking);

// module.exports = router;

// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/BookingController');

router.post('/bookings', BookingController.createBooking);

module.exports = router;
