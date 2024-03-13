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