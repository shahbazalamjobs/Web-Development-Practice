const express = require('express');
const port = 3000;

// Create an instance of the Express application
const app = express();

// Middleware function to log incoming requests
app.use((req, res, next) => {
    console.log(`${new Date()} ${req.method} ${req.url}`);
    // Call the 'next' function to allow the request to proceed
    next();
});

// Handle GET requests to the root path ('/')
app.get('/', (req, res) => {
    // Send the response "Hello world" to the client
    res.send("Hello world");
});

// Handle GET requests to the '/about' path
app.get('/about', (req, res) => {
    res.send("About Us");
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`)
});

// This code creates a simple Express.js server with two routes ('/' and '/about') 
// and a middleware function that logs information about incoming requests. 
// The server listens on port 3000 and responds to requests accordingly.
