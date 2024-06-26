// server.js (or index.js)

const express = require('express');
const cors = require('cors');
const { mongoConnect } = require('./util/database'); // Import mongoConnect function
require('dotenv').config();
const app = express();
const port = process.env.PORT || 1337;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS
app.use(cors());

// Routes
const phoneRoutes = require('./routes/phoneRoutes');
const itemRoutes = require('./routes/itemRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
app.use('/api', phoneRoutes);
app.use('/api', itemRoutes); // Mount itemRoutes under /api
app.use('/api', categoryRoutes);

// MongoDB connection
mongoConnect(() => {
    // Start the server
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
