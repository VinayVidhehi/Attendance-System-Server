const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {userLogin, userSignup, userForgetPassword, handleStudentQuery, handleAddFacultyCourse, handleFetchFacultyCourses, fetchServerString, handleUpdateAttendance, handleViewAttendance, storeServerString, addBatch, handleViewStudentAttendance, handleAdminAddFaculty, handleFetchFacultyForAdmin, storeAccuracyLevels, streamAttendanceToStudents} = require('./router')
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

//all post requests here
app.post('/signup', userSignup);
app.post('/login', userLogin);
app.post('/forget-password', userForgetPassword);
app.post('/query', handleStudentQuery);
app.post('/add-course', handleAddFacultyCourse);
app.post('/update-attendance', handleUpdateAttendance);
app.post('/store-url', storeServerString);
app.post('/add-batch', addBatch);
app.post('/get-student-attendance', handleViewStudentAttendance);
app.post('/add-faculty', handleAdminAddFaculty);
app.post('/store-unmatched-student', storeAccuracyLevels);
app.post('/stream-attendance', streamAttendanceToStudents)

app.get('/get-courses', handleFetchFacultyCourses);
app.get('/server-string', fetchServerString);
app.get('/view-attendance', handleViewAttendance);
app.get('/fetch-faculty', handleFetchFacultyForAdmin);
app.get('/server', (req, res) => {
  res.json({message:"server is up", key:1});
})

app.get('/', (req, res) => {
  res.json({message:'Face recognition based attendance management system'})
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})