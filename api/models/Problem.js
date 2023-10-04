const mongoose  = require("mongoose");

const ProblemSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    userID:{
        type: mongoose.Types.ObjectId,
        required: true,
    },
    title:{
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type: String,
        required: true
    },
    tags:{
        type: Array,
        required: false
    },
    difficulty:{
        type: String,
        required: true
    },
    input:{
        type: Array,
        required: true
    },
    output:{
        type: Array,
        required: true
    }
},
{timestamps: true}
);
module.exports = mongoose.model("Problem", ProblemSchema);