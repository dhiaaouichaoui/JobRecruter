const mongoose = require("mongoose");
const schemacategory = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },


},
    { timestamps: true }
);
module.exports = mongoose.model("Category", schemacategory);