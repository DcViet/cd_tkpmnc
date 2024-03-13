// Booking.js
class Booking {
    constructor(builder) {
        this.phoneNumber = builder.phoneNumber;
        this.address = builder.address;
        this.gpsCoordinates = builder.gpsCoordinates;
        this.bookingTime = builder.bookingTime || Date.now();
    }
}

// Sử dụng Builder Pattern
const booking = new BookingBuilder("123456789", "123 Main St", "40.7128° N, 74.0060° W")
    .setBookingTime(Date.now())
    .build();
