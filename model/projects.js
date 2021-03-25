const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    rewardPercentage: {
        type: String,
    }
}, { timestamps: true });


module.exports = mongoose.model("projects", ProjectsSchema);