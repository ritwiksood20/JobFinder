const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/students', studentController.getAllStudents);
router.post('/addStudent', studentController.postStudent);
router.get('/getStudent/:emailId', studentController.getStudent);

module.exports = router;