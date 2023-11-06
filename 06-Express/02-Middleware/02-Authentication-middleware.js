import express from 'express';
const app = express();

// Array of users (for demonstration purposes, replace with a database)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
];

// Middleware for authentication
function authenticate(req, res, next) {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        // If authentication is successful, store the user information in the request and proceed to the next middleware
        req.user = user;
        next();
    } else {
        // If authentication fails, return a 401 Unauthorized response
        res.status(401).json({ message: 'Unauthorized' });
    }
}

// Parse JSON request bodies
app.use(express.json());

// Use the authentication middleware for protected routes
app.use('/protected', authenticate);

// Example protected route
app.get('/protected', (req, res) => {
    res.json({ message: 'This is a protected endpoint', user: req.user });
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the authentication example');
});

app.listen(3000, () => {
    console.log('Server is running on port http://localport:3000');
});
