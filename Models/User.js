const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: false,
    },

    firstname: {
      type: String,
      required: false,
    },

    lastname: {
      type: String,
      required: false,
    },

    picture: {
      type: String,
      required: false,
    },

    mobile: {
      type: String,
      required: false,
    },

    website: {
      type: String,
      required: false,
    },

    adress: {
      type: String,
      required: false,
    },

    confirmed: {
      type: Boolean,
      default: false,
    },


    role: {
      type: String,
      enum: ["candidat", "admin", "enterprise"],
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("User", userSchema);
