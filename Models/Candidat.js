const mongoose = require("mongoose");
const User = require("./User");
const schoolLevelSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        unique : true
    },
    year : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : false
    }
})
const schemacandidat = new mongoose.Schema({
    fullname: {
        type: String,
        minlength: 4,
        required: true,
        trim: true,
    },
  /*  cv: {
        type: String,
        minlength: 4,
        required: true,
        trim: true,
    },*/
    cin: {
        type: String,
        minlength: 4,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    git: {
        type: String,
        required: false,
    },
    linkedin: {
        type: String,
        required: false,
    },
    schoolLevel : {
        type : schoolLevelSchema,
        required : true
    },
   /* adresse:{
        type: String,
        required: true,
    },*/
  

 
},

    { timestamps: true }
);
module.exports = User.discriminator('Candidat', schemacandidat);