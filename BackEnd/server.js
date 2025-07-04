require('dotenv').config(); // This must be at the VERY TOP
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('D:/Traffic Challan System/BackEnd/Config/db');
const challanRoutes = require('D:/Traffic Challan System/BackEnd/Routes/challanRoutes');
const authRoutes = require('D:/Traffic Challan System/BackEnd/Routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/challans', challanRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

// Only start server after MongoDB connection is established
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});