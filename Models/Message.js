const mongoose = require("mongoose");
const schemamessage = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    entreprise: {
        type: mongoose.Types.ObjectId,
        ref: 'Entreprise',
        required: true
    }


},
    { timestamps: true }
);
module.exports = mongoose.model("Message", schemamessage);