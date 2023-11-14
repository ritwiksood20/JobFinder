const mentorModel = require('../models/mentor')

const getAllMentors = async (req, res) => {
    try {
        const mentors = await mentorModel.find();
        // console.log(mentors);
        res.status(200).json(mentors);
    } catch(error) {
        console.log("Something went wrong!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

const postMentor = async (req, res) => {
    const mentor = new mentorModel(req.body);
    console.log("entered post mentor");
    try {
        await mentor.save();
        res.status(201).json(mentor);

    } catch(error) {
        console.log("Error posting data!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

const getMentor = async (req,res) => {
    const emailId = req.params.emailId;
    try {
        const user = await mentorModel.findOne({email : emailId});
        res.status(200).json(user);
    } catch(error) {
        console.log("mentor Not found!" + error);
        res.status(500).json({ error: "mentor not found!" });
    }
}

module.exports = { getAllMentors, postMentor, getMentor };