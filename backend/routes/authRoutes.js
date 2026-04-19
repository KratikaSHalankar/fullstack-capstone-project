const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

let users = [];

// Register
router.post("/api/register", (req, res) => {
  users.push(req.body);
  res.json({ message: "User registered successfully" });
});

// Login
router.post("/api/login", (req, res) => {
  const user = users.find(u => u.email === req.body.email);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const token = jwt.sign({ email: user.email }, "secret");
  res.json({ token });
});

// Update user
router.put("/api/user", (req, res) => {
  res.json({ message: "User updated successfully" });
});

module.exports = router;