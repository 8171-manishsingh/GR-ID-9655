const Manager = require('../models/Manager');
const { body, validationResult, query } = require('express-validator');

// Create Manager (Step 3)
const createManager = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('salary').notEmpty().withMessage('Salary is required'),
  body('designation').notEmpty().withMessage('Designation is required'),
  
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const manager = new Manager({
        ...req.body,
        updated_date: new Date().toISOString()
      });

      await manager.save();
      res.status(201).json({ message: 'Manager created successfully', data: manager });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
];

// Get all managers with pagination and search (Steps 4,7,8)
const getManagers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';

    const searchQuery = search ? {
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ]
    } : {};

    const managers = await Manager.find(searchQuery)
      .sort({ created_date: -1 })
      .limit(limit)
      .skip((page - 1) * limit);

    const total = await Manager.countDocuments(searchQuery);

    res.json({
      data: managers,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single manager by ID
const getManagerById = async (req, res) => {
  try {
    const manager = await Manager.findById(req.params.id);
    if (!manager) {
      return res.status(404).json({ message: 'Manager not found' });
    }
    res.json(manager);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update manager (Step 6)
const updateManager = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updates = { ...req.body, updated_date: new Date().toISOString() };
    const manager = await Manager.findByIdAndUpdate(
      req.params.id, 
      updates, 
      { new: true, runValidators: true }
    );

    if (!manager) {
      return res.status(404).json({ message: 'Manager not found' });
    }

    res.json({ message: 'Manager updated successfully', data: manager });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete single manager (Step 5)
const deleteManager = async (req, res) => {
  try {
    const manager = await Manager.findByIdAndDelete(req.params.id);
    if (!manager) {
      return res.status(404).json({ message: 'Manager not found' });
    }
    res.json({ message: 'Manager deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete multiple managers (Step 9)
const deleteMultipleManagers = async (req, res) => {
  try {
    const { ids } = req.body; // Expect array of IDs
    
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'IDs array is required' });
    }

    const deleted = await Manager.deleteMany({ _id: { $in: ids } });
    
    res.json({ 
      message: `${deleted.deletedCount} manager(s) deleted successfully`,
      deletedCount: deleted.deletedCount 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createManager,
  getManagers,
  getManagerById,
  updateManager,
  deleteManager,
  deleteMultipleManagers
};

