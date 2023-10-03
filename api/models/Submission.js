const mongoose  = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        validate: {
            validator: async function (value) {
              const user = await mongoose.model('User').findOne({ username: value });
              return !!user;
            },
            message: 'Invalid username. No user found with this name.',
          },
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title:{
        type: String,
        required: true,
        validate: {
            validator: async function (value) {
              const problem = await mongoose.model('Problem').findOne({ title: value });
              return !!problem;
            },
            message: 'Invalid title. No problem found with this title.',
        },
    },
    language:{
        type: String,
        required: true
    },
    filepath:{
        type: String,
        required: true
    },
    submittedAt:{
        type: Date,
        default: Date.now
    },
    startedAt:{
        type: Date
    },
    completedAt:{
        type: Date
    },
    output:{
        type: String
    },
    status:{
        type: String,
        default:"pending",
        enum: ["pending", "success", "error"]
        
    }
}
);
module.exports = mongoose.model("Submission", SubmissionSchema);