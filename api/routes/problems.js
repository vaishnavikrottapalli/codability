const router = require("express").Router();
const User = require("../models/User");
const Problem = require("../models/Problem");
const Submission = require("../models/Submission");

//create/add problem
router.post("/", async(req,res)=>{
    const newProblem = new Problem(req.body);
    try{
        const savedProblem = await newProblem.save();
        res.status(200).json(savedProblem);
    }catch(err){
        res.status(500).json(err);
    }
    
});

//Delete

router.delete("/:id", async(req,res)=>{ 
    try {
        const problem = await Problem.findById(req.params.id);
        console.log(problem);
        console.log(req.body);
        const id = problem.userID.toString();
        console.log(id, req.body.userID);
        if(id === req.body.userID){
            try{
                await Submission.deleteMany({title: problem.title});
                await Problem.findByIdAndDelete(req.params.id);
                res.status(200).json("problem has been deleted");        
            } catch(err){
                res.status(500).json(err);
            } 
        } else{
            res.status(401).json("you can delete only your problem");
        }        
    }catch (err) {
        res.status(404).json("problem not found")
    } 
    
});

//Get problem

router.get("/:id",async(req,res)=>{
    try {
        const problem = await Problem.findById(req.params.id);
        res.status(200).json(problem); 
    } catch (err) {
        res.status(404).json("user not found")
    } 
} );

// get ALL Problems

router.get("/",async(req,res)=>{
    const cat = req.query.tag;
    const diffi = req.query.diff;
    try {
        let problems;
        if(diffi){
            problems = await Problem.find({difficulty: {$in: diffi}})
        } else if(cat){
            problems = await Problem.find({tags:{
                $in : [cat]
            }})
        }else{
            problems = await Problem.find();
        }
        res.status(200).json(problems); 
    } catch (err) {
        res.status(404).json("problems not found")
    } 
});

module.exports = router