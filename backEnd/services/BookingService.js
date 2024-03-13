const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const bookingRoutes = require('./routes/BookingRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', bookingRoutes);

// Sync database models and start server
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to sync database:', err);
});
