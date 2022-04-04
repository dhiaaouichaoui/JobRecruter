const mongoose = require("mongoose");
const User = require("./User");
const schemaentreprise = mongoose.Schema({
    fullname: {
        type: String,
        minlength: 4,
        required: true,
        trim: true,
    },
    adresse: {
        type: String,
        minlength: 4,
        required: true,
        trim: true,
    },
    specialite: {
        type: String,
        minlength: 4,
        required: true,
        trim: true,
    },
    siteweb: {
        type: String,
        minlength: 4,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        minlength: 4,
        required: true,
    }

},
    { timestamps: true }
);
module.exports = User.discriminator('Entreprise', schemaentreprise);