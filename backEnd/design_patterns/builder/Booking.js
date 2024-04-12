// Booking.js
class Booking {
    constructor(builder) {
        this.phoneNumber = builder.phoneNumber;
        this.address = builder.address;
        this.gpsCoordinates = builder.gpsCoordinates;
        this.bookingTime = builder.bookingTime || Date.now();
    }

    confirmBooking() {
        // Phương thức này có thể được triển khai để gửi yêu cầu đặt xe đến hệ thống
        console.log("Đặt xe thành công!");
    }
}

// BookingBuilder.js
class BookingBuilder {
    constructor(phoneNumber, address, gpsCoordinates) {
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.gpsCoordinates = gpsCoordinates;
    }

    setBookingTime(bookingTime) {
        this.bookingTime = bookingTime;
        return this;
    }

    build() {
        return new Booking(this);
    }
}

// Director.js
class Director {
    constructor(builder) {
        this.builder = builder;
    }

    bookScheduledRide(bookingTime) {
        this.builder.setBookingTime(bookingTime);
    }

    bookImmediateRide() {
        this.builder.setBookingTime(Date.now());
    }

    buildBooking() {
        return this.builder.build();
    }
}

// Sử dụng Director
const bookingBuilder = new BookingBuilder("123456789", "123 Main St", "40.7128° N, 74.0060° W");
const director = new Director(bookingBuilder);

// Đặt xe hẹn giờ
director.bookScheduledRide(Date.now() + (60 * 60 * 1000)); // Đặt xe hẹn giờ trong 1 giờ từ bây giờ

// Đặt xe ngay
director.bookImmediateRide();

// Xây dựng và nhận đối tượng Booking cuối cùng
const booking = director.buildBooking();
booking.confirmBooking();
