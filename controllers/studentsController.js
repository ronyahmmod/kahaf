const Student = require("../models/studentsModel");

exports.createStudent = async (req, res) => {
  console.log(req.body);
  const newStudent = new Student(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.status(200).json({
      status: "succeded",
      data: {
        data: savedStudent,
      },
    });
  } catch (error) {
    res.status(412).json({
      status: "failed",
      message: error.message,
      code: error.errorCode,

      error: { error },
    });
  }
};
