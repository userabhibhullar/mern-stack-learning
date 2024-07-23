const express = require("express");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(200).email().required(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(500).send(error.details[0].message);

  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(400).send("User with that email does not exists...");

    const validpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validpassword)
      return res.status(401).send("Invalid email or password...");

    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      secret
    );
    res.send(token);
  } catch (error) {
    res.status(500).send(error.message);
    console.log("error sign in user", error.message);
  }
});

module.exports = router;
