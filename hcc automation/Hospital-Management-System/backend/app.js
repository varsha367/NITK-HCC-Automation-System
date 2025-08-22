const express = require('express');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Import DB and models
const db = require('./db/db');
require('./models/userModel');
require('./models/appointmentModel');
require('./models/medicalHistoryModel');


// Routes
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const doctorRoutes = require('./routes/doctorRoutes');

// Middleware
app.use(express.json());
app.use(cors());

// Session Middleware
app.use(session({
  secret: 'jumping', // Replace with a secure value in production
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/doctor', doctorRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('✅ Hospital Management System Backend (SQLite) is running');
});

// Sync database and start server
db.sync()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Unable to connect to the database:', err);
  });
