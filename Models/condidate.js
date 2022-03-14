const mongoose = require("mongoose");

const condidateSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: false,
      unique: false,
    },

    address: {
      type: String,
      required: false,
    },
    schoollevel: {
        type: String,
        required: false,
      },
      picture: {
        type: String,
        required: false,
      },
      cv: {
        type: String,
        required: false,
      },
      git: {
        type: String,
        required: false,
      },
      linkedin: {
        type: String,
        required: false,
      },
      phone: {
        type: String,
        required: false,
      },
      biography: {
        type: String,
        required: false,
      },
  
  
  
  
  
  
  

   
  }
);

//Export the model
module.exports = mongoose.model("Condidate", condidateSchema);
