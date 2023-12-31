const router = require("express").Router();
const Submission = require("../models/Submission");
const User = require("../models/User");
const bcrypt = require("bcrypt");
//Update
router.put("/:id", async(req,res)=>{
    if(req.body.userId === req.params.id){        
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            console.log(req.body);
            const updateUser = await User.findByIdAndUpdate(req.params.id, 
                {
                $set: req.body,
                },
                {new:true}
            );
        res.status(200).json(updateUser);
        
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("you can update only your account");
    }
    
});

//Delete

router.delete("/:id", async(req,res)=>{
    console.log(req.body.userId +" " + req.params.id)
    if(req.body.userId === req.params.id){  

        try {
            const user = await User.findById(req.params.id);        
            try{
                await Submission.deleteMany({userID: user._id});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("user has been deleted");        
            }catch(err){
                res.status(500).json(err);
            }
        }catch (err) {
            res.status(404).json("user not found")
        } 
    }else{
        res.status(401).json("you can delete only your account");
    }
    
});

//Get user

router.get("/:id",async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others); 
    } catch (err) {
        res.status(404).json("user not found")
    } 
} )

module.exports = router