const express = require("express");
const { userModel } = require("../model/user_Model.js");

const user_Router = express.Router();

user_Router.post("/", async (req, res) => {
  const { mob } = req.body;
  const data = await userModel.findOne({ mob });
  if (data) {
    return res.status(409).json({ message: "user is already present" });
  }

  const user = new userModel({ ...req.body });
  const details = await user.save();
  if (!details) {
    res.status(500).json({ message: "Internal Server Error" });
  }

  res.status(201).json({ message: "user created succesFully" });
});

user_Router.get("/:mob", async (req, res) => {
  const { mob } = req.params;
  const user = await userModel.findOne({ mob });
  console.log(user)
  if (!user) return res.status(404).json({ message: "user not found" });
  return res.status(409).json({ messgae: "user already present" });
});

module.exports = { user_Router };
