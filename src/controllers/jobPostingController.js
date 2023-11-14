const jobPostingModel = require('../models/jobPostings')

const getAllJobPostings = async (req, res) => {
    try {
        const jobs = await jobPostingModel.find();
        // console.log(students);
        res.status(200).json(jobs);
    } catch(error) {
        console.log("Something went wrong!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

const postJobPosting = async (req, res) => {
    const job = new jobPostingModel(req.body);
    try {
        await job.save();
        res.status(201).json(job);

    } catch(error) {
        console.log("Error posting data!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

module.exports = { getAllJobPostings, postJobPosting }