const express = require('express');
const router = express.Router();
const Students = require('../models/students');
const Studentmarks = require('../models/studentmarks');

// Register 
router.post('/register', async (req, res) => {
  try {
    const { name, usn, phone, email, year, branch, cgpa } = req.body;
    const newStudent = new Students({ name, usn, phone, email, year, branch, cgpa });
    const savedUser = await newStudent.save();
    //await newStudent.save();
    console.log('User added successfully:', savedUser);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message },"heyyyy");
    
  }
});

router.post('/', (req, res) => {
  console.log("i m perfect");
    res.send("hello I m perfect");

});

router.post('/submit', async (req, res) => {
  try {
    const { name, usn, Score } = req.body;
    const newStudentmrks = new Studentmarks({ name, usn, Score });
    const savedmarks = await newStudentmrks.save();
    console.log('User added successfully:', savedmarks);
    res.status(201).json(newStudentmrks);
  } catch (error) {
    res.status(500).json({ error: error.message },"heyyyy");
    
  }
});


router.get('/students', async (req, res) => {
  try {
    // Use aggregation to join User and Usermarks collections based on usn
    const combinedData = await Student.aggregate([
      {
        $lookup: {
          from: "smarks", // The name of the Usermarks collection
          localField: "usn", // Field from the User collection
          foreignField: "usn", // Field from the Usermarks collection
          as: "studentmarkDetails" // Name of the new field with matched documents
        }
      },
      {
        $unwind: "$studentmarkDetails" // Deconstruct the array to include only matched documents
      }
    ]);

    res.json(combinedData);
  } 
  
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;