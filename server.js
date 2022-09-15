require("dotenv").config({
  path: "./config.env",
});
const app = require("./app");
const mongoose = require("mongoose");

const DB = mongoose
  .connect(
    process.env.DB_REMOTE_STRING.replace("<PASSWORD>", process.env.DB_PASSWORD)
  )
  .then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  })
  .catch((error) => {
    console.error(error);
  });
// console.log(process.env.PORT);
const port = process.env.PORT || 3006;
const server = app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT: ${process.env.PORT}`);
});
