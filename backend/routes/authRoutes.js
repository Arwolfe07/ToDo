const express = require('express');
const { login, signup, updateLocation } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.patch('/location', protect, updateLocation);

module.exports = router;