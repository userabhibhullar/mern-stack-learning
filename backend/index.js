const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("this is get api for /");
});

app.listen(PORT, () => {
  console.log(`Server started on port :${PORT}`);
});
