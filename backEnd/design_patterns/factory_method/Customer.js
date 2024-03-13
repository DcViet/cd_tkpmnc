// Customer.js
class Customer {
    constructor() {
        this.booking = this.getBooking();
    }

    getBooking() {
        throw new Error("This method must be overridden.");
    }
}

module.exports = Customer;
