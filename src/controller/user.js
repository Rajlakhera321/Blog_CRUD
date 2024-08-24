const { userModel } = require("../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { omit } = require("lodash");

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const data = await userModel.findOne({ email });
    if (data) {
      return res.status(400).json({ message: "Email already exists" });
    }
    await userModel.create({
      username: name,
      email,
      password: await bcrypt.hash(password, 10),
    });
    return res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.userData)
    const data = await userModel.findOne({ email });
    if (data) {
      return res.status(400).json({ message: "Email already exists" });
    }
    await userModel.create({
      username: name,
      email,
      password: await bcrypt.hash(password, 10),
      role: 'admin'
    });
    return res.status(201).json({ message: "Admin account created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const generateToken = (user) => {
  return jwt.sign(
    {
      data: user,
    },
    process.env.JWT_SECRET,
    { expiresIn: "3d" }
  );
};

const login = async (req, res) => {
  try {
    const data = await userModel.findOne({ email: req.body.email });
    if (!data) {
      return res.status(404).json({ message: "Email not found" });
    }
    const checkPassword = await bcrypt.compare(
      req.body.password,
      data.password
    );
    if (!checkPassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    const userData = omit(JSON.parse(JSON.stringify(data)), "password");
    const token = generateToken(data);
    res.cookie('token', token)
    return res.status(200).json({
      message: "login successfully",
      token: token,
      userData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "you are logged out" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addUser,
  login,
  logout,
  addAdmin
};
