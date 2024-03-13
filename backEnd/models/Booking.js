// models/Booking.js
class Booking {
    constructor(customer, bookingInfo) {
        this.customer = customer;
        this.bookingInfo = bookingInfo;
    }

    confirm() {
        return this.customer.getBooking().confirm();
    }
}

module.exports = Booking;
