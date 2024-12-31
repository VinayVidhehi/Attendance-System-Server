const mongoose = require('mongoose');

const predictionAttendanceStream = new mongoose.Schema({
  usn: { type: String, required: true }, // The actual USN of the student
  present: { type: Boolean, default:false  }, // The incorrect USN it was mapped to
  note: {type:String} // The number of tests performed
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const StreamPredictedAttendance = mongoose.model('StreamPredictedAttendance', predictionAttendanceStream);

module.exports = StreamPredictedAttendance;