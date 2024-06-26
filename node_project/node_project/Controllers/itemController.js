// Controlers/itemControler.js
const { ObjectId } = require('mongodb');
const { getDb } = require('../util/database');
const axios = require('axios');
require('dotenv').config();

// Create a new item
exports.createItem = async (req, res) => {
    const { name, description, mobileNumber } = req.body;
    const newItem = {
        name,
        description,
        mobileNumber
    };

    try {
        const validateUrl = 'http://apilayer.net/api/validate';
        const apiKey = process.env.NUMVERIFY_API_KEY;

        const response = await axios.get(validateUrl, {
            params: {
                access_key: apiKey,
                number: mobileNumber
            }
        });

        if (!response.data.valid) {
            return res.status(400).json({ error: 'Invalid mobile number' });
        }

        const db = getDb();
        const result = await db.collection('items').insertOne(newItem);

        newItem._id = result.insertedId;

        res.status(201).json({ message: 'Item created successfully', item: newItem });
    } catch (error) {
        console.error('Error creating item:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an item by ID
exports.updateItem = async (req, res) => {
    const itemId = req.params.id;
    const { name, description, mobileNumber } = req.body;

    try {
        const db = getDb(); // Get the database instance
        const result = await db.collection('items').updateOne(
            { _id: new ObjectId(itemId) }, // Filter by _id
            {
                $set: {
                    name: name,
                    description: description,
                    mobileNumber: mobileNumber
                }
            }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.json({ message: 'Item updated successfully' });
    } catch (error) {
        console.error('Error updating item:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete an item by ID
exports.deleteItem = async (req, res) => {
    const itemId = req.params.id;

    try {
        const db = getDb(); // Get the database instance
        const result = await db.collection('items').deleteOne({ _id: new ObjectId(itemId) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all items
// In controllers/itemController.js

exports.getAllItems = async (req, res) => {
    try {
        const db = getDb(); // Get the database instance
        const items = await db.collection('items').find().toArray(); // Query all items

        res.status(200).json({ items });
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ message: "An error occurred while fetching items." });
    }
};