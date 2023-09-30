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