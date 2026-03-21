const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const validator = require('validator');

// Register Admin
const registerAdmin = [
  // Validation middleware
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('confirm_password').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match');
    }
    return true;
  }),
  
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Check if email already exists
      const existingEmail = await Admin.findOne({ email: req.body.email });
      if (existingEmail) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      const admin = new Admin({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
        status: req.body.status !== undefined ? req.body.status : true
      });

      await admin.save();

      // Generate JWT Token
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

      res.status(201).json({
        message: 'Admin registered successfully',
        token,
        admin: {
          id: admin._id,
          username: admin.username,
          email: admin.email,
          status: admin.status
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
];

// Login Admin
const loginAdmin = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
  
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });

      if (!admin || !(await admin.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      if (!admin.status) {
        return res.status(403).json({ message: 'Account is deactivated' });
      }

      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

      res.json({
        message: 'Login successful',
        token,
        admin: {
          id: admin._id,
          username: admin.username,
          email: admin.email,
          status: admin.status
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
];

module.exports = { registerAdmin, loginAdmin };

