const { Schema, model } = require("mongoose");

const StudentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Student must have a name!"],
    min: [8, "Name at least 8 chars!"],
  },
  fatherName: {
    type: String,
    required: [true, "Student must have father name!"],
  },
  motherName: {
    type: String,
    required: [true, "Student must have mother name!"],
  },
});

module.exports = model("student", StudentSchema);
