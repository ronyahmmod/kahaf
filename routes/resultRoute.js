const { Router } = require("express");
const { createStudent } = require("../controllers/studentsController");

const resultRouter = Router();

resultRouter
  .route("/")
  .get((req, res) => {
    res.status(200).json({
      message: "Welcome to result server",
    });
  })
  .post(createStudent);

module.exports = resultRouter;
