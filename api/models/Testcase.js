const mongoose  = require("mongoose");

const TCSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    probID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem',
        required: true,
    },
    input:{
        type: String,
        required: true
    },
    output:{
        type: String,
        required: true
    }
},
{timestamps: true}
);
module.exports = mongoose.model("Testcase", TCSchema);