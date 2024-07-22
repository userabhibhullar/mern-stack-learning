const express = require("express");
const { Todo } = require("../models/todo");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, author, isComplete, date, uid } = req.body;

  let todo = new Todo({
    name,
    author,
    isComplete,
    date,
    uid,
  });

  try {
    todo = await todo.save();
    res.send(todo);
  } catch (error) {
    res.status(500).send(error.message);
    console.log("error while creating a todo", error.message);
  }
});

module.exports = router;
