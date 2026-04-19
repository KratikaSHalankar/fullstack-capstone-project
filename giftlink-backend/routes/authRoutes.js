const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../config/db');

// ✅ REGISTER USER
router.post('/register', async (req, res) => {
  try {
    const db = await connectToDatabase();

    const { username, password } = req.body;

    // check if user already exists
    const existingUser = await db.collection('users').findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // insert new user
    const result = await db.collection('users').insertOne({
      username,
      password
    });

    res.json({ message: "User registered successfully", result });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ LOGIN USER
router.post('/login', async (req, res) => {
  try {
    const db = await connectToDatabase();

    const { username, password } = req.body;

    // ✅ REQUIRED for assignment (findOne)
    const user = await db.collection('users').findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
