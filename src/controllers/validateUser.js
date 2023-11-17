const studentModel = require( "../models/student");
const mentorModel = require( "../models/mentor");

const validateUser = async (req, res) => {
    const { loginEmail, loginPassword } = req.body;
    console.log("entered controller");
    try {
        const student = await studentModel.findOne({email : loginEmail, password : loginPassword});
        const mentor = await mentorModel.findOne({email : loginEmail, password : loginPassword});
        
        if(student){
            console.log("server: " + student);
            res.status(200).json({ ...student._doc, criteria : 'student'});
        } else if(mentor){
             // Sending the user back as a response
             res.status(200).json({ ...mentor._doc, criteria : 'mentor'});
        } else {
            // alert(new Error("User Not Found"));
            console.log("error: User Not Found");
            res.status(404).json({ error: "User Not Found" });
        }
    } catch(error) {
        // alert(new Error("Something went wrong!"));
        console.log("Something went wrong!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

module.exports = validateUser;