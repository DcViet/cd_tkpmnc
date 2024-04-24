//userRouter.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Định tuyến cho yêu cầu yêu cầu chuyến đi mới
router.post('/trips/request', userController.requestTrip);

// Định tuyến cho yêu cầu đánh giá tài xế
router.post('/drivers/:driverId/rate', userController.rateDriver);

// Định tuyến cho yêu cầu lấy danh sách các chuyến đi của người dùng
router.get('/trips', userController.getAllTrips);

// Định tuyến cho yêu cầu hủy chuyến đi
router.post('/trips/:tripId/cancel', userController.cancelTrip);

// Định tuyến cho yêu cầu lấy trạng thái của chuyến đi
router.get('/trips/:tripId/status', userController.getTripStatus);

// Định tuyến cho yêu cầu cập nhật vị trí hiện tại của tài xế hoặc khách hàng
router.put('/location/update', userController.updateLocation);

module.exports = router;
