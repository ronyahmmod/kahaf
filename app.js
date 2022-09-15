const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const resultRouter = require("./routes/resultRoute");

const app = express();

/*
CONFIGURE APPLICATION MIDDLEWARE
*/
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
// ROUTES CONFIGURATION

app.use("/api/v1/results", resultRouter);

module.exports = app;
