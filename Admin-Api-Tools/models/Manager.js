const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    unique: true
  },
  salary: {
    type: String,
    required: [true, 'Salary is required']
  },
  designation: {
    type: String,
    required: [true, 'Designation is required'],
    trim: true
  },
  status: {
    type: Boolean,
    default: true
  },
  created_date: {
    type: String,
    default: () => new Date().toISOString()
  },
  updated_date: {
    type: String,
    default: () => new Date().toISOString()
  }
});

module.exports = mongoose.model('Manager', managerSchema);

