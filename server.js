const express = require('express');
const homeRoute = require('./routes/homeRoute');

const app = express();

// Use the home route
app.use('/', homeRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
