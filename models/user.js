const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: 
    { type: String, 
      required: true 
    },
    usn: 
    { type: String, 
      required: true, 
      unique: true 
    },
    phone: 
    { type: String, 
      required: true 
    },
    email: 
    { type: String, 
      required: true, 
      unique: true 
    },
    year: 
    { type: String, 
      required: true 
    },
    branch: 
    { type: String, 
      required: true 
    },
    answers: 
    [{ type: String }],

    totalScore: 
    { type: Number, 
      default: 0 
    },
});

module.exports = mongoose.model("User", userSchema);
