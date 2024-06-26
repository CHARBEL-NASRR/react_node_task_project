// routes/phoneRoutes.js

const express = require('express');
const router = express.Router();
const phoneController = require('../Controllers/phoneController');

// Route to validate phone number
router.post('/validate', phoneController.validatePhoneNumber);

module.exports = router;
