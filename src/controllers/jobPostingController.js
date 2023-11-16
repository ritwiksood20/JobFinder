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

const getJobPosting = async (req, res) => {
    const search_str = req.params.title;
    console.log("search_str: " + req.params.title);
    try {
        const jobs = await jobPostingModel.find({ "title": { $regex: new RegExp(search_str, 'i') } });
        if(jobs) {
            console.log("Jobs Fetched successfully" + jobs);
            res.status(200).send(jobs);
        } else {
            console.log("No jobs found!!!");
            alert("No Jobs Found!!!");
        }
    } catch(error) {
        console.log("Something went wrong!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

module.exports = { getAllJobPostings, postJobPosting, getJobPosting }