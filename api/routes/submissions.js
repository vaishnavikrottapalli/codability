const router = require("express").Router();
const Submission = require("../models/Submission");
const User = require("../models/User");
const {generateFile} = require('../generateFile')
const {executeCpp} = require('../executeCpp')
const {executePy} = require('../executePy')

router.post("/", async(req,res) =>{
    const {language = 'cpp', code, input} = req.body;
    // console.log(req.body);
    if (!code){
        return res.status(400).json({success: false, error: "empty code body."});
    }
    let newSubmission;
    try{
        const filePath = await generateFile(language, code);
        newSubmission = await new Submission({
            language, 
            filepath: filePath.toString(), 
            title:"sum of 2 nums",
            userID:"6516696c11c25b7b6780a67e", 
            username:"uma"}
        ).save();
        // console.log(newSubmission);
        const submissionId = newSubmission["_id"];
        // res.status(201).json({success: true, submissionId});

        let output;
        newSubmission["startedAt"] = new Date();
        if(language === "cpp"){
            output = await executeCpp(filePath, input);
        } else if(language === "py"){
            output = await executePy(filePath, input);
        }
        newSubmission["completedAt"] = new Date();
        newSubmission["status"] = "success";
        newSubmission["output"] = output; 
        res.status(201).json({success: true, submissionId, output});       
        await newSubmission.save();

        console.log(newSubmission, "execution time is: ",newSubmission["completedAt"] - newSubmission["startedAt"]);
        // return res.json({filePath, output});
    } catch(err){
        newSubmission["completedAt"] = new Date();
        newSubmission["status"] = "error";
        newSubmission["output"] = JSON.stringify(err);
        console.error(newSubmission);
        res.status(500).json({err});
    }
});

//Get Submission

router.get("/status/",async(req,res)=>{
    const submissionId = req.query.id;
    if(submissionId == undefined){
        return res.status(400).json({success:false, error:'missing query ID param'})
    }
    try{
        const submission = await Submission.findById(submissionId);
        if(submissionId === undefined){
            return res.status(404).json({success:false, error:'couldnt find job'})
        }
        return res.status(200).json({success: true, submission});
    }
    catch(error){
        return res.status(400).json({success:false, error:JSON.stringify(error)});
    }
    //return res.status(400).json({success:false, error:JSON.stringify(error)})
});

module.exports = router