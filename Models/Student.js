const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({

  s_id: Number,
  name: String,
  lastname: String,
  gender: String,
  faculty: String,
  gpa: Number,
  hometown: String,
});

const StudentModel = mongoose.model("Students", studentSchema,'student_record');

module.exports = StudentModel;
