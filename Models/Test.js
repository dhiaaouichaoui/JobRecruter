const mongoose = require("mongoose");
const schematest = new mongoose.Schema({
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
    },
    offre_emploi: {
        type: mongoose.Types.ObjectId,
        ref: 'offre_emploi',
        required: true
    }
  


},
    { timestamps: true }
);
module.exports = mongoose.model("Test", schematest);