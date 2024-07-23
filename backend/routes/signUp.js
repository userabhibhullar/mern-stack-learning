const Joi = require("joi");
const express = require("express");
const router = express.Router();
const bcrpyt = require("bcrypt");
const { User } = require("../models/user");

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).email().required(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(500).send(error.details[0].message);

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).send("User with that email already exists...");

    const { name, email, password } = req.body;

    user = new User({ name, email, password });

    const salt = await bcrpyt.genSalt(10);
    user.password = await bcrpyt.hash(user.password, salt);

    await user.save();

    res.send("user created");
  } catch (error) {
    res.status(500).send(error.message);
    console.log("Error createing user", error.message);
  }
});

module.exports = router;