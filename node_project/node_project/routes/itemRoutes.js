// routes/itemRoutes.js

const express = require('express');
const router = express.Router();
const itemController = require('../Controllers/itemController');

// Create a new item
router.post('/items', itemController.createItem);

// Update an item by ID
router.put('/items/:id', itemController.updateItem);

// Delete an item by ID
router.delete('/items/:id', itemController.deleteItem);

// Get all items
router.get('/items', itemController.getAllItems);

module.exports = router;
