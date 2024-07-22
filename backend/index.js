const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5001;

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("this is get api for /");
});

const connection_string = process.env.CONNECTION_STRING;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

mongoose
  .connect(connection_string)
  .then(() => {
    console.log("Connect to mongoose database.");
  })
  .catch((error) => {
    console.log("Failed to connect to mongoose database.", error.message);
  });
