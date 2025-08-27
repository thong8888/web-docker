const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();


router.post("/register", async (req, res) => {
  try {
    const { username, password, phone, address, shopName, email } = req.body;

    const existingUser = await User.findOne({ 
      $or: [{ username }, { email }] 
    });
    if (existingUser) {
      return res.status(400).json({ message: "Username hoặc Email đã tồn tại" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      phone,
      address,
      shopName,
      email
    });

    await newUser.save();

    res.status(201).json({ message: "Đăng ký thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;


    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Sai username hoặc password" });


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Sai username hoặc password" });


    const token = jwt.sign(
      { id: user._id },
      "mysecretkey",   
      { expiresIn: "1h" }
    );

    res.json({ message: "Login thành công", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
