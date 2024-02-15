const userModel = require("../models/userModel");

const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({
      userId: req.body.userId,
      password: req.body.password,
      verified: true,
    });
    res.status(200).send("Login Successful");
  } catch (error) {
    console.log(error);
  }
};

const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.send("User Registered successfully");
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { loginController, registerController };
