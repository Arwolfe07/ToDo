const express = require('express');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const { login, signup, updateLocation, updatePic } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const upload = multer({ storage: storage })

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.patch('/location', protect, updateLocation);
router.patch('/pic', protect, upload.array('file', 1), updatePic);

module.exports = router;