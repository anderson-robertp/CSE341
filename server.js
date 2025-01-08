const express = require('express');
const homeRoute = require('./routes/homeRoute');

const app = express();
const PORT = 3000;

// Use the home route
app.use('/', homeRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
