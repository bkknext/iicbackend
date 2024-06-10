const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Usermarks = require('../models/usermarks');

// Register 
router.post('/register', async (req, res) => {
  try {
    const { name, usn, phone, email, password, year, branch } = req.body;
    const newUser = new User({ name, usn, phone, email, password, year, branch });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message },"heyyyy");
    
  }
});

router.post('/', async (req, res) => {
  
    res.send("hello I m perfect");

});

router.post('/submit', async (req, res) => {
  try {
    const { name, usn, Score } = req.body;
    const newUsermrks = new Usermarks({ name, usn, Score });
    await newUsermrks.save();
    res.status(201).json(newUsermrks);
  } catch (error) {
    res.status(500).json({ error: error.message },"heyyyy");
    
  }
});


router.get('/students', async (req, res) => {
  try {
    const usermarks = await Usermarks.find();
    res.json(usermarks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//write login route here
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;