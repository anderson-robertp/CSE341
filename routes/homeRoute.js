const express = require('express');
const { getName } = require('../controllers/nameController.js');

const router = express.Router();

// Define the home route
router.get('/', getName);

module.exports = router;
