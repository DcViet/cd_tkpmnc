// VipCustomer.js
const VipBooking = require('./VipBooking');

class VipCustomer extends Customer {
    getBooking() {
        return new VipBooking();
    }
}

module.exports = VipCustomer;
