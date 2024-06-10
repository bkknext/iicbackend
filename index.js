const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
// require('dotenv').config(); 

const app = express();
const PORT =5000;

app.use(cors());

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/quizApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));


app.use('/api/users', userRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


