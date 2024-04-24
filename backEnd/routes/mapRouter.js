//mapRouter.js
const express = require('express');
const router = express.Router();
const mapController = require('../controllers/mapController');

// Định tuyến cho yêu cầu lấy bản đồ
router.get('/map', mapController.getMap);

// Định tuyến cho yêu cầu lấy vị trí dựa trên địa chỉ
router.get('/location', mapController.getLocation);

// Định tuyến cho yêu cầu lấy thời gian ước lượng di chuyển
router.get('/travel-eta', mapController.getTravelPathETA);

module.exports = router;
