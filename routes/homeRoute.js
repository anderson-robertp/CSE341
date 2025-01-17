const express = require('express');
const { nameCont } = require('../controllers/nameController.js');

const router = express.Router();

// Define the home route
router.get('/', nameCont);

module.exports = router;