
const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/index.html'));
});

app.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/create.html'));
});

app.get('/details', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/details.html'));
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
