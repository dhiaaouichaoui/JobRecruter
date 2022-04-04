const mongoose = require("mongoose");
const schemacommentaire = new mongoose.Schema({
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
    offre_emploi: {
        type: mongoose.Types.ObjectId,
        ref: 'offre_emploi',
        required: true
    }


},
    { timestamps: true }
);
module.exports = mongoose.model("Commentaire", schemacommentaire);