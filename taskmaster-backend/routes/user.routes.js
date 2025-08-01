const express = require('express');
const router = express.Router();
const User = require('../models/user.model'); // ✅ correct

 // your User model

// POST /api/users/register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: 'User not found' });

    // You should hash and compare passwords with bcrypt (for now, just plain)
    if (user.password !== password)
      return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
