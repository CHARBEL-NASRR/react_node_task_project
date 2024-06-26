// __tests__/phoneController.test.js

const request = require('supertest');
const express = require('express');
const phoneRoutes = require('../routes/phoneRoutes');

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use('/api/phones', phoneRoutes); // Adjust the path as necessary

describe('Phone Controller Tests', () => {
    test('POST /api/phones/validate should validate a phone number', async () => {
        const response = await request(app)
            .post('/api/phones/validate') // Adjust the endpoint as necessary
            .send({ mobileNumber: '+96176735267' }); // Use a valid test number here

        // Adjusted expectations
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('countryCode'); // Ensure the response includes 'countryCode'

        // You can also add more specific assertions if needed, for example:
        expect(response.body.countryCode).toBe('LB'); // Assuming 'LB' is the expected countryCode
    });
});

