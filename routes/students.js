// routes/students.js

const express = require('express');
const router = express.Router();
const Student = require('../models/usermarks'); // Assuming you have a Student model

// Endpoint to fetch students
router.get('/results', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
