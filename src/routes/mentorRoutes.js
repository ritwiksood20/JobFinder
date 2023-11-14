const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

console.log("entered router");
router.get('/mentors', mentorController.getAllMentors);
router.post('/addMentor', mentorController.postMentor);
router.get('/getMentor/:emailId', mentorController.getMentor);

module.exports = router;