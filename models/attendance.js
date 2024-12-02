const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  email: { type: String, required: true, index: true }, // Indexed for quicker search
  courseId: {
    type:String, required:true,
  },
  attendance: [{
    date: { type: Date, required: true, default: Date.now },
    students: [{ usn: { type: String, required: true } }],
    note: { type: String, default: '' } // Default empty string if no note is provided
  }]
}, { timestamps: true }); // Adds createdAt and updatedAt fields

module.exports = mongoose.model('Attendance', attendanceSchema);
