const mongoose = require ('mongoose');
const projectSchema = mongoose.Schema (
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
