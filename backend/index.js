const todos = require("./routes/todos");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5001;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/todos", todos);

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
