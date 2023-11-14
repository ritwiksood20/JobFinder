const studentModel = require( "../models/student");

const getAllStudents = async (req, res) => {
    try {
        const students = await studentModel.find();
        // console.log(students);
        res.status(200).json(students);
    } catch(error) {
        console.log("Something went wrong!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

const postStudent = async (req, res) => {
    const student = new studentModel(req.body);
    try {
        await student.save();
        res.status(201).json(student);

    } catch(error) {
        console.log("Error posting data!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

const getStudent = async (req,res) => {
    const emailId = req.params.emailId;
    try {
        const user = await studentModel.findOne({email : emailId});
        res.status(200).json(user);
    } catch(error) {
        console.log("student Not found!" + error);
        res.status(500).json({ error: "student not found!" });
    }
}

module.exports = { getAllStudents, postStudent, getStudent };