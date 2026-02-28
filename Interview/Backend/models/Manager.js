const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
  },
  phone: {
    type: String,
    required: false,
  },
  salary: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  created_date: {
    type: String,
    default: new Date().toISOString(),
  },
  updated_date: {
    type: String,
    default: new Date().toISOString(),
  },
});

module.exports = mongoose.model("Manager", managerSchema);
