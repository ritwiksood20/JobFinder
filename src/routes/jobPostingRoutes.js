const express = require('express');
const router = express.Router();
const jobPostingController = require('../controllers/jobPostingController');

router.get('/jobPostings', jobPostingController.getAllJobPostings);
router.post('/addJobPosting', jobPostingController.postJobPosting);
router.get('/findJobPosting/:title', jobPostingController.getJobPosting);

module.exports = router;