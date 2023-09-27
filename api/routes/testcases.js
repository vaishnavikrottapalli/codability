const router = require("express").Router();
const Testcase = require("../models/Testcase");
const User = require("../models/User");

//add new TC
router.post("/", async(req,res)=>{
    const newtc = new Testcase(req.body);
    try{
        const savedTC = await newtc.save();
        res.status(200).json(savedTC);
    }catch(err){
        res.status(500).json(err);
    }
});


//Get Submission

router.get("/:id",async(req,res)=>{
    try {
        const tc = await Testcase.findById(req.params.id);
        res.status(200).json(tc); 
    } catch (err) {
        res.status(404).json("submission not found")
    } 
} )

module.exports = router