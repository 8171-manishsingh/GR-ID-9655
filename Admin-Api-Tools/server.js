const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/adminRoutes');
const managerRoutes = require('./routes/managerRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Admin API Tools v1.0.0',
    endpoints: {
      admin: '/api/admin/register, /api/admin/login',
      managers: '/api/managers/ (GET, POST, PUT, DELETE)'
    },
    status: 'running'
  });
});

// API Routes
app.use('/api/admin', adminRoutes);
app.use('/api/managers', managerRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 MongoDB: ${process.env.MONGODB_URI}`);
});

