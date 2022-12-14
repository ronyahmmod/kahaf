const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const resultRouter = require("./routes/resultRoute");

const app = express();

/*
CONFIGURE APPLICATION MIDDLEWARE
*/

app.options(
  "*",
  cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 })
);

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// ROUTES CONFIGURATION

app.use("/api/v1/results", resultRouter);

module.exports = app;
