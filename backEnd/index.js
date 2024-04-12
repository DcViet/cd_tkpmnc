// index.js

const express = require('express');
const app = express();
const bookingRoutes = require('./routes/bookingRouter');
const tripRoutes = require('./routes/tripRouter');

// Sử dụng route cho các yêu cầu tới /api/bookings
app.use('/api', bookingRoutes);

// Sử dụng router cho endpoint /api/trips
app.use('/api/trips', tripRoutes);

// Thêm middleware để xử lý lỗi 404
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

// Middleware để xử lý dữ liệu JSON
app.use(express.json());

// Khởi động máy chủ
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
