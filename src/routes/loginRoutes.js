const express = require('express');
const router = express.Router();
const validateUser = require('../controllers/validateUser');

console.log("entered router");
router.post('/validate', validateUser);

module.exports = router;