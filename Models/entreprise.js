const mongoose = require("mongoose");

const entrepriseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      unique: false,
    },

    address: {
      type: String,
      required: false,
    },
  
      phone: {
        type: String,
        required: false,
      },
      siteweb: {
        type: String,
        required: false,
      },
  
  
  
  
  
  
  

   
  }
);

//Export the model
module.exports = mongoose.model("Entreprise", entrepriseSchema);
