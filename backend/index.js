const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

// Create Express server
const app = express();

// Use CORS middleware
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',    // replace with your MySQL host
    user: 'root',         // replace with your MySQL username
    password: 'password', // replace with your MySQL password
    database: 'your_database_name' // replace with your MySQL database name
});

// Connect to the MySQL server
db.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the database');
});

// Define a route to get all courses
app.get('/courses', function(req, res) {
    db.query('SELECT * FROM courses', function(err, results) {
        if (err) throw err;
        res.json(results);
    });
});

// Start the server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
