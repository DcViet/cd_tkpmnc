// controllers/BookingController.js

const BookingController = {
    // Hàm để lấy dữ liệu mẫu của đặt xe
    getSampleBooking(req, res) {
      const sampleBooking = {
        id: 1,
        customerName: 'John Doe',
        pickupLocation: '123 Main St',
        dropoffLocation: '456 Elm St',
        pickupTime: new Date(),
        status: 'pending'
      };
      res.status(200).json(sampleBooking);
    }
  };
  
  module.exports = BookingController;
  