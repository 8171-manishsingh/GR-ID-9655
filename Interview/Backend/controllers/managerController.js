const Manager = require("../models/Manager");

// @desc    Get all managers with pagination
// @route   GET /api/manager
// @access  Private (Admin Token Required)
const getAllManagers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Manager.countDocuments();
    const managers = await Manager.find().skip(skip).limit(limit);

    res.status(200).json({
      managers,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Insert new manager
// @route   POST /api/manager
// @access  Private (Admin Token Required)
const insertManager = async (req, res) => {
  try {
    const { name, email, salary, designation, status } = req.body;

    // Validate input
    if (!name || !email || !salary || !designation) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    // Check if manager already exists
    const managerExists = await Manager.findOne({ email });
    if (managerExists) {
      return res.status(400).json({ message: "Manager already exists with this email" });
    }

    const manager = await Manager.create({
      name,
      email,
      phone: req.body.phone || "",
      salary,
      designation,
      status: status !== undefined ? status : true,
      created_date: new Date().toISOString(),
      updated_date: new Date().toISOString(),
    });

    res.status(201).json(manager);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete manager
// @route   DELETE /api/manager/:id
// @access  Private (Admin Token Required)
const deleteManager = async (req, res) => {
  try {
    const manager = await Manager.findById(req.params.id);

    if (!manager) {
      return res.status(404).json({ message: "Manager not found" });
    }

    await Manager.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Manager deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update manager
// @route   PUT /api/manager/:id
// @access  Private (Admin Token Required)
const updateManager = async (req, res) => {
  try {
    const { name, email, phone, salary, designation, status } = req.body;

    const manager = await Manager.findById(req.params.id);

    if (!manager) {
      return res.status(404).json({ message: "Manager not found" });
    }

    // Check if email is being changed and if it already exists
    if (email && email !== manager.email) {
      const emailExists = await Manager.findOne({ email });
      if (emailExists) {
        return res.status(400).json({ message: "Email already in use" });
      }
    }

    manager.name = name || manager.name;
    manager.email = email || manager.email;
    manager.phone = phone || manager.phone;
    manager.salary = salary || manager.salary;
    manager.designation = designation || manager.designation;
    manager.status = status !== undefined ? status : manager.status;
    manager.updated_date = new Date().toISOString();

    const updatedManager = await manager.save();

    res.status(200).json(updatedManager);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Search managers by name, email or phone
// @route   GET /api/manager/search
// @access  Private (Admin Token Required)
const searchManagers = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ message: "Please provide search query" });
    }

    const searchQuery = {
      $or: [
        { name: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } },
        { phone: { $regex: q, $options: "i" } },
      ],
    };

    const managers = await Manager.find(searchQuery);

    res.status(200).json(managers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Pagination API
// @route   GET /api/manager/pagination
// @access  Private (Admin Token Required)
const getManagersWithPagination = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (page < 1 || limit < 1) {
      return res.status(400).json({ message: "Page and limit must be positive numbers" });
    }

    const skip = (page - 1) * limit;
    const total = await Manager.countDocuments();
    const managers = await Manager.find().skip(skip).limit(limit);

    res.status(200).json({
      managers,
      total,
      page,
      limit,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete multiple managers
// @route   POST /api/manager/delete-multiple
// @access  Private (Admin Token Required)
const deleteMultipleManagers = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: "Please provide array of manager IDs" });
    }

    const result = await Manager.deleteMany({ _id: { $in: ids } });

    res.status(200).json({
      message: `${result.deletedCount} managers deleted successfully`,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllManagers,
  insertManager,
  deleteManager,
  updateManager,
  searchManagers,
  getManagersWithPagination,
  deleteMultipleManagers,
};
