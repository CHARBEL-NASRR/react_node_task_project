// controllers/phoneController.js

const axios = require('axios');
require('dotenv').config();

// Validate phone number
exports.validatePhoneNumber = async (req, res) => {
    const { mobileNumber } = req.body;

    if (!mobileNumber) {
        return res.status(400).json({ error: 'Mobile number is required' });
    }

    try {
        const apiKey = process.env.NUMVERIFY_API_KEY;
        const apiUrl = `http://apilayer.net/api/validate?access_key=${apiKey}&number=${mobileNumber}`;

        console.log('API URL:', apiUrl); // Debugging: Check if the API URL is correct

        const response = await axios.get(apiUrl);
        const { valid, country_code, country_name, carrier } = response.data;

        if (!valid) {
            return res.status(400).json({ error: 'Invalid mobile number' });
        }

        res.json({
            countryCode: country_code,
            countryName: country_name,
            operatorName: carrier,
        });
    } catch (error) {
        console.error('Error during phone validation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
