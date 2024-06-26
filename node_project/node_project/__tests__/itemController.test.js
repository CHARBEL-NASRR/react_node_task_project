const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { getDb } = require('../util/database');
const itemController = require('../controllers/itemController');

jest.mock('axios');
jest.mock('../util/database');

const app = express();
app.use(bodyParser.json());

// Mock route for testing createItem
app.post('/api/items', itemController.createItem);

describe('Item Controller - createItem', () => {
    test('It should create an item and return 201 status code', async () => {
        // Mock the axios call to return a successful validation
        axios.get.mockResolvedValue({ data: { valid: true } });

        // Mock the database insertOne operation
        const mockInsertOne = jest.fn().mockResolvedValue({ insertedId: 'mockId' });
        getDb.mockReturnValue({
            collection: () => ({ insertOne: mockInsertOne })
        });

        const newItem = {
            name: 'Test Item',
            description: 'This is a test item',
            mobileNumber: '1234567890'
        };

        const response = await request(app)
            .post('/api/items')
            .send(newItem);

        // Adjust the expected object to include the _id property
        const expectedItemWithId = { ...newItem, _id: 'mockId' };


        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('message', 'Item created successfully');
        expect(response.body.item).toHaveProperty('_id', 'mockId');
        // Use the adjusted object in the expectation
        expect(mockInsertOne).toHaveBeenCalledWith(expectedItemWithId);
    });


    // Add more tests as needed for error cases, invalid input, etc.
});
