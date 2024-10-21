// Import the necessary modules
const express = require('express');
const cors = require('cors'); // Optional: for handling CORS
const app = express();
const PORT = process.env.PORT || 5001; // Use PORT from environment or default to 5000

// Middleware
app.use(cors()); // Enable CORS (optional)
app.use(express.json()); // Parse JSON bodies

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Portfolio API!');
});

// Example API endpoint
app.get('/api/data', (req, res) => {
    res.json({
        message: 'This is some sample data from the server!',
        data: [1, 2, 3, 4, 5],
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
