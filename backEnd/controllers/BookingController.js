// const { Booking } = require('../models');

// const BookingController = {
//   createBooking: async (req, res) => {
//     try {
//       const booking = await Booking.create(req.body);
//       return res.status(201).json(booking);
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   },

//   getBooking: async (req, res) => {
//     try {
//       const booking = await Booking.findByPk(req.params.id);
//       if (!booking) {
//         return res.status(404).json({ error: 'Booking not found' });
//       }
//       return res.status(200).json(booking);
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   },

//   updateBooking: async (req, res) => {
//     try {
//       const booking = await Booking.findByPk(req.params.id);
//       if (!booking) {
//         return res.status(404).json({ error: 'Booking not found' });
//       }
//       await booking.update(req.body);
//       return res.status(200).json(booking);
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   },

//   cancelBooking: async (req, res) => {
//     try {
//       const booking = await Booking.findByPk(req.params.id);
//       if (!booking) {
//         return res.status(404).json({ error: 'Booking not found' });
//       }
//       await booking.destroy();
//       return res.status(204).end();
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   }
// };

// module.exports = BookingController;

// controllers/BookingController.js
const Booking = require('../models/Booking');
const Customer = require('../models/Customer');

class BookingController {
    static createBooking(req, res) {
        try {
            const { customerType, bookingInfo } = req.body;
            const customer = new Customer(customerType);
            const booking = new Booking(customer, bookingInfo);
            booking.confirm();
            res.status(201).json({ message: "Booking confirmed" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = BookingController;
