const mongoose  = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    },
    verdict:{
        type: String,
        required: true
    }
},
{timestamps: true}
);
module.exports = mongoose.model("Submission", SubmissionSchema);