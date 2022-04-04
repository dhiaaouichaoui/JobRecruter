const mongoose = require("mongoose");
const schemaquestion = new mongoose.Schema({
    contenu: {
        type: String,
        required: true,
        trim: true,
    },
    test: {
        type: mongoose.Types.ObjectId,
        ref: 'Test',
        required: true
    }
  


},
    { timestamps: true }
);
module.exports = mongoose.model("Question", schemaquestion);