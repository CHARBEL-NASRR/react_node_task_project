const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/categoryController');

router.get('/category', categoryController.getCategories);
router.post('/category', categoryController.createCategory);

module.exports = router;