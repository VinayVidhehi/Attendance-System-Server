const mongoose = require('mongoose');

const studentPredictionErrorSchema = new mongoose.Schema({
  usn: { type: String, required: true }, // The actual USN of the student
  accuracy: { type: Number  }, // The incorrect USN it was mapped to
  tests: {type:Number, required: true} // The number of tests performed
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const StudentPredictionError = mongoose.model('StudentPredictionError', studentPredictionErrorSchema);

module.exports = StudentPredictionError;