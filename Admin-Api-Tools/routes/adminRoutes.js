const express = require('express');
const { body } = require('express-validator');
const { registerAdmin, loginAdmin } = require('../controllers/adminController');

const router = express.Router();

// POST /api/admin/register - Register new admin
router.post('/register', registerAdmin);

// POST /api/admin/login - Admin login
router.post('/login', loginAdmin);

module.exports = router;

