const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

console.log("entered router");
router.get('/mentors', mentorController.getAllMentors); //to get the list of mentors from the db
router.post('/addMentor', mentorController.postMentor); //to add the mentor to the db
router.get('/getMentor/:emailId', mentorController.getMentor); //to get the mentor that matches name from the db

module.exports = router;