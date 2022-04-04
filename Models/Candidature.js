const mongoose = require("mongoose");
const schemacandidature = new mongoose.Schema({
    date: {
        type: String,
        required: true,
        trim: true,
    },
    lienentretien: {
        type: String,
        required: true,
        trim: true,
    },
    offre_emploi: {
        type: mongoose.Types.ObjectId,
        ref: 'offre_emploi',
        required: true
    }


},
    { timestamps: true }
);
module.exports = mongoose.model("Candidature", schemacandidature);