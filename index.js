// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// GET endpoint
app.get('/', (req, res) => {
    res.send('Hello World! Backend is running 🚀');
});

// POST endpoint
app.post('/data', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Data received successfully',
        yourData: body
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


hhh

devops repo   

