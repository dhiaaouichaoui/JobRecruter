const mongoose = require("mongoose");
const schemaentretien = new mongoose.Schema({
    date: {
        type: String,
        required: true,
        trim: true,
    },
    entreprise: {
        type: mongoose.Types.ObjectId,
        ref: 'Entreprise',
        required: true
    },
    candidat: {
        type: mongoose.Types.ObjectId,
        ref: 'Candidat',
        required: true
    }
 
},
    { timestamps: true }
);
module.exports = mongoose.model("Entretien", schemaentretien);