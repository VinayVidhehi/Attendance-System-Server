const mongoose = require('mongoose');

// Schema for student login details
const newStudentQuery = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    query: {
        type:String,
        required:true
    }
});

const studentQuery = mongoose.model('StudentQuery', newStudentQuery);

module.exports = studentQuery;
