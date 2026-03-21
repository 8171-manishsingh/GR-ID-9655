const express = require('express');
const { 
  createManager, 
  getManagers, 
  getManagerById, 
  updateManager, 
  deleteManager, 
  deleteMultipleManagers 
} = require('../controllers/managerController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// All routes protected by auth middleware
router.use(authMiddleware);

// POST /api/managers - Create new manager (Step 3)
router.post('/', createManager);

// GET /api/managers - Get all with pagination & search (Steps 4,7,8)
router.get('/', getManagers);

// GET /api/managers/:id - Get single manager
router.get('/:id', getManagerById);

// PUT /api/managers/:id - Update manager (Step 6)
router.put('/:id', updateManager);

// DELETE /api/managers/:id - Delete single manager (Step 5)
router.delete('/:id', deleteManager);

// DELETE /api/managers/multiple - Delete multiple (Step 9)
router.delete('/multiple', deleteMultipleManagers);

module.exports = router;

