const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getAllManagers,
  insertManager,
  deleteManager,
  updateManager,
  searchManagers,
  getManagersWithPagination,
  deleteMultipleManagers,
} = require("../controllers/managerController");

router.get("/", protect, getAllManagers);


router.post("/", protect, insertManager);


router.delete("/:id", protect, deleteManager);

router.put("/:id", protect, updateManager);

router.get("/search", protect, searchManagers);

router.get("/pagination", protect, getManagersWithPagination);

// @route   POST /api/manager/delete-multiple
// @desc    Delete multiple managers (Step 9)
// @access  Private
router.post("/delete-multiple", protect, deleteMultipleManagers);

module.exports = router;
