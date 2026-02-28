const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "secretkey", {
    expiresIn: "30d",
  });
};


const registerAdmin = async (req, res) => {
  try {
    const { username, email, password, confirm_password } = req.body;

    // Validate input
    if (!username || !email || !password || !confirm_password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    // Check if passwords match
    if (password !== confirm_password) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if admin already exists
    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists with this email" });
    }

    // Create admin
    const admin = await Admin.create({
      username,
      email,
      password,
      status: true,
      created_date: new Date().toISOString(),
      updated_date: new Date().toISOString(),
    });

    if (admin) {
      res.status(201).json({
        _id: admin._id,
        username: admin.username,
        email: admin.email,
        status: admin.status,
        created_date: admin.created_date,
        token: generateToken(admin._id),
      });
    } else {
      res.status(400).json({ message: "Invalid admin data" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Authenticate admin & get token
// @route   POST /api/admin/login
// @access  Public
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    // Check for admin
    const admin = await Admin.findOne({ email });

    if (admin && (await admin.matchPassword(password))) {
      if (!admin.status) {
        return res.status(401).json({ message: "Admin account is inactive" });
      }

      res.json({
        _id: admin._id,
        username: admin.username,
        email: admin.email,
        status: admin.status,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerAdmin, loginAdmin };
