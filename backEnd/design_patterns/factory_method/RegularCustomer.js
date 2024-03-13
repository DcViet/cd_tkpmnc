// RegularCustomer.js
const RegularBooking = require('./RegularBooking');

class RegularCustomer extends Customer {
    getBooking() {
        return new RegularBooking();
    }
}

module.exports = RegularCustomer;
