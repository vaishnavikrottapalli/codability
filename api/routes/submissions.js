const router = require("express").Router();
const Submission = require("../models/Submission");
const Problem = require("../models/Problem");
const User = require("../models/User");
const {generateFile} = require('../generateFile')
const {executeCpp} = require('../executeCpp')
const {executePy} = require('../executePy')

router.post("/", async(req,res) =>{
    const {uname, userId, probtitle, language = 'cpp', code, input} = req.body;
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
            title: probtitle.toString(),
            userID: userId, 
            username:uname
        }
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

//run test case-

router.post("/submit", async(req,res) =>{
    console.log("sumit request received : ", req.body)
    const {problemId: probId, language = 'cpp', code} = req.body;
    if (!code){
        return res.status(400).json({success: false, error: "empty code body."});
    }
    try{
        const filePath = await generateFile(language, code);
        let output, passCount = 0;
        const problem = await Problem.findById(req.body.problemId);
        console.log("problem is: ", problem,req.body.problemId)
        const expectedOutputs = problem.output;
        for (let i = 0; i < problem.input.length; i++) {
            const input = problem.input[i];      
            if (language === "cpp") {
              output = await executeCpp(filePath, input);
            } else if (language === "py") {
              output = await executePy(filePath, input);
            //   console.log("output is: ", output);
            }
            output = output.replace(/\r\n$/, '');
            // Compare the code's output with the expected output
            console.log("output is: ", JSON.stringify(output), " ",JSON.stringify(expectedOutputs[i]));
            passCount += JSON.stringify(output) === JSON.stringify(expectedOutputs[i]);
        }
        const allPass = passCount === problem.input.length;
        console.log(allPass)
        res.status(201).json({success: true, allPass});  

    } catch(err){

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