const mongoose  = require("mongoose");

const ProblemSchema = new mongoose.Schema({
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
    timelim:{
        type: Number,
        required: true
    },
    memlim:{
        type: Number,
        required: true
    }
},
{timestamps: true}
);
module.exports = mongoose.model("Problem", ProblemSchema);