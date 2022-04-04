const mongoose = require("mongoose");
const schemaoffre_emploi = mongoose.Schema({
    titre: {
        type: String,
        minlength: 4,
        required: true,
        trim: true,
    },
    ref: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    adresse: {
        type: String,
        minlength: 4,
        required: true,
        trim: true,
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:'Category',
        required:true,
    },
    // entreprise:{
    //     type:mongoose.Types.ObjectId,
    //     ref:'Entreprise',
    //     required:true,
    // },
    id_candidat:[{
        type: mongoose.Types.ObjectId,
        ref: 'Candidat'
    }],
   
},
{ timestamps: true }
);
module.exports = mongoose.model("offre_emploi", schemaoffre_emploi);