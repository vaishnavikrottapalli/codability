const router = require("express").Router();
const Submission = require("../models/Submission");
const User = require("../models/User");

//add new submission
router.post("/", async(req,res)=>{
    const newSubmission = new Submission(req.body);
    try{
        const savedSubmission = await newSubmission.save();
        res.status(200).json(savedSubmission);
    }catch(err){
        res.status(500).json(err);
    }
});


//Get Submission

router.get("/:id",async(req,res)=>{
    try {
        const submission = await Submission.findById(req.params.id);
        res.status(200).json(submission); 
    } catch (err) {
        res.status(404).json("submission not found")
    } 
} )

module.exports = router