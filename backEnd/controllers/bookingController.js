// controllers/bookingController.js
import { BookingBuilder, Director } from '../design_patterns/builder/BookingBuilder';

// Hàm xử lý yêu cầu đặt xe
function bookRide(req, res) {
  try {
    // Dữ liệu mẫu
    const sampleData = {
      phoneNumber: "+84 9 6969 0100",
      address: "123 Main Street, City, Country",
      gpsCoordinates: "40.7128° N, 74.0060° W",
      bookingType: "scheduled",
      bookingTime: Date.now() + (60 * 60 * 1000) // Đặt xe hẹn giờ trong 1 giờ từ bây giờ
    };

    // Khởi tạo một BookingBuilder với thông tin cơ bản
    // const bookingBuilder = new BookingBuilder(req.body.phoneNumber, req.body.address, req.body.gpsCoordinates);

    const bookingBuilder = new BookingBuilder(sampleData.phoneNumber, sampleData.address, sampleData.gpsCoordinates);

    // Khởi tạo một Director để tạo ra đối tượng Booking từ BookingBuilder
    const director = new Director(bookingBuilder);

    // Kiểm tra loại đặt xe (hẹn giờ hoặc ngay)
    if (req.body.bookingType === 'scheduled') {
      // Nếu là đặt xe hẹn giờ, sử dụng Director để đặt lịch hẹn
      // director.bookScheduledRide(req.body.bookingTime);
      director.bookScheduledRide(sampleData.bookingTime);

    } else {
      // Nếu là đặt xe ngay, sử dụng Director để đặt xe ngay lập tức
      director.bookImmediateRide();
    }

    // Xây dựng và nhận đối tượng Booking cuối cùng
    const booking = director.buildBooking();

    // Xác nhận đặt xe
    booking.confirmBooking();

    // Trả về kết quả cho client
    res.status(200).json({ message: 'Booking confirmed successfully', booking });
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Error booking ride:', error);
    res.status(500).json({ error: 'An error occurred while booking the ride' });
  }
}

module.exports = {
  bookRide
};

// (Khi bạn gửi yêu cầu đến endpoint được xử lý bởi bookRide, nó sẽ sử dụng dữ liệu từ tệp sampleData.json để tạo và xác nhận một đặt xe mới và trả về kết quả cho client.)